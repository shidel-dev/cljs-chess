(ns chess-clj.core
  (:require
    [chess-clj.view :as view :refer [render-board-state]]
    [chess-clj.game-logic :as logic :refer [create-click-stream]]))

(view/render-board-state)

(logic/create-click-stream)
