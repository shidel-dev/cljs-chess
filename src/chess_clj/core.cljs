(ns chess-clj.core
  (:require
    [chess-clj.view :as view :refer [render-board-state]]
    [chess-clj.game-logic :as logic :refer [create-click-stream]]))

;;helper functions --------------------------------------------------

(defn rotate-board [] (doall (apply map list @board-state)))

(defn change-turns [] (swap! board-state #(map reverse (reverse %))))

(view/render-board-state)

(logic/create-click-stream)
