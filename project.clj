(defproject chess-clj "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2311"]
                 [prismatic/dommy "1.0.0"] 
                 [com.cemerick/piggieback "0.1.3"]]

  :repl-options  {:nrepl-middleware  [cemerick.piggieback/wrap-cljs-repl]}

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :profiles {:user {:debug true}}

  :cljsbuild {
    :builds [{:id "chess-clj"
              :source-paths ["src"]
              :compiler {
                :output-to "chess_clj.js"
                :output-dir "out"
                :optimizations :none
                :source-map true}}]})
