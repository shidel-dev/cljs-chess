// Compiled by ClojureScript 0.0-2311
goog.provide('chess_clj.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('dommy.core');
goog.require('dommy.core');
cljs.core.enable_console_print_BANG_.call(null);
chess_clj.core.board_state = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"rook","rook",-351034693),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"knight","knight",-1883332680),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"bishop","bishop",230448704),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"queen","queen",-209486329),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"bishop","bishop",230448704)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"knight","knight",-1883332680)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"rook","rook",-351034693)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"black","black",1294279647)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.Keyword(null,"first-move","first-move",2040390165),true,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"rook","rook",-351034693),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"knight","knight",-1883332680),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"bishop","bishop",230448704),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"queen","queen",-209486329),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"bishop","bishop",230448704)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"knight","knight",-1883332680)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"piece","piece",1396691784),new cljs.core.Keyword(null,"rook","rook",-351034693)], null)], null)], null));
chess_clj.core.piece_codes = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"rook","rook",-351034693),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1294279647),"&#9820;",new cljs.core.Keyword(null,"white","white",-483998618),"&#9814;"], null),new cljs.core.Keyword(null,"knight","knight",-1883332680),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1294279647),"&#9822;",new cljs.core.Keyword(null,"white","white",-483998618),"&#9816;"], null),new cljs.core.Keyword(null,"bishop","bishop",230448704),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1294279647),"&#9821;",new cljs.core.Keyword(null,"white","white",-483998618),"&#9815;"], null),new cljs.core.Keyword(null,"king","king",-919970205),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1294279647),"&#9819;",new cljs.core.Keyword(null,"white","white",-483998618),"&#9813;"], null),new cljs.core.Keyword(null,"queen","queen",-209486329),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1294279647),"&#9818;",new cljs.core.Keyword(null,"white","white",-483998618),"&#9812;"], null),new cljs.core.Keyword(null,"pawn","pawn",1463425662),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),"&#9817;",new cljs.core.Keyword(null,"black","black",1294279647),"&#9823;"], null)], null);
chess_clj.core.chess_piece = (function chess_piece(piece,color){return ("<a href='#' class='"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,piece))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,color))+"'>"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,chess_clj.core.piece_codes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [piece,color], null)))+"</a>");
});
chess_clj.core.piece_click_handler = (function piece_click_handler(cell,c){return cljs.core.async.put_BANG_.call(null,c,cell);
});
chess_clj.core.id_to_cords = (function id_to_cords(id){return cljs.core.take.call(null,(2),cljs.core.map.call(null,parseInt,clojure.string.split.call(null,id,/\d/)));
});
chess_clj.core.id_to_cords.call(null,"20");
chess_clj.core.create_click_chan = (function create_click_chan(){var c = cljs.core.async.chan.call(null);var seq__12546_12550 = cljs.core.seq.call(null,dommy.utils.__GT_Array.call(null,document.querySelectorAll("td")));var chunk__12547_12551 = null;var count__12548_12552 = (0);var i__12549_12553 = (0);while(true){
if((i__12549_12553 < count__12548_12552))
{var cell_12554 = cljs.core._nth.call(null,chunk__12547_12551,i__12549_12553);dommy.core.listen_BANG_.call(null,cell_12554,new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__12546_12550,chunk__12547_12551,count__12548_12552,i__12549_12553,cell_12554,c){
return (function (e){return chess_clj.core.piece_click_handler.call(null,chess_clj.core.id_to_cords.call(null,dommy.core.attr.call(null,cell_12554,chess_clj.core.id)),c);
});})(seq__12546_12550,chunk__12547_12551,count__12548_12552,i__12549_12553,cell_12554,c))
);
{
var G__12555 = seq__12546_12550;
var G__12556 = chunk__12547_12551;
var G__12557 = count__12548_12552;
var G__12558 = (i__12549_12553 + (1));
seq__12546_12550 = G__12555;
chunk__12547_12551 = G__12556;
count__12548_12552 = G__12557;
i__12549_12553 = G__12558;
continue;
}
} else
{var temp__4126__auto___12559 = cljs.core.seq.call(null,seq__12546_12550);if(temp__4126__auto___12559)
{var seq__12546_12560__$1 = temp__4126__auto___12559;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12546_12560__$1))
{var c__5576__auto___12561 = cljs.core.chunk_first.call(null,seq__12546_12560__$1);{
var G__12562 = cljs.core.chunk_rest.call(null,seq__12546_12560__$1);
var G__12563 = c__5576__auto___12561;
var G__12564 = cljs.core.count.call(null,c__5576__auto___12561);
var G__12565 = (0);
seq__12546_12550 = G__12562;
chunk__12547_12551 = G__12563;
count__12548_12552 = G__12564;
i__12549_12553 = G__12565;
continue;
}
} else
{var cell_12566 = cljs.core.first.call(null,seq__12546_12560__$1);dommy.core.listen_BANG_.call(null,cell_12566,new cljs.core.Keyword(null,"click","click",1912301393),((function (seq__12546_12550,chunk__12547_12551,count__12548_12552,i__12549_12553,cell_12566,seq__12546_12560__$1,temp__4126__auto___12559,c){
return (function (e){return chess_clj.core.piece_click_handler.call(null,chess_clj.core.id_to_cords.call(null,dommy.core.attr.call(null,cell_12566,chess_clj.core.id)),c);
});})(seq__12546_12550,chunk__12547_12551,count__12548_12552,i__12549_12553,cell_12566,seq__12546_12560__$1,temp__4126__auto___12559,c))
);
{
var G__12567 = cljs.core.next.call(null,seq__12546_12560__$1);
var G__12568 = null;
var G__12569 = (0);
var G__12570 = (0);
seq__12546_12550 = G__12567;
chunk__12547_12551 = G__12568;
count__12548_12552 = G__12569;
i__12549_12553 = G__12570;
continue;
}
}
} else
{}
}
break;
}
return c;
});
chess_clj.core.click_stream_processor = (function click_stream_processor(c){var c__9406__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__9406__auto__){
return (function (){var f__9407__auto__ = (function (){var switch__9350__auto__ = ((function (c__9406__auto__){
return (function (state_12611){var state_val_12612 = (state_12611[(1)]);if((state_val_12612 === (7)))
{var inst_12602 = (state_12611[(2)]);var inst_12603 = console.log(inst_12602);var state_12611__$1 = (function (){var statearr_12613 = state_12611;(statearr_12613[(7)] = inst_12603);
return statearr_12613;
})();var statearr_12614_12627 = state_12611__$1;(statearr_12614_12627[(2)] = null);
(statearr_12614_12627[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12612 === (6)))
{var inst_12607 = (state_12611[(2)]);var state_12611__$1 = state_12611;var statearr_12615_12628 = state_12611__$1;(statearr_12615_12628[(2)] = inst_12607);
(statearr_12615_12628[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12612 === (5)))
{var state_12611__$1 = state_12611;var statearr_12616_12629 = state_12611__$1;(statearr_12616_12629[(2)] = null);
(statearr_12616_12629[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12612 === (4)))
{var state_12611__$1 = state_12611;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12611__$1,(7),c);
} else
{if((state_val_12612 === (3)))
{var inst_12609 = (state_12611[(2)]);var state_12611__$1 = state_12611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12611__$1,inst_12609);
} else
{if((state_val_12612 === (2)))
{var state_12611__$1 = state_12611;var statearr_12617_12630 = state_12611__$1;(statearr_12617_12630[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12612 === (1)))
{var state_12611__$1 = state_12611;var statearr_12619_12631 = state_12611__$1;(statearr_12619_12631[(2)] = null);
(statearr_12619_12631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__9406__auto__))
;return ((function (switch__9350__auto__,c__9406__auto__){
return (function() {
var state_machine__9351__auto__ = null;
var state_machine__9351__auto____0 = (function (){var statearr_12623 = [null,null,null,null,null,null,null,null];(statearr_12623[(0)] = state_machine__9351__auto__);
(statearr_12623[(1)] = (1));
return statearr_12623;
});
var state_machine__9351__auto____1 = (function (state_12611){while(true){
var ret_value__9352__auto__ = (function (){try{while(true){
var result__9353__auto__ = switch__9350__auto__.call(null,state_12611);if(cljs.core.keyword_identical_QMARK_.call(null,result__9353__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__9353__auto__;
}
break;
}
}catch (e12624){if((e12624 instanceof Object))
{var ex__9354__auto__ = e12624;var statearr_12625_12632 = state_12611;(statearr_12625_12632[(5)] = ex__9354__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12611);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12624;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9352__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12633 = state_12611;
state_12611 = G__12633;
continue;
}
} else
{return ret_value__9352__auto__;
}
break;
}
});
state_machine__9351__auto__ = function(state_12611){
switch(arguments.length){
case 0:
return state_machine__9351__auto____0.call(this);
case 1:
return state_machine__9351__auto____1.call(this,state_12611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__9351__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__9351__auto____0;
state_machine__9351__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__9351__auto____1;
return state_machine__9351__auto__;
})()
;})(switch__9350__auto__,c__9406__auto__))
})();var state__9408__auto__ = (function (){var statearr_12626 = f__9407__auto__.call(null);(statearr_12626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9406__auto__);
return statearr_12626;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9408__auto__);
});})(c__9406__auto__))
);
return c__9406__auto__;
});
chess_clj.core.render_board_state = (function render_board_state(){return cljs.core.doall.call(null,(function (){var iter__5545__auto__ = (function iter__12640(s__12641){return (new cljs.core.LazySeq(null,(function (){var s__12641__$1 = s__12641;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12641__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var x = cljs.core.first.call(null,xs__4624__auto__);var iterys__5541__auto__ = ((function (s__12641__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function iter__12642(s__12643){return (new cljs.core.LazySeq(null,((function (s__12641__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__12643__$1 = s__12643;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__12643__$1);if(temp__4126__auto____$1)
{var s__12643__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__12643__$2))
{var c__5543__auto__ = cljs.core.chunk_first.call(null,s__12643__$2);var size__5544__auto__ = cljs.core.count.call(null,c__5543__auto__);var b__12645 = cljs.core.chunk_buffer.call(null,size__5544__auto__);if((function (){var i__12644 = (0);while(true){
if((i__12644 < size__5544__auto__))
{var y = cljs.core._nth.call(null,c__5543__auto__,i__12644);cljs.core.chunk_append.call(null,b__12645,(function (){var dom_cell = document.getElementById((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));var data_cell = cljs.core.get_in.call(null,cljs.core.deref.call(null,chess_clj.core.board_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));var piece_html = ((cljs.core.empty_QMARK_.call(null,data_cell))?"":chess_clj.core.chess_piece.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(data_cell),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(data_cell)));return dommy.core.set_html_BANG_.call(null,dom_cell,piece_html);
})());
{
var G__12646 = (i__12644 + (1));
i__12644 = G__12646;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12645),iter__12642.call(null,cljs.core.chunk_rest.call(null,s__12643__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12645),null);
}
} else
{var y = cljs.core.first.call(null,s__12643__$2);return cljs.core.cons.call(null,(function (){var dom_cell = document.getElementById((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)));var data_cell = cljs.core.get_in.call(null,cljs.core.deref.call(null,chess_clj.core.board_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));var piece_html = ((cljs.core.empty_QMARK_.call(null,data_cell))?"":chess_clj.core.chess_piece.call(null,new cljs.core.Keyword(null,"piece","piece",1396691784).cljs$core$IFn$_invoke$arity$1(data_cell),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(data_cell)));return dommy.core.set_html_BANG_.call(null,dom_cell,piece_html);
})(),iter__12642.call(null,cljs.core.rest.call(null,s__12643__$2)));
}
} else
{return null;
}
break;
}
});})(s__12641__$1,x,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__12641__$1,x,xs__4624__auto__,temp__4126__auto__))
;var fs__5542__auto__ = cljs.core.seq.call(null,iterys__5541__auto__.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7)], null)));if(fs__5542__auto__)
{return cljs.core.concat.call(null,fs__5542__auto__,iter__12640.call(null,cljs.core.rest.call(null,s__12641__$1)));
} else
{{
var G__12647 = cljs.core.rest.call(null,s__12641__$1);
s__12641__$1 = G__12647;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__5545__auto__.call(null,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(2),(3),(4),(5),(6),(7)], null));
})());
});
chess_clj.core.render_board_state.call(null);
chess_clj.core.click_stream_processor.call(null,chess_clj.core.create_click_chan.call(null));
