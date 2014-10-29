// Compiled by ClojureScript 0.0-2311
goog.provide('dommy.core');
goog.require('cljs.core');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('dommy.utils');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Returns a selector in string format.
* Accepts string, keyword, or collection.
*/
dommy.core.selector = (function selector(data){if(cljs.core.coll_QMARK_.call(null,data))
{return clojure.string.join.call(null," ",cljs.core.map.call(null,selector,data));
} else
{if((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))
{return cljs.core.name.call(null,data);
} else
{return null;
}
}
});
dommy.core.text = (function text(elem){var or__4820__auto__ = elem.textContent;if(cljs.core.truth_(or__4820__auto__))
{return or__4820__auto__;
} else
{return elem.innerText;
}
});
dommy.core.html = (function html(elem){return elem.innerHTML;
});
dommy.core.value = (function value(elem){return elem.value;
});
dommy.core.class$ = (function class$(elem){return elem.className;
});
dommy.core.attr = (function attr(elem,k){if(cljs.core.truth_(k))
{return elem.getAttribute(dommy.utils.as_str.call(null,k));
} else
{return null;
}
});
/**
* The computed style of `elem`, optionally specifying the key of
* a particular style to return
*/
dommy.core.style = (function() {
var style = null;
var style__1 = (function (elem){return cljs.core.js__GT_clj.call(null,window.getComputedStyle(elem));
});
var style__2 = (function (elem,k){return (window.getComputedStyle(elem)[dommy.utils.as_str.call(null,k)]);
});
style = function(elem,k){
switch(arguments.length){
case 1:
return style__1.call(this,elem);
case 2:
return style__2.call(this,elem,k);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$core$IFn$_invoke$arity$1 = style__1;
style.cljs$core$IFn$_invoke$arity$2 = style__2;
return style;
})()
;
dommy.core.px = (function px(elem,k){var pixels = dommy.core.style.call(null,elem,k);if(cljs.core.seq.call(null,pixels))
{return parseInt(pixels);
} else
{return null;
}
});
/**
* Does `elem` contain `c` in its class list
*/
dommy.core.has_class_QMARK_ = (function has_class_QMARK_(elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto__ = elem.classList;if(cljs.core.truth_(temp__4124__auto__))
{var class_list = temp__4124__auto__;return class_list.contains(c__$1);
} else
{var temp__4126__auto__ = dommy.core.class$.call(null,elem);if(cljs.core.truth_(temp__4126__auto__))
{var class_name = temp__4126__auto__;var temp__4126__auto____$1 = dommy.utils.class_index.call(null,class_name,c__$1);if(cljs.core.truth_(temp__4126__auto____$1))
{var i = temp__4126__auto____$1;return (i >= (0));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
*/
dommy.core.hidden_QMARK_ = (function hidden_QMARK_(elem){return (dommy.core.style.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
* Returns a map of the bounding client rect of `elem`
* as a map with [:top :left :right :bottom :width :height]
*/
dommy.core.bounding_client_rect = (function bounding_client_rect(elem){var r = elem.getBoundingClientRect();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function parent(elem){return elem.parentNode;
});
dommy.core.children = (function children(elem){return elem.children;
});
/**
* Lazy seq of the ancestors of `elem`
*/
dommy.core.ancestors = (function ancestors(elem){return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
* Returns a predicate on nodes that match `selector` at the
* time of this `matches-pred` call (may return outdated results
* if you fuck with the DOM)
*/
dommy.core.matches_pred = (function() {
var matches_pred = null;
var matches_pred__1 = (function (selector){return matches_pred.call(null,document,selector);
});
var matches_pred__2 = (function (base,selector){var matches = dommy.utils.__GT_Array.call(null,base.querySelectorAll(dommy.core.selector.call(null,selector)));return ((function (matches){
return (function (elem){return (matches.indexOf(elem) >= (0));
});
;})(matches))
});
matches_pred = function(base,selector){
switch(arguments.length){
case 1:
return matches_pred__1.call(this,base);
case 2:
return matches_pred__2.call(this,base,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
matches_pred.cljs$core$IFn$_invoke$arity$1 = matches_pred__1;
matches_pred.cljs$core$IFn$_invoke$arity$2 = matches_pred__2;
return matches_pred;
})()
;
/**
* Closest ancestor of `elem` (up to `base`, if provided)
* that matches `selector`
*/
dommy.core.closest = (function() {
var closest = null;
var closest__2 = (function (elem,selector){return closest.call(null,document.body,elem,selector);
});
var closest__3 = (function (base,elem,selector){return cljs.core.first.call(null,cljs.core.filter.call(null,dommy.core.matches_pred.call(null,base,selector),cljs.core.take_while.call(null,(function (p1__8431_SHARP_){return !((p1__8431_SHARP_ === base));
}),dommy.core.ancestors.call(null,elem))));
});
closest = function(base,elem,selector){
switch(arguments.length){
case 2:
return closest__2.call(this,base,elem);
case 3:
return closest__3.call(this,base,elem,selector);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
closest.cljs$core$IFn$_invoke$arity$2 = closest__2;
closest.cljs$core$IFn$_invoke$arity$3 = closest__3;
return closest;
})()
;
/**
* Is `descendant` a descendant of `ancestor`?
* (http://goo.gl/T8pgCX)
*/
dommy.core.descendant_QMARK_ = (function descendant_QMARK_(descendant,ancestor){if(cljs.core.truth_(ancestor.contains))
{return ancestor.contains(descendant);
} else
{if(cljs.core.truth_(ancestor.compareDocumentPosition))
{return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else
{return null;
}
}
});
/**
* Set the textContent of `elem` to `text`, fall back to innerText
*/
dommy.core.set_text_BANG_ = (function set_text_BANG_(elem,text){if(!((void 0 === elem.textContent)))
{elem.textContent = text;
} else
{elem.innerText = text;
}
return elem;
});
/**
* Set the innerHTML of `elem` to `html`
*/
dommy.core.set_html_BANG_ = (function set_html_BANG_(elem,html){elem.innerHTML = html;
return elem;
});
/**
* Set the value of `elem` to `value`
*/
dommy.core.set_value_BANG_ = (function set_value_BANG_(elem,value){elem.value = value;
return elem;
});
/**
* Set the css class of `elem` to `elem`
*/
dommy.core.set_class_BANG_ = (function set_class_BANG_(elem,c){return elem.className = c;
});
/**
* Set the style of `elem` using key-value pairs:
* 
* (set-style! elem :display "block" :color "red")
* @param {...*} var_args
*/
dommy.core.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var style = elem.style;var seq__8438_8444 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__8439_8445 = null;var count__8440_8446 = (0);var i__8441_8447 = (0);while(true){
if((i__8441_8447 < count__8440_8446))
{var vec__8442_8448 = cljs.core._nth.call(null,chunk__8439_8445,i__8441_8447);var k_8449 = cljs.core.nth.call(null,vec__8442_8448,(0),null);var v_8450 = cljs.core.nth.call(null,vec__8442_8448,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_8449),v_8450);
{
var G__8451 = seq__8438_8444;
var G__8452 = chunk__8439_8445;
var G__8453 = count__8440_8446;
var G__8454 = (i__8441_8447 + (1));
seq__8438_8444 = G__8451;
chunk__8439_8445 = G__8452;
count__8440_8446 = G__8453;
i__8441_8447 = G__8454;
continue;
}
} else
{var temp__4126__auto___8455 = cljs.core.seq.call(null,seq__8438_8444);if(temp__4126__auto___8455)
{var seq__8438_8456__$1 = temp__4126__auto___8455;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8438_8456__$1))
{var c__5576__auto___8457 = cljs.core.chunk_first.call(null,seq__8438_8456__$1);{
var G__8458 = cljs.core.chunk_rest.call(null,seq__8438_8456__$1);
var G__8459 = c__5576__auto___8457;
var G__8460 = cljs.core.count.call(null,c__5576__auto___8457);
var G__8461 = (0);
seq__8438_8444 = G__8458;
chunk__8439_8445 = G__8459;
count__8440_8446 = G__8460;
i__8441_8447 = G__8461;
continue;
}
} else
{var vec__8443_8462 = cljs.core.first.call(null,seq__8438_8456__$1);var k_8463 = cljs.core.nth.call(null,vec__8443_8462,(0),null);var v_8464 = cljs.core.nth.call(null,vec__8443_8462,(1),null);style.setProperty(dommy.utils.as_str.call(null,k_8463),v_8464);
{
var G__8465 = cljs.core.next.call(null,seq__8438_8456__$1);
var G__8466 = null;
var G__8467 = (0);
var G__8468 = (0);
seq__8438_8444 = G__8465;
chunk__8439_8445 = G__8466;
count__8440_8446 = G__8467;
i__8441_8447 = G__8468;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_style_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_style_BANG___delegate.call(this,elem,kvs);};
set_style_BANG_.cljs$lang$maxFixedArity = 1;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__8469){
var elem = cljs.core.first(arglist__8469);
var kvs = cljs.core.rest(arglist__8469);
return set_style_BANG___delegate(elem,kvs);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* @param {...*} var_args
*/
dommy.core.set_px_BANG_ = (function() { 
var set_px_BANG___delegate = function (elem,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__8476_8482 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),kvs));var chunk__8477_8483 = null;var count__8478_8484 = (0);var i__8479_8485 = (0);while(true){
if((i__8479_8485 < count__8478_8484))
{var vec__8480_8486 = cljs.core._nth.call(null,chunk__8477_8483,i__8479_8485);var k_8487 = cljs.core.nth.call(null,vec__8480_8486,(0),null);var v_8488 = cljs.core.nth.call(null,vec__8480_8486,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_8487,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_8488)+"px"));
{
var G__8489 = seq__8476_8482;
var G__8490 = chunk__8477_8483;
var G__8491 = count__8478_8484;
var G__8492 = (i__8479_8485 + (1));
seq__8476_8482 = G__8489;
chunk__8477_8483 = G__8490;
count__8478_8484 = G__8491;
i__8479_8485 = G__8492;
continue;
}
} else
{var temp__4126__auto___8493 = cljs.core.seq.call(null,seq__8476_8482);if(temp__4126__auto___8493)
{var seq__8476_8494__$1 = temp__4126__auto___8493;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8476_8494__$1))
{var c__5576__auto___8495 = cljs.core.chunk_first.call(null,seq__8476_8494__$1);{
var G__8496 = cljs.core.chunk_rest.call(null,seq__8476_8494__$1);
var G__8497 = c__5576__auto___8495;
var G__8498 = cljs.core.count.call(null,c__5576__auto___8495);
var G__8499 = (0);
seq__8476_8482 = G__8496;
chunk__8477_8483 = G__8497;
count__8478_8484 = G__8498;
i__8479_8485 = G__8499;
continue;
}
} else
{var vec__8481_8500 = cljs.core.first.call(null,seq__8476_8494__$1);var k_8501 = cljs.core.nth.call(null,vec__8481_8500,(0),null);var v_8502 = cljs.core.nth.call(null,vec__8481_8500,(1),null);dommy.core.set_style_BANG_.call(null,elem,k_8501,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_8502)+"px"));
{
var G__8503 = cljs.core.next.call(null,seq__8476_8494__$1);
var G__8504 = null;
var G__8505 = (0);
var G__8506 = (0);
seq__8476_8482 = G__8503;
chunk__8477_8483 = G__8504;
count__8478_8484 = G__8505;
i__8479_8485 = G__8506;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var set_px_BANG_ = function (elem,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return set_px_BANG___delegate.call(this,elem,kvs);};
set_px_BANG_.cljs$lang$maxFixedArity = 1;
set_px_BANG_.cljs$lang$applyTo = (function (arglist__8507){
var elem = cljs.core.first(arglist__8507);
var kvs = cljs.core.rest(arglist__8507);
return set_px_BANG___delegate(elem,kvs);
});
set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_px_BANG___delegate;
return set_px_BANG_;
})()
;
/**
* Sets dom attributes on and returns `elem`.
* Attributes without values will be set to "true":
* 
* (set-attr! elem :disabled)
* 
* With values, the function takes variadic kv pairs:
* 
* (set-attr! elem :id "some-id"
* :name "some-name")
* @param {...*} var_args
*/
dommy.core.set_attr_BANG_ = (function() {
var set_attr_BANG_ = null;
var set_attr_BANG___2 = (function (elem,k){return set_attr_BANG_.call(null,elem,k,"true");
});
var set_attr_BANG___3 = (function (elem,k,v){var k__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(v))
{if(cljs.core.fn_QMARK_.call(null,v))
{var G__8516 = elem;(G__8516[k__$1] = v);
return G__8516;
} else
{var G__8517 = elem;G__8517.setAttribute(k__$1,v);
return G__8517;
}
} else
{return null;
}
});
var set_attr_BANG___4 = (function() { 
var G__8524__delegate = function (elem,k,v,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
var seq__8518_8525 = cljs.core.seq.call(null,cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.call(null,(2),kvs)));var chunk__8519_8526 = null;var count__8520_8527 = (0);var i__8521_8528 = (0);while(true){
if((i__8521_8528 < count__8520_8527))
{var vec__8522_8529 = cljs.core._nth.call(null,chunk__8519_8526,i__8521_8528);var k_8530__$1 = cljs.core.nth.call(null,vec__8522_8529,(0),null);var v_8531__$1 = cljs.core.nth.call(null,vec__8522_8529,(1),null);set_attr_BANG_.call(null,elem,k_8530__$1,v_8531__$1);
{
var G__8532 = seq__8518_8525;
var G__8533 = chunk__8519_8526;
var G__8534 = count__8520_8527;
var G__8535 = (i__8521_8528 + (1));
seq__8518_8525 = G__8532;
chunk__8519_8526 = G__8533;
count__8520_8527 = G__8534;
i__8521_8528 = G__8535;
continue;
}
} else
{var temp__4126__auto___8536 = cljs.core.seq.call(null,seq__8518_8525);if(temp__4126__auto___8536)
{var seq__8518_8537__$1 = temp__4126__auto___8536;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8518_8537__$1))
{var c__5576__auto___8538 = cljs.core.chunk_first.call(null,seq__8518_8537__$1);{
var G__8539 = cljs.core.chunk_rest.call(null,seq__8518_8537__$1);
var G__8540 = c__5576__auto___8538;
var G__8541 = cljs.core.count.call(null,c__5576__auto___8538);
var G__8542 = (0);
seq__8518_8525 = G__8539;
chunk__8519_8526 = G__8540;
count__8520_8527 = G__8541;
i__8521_8528 = G__8542;
continue;
}
} else
{var vec__8523_8543 = cljs.core.first.call(null,seq__8518_8537__$1);var k_8544__$1 = cljs.core.nth.call(null,vec__8523_8543,(0),null);var v_8545__$1 = cljs.core.nth.call(null,vec__8523_8543,(1),null);set_attr_BANG_.call(null,elem,k_8544__$1,v_8545__$1);
{
var G__8546 = cljs.core.next.call(null,seq__8518_8537__$1);
var G__8547 = null;
var G__8548 = (0);
var G__8549 = (0);
seq__8518_8525 = G__8546;
chunk__8519_8526 = G__8547;
count__8520_8527 = G__8548;
i__8521_8528 = G__8549;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__8524 = function (elem,k,v,var_args){
var kvs = null;if (arguments.length > 3) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return G__8524__delegate.call(this,elem,k,v,kvs);};
G__8524.cljs$lang$maxFixedArity = 3;
G__8524.cljs$lang$applyTo = (function (arglist__8550){
var elem = cljs.core.first(arglist__8550);
arglist__8550 = cljs.core.next(arglist__8550);
var k = cljs.core.first(arglist__8550);
arglist__8550 = cljs.core.next(arglist__8550);
var v = cljs.core.first(arglist__8550);
var kvs = cljs.core.rest(arglist__8550);
return G__8524__delegate(elem,k,v,kvs);
});
G__8524.cljs$core$IFn$_invoke$arity$variadic = G__8524__delegate;
return G__8524;
})()
;
set_attr_BANG_ = function(elem,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case 2:
return set_attr_BANG___2.call(this,elem,k);
case 3:
return set_attr_BANG___3.call(this,elem,k,v);
default:
return set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic(elem,k,v, cljs.core.array_seq(arguments, 3));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_attr_BANG_.cljs$lang$maxFixedArity = 3;
set_attr_BANG_.cljs$lang$applyTo = set_attr_BANG___4.cljs$lang$applyTo;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = set_attr_BANG___2;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = set_attr_BANG___3;
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___4.cljs$core$IFn$_invoke$arity$variadic;
return set_attr_BANG_;
})()
;
/**
* Removes dom attributes on and returns `elem`.
* `class` and `classes` are special cases which clear
* out the class name on removal.
* @param {...*} var_args
*/
dommy.core.remove_attr_BANG_ = (function() {
var remove_attr_BANG_ = null;
var remove_attr_BANG___2 = (function (elem,k){var k_8559__$1 = dommy.utils.as_str.call(null,k);if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null).call(null,k_8559__$1)))
{dommy.core.set_class_BANG_.call(null,elem,"");
} else
{elem.removeAttribute(k_8559__$1);
}
return elem;
});
var remove_attr_BANG___3 = (function() { 
var G__8560__delegate = function (elem,k,ks){var seq__8555_8561 = cljs.core.seq.call(null,cljs.core.cons.call(null,k,ks));var chunk__8556_8562 = null;var count__8557_8563 = (0);var i__8558_8564 = (0);while(true){
if((i__8558_8564 < count__8557_8563))
{var k_8565__$1 = cljs.core._nth.call(null,chunk__8556_8562,i__8558_8564);remove_attr_BANG_.call(null,elem,k_8565__$1);
{
var G__8566 = seq__8555_8561;
var G__8567 = chunk__8556_8562;
var G__8568 = count__8557_8563;
var G__8569 = (i__8558_8564 + (1));
seq__8555_8561 = G__8566;
chunk__8556_8562 = G__8567;
count__8557_8563 = G__8568;
i__8558_8564 = G__8569;
continue;
}
} else
{var temp__4126__auto___8570 = cljs.core.seq.call(null,seq__8555_8561);if(temp__4126__auto___8570)
{var seq__8555_8571__$1 = temp__4126__auto___8570;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8555_8571__$1))
{var c__5576__auto___8572 = cljs.core.chunk_first.call(null,seq__8555_8571__$1);{
var G__8573 = cljs.core.chunk_rest.call(null,seq__8555_8571__$1);
var G__8574 = c__5576__auto___8572;
var G__8575 = cljs.core.count.call(null,c__5576__auto___8572);
var G__8576 = (0);
seq__8555_8561 = G__8573;
chunk__8556_8562 = G__8574;
count__8557_8563 = G__8575;
i__8558_8564 = G__8576;
continue;
}
} else
{var k_8577__$1 = cljs.core.first.call(null,seq__8555_8571__$1);remove_attr_BANG_.call(null,elem,k_8577__$1);
{
var G__8578 = cljs.core.next.call(null,seq__8555_8571__$1);
var G__8579 = null;
var G__8580 = (0);
var G__8581 = (0);
seq__8555_8561 = G__8578;
chunk__8556_8562 = G__8579;
count__8557_8563 = G__8580;
i__8558_8564 = G__8581;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__8560 = function (elem,k,var_args){
var ks = null;if (arguments.length > 2) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8560__delegate.call(this,elem,k,ks);};
G__8560.cljs$lang$maxFixedArity = 2;
G__8560.cljs$lang$applyTo = (function (arglist__8582){
var elem = cljs.core.first(arglist__8582);
arglist__8582 = cljs.core.next(arglist__8582);
var k = cljs.core.first(arglist__8582);
var ks = cljs.core.rest(arglist__8582);
return G__8560__delegate(elem,k,ks);
});
G__8560.cljs$core$IFn$_invoke$arity$variadic = G__8560__delegate;
return G__8560;
})()
;
remove_attr_BANG_ = function(elem,k,var_args){
var ks = var_args;
switch(arguments.length){
case 2:
return remove_attr_BANG___2.call(this,elem,k);
default:
return remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,k, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_attr_BANG_.cljs$lang$maxFixedArity = 2;
remove_attr_BANG_.cljs$lang$applyTo = remove_attr_BANG___3.cljs$lang$applyTo;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_attr_BANG___2;
remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_attr_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_attr_BANG_;
})()
;
/**
* Toggles a dom attribute `k` on `elem`, optionally specifying
* the boolean value with `add?`
*/
dommy.core.toggle_attr_BANG_ = (function() {
var toggle_attr_BANG_ = null;
var toggle_attr_BANG___2 = (function (elem,k){return toggle_attr_BANG_.call(null,elem,k,cljs.core.boolean$.call(null,dommy.core.attr.call(null,elem,k)));
});
var toggle_attr_BANG___3 = (function (elem,k,add_QMARK_){if(add_QMARK_)
{return dommy.core.set_attr_BANG_.call(null,elem,k);
} else
{return dommy.core.remove_attr_BANG_.call(null,elem,k);
}
});
toggle_attr_BANG_ = function(elem,k,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_attr_BANG___2.call(this,elem,k);
case 3:
return toggle_attr_BANG___3.call(this,elem,k,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_attr_BANG___2;
toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_attr_BANG___3;
return toggle_attr_BANG_;
})()
;
/**
* Add `classes` to `elem`, trying to use Element::classList, and
* falling back to fast string parsing/manipulation
* @param {...*} var_args
*/
dommy.core.add_class_BANG_ = (function() {
var add_class_BANG_ = null;
var add_class_BANG___2 = (function (elem,classes){var classes__$1 = clojure.string.trim.call(null,dommy.utils.as_str.call(null,classes)).split(/\s+/);if(cljs.core.seq.call(null,classes__$1))
{var temp__4124__auto___8607 = elem.classList;if(cljs.core.truth_(temp__4124__auto___8607))
{var class_list_8608 = temp__4124__auto___8607;var seq__8595_8609 = cljs.core.seq.call(null,classes__$1);var chunk__8596_8610 = null;var count__8597_8611 = (0);var i__8598_8612 = (0);while(true){
if((i__8598_8612 < count__8597_8611))
{var c_8613 = cljs.core._nth.call(null,chunk__8596_8610,i__8598_8612);class_list_8608.add(c_8613);
{
var G__8614 = seq__8595_8609;
var G__8615 = chunk__8596_8610;
var G__8616 = count__8597_8611;
var G__8617 = (i__8598_8612 + (1));
seq__8595_8609 = G__8614;
chunk__8596_8610 = G__8615;
count__8597_8611 = G__8616;
i__8598_8612 = G__8617;
continue;
}
} else
{var temp__4126__auto___8618 = cljs.core.seq.call(null,seq__8595_8609);if(temp__4126__auto___8618)
{var seq__8595_8619__$1 = temp__4126__auto___8618;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8595_8619__$1))
{var c__5576__auto___8620 = cljs.core.chunk_first.call(null,seq__8595_8619__$1);{
var G__8621 = cljs.core.chunk_rest.call(null,seq__8595_8619__$1);
var G__8622 = c__5576__auto___8620;
var G__8623 = cljs.core.count.call(null,c__5576__auto___8620);
var G__8624 = (0);
seq__8595_8609 = G__8621;
chunk__8596_8610 = G__8622;
count__8597_8611 = G__8623;
i__8598_8612 = G__8624;
continue;
}
} else
{var c_8625 = cljs.core.first.call(null,seq__8595_8619__$1);class_list_8608.add(c_8625);
{
var G__8626 = cljs.core.next.call(null,seq__8595_8619__$1);
var G__8627 = null;
var G__8628 = (0);
var G__8629 = (0);
seq__8595_8609 = G__8626;
chunk__8596_8610 = G__8627;
count__8597_8611 = G__8628;
i__8598_8612 = G__8629;
continue;
}
}
} else
{}
}
break;
}
} else
{var seq__8599_8630 = cljs.core.seq.call(null,classes__$1);var chunk__8600_8631 = null;var count__8601_8632 = (0);var i__8602_8633 = (0);while(true){
if((i__8602_8633 < count__8601_8632))
{var c_8634 = cljs.core._nth.call(null,chunk__8600_8631,i__8602_8633);var class_name_8635 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_8635,c_8634)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_8635 === ""))?c_8634:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_8635)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_8634))));
}
{
var G__8636 = seq__8599_8630;
var G__8637 = chunk__8600_8631;
var G__8638 = count__8601_8632;
var G__8639 = (i__8602_8633 + (1));
seq__8599_8630 = G__8636;
chunk__8600_8631 = G__8637;
count__8601_8632 = G__8638;
i__8602_8633 = G__8639;
continue;
}
} else
{var temp__4126__auto___8640 = cljs.core.seq.call(null,seq__8599_8630);if(temp__4126__auto___8640)
{var seq__8599_8641__$1 = temp__4126__auto___8640;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8599_8641__$1))
{var c__5576__auto___8642 = cljs.core.chunk_first.call(null,seq__8599_8641__$1);{
var G__8643 = cljs.core.chunk_rest.call(null,seq__8599_8641__$1);
var G__8644 = c__5576__auto___8642;
var G__8645 = cljs.core.count.call(null,c__5576__auto___8642);
var G__8646 = (0);
seq__8599_8630 = G__8643;
chunk__8600_8631 = G__8644;
count__8601_8632 = G__8645;
i__8602_8633 = G__8646;
continue;
}
} else
{var c_8647 = cljs.core.first.call(null,seq__8599_8641__$1);var class_name_8648 = dommy.core.class$.call(null,elem);if(cljs.core.truth_(dommy.utils.class_index.call(null,class_name_8648,c_8647)))
{} else
{dommy.core.set_class_BANG_.call(null,elem,(((class_name_8648 === ""))?c_8647:(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_8648)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_8647))));
}
{
var G__8649 = cljs.core.next.call(null,seq__8599_8641__$1);
var G__8650 = null;
var G__8651 = (0);
var G__8652 = (0);
seq__8599_8630 = G__8649;
chunk__8600_8631 = G__8650;
count__8601_8632 = G__8651;
i__8602_8633 = G__8652;
continue;
}
}
} else
{}
}
break;
}
}
} else
{}
return elem;
});
var add_class_BANG___3 = (function() { 
var G__8653__delegate = function (elem,classes,more_classes){var seq__8603_8654 = cljs.core.seq.call(null,cljs.core.conj.call(null,more_classes,classes));var chunk__8604_8655 = null;var count__8605_8656 = (0);var i__8606_8657 = (0);while(true){
if((i__8606_8657 < count__8605_8656))
{var c_8658 = cljs.core._nth.call(null,chunk__8604_8655,i__8606_8657);add_class_BANG_.call(null,elem,c_8658);
{
var G__8659 = seq__8603_8654;
var G__8660 = chunk__8604_8655;
var G__8661 = count__8605_8656;
var G__8662 = (i__8606_8657 + (1));
seq__8603_8654 = G__8659;
chunk__8604_8655 = G__8660;
count__8605_8656 = G__8661;
i__8606_8657 = G__8662;
continue;
}
} else
{var temp__4126__auto___8663 = cljs.core.seq.call(null,seq__8603_8654);if(temp__4126__auto___8663)
{var seq__8603_8664__$1 = temp__4126__auto___8663;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8603_8664__$1))
{var c__5576__auto___8665 = cljs.core.chunk_first.call(null,seq__8603_8664__$1);{
var G__8666 = cljs.core.chunk_rest.call(null,seq__8603_8664__$1);
var G__8667 = c__5576__auto___8665;
var G__8668 = cljs.core.count.call(null,c__5576__auto___8665);
var G__8669 = (0);
seq__8603_8654 = G__8666;
chunk__8604_8655 = G__8667;
count__8605_8656 = G__8668;
i__8606_8657 = G__8669;
continue;
}
} else
{var c_8670 = cljs.core.first.call(null,seq__8603_8664__$1);add_class_BANG_.call(null,elem,c_8670);
{
var G__8671 = cljs.core.next.call(null,seq__8603_8664__$1);
var G__8672 = null;
var G__8673 = (0);
var G__8674 = (0);
seq__8603_8654 = G__8671;
chunk__8604_8655 = G__8672;
count__8605_8656 = G__8673;
i__8606_8657 = G__8674;
continue;
}
}
} else
{}
}
break;
}
return elem;
};
var G__8653 = function (elem,classes,var_args){
var more_classes = null;if (arguments.length > 2) {
  more_classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8653__delegate.call(this,elem,classes,more_classes);};
G__8653.cljs$lang$maxFixedArity = 2;
G__8653.cljs$lang$applyTo = (function (arglist__8675){
var elem = cljs.core.first(arglist__8675);
arglist__8675 = cljs.core.next(arglist__8675);
var classes = cljs.core.first(arglist__8675);
var more_classes = cljs.core.rest(arglist__8675);
return G__8653__delegate(elem,classes,more_classes);
});
G__8653.cljs$core$IFn$_invoke$arity$variadic = G__8653__delegate;
return G__8653;
})()
;
add_class_BANG_ = function(elem,classes,var_args){
var more_classes = var_args;
switch(arguments.length){
case 2:
return add_class_BANG___2.call(this,elem,classes);
default:
return add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,classes, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_class_BANG_.cljs$lang$maxFixedArity = 2;
add_class_BANG_.cljs$lang$applyTo = add_class_BANG___3.cljs$lang$applyTo;
add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = add_class_BANG___2;
add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = add_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return add_class_BANG_;
})()
;
/**
* Remove `c` from `elem` class list
* @param {...*} var_args
*/
dommy.core.remove_class_BANG_ = (function() {
var remove_class_BANG_ = null;
var remove_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___8684 = elem.classList;if(cljs.core.truth_(temp__4124__auto___8684))
{var class_list_8685 = temp__4124__auto___8684;class_list_8685.remove(c__$1);
} else
{var class_name_8686 = dommy.core.class$.call(null,elem);var new_class_name_8687 = dommy.utils.remove_class_str.call(null,class_name_8686,c__$1);if((class_name_8686 === new_class_name_8687))
{} else
{dommy.core.set_class_BANG_.call(null,elem,new_class_name_8687);
}
}
return elem;
});
var remove_class_BANG___3 = (function() { 
var G__8688__delegate = function (elem,class$,classes){var seq__8680 = cljs.core.seq.call(null,cljs.core.conj.call(null,classes,class$));var chunk__8681 = null;var count__8682 = (0);var i__8683 = (0);while(true){
if((i__8683 < count__8682))
{var c = cljs.core._nth.call(null,chunk__8681,i__8683);remove_class_BANG_.call(null,elem,c);
{
var G__8689 = seq__8680;
var G__8690 = chunk__8681;
var G__8691 = count__8682;
var G__8692 = (i__8683 + (1));
seq__8680 = G__8689;
chunk__8681 = G__8690;
count__8682 = G__8691;
i__8683 = G__8692;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__8680);if(temp__4126__auto__)
{var seq__8680__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8680__$1))
{var c__5576__auto__ = cljs.core.chunk_first.call(null,seq__8680__$1);{
var G__8693 = cljs.core.chunk_rest.call(null,seq__8680__$1);
var G__8694 = c__5576__auto__;
var G__8695 = cljs.core.count.call(null,c__5576__auto__);
var G__8696 = (0);
seq__8680 = G__8693;
chunk__8681 = G__8694;
count__8682 = G__8695;
i__8683 = G__8696;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8680__$1);remove_class_BANG_.call(null,elem,c);
{
var G__8697 = cljs.core.next.call(null,seq__8680__$1);
var G__8698 = null;
var G__8699 = (0);
var G__8700 = (0);
seq__8680 = G__8697;
chunk__8681 = G__8698;
count__8682 = G__8699;
i__8683 = G__8700;
continue;
}
}
} else
{return null;
}
}
break;
}
};
var G__8688 = function (elem,class$,var_args){
var classes = null;if (arguments.length > 2) {
  classes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8688__delegate.call(this,elem,class$,classes);};
G__8688.cljs$lang$maxFixedArity = 2;
G__8688.cljs$lang$applyTo = (function (arglist__8701){
var elem = cljs.core.first(arglist__8701);
arglist__8701 = cljs.core.next(arglist__8701);
var class$ = cljs.core.first(arglist__8701);
var classes = cljs.core.rest(arglist__8701);
return G__8688__delegate(elem,class$,classes);
});
G__8688.cljs$core$IFn$_invoke$arity$variadic = G__8688__delegate;
return G__8688;
})()
;
remove_class_BANG_ = function(elem,class$,var_args){
var classes = var_args;
switch(arguments.length){
case 2:
return remove_class_BANG___2.call(this,elem,class$);
default:
return remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic(elem,class$, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_class_BANG_.cljs$lang$maxFixedArity = 2;
remove_class_BANG_.cljs$lang$applyTo = remove_class_BANG___3.cljs$lang$applyTo;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_class_BANG___2;
remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = remove_class_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return remove_class_BANG_;
})()
;
/**
* (toggle-class! elem class) will add-class! if elem does not have class
* and remove-class! otherwise.
* (toggle-class! elem class add?) will add-class! if add? is truthy,
* otherwise it will remove-class!
*/
dommy.core.toggle_class_BANG_ = (function() {
var toggle_class_BANG_ = null;
var toggle_class_BANG___2 = (function (elem,c){var c__$1 = dommy.utils.as_str.call(null,c);var temp__4124__auto___8702 = elem.classList;if(cljs.core.truth_(temp__4124__auto___8702))
{var class_list_8703 = temp__4124__auto___8702;class_list_8703.toggle(c__$1);
} else
{toggle_class_BANG_.call(null,elem,c__$1,!(dommy.core.has_class_QMARK_.call(null,elem,c__$1)));
}
return elem;
});
var toggle_class_BANG___3 = (function (elem,class$,add_QMARK_){if(add_QMARK_)
{dommy.core.add_class_BANG_.call(null,elem,class$);
} else
{dommy.core.remove_class_BANG_.call(null,elem,class$);
}
return elem;
});
toggle_class_BANG_ = function(elem,class$,add_QMARK_){
switch(arguments.length){
case 2:
return toggle_class_BANG___2.call(this,elem,class$);
case 3:
return toggle_class_BANG___3.call(this,elem,class$,add_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_class_BANG___2;
toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = toggle_class_BANG___3;
return toggle_class_BANG_;
})()
;
/**
* Display or hide the given `elem` (using display: none).
* Takes an optional boolean `show?`
*/
dommy.core.toggle_BANG_ = (function() {
var toggle_BANG_ = null;
var toggle_BANG___1 = (function (elem){return toggle_BANG_.call(null,elem,dommy.core.hidden_QMARK_.call(null,elem));
});
var toggle_BANG___2 = (function (elem,show_QMARK_){return dommy.core.set_style_BANG_.call(null,elem,new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none"));
});
toggle_BANG_ = function(elem,show_QMARK_){
switch(arguments.length){
case 1:
return toggle_BANG___1.call(this,elem);
case 2:
return toggle_BANG___2.call(this,elem,show_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = toggle_BANG___1;
toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = toggle_BANG___2;
return toggle_BANG_;
})()
;
dommy.core.hide_BANG_ = (function hide_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,false);
});
dommy.core.show_BANG_ = (function show_BANG_(elem){return dommy.core.toggle_BANG_.call(null,elem,true);
});
dommy.core.scroll_into_view = (function scroll_into_view(elem,align_with_top_QMARK_){var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect.call(null,elem));if((window.innerHeight < (top + elem.offsetHeight)))
{return elem.scrollIntoView(align_with_top_QMARK_);
} else
{return null;
}
});
dommy.core.create_element = (function() {
var create_element = null;
var create_element__1 = (function (tag){return document.createElement(dommy.utils.as_str.call(null,tag));
});
var create_element__2 = (function (tag_ns,tag){return document.createElementNS(dommy.utils.as_str.call(null,tag_ns),dommy.utils.as_str.call(null,tag));
});
create_element = function(tag_ns,tag){
switch(arguments.length){
case 1:
return create_element__1.call(this,tag_ns);
case 2:
return create_element__2.call(this,tag_ns,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
dommy.core.create_text_node = (function create_text_node(text){return document.createTextNode(text);
});
/**
* Clears all children from `elem`
*/
dommy.core.clear_BANG_ = (function clear_BANG_(elem){return dommy.core.set_html_BANG_.call(null,elem,"");
});
/**
* Append `child` to `parent`
* @param {...*} var_args
*/
dommy.core.append_BANG_ = (function() {
var append_BANG_ = null;
var append_BANG___2 = (function (parent,child){var G__8709 = parent;G__8709.appendChild(child);
return G__8709;
});
var append_BANG___3 = (function() { 
var G__8714__delegate = function (parent,child,more_children){var seq__8710_8715 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8711_8716 = null;var count__8712_8717 = (0);var i__8713_8718 = (0);while(true){
if((i__8713_8718 < count__8712_8717))
{var c_8719 = cljs.core._nth.call(null,chunk__8711_8716,i__8713_8718);append_BANG_.call(null,parent,c_8719);
{
var G__8720 = seq__8710_8715;
var G__8721 = chunk__8711_8716;
var G__8722 = count__8712_8717;
var G__8723 = (i__8713_8718 + (1));
seq__8710_8715 = G__8720;
chunk__8711_8716 = G__8721;
count__8712_8717 = G__8722;
i__8713_8718 = G__8723;
continue;
}
} else
{var temp__4126__auto___8724 = cljs.core.seq.call(null,seq__8710_8715);if(temp__4126__auto___8724)
{var seq__8710_8725__$1 = temp__4126__auto___8724;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8710_8725__$1))
{var c__5576__auto___8726 = cljs.core.chunk_first.call(null,seq__8710_8725__$1);{
var G__8727 = cljs.core.chunk_rest.call(null,seq__8710_8725__$1);
var G__8728 = c__5576__auto___8726;
var G__8729 = cljs.core.count.call(null,c__5576__auto___8726);
var G__8730 = (0);
seq__8710_8715 = G__8727;
chunk__8711_8716 = G__8728;
count__8712_8717 = G__8729;
i__8713_8718 = G__8730;
continue;
}
} else
{var c_8731 = cljs.core.first.call(null,seq__8710_8725__$1);append_BANG_.call(null,parent,c_8731);
{
var G__8732 = cljs.core.next.call(null,seq__8710_8725__$1);
var G__8733 = null;
var G__8734 = (0);
var G__8735 = (0);
seq__8710_8715 = G__8732;
chunk__8711_8716 = G__8733;
count__8712_8717 = G__8734;
i__8713_8718 = G__8735;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__8714 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8714__delegate.call(this,parent,child,more_children);};
G__8714.cljs$lang$maxFixedArity = 2;
G__8714.cljs$lang$applyTo = (function (arglist__8736){
var parent = cljs.core.first(arglist__8736);
arglist__8736 = cljs.core.next(arglist__8736);
var child = cljs.core.first(arglist__8736);
var more_children = cljs.core.rest(arglist__8736);
return G__8714__delegate(parent,child,more_children);
});
G__8714.cljs$core$IFn$_invoke$arity$variadic = G__8714__delegate;
return G__8714;
})()
;
append_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return append_BANG___2.call(this,parent,child);
default:
return append_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append_BANG_.cljs$lang$maxFixedArity = 2;
append_BANG_.cljs$lang$applyTo = append_BANG___3.cljs$lang$applyTo;
append_BANG_.cljs$core$IFn$_invoke$arity$2 = append_BANG___2;
append_BANG_.cljs$core$IFn$_invoke$arity$variadic = append_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return append_BANG_;
})()
;
/**
* Prepend `child` to `parent`
* @param {...*} var_args
*/
dommy.core.prepend_BANG_ = (function() {
var prepend_BANG_ = null;
var prepend_BANG___2 = (function (parent,child){var G__8742 = parent;G__8742.insertBefore(child,parent.firstChild);
return G__8742;
});
var prepend_BANG___3 = (function() { 
var G__8747__delegate = function (parent,child,more_children){var seq__8743_8748 = cljs.core.seq.call(null,cljs.core.cons.call(null,child,more_children));var chunk__8744_8749 = null;var count__8745_8750 = (0);var i__8746_8751 = (0);while(true){
if((i__8746_8751 < count__8745_8750))
{var c_8752 = cljs.core._nth.call(null,chunk__8744_8749,i__8746_8751);prepend_BANG_.call(null,parent,c_8752);
{
var G__8753 = seq__8743_8748;
var G__8754 = chunk__8744_8749;
var G__8755 = count__8745_8750;
var G__8756 = (i__8746_8751 + (1));
seq__8743_8748 = G__8753;
chunk__8744_8749 = G__8754;
count__8745_8750 = G__8755;
i__8746_8751 = G__8756;
continue;
}
} else
{var temp__4126__auto___8757 = cljs.core.seq.call(null,seq__8743_8748);if(temp__4126__auto___8757)
{var seq__8743_8758__$1 = temp__4126__auto___8757;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8743_8758__$1))
{var c__5576__auto___8759 = cljs.core.chunk_first.call(null,seq__8743_8758__$1);{
var G__8760 = cljs.core.chunk_rest.call(null,seq__8743_8758__$1);
var G__8761 = c__5576__auto___8759;
var G__8762 = cljs.core.count.call(null,c__5576__auto___8759);
var G__8763 = (0);
seq__8743_8748 = G__8760;
chunk__8744_8749 = G__8761;
count__8745_8750 = G__8762;
i__8746_8751 = G__8763;
continue;
}
} else
{var c_8764 = cljs.core.first.call(null,seq__8743_8758__$1);prepend_BANG_.call(null,parent,c_8764);
{
var G__8765 = cljs.core.next.call(null,seq__8743_8758__$1);
var G__8766 = null;
var G__8767 = (0);
var G__8768 = (0);
seq__8743_8748 = G__8765;
chunk__8744_8749 = G__8766;
count__8745_8750 = G__8767;
i__8746_8751 = G__8768;
continue;
}
}
} else
{}
}
break;
}
return parent;
};
var G__8747 = function (parent,child,var_args){
var more_children = null;if (arguments.length > 2) {
  more_children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__8747__delegate.call(this,parent,child,more_children);};
G__8747.cljs$lang$maxFixedArity = 2;
G__8747.cljs$lang$applyTo = (function (arglist__8769){
var parent = cljs.core.first(arglist__8769);
arglist__8769 = cljs.core.next(arglist__8769);
var child = cljs.core.first(arglist__8769);
var more_children = cljs.core.rest(arglist__8769);
return G__8747__delegate(parent,child,more_children);
});
G__8747.cljs$core$IFn$_invoke$arity$variadic = G__8747__delegate;
return G__8747;
})()
;
prepend_BANG_ = function(parent,child,var_args){
var more_children = var_args;
switch(arguments.length){
case 2:
return prepend_BANG___2.call(this,parent,child);
default:
return prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic(parent,child, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prepend_BANG_.cljs$lang$maxFixedArity = 2;
prepend_BANG_.cljs$lang$applyTo = prepend_BANG___3.cljs$lang$applyTo;
prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = prepend_BANG___2;
prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = prepend_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return prepend_BANG_;
})()
;
/**
* Insert `elem` before `other`, `other` must have a parent
*/
dommy.core.insert_before_BANG_ = (function insert_before_BANG_(elem,other){var p = dommy.core.parent.call(null,other);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
p.insertBefore(elem,other);
return elem;
});
/**
* Insert `elem` after `other`, `other` must have a parent
*/
dommy.core.insert_after_BANG_ = (function insert_after_BANG_(elem,other){var temp__4124__auto___8770 = other.nextSibling;if(cljs.core.truth_(temp__4124__auto___8770))
{var next_8771 = temp__4124__auto___8770;dommy.core.insert_before_BANG_.call(null,elem,next_8771);
} else
{dommy.core.append_BANG_.call(null,dommy.core.parent.call(null,other),elem);
}
return elem;
});
/**
* Replace `elem` with `new`, return `new`
*/
dommy.core.replace_BANG_ = (function replace_BANG_(elem,new$){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
p.replaceChild(new$,elem);
return new$;
});
/**
* Replace children of `elem` with `child`
*/
dommy.core.replace_contents_BANG_ = (function replace_contents_BANG_(p,child){return dommy.core.append_BANG_.call(null,dommy.core.clear_BANG_.call(null,p),child);
});
/**
* Remove `elem` from `parent`, return `parent`
*/
dommy.core.remove_BANG_ = (function() {
var remove_BANG_ = null;
var remove_BANG___1 = (function (elem){var p = dommy.core.parent.call(null,elem);if(cljs.core.truth_(p))
{} else
{throw (new Error(("Assert failed: Target element must have a parent\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"p","p",1791580836,null))))));
}
return remove_BANG_.call(null,p,elem);
});
var remove_BANG___2 = (function (p,elem){var G__8773 = p;G__8773.removeChild(elem);
return G__8773;
});
remove_BANG_ = function(p,elem){
switch(arguments.length){
case 1:
return remove_BANG___1.call(this,p);
case 2:
return remove_BANG___2.call(this,p,elem);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_BANG_.cljs$core$IFn$_invoke$arity$1 = remove_BANG___1;
remove_BANG_.cljs$core$IFn$_invoke$arity$2 = remove_BANG___2;
return remove_BANG_;
})()
;
dommy.core.special_listener_makers = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__8774){var vec__8775 = p__8774;var special_mouse_event = cljs.core.nth.call(null,vec__8775,(0),null);var real_mouse_event = cljs.core.nth.call(null,vec__8775,(1),null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,new cljs.core.PersistentArrayMap.fromArray([real_mouse_event,((function (vec__8775,special_mouse_event,real_mouse_event){
return (function (f){return ((function (vec__8775,special_mouse_event,real_mouse_event){
return (function (event){var related_target = event.relatedTarget;var listener_target = (function (){var or__4820__auto__ = event.selectedTarget;if(cljs.core.truth_(or__4820__auto__))
{return or__4820__auto__;
} else
{return event.currentTarget;
}
})();if(cljs.core.truth_((function (){var and__4808__auto__ = related_target;if(cljs.core.truth_(and__4808__auto__))
{return dommy.core.descendant_QMARK_.call(null,related_target,listener_target);
} else
{return and__4808__auto__;
}
})()))
{return null;
} else
{return f.call(null,event);
}
});
;})(vec__8775,special_mouse_event,real_mouse_event))
});})(vec__8775,special_mouse_event,real_mouse_event))
], true, false)], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
* fires f if event.target is found with `selector`
*/
dommy.core.live_listener = (function live_listener(elem,selector,f){return (function (event){var selected_target = dommy.core.closest.call(null,elem,event.target,selector);if(cljs.core.truth_((function (){var and__4808__auto__ = selected_target;if(cljs.core.truth_(and__4808__auto__))
{return cljs.core.not.call(null,dommy.core.attr.call(null,selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else
{return and__4808__auto__;
}
})()))
{event.selectedTarget = selected_target;
return f.call(null,event);
} else
{return null;
}
});
});
/**
* Returns a nested map of event listeners on `elem`
*/
dommy.core.event_listeners = (function event_listeners(elem){var or__4820__auto__ = elem.dommyEventListeners;if(cljs.core.truth_(or__4820__auto__))
{return or__4820__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
* @param {...*} var_args
*/
dommy.core.update_event_listeners_BANG_ = (function() { 
var update_event_listeners_BANG___delegate = function (elem,f,args){var elem__$1 = elem;return elem__$1.dommyEventListeners = cljs.core.apply.call(null,f,dommy.core.event_listeners.call(null,elem__$1),args);
};
var update_event_listeners_BANG_ = function (elem,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_event_listeners_BANG___delegate.call(this,elem,f,args);};
update_event_listeners_BANG_.cljs$lang$maxFixedArity = 2;
update_event_listeners_BANG_.cljs$lang$applyTo = (function (arglist__8776){
var elem = cljs.core.first(arglist__8776);
arglist__8776 = cljs.core.next(arglist__8776);
var f = cljs.core.first(arglist__8776);
var args = cljs.core.rest(arglist__8776);
return update_event_listeners_BANG___delegate(elem,f,args);
});
update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_event_listeners_BANG___delegate;
return update_event_listeners_BANG_;
})()
;
dommy.core.elem_and_selector = (function elem_and_selector(elem_sel){if(cljs.core.sequential_QMARK_.call(null,elem_sel))
{return cljs.core.juxt.call(null,cljs.core.first,cljs.core.rest).call(null,elem_sel);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
* Adds `f` as a listener for events of type `event-type` on
* `elem-sel`, which must either be a DOM node, or a sequence
* whose first item is a DOM node.
* 
* In other words, the call to `listen!` can take two forms:
* 
* If `elem-sel` is a DOM node, i.e., you're doing something like:
* 
* (listen! elem :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on the `elem`.
* 
* If `elem-sel` is a sequence:
* 
* (listen! [elem :.selector.for :.some.descendants] :click click-handler)
* 
* then `click-handler` will be set as a listener for `click` events
* on descendants of `elem` that match the selector
* 
* Also accepts any number of event-type and handler pairs for setting
* multiple listeners at once:
* 
* (listen! some-elem :click click-handler :hover hover-handler)
* @param {...*} var_args
*/
dommy.core.listen_BANG_ = (function() { 
var listen_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__8800_8823 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8824 = cljs.core.nth.call(null,vec__8800_8823,(0),null);var selector_8825 = cljs.core.nth.call(null,vec__8800_8823,(1),null);var seq__8801_8826 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__8808_8827 = null;var count__8809_8828 = (0);var i__8810_8829 = (0);while(true){
if((i__8810_8829 < count__8809_8828))
{var vec__8817_8830 = cljs.core._nth.call(null,chunk__8808_8827,i__8810_8829);var orig_type_8831 = cljs.core.nth.call(null,vec__8817_8830,(0),null);var f_8832 = cljs.core.nth.call(null,vec__8817_8830,(1),null);var seq__8811_8833 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8831,new cljs.core.PersistentArrayMap.fromArray([orig_type_8831,cljs.core.identity], true, false)));var chunk__8813_8834 = null;var count__8814_8835 = (0);var i__8815_8836 = (0);while(true){
if((i__8815_8836 < count__8814_8835))
{var vec__8818_8837 = cljs.core._nth.call(null,chunk__8813_8834,i__8815_8836);var actual_type_8838 = cljs.core.nth.call(null,vec__8818_8837,(0),null);var factory_8839 = cljs.core.nth.call(null,vec__8818_8837,(1),null);var canonical_f_8840 = (cljs.core.truth_(selector_8825)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8824,selector_8825):cljs.core.identity).call(null,factory_8839.call(null,f_8832));dommy.core.update_event_listeners_BANG_.call(null,elem_8824,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8825,actual_type_8838,f_8832], null),canonical_f_8840);
if(cljs.core.truth_(elem_8824.addEventListener))
{elem_8824.addEventListener(cljs.core.name.call(null,actual_type_8838),canonical_f_8840);
} else
{elem_8824.attachEvent(cljs.core.name.call(null,actual_type_8838),canonical_f_8840);
}
{
var G__8841 = seq__8811_8833;
var G__8842 = chunk__8813_8834;
var G__8843 = count__8814_8835;
var G__8844 = (i__8815_8836 + (1));
seq__8811_8833 = G__8841;
chunk__8813_8834 = G__8842;
count__8814_8835 = G__8843;
i__8815_8836 = G__8844;
continue;
}
} else
{var temp__4126__auto___8845 = cljs.core.seq.call(null,seq__8811_8833);if(temp__4126__auto___8845)
{var seq__8811_8846__$1 = temp__4126__auto___8845;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8811_8846__$1))
{var c__5576__auto___8847 = cljs.core.chunk_first.call(null,seq__8811_8846__$1);{
var G__8848 = cljs.core.chunk_rest.call(null,seq__8811_8846__$1);
var G__8849 = c__5576__auto___8847;
var G__8850 = cljs.core.count.call(null,c__5576__auto___8847);
var G__8851 = (0);
seq__8811_8833 = G__8848;
chunk__8813_8834 = G__8849;
count__8814_8835 = G__8850;
i__8815_8836 = G__8851;
continue;
}
} else
{var vec__8819_8852 = cljs.core.first.call(null,seq__8811_8846__$1);var actual_type_8853 = cljs.core.nth.call(null,vec__8819_8852,(0),null);var factory_8854 = cljs.core.nth.call(null,vec__8819_8852,(1),null);var canonical_f_8855 = (cljs.core.truth_(selector_8825)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8824,selector_8825):cljs.core.identity).call(null,factory_8854.call(null,f_8832));dommy.core.update_event_listeners_BANG_.call(null,elem_8824,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8825,actual_type_8853,f_8832], null),canonical_f_8855);
if(cljs.core.truth_(elem_8824.addEventListener))
{elem_8824.addEventListener(cljs.core.name.call(null,actual_type_8853),canonical_f_8855);
} else
{elem_8824.attachEvent(cljs.core.name.call(null,actual_type_8853),canonical_f_8855);
}
{
var G__8856 = cljs.core.next.call(null,seq__8811_8846__$1);
var G__8857 = null;
var G__8858 = (0);
var G__8859 = (0);
seq__8811_8833 = G__8856;
chunk__8813_8834 = G__8857;
count__8814_8835 = G__8858;
i__8815_8836 = G__8859;
continue;
}
}
} else
{}
}
break;
}
{
var G__8860 = seq__8801_8826;
var G__8861 = chunk__8808_8827;
var G__8862 = count__8809_8828;
var G__8863 = (i__8810_8829 + (1));
seq__8801_8826 = G__8860;
chunk__8808_8827 = G__8861;
count__8809_8828 = G__8862;
i__8810_8829 = G__8863;
continue;
}
} else
{var temp__4126__auto___8864 = cljs.core.seq.call(null,seq__8801_8826);if(temp__4126__auto___8864)
{var seq__8801_8865__$1 = temp__4126__auto___8864;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8801_8865__$1))
{var c__5576__auto___8866 = cljs.core.chunk_first.call(null,seq__8801_8865__$1);{
var G__8867 = cljs.core.chunk_rest.call(null,seq__8801_8865__$1);
var G__8868 = c__5576__auto___8866;
var G__8869 = cljs.core.count.call(null,c__5576__auto___8866);
var G__8870 = (0);
seq__8801_8826 = G__8867;
chunk__8808_8827 = G__8868;
count__8809_8828 = G__8869;
i__8810_8829 = G__8870;
continue;
}
} else
{var vec__8820_8871 = cljs.core.first.call(null,seq__8801_8865__$1);var orig_type_8872 = cljs.core.nth.call(null,vec__8820_8871,(0),null);var f_8873 = cljs.core.nth.call(null,vec__8820_8871,(1),null);var seq__8802_8874 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8872,new cljs.core.PersistentArrayMap.fromArray([orig_type_8872,cljs.core.identity], true, false)));var chunk__8804_8875 = null;var count__8805_8876 = (0);var i__8806_8877 = (0);while(true){
if((i__8806_8877 < count__8805_8876))
{var vec__8821_8878 = cljs.core._nth.call(null,chunk__8804_8875,i__8806_8877);var actual_type_8879 = cljs.core.nth.call(null,vec__8821_8878,(0),null);var factory_8880 = cljs.core.nth.call(null,vec__8821_8878,(1),null);var canonical_f_8881 = (cljs.core.truth_(selector_8825)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8824,selector_8825):cljs.core.identity).call(null,factory_8880.call(null,f_8873));dommy.core.update_event_listeners_BANG_.call(null,elem_8824,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8825,actual_type_8879,f_8873], null),canonical_f_8881);
if(cljs.core.truth_(elem_8824.addEventListener))
{elem_8824.addEventListener(cljs.core.name.call(null,actual_type_8879),canonical_f_8881);
} else
{elem_8824.attachEvent(cljs.core.name.call(null,actual_type_8879),canonical_f_8881);
}
{
var G__8882 = seq__8802_8874;
var G__8883 = chunk__8804_8875;
var G__8884 = count__8805_8876;
var G__8885 = (i__8806_8877 + (1));
seq__8802_8874 = G__8882;
chunk__8804_8875 = G__8883;
count__8805_8876 = G__8884;
i__8806_8877 = G__8885;
continue;
}
} else
{var temp__4126__auto___8886__$1 = cljs.core.seq.call(null,seq__8802_8874);if(temp__4126__auto___8886__$1)
{var seq__8802_8887__$1 = temp__4126__auto___8886__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8802_8887__$1))
{var c__5576__auto___8888 = cljs.core.chunk_first.call(null,seq__8802_8887__$1);{
var G__8889 = cljs.core.chunk_rest.call(null,seq__8802_8887__$1);
var G__8890 = c__5576__auto___8888;
var G__8891 = cljs.core.count.call(null,c__5576__auto___8888);
var G__8892 = (0);
seq__8802_8874 = G__8889;
chunk__8804_8875 = G__8890;
count__8805_8876 = G__8891;
i__8806_8877 = G__8892;
continue;
}
} else
{var vec__8822_8893 = cljs.core.first.call(null,seq__8802_8887__$1);var actual_type_8894 = cljs.core.nth.call(null,vec__8822_8893,(0),null);var factory_8895 = cljs.core.nth.call(null,vec__8822_8893,(1),null);var canonical_f_8896 = (cljs.core.truth_(selector_8825)?cljs.core.partial.call(null,dommy.core.live_listener,elem_8824,selector_8825):cljs.core.identity).call(null,factory_8895.call(null,f_8873));dommy.core.update_event_listeners_BANG_.call(null,elem_8824,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8825,actual_type_8894,f_8873], null),canonical_f_8896);
if(cljs.core.truth_(elem_8824.addEventListener))
{elem_8824.addEventListener(cljs.core.name.call(null,actual_type_8894),canonical_f_8896);
} else
{elem_8824.attachEvent(cljs.core.name.call(null,actual_type_8894),canonical_f_8896);
}
{
var G__8897 = cljs.core.next.call(null,seq__8802_8887__$1);
var G__8898 = null;
var G__8899 = (0);
var G__8900 = (0);
seq__8802_8874 = G__8897;
chunk__8804_8875 = G__8898;
count__8805_8876 = G__8899;
i__8806_8877 = G__8900;
continue;
}
}
} else
{}
}
break;
}
{
var G__8901 = cljs.core.next.call(null,seq__8801_8865__$1);
var G__8902 = null;
var G__8903 = (0);
var G__8904 = (0);
seq__8801_8826 = G__8901;
chunk__8808_8827 = G__8902;
count__8809_8828 = G__8903;
i__8810_8829 = G__8904;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_BANG___delegate.call(this,elem_sel,type_fs);};
listen_BANG_.cljs$lang$maxFixedArity = 1;
listen_BANG_.cljs$lang$applyTo = (function (arglist__8905){
var elem_sel = cljs.core.first(arglist__8905);
var type_fs = cljs.core.rest(arglist__8905);
return listen_BANG___delegate(elem_sel,type_fs);
});
listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_BANG___delegate;
return listen_BANG_;
})()
;
/**
* Removes event listener for the element defined in `elem-sel`,
* which is the same format as listen!.
* 
* The following forms are allowed, and will remove all handlers
* that match the parameters passed in:
* 
* (unlisten! [elem :.selector] :click event-listener)
* 
* (unlisten! [elem :.selector]
* :click event-listener
* :mouseover other-event-listener)
* @param {...*} var_args
*/
dommy.core.unlisten_BANG_ = (function() { 
var unlisten_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__8929_8952 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_8953 = cljs.core.nth.call(null,vec__8929_8952,(0),null);var selector_8954 = cljs.core.nth.call(null,vec__8929_8952,(1),null);var seq__8930_8955 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__8937_8956 = null;var count__8938_8957 = (0);var i__8939_8958 = (0);while(true){
if((i__8939_8958 < count__8938_8957))
{var vec__8946_8959 = cljs.core._nth.call(null,chunk__8937_8956,i__8939_8958);var orig_type_8960 = cljs.core.nth.call(null,vec__8946_8959,(0),null);var f_8961 = cljs.core.nth.call(null,vec__8946_8959,(1),null);var seq__8940_8962 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_8960,new cljs.core.PersistentArrayMap.fromArray([orig_type_8960,cljs.core.identity], true, false)));var chunk__8942_8963 = null;var count__8943_8964 = (0);var i__8944_8965 = (0);while(true){
if((i__8944_8965 < count__8943_8964))
{var vec__8947_8966 = cljs.core._nth.call(null,chunk__8942_8963,i__8944_8965);var actual_type_8967 = cljs.core.nth.call(null,vec__8947_8966,(0),null);var __8968 = cljs.core.nth.call(null,vec__8947_8966,(1),null);var keys_8969 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8954,actual_type_8967,f_8961], null);var canonical_f_8970 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8953),keys_8969);dommy.core.update_event_listeners_BANG_.call(null,elem_8953,dommy.utils.dissoc_in,keys_8969);
if(cljs.core.truth_(elem_8953.removeEventListener))
{elem_8953.removeEventListener(cljs.core.name.call(null,actual_type_8967),canonical_f_8970);
} else
{elem_8953.detachEvent(cljs.core.name.call(null,actual_type_8967),canonical_f_8970);
}
{
var G__8971 = seq__8940_8962;
var G__8972 = chunk__8942_8963;
var G__8973 = count__8943_8964;
var G__8974 = (i__8944_8965 + (1));
seq__8940_8962 = G__8971;
chunk__8942_8963 = G__8972;
count__8943_8964 = G__8973;
i__8944_8965 = G__8974;
continue;
}
} else
{var temp__4126__auto___8975 = cljs.core.seq.call(null,seq__8940_8962);if(temp__4126__auto___8975)
{var seq__8940_8976__$1 = temp__4126__auto___8975;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8940_8976__$1))
{var c__5576__auto___8977 = cljs.core.chunk_first.call(null,seq__8940_8976__$1);{
var G__8978 = cljs.core.chunk_rest.call(null,seq__8940_8976__$1);
var G__8979 = c__5576__auto___8977;
var G__8980 = cljs.core.count.call(null,c__5576__auto___8977);
var G__8981 = (0);
seq__8940_8962 = G__8978;
chunk__8942_8963 = G__8979;
count__8943_8964 = G__8980;
i__8944_8965 = G__8981;
continue;
}
} else
{var vec__8948_8982 = cljs.core.first.call(null,seq__8940_8976__$1);var actual_type_8983 = cljs.core.nth.call(null,vec__8948_8982,(0),null);var __8984 = cljs.core.nth.call(null,vec__8948_8982,(1),null);var keys_8985 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8954,actual_type_8983,f_8961], null);var canonical_f_8986 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8953),keys_8985);dommy.core.update_event_listeners_BANG_.call(null,elem_8953,dommy.utils.dissoc_in,keys_8985);
if(cljs.core.truth_(elem_8953.removeEventListener))
{elem_8953.removeEventListener(cljs.core.name.call(null,actual_type_8983),canonical_f_8986);
} else
{elem_8953.detachEvent(cljs.core.name.call(null,actual_type_8983),canonical_f_8986);
}
{
var G__8987 = cljs.core.next.call(null,seq__8940_8976__$1);
var G__8988 = null;
var G__8989 = (0);
var G__8990 = (0);
seq__8940_8962 = G__8987;
chunk__8942_8963 = G__8988;
count__8943_8964 = G__8989;
i__8944_8965 = G__8990;
continue;
}
}
} else
{}
}
break;
}
{
var G__8991 = seq__8930_8955;
var G__8992 = chunk__8937_8956;
var G__8993 = count__8938_8957;
var G__8994 = (i__8939_8958 + (1));
seq__8930_8955 = G__8991;
chunk__8937_8956 = G__8992;
count__8938_8957 = G__8993;
i__8939_8958 = G__8994;
continue;
}
} else
{var temp__4126__auto___8995 = cljs.core.seq.call(null,seq__8930_8955);if(temp__4126__auto___8995)
{var seq__8930_8996__$1 = temp__4126__auto___8995;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8930_8996__$1))
{var c__5576__auto___8997 = cljs.core.chunk_first.call(null,seq__8930_8996__$1);{
var G__8998 = cljs.core.chunk_rest.call(null,seq__8930_8996__$1);
var G__8999 = c__5576__auto___8997;
var G__9000 = cljs.core.count.call(null,c__5576__auto___8997);
var G__9001 = (0);
seq__8930_8955 = G__8998;
chunk__8937_8956 = G__8999;
count__8938_8957 = G__9000;
i__8939_8958 = G__9001;
continue;
}
} else
{var vec__8949_9002 = cljs.core.first.call(null,seq__8930_8996__$1);var orig_type_9003 = cljs.core.nth.call(null,vec__8949_9002,(0),null);var f_9004 = cljs.core.nth.call(null,vec__8949_9002,(1),null);var seq__8931_9005 = cljs.core.seq.call(null,cljs.core.get.call(null,dommy.core.special_listener_makers,orig_type_9003,new cljs.core.PersistentArrayMap.fromArray([orig_type_9003,cljs.core.identity], true, false)));var chunk__8933_9006 = null;var count__8934_9007 = (0);var i__8935_9008 = (0);while(true){
if((i__8935_9008 < count__8934_9007))
{var vec__8950_9009 = cljs.core._nth.call(null,chunk__8933_9006,i__8935_9008);var actual_type_9010 = cljs.core.nth.call(null,vec__8950_9009,(0),null);var __9011 = cljs.core.nth.call(null,vec__8950_9009,(1),null);var keys_9012 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8954,actual_type_9010,f_9004], null);var canonical_f_9013 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8953),keys_9012);dommy.core.update_event_listeners_BANG_.call(null,elem_8953,dommy.utils.dissoc_in,keys_9012);
if(cljs.core.truth_(elem_8953.removeEventListener))
{elem_8953.removeEventListener(cljs.core.name.call(null,actual_type_9010),canonical_f_9013);
} else
{elem_8953.detachEvent(cljs.core.name.call(null,actual_type_9010),canonical_f_9013);
}
{
var G__9014 = seq__8931_9005;
var G__9015 = chunk__8933_9006;
var G__9016 = count__8934_9007;
var G__9017 = (i__8935_9008 + (1));
seq__8931_9005 = G__9014;
chunk__8933_9006 = G__9015;
count__8934_9007 = G__9016;
i__8935_9008 = G__9017;
continue;
}
} else
{var temp__4126__auto___9018__$1 = cljs.core.seq.call(null,seq__8931_9005);if(temp__4126__auto___9018__$1)
{var seq__8931_9019__$1 = temp__4126__auto___9018__$1;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8931_9019__$1))
{var c__5576__auto___9020 = cljs.core.chunk_first.call(null,seq__8931_9019__$1);{
var G__9021 = cljs.core.chunk_rest.call(null,seq__8931_9019__$1);
var G__9022 = c__5576__auto___9020;
var G__9023 = cljs.core.count.call(null,c__5576__auto___9020);
var G__9024 = (0);
seq__8931_9005 = G__9021;
chunk__8933_9006 = G__9022;
count__8934_9007 = G__9023;
i__8935_9008 = G__9024;
continue;
}
} else
{var vec__8951_9025 = cljs.core.first.call(null,seq__8931_9019__$1);var actual_type_9026 = cljs.core.nth.call(null,vec__8951_9025,(0),null);var __9027 = cljs.core.nth.call(null,vec__8951_9025,(1),null);var keys_9028 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_8954,actual_type_9026,f_9004], null);var canonical_f_9029 = cljs.core.get_in.call(null,dommy.core.event_listeners.call(null,elem_8953),keys_9028);dommy.core.update_event_listeners_BANG_.call(null,elem_8953,dommy.utils.dissoc_in,keys_9028);
if(cljs.core.truth_(elem_8953.removeEventListener))
{elem_8953.removeEventListener(cljs.core.name.call(null,actual_type_9026),canonical_f_9029);
} else
{elem_8953.detachEvent(cljs.core.name.call(null,actual_type_9026),canonical_f_9029);
}
{
var G__9030 = cljs.core.next.call(null,seq__8931_9019__$1);
var G__9031 = null;
var G__9032 = (0);
var G__9033 = (0);
seq__8931_9005 = G__9030;
chunk__8933_9006 = G__9031;
count__8934_9007 = G__9032;
i__8935_9008 = G__9033;
continue;
}
}
} else
{}
}
break;
}
{
var G__9034 = cljs.core.next.call(null,seq__8930_8996__$1);
var G__9035 = null;
var G__9036 = (0);
var G__9037 = (0);
seq__8930_8955 = G__9034;
chunk__8937_8956 = G__9035;
count__8938_8957 = G__9036;
i__8939_8958 = G__9037;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var unlisten_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unlisten_BANG___delegate.call(this,elem_sel,type_fs);};
unlisten_BANG_.cljs$lang$maxFixedArity = 1;
unlisten_BANG_.cljs$lang$applyTo = (function (arglist__9038){
var elem_sel = cljs.core.first(arglist__9038);
var type_fs = cljs.core.rest(arglist__9038);
return unlisten_BANG___delegate(elem_sel,type_fs);
});
unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = unlisten_BANG___delegate;
return unlisten_BANG_;
})()
;
/**
* Behaves like `listen!`, but removes the listener after the first event occurs.
* @param {...*} var_args
*/
dommy.core.listen_once_BANG_ = (function() { 
var listen_once_BANG___delegate = function (elem_sel,type_fs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,type_fs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"type-fs","type-fs",1567896074,null))))))));
}
var vec__9046_9053 = dommy.core.elem_and_selector.call(null,elem_sel);var elem_9054 = cljs.core.nth.call(null,vec__9046_9053,(0),null);var selector_9055 = cljs.core.nth.call(null,vec__9046_9053,(1),null);var seq__9047_9056 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),type_fs));var chunk__9048_9057 = null;var count__9049_9058 = (0);var i__9050_9059 = (0);while(true){
if((i__9050_9059 < count__9049_9058))
{var vec__9051_9060 = cljs.core._nth.call(null,chunk__9048_9057,i__9050_9059);var type_9061 = cljs.core.nth.call(null,vec__9051_9060,(0),null);var f_9062 = cljs.core.nth.call(null,vec__9051_9060,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_9061,((function (seq__9047_9056,chunk__9048_9057,count__9049_9058,i__9050_9059,vec__9051_9060,type_9061,f_9062,vec__9046_9053,elem_9054,selector_9055){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9061,this_fn);
return f_9062.call(null,e);
});})(seq__9047_9056,chunk__9048_9057,count__9049_9058,i__9050_9059,vec__9051_9060,type_9061,f_9062,vec__9046_9053,elem_9054,selector_9055))
);
{
var G__9063 = seq__9047_9056;
var G__9064 = chunk__9048_9057;
var G__9065 = count__9049_9058;
var G__9066 = (i__9050_9059 + (1));
seq__9047_9056 = G__9063;
chunk__9048_9057 = G__9064;
count__9049_9058 = G__9065;
i__9050_9059 = G__9066;
continue;
}
} else
{var temp__4126__auto___9067 = cljs.core.seq.call(null,seq__9047_9056);if(temp__4126__auto___9067)
{var seq__9047_9068__$1 = temp__4126__auto___9067;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9047_9068__$1))
{var c__5576__auto___9069 = cljs.core.chunk_first.call(null,seq__9047_9068__$1);{
var G__9070 = cljs.core.chunk_rest.call(null,seq__9047_9068__$1);
var G__9071 = c__5576__auto___9069;
var G__9072 = cljs.core.count.call(null,c__5576__auto___9069);
var G__9073 = (0);
seq__9047_9056 = G__9070;
chunk__9048_9057 = G__9071;
count__9049_9058 = G__9072;
i__9050_9059 = G__9073;
continue;
}
} else
{var vec__9052_9074 = cljs.core.first.call(null,seq__9047_9068__$1);var type_9075 = cljs.core.nth.call(null,vec__9052_9074,(0),null);var f_9076 = cljs.core.nth.call(null,vec__9052_9074,(1),null);dommy.core.listen_BANG_.call(null,elem_sel,type_9075,((function (seq__9047_9056,chunk__9048_9057,count__9049_9058,i__9050_9059,vec__9052_9074,type_9075,f_9076,seq__9047_9068__$1,temp__4126__auto___9067,vec__9046_9053,elem_9054,selector_9055){
return (function this_fn(e){dommy.core.unlisten_BANG_.call(null,elem_sel,type_9075,this_fn);
return f_9076.call(null,e);
});})(seq__9047_9056,chunk__9048_9057,count__9049_9058,i__9050_9059,vec__9052_9074,type_9075,f_9076,seq__9047_9068__$1,temp__4126__auto___9067,vec__9046_9053,elem_9054,selector_9055))
);
{
var G__9077 = cljs.core.next.call(null,seq__9047_9068__$1);
var G__9078 = null;
var G__9079 = (0);
var G__9080 = (0);
seq__9047_9056 = G__9077;
chunk__9048_9057 = G__9078;
count__9049_9058 = G__9079;
i__9050_9059 = G__9080;
continue;
}
}
} else
{}
}
break;
}
return elem_sel;
};
var listen_once_BANG_ = function (elem_sel,var_args){
var type_fs = null;if (arguments.length > 1) {
  type_fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return listen_once_BANG___delegate.call(this,elem_sel,type_fs);};
listen_once_BANG_.cljs$lang$maxFixedArity = 1;
listen_once_BANG_.cljs$lang$applyTo = (function (arglist__9081){
var elem_sel = cljs.core.first(arglist__9081);
var type_fs = cljs.core.rest(arglist__9081);
return listen_once_BANG___delegate(elem_sel,type_fs);
});
listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = listen_once_BANG___delegate;
return listen_once_BANG_;
})()
;
