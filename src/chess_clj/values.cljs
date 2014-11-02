(ns chess-clj.values)

(def board-state
  (atom [[{:piece :rook :color :white} {:piece :knight :color :white} {:piece :bishop :color :white} {:piece :king :color :white} {:piece :queen :color :white}  {:color :white :piece :bishop}  {:color :white :piece :knight}  {:color :white :piece :rook}]
            [{:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white} {:piece :pawn :first-move true :color :white}{:piece :pawn :first-move true :color :white}{:piece :pawn :first-move true :color :white}]
            [{} {} {} {} {} {} {} {}]
            [{} {} {} {} {} {} {} {}]
            [{} {} {} {} {} {} {} {}]
            [{} {} {} {} {} {} {} {}]
            [{:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black} {:piece :pawn :first-move true :color :black}{:piece :pawn :first-move true :color :black}{:piece :pawn :first-move true :color :black}]
            [{:piece :rook :color :black} {:piece :knight :color :black} {:piece :bishop :color :black} {:piece :king :color :black} {:piece :queen :color :black}  {:color :black :piece :bishop}  {:color :black :piece :knight}  {:color :black :piece :rook}]]))

(def current-turn (atom :white))

(def selected-piece (atom false)) 
