(ns chess-clj.view
  (:require-macros  [cljs.core.async.macros :refer  [go-loop go]])
  (:require
    [chess-clj.values :as values]
    [dommy.core :as dom :refer-macros [sel sel1]]
    [cljs.core.async :refer  [<! >! chan]]))

(enable-console-print!)

(def piece-codes { :rook { :black "&#9820;" :white "&#9814;" } :knight { :black "&#9822;" :white "&#9816;"} :bishop { :black "&#9821;" :white "&#9815;"} :king { :black "&#9819;" :white "&#9813;" } :queen { :black "&#9818;" :white "&#9812;" } :pawn { :white "&#9817;" :black "&#9823;" }})

;; creates an html string for a chess-piece
(defn chess-piece [piece color]
  (str "<a href='#' class='" (name piece) " " (name color) "'>" (get-in piece-codes [piece color]) "</a>")) 

(defn rel-cords [cords]
  (if (= @values/current-turn :black) cords
    (let [[x y] cords] [(js/Math.abs (- x 7)), (js/Math.abs (- y 7))])))

;; sends the cell cords through chan on a click
(defn piece-click-handler [cell c]
  (let [data-cell (rel-cords cell)] (go (>! c data-cell))))

(defn highlight [cords]
  (let [highlighted-elems (dom/sel :.highlight)]
    (if highlighted-elems
      (doseq [elem highlighted-elems] (dom/remove-class! elem "highlight"))))
  (doseq [cord cords]
    (let [dom-cord (rel-cords cord)]
      (dom/add-class! (js/document.getElementById (apply str (reverse dom-cord))) "highlight"))))

;; create channel which clicks on board cells will be sent through
(defn create-click-chan []
 (let [c (chan)]
   (doseq [x [0 1 2 3 4 5 6 7]
           y [0 1 2 3 4 5 6 7]]
     (dom/listen! (js/document.getElementById (str x y)) :click
       (fn [e]
         (piece-click-handler [y x] c))))
   c))

(defn create-highlight-chan []
  (let [c (chan)]
    (go (while true
      (highlight (<! c))))
    c))

(defn render-board-state []
  (let [board (vec (map #(-> % reverse vec) (-> @values/board-state reverse vec)))]
    (doseq [x [0 1 2 3 4 5 6 7]
          y [0 1 2 3 4 5 6 7]]
    (let [dom-cell (js/document.getElementById (str y x))
          data-cell (get-in board [x y])
          piece-html (if (empty? data-cell) "" (chess-piece (:piece data-cell) (:color data-cell)))]
      (dom/set-html! dom-cell piece-html))))

  (let [highlighted-elems (dom/sel :.highlight)]
    (if highlighted-elems
      (doseq [elem highlighted-elems] (dom/remove-class! elem "highlight")))))
