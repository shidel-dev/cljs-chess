(ns chess-clj.game-logic
  (:require-macros  [cljs.core.async.macros :refer  [go-loop go]])
  (:require
    [chess-clj.values :as values]
    [chess-clj.view :as view :refer [render-board-state create-click-chan create-highlight-chan]]
    [cljs.core.async :refer [<! >! chan]]))

(enable-console-print!)

(def opp-color {:black :white :white :black})

(def highlight-chan (view/create-highlight-chan))

(defn take-while-valid [cords]
  (let [[head tail]
    (split-with
      (fn [cord]
       (let [cell (get-in @values/board-state cord)]
         (and (empty? cell) (not= nil cell)))) cords)]
    (cond (empty? tail) head
          (=
            (opp-color (:color @values/selected-piece))
            (:color (get-in @values/board-state (first tail))))
          (conj head (first tail))
          :else head)))

(defn pawn-corner-attacks [cell cords]
  (for [corner [[(inc (first cords)) (inc (second cords))] [(inc (first cords)) (dec (second cords))]]
        :when (= (opp-color (:color cell)) (:color (get-in @values/board-state corner)))]
    corner))

(defn pawn-moves [cell cords]
  (into (pawn-corner-attacks cell cords)
   (filter #(let [c (get-in @values/board-state %)] (and (empty? c) (not= nil c)))
    (let [[y x] cords]
      (if (:first-move cell) [[(inc y) x] [(+ 2 y) x]]
        [[(inc y) x]])))))

(defn knight-moves [cell cords]
  (filter
    #(let [c (get-in @values/board-state %)]
      (and (not= nil c) (not= (:color c) (:color cell))))
    (doall
      (for [x [-1 -2 1 2]
            y [-1 -2 1 2]
          :when (not= (js/Math.abs x) (js/Math.abs y))]
      [(+ y (first cords)) (+ x (second cords))]))))

(defn rook-moves [cell cords]
  (apply concat
    (filter (complement empty?)
      (map take-while-valid
        (let [y-val (fn [y] [y (second cords)])
              x-val (fn [x] [(first cords) x])]
          [(map y-val (range (dec (first cords)) -1 -1)) (map y-val (range (inc (first cords)) 8))
           (map x-val (range (dec (second cords)) -1 -1)) (map x-val (range (inc (second cords)) 8))])))))

(defn bishop-moves [cell cords]
  (apply concat
    (filter (complement empty?)
      (map take-while-valid
        (for [m [[1 1] [-1 1] [1 -1] [-1 -1]]]
          (for [i (range 1 8)]
            [(+ (first cords) (* i (first m))) (+ (second cords) (* i (second m)))]))))))

(defn queen-moves [cell cords]
  (distinct (concat (bishop-moves cell cords) (rook-moves cell cords))))

(defn king-moves [cell cords]
  (filter
   #(let [c (get-in @values/board-state %)]
        (and (not= nil c) (not= (:color c) (:color cell))))
    (doall
      (for [x [0 1 -1]
            y [0 1 -1]]
        [(+ y (first cords)) (+ x (second cords))]))))

(def move-fn
  { :pawn pawn-moves
    :knight knight-moves
    :rook rook-moves
    :bishop bishop-moves
    :queen queen-moves
    :king king-moves })

(defn get-moves [cell cords]
  ((move-fn (:piece cell)) cell cords))

(defn make-move [cell cords]
  (swap! values/board-state (fn [board]
    (-> board
        (assoc-in cords (dissoc @values/selected-piece :position :first-move))
        (assoc-in (:position @values/selected-piece) {}))))
  (swap! values/selected-piece (fn [p] false))
  (values/change-turns))

(defn make-or-reject-move [cell cords]
  (if (some #{cords} (get-moves @values/selected-piece (:position @values/selected-piece)))
    (make-move cell cords))
  (view/render-board-state))

(defn highlight-moves [cell cords]
  (swap! values/selected-piece #(assoc (get-in @values/board-state cords) :position cords))
  (go (>! highlight-chan (get-moves cell cords))))

(defn make-or-present-move [cords]
  (let [cell (get-in @values/board-state cords)]
    (println @values/board-state)
    (cond
      (and (or (= (opp-color (:color @values/selected-piece)) (:color cell)) (empty? cell)) (not= false @values/selected-piece)) (make-or-reject-move cell cords)
      (and (not (empty? cell)) (= @values/current-turn (:color cell))) (highlight-moves cell cords))))

;; takes clicks off of channel
(defn create-click-stream []
  (let [c (view/create-click-chan)]
    (go (while true
      (make-or-present-move (<! c))))))
