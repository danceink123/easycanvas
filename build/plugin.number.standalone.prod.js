!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var r=e();for(var n in r)("object"==typeof exports?exports:t)[n]=r[n]}}(this,function(){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return t[n].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var r={};return e.m=t,e.c=r,e.p="",e(0)}({0:function(t,e,r){t.exports=r(153)},153:function(t,e){"use strict";var r=void 0,n=function(t){var e=new r.class.sprite(t);e.style=t.style,e.content.img=t.number,e.style.cutLeft=0,e.style.cutWidth=e.style.cutWidth||t.number.width,e.style.cutHeight=Math.floor(e.cutHeight||t.number.height/10);var n=0,o={tick:Math.floor((t.interval||1e3)/16.6),heightRate:1,numberHeight:e.cutHeight,current:0,stop:!1};return e.set=function(t){for(var e in t)o[e]=t[e]},e.getCurrentValue=function(){return o.current},e.setCurrentValue=function(t){o.current=t,e.style.cutTop=o.current*o.heightRate*o.numberHeight},e.scrollToValue=function(t,n){o.current=t,e.style.cutTop=r.transition.linear(e.getStyle("sy"),o.current*o.heightRate*o.numberHeight,n||200)},e.stop=function(){o.stop=!0},e.restart=function(){o.stop=!1,o.current=0,e.style.cutTop=0,n=0},e.hooks={ticked:function(){o.stop||++n<=o.tick||(n=1,o.current++,e.style.cutTop=o.current*o.heightRate*o.numberHeight,o.current>9&&(e.style.cutTop=0,o.current=0))}},e};window&&window.Easycanvas&&(r=window.Easycanvas,r.class.number=n),t.exports=function(t){r=t,t.class.number=n}}})});