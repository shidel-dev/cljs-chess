(ns chess-clj.core
  (:require
    [dommy.core :as dom :refer-macros [sel sel1]]))

(enable-console-print!)

(def board-state
  (atom [[{:piece :rook :color :black} {:piece :knight :color :black} {:piece :bishop :color :black} {:piece :king :color :black} {:piece :queen :color :black}  {:color :black :piece :bishop}  {:color :black :piece :knight}  {:color :black :piece :rook}]
            [{:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black}{:piece :pawn :first-move true :color :black}{:piece :pawn :first-move true :color :black}]
            [{} {} {} {} {} {} {} {}]
            [{} {} {} {} {} {} {} {}]
            [{} {} {} {} {} {} {} {}]
            [{} {} {} {} {} {} {} {}]
            [{:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white}{:piece :pawn :first-move true :color :white}{:piece :pawn :first-move true :color :white}]
            [{:piece :rook :color :white} {:piece :knight :color :white} {:piece :bishop :color :white} {:piece :king :color :white} {:piece :queen :color :white}  {:color :white :piece :bishop}  {:color :white :piece :knight}  {:color :white :piece :rook}]]))

(def piece-codes { :rook { :black "&#9820;" :white "&#9814;" } :knight { :black "&#9822;" :white "&#9816;"} :bishop { :black "&#9821;" :white "&#9815;"} :king { :black "&#9819;" :white "&#9813;" } :queen { :black "&#9818;" :white "&#9812;" } :pawn { :white "&#9817;" :black "&#9823;" }})

(defn chess-piece [piece color]
  (str "<a href='#' class='" (name piece) " " (name color) "'>" (get-in piece-codes [piece color]) "</a>"))

(defn render-board-state []
  (doall (for [x [0 1 2 3 4 5 6 7]
               y [0 1 2 3 4 5 6 7]]
    (let [dom-cell (js/document.getElementById (str y x))
          data-cell (get-in @board-state [x y])
          piece-html (if (empty? data-cell) "" (chess-piece (:piece data-cell) (:color data-cell)))]
      (println data-cell)
      (dom/set-html! dom-cell piece-html)))))

(chess-piece :bishop :black)


(js/document.body.addEventListener "load" render-board-state)
