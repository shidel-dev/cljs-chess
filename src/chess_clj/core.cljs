(ns chess-clj.core
  (:require-macros  [cljs.core.async.macros :refer  [go]])
  (:require
    [dommy.core :as dom :refer-macros [sel sel1]]
    [cljs.core.async :refer  [<! put! chan]]))

(enable-console-print!)

;;values -------------------------------------------------------------

(def board-state
  (atom [[{:piece :rook :color :white} {:piece :knight :color :white} {:piece :bishop :color :white} {:piece :king :color :white} {:piece :queen :color :white}  {:color :white :piece :bishop}  {:color :white :piece :knight}  {:color :white :piece :rook}]
            [{:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white}{:piece :pawn :first-move true :color :white}{:piece :pawn :first-move true :color :white}]
            [{} {} {} {} {} {} {} {}]
            [{} {} {} {} {} {} {} {}]
            [{} {} {} {} {} {} {} {}]
            [{} {} {} {} {} {} {} {}]
            [{:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black}{:piece :pawn :first-move true :color :black}{:piece :pawn :first-move true :color :black}]
            [{:piece :rook :color :black} {:piece :knight :color :black} {:piece :bishop :color :black} {:piece :king :color :black} {:piece :queen :color :black}  {:color :black :piece :bishop}  {:color :black :piece :knight}  {:color :black :piece :rook}]]))

(def piece-codes { :rook { :black "&#9820;" :white "&#9814;" } :knight { :black "&#9822;" :white "&#9816;"} :bishop { :black "&#9821;" :white "&#9815;"} :king { :black "&#9819;" :white "&#9813;" } :queen { :black "&#9818;" :white "&#9812;" } :pawn { :white "&#9817;" :black "&#9823;" }})

(def current-turn (atom :white))

(def selected-piece (atom false))

;;helper functions --------------------------------------------------

;; creates an html string for a chess-piece
(defn chess-piece [piece color]
  (str "<a href='#' class='" (name piece) " " (name color) "'>" (get-in piece-codes [piece color]) "</a>"))

(defn highlight [cords]
  (let [highlighted-elems (dom/sel :.highlight)]
    (if highlighted-elems
      (doseq [elem highlighted-elems] (dom/remove-class! elem "highlight"))))
  (doseq [cord cords]
    (let [dom-cord (rel-cords cord)]
      (dom/add-class! (js/document.getElementById (apply str (reverse dom-cord))) "highlight"))))

(defn rotate-board [] (doall (apply map list @board-state)))

(defn change-turns [] (swap! board-state #(map reverse (reverse %))))

(def opp-color {:black :white :white :black})

(defn rel-cords [cords]
  (if (= @current-turn :black) cords
    (let [[x y] cords] [(js/Math.abs (- x 7)), (js/Math.abs (- y 7))])))

(defn take-while-valid [cords]
  (let [[head tail]
    (split-with
      (fn [cord]
       (let [cell (get-in @board-state cord)]
         (and (empty? cell) (not= nil cell)))) cords)]
    (if (empty? tail) head  (conj head (first tail)))))

;; click stream ---------------------------------------------------

;; sends the cell cords through chan on a click
(defn piece-click-handler [cell c]
  (let [data-cell (rel-cords cell)] (put! c data-cell)))

;; create channel which clicks on board cells will be sent through
(defn create-click-chan []
 (let [c (chan)]
   (doseq [x [0 1 2 3 4 5 6 7]
           y [0 1 2 3 4 5 6 7]]
     (dom/listen! (js/document.getElementById (str x y)) :click
       (fn [e]
         (piece-click-handler [y x] c))))
   c))

;; takes clicks off of channel
(defn click-stream-processor [c]
  (go
    (while true
      (make-or-present-move (<! c)))))

;; game logic ------------------------------------------------------

(defn pawn-corner-attacks [cell cords]
  (for [corner [[(inc (first cords)) (inc (second cords))] [(inc (first cords)) (dec (second cords))]]
        :when (= (opp-color (:color cell)) (:color (get-in @board-state corner)))]
    corner))

(defn pawn-moves [cell cords]
  (into (pawn-corner-attacks cell cords)
   (filter #(let [c (get-in @board-state %)] (and (empty? c) (not= nil c)))
    (let [[y x] cords]
      (if (:first-move cell) [[(inc y) x] [(+ 2 y) x]]
        [[(inc y) x]])))))

(defn knight-moves [cell cords]
    (filter
      #(let [c (get-in @board-state %)]
        (and (not= nil c) (not= (:color c) (:color cell))))
      (doall
        (for [x [-1 -2 1 2]
              y [-1 -2 1 2]
            :when (not= (js/Math.abs x) (js/Math.abs y))]
        [(+ y (first cords)) (+ x (second cords))]))))

(def move-fn
  {:pawn pawn-moves :knight knight-moves})

(defn make-move [cell cords]
  (swap! board-state (fn [board]
    (-> board
        (assoc-in cords (dissoc @selected-piece :position :first-move))
        (assoc-in (:position @selected-piece) {}))))
  (swap! selected-piece (fn [p] false)))

(defn make-or-reject-move [cell cords]
  (if (some #{cords} (get-moves @selected-piece (:position @selected-piece)))
    (make-move cell cords))
  (render-board-state))

(defn get-moves [cell cords]
  ((move-fn (:piece cell)) cell cords))

(defn highlight-moves [cell cords]
  (swap! selected-piece #(assoc (get-in @board-state cords) :position cords))
  (highlight (get-moves cell cords)))

(defn make-or-present-move [cords]
  (let [cell (get-in @board-state cords)]
    (cond
      (and (empty? cell) (not= false @selected-piece)) (make-or-reject-move cell cords)
      (and (not (empty? cell)) (= @current-turn (:color cell))) (highlight-moves cell cords))))

;; display logic --------------------------------------------------

(defn render-board-state []
  (let [board (vec (map #(-> % reverse vec) (-> @board-state reverse vec)))]
    (doseq [x [0 1 2 3 4 5 6 7]
          y [0 1 2 3 4 5 6 7]]
    (let [dom-cell (js/document.getElementById (str y x))
          data-cell (get-in board [x y])
          piece-html (if (empty? data-cell) "" (chess-piece (:piece data-cell) (:color data-cell)))]
      (dom/set-html! dom-cell piece-html))))

  (let [highlighted-elems (dom/sel :.highlight)]
    (if highlighted-elems
      (doseq [elem highlighted-elems] (dom/remove-class! elem "highlight")))))

(render-board-state)
(click-stream-processor (create-click-chan))
