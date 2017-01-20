/*! jQuery v1.9.1 | (c) 2005, 2012 jQuery Foundation, Inc. | jquery.org/license */

;(function(e,t){var n,r,i=typeof t,o=e.document,a=e.location,s=e.jQuery,u=e.$,l={},c=[],p="1.9.1",f=c.concat,d=c.push,h=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,b=function(e,t){return new b.fn.init(e,t,r)},x=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,E=/(?:^|:|,)(?:\s*\[)+/g,S=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,A=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,j=/^-ms-/,D=/-([\da-z])/gi,L=function(e,t){return t.toUpperCase()},H=function(e){(o.addEventListener||"load"===e.type||"complete"===o.readyState)&&(q(),b.ready())},q=function(){o.addEventListener?(o.removeEventListener("DOMContentLoaded",H,!1),e.removeEventListener("load",H,!1)):(o.detachEvent("onreadystatechange",H),e.detachEvent("onload",H))};b.fn=b.prototype={jquery:p,constructor:b,init:function(e,n,r){var i,a;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof b?n[0]:n,b.merge(this,b.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:o,!0)),C.test(i[1])&&b.isPlainObject(n))for(i in n)b.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(a=o.getElementById(i[2]),a&&a.parentNode){if(a.id!==i[2])return r.find(e);this.length=1,this[0]=a}return this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):b.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),b.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return h.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=b.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return b.each(this,e,t)},ready:function(e){return b.ready.promise().done(e),this},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(b.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:d,sort:[].sort,splice:[].splice},b.fn.init.prototype=b.fn,b.extend=b.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},u=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},u=2),"object"==typeof s||b.isFunction(s)||(s={}),l===u&&(s=this,--u);l>u;u++)if(null!=(o=arguments[u]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(b.isPlainObject(r)||(n=b.isArray(r)))?(n?(n=!1,a=e&&b.isArray(e)?e:[]):a=e&&b.isPlainObject(e)?e:{},s[i]=b.extend(c,a,r)):r!==t&&(s[i]=r));return s},b.extend({noConflict:function(t){return e.$===b&&(e.$=u),t&&e.jQuery===b&&(e.jQuery=s),b},isReady:!1,readyWait:1,holdReady:function(e){e?b.readyWait++:b.ready(!0)},ready:function(e){if(e===!0?!--b.readyWait:!b.isReady){if(!o.body)return setTimeout(b.ready);b.isReady=!0,e!==!0&&--b.readyWait>0||(n.resolveWith(o,[b]),b.fn.trigger&&b(o).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===b.type(e)},isArray:Array.isArray||function(e){return"array"===b.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if(!e||"object"!==b.type(e)||e.nodeType||b.isWindow(e))return!1;try{if(e.constructor&&!y.call(e,"constructor")&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||y.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=b.buildFragment([e],t,i),i&&b(i).remove(),b.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=b.trim(n),n&&k.test(n.replace(S,"@").replace(A,"]").replace(E,"")))?Function("return "+n)():(b.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||b.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&b.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(j,"ms-").replace(D,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:v&&!v.call("\ufeff\u00a0")?function(e){return null==e?"":v.call(e)}:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?b.merge(n,"string"==typeof e?[e]:e):d.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(g)return g.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return f.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),b.isFunction(e)?(r=h.call(arguments,2),i=function(){return e.apply(n||this,r.concat(h.call(arguments)))},i.guid=e.guid=e.guid||b.guid++,i):t},access:function(e,n,r,i,o,a,s){var u=0,l=e.length,c=null==r;if("object"===b.type(r)){o=!0;for(u in r)b.access(e,n,u,r[u],!0,a,s)}else if(i!==t&&(o=!0,b.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(b(e),n)})),n))for(;l>u;u++)n(e[u],r,s?i:i.call(e[u],u,n(e[u],r)));return o?e:c?n.call(e):l?n(e[0],r):a},now:function(){return(new Date).getTime()}}),b.ready.promise=function(t){if(!n)if(n=b.Deferred(),"complete"===o.readyState)setTimeout(b.ready);else if(o.addEventListener)o.addEventListener("DOMContentLoaded",H,!1),e.addEventListener("load",H,!1);else{o.attachEvent("onreadystatechange",H),e.attachEvent("onload",H);var r=!1;try{r=null==e.frameElement&&o.documentElement}catch(i){}r&&r.doScroll&&function a(){if(!b.isReady){try{r.doScroll("left")}catch(e){return setTimeout(a,50)}q(),b.ready()}}()}return n.promise(t)},b.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=b.type(e);return b.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=b(o);var _={};function F(e){var t=_[e]={};return b.each(e.match(w)||[],function(e,n){t[n]=!0}),t}b.Callbacks=function(e){e="string"==typeof e?_[e]||F(e):b.extend({},e);var n,r,i,o,a,s,u=[],l=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=u.length,n=!0;u&&o>a;a++)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,u&&(l?l.length&&c(l.shift()):r?u=[]:p.disable())},p={add:function(){if(u){var t=u.length;(function i(t){b.each(t,function(t,n){var r=b.type(n);"function"===r?e.unique&&p.has(n)||u.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=u.length:r&&(s=t,c(r))}return this},remove:function(){return u&&b.each(arguments,function(e,t){var r;while((r=b.inArray(t,u,r))>-1)u.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?b.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],this},disable:function(){return u=l=r=t,this},disabled:function(){return!u},lock:function(){return l=t,r||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!u||i&&!l||(n?l.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},b.extend({Deferred:function(e){var t=[["resolve","done",b.Callbacks("once memory"),"resolved"],["reject","fail",b.Callbacks("once memory"),"rejected"],["notify","progress",b.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return b.Deferred(function(n){b.each(t,function(t,o){var a=o[0],s=b.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&b.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?b.extend(e,r):r}},i={};return r.pipe=r.then,b.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=h.call(arguments),r=n.length,i=1!==r||e&&b.isFunction(e.promise)?r:0,o=1===i?e:b.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?h.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,u,l;if(r>1)for(s=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&b.isFunction(n[t].promise)?n[t].promise().done(a(t,l,n)).fail(o.reject).progress(a(t,u,s)):--i;return i||o.resolveWith(l,n),o.promise()}}),b.support=function(){var t,n,r,a,s,u,l,c,p,f,d=o.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*"),r=d.getElementsByTagName("a")[0],!n||!r||!n.length)return{};s=o.createElement("select"),l=s.appendChild(o.createElement("option")),a=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={getSetAttribute:"t"!==d.className,leadingWhitespace:3===d.firstChild.nodeType,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:"/a"===r.getAttribute("href"),opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:!!a.value,optSelected:l.selected,enctype:!!o.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==o.createElement("nav").cloneNode(!0).outerHTML,boxModel:"CSS1Compat"===o.compatMode,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},a.checked=!0,t.noCloneChecked=a.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!l.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}a=o.createElement("input"),a.setAttribute("value",""),t.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),t.radioValue="t"===a.value,a.setAttribute("checked","t"),a.setAttribute("name","t"),u=o.createDocumentFragment(),u.appendChild(a),t.appendChecked=a.checked,t.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;return d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip,b(function(){var n,r,a,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",u=o.getElementsByTagName("body")[0];u&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",u.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",a=d.getElementsByTagName("td"),a[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===a[0].offsetHeight,a[0].style.display="",a[1].style.display="none",t.reliableHiddenOffsets=p&&0===a[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===d.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==u.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(o.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(u.style.zoom=1)),u.removeChild(n),n=d=a=r=null)}),n=s=u=l=r=a=null,t}();var O=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,B=/([A-Z])/g;function P(e,n,r,i){if(b.acceptData(e)){var o,a,s=b.expando,u="string"==typeof n,l=e.nodeType,p=l?b.cache:e,f=l?e[s]:e[s]&&s;if(f&&p[f]&&(i||p[f].data)||!u||r!==t)return f||(l?e[s]=f=c.pop()||b.guid++:f=s),p[f]||(p[f]={},l||(p[f].toJSON=b.noop)),("object"==typeof n||"function"==typeof n)&&(i?p[f]=b.extend(p[f],n):p[f].data=b.extend(p[f].data,n)),o=p[f],i||(o.data||(o.data={}),o=o.data),r!==t&&(o[b.camelCase(n)]=r),u?(a=o[n],null==a&&(a=o[b.camelCase(n)])):a=o,a}}function R(e,t,n){if(b.acceptData(e)){var r,i,o,a=e.nodeType,s=a?b.cache:e,u=a?e[b.expando]:b.expando;if(s[u]){if(t&&(o=n?s[u]:s[u].data)){b.isArray(t)?t=t.concat(b.map(t,b.camelCase)):t in o?t=[t]:(t=b.camelCase(t),t=t in o?[t]:t.split(" "));for(r=0,i=t.length;i>r;r++)delete o[t[r]];if(!(n?$:b.isEmptyObject)(o))return}(n||(delete s[u].data,$(s[u])))&&(a?b.cleanData([e],!0):b.support.deleteExpando||s!=s.window?delete s[u]:s[u]=null)}}}b.extend({cache:{},expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?b.cache[e[b.expando]]:e[b.expando],!!e&&!$(e)},data:function(e,t,n){return P(e,t,n)},removeData:function(e,t){return R(e,t)},_data:function(e,t,n){return P(e,t,n,!0)},_removeData:function(e,t){return R(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&b.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),b.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,s=null;if(e===t){if(this.length&&(s=b.data(o),1===o.nodeType&&!b._data(o,"parsedAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,i.indexOf("data-")||(i=b.camelCase(i.slice(5)),W(o,i,s[i]));b._data(o,"parsedAttrs",!0)}return s}return"object"==typeof e?this.each(function(){b.data(this,e)}):b.access(this,function(n){return n===t?o?W(o,e,b.data(o,e)):null:(this.each(function(){b.data(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){b.removeData(this,e)})}});function W(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(B,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:O.test(r)?b.parseJSON(r):r}catch(o){}b.data(e,n,r)}else r=t}return r}function $(e){var t;for(t in e)if(("data"!==t||!b.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}b.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=b._data(e,n),r&&(!i||b.isArray(r)?i=b._data(e,n,b.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=b.queue(e,t),r=n.length,i=n.shift(),o=b._queueHooks(e,t),a=function(){b.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return b._data(e,n)||b._data(e,n,{empty:b.Callbacks("once memory").add(function(){b._removeData(e,t+"queue"),b._removeData(e,n)})})}}),b.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?b.queue(this[0],e):n===t?this:this.each(function(){var t=b.queue(this,e,n);b._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&b.dequeue(this,e)})},dequeue:function(e){return this.each(function(){b.dequeue(this,e)})},delay:function(e,t){return e=b.fx?b.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=b.Deferred(),a=this,s=this.length,u=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=b._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var I,z,X=/[\t\r\n]/g,U=/\r/g,V=/^(?:input|select|textarea|button|object)$/i,Y=/^(?:a|area)$/i,J=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,G=/^(?:checked|selected)$/i,Q=b.support.getSetAttribute,K=b.support.input;b.fn.extend({attr:function(e,t){return b.access(this,b.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){b.removeAttr(this,e)})},prop:function(e,t){return b.access(this,b.prop,e,t,arguments.length>1)},removeProp:function(e){return e=b.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,u="string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=b.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,u=0===arguments.length||"string"==typeof e&&e;if(b.isFunction(e))return this.each(function(t){b(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(X," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?b.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return b.isFunction(e)?this.each(function(n){b(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var o,a=0,s=b(this),u=t,l=e.match(w)||[];while(o=l[a++])u=r?u:!s.hasClass(o),s[u?"addClass":"removeClass"](o)}else(n===i||"boolean"===n)&&(this.className&&b._data(this,"__className__",this.className),this.className=this.className||e===!1?"":b._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(X," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=b.isFunction(e),this.each(function(n){var o,a=b(this);1===this.nodeType&&(o=i?e.call(this,n,a.val()):e,null==o?o="":"number"==typeof o?o+="":b.isArray(o)&&(o=b.map(o,function(e){return null==e?"":e+""})),r=b.valHooks[this.type]||b.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=b.valHooks[o.type]||b.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(U,""):null==n?"":n)}}}),b.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;for(;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(b.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&b.nodeName(n.parentNode,"optgroup"))){if(t=b(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n=b.makeArray(t);return b(e).find("option").each(function(){this.selected=b.inArray(b(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var o,a,s,u=e.nodeType;if(e&&3!==u&&8!==u&&2!==u)return typeof e.getAttribute===i?b.prop(e,n,r):(a=1!==u||!b.isXMLDoc(e),a&&(n=n.toLowerCase(),o=b.attrHooks[n]||(J.test(n)?z:I)),r===t?o&&a&&"get"in o&&null!==(s=o.get(e,n))?s:(typeof e.getAttribute!==i&&(s=e.getAttribute(n)),null==s?t:s):null!==r?o&&a&&"set"in o&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r):(b.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=b.propFix[n]||n,J.test(n)?!Q&&G.test(n)?e[b.camelCase("default-"+n)]=e[r]=!1:e[r]=!1:b.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!b.support.radioValue&&"radio"===t&&b.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!b.isXMLDoc(e),a&&(n=b.propFix[n]||n,o=b.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):V.test(e.nodeName)||Y.test(e.nodeName)&&e.href?0:t}}}}),z={get:function(e,n){var r=b.prop(e,n),i="boolean"==typeof r&&e.getAttribute(n),o="boolean"==typeof r?K&&Q?null!=i:G.test(n)?e[b.camelCase("default-"+n)]:!!i:e.getAttributeNode(n);return o&&o.value!==!1?n.toLowerCase():t},set:function(e,t,n){return t===!1?b.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&b.propFix[n]||n,n):e[b.camelCase("default-"+n)]=e[n]=!0,n}},K&&Q||(b.attrHooks.value={get:function(e,n){var r=e.getAttributeNode(n);return b.nodeName(e,"input")?e.defaultValue:r&&r.specified?r.value:t},set:function(e,n,r){return b.nodeName(e,"input")?(e.defaultValue=n,t):I&&I.set(e,n,r)}}),Q||(I=b.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&("id"===n||"name"===n||"coords"===n?""!==r.value:r.specified)?r.value:t},set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},b.attrHooks.contenteditable={get:I.get,set:function(e,t,n){I.set(e,""===t?!1:t,n)}},b.each(["width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}})})),b.support.hrefNormalized||(b.each(["href","src","width","height"],function(e,n){b.attrHooks[n]=b.extend(b.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return null==r?t:r}})}),b.each(["href","src"],function(e,t){b.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}})),b.support.style||(b.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),b.support.optSelected||(b.propHooks.selected=b.extend(b.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),b.support.enctype||(b.propFix.enctype="encoding"),b.support.checkOn||b.each(["radio","checkbox"],function(){b.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),b.each(["radio","checkbox"],function(){b.valHooks[this]=b.extend(b.valHooks[this],{set:function(e,n){return b.isArray(n)?e.checked=b.inArray(b(e).val(),n)>=0:t}})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}b.event={global:{},add:function(e,n,r,o,a){var s,u,l,c,p,f,d,h,g,m,y,v=b._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=b.guid++),(u=v.events)||(u=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof b===i||e&&b.event.triggered===e.type?t:b.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(w)||[""],l=n.length;while(l--)s=rt.exec(n[l])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),p=b.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=b.event.special[g]||{},d=b.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&b.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=u[g])||(h=u[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),b.event.global[g]=!0;e=null}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,p,f,d,h,g,m=b.hasData(e)&&b._data(e);if(m&&(c=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(s=rt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=b.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),u=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));u&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||b.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)b.event.remove(e,d+t[l],n,r,!0);b.isEmptyObject(c)&&(delete m.handle,b._removeData(e,"events"))}},trigger:function(n,r,i,a){var s,u,l,c,p,f,d,h=[i||o],g=y.call(n,"type")?n.type:n,m=y.call(n,"namespace")?n.namespace.split("."):[];if(l=f=i=i||o,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+b.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),u=0>g.indexOf(":")&&"on"+g,n=n[b.expando]?n:new b.Event(g,"object"==typeof n&&n),n.isTrigger=!0,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:b.makeArray(r,[n]),p=b.event.special[g]||{},a||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!a&&!p.noBubble&&!b.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(l=l.parentNode);l;l=l.parentNode)h.push(l),f=l;f===(i.ownerDocument||o)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((l=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(b._data(l,"events")||{})[n.type]&&b._data(l,"handle"),s&&s.apply(l,r),s=u&&l[u],s&&b.acceptData(l)&&s.apply&&s.apply(l,r)===!1&&n.preventDefault();if(n.type=g,!(a||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===g&&b.nodeName(i,"a")||!b.acceptData(i)||!u||!i[g]||b.isWindow(i))){f=i[u],f&&(i[u]=null),b.event.triggered=g;try{i[g]()}catch(v){}b.event.triggered=t,f&&(i[u]=f)}return n.result}},dispatch:function(e){e=b.event.fix(e);var n,r,i,o,a,s=[],u=h.call(arguments),l=(b._data(this,"events")||{})[e.type]||[],c=b.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=b.event.handlers.call(this,e,l),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((b.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,u),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],u=n.delegateCount,l=e.target;if(u&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(o=[],a=0;u>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?b(r,this).index(l)>=0:b.find(r,this,null,[l]).length),o[r]&&o.push(i);o.length&&s.push({elem:l,handlers:o})}return n.length>u&&s.push({elem:this,handlers:n.slice(u)}),s},fix:function(e){if(e[b.expando])return e;var t,n,r,i=e.type,a=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new b.Event(a),t=r.length;while(t--)n=r[t],e[n]=a[n];return e.target||(e.target=a.srcElement||o),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,a):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,a,s=n.button,u=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||o,a=i.documentElement,r=i.body,e.pageX=n.clientX+(a&&a.scrollLeft||r&&r.scrollLeft||0)-(a&&a.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(a&&a.scrollTop||r&&r.scrollTop||0)-(a&&a.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&u&&(e.relatedTarget=u===e.target?n.toElement:u),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},click:{trigger:function(){return b.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t}},focus:{trigger:function(){if(this!==o.activeElement&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===o.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=b.extend(new b.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?b.event.trigger(i,null,t):b.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},b.removeEvent=o.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},b.Event=function(e,n){return this instanceof b.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&b.extend(this,n),this.timeStamp=e&&e.timeStamp||b.now(),this[b.expando]=!0,t):new b.Event(e,n)},b.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},b.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){b.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
    return(!i||i!==r&&!b.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),b.support.submitBubbles||(b.event.special.submit={setup:function(){return b.nodeName(this,"form")?!1:(b.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=b.nodeName(n,"input")||b.nodeName(n,"button")?n.form:t;r&&!b._data(r,"submitBubbles")&&(b.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),b._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&b.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return b.nodeName(this,"form")?!1:(b.event.remove(this,"._submit"),t)}}),b.support.changeBubbles||(b.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(b.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),b.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),b.event.simulate("change",this,e,!0)})),!1):(b.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!b._data(t,"changeBubbles")&&(b.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||b.event.simulate("change",this.parentNode,e,!0)}),b._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return b.event.remove(this,"._change"),!Z.test(this.nodeName)}}),b.support.focusinBubbles||b.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){b.event.simulate(t,e.target,b.event.fix(e),!0)};b.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),b.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return b().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=b.guid++)),this.each(function(){b.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,b(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){b.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){b.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?b.event.trigger(e,n,r,!0):t}}),function(e,t){var n,r,i,o,a,s,u,l,c,p,f,d,h,g,m,y,v,x="sizzle"+-new Date,w=e.document,T={},N=0,C=0,k=it(),E=it(),S=it(),A=typeof t,j=1<<31,D=[],L=D.pop,H=D.push,q=D.slice,M=D.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},_="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=F.replace("w","w#"),B="([*^$|!~]?=)",P="\\["+_+"*("+F+")"+_+"*(?:"+B+_+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+O+")|)|)"+_+"*\\]",R=":("+F+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+P.replace(3,8)+")*)|.*)\\)|)",W=RegExp("^"+_+"+|((?:^|[^\\\\])(?:\\\\.)*)"+_+"+$","g"),$=RegExp("^"+_+"*,"+_+"*"),I=RegExp("^"+_+"*([\\x20\\t\\r\\n\\f>+~])"+_+"*"),z=RegExp(R),X=RegExp("^"+O+"$"),U={ID:RegExp("^#("+F+")"),CLASS:RegExp("^\\.("+F+")"),NAME:RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:RegExp("^("+F.replace("w","w*")+")"),ATTR:RegExp("^"+P),PSEUDO:RegExp("^"+R),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+_+"*(even|odd|(([+-]|)(\\d*)n|)"+_+"*(?:([+-]|)"+_+"*(\\d+)|))"+_+"*\\)|)","i"),needsContext:RegExp("^"+_+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+_+"*((?:-\\d)?\\d*)"+_+"*\\)|)(?=[^-]|$)","i")},V=/[\x20\t\r\n\f]*[+~]/,Y=/^[^{]+\{\s*\[native code/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,G=/^(?:input|select|textarea|button)$/i,Q=/^h\d$/i,K=/'|\\/g,Z=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,et=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,tt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{q.call(w.documentElement.childNodes,0)[0].nodeType}catch(nt){q=function(e){var t,n=[];while(t=this[e++])n.push(t);return n}}function rt(e){return Y.test(e+"")}function it(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>i.cacheLength&&delete e[t.shift()],e[n]=r}}function ot(e){return e[x]=!0,e}function at(e){var t=p.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}}function st(e,t,n,r){var i,o,a,s,u,l,f,g,m,v;if((t?t.ownerDocument||t:w)!==p&&c(t),t=t||p,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(!d&&!r){if(i=J.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&y(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return H.apply(n,q.call(t.getElementsByTagName(e),0)),n;if((a=i[3])&&T.getByClassName&&t.getElementsByClassName)return H.apply(n,q.call(t.getElementsByClassName(a),0)),n}if(T.qsa&&!h.test(e)){if(f=!0,g=x,m=t,v=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){l=ft(e),(f=t.getAttribute("id"))?g=f.replace(K,"\\$&"):t.setAttribute("id",g),g="[id='"+g+"'] ",u=l.length;while(u--)l[u]=g+dt(l[u]);m=V.test(e)&&t.parentNode||t,v=l.join(",")}if(v)try{return H.apply(n,q.call(m.querySelectorAll(v),0)),n}catch(b){}finally{f||t.removeAttribute("id")}}}return wt(e.replace(W,"$1"),t,n,r)}a=st.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},c=st.setDocument=function(e){var n=e?e.ownerDocument||e:w;return n!==p&&9===n.nodeType&&n.documentElement?(p=n,f=n.documentElement,d=a(n),T.tagNameNoComments=at(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),T.attributes=at(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),T.getByClassName=at(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),T.getByName=at(function(e){e.id=x+0,e.innerHTML="<a name='"+x+"'></a><div name='"+x+"'></div>",f.insertBefore(e,f.firstChild);var t=n.getElementsByName&&n.getElementsByName(x).length===2+n.getElementsByName(x+0).length;return T.getIdNotName=!n.getElementById(x),f.removeChild(e),t}),i.attrHandle=at(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==A&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},T.getIdNotName?(i.find.ID=function(e,t){if(typeof t.getElementById!==A&&!d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){return e.getAttribute("id")===t}}):(i.find.ID=function(e,n){if(typeof n.getElementById!==A&&!d){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==A&&r.getAttributeNode("id").value===e?[r]:t:[]}},i.filter.ID=function(e){var t=e.replace(et,tt);return function(e){var n=typeof e.getAttributeNode!==A&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=T.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==A?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.NAME=T.getByName&&function(e,n){return typeof n.getElementsByName!==A?n.getElementsByName(name):t},i.find.CLASS=T.getByClassName&&function(e,n){return typeof n.getElementsByClassName===A||d?t:n.getElementsByClassName(e)},g=[],h=[":focus"],(T.qsa=rt(n.querySelectorAll))&&(at(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||h.push("\\["+_+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||h.push(":checked")}),at(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&h.push("[*^$]="+_+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(T.matchesSelector=rt(m=f.matchesSelector||f.mozMatchesSelector||f.webkitMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&at(function(e){T.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",R)}),h=RegExp(h.join("|")),g=RegExp(g.join("|")),y=rt(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},v=f.compareDocumentPosition?function(e,t){var r;return e===t?(u=!0,0):(r=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t))?1&r||e.parentNode&&11===e.parentNode.nodeType?e===n||y(w,e)?-1:t===n||y(w,t)?1:0:4&r?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return u=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:0;if(o===a)return ut(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?ut(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},u=!1,[0,0].sort(v),T.detectDuplicates=u,p):p},st.matches=function(e,t){return st(e,null,null,t)},st.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Z,"='$1']"),!(!T.matchesSelector||d||g&&g.test(t)||h.test(t)))try{var n=m.call(e,t);if(n||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return st(t,p,null,[e]).length>0},st.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},st.attr=function(e,t){var n;return(e.ownerDocument||e)!==p&&c(e),d||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):d||T.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},st.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},st.uniqueSort=function(e){var t,n=[],r=1,i=0;if(u=!T.detectDuplicates,e.sort(v),u){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e};function ut(e,t){var n=t&&e,r=n&&(~t.sourceIndex||j)-(~e.sourceIndex||j);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function lt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ct(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function pt(e){return ot(function(t){return t=+t,ot(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}o=st.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=st.selectors={cacheLength:50,createPseudo:ot,match:U,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(et,tt),e[3]=(e[4]||e[5]||"").replace(et,tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||st.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&st.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return U.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&z.test(n)&&(t=ft(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(et,tt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[e+" "];return t||(t=RegExp("(^|"+_+")"+e+"("+_+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==A&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=st.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!u&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[x]||(m[x]={}),l=c[e]||[],d=l[0]===N&&l[1],f=l[0]===N&&l[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[N,d,f];break}}else if(v&&(l=(t[x]||(t[x]={}))[e])&&l[0]===N)f=l[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[x]||(p[x]={}))[e]=[N,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||st.error("unsupported pseudo: "+e);return r[x]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?ot(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=M.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:ot(function(e){var t=[],n=[],r=s(e.replace(W,"$1"));return r[x]?ot(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ot(function(e){return function(t){return st(e,t).length>0}}),contains:ot(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:ot(function(e){return X.test(e||"")||st.error("unsupported lang: "+e),e=e.replace(et,tt).toLowerCase(),function(t){var n;do if(n=d?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return Q.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:pt(function(){return[0]}),last:pt(function(e,t){return[t-1]}),eq:pt(function(e,t,n){return[0>n?n+t:n]}),even:pt(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:pt(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:pt(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:pt(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}};for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[n]=lt(n);for(n in{submit:!0,reset:!0})i.pseudos[n]=ct(n);function ft(e,t){var n,r,o,a,s,u,l,c=E[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=i.preFilter;while(s){(!n||(r=$.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),u.push(o=[])),n=!1,(r=I.exec(s))&&(n=r.shift(),o.push({value:n,type:r[0].replace(W," ")}),s=s.slice(n.length));for(a in i.filter)!(r=U[a].exec(s))||l[a]&&!(r=l[a](r))||(n=r.shift(),o.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?st.error(e):E(e,u).slice(0)}function dt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function ht(e,t,n){var i=t.dir,o=n&&"parentNode"===i,a=C++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var u,l,c,p=N+" "+a;if(s){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[x]||(t[x]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,s)||r,l[1]===!0)return!0}}function gt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function mt(e,t,n,r,i){var o,a=[],s=0,u=e.length,l=null!=t;for(;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function yt(e,t,n,r,i,o){return r&&!r[x]&&(r=yt(r)),i&&!i[x]&&(i=yt(i,o)),ot(function(o,a,s,u){var l,c,p,f=[],d=[],h=a.length,g=o||xt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:mt(g,f,e,s,u),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,u),r){l=mt(y,d),r(l,[],s,u),c=l.length;while(c--)(p=l[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?M.call(o,p):f[c])>-1&&(o[l]=!(a[l]=p))}}else y=mt(y===a?y.splice(h,y.length):y),i?i(null,a,y,u):H.apply(a,y)})}function vt(e){var t,n,r,o=e.length,a=i.relative[e[0].type],s=a||i.relative[" "],u=a?1:0,c=ht(function(e){return e===t},s,!0),p=ht(function(e){return M.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>u;u++)if(n=i.relative[e[u].type])f=[ht(gt(f),n)];else{if(n=i.filter[e[u].type].apply(null,e[u].matches),n[x]){for(r=++u;o>r;r++)if(i.relative[e[r].type])break;return yt(u>1&&gt(f),u>1&&dt(e.slice(0,u-1)).replace(W,"$1"),n,r>u&&vt(e.slice(u,r)),o>r&&vt(e=e.slice(r)),o>r&&dt(e))}f.push(n)}return gt(f)}function bt(e,t){var n=0,o=t.length>0,a=e.length>0,s=function(s,u,c,f,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,T=l,C=s||a&&i.find.TAG("*",d&&u.parentNode||u),k=N+=null==T?1:Math.random()||.1;for(w&&(l=u!==p&&u,r=n);null!=(h=C[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,u,c)){f.push(h);break}w&&(N=k,r=++n)}o&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,o&&b!==v){g=0;while(m=t[g++])m(x,y,u,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=L.call(f));y=mt(y)}H.apply(f,y),w&&!s&&y.length>0&&v+t.length>1&&st.uniqueSort(f)}return w&&(N=k,l=T),x};return o?ot(s):s}s=st.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=ft(e)),n=t.length;while(n--)o=vt(t[n]),o[x]?r.push(o):i.push(o);o=S(e,bt(i,r))}return o};function xt(e,t,n){var r=0,i=t.length;for(;i>r;r++)st(e,t[r],n);return n}function wt(e,t,n,r){var o,a,u,l,c,p=ft(e);if(!r&&1===p.length){if(a=p[0]=p[0].slice(0),a.length>2&&"ID"===(u=a[0]).type&&9===t.nodeType&&!d&&i.relative[a[1].type]){if(t=i.find.ID(u.matches[0].replace(et,tt),t)[0],!t)return n;e=e.slice(a.shift().value.length)}o=U.needsContext.test(e)?0:a.length;while(o--){if(u=a[o],i.relative[l=u.type])break;if((c=i.find[l])&&(r=c(u.matches[0].replace(et,tt),V.test(a[0].type)&&t.parentNode||t))){if(a.splice(o,1),e=r.length&&dt(a),!e)return H.apply(n,q.call(r,0)),n;break}}}return s(e,p)(r,t,d,n,V.test(e)),n}i.pseudos.nth=i.pseudos.eq;function Tt(){}i.filters=Tt.prototype=i.pseudos,i.setFilters=new Tt,c(),st.attr=b.attr,b.find=st,b.expr=st.selectors,b.expr[":"]=b.expr.pseudos,b.unique=st.uniqueSort,b.text=st.getText,b.isXMLDoc=st.isXML,b.contains=st.contains}(e);var at=/Until$/,st=/^(?:parents|prev(?:Until|All))/,ut=/^.[^:#\[\.,]*$/,lt=b.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};b.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return r=this,this.pushStack(b(e).filter(function(){for(t=0;i>t;t++)if(b.contains(r[t],this))return!0}));for(n=[],t=0;i>t;t++)b.find(e,this[t],n);return n=this.pushStack(i>1?b.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t,n=b(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(b.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1))},filter:function(e){return this.pushStack(ft(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?lt.test(e)?b(e,this.context).index(this[0])>=0:b.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,o=[],a=lt.test(e)||"string"!=typeof e?b(e,t||this.context):0;for(;i>r;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&11!==n.nodeType){if(a?a.index(n)>-1:b.find.matchesSelector(n,e)){o.push(n);break}n=n.parentNode}}return this.pushStack(o.length>1?b.unique(o):o)},index:function(e){return e?"string"==typeof e?b.inArray(this[0],b(e)):b.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?b(e,t):b.makeArray(e&&e.nodeType?[e]:e),r=b.merge(this.get(),n);return this.pushStack(b.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),b.fn.andSelf=b.fn.addBack;function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}b.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return b.dir(e,"parentNode")},parentsUntil:function(e,t,n){return b.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return b.dir(e,"nextSibling")},prevAll:function(e){return b.dir(e,"previousSibling")},nextUntil:function(e,t,n){return b.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return b.dir(e,"previousSibling",n)},siblings:function(e){return b.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return b.sibling(e.firstChild)},contents:function(e){return b.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:b.merge([],e.childNodes)}},function(e,t){b.fn[e]=function(n,r){var i=b.map(this,t,n);return at.test(e)||(r=n),r&&"string"==typeof r&&(i=b.filter(r,i)),i=this.length>1&&!ct[e]?b.unique(i):i,this.length>1&&st.test(e)&&(i=i.reverse()),this.pushStack(i)}}),b.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?b.find.matchesSelector(t[0],e)?[t[0]]:[]:b.find.matches(e,t)},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!b(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(t=t||0,b.isFunction(t))return b.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return b.grep(e,function(e){return e===t===n});if("string"==typeof t){var r=b.grep(e,function(e){return 1===e.nodeType});if(ut.test(t))return b.filter(t,r,!n);t=b.filter(t,r)}return b.grep(e,function(e){return b.inArray(e,t)>=0===n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Nt=/^(?:checkbox|radio)$/i,Ct=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:b.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(o),Dt=jt.appendChild(o.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,b.fn.extend({text:function(e){return b.access(this,function(e){return e===t?b.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(b.isFunction(e))return this.each(function(t){b(this).wrapAll(e.call(this,t))});if(this[0]){var t=b(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return b.isFunction(e)?this.each(function(t){b(this).wrapInner(e.call(this,t))}):this.each(function(){var t=b(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=b.isFunction(e);return this.each(function(n){b(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){b.nodeName(this,"body")||b(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=0;for(;null!=(n=this[r]);r++)(!e||b.filter(e,[n]).length>0)&&(t||1!==n.nodeType||b.cleanData(Ot(n)),n.parentNode&&(t&&b.contains(n.ownerDocument,n)&&Mt(Ot(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&b.cleanData(Ot(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&b.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return b.clone(this,e,t)})},html:function(e){return b.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!b.support.htmlSerialize&&mt.test(e)||!b.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(b.cleanData(Ot(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=b.isFunction(e);return t||"string"==typeof e||(e=b(e).not(this).detach()),this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(b(this).remove(),n.insertBefore(e,t))})},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=f.apply([],e);var i,o,a,s,u,l,c=0,p=this.length,d=this,h=p-1,g=e[0],m=b.isFunction(g);if(m||!(1>=p||"string"!=typeof g||b.support.checkClone)&&Ct.test(g))return this.each(function(i){var o=d.eq(i);m&&(e[0]=g.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(p&&(l=b.buildFragment(e,this[0].ownerDocument,!1,this),i=l.firstChild,1===l.childNodes.length&&(l=i),i)){for(n=n&&b.nodeName(i,"tr"),s=b.map(Ot(l,"script"),Ht),a=s.length;p>c;c++)o=l,c!==h&&(o=b.clone(o,!0,!0),a&&b.merge(s,Ot(o,"script"))),r.call(n&&b.nodeName(this[c],"table")?Lt(this[c],"tbody"):this[c],o,c);if(a)for(u=s[s.length-1].ownerDocument,b.map(s,qt),c=0;a>c;c++)o=s[c],kt.test(o.type||"")&&!b._data(o,"globalEval")&&b.contains(u,o)&&(o.src?b.ajax({url:o.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):b.globalEval((o.text||o.textContent||o.innerHTML||"").replace(St,"")));l=i=null}return this}});function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function Ht(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function Mt(e,t){var n,r=0;for(;null!=(n=e[r]);r++)b._data(n,"globalEval",!t||b._data(t[r],"globalEval"))}function _t(e,t){if(1===t.nodeType&&b.hasData(e)){var n,r,i,o=b._data(e),a=b._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)b.event.add(t,n,s[n][r])}a.data&&(a.data=b.extend({},a.data))}}function Ft(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!b.support.noCloneEvent&&t[b.expando]){i=b._data(t);for(r in i.events)b.removeEvent(t,r,i.handle);t.removeAttribute(b.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),b.support.html5Clone&&e.innerHTML&&!b.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Nt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}b.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){b.fn[e]=function(e){var n,r=0,i=[],o=b(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),b(o[r])[t](n),d.apply(i,n.get());return this.pushStack(i)}});function Ot(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||b.nodeName(o,n)?s.push(o):b.merge(s,Ot(o,n));return n===t||n&&b.nodeName(e,n)?b.merge([e],s):s}function Bt(e){Nt.test(e.type)&&(e.defaultChecked=e.checked)}b.extend({clone:function(e,t,n){var r,i,o,a,s,u=b.contains(e.ownerDocument,e);if(b.support.html5Clone||b.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(b.support.noCloneEvent&&b.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||b.isXMLDoc(e)))for(r=Ot(o),s=Ot(e),a=0;null!=(i=s[a]);++a)r[a]&&Ft(i,r[a]);if(t)if(n)for(s=s||Ot(e),r=r||Ot(o),a=0;null!=(i=s[a]);a++)_t(i,r[a]);else _t(e,o);return r=Ot(o,"script"),r.length>0&&Mt(r,!u&&Ot(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,u,l,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===b.type(o))b.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),u=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[u]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!b.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!b.support.tbody){o="table"!==u||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)b.nodeName(l=o.childNodes[i],"tbody")&&!l.childNodes.length&&o.removeChild(l)
}b.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),b.support.appendChecked||b.grep(Ot(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===b.inArray(o,r))&&(a=b.contains(o.ownerDocument,o),s=Ot(f.appendChild(o),"script"),a&&Mt(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,u=b.expando,l=b.cache,p=b.support.deleteExpando,f=b.event.special;for(;null!=(n=e[s]);s++)if((t||b.acceptData(n))&&(o=n[u],a=o&&l[o])){if(a.events)for(r in a.events)f[r]?b.event.remove(n,r):b.removeEvent(n,r,a.handle);l[o]&&(delete l[o],p?delete n[u]:typeof n.removeAttribute!==i?n.removeAttribute(u):n[u]=null,c.push(o))}}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+x+")(.*)$","i"),Yt=RegExp("^("+x+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+x+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===b.css(e,"display")||!b.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=b._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=b._data(r,"olddisplay",un(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&b._data(r,"olddisplay",i?n:b.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}b.fn.extend({css:function(e,n){return b.access(this,function(e,n,r){var i,o,a={},s=0;if(b.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=b.css(e,n[s],!1,o);return a}return r!==t?b.style(e,n,r):b.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:nn(this))?b(this).show():b(this).hide()})}}),b.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":b.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,u=b.camelCase(n),l=e.style;if(n=b.cssProps[u]||(b.cssProps[u]=tn(l,u)),s=b.cssHooks[n]||b.cssHooks[u],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:l[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(b.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||b.cssNumber[u]||(r+="px"),b.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(l[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{l[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,u=b.camelCase(n);return n=b.cssProps[u]||(b.cssProps[u]=tn(e.style,u)),s=b.cssHooks[n]||b.cssHooks[u],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||b.isNumeric(o)?o||0:a):a},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s.getPropertyValue(n)||s[n]:t,l=e.style;return s&&(""!==u||b.contains(e.ownerDocument,e)||(u=b.style(e,n)),Yt.test(u)&&Ut.test(n)&&(i=l.width,o=l.minWidth,a=l.maxWidth,l.minWidth=l.maxWidth=l.width=u,u=s.width,l.width=i,l.minWidth=o,l.maxWidth=a)),u}):o.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),u=s?s[n]:t,l=e.style;return null==u&&l&&l[n]&&(u=l[n]),Yt.test(u)&&!zt.test(n)&&(i=l.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),l.left="fontSize"===n?"1em":u,u=l.pixelLeft+"px",l.left=i,a&&(o.left=a)),""===u?"auto":u});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=b.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=b.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=b.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=b.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=b.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(b.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function un(e){var t=o,n=Gt[e];return n||(n=ln(e,t),"none"!==n&&n||(Pt=(Pt||b("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=ln(e,t),Pt.detach()),Gt[e]=n),n}function ln(e,t){var n=b(t.createElement(e)).appendTo(t.body),r=b.css(n[0],"display");return n.remove(),r}b.each(["height","width"],function(e,n){b.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(b.css(e,"display"))?b.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,b.support.boxSizing&&"border-box"===b.css(e,"boxSizing",!1,i),i):0)}}}),b.support.opacity||(b.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=b.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===b.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),b(function(){b.support.reliableMarginRight||(b.cssHooks.marginRight={get:function(e,n){return n?b.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!b.support.pixelPosition&&b.fn.position&&b.each(["top","left"],function(e,n){b.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?b(e).position()[n]+"px":r):t}}})}),b.expr&&b.expr.filters&&(b.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!b.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||b.css(e,"display"))},b.expr.filters.visible=function(e){return!b.expr.filters.hidden(e)}),b.each({margin:"",padding:"",border:"Width"},function(e,t){b.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(b.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;b.fn.extend({serialize:function(){return b.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=b.prop(this,"elements");return e?b.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!b(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=b(this).val();return null==n?null:b.isArray(n)?b.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),b.param=function(e,n){var r,i=[],o=function(e,t){t=b.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=b.ajaxSettings&&b.ajaxSettings.traditional),b.isArray(e)||e.jquery&&!b.isPlainObject(e))b.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(b.isArray(t))b.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==b.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}b.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){b.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),b.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var mn,yn,vn=b.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Nn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Cn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=b.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=a.href}catch(Ln){yn=o.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(b.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(u){var l;return o[u]=!0,b.each(e[u]||[],function(e,u){var c=u(n,r,i);return"string"!=typeof c||a||o[c]?a?!(l=c):t:(n.dataTypes.unshift(c),s(c),!1)}),l}return s(n.dataTypes[0])||!o["*"]&&s("*")}function Mn(e,n){var r,i,o=b.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&b.extend(!0,e,r),e}b.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),b.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&b.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?b("<div>").append(b.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},b.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){b.fn[t]=function(e){return this.on(t,e)}}),b.each(["get","post"],function(e,n){b[n]=function(e,r,i,o){return b.isFunction(r)&&(o=o||i,i=r,r=t),b.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),b.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Nn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":b.parseJSON,"text xml":b.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Mn(Mn(e,b.ajaxSettings),t):Mn(b.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,u,l,c,p=b.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?b(f):b.event,h=b.Deferred(),g=b.Callbacks("once memory"),m=p.statusCode||{},y={},v={},x=0,T="canceled",N={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return x||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else N.always(e[N.status]);return this},abort:function(e){var t=e||T;return l&&l.abort(t),k(0,t),this}};if(h.promise(N).complete=g.add,N.success=N.done,N.error=N.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=b.trim(p.dataType||"*").toLowerCase().match(w)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?80:443))==(mn[3]||("http:"===mn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=b.param(p.data,p.traditional)),qn(An,p,n,N),2===x)return N;u=p.global,u&&0===b.active++&&b.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Cn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(b.lastModified[o]&&N.setRequestHeader("If-Modified-Since",b.lastModified[o]),b.etag[o]&&N.setRequestHeader("If-None-Match",b.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&N.setRequestHeader("Content-Type",p.contentType),N.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)N.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,N,p)===!1||2===x))return N.abort();T="abort";for(i in{success:1,error:1,complete:1})N[i](p[i]);if(l=qn(jn,p,n,N)){N.readyState=1,u&&d.trigger("ajaxSend",[N,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){N.abort("timeout")},p.timeout));try{x=1,l.send(y,k)}catch(C){if(!(2>x))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,C=n;2!==x&&(x=2,s&&clearTimeout(s),l=t,a=i||"",N.readyState=e>0?4:0,r&&(w=_n(p,N,r)),e>=200&&300>e||304===e?(p.ifModified&&(T=N.getResponseHeader("Last-Modified"),T&&(b.lastModified[o]=T),T=N.getResponseHeader("etag"),T&&(b.etag[o]=T)),204===e?(c=!0,C="nocontent"):304===e?(c=!0,C="notmodified"):(c=Fn(p,w),C=c.state,y=c.data,v=c.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),N.status=e,N.statusText=(n||C)+"",c?h.resolveWith(f,[y,C,N]):h.rejectWith(f,[N,C,v]),N.statusCode(m),m=t,u&&d.trigger(c?"ajaxSuccess":"ajaxError",[N,p,c?y:v]),g.fireWith(f,[N,C]),u&&(d.trigger("ajaxComplete",[N,p]),--b.active||b.event.trigger("ajaxStop")))}return N},getScript:function(e,n){return b.get(e,t,n,"script")},getJSON:function(e,t,n){return b.get(e,t,n,"json")}});function _n(e,n,r){var i,o,a,s,u=e.contents,l=e.dataTypes,c=e.responseFields;for(s in c)s in r&&(n[c[s]]=r[s]);while("*"===l[0])l.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in u)if(u[s]&&u[s].test(o)){l.unshift(s);break}if(l[0]in r)a=l[0];else{for(s in r){if(!l[0]||e.converters[s+" "+l[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==l[0]&&l.unshift(a),r[a]):t}function Fn(e,t){var n,r,i,o,a={},s=0,u=e.dataTypes.slice(),l=u[0];if(e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u[1])for(i in e.converters)a[i.toLowerCase()]=e.converters[i];for(;r=u[++s];)if("*"!==r){if("*"!==l&&l!==r){if(i=a[l+" "+r]||a["* "+r],!i)for(n in a)if(o=n.split(" "),o[1]===r&&(i=a[l+" "+o[0]]||a["* "+o[0]])){i===!0?i=a[n]:a[n]!==!0&&(r=o[0],u.splice(s--,0,r));break}if(i!==!0)if(i&&e["throws"])t=i(t);else try{t=i(t)}catch(c){return{state:"parsererror",error:i?c:"No conversion from "+l+" to "+r}}}l=r}return{state:"success",data:t}}b.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return b.globalEval(e),e}}}),b.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),b.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=o.head||b("head")[0]||o.documentElement;return{send:function(t,i){n=o.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var On=[],Bn=/(=)\?(?=&|$)|\?\?/;b.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||b.expando+"_"+vn++;return this[e]=!0,e}}),b.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,u=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=b.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||b.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,On.push(o)),s&&b.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}b.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=b.ajaxSettings.xhr(),b.support.cors=!!Rn&&"withCredentials"in Rn,Rn=b.support.ajax=!!Rn,Rn&&b.ajaxTransport(function(n){if(!n.crossDomain||b.support.cors){var r;return{send:function(i,o){var a,s,u=n.xhr();if(n.username?u.open(n.type,n.url,n.async,n.username,n.password):u.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)u[s]=n.xhrFields[s];n.mimeType&&u.overrideMimeType&&u.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)u.setRequestHeader(s,i[s])}catch(l){}u.send(n.hasContent&&n.data||null),r=function(e,i){var s,l,c,p;try{if(r&&(i||4===u.readyState))if(r=t,a&&(u.onreadystatechange=b.noop,$n&&delete Pn[a]),i)4!==u.readyState&&u.abort();else{p={},s=u.status,l=u.getAllResponseHeaders(),"string"==typeof u.responseText&&(p.text=u.responseText);try{c=u.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,l)},n.async?4===u.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},b(e).unload($n)),Pn[a]=r),u.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+x+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=Yn.exec(t),a=i.cur(),s=+a||0,u=1,l=20;if(o){if(n=+o[2],r=o[3]||(b.cssNumber[e]?"":"px"),"px"!==r&&s){s=b.css(i.elem,e,!0)||n||1;do u=u||".5",s/=u,b.style(i.elem,e,s+r);while(u!==(u=i.cur()/a)&&1!==u&&--l)}i.unit=r,i.start=s,i.end=o[1]?s+(o[1]+1)*n:n}return i}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=b.now()}function Zn(e,t){b.each(t,function(t,n){var r=(Qn[t]||[]).concat(Qn["*"]),i=0,o=r.length;for(;o>i;i++)if(r[i].call(e,t,n))return})}function er(e,t,n){var r,i,o=0,a=Gn.length,s=b.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;for(;u>a;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:b.extend({},t),opts:b.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=b.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props;for(tr(c,l.opts.specialEasing);a>o;o++)if(r=Gn[o].call(l,e,c,l.opts))return r;return Zn(l,c),b.isFunction(l.opts.start)&&l.opts.start.call(e,l),b.fx.timer(b.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function tr(e,t){var n,r,i,o,a;for(i in e)if(r=b.camelCase(i),o=t[r],n=e[i],b.isArray(n)&&(o=n[1],n=e[i]=n[0]),i!==r&&(e[r]=n,delete e[i]),a=b.cssHooks[r],a&&"expand"in a){n=a.expand(n),delete e[r];for(i in n)i in e||(e[i]=n[i],t[i]=o)}else t[r]=o}b.Animation=b.extend(er,{tweener:function(e,t){b.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,u,l,c,p,f=this,d=e.style,h={},g=[],m=e.nodeType&&nn(e);n.queue||(c=b._queueHooks(e,"fx"),null==c.unqueued&&(c.unqueued=0,p=c.empty.fire,c.empty.fire=function(){c.unqueued||p()}),c.unqueued++,f.always(function(){f.always(function(){c.unqueued--,b.queue(e,"fx").length||c.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===b.css(e,"display")&&"none"===b.css(e,"float")&&(b.support.inlineBlockNeedsLayout&&"inline"!==un(e.nodeName)?d.zoom=1:d.display="inline-block")),n.overflow&&(d.overflow="hidden",b.support.shrinkWrapBlocks||f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(i in t)if(a=t[i],Vn.exec(a)){if(delete t[i],u=u||"toggle"===a,a===(m?"hide":"show"))continue;g.push(i)}if(o=g.length){s=b._data(e,"fxshow")||b._data(e,"fxshow",{}),"hidden"in s&&(m=s.hidden),u&&(s.hidden=!m),m?b(e).show():f.done(function(){b(e).hide()}),f.done(function(){var t;b._removeData(e,"fxshow");for(t in h)b.style(e,t,h[t])});for(i=0;o>i;i++)r=g[i],l=f.createTween(r,m?s[r]:0),h[r]=s[r]||b.style(e,r),r in s||(s[r]=l.start,m&&(l.end=l.start,l.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}b.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(b.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?b.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=b.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){b.fx.step[e.prop]?b.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[b.cssProps[e.prop]]||b.cssHooks[e.prop])?b.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},b.each(["toggle","show","hide"],function(e,t){var n=b.fn[t];b.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),b.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=b.isEmptyObject(e),o=b.speed(t,n,r),a=function(){var t=er(this,b.extend({},e),o);a.finish=function(){t.stop(!0)},(i||b._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=b.timers,a=b._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&b.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=b._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=b.timers,a=r?r.length:0;for(n.finish=!0,b.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}b.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){b.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),b.speed=function(e,t,n){var r=e&&"object"==typeof e?b.extend({},e):{complete:n||!n&&t||b.isFunction(e)&&e,duration:e,easing:n&&t||t&&!b.isFunction(t)&&t};return r.duration=b.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in b.fx.speeds?b.fx.speeds[r.duration]:b.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){b.isFunction(r.old)&&r.old.call(this),r.queue&&b.dequeue(this,r.queue)},r},b.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},b.timers=[],b.fx=rr.prototype.init,b.fx.tick=function(){var e,n=b.timers,r=0;for(Xn=b.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||b.fx.stop(),Xn=t},b.fx.timer=function(e){e()&&b.timers.push(e)&&b.fx.start()},b.fx.interval=13,b.fx.start=function(){Un||(Un=setInterval(b.fx.tick,b.fx.interval))},b.fx.stop=function(){clearInterval(Un),Un=null},b.fx.speeds={slow:600,fast:200,_default:400},b.fx.step={},b.expr&&b.expr.filters&&(b.expr.filters.animated=function(e){return b.grep(b.timers,function(t){return e===t.elem}).length}),b.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){b.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,b.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},b.offset={setOffset:function(e,t,n){var r=b.css(e,"position");"static"===r&&(e.style.position="relative");var i=b(e),o=i.offset(),a=b.css(e,"top"),s=b.css(e,"left"),u=("absolute"===r||"fixed"===r)&&b.inArray("auto",[a,s])>-1,l={},c={},p,f;u?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),b.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(l.top=t.top-o.top+p),null!=t.left&&(l.left=t.left-o.left+f),"using"in t?t.using.call(e,l):i.css(l)}},b.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===b.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),b.nodeName(e[0],"html")||(n=e.offset()),n.top+=b.css(e[0],"borderTopWidth",!0),n.left+=b.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-b.css(r,"marginTop",!0),left:t.left-n.left-b.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||o.documentElement;while(e&&!b.nodeName(e,"html")&&"static"===b.css(e,"position"))e=e.offsetParent;return e||o.documentElement})}}),b.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);b.fn[e]=function(i){return b.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?b(a).scrollLeft():o,r?o:b(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return b.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}b.each({Height:"height",Width:"width"},function(e,n){b.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){b.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return b.access(this,function(n,r,i){var o;return b.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?b.css(n,r,s):b.style(n,r,i,s)},n,a?i:t,a,null)}})}),e.jQuery=e.$=b,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return b})})(window);


/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */

// AMD support
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        // using AMD; register as anon module
        define(['jquery'], factory);
    } else {
        // no AMD; invoke directly
        factory( (typeof(jQuery) != 'undefined') ? jQuery : window.Zepto );
    }
}

(function($) {
    "use strict";

    /*
     Usage Note:
     -----------
     Do not use both ajaxSubmit and ajaxForm on the same form.  These
     functions are mutually exclusive.  Use ajaxSubmit if you want
     to bind your own submit handler to the form.  For example,

     $(document).ready(function() {
     $('#myForm').on('submit', function(e) {
     e.preventDefault(); // <-- important
     $(this).ajaxSubmit({
     target: '#output'
     });
     });
     });

     Use ajaxForm when you want the plugin to manage all the event binding
     for you.  For example,

     $(document).ready(function() {
     $('#myForm').ajaxForm({
     target: '#output'
     });
     });

     You can also use ajaxForm with delegation (requires jQuery v1.7+), so the
     form does not have to exist when you invoke ajaxForm:

     $('#myForm').ajaxForm({
     delegation: true,
     target: '#output'
     });

     When using ajaxForm, the ajaxSubmit function will be invoked for you
     at the appropriate time.
     */

    /**
     * Feature detection
     */
    var feature = {};
    feature.fileapi = $("<input type='file'/>").get(0).files !== undefined;
    feature.formdata = window.FormData !== undefined;

    var hasProp = !!$.fn.prop;

// attr2 uses prop when it can but checks the return type for
// an expected string.  this accounts for the case where a form
// contains inputs with names like "action" or "method"; in those
// cases "prop" returns the element
    $.fn.attr2 = function() {
        if ( ! hasProp ) {
            return this.attr.apply(this, arguments);
        }
        var val = this.prop.apply(this, arguments);
        if ( ( val && val.jquery ) || typeof val === 'string' ) {
            return val;
        }
        return this.attr.apply(this, arguments);
    };

    /**
     * ajaxSubmit() provides a mechanism for immediately submitting
     * an HTML form using AJAX.
     */
    $.fn.ajaxSubmit = function(options) {
        /*jshint scripturl:true */

        // fast fail if nothing selected (http://dev.jquery.com/ticket/2752)
        if (!this.length) {
            log('ajaxSubmit: skipping submit process - no element selected');
            return this;
        }

        var method, action, url, $form = this;

        if (typeof options == 'function') {
            options = { success: options };
        }
        else if ( options === undefined ) {
            options = {};
        }

        method = options.type || this.attr2('method');
        action = options.url  || this.attr2('action');

        url = (typeof action === 'string') ? $.trim(action) : '';
        url = url || window.location.href || '';
        if (url) {
            // clean url (don't include hash vaue)
            url = (url.match(/^([^#]+)/)||[])[1];
        }

        options = $.extend(true, {
            url:  url,
            success: $.ajaxSettings.success,
            type: method || $.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || '') ? 'javascript:false' : 'about:blank'
        }, options);

        // hook for manipulating the form data before it is extracted;
        // convenient for use with rich editors like tinyMCE or FCKEditor
        var veto = {};
        this.trigger('form-pre-serialize', [this, options, veto]);
        if (veto.veto) {
            log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
            return this;
        }

        // provide opportunity to alter form data before it is serialized
        if (options.beforeSerialize && options.beforeSerialize(this, options) === false) {
            log('ajaxSubmit: submit aborted via beforeSerialize callback');
            return this;
        }

        var traditional = options.traditional;
        if ( traditional === undefined ) {
            traditional = $.ajaxSettings.traditional;
        }

        var elements = [];
        var qx, a = this.formToArray(options.semantic, elements);
        if (options.data) {
            options.extraData = options.data;
            qx = $.param(options.data, traditional);
        }

        // give pre-submit callback an opportunity to abort the submit
        if (options.beforeSubmit && options.beforeSubmit(a, this, options) === false) {
            log('ajaxSubmit: submit aborted via beforeSubmit callback');
            return this;
        }

        // fire vetoable 'validate' event
        this.trigger('form-submit-validate', [a, this, options, veto]);
        if (veto.veto) {
            log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
            return this;
        }

        var q = $.param(a, traditional);
        if (qx) {
            q = ( q ? (q + '&' + qx) : qx );
        }
        if (options.type.toUpperCase() == 'GET') {
            options.url += (options.url.indexOf('?') >= 0 ? '&' : '?') + q;
            options.data = null;  // data is null for 'get'
        }
        else {
            options.data = q; // data is the query string for 'post'
        }

        var callbacks = [];
        if (options.resetForm) {
            callbacks.push(function() { $form.resetForm(); });
        }
        if (options.clearForm) {
            callbacks.push(function() { $form.clearForm(options.includeHidden); });
        }

        // perform a load on the target only if dataType is not provided
        if (!options.dataType && options.target) {
            var oldSuccess = options.success || function(){};
            callbacks.push(function(data) {
                var fn = options.replaceTarget ? 'replaceWith' : 'html';
                $(options.target)[fn](data).each(oldSuccess, arguments);
            });
        }
        else if (options.success) {
            callbacks.push(options.success);
        }

        options.success = function(data, status, xhr) { // jQuery 1.4+ passes xhr as 3rd arg
            var context = options.context || this ;    // jQuery 1.4+ supports scope context
            for (var i=0, max=callbacks.length; i < max; i++) {
                callbacks[i].apply(context, [data, status, xhr || $form, $form]);
            }
        };

        if (options.error) {
            var oldError = options.error;
            options.error = function(xhr, status, error) {
                var context = options.context || this;
                oldError.apply(context, [xhr, status, error, $form]);
            };
        }

        if (options.complete) {
            var oldComplete = options.complete;
            options.complete = function(xhr, status) {
                var context = options.context || this;
                oldComplete.apply(context, [xhr, status, $form]);
            };
        }

        // are there files to upload?

        // [value] (issue #113), also see comment:
        // https://github.com/malsup/form/commit/588306aedba1de01388032d5f42a60159eea9228#commitcomment-2180219
        var fileInputs = $('input[type=file]:enabled', this).filter(function() { return $(this).val() !== ''; });

        var hasFileInputs = fileInputs.length > 0;
        var mp = 'multipart/form-data';
        var multipart = ($form.attr('enctype') == mp || $form.attr('encoding') == mp);

        var fileAPI = feature.fileapi && feature.formdata;
        log("fileAPI :" + fileAPI);
        var shouldUseFrame = (hasFileInputs || multipart) && !fileAPI;

        var jqxhr;

        // options.iframe allows user to force iframe mode
        // 06-NOV-09: now defaulting to iframe mode if file input is detected
        if (options.iframe !== false && (options.iframe || shouldUseFrame)) {
            // hack to fix Safari hang (thanks to Tim Molendijk for this)
            // see:  http://groups.google.com/group/jquery-dev/browse_thread/thread/36395b7ab510dd5d
            if (options.closeKeepAlive) {
                $.get(options.closeKeepAlive, function() {
                    jqxhr = fileUploadIframe(a);
                });
            }
            else {
                jqxhr = fileUploadIframe(a);
            }
        }
        else if ((hasFileInputs || multipart) && fileAPI) {
            jqxhr = fileUploadXhr(a);
        }
        else {
            jqxhr = $.ajax(options);
        }

        $form.removeData('jqxhr').data('jqxhr', jqxhr);

        // clear element array
        for (var k=0; k < elements.length; k++) {
            elements[k] = null;
        }

        // fire 'notify' event
        this.trigger('form-submit-notify', [this, options]);
        return this;

        // utility fn for deep serialization
        function deepSerialize(extraData){
            var serialized = $.param(extraData, options.traditional).split('&');
            var len = serialized.length;
            var result = [];
            var i, part;
            for (i=0; i < len; i++) {
                // #252; undo param space replacement
                serialized[i] = serialized[i].replace(/\+/g,' ');
                part = serialized[i].split('=');
                // #278; use array instead of object storage, favoring array serializations
                result.push([decodeURIComponent(part[0]), decodeURIComponent(part[1])]);
            }
            return result;
        }

        // XMLHttpRequest Level 2 file uploads (big hat tip to francois2metz)
        function fileUploadXhr(a) {
            var formdata = new FormData();

            for (var i=0; i < a.length; i++) {
                formdata.append(a[i].name, a[i].value);
            }

            if (options.extraData) {
                var serializedData = deepSerialize(options.extraData);
                for (i=0; i < serializedData.length; i++) {
                    if (serializedData[i]) {
                        formdata.append(serializedData[i][0], serializedData[i][1]);
                    }
                }
            }

            options.data = null;

            var s = $.extend(true, {}, $.ajaxSettings, options, {
                contentType: false,
                processData: false,
                cache: false,
                type: method || 'POST'
            });

            if (options.uploadProgress) {
                // workaround because jqXHR does not expose upload property
                s.xhr = function() {
                    var xhr = $.ajaxSettings.xhr();
                    if (xhr.upload) {
                        xhr.upload.addEventListener('progress', function(event) {
                            var percent = 0;
                            var position = event.loaded || event.position; /*event.position is deprecated*/
                            var total = event.total;
                            if (event.lengthComputable) {
                                percent = Math.ceil(position / total * 100);
                            }
                            options.uploadProgress(event, position, total, percent);
                        }, false);
                    }
                    return xhr;
                };
            }

            s.data = null;
            var beforeSend = s.beforeSend;
            s.beforeSend = function(xhr, o) {
                //Send FormData() provided by user
                if (options.formData) {
                    o.data = options.formData;
                }
                else {
                    o.data = formdata;
                }
                if(beforeSend) {
                    beforeSend.call(this, xhr, o);
                }
            };
            return $.ajax(s);
        }

        // private function for handling file uploads (hat tip to YAHOO!)
        function fileUploadIframe(a) {
            var form = $form[0], el, i, s, g, id, $io, io, xhr, sub, n, timedOut, timeoutHandle;
            var deferred = $.Deferred();

            // #341
            deferred.abort = function(status) {
                xhr.abort(status);
            };

            if (a) {
                // ensure that every serialized input is still enabled
                for (i=0; i < elements.length; i++) {
                    el = $(elements[i]);
                    if ( hasProp ) {
                        el.prop('disabled', false);
                    }
                    else {
                        el.removeAttr('disabled');
                    }
                }
            }

            s = $.extend(true, {}, $.ajaxSettings, options);
            s.context = s.context || s;
            id = 'jqFormIO' + (new Date().getTime());
            if (s.iframeTarget) {
                $io = $(s.iframeTarget);
                n = $io.attr2('name');
                if (!n) {
                    $io.attr2('name', id);
                }
                else {
                    id = n;
                }
            }
            else {
                $io = $('<iframe name="' + id + '" src="'+ s.iframeSrc +'" />');
                $io.css({ position: 'absolute', top: '-1000px', left: '-1000px' });
            }
            io = $io[0];


            xhr = { // mock object
                aborted: 0,
                responseText: null,
                responseXML: null,
                status: 0,
                statusText: 'n/a',
                getAllResponseHeaders: function() {},
                getResponseHeader: function() {},
                setRequestHeader: function() {},
                abort: function(status) {
                    var e = (status === 'timeout' ? 'timeout' : 'aborted');
                    log('aborting upload... ' + e);
                    this.aborted = 1;

                    try { // #214, #257
                        if (io.contentWindow.document.execCommand) {
                            io.contentWindow.document.execCommand('Stop');
                        }
                    }
                    catch(ignore) {}

                    $io.attr('src', s.iframeSrc); // abort op in progress
                    xhr.error = e;
                    if (s.error) {
                        s.error.call(s.context, xhr, e, status);
                    }
                    if (g) {
                        $.event.trigger("ajaxError", [xhr, s, e]);
                    }
                    if (s.complete) {
                        s.complete.call(s.context, xhr, e);
                    }
                }
            };

            g = s.global;
            // trigger ajax global events so that activity/block indicators work like normal
            if (g && 0 === $.active++) {
                $.event.trigger("ajaxStart");
            }
            if (g) {
                $.event.trigger("ajaxSend", [xhr, s]);
            }

            if (s.beforeSend && s.beforeSend.call(s.context, xhr, s) === false) {
                if (s.global) {
                    $.active--;
                }
                deferred.reject();
                return deferred;
            }
            if (xhr.aborted) {
                deferred.reject();
                return deferred;
            }

            // add submitting element to data if we know it
            sub = form.clk;
            if (sub) {
                n = sub.name;
                if (n && !sub.disabled) {
                    s.extraData = s.extraData || {};
                    s.extraData[n] = sub.value;
                    if (sub.type == "image") {
                        s.extraData[n+'.x'] = form.clk_x;
                        s.extraData[n+'.y'] = form.clk_y;
                    }
                }
            }

            var CLIENT_TIMEOUT_ABORT = 1;
            var SERVER_ABORT = 2;

            function getDoc(frame) {
                /* it looks like contentWindow or contentDocument do not
                 * carry the protocol property in ie8, when running under ssl
                 * frame.document is the only valid response document, since
                 * the protocol is know but not on the other two objects. strange?
                 * "Same origin policy" http://en.wikipedia.org/wiki/Same_origin_policy
                 */

                var doc = null;

                // IE8 cascading access check
                try {
                    if (frame.contentWindow) {
                        doc = frame.contentWindow.document;
                    }
                } catch(err) {
                    // IE8 access denied under ssl & missing protocol
                    log('cannot get iframe.contentWindow document: ' + err);
                }

                if (doc) { // successful getting content
                    return doc;
                }

                try { // simply checking may throw in ie8 under ssl or mismatched protocol
                    doc = frame.contentDocument ? frame.contentDocument : frame.document;
                } catch(err) {
                    // last attempt
                    log('cannot get iframe.contentDocument: ' + err);
                    doc = frame.document;
                }
                return doc;
            }

            // Rails CSRF hack (thanks to Yvan Barthelemy)
            var csrf_token = $('meta[name=csrf-token]').attr('content');
            var csrf_param = $('meta[name=csrf-param]').attr('content');
            if (csrf_param && csrf_token) {
                s.extraData = s.extraData || {};
                s.extraData[csrf_param] = csrf_token;
            }

            // take a breath so that pending repaints get some cpu time before the upload starts
            function doSubmit() {
                // make sure form attrs are set
                var t = $form.attr2('target'),
                    a = $form.attr2('action'),
                    mp = 'multipart/form-data',
                    et = $form.attr('enctype') || $form.attr('encoding') || mp;

                // update form attrs in IE friendly way
                form.setAttribute('target',id);
                if (!method || /post/i.test(method) ) {
                    form.setAttribute('method', 'POST');
                }
                if (a != s.url) {
                    form.setAttribute('action', s.url);
                }

                // ie borks in some cases when setting encoding
                if (! s.skipEncodingOverride && (!method || /post/i.test(method))) {
                    $form.attr({
                        encoding: 'multipart/form-data',
                        enctype:  'multipart/form-data'
                    });
                }

                // support timout
                if (s.timeout) {
                    timeoutHandle = setTimeout(function() { timedOut = true; cb(CLIENT_TIMEOUT_ABORT); }, s.timeout);
                }

                // look for server aborts
                function checkState() {
                    try {
                        var state = getDoc(io).readyState;
                        log('state = ' + state);
                        if (state && state.toLowerCase() == 'uninitialized') {
                            setTimeout(checkState,50);
                        }
                    }
                    catch(e) {
                        log('Server abort: ' , e, ' (', e.name, ')');
                        cb(SERVER_ABORT);
                        if (timeoutHandle) {
                            clearTimeout(timeoutHandle);
                        }
                        timeoutHandle = undefined;
                    }
                }

                // add "extra" data to form if provided in options
                var extraInputs = [];
                try {
                    if (s.extraData) {
                        for (var n in s.extraData) {
                            if (s.extraData.hasOwnProperty(n)) {
                                // if using the $.param format that allows for multiple values with the same name
                                if($.isPlainObject(s.extraData[n]) && s.extraData[n].hasOwnProperty('name') && s.extraData[n].hasOwnProperty('value')) {
                                    extraInputs.push(
                                        $('<input type="hidden" name="'+s.extraData[n].name+'">').val(s.extraData[n].value)
                                            .appendTo(form)[0]);
                                } else {
                                    extraInputs.push(
                                        $('<input type="hidden" name="'+n+'">').val(s.extraData[n])
                                            .appendTo(form)[0]);
                                }
                            }
                        }
                    }

                    if (!s.iframeTarget) {
                        // add iframe to doc and submit the form
                        $io.appendTo('body');
                    }
                    if (io.attachEvent) {
                        io.attachEvent('onload', cb);
                    }
                    else {
                        io.addEventListener('load', cb, false);
                    }
                    setTimeout(checkState,15);

                    try {
                        form.submit();
                    } catch(err) {
                        // just in case form has element with name/id of 'submit'
                        var submitFn = document.createElement('form').submit;
                        submitFn.apply(form);
                    }
                }
                finally {
                    // reset attrs and remove "extra" input elements
                    form.setAttribute('action',a);
                    form.setAttribute('enctype', et); // #380
                    if(t) {
                        form.setAttribute('target', t);
                    } else {
                        $form.removeAttr('target');
                    }
                    $(extraInputs).remove();
                }
            }

            if (s.forceSync) {
                doSubmit();
            }
            else {
                setTimeout(doSubmit, 10); // this lets dom updates render
            }

            var data, doc, domCheckCount = 50, callbackProcessed;

            function cb(e) {
                if (xhr.aborted || callbackProcessed) {
                    return;
                }

                doc = getDoc(io);
                if(!doc) {
                    log('cannot access response document');
                    e = SERVER_ABORT;
                }
                if (e === CLIENT_TIMEOUT_ABORT && xhr) {
                    xhr.abort('timeout');
                    deferred.reject(xhr, 'timeout');
                    return;
                }
                else if (e == SERVER_ABORT && xhr) {
                    xhr.abort('server abort');
                    deferred.reject(xhr, 'error', 'server abort');
                    return;
                }

                if (!doc || doc.location.href == s.iframeSrc) {
                    // response not received yet
                    if (!timedOut) {
                        return;
                    }
                }
                if (io.detachEvent) {
                    io.detachEvent('onload', cb);
                }
                else {
                    io.removeEventListener('load', cb, false);
                }

                var status = 'success', errMsg;
                try {
                    if (timedOut) {
                        throw 'timeout';
                    }

                    var isXml = s.dataType == 'xml' || doc.XMLDocument || $.isXMLDoc(doc);
                    log('isXml='+isXml);
                    if (!isXml && window.opera && (doc.body === null || !doc.body.innerHTML)) {
                        if (--domCheckCount) {
                            // in some browsers (Opera) the iframe DOM is not always traversable when
                            // the onload callback fires, so we loop a bit to accommodate
                            log('requeing onLoad callback, DOM not available');
                            setTimeout(cb, 250);
                            return;
                        }
                        // let this fall through because server response could be an empty document
                        //log('Could not access iframe DOM after mutiple tries.');
                        //throw 'DOMException: not available';
                    }

                    //log('response detected');
                    var docRoot = doc.body ? doc.body : doc.documentElement;
                    xhr.responseText = docRoot ? docRoot.innerHTML : null;
                    xhr.responseXML = doc.XMLDocument ? doc.XMLDocument : doc;
                    if (isXml) {
                        s.dataType = 'xml';
                    }
                    xhr.getResponseHeader = function(header){
                        var headers = {'content-type': s.dataType};
                        return headers[header.toLowerCase()];
                    };
                    // support for XHR 'status' & 'statusText' emulation :
                    if (docRoot) {
                        xhr.status = Number( docRoot.getAttribute('status') ) || xhr.status;
                        xhr.statusText = docRoot.getAttribute('statusText') || xhr.statusText;
                    }

                    var dt = (s.dataType || '').toLowerCase();
                    var scr = /(json|script|text)/.test(dt);
                    if (scr || s.textarea) {
                        // see if user embedded response in textarea
                        var ta = doc.getElementsByTagName('textarea')[0];
                        if (ta) {
                            xhr.responseText = ta.value;
                            // support for XHR 'status' & 'statusText' emulation :
                            xhr.status = Number( ta.getAttribute('status') ) || xhr.status;
                            xhr.statusText = ta.getAttribute('statusText') || xhr.statusText;
                        }
                        else if (scr) {
                            // account for browsers injecting pre around json response
                            var pre = doc.getElementsByTagName('pre')[0];
                            var b = doc.getElementsByTagName('body')[0];
                            if (pre) {
                                xhr.responseText = pre.textContent ? pre.textContent : pre.innerText;
                            }
                            else if (b) {
                                xhr.responseText = b.textContent ? b.textContent : b.innerText;
                            }
                        }
                    }
                    else if (dt == 'xml' && !xhr.responseXML && xhr.responseText) {
                        xhr.responseXML = toXml(xhr.responseText);
                    }

                    try {
                        data = httpData(xhr, dt, s);
                    }
                    catch (err) {
                        status = 'parsererror';
                        xhr.error = errMsg = (err || status);
                    }
                }
                catch (err) {
                    log('error caught: ',err);
                    status = 'error';
                    xhr.error = errMsg = (err || status);
                }

                if (xhr.aborted) {
                    log('upload aborted');
                    status = null;
                }

                if (xhr.status) { // we've set xhr.status
                    status = (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) ? 'success' : 'error';
                }

                // ordering of these callbacks/triggers is odd, but that's how $.ajax does it
                if (status === 'success') {
                    if (s.success) {
                        s.success.call(s.context, data, 'success', xhr);
                    }
                    deferred.resolve(xhr.responseText, 'success', xhr);
                    if (g) {
                        $.event.trigger("ajaxSuccess", [xhr, s]);
                    }
                }
                else if (status) {
                    if (errMsg === undefined) {
                        errMsg = xhr.statusText;
                    }
                    if (s.error) {
                        s.error.call(s.context, xhr, status, errMsg);
                    }
                    deferred.reject(xhr, 'error', errMsg);
                    if (g) {
                        $.event.trigger("ajaxError", [xhr, s, errMsg]);
                    }
                }

                if (g) {
                    $.event.trigger("ajaxComplete", [xhr, s]);
                }

                if (g && ! --$.active) {
                    $.event.trigger("ajaxStop");
                }

                if (s.complete) {
                    s.complete.call(s.context, xhr, status);
                }

                callbackProcessed = true;
                if (s.timeout) {
                    clearTimeout(timeoutHandle);
                }

                // clean up
                setTimeout(function() {
                    if (!s.iframeTarget) {
                        $io.remove();
                    }
                    else { //adding else to clean up existing iframe response.
                        $io.attr('src', s.iframeSrc);
                    }
                    xhr.responseXML = null;
                }, 100);
            }

            var toXml = $.parseXML || function(s, doc) { // use parseXML if available (jQuery 1.5+)
                    if (window.ActiveXObject) {
                        doc = new ActiveXObject('Microsoft.XMLDOM');
                        doc.async = 'false';
                        doc.loadXML(s);
                    }
                    else {
                        doc = (new DOMParser()).parseFromString(s, 'text/xml');
                    }
                    return (doc && doc.documentElement && doc.documentElement.nodeName != 'parsererror') ? doc : null;
                };
            var parseJSON = $.parseJSON || function(s) {
                    /*jslint evil:true */
                    return window['eval']('(' + s + ')');
                };

            var httpData = function( xhr, type, s ) { // mostly lifted from jq1.4.4

                var ct = xhr.getResponseHeader('content-type') || '',
                    xml = type === 'xml' || !type && ct.indexOf('xml') >= 0,
                    data = xml ? xhr.responseXML : xhr.responseText;

                if (xml && data.documentElement.nodeName === 'parsererror') {
                    if ($.error) {
                        $.error('parsererror');
                    }
                }
                if (s && s.dataFilter) {
                    data = s.dataFilter(data, type);
                }
                if (typeof data === 'string') {
                    if (type === 'json' || !type && ct.indexOf('json') >= 0) {
                        data = parseJSON(data);
                    } else if (type === "script" || !type && ct.indexOf("javascript") >= 0) {
                        $.globalEval(data);
                    }
                }
                return data;
            };

            return deferred;
        }
    };

    /**
     * ajaxForm() provides a mechanism for fully automating form submission.
     *
     * The advantages of using this method instead of ajaxSubmit() are:
     *
     * 1: This method will include coordinates for <input type="image" /> elements (if the element
     *    is used to submit the form).
     * 2. This method will include the submit element's name/value data (for the element that was
     *    used to submit the form).
     * 3. This method binds the submit() method to the form for you.
     *
     * The options argument for ajaxForm works exactly as it does for ajaxSubmit.  ajaxForm merely
     * passes the options argument along after properly binding events for submit elements and
     * the form itself.
     */
    $.fn.ajaxForm = function(options) {
        options = options || {};
        options.delegation = options.delegation && $.isFunction($.fn.on);

        // in jQuery 1.3+ we can fix mistakes with the ready state
        if (!options.delegation && this.length === 0) {
            var o = { s: this.selector, c: this.context };
            if (!$.isReady && o.s) {
                log('DOM not ready, queuing ajaxForm');
                $(function() {
                    $(o.s,o.c).ajaxForm(options);
                });
                return this;
            }
            // is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
            log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
            return this;
        }

        if ( options.delegation ) {
            $(document)
                .off('submit.form-plugin', this.selector, doAjaxSubmit)
                .off('click.form-plugin', this.selector, captureSubmittingElement)
                .on('submit.form-plugin', this.selector, options, doAjaxSubmit)
                .on('click.form-plugin', this.selector, options, captureSubmittingElement);
            return this;
        }

        return this.ajaxFormUnbind()
            .bind('submit.form-plugin', options, doAjaxSubmit)
            .bind('click.form-plugin', options, captureSubmittingElement);
    };

// private event handlers
    function doAjaxSubmit(e) {
        /*jshint validthis:true */
        var options = e.data;
        if (!e.isDefaultPrevented()) { // if event has been canceled, don't proceed
            e.preventDefault();
            $(e.target).ajaxSubmit(options); // #365
        }
    }

    function captureSubmittingElement(e) {
        /*jshint validthis:true */
        var target = e.target;
        var $el = $(target);
        if (!($el.is("[type=submit],[type=image]"))) {
            // is this a child element of the submit el?  (ex: a span within a button)
            var t = $el.closest('[type=submit]');
            if (t.length === 0) {
                return;
            }
            target = t[0];
        }
        var form = this;
        form.clk = target;
        if (target.type == 'image') {
            if (e.offsetX !== undefined) {
                form.clk_x = e.offsetX;
                form.clk_y = e.offsetY;
            } else if (typeof $.fn.offset == 'function') {
                var offset = $el.offset();
                form.clk_x = e.pageX - offset.left;
                form.clk_y = e.pageY - offset.top;
            } else {
                form.clk_x = e.pageX - target.offsetLeft;
                form.clk_y = e.pageY - target.offsetTop;
            }
        }
        // clear form vars
        setTimeout(function() { form.clk = form.clk_x = form.clk_y = null; }, 100);
    }


// ajaxFormUnbind unbinds the event handlers that were bound by ajaxForm
    $.fn.ajaxFormUnbind = function() {
        return this.unbind('submit.form-plugin click.form-plugin');
    };

    /**
     * formToArray() gathers form element data into an array of objects that can
     * be passed to any of the following ajax functions: $.get, $.post, or load.
     * Each object in the array has both a 'name' and 'value' property.  An example of
     * an array for a simple login form might be:
     *
     * [ { name: 'username', value: 'jresig' }, { name: 'password', value: 'secret' } ]
     *
     * It is this array that is passed to pre-submit callback functions provided to the
     * ajaxSubmit() and ajaxForm() methods.
     */
    $.fn.formToArray = function(semantic, elements) {
        var a = [];
        if (this.length === 0) {
            return a;
        }

        var form = this[0];
        var formId = this.attr('id');
        var els = semantic ? form.getElementsByTagName('*') : form.elements;
        var els2;

        if (els && !/MSIE [678]/.test(navigator.userAgent)) { // #390
            els = $(els).get();  // convert to standard array
        }

        // #386; account for inputs outside the form which use the 'form' attribute
        if ( formId ) {
            els2 = $(':input[form="' + formId + '"]').get(); // hat tip @thet
            if ( els2.length ) {
                els = (els || []).concat(els2);
            }
        }

        if (!els || !els.length) {
            return a;
        }

        var i,j,n,v,el,max,jmax;
        for(i=0, max=els.length; i < max; i++) {
            el = els[i];
            n = el.name;
            if (!n || el.disabled) {
                continue;
            }

            if (semantic && form.clk && el.type == "image") {
                // handle image inputs on the fly when semantic == true
                if(form.clk == el) {
                    a.push({name: n, value: $(el).val(), type: el.type });
                    a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
                }
                continue;
            }

            v = $.fieldValue(el, true);
            if (v && v.constructor == Array) {
                if (elements) {
                    elements.push(el);
                }
                for(j=0, jmax=v.length; j < jmax; j++) {
                    a.push({name: n, value: v[j]});
                }
            }
            else if (feature.fileapi && el.type == 'file') {
                if (elements) {
                    elements.push(el);
                }
                var files = el.files;
                if (files.length) {
                    for (j=0; j < files.length; j++) {
                        a.push({name: n, value: files[j], type: el.type});
                    }
                }
                else {
                    // #180
                    a.push({ name: n, value: '', type: el.type });
                }
            }
            else if (v !== null && typeof v != 'undefined') {
                if (elements) {
                    elements.push(el);
                }
                a.push({name: n, value: v, type: el.type, required: el.required});
            }
        }

        if (!semantic && form.clk) {
            // input type=='image' are not found in elements array! handle it here
            var $input = $(form.clk), input = $input[0];
            n = input.name;
            if (n && !input.disabled && input.type == 'image') {
                a.push({name: n, value: $input.val()});
                a.push({name: n+'.x', value: form.clk_x}, {name: n+'.y', value: form.clk_y});
            }
        }
        return a;
    };

    /**
     * Serializes form data into a 'submittable' string. This method will return a string
     * in the format: name1=value1&amp;name2=value2
     */
    $.fn.formSerialize = function(semantic) {
        //hand off to jQuery.param for proper encoding
        return $.param(this.formToArray(semantic));
    };

    /**
     * Serializes all field elements in the jQuery object into a query string.
     * This method will return a string in the format: name1=value1&amp;name2=value2
     */
    $.fn.fieldSerialize = function(successful) {
        var a = [];
        this.each(function() {
            var n = this.name;
            if (!n) {
                return;
            }
            var v = $.fieldValue(this, successful);
            if (v && v.constructor == Array) {
                for (var i=0,max=v.length; i < max; i++) {
                    a.push({name: n, value: v[i]});
                }
            }
            else if (v !== null && typeof v != 'undefined') {
                a.push({name: this.name, value: v});
            }
        });
        //hand off to jQuery.param for proper encoding
        return $.param(a);
    };

    /**
     * Returns the value(s) of the element in the matched set.  For example, consider the following form:
     *
     *  <form><fieldset>
     *      <input name="A" type="text" />
     *      <input name="A" type="text" />
     *      <input name="B" type="checkbox" value="B1" />
     *      <input name="B" type="checkbox" value="B2"/>
     *      <input name="C" type="radio" value="C1" />
     *      <input name="C" type="radio" value="C2" />
     *  </fieldset></form>
     *
     *  var v = $('input[type=text]').fieldValue();
     *  // if no values are entered into the text inputs
     *  v == ['','']
     *  // if values entered into the text inputs are 'foo' and 'bar'
     *  v == ['foo','bar']
     *
     *  var v = $('input[type=checkbox]').fieldValue();
     *  // if neither checkbox is checked
     *  v === undefined
     *  // if both checkboxes are checked
     *  v == ['B1', 'B2']
     *
     *  var v = $('input[type=radio]').fieldValue();
     *  // if neither radio is checked
     *  v === undefined
     *  // if first radio is checked
     *  v == ['C1']
     *
     * The successful argument controls whether or not the field element must be 'successful'
     * (per http://www.w3.org/TR/html4/interact/forms.html#successful-controls).
     * The default value of the successful argument is true.  If this value is false the value(s)
     * for each element is returned.
     *
     * Note: This method *always* returns an array.  If no valid value can be determined the
     *    array will be empty, otherwise it will contain one or more values.
     */
    $.fn.fieldValue = function(successful) {
        for (var val=[], i=0, max=this.length; i < max; i++) {
            var el = this[i];
            var v = $.fieldValue(el, successful);
            if (v === null || typeof v == 'undefined' || (v.constructor == Array && !v.length)) {
                continue;
            }
            if (v.constructor == Array) {
                $.merge(val, v);
            }
            else {
                val.push(v);
            }
        }
        return val;
    };

    /**
     * Returns the value of the field element.
     */
    $.fieldValue = function(el, successful) {
        var n = el.name, t = el.type, tag = el.tagName.toLowerCase();
        if (successful === undefined) {
            successful = true;
        }

        if (successful && (!n || el.disabled || t == 'reset' || t == 'button' ||
            (t == 'checkbox' || t == 'radio') && !el.checked ||
            (t == 'submit' || t == 'image') && el.form && el.form.clk != el ||
            tag == 'select' && el.selectedIndex == -1)) {
            return null;
        }

        if (tag == 'select') {
            var index = el.selectedIndex;
            if (index < 0) {
                return null;
            }
            var a = [], ops = el.options;
            var one = (t == 'select-one');
            var max = (one ? index+1 : ops.length);
            for(var i=(one ? index : 0); i < max; i++) {
                var op = ops[i];
                if (op.selected) {
                    var v = op.value;
                    if (!v) { // extra pain for IE...
                        v = (op.attributes && op.attributes.value && !(op.attributes.value.specified)) ? op.text : op.value;
                    }
                    if (one) {
                        return v;
                    }
                    a.push(v);
                }
            }
            return a;
        }
        return $(el).val();
    };

    /**
     * Clears the form data.  Takes the following actions on the form's input fields:
     *  - input text fields will have their 'value' property set to the empty string
     *  - select elements will have their 'selectedIndex' property set to -1
     *  - checkbox and radio inputs will have their 'checked' property set to false
     *  - inputs of type submit, button, reset, and hidden will *not* be effected
     *  - button elements will *not* be effected
     */
    $.fn.clearForm = function(includeHidden) {
        return this.each(function() {
            $('input,select,textarea', this).clearFields(includeHidden);
        });
    };

    /**
     * Clears the selected form elements.
     */
    $.fn.clearFields = $.fn.clearInputs = function(includeHidden) {
        var re = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; // 'hidden' is not in this list
        return this.each(function() {
            var t = this.type, tag = this.tagName.toLowerCase();
            if (re.test(t) || tag == 'textarea') {
                this.value = '';
            }
            else if (t == 'checkbox' || t == 'radio') {
                this.checked = false;
            }
            else if (tag == 'select') {
                this.selectedIndex = -1;
            }
            else if (t == "file") {
                if (/MSIE/.test(navigator.userAgent)) {
                    $(this).replaceWith($(this).clone(true));
                } else {
                    $(this).val('');
                }
            }
            else if (includeHidden) {
                // includeHidden can be the value true, or it can be a selector string
                // indicating a special test; for example:
                //  $('#myForm').clearForm('.special:hidden')
                // the above would clean hidden inputs that have the class of 'special'
                if ( (includeHidden === true && /hidden/.test(t)) ||
                    (typeof includeHidden == 'string' && $(this).is(includeHidden)) ) {
                    this.value = '';
                }
            }
        });
    };

    /**
     * Resets the form data.  Causes all form elements to be reset to their original value.
     */
    $.fn.resetForm = function() {
        return this.each(function() {
            // guard against an input with the name of 'reset'
            // note that IE reports the reset function as an 'object'
            if (typeof this.reset == 'function' || (typeof this.reset == 'object' && !this.reset.nodeType)) {
                this.reset();
            }
        });
    };

    /**
     * Enables or disables any matching elements.
     */
    $.fn.enable = function(b) {
        if (b === undefined) {
            b = true;
        }
        return this.each(function() {
            this.disabled = !b;
        });
    };

    /**
     * Checks/unchecks any matching checkboxes or radio buttons and
     * selects/deselects and matching option elements.
     */
    $.fn.selected = function(select) {
        if (select === undefined) {
            select = true;
        }
        return this.each(function() {
            var t = this.type;
            if (t == 'checkbox' || t == 'radio') {
                this.checked = select;
            }
            else if (this.tagName.toLowerCase() == 'option') {
                var $sel = $(this).parent('select');
                if (select && $sel[0] && $sel[0].type == 'select-one') {
                    // deselect all other options
                    $sel.find('option').selected(false);
                }
                this.selected = select;
            }
        });
    };

// expose debug var
    $.fn.ajaxSubmit.debug = false;

// helper fn for console logging
    function log() {
        if (!$.fn.ajaxSubmit.debug) {
            return;
        }
        var msg = '[jquery.form] ' + Array.prototype.join.call(arguments,'');
        if (window.console && window.console.log) {
            window.console.log(msg);
        }
        else if (window.opera && window.opera.postError) {
            window.opera.postError(msg);
        }
    }

}));


/*
 Masked Input plugin for jQuery
 Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
 Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 Version: 1.3.1
 */
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);



/**
 * jQuery Validation Plugin 1.9.0
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2011 Jörn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function(c){c.extend(c.fn,{validate:function(a){if(this.length){var b=c.data(this[0],"validator");if(b)return b;this.attr("novalidate","novalidate");b=new c.validator(a,this[0]);c.data(this[0],"validator",b);if(b.settings.onsubmit){a=this.find("input, button");a.filter(".cancel").click(function(){b.cancelSubmit=true});b.settings.submitHandler&&a.filter(":submit").click(function(){b.submitButton=this});this.submit(function(d){function e(){if(b.settings.submitHandler){if(b.submitButton)var f=c("<input type='hidden'/>").attr("name",
    b.submitButton.name).val(b.submitButton.value).appendTo(b.currentForm);b.settings.submitHandler.call(b,b.currentForm);b.submitButton&&f.remove();return false}return true}b.settings.debug&&d.preventDefault();if(b.cancelSubmit){b.cancelSubmit=false;return e()}if(b.form()){if(b.pendingRequest){b.formSubmitted=true;return false}return e()}else{b.focusInvalid();return false}})}return b}else a&&a.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing")},valid:function(){if(c(this[0]).is("form"))return this.validate().form();
else{var a=true,b=c(this[0].form).validate();this.each(function(){a&=b.element(this)});return a}},removeAttrs:function(a){var b={},d=this;c.each(a.split(/\s/),function(e,f){b[f]=d.attr(f);d.removeAttr(f)});return b},rules:function(a,b){var d=this[0];if(a){var e=c.data(d.form,"validator").settings,f=e.rules,g=c.validator.staticRules(d);switch(a){case "add":c.extend(g,c.validator.normalizeRule(b));f[d.name]=g;if(b.messages)e.messages[d.name]=c.extend(e.messages[d.name],b.messages);break;case "remove":if(!b){delete f[d.name];
    return g}var h={};c.each(b.split(/\s/),function(j,i){h[i]=g[i];delete g[i]});return h}}d=c.validator.normalizeRules(c.extend({},c.validator.metadataRules(d),c.validator.classRules(d),c.validator.attributeRules(d),c.validator.staticRules(d)),d);if(d.required){e=d.required;delete d.required;d=c.extend({required:e},d)}return d}});c.extend(c.expr[":"],{blank:function(a){return!c.trim(""+a.value)},filled:function(a){return!!c.trim(""+a.value)},unchecked:function(a){return!a.checked}});c.validator=function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              b){this.settings=c.extend(true,{},c.validator.defaults,a);this.currentForm=b;this.init()};c.validator.format=function(a,b){if(arguments.length==1)return function(){var d=c.makeArray(arguments);d.unshift(a);return c.validator.format.apply(this,d)};if(arguments.length>2&&b.constructor!=Array)b=c.makeArray(arguments).slice(1);if(b.constructor!=Array)b=[b];c.each(b,function(d,e){a=a.replace(RegExp("\\{"+d+"\\}","g"),e)});return a};c.extend(c.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",
    validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:c([]),errorLabelContainer:c([]),onsubmit:true,ignore:":hidden",ignoreTitle:false,onfocusin:function(a){this.lastActive=a;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass);this.addWrapper(this.errorsFor(a)).hide()}},onfocusout:function(a){if(!this.checkable(a)&&(a.name in this.submitted||!this.optional(a)))this.element(a)},
    onkeyup:function(a){if(a.name in this.submitted||a==this.lastElement)this.element(a)},onclick:function(a){if(a.name in this.submitted)this.element(a);else a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).addClass(b).removeClass(d):c(a).addClass(b).removeClass(d)},unhighlight:function(a,b,d){a.type==="radio"?this.findByName(a.name).removeClass(b).addClass(d):c(a).removeClass(b).addClass(d)}},setDefaults:function(a){c.extend(c.validator.defaults,
    a)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:c.validator.format("Please enter no more than {0} characters."),
    minlength:c.validator.format("Please enter at least {0} characters."),rangelength:c.validator.format("Please enter a value between {0} and {1} characters long."),range:c.validator.format("Please enter a value between {0} and {1}."),max:c.validator.format("Please enter a value less than or equal to {0}."),min:c.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){function a(e){var f=c.data(this[0].form,"validator"),g="on"+e.type.replace(/^validate/,
        "");f.settings[g]&&f.settings[g].call(f,this[0],e)}this.labelContainer=c(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||c(this.currentForm);this.containers=c(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var b=this.groups={};c.each(this.settings.groups,function(e,f){c.each(f.split(/\s/),function(g,h){b[h]=e})});var d=
    this.settings.rules;c.each(d,function(e,f){d[e]=c.validator.normalizeRule(f)});c(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",a).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",
    a);this.settings.invalidHandler&&c(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},form:function(){this.checkForm();c.extend(this.submitted,this.errorMap);this.invalid=c.extend({},this.errorMap);this.valid()||c(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(a){this.lastElement=
    a=this.validationTargetFor(this.clean(a));this.prepareElement(a);this.currentElements=c(a);var b=this.check(a);if(b)delete this.invalid[a.name];else this.invalid[a.name]=true;if(!this.numberOfInvalids())this.toHide=this.toHide.add(this.containers);this.showErrors();return b},showErrors:function(a){if(a){c.extend(this.errorMap,a);this.errorList=[];for(var b in a)this.errorList.push({message:a[b],element:this.findByName(b)[0]});this.successList=c.grep(this.successList,function(d){return!(d.name in a)})}this.settings.showErrors?
    this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){c.fn.resetForm&&c(this.currentForm).resetForm();this.submitted={};this.lastElement=null;this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b=0,d;for(d in a)b++;return b},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return this.size()==
    0},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{c(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(a){}},findLastActive:function(){var a=this.lastActive;return a&&c.grep(this.errorList,function(b){return b.element.name==a.name}).length==1&&a},elements:function(){var a=this,b={};return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&
a.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in b||!a.objectLength(c(this).rules()))return false;return b[this.name]=true})},clean:function(a){return c(a)[0]},errors:function(){return c(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext)},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=c([]);this.toHide=c([]);this.currentElements=c([])},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers)},
    prepareElement:function(a){this.reset();this.toHide=this.errorsFor(a)},check:function(a){a=this.validationTargetFor(this.clean(a));var b=c(a).rules(),d=false,e;for(e in b){var f={method:e,parameters:b[e]};try{var g=c.validator.methods[e].call(this,a.value.replace(/\r/g,""),a,f.parameters);if(g=="dependency-mismatch")d=true;else{d=false;if(g=="pending"){this.toHide=this.toHide.not(this.errorsFor(a));return}if(!g){this.formatAndAdd(a,f);return false}}}catch(h){this.settings.debug&&window.console&&console.log("exception occured when checking element "+
        a.id+", check the '"+f.method+"' method",h);throw h;}}if(!d){this.objectLength(b)&&this.successList.push(a);return true}},customMetaMessage:function(a,b){if(c.metadata){var d=this.settings.meta?c(a).metadata()[this.settings.meta]:c(a).metadata();return d&&d.messages&&d.messages[b]}},customMessage:function(a,b){var d=this.settings.messages[a];return d&&(d.constructor==String?d:d[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(arguments[a]!==undefined)return arguments[a]},defaultMessage:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             b){return this.findDefined(this.customMessage(a.name,b),this.customMetaMessage(a,b),!this.settings.ignoreTitle&&a.title||undefined,c.validator.messages[b],"<strong>Warning: No message defined for "+a.name+"</strong>")},formatAndAdd:function(a,b){var d=this.defaultMessage(a,b.method),e=/\$?\{(\d+)\}/g;if(typeof d=="function")d=d.call(this,b.parameters,a);else if(e.test(d))d=jQuery.format(d.replace(e,"{$1}"),b.parameters);this.errorList.push({message:d,element:a});this.errorMap[a.name]=d;this.submitted[a.name]=
        d},addWrapper:function(a){if(this.settings.wrapper)a=a.add(a.parent(this.settings.wrapper));return a},defaultShowErrors:function(){for(var a=0;this.errorList[a];a++){var b=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,b.element,this.settings.errorClass,this.settings.validClass);this.showLabel(b.element,b.message)}if(this.errorList.length)this.toShow=this.toShow.add(this.containers);if(this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);
        if(this.settings.unhighlight){a=0;for(b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass)}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return c(this.errorList).map(function(){return this.element})},showLabel:function(a,b){var d=this.errorsFor(a);if(d.length){d.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
        d.attr("generated")&&d.html(b)}else{d=c("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(a),generated:true}).addClass(this.settings.errorClass).html(b||"");if(this.settings.wrapper)d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,c(a)):d.insertAfter(a))}if(!b&&this.settings.success){d.text("");typeof this.settings.success=="string"?d.addClass(this.settings.success):this.settings.success(d)}this.toShow=
        this.toShow.add(d)},errorsFor:function(a){var b=this.idOrName(a);return this.errors().filter(function(){return c(this).attr("for")==b})},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(a){if(this.checkable(a))a=this.findByName(a.name).not(this.settings.ignore)[0];return a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(a){var b=this.currentForm;return c(document.getElementsByName(a)).map(function(d,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                e){return e.form==b&&e.name==a&&e||null})},getLength:function(a,b){switch(b.nodeName.toLowerCase()){case "select":return c("option:selected",b).length;case "input":if(this.checkable(b))return this.findByName(b.name).filter(":checked").length}return a.length},depend:function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):true},dependTypes:{"boolean":function(a){return a},string:function(a,b){return!!c(a,b.form).length},"function":function(a,b){return a(b)}},optional:function(a){return!c.validator.methods.required.call(this,
            c.trim(a.value),a)&&"dependency-mismatch"},startRequest:function(a){if(!this.pending[a.name]){this.pendingRequest++;this.pending[a.name]=true}},stopRequest:function(a,b){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[a.name];if(b&&this.pendingRequest==0&&this.formSubmitted&&this.form()){c(this.currentForm).submit();this.formSubmitted=false}else if(!b&&this.pendingRequest==0&&this.formSubmitted){c(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=
        false}},previousValue:function(a){return c.data(a,"previousValue")||c.data(a,"previousValue",{old:null,valid:true,message:this.defaultMessage(a,"remote")})}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(a,b){a.constructor==String?this.classRuleSettings[a]=b:c.extend(this.classRuleSettings,
    a)},classRules:function(a){var b={};(a=c(a).attr("class"))&&c.each(a.split(" "),function(){this in c.validator.classRuleSettings&&c.extend(b,c.validator.classRuleSettings[this])});return b},attributeRules:function(a){var b={};a=c(a);for(var d in c.validator.methods){var e;if(e=d==="required"&&typeof c.fn.prop==="function"?a.prop(d):a.attr(d))b[d]=e;else if(a[0].getAttribute("type")===d)b[d]=true}b.maxlength&&/-1|2147483647|524288/.test(b.maxlength)&&delete b.maxlength;return b},metadataRules:function(a){if(!c.metadata)return{};
    var b=c.data(a.form,"validator").settings.meta;return b?c(a).metadata()[b]:c(a).metadata()},staticRules:function(a){var b={},d=c.data(a.form,"validator");if(d.settings.rules)b=c.validator.normalizeRule(d.settings.rules[a.name])||{};return b},normalizeRules:function(a,b){c.each(a,function(d,e){if(e===false)delete a[d];else if(e.param||e.depends){var f=true;switch(typeof e.depends){case "string":f=!!c(e.depends,b.form).length;break;case "function":f=e.depends.call(b,b)}if(f)a[d]=e.param!==undefined?
    e.param:true;else delete a[d]}});c.each(a,function(d,e){a[d]=c.isFunction(e)?e(b):e});c.each(["minlength","maxlength","min","max"],function(){if(a[this])a[this]=Number(a[this])});c.each(["rangelength","range"],function(){if(a[this])a[this]=[Number(a[this][0]),Number(a[this][1])]});if(c.validator.autoCreateRanges){if(a.min&&a.max){a.range=[a.min,a.max];delete a.min;delete a.max}if(a.minlength&&a.maxlength){a.rangelength=[a.minlength,a.maxlength];delete a.minlength;delete a.maxlength}}a.messages&&delete a.messages;
    return a},normalizeRule:function(a){if(typeof a=="string"){var b={};c.each(a.split(/\s/),function(){b[this]=true});a=b}return a},addMethod:function(a,b,d){c.validator.methods[a]=b;c.validator.messages[a]=d!=undefined?d:c.validator.messages[a];b.length<3&&c.validator.addClassRules(a,c.validator.normalizeRule(a))},methods:{required:function(a,b,d){if(!this.depend(d,b))return"dependency-mismatch";switch(b.nodeName.toLowerCase()){case "select":return(a=c(b).val())&&a.length>0;case "input":if(this.checkable(b))return this.getLength(a,
        b)>0;default:return c.trim(a).length>0}},remote:function(a,b,d){if(this.optional(b))return"dependency-mismatch";var e=this.previousValue(b);this.settings.messages[b.name]||(this.settings.messages[b.name]={});e.originalMessage=this.settings.messages[b.name].remote;this.settings.messages[b.name].remote=e.message;d=typeof d=="string"&&{url:d}||d;if(this.pending[b.name])return"pending";if(e.old===a)return e.valid;e.old=a;var f=this;this.startRequest(b);var g={};g[b.name]=a;c.ajax(c.extend(true,{url:d,
    mode:"abort",port:"validate"+b.name,dataType:"json",data:g,success:function(h){f.settings.messages[b.name].remote=e.originalMessage;var j=h===true;if(j){var i=f.formSubmitted;f.prepareElement(b);f.formSubmitted=i;f.successList.push(b);f.showErrors()}else{i={};h=h||f.defaultMessage(b,"remote");i[b.name]=e.message=c.isFunction(h)?h(a):h;f.showErrors(i)}e.valid=j;f.stopRequest(b,j)}},d));return"pending"},minlength:function(a,b,d){return this.optional(b)||this.getLength(c.trim(a),b)>=d},maxlength:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               b,d){return this.optional(b)||this.getLength(c.trim(a),b)<=d},rangelength:function(a,b,d){a=this.getLength(c.trim(a),b);return this.optional(b)||a>=d[0]&&a<=d[1]},min:function(a,b,d){return this.optional(b)||a>=d},max:function(a,b,d){return this.optional(b)||a<=d},range:function(a,b,d){return this.optional(b)||a>=d[0]&&a<=d[1]},email:function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},
    url:function(a,b){return this.optional(b)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},
    date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a))},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 -]+/.test(a))return false;var d=0,e=0,f=false;a=a.replace(/\D/g,"");for(var g=a.length-1;g>=
    0;g--){e=a.charAt(g);e=parseInt(e,10);if(f)if((e*=2)>9)e-=9;d+=e;f=!f}return d%10==0},accept:function(a,b,d){d=typeof d=="string"?d.replace(/,/g,"|"):"png|jpe?g|gif";return this.optional(b)||a.match(RegExp(".("+d+")$","i"))},equalTo:function(a,b,d){d=c(d).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){c(b).valid()});return a==d.val()}}});c.format=c.validator.format})(jQuery);
(function(c){var a={};if(c.ajaxPrefilter)c.ajaxPrefilter(function(d,e,f){e=d.port;if(d.mode=="abort"){a[e]&&a[e].abort();a[e]=f}});else{var b=c.ajax;c.ajax=function(d){var e=("port"in d?d:c.ajaxSettings).port;if(("mode"in d?d:c.ajaxSettings).mode=="abort"){a[e]&&a[e].abort();return a[e]=b.apply(this,arguments)}return b.apply(this,arguments)}}})(jQuery);
(function(c){!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(e){e=c.event.fix(e);e.type=b;return c.event.handle.call(this,e)}c.event.special[b]={setup:function(){this.addEventListener(a,d,true)},teardown:function(){this.removeEventListener(a,d,true)},handler:function(e){arguments[0]=c.event.fix(e);arguments[0].type=b;return c.event.handle.apply(this,arguments)}}});c.extend(c.fn,{validateDelegate:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    b,d){return this.bind(b,function(e){var f=c(e.target);if(f.is(a))return d.apply(f,arguments)})}})})(jQuery);


// SmoothScroll v0.9.9
// Licensed under the terms of the MIT license.

// People involved
// - Balazs Galambosi: maintainer (CHANGELOG.txt)
// - Patrick Brunner (patrickb1991@gmail.com)
// - Michael Herf: Pulse Algorithm

(function ($) {
    $(document).ready(function () {

        // Scroll Variables (tweakable)
        var framerate = 150; // [Hz]    150
        var animtime  = 600; // [px]    400
        var stepsize  = 150; // [px]    120

        // Pulse (less tweakable)
        // ratio of "tail" to "acceleration"
        var pulseAlgorithm = true;
        var pulseScale     = 5;    //   8
        var pulseNormalize = 1;

        // Keyboard Settings
        var disableKeyboard = false;
        var arrowscroll     = 50; // [px]   50

        // Excluded pages
        var exclude = "";

        // Other Variables
        var frame = false;
        var direction = { x: 0, y: 0 };
        var initdone  = false;
        var fixedback = true;
        var activeElement;
        var root;

        var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36 };


        /***********************************************
         * INITIALIZE
         ***********************************************/

        /**
         * Tests if smooth scrolling is allowed. Shuts down everything if not.
         */
        function initTest() {

            // disable keys for google reader (spacebar conflict)
            if (document.URL.indexOf("google.com/reader/view") > -1) {
                disableKeyboard = true;
            }

            // disable everything if the page is blacklisted
            if (exclude) {
                var domains = exclude.split(/[,\n] ?/);
                for (var i = domains.length; i--;) {
                    if (document.URL.indexOf(domains[i]) > -1) {
                        removeEvent("mousewheel", wheel);
                        disableKeyboard = true;
                        break;
                    }
                }
            }
        }

        /**
         * Sets up scrolls array, determines if frames are involved.
         */
        function init() {

            if (!document.body) return;

            var body = document.body;
            var html = document.documentElement;
            var windowHeight = window.innerHeight;
            var scrollHeight = body.scrollHeight;

            // check compat mode for root element
            root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
            activeElement = body;

            initTest();
            initdone = true;

            // Checks if this script is running in a frame
            if (top != self) {
                frame = true;
            }

            /**
             * This fixes a bug where the areas left and right to
             * the content does not trigger the onmousewheel event
             * on some pages. e.g.: html, body { height: 100% }
             */
            else if (scrollHeight > windowHeight &&
                (body.offsetHeight <= windowHeight ||
                html.offsetHeight <= windowHeight)) {
                root.style.height = "auto";
                if (root.offsetHeight <= windowHeight) {
                    var underlay = document.createElement("div");
                    underlay.style.clear = "both";
                    body.appendChild(underlay);
                }
            }

            if (document.URL.indexOf("mail.google.com") > -1) {
                var s = document.createElement("style");
                s.innerHTML = ".iu { visibility: hidden }";
                (document.getElementsByTagName("head")[0] || html).appendChild(s);
            }

            if (!fixedback) {
                body.style.backgroundAttachment = "scroll";
            }

            // disable keyboard support
            if (disableKeyboard) {
                removeEvent("keydown", keydown);
            }
        }


        /************************************************
         * SCROLLING
         ************************************************/

        var que = [];
        var pending = false;

        /**
         * Pushes scroll actions to the scrolling queue.
         */
        function scrollArray(elem, left, top, delay) {

            delay || (delay = 1000);
            directionCheck(left, top);

            // push a scroll command
            que.push({
                x: left,
                y: top,
                lastX: (left < 0) ? 0.99 : -0.99,
                lastY: (top  < 0) ? 0.99 : -0.99,
                start: +new Date
            });

            // don't act if there's a pending queue
            if (pending) {
                return;
            }

            var step = function() {

                var now = +new Date;
                var scrollX = 0;
                var scrollY = 0;

                for (var i = 0; i < que.length; i++) {

                    var item = que[i];
                    var elapsed  = now - item.start;
                    var finished = (elapsed >= animtime);

                    // scroll position: [0, 1]
                    var position = (finished) ? 1 : elapsed / animtime;

                    // easing [optional]
                    if (pulseAlgorithm) {
                        position = pulse(position);
                    }

                    // only need the difference
                    var x = (item.x * position - item.lastX) >> 0;
                    var y = (item.y * position - item.lastY) >> 0;

                    // add this to the total scrolling
                    scrollX += x;
                    scrollY += y;

                    // update last values
                    item.lastX += x;
                    item.lastY += y;

                    // delete and step back if it's over
                    if (finished) {
                        que.splice(i, 1); i--;
                    }
                }

                // scroll left
                if (left) {
                    var lastLeft = elem.scrollLeft;
                    elem.scrollLeft += scrollX;

                    // scroll left failed (edge)
                    if (scrollX && elem.scrollLeft === lastLeft) {
                        left = 0;
                    }
                }

                // scroll top
                if (top) {
                    var lastTop = elem.scrollTop;
                    elem.scrollTop += scrollY;

                    // scroll top failed (edge)
                    if (scrollY && elem.scrollTop === lastTop) {
                        top = 0;
                    }
                }

                // clean up if there's nothing left to do
                if (!left && !top) {
                    que = [];
                }

                if (que.length) {
                    setTimeout(step, delay / framerate + 1);
                } else {
                    pending = false;
                }
            }

            // start a new queue of actions
            setTimeout(step, 0);
            pending = true;
        }


        /***********************************************
         * EVENTS
         ***********************************************/

        /**
         * Mouse wheel handler.
         * @param {Object} event
         */
        function wheel(event) {

            if (!initdone) {
                init();
            }

            var target = event.target;
            var overflowing = overflowingAncestor(target);

            // use default if there's no overflowing
            // element or default action is prevented
            if (!overflowing || event.defaultPrevented ||
                isNodeName(activeElement, "embed") ||
                (isNodeName(target, "embed") && /\.pdf/i.test(target.src))) {
                return true;
            }

            var deltaX = event.wheelDeltaX || 0;
            var deltaY = event.wheelDeltaY || 0;

            // use wheelDelta if deltaX/Y is not available
            if (!deltaX && !deltaY) {
                deltaY = event.wheelDelta || 0;
            }

            // scale by step size
            // delta is 120 most of the time
            // synaptics seems to send 1 sometimes
            if (Math.abs(deltaX) > 1.2) {
                deltaX *= stepsize / 120;
            }
            if (Math.abs(deltaY) > 1.2) {
                deltaY *= stepsize / 120;
            }

            scrollArray(overflowing, -deltaX, -deltaY);
            event.preventDefault();
        }

        /**
         * Keydown event handler.
         * @param {Object} event
         */
        function keydown(event) {

            var target   = event.target;
            var modifier = event.ctrlKey || event.altKey || event.metaKey;

            // do nothing if user is editing text
            // or using a modifier key (except shift)
            if ( /input|textarea|embed/i.test(target.nodeName) ||
                target.isContentEditable ||
                event.defaultPrevented   ||
                modifier ) {
                return true;
            }
            // spacebar should trigger button press
            if (isNodeName(target, "button") &&
                event.keyCode === key.spacebar) {
                return true;
            }

            var shift, x = 0, y = 0;
            var elem = overflowingAncestor(activeElement);
            var clientHeight = elem.clientHeight;

            if (elem == document.body) {
                clientHeight = window.innerHeight;
            }

            switch (event.keyCode) {
                case key.up:
                    y = -arrowscroll;
                    break;
                case key.down:
                    y = arrowscroll;
                    break;
                case key.spacebar: // (+ shift)
                    shift = event.shiftKey ? 1 : -1;
                    y = -shift * clientHeight * 0.9;
                    break;
                case key.pageup:
                    y = -clientHeight * 0.9;
                    break;
                case key.pagedown:
                    y = clientHeight * 0.9;
                    break;
                case key.home:
                    y = -elem.scrollTop;
                    break;
                case key.end:
                    var damt = elem.scrollHeight - elem.scrollTop - clientHeight;
                    y = (damt > 0) ? damt+10 : 0;
                    break;
                case key.left:
                    x = -arrowscroll;
                    break;
                case key.right:
                    x = arrowscroll;
                    break;
                default:
                    return true; // a key we don't care about
            }

            scrollArray(elem, x, y);
            event.preventDefault();
        }

        /**
         * Mousedown event only for updating activeElement
         */
        function mousedown(event) {
            activeElement = event.target;
        }


        /***********************************************
         * OVERFLOW
         ***********************************************/

        var cache = {}; // cleared out every once in while
        setInterval(function(){ cache = {}; }, 10 * 1000);

        var uniqueID = (function() {
            var i = 0;
            return function (el) {
                return el.uniqueID || (el.uniqueID = i++);
            };
        })();

        function setCache(elems, overflowing) {
            for (var i = elems.length; i--;)
                cache[uniqueID(elems[i])] = overflowing;
            return overflowing;
        }

        function overflowingAncestor(el) {
            var elems = [];
            var rootScrollHeight = root.scrollHeight;
            do {
                var cached = cache[uniqueID(el)];
                if (cached) {
                    return setCache(elems, cached);
                }
                elems.push(el);
                if (rootScrollHeight === el.scrollHeight) {
                    if (!frame || root.clientHeight + 10 < rootScrollHeight) {
                        return setCache(elems, document.body); // scrolling root in WebKit
                    }
                } else if (el.clientHeight + 10 < el.scrollHeight) {
                    overflow = getComputedStyle(el, "").getPropertyValue("overflow");
                    if (overflow === "scroll" || overflow === "auto") {
                        return setCache(elems, el);
                    }
                }
            } while (el = el.parentNode);
        }


        /***********************************************
         * HELPERS
         ***********************************************/

        function addEvent(type, fn, bubble) {
            window.addEventListener(type, fn, (bubble||false));
        }

        function removeEvent(type, fn, bubble) {
            window.removeEventListener(type, fn, (bubble||false));
        }

        function isNodeName(el, tag) {
            return el.nodeName.toLowerCase() === tag.toLowerCase();
        }

        function directionCheck(x, y) {
            x = (x > 0) ? 1 : -1;
            y = (y > 0) ? 1 : -1;
            if (direction.x !== x || direction.y !== y) {
                direction.x = x;
                direction.y = y;
                que = [];
            }
        }

        /***********************************************
         * PULSE
         ***********************************************/

        /**
         * Viscous fluid with a pulse for part and decay for the rest.
         * - Applies a fixed force over an interval (a damped acceleration), and
         * - Lets the exponential bleed away the velocity over a longer interval
         * - Michael Herf, http://stereopsis.com/stopping/
         */
        function pulse_(x) {
            var val, start, expx;
            // test
            x = x * pulseScale;
            if (x < 1) { // acceleartion
                val = x - (1 - Math.exp(-x));
            } else {     // tail
                // the previous animation ended here:
                start = Math.exp(-1);
                // simple viscous drag
                x -= 1;
                expx = 1 - Math.exp(-x);
                val = start + (expx * (1 - start));
            }
            return val * pulseNormalize;
        }

        function pulse(x) {
            if (x >= 1) return 1;
            if (x <= 0) return 0;

            if (pulseNormalize == 1) {
                pulseNormalize /= pulse_(1);
            }
            return pulse_(x);
        }

        // only for Chrome
        if (/chrome/.test(navigator.userAgent.toLowerCase())) {
            addEvent("mousedown", mousedown);
            addEvent("mousewheel", wheel);
            addEvent("keydown", keydown);
            addEvent("load", init);
        }
    });
})(jQuery);


/*wow js*/
(function() {
    var MutationObserver, Util, WeakMap, getComputedStyle, getComputedStyleRX,
        __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
        __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

    Util = (function() {
        function Util() {}

        Util.prototype.extend = function(custom, defaults) {
            var key, value;
            for (key in defaults) {
                value = defaults[key];
                if (custom[key] == null) {
                    custom[key] = value;
                }
            }
            return custom;
        };

        Util.prototype.isMobile = function(agent) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
        };

        Util.prototype.addEvent = function(elem, event, fn) {
            if (elem.addEventListener != null) {
                return elem.addEventListener(event, fn, false);
            } else if (elem.attachEvent != null) {
                return elem.attachEvent("on" + event, fn);
            } else {
                return elem[event] = fn;
            }
        };

        Util.prototype.removeEvent = function(elem, event, fn) {
            if (elem.removeEventListener != null) {
                return elem.removeEventListener(event, fn, false);
            } else if (elem.detachEvent != null) {
                return elem.detachEvent("on" + event, fn);
            } else {
                return delete elem[event];
            }
        };

        Util.prototype.innerHeight = function() {
            if ('innerHeight' in window) {
                return window.innerHeight;
            } else {
                return document.documentElement.clientHeight;
            }
        };

        return Util;

    })();

    WeakMap = this.WeakMap || this.MozWeakMap || (WeakMap = (function() {
            function WeakMap() {
                this.keys = [];
                this.values = [];
            }

            WeakMap.prototype.get = function(key) {
                var i, item, _i, _len, _ref;
                _ref = this.keys;
                for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                    item = _ref[i];
                    if (item === key) {
                        return this.values[i];
                    }
                }
            };

            WeakMap.prototype.set = function(key, value) {
                var i, item, _i, _len, _ref;
                _ref = this.keys;
                for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
                    item = _ref[i];
                    if (item === key) {
                        this.values[i] = value;
                        return;
                    }
                }
                this.keys.push(key);
                return this.values.push(value);
            };

            return WeakMap;

        })());

    MutationObserver = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (MutationObserver = (function() {
            function MutationObserver() {
                if (typeof console !== "undefined" && console !== null) {
                    console.warn('MutationObserver is not supported by your browser.');
                }
                if (typeof console !== "undefined" && console !== null) {
                    console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
                }
            }

            MutationObserver.notSupported = true;

            MutationObserver.prototype.observe = function() {};

            return MutationObserver;

        })());

    getComputedStyle = this.getComputedStyle || function(el, pseudo) {
            this.getPropertyValue = function(prop) {
                var _ref;
                if (prop === 'float') {
                    prop = 'styleFloat';
                }
                if (getComputedStyleRX.test(prop)) {
                    prop.replace(getComputedStyleRX, function(_, char) {
                        return char.toUpperCase();
                    });
                }
                return ((_ref = el.currentStyle) != null ? _ref[prop] : void 0) || null;
            };
            return this;
        };

    getComputedStyleRX = /(\-([a-z]){1})/g;

    this.WOW = (function() {
        WOW.prototype.defaults = {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true
        };

        function WOW(options) {
            if (options == null) {
                options = {};
            }
            this.scrollCallback = __bind(this.scrollCallback, this);
            this.scrollHandler = __bind(this.scrollHandler, this);
            this.start = __bind(this.start, this);
            this.scrolled = true;
            this.config = this.util().extend(options, this.defaults);
            this.animationNameCache = new WeakMap();
        }

        WOW.prototype.init = function() {
            var _ref;
            this.element = window.document.documentElement;
            if ((_ref = document.readyState) === "interactive" || _ref === "complete") {
                this.start();
            } else {
                this.util().addEvent(document, 'DOMContentLoaded', this.start);
            }
            return this.finished = [];
        };

        WOW.prototype.start = function() {
            var box, _i, _len, _ref;
            this.stopped = false;
            this.boxes = (function() {
                var _i, _len, _ref, _results;
                _ref = this.element.querySelectorAll("." + this.config.boxClass);
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    box = _ref[_i];
                    _results.push(box);
                }
                return _results;
            }).call(this);
            this.all = (function() {
                var _i, _len, _ref, _results;
                _ref = this.boxes;
                _results = [];
                for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                    box = _ref[_i];
                    _results.push(box);
                }
                return _results;
            }).call(this);
            if (this.boxes.length) {
                if (this.disabled()) {
                    this.resetStyle();
                } else {
                    _ref = this.boxes;
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        box = _ref[_i];
                        this.applyStyle(box, true);
                    }
                    this.util().addEvent(window, 'scroll', this.scrollHandler);
                    this.util().addEvent(window, 'resize', this.scrollHandler);
                    this.interval = setInterval(this.scrollCallback, 50);
                }
            }
            if (this.config.live) {
                return new MutationObserver((function(_this) {
                    return function(records) {
                        var node, record, _j, _len1, _results;
                        _results = [];
                        for (_j = 0, _len1 = records.length; _j < _len1; _j++) {
                            record = records[_j];
                            _results.push((function() {
                                var _k, _len2, _ref1, _results1;
                                _ref1 = record.addedNodes || [];
                                _results1 = [];
                                for (_k = 0, _len2 = _ref1.length; _k < _len2; _k++) {
                                    node = _ref1[_k];
                                    _results1.push(this.doSync(node));
                                }
                                return _results1;
                            }).call(_this));
                        }
                        return _results;
                    };
                })(this)).observe(document.body, {
                    childList: true,
                    subtree: true
                });
            }
        };

        WOW.prototype.stop = function() {
            this.stopped = true;
            this.util().removeEvent(window, 'scroll', this.scrollHandler);
            this.util().removeEvent(window, 'resize', this.scrollHandler);
            if (this.interval != null) {
                return clearInterval(this.interval);
            }
        };

        WOW.prototype.sync = function(element) {
            if (MutationObserver.notSupported) {
                return this.doSync(this.element);
            }
        };

        WOW.prototype.doSync = function(element) {
            var box, _i, _len, _ref, _results;
            if (element == null) {
                element = this.element;
            }
            if (element.nodeType !== 1) {
                return;
            }
            element = element.parentNode || element;
            _ref = element.querySelectorAll("." + this.config.boxClass);
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                box = _ref[_i];
                if (__indexOf.call(this.all, box) < 0) {
                    this.boxes.push(box);
                    this.all.push(box);
                    if (this.stopped || this.disabled()) {
                        this.resetStyle();
                    } else {
                        this.applyStyle(box, true);
                    }
                    _results.push(this.scrolled = true);
                } else {
                    _results.push(void 0);
                }
            }
            return _results;
        };

        WOW.prototype.show = function(box) {
            this.applyStyle(box);
            return box.className = "" + box.className + " " + this.config.animateClass;
        };

        WOW.prototype.applyStyle = function(box, hidden) {
            var delay, duration, iteration;
            duration = box.getAttribute('data-wow-duration');
            delay = box.getAttribute('data-wow-delay');
            iteration = box.getAttribute('data-wow-iteration');
            return this.animate((function(_this) {
                return function() {
                    return _this.customStyle(box, hidden, duration, delay, iteration);
                };
            })(this));
        };

        WOW.prototype.animate = (function() {
            if ('requestAnimationFrame' in window) {
                return function(callback) {
                    return window.requestAnimationFrame(callback);
                };
            } else {
                return function(callback) {
                    return callback();
                };
            }
        })();

        WOW.prototype.resetStyle = function() {
            var box, _i, _len, _ref, _results;
            _ref = this.boxes;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                box = _ref[_i];
                _results.push(box.style.visibility = 'visible');
            }
            return _results;
        };

        WOW.prototype.customStyle = function(box, hidden, duration, delay, iteration) {
            if (hidden) {
                this.cacheAnimationName(box);
            }
            box.style.visibility = hidden ? 'hidden' : 'visible';
            if (duration) {
                this.vendorSet(box.style, {
                    animationDuration: duration
                });
            }
            if (delay) {
                this.vendorSet(box.style, {
                    animationDelay: delay
                });
            }
            if (iteration) {
                this.vendorSet(box.style, {
                    animationIterationCount: iteration
                });
            }
            this.vendorSet(box.style, {
                animationName: hidden ? 'none' : this.cachedAnimationName(box)
            });
            return box;
        };

        WOW.prototype.vendors = ["moz", "webkit"];

        WOW.prototype.vendorSet = function(elem, properties) {
            var name, value, vendor, _results;
            _results = [];
            for (name in properties) {
                value = properties[name];
                elem["" + name] = value;
                _results.push((function() {
                    var _i, _len, _ref, _results1;
                    _ref = this.vendors;
                    _results1 = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        vendor = _ref[_i];
                        _results1.push(elem["" + vendor + (name.charAt(0).toUpperCase()) + (name.substr(1))] = value);
                    }
                    return _results1;
                }).call(this));
            }
            return _results;
        };

        WOW.prototype.vendorCSS = function(elem, property) {
            var result, style, vendor, _i, _len, _ref;
            style = getComputedStyle(elem);
            result = style.getPropertyCSSValue(property);
            _ref = this.vendors;
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                vendor = _ref[_i];
                result = result || style.getPropertyCSSValue("-" + vendor + "-" + property);
            }
            return result;
        };

        WOW.prototype.animationName = function(box) {
            var animationName;
            try {
                animationName = this.vendorCSS(box, 'animation-name').cssText;
            } catch (_error) {
                animationName = getComputedStyle(box).getPropertyValue('animation-name');
            }
            if (animationName === 'none') {
                return '';
            } else {
                return animationName;
            }
        };

        WOW.prototype.cacheAnimationName = function(box) {
            return this.animationNameCache.set(box, this.animationName(box));
        };

        WOW.prototype.cachedAnimationName = function(box) {
            return this.animationNameCache.get(box);
        };

        WOW.prototype.scrollHandler = function() {
            return this.scrolled = true;
        };

        WOW.prototype.scrollCallback = function() {
            var box;
            if (this.scrolled) {
                this.scrolled = false;
                this.boxes = (function() {
                    var _i, _len, _ref, _results;
                    _ref = this.boxes;
                    _results = [];
                    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                        box = _ref[_i];
                        if (!(box)) {
                            continue;
                        }
                        if (this.isVisible(box)) {
                            this.show(box);
                            continue;
                        }
                        _results.push(box);
                    }
                    return _results;
                }).call(this);
                if (!(this.boxes.length || this.config.live)) {
                    return this.stop();
                }
            }
        };

        WOW.prototype.offsetTop = function(element) {
            var top;
            while (element.offsetTop === void 0) {
                element = element.parentNode;
            }
            top = element.offsetTop;
            while (element = element.offsetParent) {
                top += element.offsetTop;
            }
            return top;
        };

        WOW.prototype.isVisible = function(box) {
            var bottom, offset, top, viewBottom, viewTop;
            offset = box.getAttribute('data-wow-offset') || this.config.offset;
            viewTop = window.pageYOffset;
            viewBottom = viewTop + Math.min(this.element.clientHeight, this.util().innerHeight()) - offset;
            top = this.offsetTop(box);
            bottom = top + box.clientHeight;
            return top <= viewBottom && bottom >= viewTop;
        };

        WOW.prototype.util = function() {
            return this._util != null ? this._util : this._util = new Util();
        };

        WOW.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        };

        return WOW;

    })();

}).call(this);

wow = new WOW(
    {
        boxClass:     'wow',      /* default */
        animateClass: 'animated', /* default */
        offset:       0,          /* default */
        mobile:       false       /* default */
    }
);
wow.init();


/*!
 * jQuery Cookie Plugin v1.4.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as anonymous module.
        define(['jquery'], factory);
    } else {
        // Browser globals.
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
        } catch(e) {
            return;
        }

        try {
            // If we can't parse the cookie, ignore it, it's unusable.
            return config.json ? JSON.parse(s) : s;
        } catch(e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write
        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) !== undefined) {
            // Must not alter options, thus extending a fresh object...
            $.cookie(key, '', $.extend({}, options, { expires: -1 }));
            return true;
        }
        return false;
    };

}));


/*owl*/
/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

    var drag, state, e;

    /**
     * Template for status information about drag and touch events.
     * @private
     */
    drag = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    };

    /**
     * Template for some status informations.
     * @private
     */
    state = {
        isTouch: false,
        isScrolling: false,
        isSwiping: false,
        direction: false,
        inMotion: false
    };

    /**
     * Event functions references.
     * @private
     */
    e = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    };

    /**
     * Creates a carousel.
     * @class The Owl Carousel.
     * @public
     * @param {HTMLElement|jQuery} element - The element to create the carousel for.
     * @param {Object} [options] - The options
     */
    function Owl(element, options) {

        /**
         * Current settings for the carousel.
         * @public
         */
        this.settings = null;

        /**
         * Current options set by the caller including defaults.
         * @public
         */
        this.options = $.extend({}, Owl.Defaults, options);

        /**
         * Plugin element.
         * @public
         */
        this.$element = $(element);

        /**
         * Caches informations about drag and touch events.
         */
        this.drag = $.extend({}, drag);

        /**
         * Caches some status informations.
         * @protected
         */
        this.state = $.extend({}, state);

        /**
         * @protected
         * @todo Must be documented
         */
        this.e = $.extend({}, e);

        /**
         * References to the running plugins of this carousel.
         * @protected
         */
        this._plugins = {};

        /**
         * Currently suppressed events to prevent them from beeing retriggered.
         * @protected
         */
        this._supress = {};

        /**
         * Absolute current position.
         * @protected
         */
        this._current = null;

        /**
         * Animation speed in milliseconds.
         * @protected
         */
        this._speed = null;

        /**
         * Coordinates of all items in pixel.
         * @todo The name of this member is missleading.
         * @protected
         */
        this._coordinates = [];

        /**
         * Current breakpoint.
         * @todo Real media queries would be nice.
         * @protected
         */
        this._breakpoint = null;

        /**
         * Current width of the plugin element.
         */
        this._width = null;

        /**
         * All real items.
         * @protected
         */
        this._items = [];

        /**
         * All cloned items.
         * @protected
         */
        this._clones = [];

        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         * @protected
         */
        this._mergers = [];

        /**
         * Invalidated parts within the update process.
         * @protected
         */
        this._invalidated = {};

        /**
         * Ordered list of workers for the update process.
         * @protected
         */
        this._pipe = [];

        $.each(Owl.Plugins, $.proxy(function(key, plugin) {
            this._plugins[key[0].toLowerCase() + key.slice(1)]
                = new plugin(this);
        }, this));

        $.each(Owl.Pipe, $.proxy(function(priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            });
        }, this));

        this.setup();
        this.initialize();
    }

    /**
     * Default options for the carousel.
     * @public
     */
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 0,
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: false,

        startPosition: 0,
        rtl: false,

        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,

        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        responsiveClass: false,

        fallbackEasing: 'swing',

        info: false,

        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',

        // Classes and Names
        themeClass: 'owl-theme',
        baseClass: 'owl-carousel',
        itemClass: 'owl-item',
        centerClass: 'center',
        activeClass: 'active'
    };

    /**
     * Enumeration for width.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
    };

    /**
     * Contains all registered plugins.
     * @public
     */
    Owl.Plugins = {};

    /**
     * Update pipe.
     */
    Owl.Pipe = [ {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: [ 'items', 'settings' ],
        run: function() {
            var cached = this._clones,
                clones = this.$stage.children('.cloned');

            if (clones.length !== cached.length || (!this.settings.loop && cached.length > 0)) {
                this.$stage.children('.cloned').remove();
                this._clones = [];
            }
        }
    }, {
        filter: [ 'items', 'settings' ],
        run: function() {
            var i, n,
                clones = this._clones,
                items = this._items,
                delta = this.settings.loop ? clones.length - Math.max(this.settings.items * 2, 4) : 0;

            for (i = 0, n = Math.abs(delta / 2); i < n; i++) {
                if (delta > 0) {
                    this.$stage.children().eq(items.length + clones.length - 1).remove();
                    clones.pop();
                    this.$stage.children().eq(0).remove();
                    clones.pop();
                } else {
                    clones.push(clones.length / 2);
                    this.$stage.append(items[clones[clones.length - 1]].clone().addClass('cloned'));
                    clones.push(items.length - 1 - (clones.length - 1) / 2);
                    this.$stage.prepend(items[clones[clones.length - 1]].clone().addClass('cloned'));
                }
            }
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function() {
            var rtl = (this.settings.rtl ? 1 : -1),
                width = (this.width() / this.settings.items).toFixed(3),
                coordinate = 0, merge, i, n;

            this._coordinates = [];
            for (i = 0, n = this._clones.length + this._items.length; i < n; i++) {
                merge = this._mergers[this.relative(i)];
                merge = (this.settings.mergeFit && Math.min(merge, this.settings.items)) || merge;
                coordinate += (this.settings.autoWidth ? this._items[this.relative(i)].width() + this.settings.margin : width * merge) * rtl;

                this._coordinates.push(coordinate);
            }
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function() {
            var i, n, width = (this.width() / this.settings.items).toFixed(3), css = {
                'width': Math.abs(this._coordinates[this._coordinates.length - 1]) + this.settings.stagePadding * 2,
                'padding-left': this.settings.stagePadding || '',
                'padding-right': this.settings.stagePadding || ''
            };

            this.$stage.css(css);

            css = { 'width': this.settings.autoWidth ? 'auto' : width - this.settings.margin };
            css[this.settings.rtl ? 'margin-left' : 'margin-right'] = this.settings.margin;

            if (!this.settings.autoWidth && $.grep(this._mergers, function(v) { return v > 1 }).length > 0) {
                for (i = 0, n = this._coordinates.length; i < n; i++) {
                    css.width = Math.abs(this._coordinates[i]) - Math.abs(this._coordinates[i - 1] || 0) - this.settings.margin;
                    this.$stage.children().eq(i).css(css);
                }
            } else {
                this.$stage.children().css(css);
            }
        }
    }, {
        filter: [ 'width', 'items', 'settings' ],
        run: function(cache) {
            cache.current && this.reset(this.$stage.children().index(cache.current));
        }
    }, {
        filter: [ 'position' ],
        run: function() {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: [ 'width', 'position', 'items', 'settings' ],
        run: function() {
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [], i, n;

            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;

                if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
                    || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                    matches.push(i);
                }
            }

            this.$stage.children('.' + this.settings.activeClass).removeClass(this.settings.activeClass);
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass(this.settings.activeClass);

            if (this.settings.center) {
                this.$stage.children('.' + this.settings.centerClass).removeClass(this.settings.centerClass);
                this.$stage.children().eq(this.current()).addClass(this.settings.centerClass);
            }
        }
    } ];

    /**
     * Initializes the carousel.
     * @protected
     */
    Owl.prototype.initialize = function() {
        this.trigger('initialize');

        this.$element
            .addClass(this.settings.baseClass)
            .addClass(this.settings.themeClass)
            .toggleClass('owl-rtl', this.settings.rtl);

        // check support
        this.browserSupport();

        if (this.settings.autoWidth && this.state.imagesLoaded !== true) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();

            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
                return false;
            }
        }

        this.$element.addClass('owl-loading');

        // create stage
        this.$stage = $('<' + this.settings.stageElement + ' class="owl-stage"/>')
            .wrap('<div class="owl-stage-outer">');

        // append stage
        this.$element.append(this.$stage.parent());

        // append content
        this.replace(this.$element.children().not(this.$stage.parent()));

        // set view width
        this._width = this.$element.width();

        // update view
        this.refresh();

        this.$element.removeClass('owl-loading').addClass('owl-loaded');

        // attach generic events
        this.eventsCall();

        // attach generic events
        this.internalEvents();

        // attach custom control events
        this.addTriggerableEvents();

        this.trigger('initialized');
    };

    /**
     * Setups the current settings.
     * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
     * @todo Support for media queries by using `matchMedia` would be nice.
     * @public
     */
    Owl.prototype.setup = function() {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;

        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function(breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });

            settings = $.extend({}, this.options, overwrites[match]);
            delete settings.responsive;

            // responsive class
            if (settings.responsiveClass) {
                this.$element.attr('class', function(i, c) {
                    return c.replace(/\b owl-responsive-\S+/g, '');
                }).addClass('owl-responsive-' + match);
            }
        }

        if (this.settings === null || this._breakpoint !== match) {
            this.trigger('change', { property: { name: 'settings', value: settings } });
            this._breakpoint = match;
            this.settings = settings;
            this.invalidate('settings');
            this.trigger('changed', { property: { name: 'settings', value: this.settings } });
        }
    };

    /**
     * Updates option logic if necessery.
     * @protected
     */
    Owl.prototype.optionsLogic = function() {
        // Toggle Center class
        this.$element.toggleClass('owl-center', this.settings.center);

        // if items number is less than in body
        if (this.settings.loop && this._items.length < this.settings.items) {
            this.settings.loop = false;
        }

        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };

    /**
     * Prepares an item before add.
     * @todo Rename event parameter `content` to `item`.
     * @protected
     * @returns {jQuery|HTMLElement} - The item container.
     */
    Owl.prototype.prepare = function(item) {
        var event = this.trigger('prepare', { content: item });

        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>')
                .addClass(this.settings.itemClass).append(item)
        }

        this.trigger('prepared', { content: event.data });

        return event.data;
    };

    /**
     * Updates the view.
     * @public
     */
    Owl.prototype.update = function() {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function(p) { return this[p] }, this._invalidated),
            cache = {};

        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }

        this._invalidated = {};
    };

    /**
     * Gets the width of the view.
     * @public
     * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
     * @returns {Number} - The width of the view in pixel.
     */
    Owl.prototype.width = function(dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };

    /**
     * Refreshes the carousel primarily for adaptive purposes.
     * @public
     */
    Owl.prototype.refresh = function() {
        if (this._items.length === 0) {
            return false;
        }

        var start = new Date().getTime();

        this.trigger('refresh');

        this.setup();

        this.optionsLogic();

        // hide and show methods helps here to set a proper widths,
        // this prevents scrollbar to be calculated in stage width
        this.$stage.addClass('owl-refresh');

        this.update();

        this.$stage.removeClass('owl-refresh');

        this.state.orientation = window.orientation;

        this.watchVisibility();

        this.trigger('refreshed');
    };

    /**
     * Save internal event references and add event based functions.
     * @protected
     */
    Owl.prototype.eventsCall = function() {
        // Save events references
        this.e._onDragStart = $.proxy(function(e) {
            this.onDragStart(e);
        }, this);
        this.e._onDragMove = $.proxy(function(e) {
            this.onDragMove(e);
        }, this);
        this.e._onDragEnd = $.proxy(function(e) {
            this.onDragEnd(e);
        }, this);
        this.e._onResize = $.proxy(function(e) {
            this.onResize(e);
        }, this);
        this.e._transitionEnd = $.proxy(function(e) {
            this.transitionEnd(e);
        }, this);
        this.e._preventClick = $.proxy(function(e) {
            this.preventClick(e);
        }, this);
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onThrottledResize = function() {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate);
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onResize = function() {
        if (!this._items.length) {
            return false;
        }

        if (this._width === this.$element.width()) {
            return false;
        }

        if (this.trigger('resize').isDefaultPrevented()) {
            return false;
        }

        this._width = this.$element.width();

        this.invalidate('width');

        this.refresh();

        this.trigger('resized');
    };

    /**
     * Checks for touch/mouse drag event type and add run event handlers.
     * @protected
     */
    Owl.prototype.eventsRouter = function(event) {
        var type = event.type;

        if (type === "mousedown" || type === "touchstart") {
            this.onDragStart(event);
        } else if (type === "mousemove" || type === "touchmove") {
            this.onDragMove(event);
        } else if (type === "mouseup" || type === "touchend") {
            this.onDragEnd(event);
        } else if (type === "touchcancel") {
            this.onDragEnd(event);
        }
    };

    /**
     * Checks for touch/mouse drag options and add necessery event handlers.
     * @protected
     */
    Owl.prototype.internalEvents = function() {
        var isTouch = isTouchSupport(),
            isTouchIE = isTouchSupportIE();

        if (this.settings.mouseDrag){
            this.$stage.on('mousedown', $.proxy(function(event) { this.eventsRouter(event) }, this));
            this.$stage.on('dragstart', function() { return false });
            this.$stage.get(0).onselectstart = function() { return false };
        } else {
            this.$element.addClass('owl-text-select-on');
        }

        if (this.settings.touchDrag && !isTouchIE){
            this.$stage.on('touchstart touchcancel', $.proxy(function(event) { this.eventsRouter(event) }, this));
        }

        // catch transitionEnd event
        if (this.transitionEndVendor) {
            this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, false);
        }

        // responsive
        if (this.settings.responsive !== false) {
            this.on(window, 'resize', $.proxy(this.onThrottledResize, this));
        }
    };

    /**
     * Handles touchstart/mousedown event.
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragStart = function(event) {
        var ev, isTouchEvent, pageX, pageY, animatedPos;

        ev = event.originalEvent || event || window.event;

        // prevent right click
        if (ev.which === 3 || this.state.isTouch) {
            return false;
        }

        if (ev.type === 'mousedown') {
            this.$stage.addClass('owl-grab');
        }

        this.trigger('drag');
        this.drag.startTime = new Date().getTime();
        this.speed(0);
        this.state.isTouch = true;
        this.state.isScrolling = false;
        this.state.isSwiping = false;
        this.drag.distance = 0;

        pageX = getTouches(ev).x;
        pageY = getTouches(ev).y;

        // get stage position left
        this.drag.offsetX = this.$stage.position().left;
        this.drag.offsetY = this.$stage.position().top;

        if (this.settings.rtl) {
            this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width()
                + this.settings.margin;
        }

        // catch position // ie to fix
        if (this.state.inMotion && this.support3d) {
            animatedPos = this.getTransformProperty();
            this.drag.offsetX = animatedPos;
            this.animate(animatedPos);
            this.state.inMotion = true;
        } else if (this.state.inMotion && !this.support3d) {
            this.state.inMotion = false;
            return false;
        }

        this.drag.startX = pageX - this.drag.offsetX;
        this.drag.startY = pageY - this.drag.offsetY;

        this.drag.start = pageX - this.drag.startX;
        this.drag.targetEl = ev.target || ev.srcElement;
        this.drag.updatedX = this.drag.start;

        // to do/check
        // prevent links and images dragging;
        if (this.drag.targetEl.tagName === "IMG" || this.drag.targetEl.tagName === "A") {
            this.drag.targetEl.draggable = false;
        }

        $(document).on('mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents', $.proxy(function(event) {this.eventsRouter(event)},this));
    };

    /**
     * Handles the touchmove/mousemove events.
     * @todo Simplify
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragMove = function(event) {
        var ev, isTouchEvent, pageX, pageY, minValue, maxValue, pull;

        if (!this.state.isTouch) {
            return;
        }

        if (this.state.isScrolling) {
            return;
        }

        ev = event.originalEvent || event || window.event;

        pageX = getTouches(ev).x;
        pageY = getTouches(ev).y;

        // Drag Direction
        this.drag.currentX = pageX - this.drag.startX;
        this.drag.currentY = pageY - this.drag.startY;
        this.drag.distance = this.drag.currentX - this.drag.offsetX;

        // Check move direction
        if (this.drag.distance < 0) {
            this.state.direction = this.settings.rtl ? 'right' : 'left';
        } else if (this.drag.distance > 0) {
            this.state.direction = this.settings.rtl ? 'left' : 'right';
        }
        // Loop
        if (this.settings.loop) {
            if (this.op(this.drag.currentX, '>', this.coordinates(this.minimum())) && this.state.direction === 'right') {
                this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
            } else if (this.op(this.drag.currentX, '<', this.coordinates(this.maximum())) && this.state.direction === 'left') {
                this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length);
            }
        } else {
            // pull
            minValue = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maxValue = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? this.drag.distance / 5 : 0;
            this.drag.currentX = Math.max(Math.min(this.drag.currentX, minValue + pull), maxValue + pull);
        }

        // Lock browser if swiping horizontal

        if ((this.drag.distance > 8 || this.drag.distance < -8)) {
            if (ev.preventDefault !== undefined) {
                ev.preventDefault();
            } else {
                ev.returnValue = false;
            }
            this.state.isSwiping = true;
        }

        this.drag.updatedX = this.drag.currentX;

        // Lock Owl if scrolling
        if ((this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === false) {
            this.state.isScrolling = true;
            this.drag.updatedX = this.drag.start;
        }

        this.animate(this.drag.updatedX);
    };

    /**
     * Handles the touchend/mouseup events.
     * @protected
     */
    Owl.prototype.onDragEnd = function(event) {
        var compareTimes, distanceAbs, closest;

        if (!this.state.isTouch) {
            return;
        }

        if (event.type === 'mouseup') {
            this.$stage.removeClass('owl-grab');
        }

        this.trigger('dragged');

        // prevent links and images dragging;
        this.drag.targetEl.removeAttribute("draggable");

        // remove drag event listeners

        this.state.isTouch = false;
        this.state.isScrolling = false;
        this.state.isSwiping = false;

        // to check
        if (this.drag.distance === 0 && this.state.inMotion !== true) {
            this.state.inMotion = false;
            return false;
        }

        // prevent clicks while scrolling

        this.drag.endTime = new Date().getTime();
        compareTimes = this.drag.endTime - this.drag.startTime;
        distanceAbs = Math.abs(this.drag.distance);

        // to test
        if (distanceAbs > 3 || compareTimes > 300) {
            this.removeClick(this.drag.targetEl);
        }

        closest = this.closest(this.drag.updatedX);

        this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
        this.current(closest);
        this.invalidate('position');
        this.update();

        // if pullDrag is off then fire transitionEnd event manually when stick
        // to border
        if (!this.settings.pullDrag && this.drag.updatedX === this.coordinates(closest)) {
            this.transitionEnd();
        }

        this.drag.distance = 0;

        $(document).off('.owl.dragEvents');
    };

    /**
     * Attaches `preventClick` to disable link while swipping.
     * @protected
     * @param {HTMLElement} [target] - The target of the `click` event.
     */
    Owl.prototype.removeClick = function(target) {
        this.drag.targetEl = target;
        $(target).on('click.preventClick', this.e._preventClick);
        // to make sure click is removed:
        window.setTimeout(function() {
            $(target).off('click.preventClick');
        }, 300);
    };

    /**
     * Suppresses click event.
     * @protected
     * @param {Event} ev - The event arguments.
     */
    Owl.prototype.preventClick = function(ev) {
        if (ev.preventDefault) {
            ev.preventDefault();
        } else {
            ev.returnValue = false;
        }
        if (ev.stopPropagation) {
            ev.stopPropagation();
        }
        $(ev.target).off('click.preventClick');
    };

    /**
     * Catches stage position while animate (only CSS3).
     * @protected
     * @returns
     */
    Owl.prototype.getTransformProperty = function() {
        var transform, matrix3d;

        transform = window.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + 'transform');
        // var transform = this.$stage.css(this.vendorName + 'transform')
        transform = transform.replace(/matrix(3d)?\(|\)/g, '').split(',');
        matrix3d = transform.length === 16;

        return matrix3d !== true ? transform[4] : transform[12];
    };

    /**
     * Gets absolute position of the closest item for a coordinate.
     * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
     * @protected
     * @param {Number} coordinate - The coordinate in pixel.
     * @return {Number} - The absolute position of the closest item.
     */
    Owl.prototype.closest = function(coordinate) {
        var position = -1, pull = 30, width = this.width(), coordinates = this.coordinates();

        if (!this.settings.freeDrag) {
            // check closest item
            $.each(coordinates, $.proxy(function(index, value) {
                if (coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                } else if (this.op(coordinate, '<', value)
                    && this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
                    position = this.state.direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }

        if (!this.settings.loop) {
            // non loop boundries
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }

        return position;
    };

    /**
     * Animates the stage.
     * @public
     * @param {Number} coordinate - The coordinate in pixels.
     */
    Owl.prototype.animate = function(coordinate) {
        this.trigger('translate');
        this.state.inMotion = this.speed() > 0;

        if (this.support3d) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px' + ',0px, 0px)',
                transition: (this.speed() / 1000) + 's'
            });
        } else if (this.state.isTouch) {
            this.$stage.css({
                left: coordinate + 'px'
            });
        } else {
            this.$stage.animate({
                left: coordinate
            }, this.speed() / 1000, this.settings.fallbackEasing, $.proxy(function() {
                if (this.state.inMotion) {
                    this.transitionEnd();
                }
            }, this));
        }
    };

    /**
     * Sets the absolute position of the current item.
     * @public
     * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
     * @returns {Number} - The absolute position of the current item.
     */
    Owl.prototype.current = function(position) {
        if (position === undefined) {
            return this._current;
        }

        if (this._items.length === 0) {
            return undefined;
        }

        position = this.normalize(position);

        if (this._current !== position) {
            var event = this.trigger('change', { property: { name: 'position', value: position } });

            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }

            this._current = position;

            this.invalidate('position');

            this.trigger('changed', { property: { name: 'position', value: this._current } });
        }

        return this._current;
    };

    /**
     * Invalidates the given part of the update routine.
     * @param {String} part - The part to invalidate.
     */
    Owl.prototype.invalidate = function(part) {
        this._invalidated[part] = true;
    }

    /**
     * Resets the absolute position of the current item.
     * @public
     * @param {Number} position - The absolute position of the new item.
     */
    Owl.prototype.reset = function(position) {
        position = this.normalize(position);

        if (position === undefined) {
            return;
        }

        this._speed = 0;
        this._current = position;

        this.suppress([ 'translate', 'translated' ]);

        this.animate(this.coordinates(position));

        this.release([ 'translate', 'translated' ]);
    };

    /**
     * Normalizes an absolute or a relative position for an item.
     * @public
     * @param {Number} position - The absolute or relative position to normalize.
     * @param {Boolean} [relative=false] - Whether the given position is relative or not.
     * @returns {Number} - The normalized position.
     */
    Owl.prototype.normalize = function(position, relative) {
        var n = (relative ? this._items.length : this._items.length + this._clones.length);

        if (!$.isNumeric(position) || n < 1) {
            return undefined;
        }

        if (this._clones.length) {
            position = ((position % n) + n) % n;
        } else {
            position = Math.max(this.minimum(relative), Math.min(this.maximum(relative), position));
        }

        return position;
    };

    /**
     * Converts an absolute position for an item into a relative position.
     * @public
     * @param {Number} position - The absolute position to convert.
     * @returns {Number} - The converted position.
     */
    Owl.prototype.relative = function(position) {
        position = this.normalize(position);
        position = position - this._clones.length / 2;
        return this.normalize(position, true);
    };

    /**
     * Gets the maximum position for an item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.maximum = function(relative) {
        var maximum, width, i = 0, coordinate,
            settings = this.settings;

        if (relative) {
            return this._items.length - 1;
        }

        if (!settings.loop && settings.center) {
            maximum = this._items.length - 1;
        } else if (!settings.loop && !settings.center) {
            maximum = this._items.length - settings.items;
        } else if (settings.loop || settings.center) {
            maximum = this._items.length + settings.items;
        } else if (settings.autoWidth || settings.merge) {
            revert = settings.rtl ? 1 : -1;
            width = this.$stage.width() - this.$element.width();
            while (coordinate = this.coordinates(i)) {
                if (coordinate * revert >= width) {
                    break;
                }
                maximum = ++i;
            }
        } else {
            throw 'Can not detect maximum absolute position.'
        }

        return maximum;
    };

    /**
     * Gets the minimum position for an item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.minimum = function(relative) {
        if (relative) {
            return 0;
        }

        return this._clones.length / 2;
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.items = function(position) {
        if (position === undefined) {
            return this._items.slice();
        }

        position = this.normalize(position, true);
        return this._items[position];
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.mergers = function(position) {
        if (position === undefined) {
            return this._mergers.slice();
        }

        position = this.normalize(position, true);
        return this._mergers[position];
    };

    /**
     * Gets the absolute positions of clones for an item.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
     */
    Owl.prototype.clones = function(position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

        if (position === undefined) {
            return $.map(this._clones, function(v, i) { return map(i) });
        }

        return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
    };

    /**
     * Sets the current animation speed.
     * @public
     * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
     * @returns {Number} - The current animation speed in milliseconds.
     */
    Owl.prototype.speed = function(speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }

        return this._speed;
    };

    /**
     * Gets the coordinate of an item.
     * @todo The name of this method is missleanding.
     * @public
     * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
     * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
     */
    Owl.prototype.coordinates = function(position) {
        var coordinate = null;

        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function(coordinate, index) {
                return this.coordinates(index);
            }, this));
        }

        if (this.settings.center) {
            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[position - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1);
        } else {
            coordinate = this._coordinates[position - 1] || 0;
        }

        return coordinate;
    };

    /**
     * Calculates the speed for a translation.
     * @protected
     * @param {Number} from - The absolute position of the start item.
     * @param {Number} to - The absolute position of the target item.
     * @param {Number} [factor=undefined] - The time factor in milliseconds.
     * @returns {Number} - The time in milliseconds for the translation.
     */
    Owl.prototype.duration = function(from, to, factor) {
        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    };

    /**
     * Slides to the specified item.
     * @public
     * @param {Number} position - The position of the item.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.to = function(position, speed) {
        if (this.settings.loop) {
            var distance = position - this.relative(this.current()),
                revert = this.current(),
                before = this.current(),
                after = this.current() + distance,
                direction = before - after < 0 ? true : false,
                items = this._clones.length + this._items.length;

            if (after < this.settings.items && direction === false) {
                revert = before + this._items.length;
                this.reset(revert);
            } else if (after >= items - this.settings.items && direction === true) {
                revert = before - this._items.length;
                this.reset(revert);
            }
            window.clearTimeout(this.e._goToLoop);
            this.e._goToLoop = window.setTimeout($.proxy(function() {
                this.speed(this.duration(this.current(), revert + distance, speed));
                this.current(revert + distance);
                this.update();
            }, this), 30);
        } else {
            this.speed(this.duration(this.current(), position, speed));
            this.current(position);
            this.update();
        }
    };

    /**
     * Slides to the next item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.next = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };

    /**
     * Slides to the previous item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.prev = function(speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };

    /**
     * Handles the end of an animation.
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.transitionEnd = function(event) {

        // if css2 animation then event object is undefined
        if (event !== undefined) {
            event.stopPropagation();

            // Catch only owl-stage transitionEnd event
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }

        this.state.inMotion = false;
        this.trigger('translated');
    };

    /**
     * Gets viewport width.
     * @protected
     * @return {Number} - The width in pixel.
     */
    Owl.prototype.viewport = function() {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            throw 'Can not detect viewport width.';
        }
        return width;
    };

    /**
     * Replaces the current content.
     * @public
     * @param {HTMLElement|jQuery|String} content - The new content.
     */
    Owl.prototype.replace = function(content) {
        this.$stage.empty();
        this._items = [];

        if (content) {
            content = (content instanceof jQuery) ? content : $(content);
        }

        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }

        content.filter(function() {
            return this.nodeType === 1;
        }).each($.proxy(function(index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        }, this));

        this.reset($.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

        this.invalidate('items');
    };

    /**
     * Adds an item.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {HTMLElement|jQuery|String} content - The item content to add.
     * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
     */
    Owl.prototype.add = function(content, position) {
        position = position === undefined ? this._items.length : this.normalize(position, true);

        this.trigger('add', { content: content, position: position });

        if (this._items.length === 0 || position === this._items.length) {
            this.$stage.append(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').andSelf('[data-merge]').attr('data-merge') * 1 || 1);
        }

        this.invalidate('items');

        this.trigger('added', { content: content, position: position });
    };

    /**
     * Removes an item by its position.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {Number} position - The relative position of the item to remove.
     */
    Owl.prototype.remove = function(position) {
        position = this.normalize(position, true);

        if (position === undefined) {
            return;
        }

        this.trigger('remove', { content: this._items[position], position: position });

        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);

        this.invalidate('items');

        this.trigger('removed', { content: null, position: position });
    };

    /**
     * Adds triggerable events.
     * @protected
     */
    Owl.prototype.addTriggerableEvents = function() {
        var handler = $.proxy(function(callback, event) {
            return $.proxy(function(e) {
                if (e.relatedTarget !== this) {
                    this.suppress([ event ]);
                    callback.apply(this, [].slice.call(arguments, 1));
                    this.release([ event ]);
                }
            }, this);
        }, this);

        $.each({
            'next': this.next,
            'prev': this.prev,
            'to': this.to,
            'destroy': this.destroy,
            'refresh': this.refresh,
            'replace': this.replace,
            'add': this.add,
            'remove': this.remove
        }, $.proxy(function(event, callback) {
            this.$element.on(event + '.owl.carousel', handler(callback, event + '.owl.carousel'));
        }, this));

    };

    /**
     * Watches the visibility of the carousel element.
     * @protected
     */
    Owl.prototype.watchVisibility = function() {

        // test on zepto
        if (!isElVisible(this.$element.get(0))) {
            this.$element.addClass('owl-hidden');
            window.clearInterval(this.e._checkVisibile);
            this.e._checkVisibile = window.setInterval($.proxy(checkVisible, this), 500);
        }

        function isElVisible(el) {
            return el.offsetWidth > 0 && el.offsetHeight > 0;
        }

        function checkVisible() {
            if (isElVisible(this.$element.get(0))) {
                this.$element.removeClass('owl-hidden');
                this.refresh();
                window.clearInterval(this.e._checkVisibile);
            }
        }
    };

    /**
     * Preloads images with auto width.
     * @protected
     * @todo Still to test
     */
    Owl.prototype.preloadAutoWidthImages = function(imgs) {
        var loaded, that, $el, img;

        loaded = 0;
        that = this;
        imgs.each(function(i, el) {
            $el = $(el);
            img = new Image();

            img.onload = function() {
                loaded++;
                $el.attr('src', img.src);
                $el.css('opacity', 1);
                if (loaded >= imgs.length) {
                    that.state.imagesLoaded = true;
                    that.initialize();
                }
            };

            img.src = $el.attr('src') || $el.attr('data-src') || $el.attr('data-src-retina');
        });
    };

    /**
     * Destroys the carousel.
     * @public
     */
    Owl.prototype.destroy = function() {

        if (this.$element.hasClass(this.settings.themeClass)) {
            this.$element.removeClass(this.settings.themeClass);
        }

        if (this.settings.responsive !== false) {
            $(window).off('resize.owl.carousel');
        }

        if (this.transitionEndVendor) {
            this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        }

        for ( var i in this._plugins) {
            this._plugins[i].destroy();
        }

        if (this.settings.mouseDrag || this.settings.touchDrag) {
            this.$stage.off('mousedown touchstart touchcancel');
            $(document).off('.owl.dragEvents');
            this.$stage.get(0).onselectstart = function() {};
            this.$stage.off('dragstart', function() { return false });
        }

        // remove event handlers in the ".owl.carousel" namespace
        this.$element.off('.owl');

        this.$stage.children('.cloned').remove();
        this.e = null;
        this.$element.removeData('owlCarousel');

        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.unwrap();
    };

    /**
     * Operators to calculate right-to-left and left-to-right.
     * @protected
     * @param {Number} [a] - The left side operand.
     * @param {String} [o] - The operator.
     * @param {Number} [b] - The right side operand.
     */
    Owl.prototype.op = function(a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };

    /**
     * Attaches to an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The event handler to attach.
     * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
     */
    Owl.prototype.on = function(element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        }
    };

    /**
     * Detaches from an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The attached event handler to detach.
     * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
     */
    Owl.prototype.off = function(element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener);
        }
    };

    /**
     * Triggers an public event.
     * @protected
     * @param {String} name - The event name.
     * @param {*} [data=null] - The event data.
     * @param {String} [namespace=.owl.carousel] - The event namespace.
     * @returns {Event} - The event arguments.
     */
    Owl.prototype.trigger = function(name, data, namespace) {
        var status = {
            item: { count: this._items.length, index: this.current() }
        }, handler = $.camelCase(
            $.grep([ 'on', name, namespace ], function(v) { return v })
                .join('-').toLowerCase()
        ), event = $.Event(
            [ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
            $.extend({ relatedTarget: this }, status, data)
        );

        if (!this._supress[name]) {
            $.each(this._plugins, function(name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });

            this.$element.trigger(event);

            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].apply(this, event);
            }
        }

        return event;
    };

    /**
     * Suppresses events.
     * @protected
     * @param {Array.<String>} events - The events to suppress.
     */
    Owl.prototype.suppress = function(events) {
        $.each(events, $.proxy(function(index, event) {
            this._supress[event] = true;
        }, this));
    }

    /**
     * Releases suppressed events.
     * @protected
     * @param {Array.<String>} events - The events to release.
     */
    Owl.prototype.release = function(events) {
        $.each(events, $.proxy(function(index, event) {
            delete this._supress[event];
        }, this));
    }

    /**
     * Checks the availability of some browser features.
     * @protected
     */
    Owl.prototype.browserSupport = function() {
        this.support3d = isPerspective();

        if (this.support3d) {
            this.transformVendor = isTransform();

            // take transitionend event name by detecting transition
            var endVendors = [ 'transitionend', 'webkitTransitionEnd', 'transitionend', 'oTransitionEnd' ];
            this.transitionEndVendor = endVendors[isTransition()];

            // take vendor name from transform name
            this.vendorName = this.transformVendor.replace(/Transform/i, '');
            this.vendorName = this.vendorName !== '' ? '-' + this.vendorName.toLowerCase() + '-' : '';
        }

        this.state.orientation = window.orientation;
    };

    /**
     * Get touch/drag coordinats.
     * @private
     * @param {event} - mousedown/touchstart event
     * @returns {object} - Contains X and Y of current mouse/touch position
     */

    function getTouches(event) {
        if (event.touches !== undefined) {
            return {
                x: event.touches[0].pageX,
                y: event.touches[0].pageY
            };
        }

        if (event.touches === undefined) {
            if (event.pageX !== undefined) {
                return {
                    x: event.pageX,
                    y: event.pageY
                };
            }

            if (event.pageX === undefined) {
                return {
                    x: event.clientX,
                    y: event.clientY
                };
            }
        }
    }

    /**
     * Checks for CSS support.
     * @private
     * @param {Array} array - The CSS properties to check for.
     * @returns {Array} - Contains the supported CSS property name and its index or `false`.
     */
    function isStyleSupported(array) {
        var p, s, fake = document.createElement('div'), list = array;
        for (p in list) {
            s = list[p];
            if (typeof fake.style[s] !== 'undefined') {
                fake = null;
                return [ s, p ];
            }
        }
        return [ false ];
    }

    /**
     * Checks for CSS transition support.
     * @private
     * @todo Realy bad design
     * @returns {Number}
     */
    function isTransition() {
        return isStyleSupported([ 'transition', 'WebkitTransition', 'MozTransition', 'OTransition' ])[1];
    }

    /**
     * Checks for CSS transform support.
     * @private
     * @returns {String} The supported property name or false.
     */
    function isTransform() {
        return isStyleSupported([ 'transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform' ])[0];
    }

    /**
     * Checks for CSS perspective support.
     * @private
     * @returns {String} The supported property name or false.
     */
    function isPerspective() {
        return isStyleSupported([ 'perspective', 'webkitPerspective', 'MozPerspective', 'OPerspective', 'MsPerspective' ])[0];
    }

    /**
     * Checks wether touch is supported or not.
     * @private
     * @returns {Boolean}
     */
    function isTouchSupport() {
        return 'ontouchstart' in window || !!(navigator.msMaxTouchPoints);
    }

    /**
     * Checks wether touch is supported or not for IE.
     * @private
     * @returns {Boolean}
     */
    function isTouchSupportIE() {
        return window.navigator.msPointerEnabled;
    }

    /**
     * The jQuery Plugin for the Owl Carousel
     * @public
     */
    $.fn.owlCarousel = function(options) {
        return this.each(function() {
            if (!$(this).data('owlCarousel')) {
                $(this).data('owlCarousel', new Owl(this, options));
            }
        });
    };

    /**
     * The constructor for the jQuery Plugin
     * @public
     */
    $.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the lazy plugin.
     * @class The Lazy Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Lazy = function(carousel) {

        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Already loaded items.
         * @protected
         * @type {Array.<jQuery>}
         */
        this._loaded = [];

        /**
         * Event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel': $.proxy(function(e) {
                if (!e.namespace) {
                    return;
                }

                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }

                if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                    var settings = this._core.settings,
                        n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                        i = ((settings.center && n * -1) || 0),
                        position = ((e.property && e.property.value) || this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function(i, v) { this.load(v) }, this);

                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position++)), load);
                    }
                }
            }, this)
        };

        // set the default options
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

        // register event handler
        this._core.$element.on(this._handlers);
    }

    /**
     * Default options.
     * @public
     */
    Lazy.Defaults = {
        lazyLoad: false
    }

    /**
     * Loads all resources of an item at the specified position.
     * @param {Number} position - The absolute position of the item.
     * @protected
     */
    Lazy.prototype.load = function(position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find('.owl-lazy');

        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }

        $elements.each($.proxy(function(index, element) {
            var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

            this._core.trigger('load', { element: $element, url: url }, 'lazy');

            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('src', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function() {
                    $element.css({
                        'background-image': 'url(' + url + ')',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this);
                image.src = url;
            }
        }, this));

        this._loaded.push($item.get(0));
    }

    /**
     * Destroys the plugin.
     * @public
     */
    Lazy.prototype.destroy = function() {
        var handler, property;

        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    }

    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the auto height plugin.
     * @class The Auto Height Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoHeight = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function() {
                if (this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (this._core.settings.autoHeight && e.property.name == 'position'){
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function(e) {
                if (this._core.settings.autoHeight && e.element.closest('.' + this._core.settings.itemClass)
                    === this._core.$stage.children().eq(this._core.current())) {
                    this.update();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: 'owl-height'
    };

    /**
     * Updates the view.
     */
    AutoHeight.prototype.update = function() {
        this._core.$stage.parent()
            .height(this._core.$stage.children().eq(this._core.current()).height())
            .addClass(this._core.settings.autoHeightClass);
    };

    AutoHeight.prototype.destroy = function() {
        var handler, property;

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the video plugin.
     * @class The Video Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Video = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Cache all video URLs.
         * @protected
         * @type {Object}
         */
        this._videos = {};

        /**
         * Current playing item.
         * @protected
         * @type {jQuery}
         */
        this._playing = null;

        /**
         * Whether this is in fullscreen or not.
         * @protected
         * @type {Boolean}
         */
        this._fullscreen = false;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'resize.owl.carousel': $.proxy(function(e) {
                if (this._core.settings.video && !this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),
            'refresh.owl.carousel changed.owl.carousel': $.proxy(function(e) {
                if (this._playing) {
                    this.stop();
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                var $element = $(e.content).find('.owl-video');
                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Video.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);

        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
            this.play(e);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };

    /**
     * Gets the video ID and the type (YouTube/Vimeo only).
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {jQuery} item - The item containing the video.
     */
    Video.prototype.fetch = function(target, item) {

        var type = target.attr('data-vimeo-id') ? 'vimeo' : 'youtube',
            id = target.attr('data-vimeo-id') || target.attr('data-youtube-id'),
            width = target.attr('data-width') || this._core.settings.videoWidth,
            height = target.attr('data-height') || this._core.settings.videoHeight,
            url = target.attr('href');

        if (url) {
            id = url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube';
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo';
            } else {
                throw new Error('Video URL not supported.');
            }
            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }

        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };

        item.attr('data-video', url);

        this.thumbnail(target, this._videos[url]);
    };

    /**
     * Creates video thumbnail.
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {Object} info - The video info object.
     * @see `fetch`
     */
    Video.prototype.thumbnail = function(target, video) {

        var tnLink,
            icon,
            path,
            dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,
            create = function(path) {
                icon = '<div class="owl-video-play-icon"></div>';

                if (settings.lazyLoad) {
                    tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
                } else {
                    tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
                }
                target.after(tnLink);
                target.after(icon);
            };

        // wrap video content into owl-video-wrapper div
        target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }

        // custom thumbnail
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }

        if (video.type === 'youtube') {
            path = "http://img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: 'http://vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function(data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        }
    };

    /**
     * Stops the current video.
     * @public
     */
    Video.prototype.stop = function() {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
    };

    /**
     * Starts the current video.
     * @public
     * @param {Event} ev - The event arguments.
     */
    Video.prototype.play = function(ev) {
        this._core.trigger('play', null, 'video');

        if (this._playing) {
            this.stop();
        }

        var target = $(ev.target || ev.srcElement),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')],
            width = video.width || '100%',
            height = video.height || this._core.$stage.height(),
            html, wrap;

        if (video.type === 'youtube') {
            html = '<iframe width="' + width + '" height="' + height + '" src="http://www.youtube.com/embed/'
                + video.id + '?autoplay=1&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
        } else if (video.type === 'vimeo') {
            html = '<iframe src="http://player.vimeo.com/video/' + video.id + '?autoplay=1" width="' + width
                + '" height="' + height
                + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
        }

        item.addClass('owl-video-playing');
        this._playing = item;

        wrap = $('<div style="height:' + height + 'px; width:' + width + 'px" class="owl-video-frame">'
            + html + '</div>');
        target.after(wrap);
    };

    /**
     * Checks whether an video is currently in full screen mode or not.
     * @todo Bad style because looks like a readonly method but changes members.
     * @protected
     * @returns {Boolean}
     */
    Video.prototype.isInFullScreen = function() {

        // if Vimeo Fullscreen mode
        var element = document.fullscreenElement || document.mozFullScreenElement
            || document.webkitFullscreenElement;

        if (element && $(element).parent().hasClass('owl-video-frame')) {
            this._core.speed(0);
            this._fullscreen = true;
        }

        if (element && this._fullscreen && this._playing) {
            return false;
        }

        // comming back from fullscreen
        if (this._fullscreen) {
            this._fullscreen = false;
            return false;
        }

        // check full screen mode and window orientation
        if (this._playing) {
            if (this._core.state.orientation !== window.orientation) {
                this._core.state.orientation = window.orientation;
                return false;
            }
        }

        return true;
    };

    /**
     * Destroys the plugin.
     */
    Video.prototype.destroy = function() {
        var handler, property;

        this._core.$element.off('click.owl.video');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the animate plugin.
     * @class The Navigation Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Animate = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;

        this.handlers = {
            'change.owl.carousel': $.proxy(function(e) {
                if (e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
                this.swapping = e.type == 'translated';
            }, this),
            'translate.owl.carousel': $.proxy(function(e) {
                if (this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };

        this.core.$element.on(this.handlers);
    };

    /**
     * Default options.
     * @public
     */
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };

    /**
     * Toggles the animation classes whenever an translations starts.
     * @protected
     * @returns {Boolean|undefined}
     */
    Animate.prototype.swap = function() {

        if (this.core.settings.items !== 1 || !this.core.support3d) {
            return;
        }

        this.core.speed(0);

        var left,
            clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;

        if (this.core.current() === this.previous) {
            return;
        }

        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.css( { 'left': left + 'px' } )
                .addClass('animated owl-animated-out')
                .addClass(outgoing)
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
        }

        if (incoming) {
            next.addClass('animated owl-animated-in')
                .addClass(incoming)
                .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', clear);
        }
    };

    Animate.prototype.clear = function(e) {
        $(e.target).css( { 'left': '' } )
            .removeClass('animated owl-animated-out owl-animated-in')
            .removeClass(this.core.settings.animateIn)
            .removeClass(this.core.settings.animateOut);
        this.core.transitionEnd();
    }

    /**
     * Destroys the plugin.
     * @public
     */
    Animate.prototype.destroy = function() {
        var handler, property;

        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

    /**
     * Creates the autoplay plugin.
     * @class The Autoplay Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Autoplay = function(scope) {
        this.core = scope;
        this.core.options = $.extend({}, Autoplay.Defaults, this.core.options);

        this.handlers = {
            'translated.owl.carousel refreshed.owl.carousel': $.proxy(function() {
                this.autoplay();
            }, this),
            'play.owl.autoplay': $.proxy(function(e, t, s) {
                this.play(t, s);
            }, this),
            'stop.owl.autoplay': $.proxy(function() {
                this.stop();
            }, this),
            'mouseover.owl.autoplay': $.proxy(function() {
                if (this.core.settings.autoplayHoverPause) {
                    this.pause();
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function() {
                if (this.core.settings.autoplayHoverPause) {
                    this.autoplay();
                }
            }, this)
        };

        this.core.$element.on(this.handlers);
    };

    /**
     * Default options.
     * @public
     */
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };

    /**
     * @protected
     * @todo Must be documented.
     */
    Autoplay.prototype.autoplay = function() {
        if (this.core.settings.autoplay && !this.core.state.videoPlay) {
            window.clearInterval(this.interval);

            this.interval = window.setInterval($.proxy(function() {
                this.play();
            }, this), this.core.settings.autoplayTimeout);
        } else {
            window.clearInterval(this.interval);
        }
    };

    /**
     * Starts the autoplay.
     * @public
     * @param {Number} [timeout] - ...
     * @param {Number} [speed] - ...
     * @returns {Boolean|undefined} - ...
     * @todo Must be documented.
     */
    Autoplay.prototype.play = function(timeout, speed) {
        // if tab is inactive - doesnt work in <IE10
        if (document.hidden === true) {
            return;
        }

        if (this.core.state.isTouch || this.core.state.isScrolling
            || this.core.state.isSwiping || this.core.state.inMotion) {
            return;
        }

        if (this.core.settings.autoplay === false) {
            window.clearInterval(this.interval);
            return;
        }

        this.core.next(this.core.settings.autoplaySpeed);
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.stop = function() {
        window.clearInterval(this.interval);
    };

    /**
     * Pauses the autoplay.
     * @public
     */
    Autoplay.prototype.pause = function() {
        window.clearInterval(this.interval);
    };

    /**
     * Destroys the plugin.
     */
    Autoplay.prototype.destroy = function() {
        var handler, property;

        window.clearInterval(this.interval);

        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
    'use strict';

    /**
     * Creates the navigation plugin.
     * @class The Navigation Plugin
     * @param {Owl} carousel - The Owl Carousel.
     */
    var Navigation = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Indicates whether the plugin is initialized or not.
         * @protected
         * @type {Boolean}
         */
        this._initialized = false;

        /**
         * The current paging indexes.
         * @protected
         * @type {Array}
         */
        this._pages = [];

        /**
         * All DOM elements of the user interface.
         * @protected
         * @type {Object}
         */
        this._controls = {};

        /**
         * Markup for an indicator.
         * @protected
         * @type {Array.<String>}
         */
        this._templates = [];

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * Overridden methods of the carousel.
         * @protected
         * @type {Object}
         */
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function(e) {
                if (this._core.settings.dotsData) {
                    this._templates.push($(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
                }
            }, this),
            'add.owl.carousel': $.proxy(function(e) {
                if (this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, $(e.content).find('[data-dot]').andSelf('[data-dot]').attr('data-dot'));
                }
            }, this),
            'remove.owl.carousel prepared.owl.carousel': $.proxy(function(e) {
                if (this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            'change.owl.carousel': $.proxy(function(e) {
                if (e.property.name == 'position') {
                    if (!this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                        var current = this._core.current(),
                            maximum = this._core.maximum(),
                            minimum = this._core.minimum();
                        e.data = e.property.value > maximum
                            ? current >= maximum ? minimum : maximum
                            : e.property.value < minimum ? maximum : e.property.value;
                    }
                }
            }, this),
            'changed.owl.carousel': $.proxy(function(e) {
                if (e.property.name == 'position') {
                    this.draw();
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function() {
                if (!this._initialized) {
                    this.initialize();
                    this._initialized = true;
                }
                this._core.trigger('refresh', null, 'navigation');
                this.update();
                this.draw();
                this._core.trigger('refreshed', null, 'navigation');
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

        // register event handlers
        this.$element.on(this._handlers);
    }

    /**
     * Default options.
     * @public
     * @todo Rename `slideBy` to `navBy`
     */
    Navigation.Defaults = {
        nav: false,
        navRewind: true,
        navText: [ '', '' ], // navText: [ 'prev', 'next' ], navigation text
        navSpeed: false,
        navElement: 'div',
        navContainer: false,
        navContainerClass: 'owl-nav',
        navClass: [ 'owl-prev', 'owl-next' ],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotData: false,
        dotsSpeed: false,
        dotsContainer: false,
        controlsClass: 'owl-controls'
    }

    /**
     * Initializes the layout of the plugin and extends the carousel.
     * @protected
     */
    Navigation.prototype.initialize = function() {
        var $container, override,
            options = this._core.settings;

        // create the indicator template
        if (!options.dotsData) {
            this._templates = [ $('<div>')
                .addClass(options.dotClass)
                .append($('<span>'))
                .prop('outerHTML') ];
        }

        // create controls container if needed
        if (!options.navContainer || !options.dotsContainer) {
            this._controls.$container = $('<div>')
                .addClass(options.controlsClass)
                .appendTo(this.$element);
        }

        // create DOM structure for absolute navigation
        this._controls.$indicators = options.dotsContainer ? $(options.dotsContainer)
            : $('<div>').hide().addClass(options.dotsClass).appendTo(this._controls.$container);

        this._controls.$indicators.on('click', 'div', $.proxy(function(e) {
            var index = $(e.target).parent().is(this._controls.$indicators)
                ? $(e.target).index() : $(e.target).parent().index();

            e.preventDefault();

            this.to(index, options.dotsSpeed);
        }, this));

        // create DOM structure for relative navigation
        $container = options.navContainer ? $(options.navContainer)
            : $('<div>').addClass(options.navContainerClass).prependTo(this._controls.$container);

        this._controls.$next = $('<' + options.navElement + '>');
        this._controls.$previous = this._controls.$next.clone();

        this._controls.$previous
            .addClass(options.navClass[0])
            .html(options.navText[0])
            .hide()
            .prependTo($container)
            .on('click', $.proxy(function(e) {
                this.prev(options.navSpeed);
            }, this));
        this._controls.$next
            .addClass(options.navClass[1])
            .html(options.navText[1])
            .hide()
            .appendTo($container)
            .on('click', $.proxy(function(e) {
                this.next(options.navSpeed);
            }, this));

        // override public methods of the carousel
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    }

    /**
     * Destroys the plugin.
     * @protected
     */
    Navigation.prototype.destroy = function() {
        var handler, control, property, override;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            this._controls[control].remove();
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    }

    /**
     * Updates the internal state.
     * @protected
     */
    Navigation.prototype.update = function() {
        var i, j, k,
            options = this._core.settings,
            lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            size = options.center || options.autoWidth || options.dotData
                ? 1 : options.dotsEach || options.items;

        if (options.slideBy !== 'page') {
            options.slideBy = Math.min(options.slideBy, options.items);
        }

        if (options.dots || options.slideBy == 'page') {
            this._pages = [];

            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: i - lower,
                        end: i - lower + size - 1
                    });
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    }

    /**
     * Draws the user interface.
     * @todo The option `dotData` wont work.
     * @protected
     */
    Navigation.prototype.draw = function() {
        var difference, i, html = '',
            options = this._core.settings,
            $items = this._core.$stage.children(),
            index = this._core.relative(this._core.current());

        if (options.nav && !options.loop && !options.navRewind) {
            this._controls.$previous.toggleClass('disabled', index <= 0);
            this._controls.$next.toggleClass('disabled', index >= this._core.maximum());
        }

        this._controls.$previous.toggle(options.nav);
        this._controls.$next.toggle(options.nav);

        if (options.dots) {
            difference = this._pages.length - this._controls.$indicators.children().length;

            if (options.dotData && difference !== 0) {
                for (i = 0; i < this._controls.$indicators.children().length; i++) {
                    html += this._templates[this._core.relative(i)];
                }
                this._controls.$indicators.html(html);
            } else if (difference > 0) {
                html = new Array(difference + 1).join(this._templates[0]);
                this._controls.$indicators.append(html);
            } else if (difference < 0) {
                this._controls.$indicators.children().slice(difference).remove();
            }

            this._controls.$indicators.find('.active').removeClass('active');
            this._controls.$indicators.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }

        this._controls.$indicators.toggle(options.dots);
    }

    /**
     * Extends event data.
     * @protected
     * @param {Event} event - The event object which gets thrown.
     */
    Navigation.prototype.onTrigger = function(event) {
        var settings = this._core.settings;

        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotData
                ? 1 : settings.dotsEach || settings.items)
        };
    }

    /**
     * Gets the current page position of the carousel.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.current = function() {
        var index = this._core.relative(this._core.current());
        return $.grep(this._pages, function(o) {
            return o.start <= index && o.end >= index;
        }).pop();
    }

    /**
     * Gets the current succesor/predecessor position.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.getPosition = function(successor) {
        var position, length,
            options = this._core.settings;

        if (options.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += options.slideBy : position -= options.slideBy;
        }
        return position;
    }

    /**
     * Slides to the next item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.next = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    }

    /**
     * Slides to the previous item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.prev = function(speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    }

    /**
     * Slides to the specified item or page.
     * @public
     * @param {Number} position - The position of the item or page.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
     */
    Navigation.prototype.to = function(position, speed, standard) {
        var length;

        if (!standard) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    }

    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.0.0
 * @author Artus Kolanowski
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
    'use strict';

    /**
     * Creates the hash plugin.
     * @class The Hash Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Hash = function(carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Hash table for the hashes.
         * @protected
         * @type {Object}
         */
        this._hashes = {};

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function() {
                if (this._core.settings.startPosition == 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function(e) {
                var hash = $(e.content).find('[data-hash]').andSelf('[data-hash]').attr('data-hash');
                this._hashes[hash] = e.content;
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);

        // register the event handlers
        this.$element.on(this._handlers);

        // register event listener for hash navigation
        $(window).on('hashchange.owl.navigation', $.proxy(function() {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]) || 0;

            if (!hash) {
                return false;
            }

            this._core.to(position, false, true);
        }, this));
    }

    /**
     * Default options.
     * @public
     */
    Hash.Defaults = {
        URLhashListener: false
    }

    /**
     * Destroys the plugin.
     * @public
     */
    Hash.prototype.destroy = function() {
        var handler, property;

        $(window).off('hashchange.owl.navigation');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    }

    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);


/*fancybox*/
/*!
 * fancyBox - jQuery Plugin
 * version: 2.1.5 (Fri, 14 Jun 2013)
 * requires jQuery v1.6 or later
 *
 * Examples at http://fancyapps.com/fancybox/
 * License: www.fancyapps.com/fancybox/#license
 *
 * Copyright 2012 Janis Skarnelis - janis@fancyapps.com
 *
 */

;(function (window, document, $, undefined) {
    "use strict";

    var H = $("html"),
        W = $(window),
        D = $(document),
        F = $.fancybox = function () {
            F.open.apply( this, arguments );
        },
        IE =  navigator.userAgent.match(/msie/i),
        didUpdate	= null,
        isTouch		= document.createTouch !== undefined,

        isQuery	= function(obj) {
            return obj && obj.hasOwnProperty && obj instanceof $;
        },
        isString = function(str) {
            return str && $.type(str) === "string";
        },
        isPercentage = function(str) {
            return isString(str) && str.indexOf('%') > 0;
        },
        isScrollable = function(el) {
            return (el && !(el.style.overflow && el.style.overflow === 'hidden') && ((el.clientWidth && el.scrollWidth > el.clientWidth) || (el.clientHeight && el.scrollHeight > el.clientHeight)));
        },
        getScalar = function(orig, dim) {
            var value = parseInt(orig, 10) || 0;

            if (dim && isPercentage(orig)) {
                value = F.getViewport()[ dim ] / 100 * value;
            }

            return Math.ceil(value);
        },
        getValue = function(value, dim) {
            return getScalar(value, dim) + 'px';
        };

    $.extend(F, {
        // The current version of fancyBox
        version: '2.1.5',

        defaults: {
            padding : 15,
            margin  : 20,

            width     : 800,
            height    : 600,
            minWidth  : 100,
            minHeight : 100,
            maxWidth  : 9999,
            maxHeight : 9999,
            pixelRatio: 1, // Set to 2 for retina display support

            autoSize   : true,
            autoHeight : false,
            autoWidth  : false,

            autoResize  : true,
            autoCenter  : !isTouch,
            fitToView   : true,
            aspectRatio : false,
            topRatio    : 0.5,
            leftRatio   : 0.5,

            scrolling : 'auto', // 'auto', 'yes' or 'no'
            wrapCSS   : '',

            arrows     : true,
            closeBtn   : true,
            closeClick : false,
            nextClick  : false,
            mouseWheel : true,
            autoPlay   : false,
            playSpeed  : 3000,
            preload    : 3,
            modal      : false,
            loop       : true,

            ajax  : {
                dataType : 'html',
                headers  : { 'X-fancyBox': true }
            },
            iframe : {
                scrolling : 'auto',
                preload   : true
            },
            swf : {
                wmode: 'transparent',
                allowfullscreen   : 'true',
                allowscriptaccess : 'always'
            },

            keys  : {
                next : {
                    13 : 'left', // enter
                    34 : 'up',   // page down
                    39 : 'left', // right arrow
                    40 : 'up'    // down arrow
                },
                prev : {
                    8  : 'right',  // backspace
                    33 : 'down',   // page up
                    37 : 'right',  // left arrow
                    38 : 'down'    // up arrow
                },
                close  : [27], // escape key
                play   : [32], // space - start/stop slideshow
                toggle : [70]  // letter "f" - toggle fullscreen
            },

            direction : {
                next : 'left',
                prev : 'right'
            },

            scrollOutside  : true,

            // Override some properties
            index   : 0,
            type    : null,
            href    : null,
            content : null,
            title   : null,

            // HTML templates
            tpl: {
                wrap     : '<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',
                image    : '<img class="fancybox-image" src="{href}" alt="" />',
                iframe   : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen' + (IE ? ' allowtransparency="true"' : '') + '></iframe>',
                error    : '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                closeBtn : '<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',
                next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
                prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>',
                loading  : '<div id="fancybox-loading"><div></div></div>'
            },

            // Properties for each animation type
            // Opening fancyBox
            openEffect  : 'fade', // 'elastic', 'fade' or 'none'
            openSpeed   : 250,
            openEasing  : 'swing',
            openOpacity : true,
            openMethod  : 'zoomIn',

            // Closing fancyBox
            closeEffect  : 'fade', // 'elastic', 'fade' or 'none'
            closeSpeed   : 250,
            closeEasing  : 'swing',
            closeOpacity : true,
            closeMethod  : 'zoomOut',

            // Changing next gallery item
            nextEffect : 'elastic', // 'elastic', 'fade' or 'none'
            nextSpeed  : 250,
            nextEasing : 'swing',
            nextMethod : 'changeIn',

            // Changing previous gallery item
            prevEffect : 'elastic', // 'elastic', 'fade' or 'none'
            prevSpeed  : 250,
            prevEasing : 'swing',
            prevMethod : 'changeOut',

            // Enable default helpers
            helpers : {
                overlay : true,
                title   : true
            },

            // Callbacks
            onCancel     : $.noop, // If canceling
            beforeLoad   : $.noop, // Before loading
            afterLoad    : $.noop, // After loading
            beforeShow   : $.noop, // Before changing in current item
            afterShow    : $.noop, // After opening
            beforeChange : $.noop, // Before changing gallery item
            beforeClose  : $.noop, // Before closing
            afterClose   : $.noop  // After closing
        },

        //Current state
        group    : {}, // Selected group
        opts     : {}, // Group options
        previous : null,  // Previous element
        coming   : null,  // Element being loaded
        current  : null,  // Currently loaded element
        isActive : false, // Is activated
        isOpen   : false, // Is currently open
        isOpened : false, // Have been fully opened at least once

        wrap  : null,
        skin  : null,
        outer : null,
        inner : null,

        player : {
            timer    : null,
            isActive : false
        },

        // Loaders
        ajaxLoad   : null,
        imgPreload : null,

        // Some collections
        transitions : {},
        helpers     : {},

        /*
         *	Static methods
         */

        open: function (group, opts) {
            if (!group) {
                return;
            }

            if (!$.isPlainObject(opts)) {
                opts = {};
            }

            // Close if already active
            if (false === F.close(true)) {
                return;
            }

            // Normalize group
            if (!$.isArray(group)) {
                group = isQuery(group) ? $(group).get() : [group];
            }

            // Recheck if the type of each element is `object` and set content type (image, ajax, etc)
            $.each(group, function(i, element) {
                var obj = {},
                    href,
                    title,
                    content,
                    type,
                    rez,
                    hrefParts,
                    selector;

                if ($.type(element) === "object") {
                    // Check if is DOM element
                    if (element.nodeType) {
                        element = $(element);
                    }

                    if (isQuery(element)) {
                        obj = {
                            href    : element.data('fancybox-href') || element.attr('href'),
                            title   : $('<div/>').text( element.data('fancybox-title') || element.attr('title') || '' ).html(),
                            isDom   : true,
                            element : element
                        };

                        if ($.metadata) {
                            $.extend(true, obj, element.metadata());
                        }

                    } else {
                        obj = element;
                    }
                }

                href  = opts.href  || obj.href || (isString(element) ? element : null);
                title = opts.title !== undefined ? opts.title : obj.title || '';

                content = opts.content || obj.content;
                type    = content ? 'html' : (opts.type  || obj.type);

                if (!type && obj.isDom) {
                    type = element.data('fancybox-type');

                    if (!type) {
                        rez  = element.prop('class').match(/fancybox\.(\w+)/);
                        type = rez ? rez[1] : null;
                    }
                }

                if (isString(href)) {
                    // Try to guess the content type
                    if (!type) {
                        if (F.isImage(href)) {
                            type = 'image';

                        } else if (F.isSWF(href)) {
                            type = 'swf';

                        } else if (href.charAt(0) === '#') {
                            type = 'inline';

                        } else if (isString(element)) {
                            type    = 'html';
                            content = element;
                        }
                    }

                    // Split url into two pieces with source url and content selector, e.g,
                    // "/mypage.html #my_id" will load "/mypage.html" and display element having id "my_id"
                    if (type === 'ajax') {
                        hrefParts = href.split(/\s+/, 2);
                        href      = hrefParts.shift();
                        selector  = hrefParts.shift();
                    }
                }

                if (!content) {
                    if (type === 'inline') {
                        if (href) {
                            content = $( isString(href) ? href.replace(/.*(?=#[^\s]+$)/, '') : href ); //strip for ie7

                        } else if (obj.isDom) {
                            content = element;
                        }

                    } else if (type === 'html') {
                        content = href;

                    } else if (!type && !href && obj.isDom) {
                        type    = 'inline';
                        content = element;
                    }
                }

                $.extend(obj, {
                    href     : href,
                    type     : type,
                    content  : content,
                    title    : title,
                    selector : selector
                });

                group[ i ] = obj;
            });

            // Extend the defaults
            F.opts = $.extend(true, {}, F.defaults, opts);

            // All options are merged recursive except keys
            if (opts.keys !== undefined) {
                F.opts.keys = opts.keys ? $.extend({}, F.defaults.keys, opts.keys) : false;
            }

            F.group = group;

            return F._start(F.opts.index);
        },

        // Cancel image loading or abort ajax request
        cancel: function () {
            var coming = F.coming;

            if (coming && false === F.trigger('onCancel')) {
                return;
            }

            F.hideLoading();

            if (!coming) {
                return;
            }

            if (F.ajaxLoad) {
                F.ajaxLoad.abort();
            }

            F.ajaxLoad = null;

            if (F.imgPreload) {
                F.imgPreload.onload = F.imgPreload.onerror = null;
            }

            if (coming.wrap) {
                coming.wrap.stop(true, true).trigger('onReset').remove();
            }

            F.coming = null;

            // If the first item has been canceled, then clear everything
            if (!F.current) {
                F._afterZoomOut( coming );
            }
        },

        // Start closing animation if is open; remove immediately if opening/closing
        close: function (event) {
            F.cancel();

            if (false === F.trigger('beforeClose')) {
                return;
            }

            F.unbindEvents();

            if (!F.isActive) {
                return;
            }

            if (!F.isOpen || event === true) {
                $('.fancybox-wrap').stop(true).trigger('onReset').remove();

                F._afterZoomOut();

            } else {
                F.isOpen = F.isOpened = false;
                F.isClosing = true;

                $('.fancybox-item, .fancybox-nav').remove();

                F.wrap.stop(true, true).removeClass('fancybox-opened');

                F.transitions[ F.current.closeMethod ]();
            }
        },

        // Manage slideshow:
        //   $.fancybox.play(); - toggle slideshow
        //   $.fancybox.play( true ); - start
        //   $.fancybox.play( false ); - stop
        play: function ( action ) {
            var clear = function () {
                    clearTimeout(F.player.timer);
                },
                set = function () {
                    clear();

                    if (F.current && F.player.isActive) {
                        F.player.timer = setTimeout(F.next, F.current.playSpeed);
                    }
                },
                stop = function () {
                    clear();

                    D.unbind('.player');

                    F.player.isActive = false;

                    F.trigger('onPlayEnd');
                },
                start = function () {
                    if (F.current && (F.current.loop || F.current.index < F.group.length - 1)) {
                        F.player.isActive = true;

                        D.bind({
                            'onCancel.player beforeClose.player' : stop,
                            'onUpdate.player'   : set,
                            'beforeLoad.player' : clear
                        });

                        set();

                        F.trigger('onPlayStart');
                    }
                };

            if (action === true || (!F.player.isActive && action !== false)) {
                start();
            } else {
                stop();
            }
        },

        // Navigate to next gallery item
        next: function ( direction ) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.next;
                }

                F.jumpto(current.index + 1, direction, 'next');
            }
        },

        // Navigate to previous gallery item
        prev: function ( direction ) {
            var current = F.current;

            if (current) {
                if (!isString(direction)) {
                    direction = current.direction.prev;
                }

                F.jumpto(current.index - 1, direction, 'prev');
            }
        },

        // Navigate to gallery item by index
        jumpto: function ( index, direction, router ) {
            var current = F.current;

            if (!current) {
                return;
            }

            index = getScalar(index);

            F.direction = direction || current.direction[ (index >= current.index ? 'next' : 'prev') ];
            F.router    = router || 'jumpto';

            if (current.loop) {
                if (index < 0) {
                    index = current.group.length + (index % current.group.length);
                }

                index = index % current.group.length;
            }

            if (current.group[ index ] !== undefined) {
                F.cancel();

                F._start(index);
            }
        },

        // Center inside viewport and toggle position type to fixed or absolute if needed
        reposition: function (e, onlyAbsolute) {
            var current = F.current,
                wrap    = current ? current.wrap : null,
                pos;

            if (wrap) {
                pos = F._getPosition(onlyAbsolute);

                if (e && e.type === 'scroll') {
                    delete pos.position;

                    wrap.stop(true, true).animate(pos, 200);

                } else {
                    wrap.css(pos);

                    current.pos = $.extend({}, current.dim, pos);
                }
            }
        },

        update: function (e) {
            var type = (e && e.originalEvent && e.originalEvent.type),
                anyway = !type || type === 'orientationchange';

            if (anyway) {
                clearTimeout(didUpdate);

                didUpdate = null;
            }

            if (!F.isOpen || didUpdate) {
                return;
            }

            didUpdate = setTimeout(function() {
                var current = F.current;

                if (!current || F.isClosing) {
                    return;
                }

                F.wrap.removeClass('fancybox-tmp');

                if (anyway || type === 'load' || (type === 'resize' && current.autoResize)) {
                    F._setDimension();
                }

                if (!(type === 'scroll' && current.canShrink)) {
                    F.reposition(e);
                }

                F.trigger('onUpdate');

                didUpdate = null;

            }, (anyway && !isTouch ? 0 : 300));
        },

        // Shrink content to fit inside viewport or restore if resized
        toggle: function ( action ) {
            if (F.isOpen) {
                F.current.fitToView = $.type(action) === "boolean" ? action : !F.current.fitToView;

                // Help browser to restore document dimensions
                if (isTouch) {
                    F.wrap.removeAttr('style').addClass('fancybox-tmp');

                    F.trigger('onUpdate');
                }

                F.update();
            }
        },

        hideLoading: function () {
            D.unbind('.loading');

            $('#fancybox-loading').remove();
        },

        showLoading: function () {
            var el, viewport;

            F.hideLoading();

            el = $(F.opts.tpl.loading).click(F.cancel).appendTo('body');

            // If user will press the escape-button, the request will be canceled
            D.bind('keydown.loading', function(e) {
                if ((e.which || e.keyCode) === 27) {
                    e.preventDefault();

                    F.cancel();
                }
            });

            if (!F.defaults.fixed) {
                viewport = F.getViewport();

                el.css({
                    position : 'absolute',
                    top  : (viewport.h * 0.5) + viewport.y,
                    left : (viewport.w * 0.5) + viewport.x
                });
            }

            F.trigger('onLoading');
        },

        getViewport: function () {
            var locked = (F.current && F.current.locked) || false,
                rez    = {
                    x: W.scrollLeft(),
                    y: W.scrollTop()
                };

            if (locked && locked.length) {
                rez.w = locked[0].clientWidth;
                rez.h = locked[0].clientHeight;

            } else {
                // See http://bugs.jquery.com/ticket/6724
                rez.w = isTouch && window.innerWidth  ? window.innerWidth  : W.width();
                rez.h = isTouch && window.innerHeight ? window.innerHeight : W.height();
            }

            return rez;
        },

        // Unbind the keyboard / clicking actions
        unbindEvents: function () {
            if (F.wrap && isQuery(F.wrap)) {
                F.wrap.unbind('.fb');
            }

            D.unbind('.fb');
            W.unbind('.fb');
        },

        bindEvents: function () {
            var current = F.current,
                keys;

            if (!current) {
                return;
            }

            // Changing document height on iOS devices triggers a 'resize' event,
            // that can change document height... repeating infinitely
            W.bind('orientationchange.fb' + (isTouch ? '' : ' resize.fb') + (current.autoCenter && !current.locked ? ' scroll.fb' : ''), F.update);

            keys = current.keys;

            if (keys) {
                D.bind('keydown.fb', function (e) {
                    var code   = e.which || e.keyCode,
                        target = e.target || e.srcElement;

                    // Skip esc key if loading, because showLoading will cancel preloading
                    if (code === 27 && F.coming) {
                        return false;
                    }

                    // Ignore key combinations and key events within form elements
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && !(target && (target.type || $(target).is('[contenteditable]')))) {
                        $.each(keys, function(i, val) {
                            if (current.group.length > 1 && val[ code ] !== undefined) {
                                F[ i ]( val[ code ] );

                                e.preventDefault();
                                return false;
                            }

                            if ($.inArray(code, val) > -1) {
                                F[ i ] ();

                                e.preventDefault();
                                return false;
                            }
                        });
                    }
                });
            }

            if ($.fn.mousewheel && current.mouseWheel) {
                F.wrap.bind('mousewheel.fb', function (e, delta, deltaX, deltaY) {
                    var target = e.target || null,
                        parent = $(target),
                        canScroll = false;

                    while (parent.length) {
                        if (canScroll || parent.is('.fancybox-skin') || parent.is('.fancybox-wrap')) {
                            break;
                        }

                        canScroll = isScrollable( parent[0] );
                        parent    = $(parent).parent();
                    }

                    if (delta !== 0 && !canScroll) {
                        if (F.group.length > 1 && !current.canShrink) {
                            if (deltaY > 0 || deltaX > 0) {
                                F.prev( deltaY > 0 ? 'down' : 'left' );

                            } else if (deltaY < 0 || deltaX < 0) {
                                F.next( deltaY < 0 ? 'up' : 'right' );
                            }

                            e.preventDefault();
                        }
                    }
                });
            }
        },

        trigger: function (event, o) {
            var ret, obj = o || F.coming || F.current;

            if (obj) {
                if ($.isFunction( obj[event] )) {
                    ret = obj[event].apply(obj, Array.prototype.slice.call(arguments, 1));
                }

                if (ret === false) {
                    return false;
                }

                if (obj.helpers) {
                    $.each(obj.helpers, function (helper, opts) {
                        if (opts && F.helpers[helper] && $.isFunction(F.helpers[helper][event])) {
                            F.helpers[helper][event]($.extend(true, {}, F.helpers[helper].defaults, opts), obj);
                        }
                    });
                }
            }

            D.trigger(event);
        },

        isImage: function (str) {
            return isString(str) && str.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i);
        },

        isSWF: function (str) {
            return isString(str) && str.match(/\.(swf)((\?|#).*)?$/i);
        },

        _start: function (index) {
            var coming = {},
                obj,
                href,
                type,
                margin,
                padding;

            index = getScalar( index );
            obj   = F.group[ index ] || null;

            if (!obj) {
                return false;
            }

            coming = $.extend(true, {}, F.opts, obj);

            // Convert margin and padding properties to array - top, right, bottom, left
            margin  = coming.margin;
            padding = coming.padding;

            if ($.type(margin) === 'number') {
                coming.margin = [margin, margin, margin, margin];
            }

            if ($.type(padding) === 'number') {
                coming.padding = [padding, padding, padding, padding];
            }

            // 'modal' propery is just a shortcut
            if (coming.modal) {
                $.extend(true, coming, {
                    closeBtn   : false,
                    closeClick : false,
                    nextClick  : false,
                    arrows     : false,
                    mouseWheel : false,
                    keys       : null,
                    helpers: {
                        overlay : {
                            closeClick : false
                        }
                    }
                });
            }

            // 'autoSize' property is a shortcut, too
            if (coming.autoSize) {
                coming.autoWidth = coming.autoHeight = true;
            }

            if (coming.width === 'auto') {
                coming.autoWidth = true;
            }

            if (coming.height === 'auto') {
                coming.autoHeight = true;
            }

            /*
             * Add reference to the group, so it`s possible to access from callbacks, example:
             * afterLoad : function() {
             *     this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
             * }
             */

            coming.group  = F.group;
            coming.index  = index;

            // Give a chance for callback or helpers to update coming item (type, title, etc)
            F.coming = coming;

            if (false === F.trigger('beforeLoad')) {
                F.coming = null;

                return;
            }

            type = coming.type;
            href = coming.href;

            if (!type) {
                F.coming = null;

                //If we can not determine content type then drop silently or display next/prev item if looping through gallery
                if (F.current && F.router && F.router !== 'jumpto') {
                    F.current.index = index;

                    return F[ F.router ]( F.direction );
                }

                return false;
            }

            F.isActive = true;

            if (type === 'image' || type === 'swf') {
                coming.autoHeight = coming.autoWidth = false;
                coming.scrolling  = 'visible';
            }

            if (type === 'image') {
                coming.aspectRatio = true;
            }

            if (type === 'iframe' && isTouch) {
                coming.scrolling = 'scroll';
            }

            // Build the neccessary markup
            coming.wrap = $(coming.tpl.wrap).addClass('fancybox-' + (isTouch ? 'mobile' : 'desktop') + ' fancybox-type-' + type + ' fancybox-tmp ' + coming.wrapCSS).appendTo( coming.parent || 'body' );

            $.extend(coming, {
                skin  : $('.fancybox-skin',  coming.wrap),
                outer : $('.fancybox-outer', coming.wrap),
                inner : $('.fancybox-inner', coming.wrap)
            });

            $.each(["Top", "Right", "Bottom", "Left"], function(i, v) {
                coming.skin.css('padding' + v, getValue(coming.padding[ i ]));
            });

            F.trigger('onReady');

            // Check before try to load; 'inline' and 'html' types need content, others - href
            if (type === 'inline' || type === 'html') {
                if (!coming.content || !coming.content.length) {
                    return F._error( 'content' );
                }

            } else if (!href) {
                return F._error( 'href' );
            }

            if (type === 'image') {
                F._loadImage();

            } else if (type === 'ajax') {
                F._loadAjax();

            } else if (type === 'iframe') {
                F._loadIframe();

            } else {
                F._afterLoad();
            }
        },

        _error: function ( type ) {
            $.extend(F.coming, {
                type       : 'html',
                autoWidth  : true,
                autoHeight : true,
                minWidth   : 0,
                minHeight  : 0,
                scrolling  : 'no',
                hasError   : type,
                content    : F.coming.tpl.error
            });

            F._afterLoad();
        },

        _loadImage: function () {
            // Reset preload image so it is later possible to check "complete" property
            var img = F.imgPreload = new Image();

            img.onload = function () {
                this.onload = this.onerror = null;

                F.coming.width  = this.width / F.opts.pixelRatio;
                F.coming.height = this.height / F.opts.pixelRatio;

                F._afterLoad();
            };

            img.onerror = function () {
                this.onload = this.onerror = null;

                F._error( 'image' );
            };

            img.src = F.coming.href;

            if (img.complete !== true) {
                F.showLoading();
            }
        },

        _loadAjax: function () {
            var coming = F.coming;

            F.showLoading();

            F.ajaxLoad = $.ajax($.extend({}, coming.ajax, {
                url: coming.href,
                error: function (jqXHR, textStatus) {
                    if (F.coming && textStatus !== 'abort') {
                        F._error( 'ajax', jqXHR );

                    } else {
                        F.hideLoading();
                    }
                },
                success: function (data, textStatus) {
                    if (textStatus === 'success') {
                        coming.content = data;

                        F._afterLoad();
                    }
                }
            }));
        },

        _loadIframe: function() {
            var coming = F.coming,
                iframe = $(coming.tpl.iframe.replace(/\{rnd\}/g, new Date().getTime()))
                    .attr('scrolling', isTouch ? 'auto' : coming.iframe.scrolling)
                    .attr('src', coming.href);

            // This helps IE
            $(coming.wrap).bind('onReset', function () {
                try {
                    $(this).find('iframe').hide().attr('src', '//about:blank').end().empty();
                } catch (e) {}
            });

            if (coming.iframe.preload) {
                F.showLoading();

                iframe.one('load', function() {
                    $(this).data('ready', 1);

                    // iOS will lose scrolling if we resize
                    if (!isTouch) {
                        $(this).bind('load.fb', F.update);
                    }

                    // Without this trick:
                    //   - iframe won't scroll on iOS devices
                    //   - IE7 sometimes displays empty iframe
                    $(this).parents('.fancybox-wrap').width('100%').removeClass('fancybox-tmp').show();

                    F._afterLoad();
                });
            }

            coming.content = iframe.appendTo( coming.inner );

            if (!coming.iframe.preload) {
                F._afterLoad();
            }
        },

        _preloadImages: function() {
            var group   = F.group,
                current = F.current,
                len     = group.length,
                cnt     = current.preload ? Math.min(current.preload, len - 1) : 0,
                item,
                i;

            for (i = 1; i <= cnt; i += 1) {
                item = group[ (current.index + i ) % len ];

                if (item.type === 'image' && item.href) {
                    new Image().src = item.href;
                }
            }
        },

        _afterLoad: function () {
            var coming   = F.coming,
                previous = F.current,
                placeholder = 'fancybox-placeholder',
                current,
                content,
                type,
                scrolling,
                href,
                embed;

            F.hideLoading();

            if (!coming || F.isActive === false) {
                return;
            }

            if (false === F.trigger('afterLoad', coming, previous)) {
                coming.wrap.stop(true).trigger('onReset').remove();

                F.coming = null;

                return;
            }

            if (previous) {
                F.trigger('beforeChange', previous);

                previous.wrap.stop(true).removeClass('fancybox-opened')
                    .find('.fancybox-item, .fancybox-nav')
                    .remove();
            }

            F.unbindEvents();

            current   = coming;
            content   = coming.content;
            type      = coming.type;
            scrolling = coming.scrolling;

            $.extend(F, {
                wrap  : current.wrap,
                skin  : current.skin,
                outer : current.outer,
                inner : current.inner,
                current  : current,
                previous : previous
            });

            href = current.href;

            switch (type) {
                case 'inline':
                case 'ajax':
                case 'html':
                    if (current.selector) {
                        content = $('<div>').html(content).find(current.selector);

                    } else if (isQuery(content)) {
                        if (!content.data(placeholder)) {
                            content.data(placeholder, $('<div class="' + placeholder + '"></div>').insertAfter( content ).hide() );
                        }

                        content = content.show().detach();

                        current.wrap.bind('onReset', function () {
                            if ($(this).find(content).length) {
                                content.hide().replaceAll( content.data(placeholder) ).data(placeholder, false);
                            }
                        });
                    }
                    break;

                case 'image':
                    content = current.tpl.image.replace(/\{href\}/g, href);
                    break;

                case 'swf':
                    content = '<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="' + href + '"></param>';
                    embed   = '';

                    $.each(current.swf, function(name, val) {
                        content += '<param name="' + name + '" value="' + val + '"></param>';
                        embed   += ' ' + name + '="' + val + '"';
                    });

                    content += '<embed src="' + href + '" type="application/x-shockwave-flash" width="100%" height="100%"' + embed + '></embed></object>';
                    break;
            }

            if (!(isQuery(content) && content.parent().is(current.inner))) {
                current.inner.append( content );
            }

            // Give a chance for helpers or callbacks to update elements
            F.trigger('beforeShow');

            // Set scrolling before calculating dimensions
            current.inner.css('overflow', scrolling === 'yes' ? 'scroll' : (scrolling === 'no' ? 'hidden' : scrolling));

            // Set initial dimensions and start position
            F._setDimension();

            F.reposition();

            F.isOpen = false;
            F.coming = null;

            F.bindEvents();

            if (!F.isOpened) {
                $('.fancybox-wrap').not( current.wrap ).stop(true).trigger('onReset').remove();

            } else if (previous.prevMethod) {
                F.transitions[ previous.prevMethod ]();
            }

            F.transitions[ F.isOpened ? current.nextMethod : current.openMethod ]();

            F._preloadImages();
        },

        _setDimension: function () {
            var viewport   = F.getViewport(),
                steps      = 0,
                canShrink  = false,
                canExpand  = false,
                wrap       = F.wrap,
                skin       = F.skin,
                inner      = F.inner,
                current    = F.current,
                width      = current.width,
                height     = current.height,
                minWidth   = current.minWidth,
                minHeight  = current.minHeight,
                maxWidth   = current.maxWidth,
                maxHeight  = current.maxHeight,
                scrolling  = current.scrolling,
                scrollOut  = current.scrollOutside ? current.scrollbarWidth : 0,
                margin     = current.margin,
                wMargin    = getScalar(margin[1] + margin[3]),
                hMargin    = getScalar(margin[0] + margin[2]),
                wPadding,
                hPadding,
                wSpace,
                hSpace,
                origWidth,
                origHeight,
                origMaxWidth,
                origMaxHeight,
                ratio,
                width_,
                height_,
                maxWidth_,
                maxHeight_,
                iframe,
                body;

            // Reset dimensions so we could re-check actual size
            wrap.add(skin).add(inner).width('auto').height('auto').removeClass('fancybox-tmp');

            wPadding = getScalar(skin.outerWidth(true)  - skin.width());
            hPadding = getScalar(skin.outerHeight(true) - skin.height());

            // Any space between content and viewport (margin, padding, border, title)
            wSpace = wMargin + wPadding;
            hSpace = hMargin + hPadding;

            origWidth  = isPercentage(width)  ? (viewport.w - wSpace) * getScalar(width)  / 100 : width;
            origHeight = isPercentage(height) ? (viewport.h - hSpace) * getScalar(height) / 100 : height;

            if (current.type === 'iframe') {
                iframe = current.content;

                if (current.autoHeight && iframe && iframe.data('ready') === 1) {
                    try {
                        if (iframe[0].contentWindow.document.location) {
                            inner.width( origWidth ).height(9999);

                            body = iframe.contents().find('body');

                            if (scrollOut) {
                                body.css('overflow-x', 'hidden');
                            }

                            origHeight = body.outerHeight(true);
                        }

                    } catch (e) {}
                }

            } else if (current.autoWidth || current.autoHeight) {
                inner.addClass( 'fancybox-tmp' );

                // Set width or height in case we need to calculate only one dimension
                if (!current.autoWidth) {
                    inner.width( origWidth );
                }

                if (!current.autoHeight) {
                    inner.height( origHeight );
                }

                if (current.autoWidth) {
                    origWidth = inner.width();
                }

                if (current.autoHeight) {
                    origHeight = inner.height();
                }

                inner.removeClass( 'fancybox-tmp' );
            }

            width  = getScalar( origWidth );
            height = getScalar( origHeight );

            ratio  = origWidth / origHeight;

            // Calculations for the content
            minWidth  = getScalar(isPercentage(minWidth) ? getScalar(minWidth, 'w') - wSpace : minWidth);
            maxWidth  = getScalar(isPercentage(maxWidth) ? getScalar(maxWidth, 'w') - wSpace : maxWidth);

            minHeight = getScalar(isPercentage(minHeight) ? getScalar(minHeight, 'h') - hSpace : minHeight);
            maxHeight = getScalar(isPercentage(maxHeight) ? getScalar(maxHeight, 'h') - hSpace : maxHeight);

            // These will be used to determine if wrap can fit in the viewport
            origMaxWidth  = maxWidth;
            origMaxHeight = maxHeight;

            if (current.fitToView) {
                maxWidth  = Math.min(viewport.w - wSpace, maxWidth);
                maxHeight = Math.min(viewport.h - hSpace, maxHeight);
            }

            maxWidth_  = viewport.w - wMargin;
            maxHeight_ = viewport.h - hMargin;

            if (current.aspectRatio) {
                if (width > maxWidth) {
                    width  = maxWidth;
                    height = getScalar(width / ratio);
                }

                if (height > maxHeight) {
                    height = maxHeight;
                    width  = getScalar(height * ratio);
                }

                if (width < minWidth) {
                    width  = minWidth;
                    height = getScalar(width / ratio);
                }

                if (height < minHeight) {
                    height = minHeight;
                    width  = getScalar(height * ratio);
                }

            } else {
                width = Math.max(minWidth, Math.min(width, maxWidth));

                if (current.autoHeight && current.type !== 'iframe') {
                    inner.width( width );

                    height = inner.height();
                }

                height = Math.max(minHeight, Math.min(height, maxHeight));
            }

            // Try to fit inside viewport (including the title)
            if (current.fitToView) {
                inner.width( width ).height( height );

                wrap.width( width + wPadding );

                // Real wrap dimensions
                width_  = wrap.width();
                height_ = wrap.height();

                if (current.aspectRatio) {
                    while ((width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight) {
                        if (steps++ > 19) {
                            break;
                        }

                        height = Math.max(minHeight, Math.min(maxHeight, height - 10));
                        width  = getScalar(height * ratio);

                        if (width < minWidth) {
                            width  = minWidth;
                            height = getScalar(width / ratio);
                        }

                        if (width > maxWidth) {
                            width  = maxWidth;
                            height = getScalar(width / ratio);
                        }

                        inner.width( width ).height( height );

                        wrap.width( width + wPadding );

                        width_  = wrap.width();
                        height_ = wrap.height();
                    }

                } else {
                    width  = Math.max(minWidth,  Math.min(width,  width  - (width_  - maxWidth_)));
                    height = Math.max(minHeight, Math.min(height, height - (height_ - maxHeight_)));
                }
            }

            if (scrollOut && scrolling === 'auto' && height < origHeight && (width + wPadding + scrollOut) < maxWidth_) {
                width += scrollOut;
            }

            inner.width( width ).height( height );

            wrap.width( width + wPadding );

            width_  = wrap.width();
            height_ = wrap.height();

            canShrink = (width_ > maxWidth_ || height_ > maxHeight_) && width > minWidth && height > minHeight;
            canExpand = current.aspectRatio ? (width < origMaxWidth && height < origMaxHeight && width < origWidth && height < origHeight) : ((width < origMaxWidth || height < origMaxHeight) && (width < origWidth || height < origHeight));

            $.extend(current, {
                dim : {
                    width	: getValue( width_ ),
                    height	: getValue( height_ )
                },
                origWidth  : origWidth,
                origHeight : origHeight,
                canShrink  : canShrink,
                canExpand  : canExpand,
                wPadding   : wPadding,
                hPadding   : hPadding,
                wrapSpace  : height_ - skin.outerHeight(true),
                skinSpace  : skin.height() - height
            });

            if (!iframe && current.autoHeight && height > minHeight && height < maxHeight && !canExpand) {
                inner.height('auto');
            }
        },

        _getPosition: function (onlyAbsolute) {
            var current  = F.current,
                viewport = F.getViewport(),
                margin   = current.margin,
                width    = F.wrap.width()  + margin[1] + margin[3],
                height   = F.wrap.height() + margin[0] + margin[2],
                rez      = {
                    position: 'absolute',
                    top  : margin[0],
                    left : margin[3]
                };

            if (current.autoCenter && current.fixed && !onlyAbsolute && height <= viewport.h && width <= viewport.w) {
                rez.position = 'fixed';

            } else if (!current.locked) {
                rez.top  += viewport.y;
                rez.left += viewport.x;
            }

            rez.top  = getValue(Math.max(rez.top,  rez.top  + ((viewport.h - height) * current.topRatio)));
            rez.left = getValue(Math.max(rez.left, rez.left + ((viewport.w - width)  * current.leftRatio)));

            return rez;
        },

        _afterZoomIn: function () {
            var current = F.current;

            if (!current) {
                return;
            }

            F.isOpen = F.isOpened = true;

            F.wrap.css('overflow', 'visible').addClass('fancybox-opened').hide().show(0);

            F.update();

            // Assign a click event
            if ( current.closeClick || (current.nextClick && F.group.length > 1) ) {
                F.inner.css('cursor', 'pointer').bind('click.fb', function(e) {
                    if (!$(e.target).is('a') && !$(e.target).parent().is('a')) {
                        e.preventDefault();

                        F[ current.closeClick ? 'close' : 'next' ]();
                    }
                });
            }

            // Create a close button
            if (current.closeBtn) {
                $(current.tpl.closeBtn).appendTo(F.skin).bind('click.fb', function(e) {
                    e.preventDefault();

                    F.close();
                });
            }

            // Create navigation arrows
            if (current.arrows && F.group.length > 1) {
                if (current.loop || current.index > 0) {
                    $(current.tpl.prev).appendTo(F.outer).bind('click.fb', F.prev);
                }

                if (current.loop || current.index < F.group.length - 1) {
                    $(current.tpl.next).appendTo(F.outer).bind('click.fb', F.next);
                }
            }

            F.trigger('afterShow');

            // Stop the slideshow if this is the last item
            if (!current.loop && current.index === current.group.length - 1) {

                F.play( false );

            } else if (F.opts.autoPlay && !F.player.isActive) {
                F.opts.autoPlay = false;

                F.play(true);
            }
        },

        _afterZoomOut: function ( obj ) {
            obj = obj || F.current;

            $('.fancybox-wrap').trigger('onReset').remove();

            $.extend(F, {
                group  : {},
                opts   : {},
                router : false,
                current   : null,
                isActive  : false,
                isOpened  : false,
                isOpen    : false,
                isClosing : false,
                wrap   : null,
                skin   : null,
                outer  : null,
                inner  : null
            });

            F.trigger('afterClose', obj);
        }
    });

    /*
     *	Default transitions
     */

    F.transitions = {
        getOrigPosition: function () {
            var current  = F.current,
                element  = current.element,
                orig     = current.orig,
                pos      = {},
                width    = 50,
                height   = 50,
                hPadding = current.hPadding,
                wPadding = current.wPadding,
                viewport = F.getViewport();

            if (!orig && current.isDom && element.is(':visible')) {
                orig = element.find('img:first');

                if (!orig.length) {
                    orig = element;
                }
            }

            if (isQuery(orig)) {
                pos = orig.offset();

                if (orig.is('img')) {
                    width  = orig.outerWidth();
                    height = orig.outerHeight();
                }

            } else {
                pos.top  = viewport.y + (viewport.h - height) * current.topRatio;
                pos.left = viewport.x + (viewport.w - width)  * current.leftRatio;
            }

            if (F.wrap.css('position') === 'fixed' || current.locked) {
                pos.top  -= viewport.y;
                pos.left -= viewport.x;
            }

            pos = {
                top     : getValue(pos.top  - hPadding * current.topRatio),
                left    : getValue(pos.left - wPadding * current.leftRatio),
                width   : getValue(width  + wPadding),
                height  : getValue(height + hPadding)
            };

            return pos;
        },

        step: function (now, fx) {
            var ratio,
                padding,
                value,
                prop       = fx.prop,
                current    = F.current,
                wrapSpace  = current.wrapSpace,
                skinSpace  = current.skinSpace;

            if (prop === 'width' || prop === 'height') {
                ratio = fx.end === fx.start ? 1 : (now - fx.start) / (fx.end - fx.start);

                if (F.isClosing) {
                    ratio = 1 - ratio;
                }

                padding = prop === 'width' ? current.wPadding : current.hPadding;
                value   = now - padding;

                F.skin[ prop ](  getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) ) );
                F.inner[ prop ]( getScalar( prop === 'width' ?  value : value - (wrapSpace * ratio) - (skinSpace * ratio) ) );
            }
        },

        zoomIn: function () {
            var current  = F.current,
                startPos = current.pos,
                effect   = current.openEffect,
                elastic  = effect === 'elastic',
                endPos   = $.extend({opacity : 1}, startPos);

            // Remove "position" property that breaks older IE
            delete endPos.position;

            if (elastic) {
                startPos = this.getOrigPosition();

                if (current.openOpacity) {
                    startPos.opacity = 0.1;
                }

            } else if (effect === 'fade') {
                startPos.opacity = 0.1;
            }

            F.wrap.css(startPos).animate(endPos, {
                duration : effect === 'none' ? 0 : current.openSpeed,
                easing   : current.openEasing,
                step     : elastic ? this.step : null,
                complete : F._afterZoomIn
            });
        },

        zoomOut: function () {
            var current  = F.current,
                effect   = current.closeEffect,
                elastic  = effect === 'elastic',
                endPos   = {opacity : 0.1};

            if (elastic) {
                endPos = this.getOrigPosition();

                if (current.closeOpacity) {
                    endPos.opacity = 0.1;
                }
            }

            F.wrap.animate(endPos, {
                duration : effect === 'none' ? 0 : current.closeSpeed,
                easing   : current.closeEasing,
                step     : elastic ? this.step : null,
                complete : F._afterZoomOut
            });
        },

        changeIn: function () {
            var current   = F.current,
                effect    = current.nextEffect,
                startPos  = current.pos,
                endPos    = { opacity : 1 },
                direction = F.direction,
                distance  = 200,
                field;

            startPos.opacity = 0.1;

            if (effect === 'elastic') {
                field = direction === 'down' || direction === 'up' ? 'top' : 'left';

                if (direction === 'down' || direction === 'right') {
                    startPos[ field ] = getValue(getScalar(startPos[ field ]) - distance);
                    endPos[ field ]   = '+=' + distance + 'px';

                } else {
                    startPos[ field ] = getValue(getScalar(startPos[ field ]) + distance);
                    endPos[ field ]   = '-=' + distance + 'px';
                }
            }

            // Workaround for http://bugs.jquery.com/ticket/12273
            if (effect === 'none') {
                F._afterZoomIn();

            } else {
                F.wrap.css(startPos).animate(endPos, {
                    duration : current.nextSpeed,
                    easing   : current.nextEasing,
                    complete : F._afterZoomIn
                });
            }
        },

        changeOut: function () {
            var previous  = F.previous,
                effect    = previous.prevEffect,
                endPos    = { opacity : 0.1 },
                direction = F.direction,
                distance  = 200;

            if (effect === 'elastic') {
                endPos[ direction === 'down' || direction === 'up' ? 'top' : 'left' ] = ( direction === 'up' || direction === 'left' ? '-' : '+' ) + '=' + distance + 'px';
            }

            previous.wrap.animate(endPos, {
                duration : effect === 'none' ? 0 : previous.prevSpeed,
                easing   : previous.prevEasing,
                complete : function () {
                    $(this).trigger('onReset').remove();
                }
            });
        }
    };

    /*
     *	Overlay helper
     */

    F.helpers.overlay = {
        defaults : {
            closeClick : true,      // if true, fancyBox will be closed when user clicks on the overlay
            speedOut   : 200,       // duration of fadeOut animation
            showEarly  : true,      // indicates if should be opened immediately or wait until the content is ready
            css        : {},        // custom CSS properties
            locked     : !isTouch,  // if true, the content will be locked into overlay
            fixed      : true       // if false, the overlay CSS position property will not be set to "fixed"
        },

        overlay : null,      // current handle
        fixed   : false,     // indicates if the overlay has position "fixed"
        el      : $('html'), // element that contains "the lock"

        // Public methods
        create : function(opts) {
            var parent;

            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.close();
            }

            parent = F.coming ? F.coming.parent : opts.parent;

            this.overlay = $('<div class="fancybox-overlay"></div>').appendTo( parent && parent.length ? parent : 'body' );
            this.fixed   = false;

            if (opts.fixed && F.defaults.fixed) {
                this.overlay.addClass('fancybox-overlay-fixed');

                this.fixed = true;
            }
        },

        open : function(opts) {
            var that = this;

            opts = $.extend({}, this.defaults, opts);

            if (this.overlay) {
                this.overlay.unbind('.overlay').width('auto').height('auto');

            } else {
                this.create(opts);
            }

            if (!this.fixed) {
                W.bind('resize.overlay', $.proxy( this.update, this) );

                this.update();
            }

            if (opts.closeClick) {
                this.overlay.bind('click.overlay', function(e) {
                    if ($(e.target).hasClass('fancybox-overlay')) {
                        if (F.isActive) {
                            F.close();
                        } else {
                            that.close();
                        }

                        return false;
                    }
                });
            }

            this.overlay.css( opts.css ).show();
        },

        close : function() {
            W.unbind('resize.overlay');

            if (this.el.hasClass('fancybox-lock')) {
                $('.fancybox-margin').removeClass('fancybox-margin');

                this.el.removeClass('fancybox-lock');

                W.scrollTop( this.scrollV ).scrollLeft( this.scrollH );
            }

            $('.fancybox-overlay').remove().hide();

            $.extend(this, {
                overlay : null,
                fixed   : false
            });
        },

        // Private, callbacks

        update : function () {
            var width = '100%', offsetWidth;

            // Reset width/height so it will not mess
            this.overlay.width(width).height('100%');

            // jQuery does not return reliable result for IE
            if (IE) {
                offsetWidth = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);

                if (D.width() > offsetWidth) {
                    width = D.width();
                }

            } else if (D.width() > W.width()) {
                width = D.width();
            }

            this.overlay.width(width).height(D.height());
        },

        // This is where we can manipulate DOM, because later it would cause iframes to reload
        onReady : function (opts, obj) {
            var overlay = this.overlay;

            $('.fancybox-overlay').stop(true, true);

            if (!overlay) {
                this.create(opts);
            }

            if (opts.locked && this.fixed && obj.fixed) {
                obj.locked = this.overlay.append( obj.wrap );
                obj.fixed  = false;
            }

            if (opts.showEarly === true) {
                this.beforeShow.apply(this, arguments);
            }
        },

        beforeShow : function(opts, obj) {
            if (obj.locked && !this.el.hasClass('fancybox-lock')) {
                if (this.fixPosition !== false) {
                    $('*:not(object)').filter(function(){
                        return ($(this).css('position') === 'fixed' && !$(this).hasClass("fancybox-overlay") && !$(this).hasClass("fancybox-wrap") );
                    }).addClass('fancybox-margin');
                }

                this.el.addClass('fancybox-margin');

                this.scrollV = W.scrollTop();
                this.scrollH = W.scrollLeft();

                this.el.addClass('fancybox-lock');

                W.scrollTop( this.scrollV ).scrollLeft( this.scrollH );
            }

            this.open(opts);
        },

        onUpdate : function() {
            if (!this.fixed) {
                this.update();
            }
        },

        afterClose: function (opts) {
            // Remove overlay if exists and fancyBox is not opening
            // (e.g., it is not being open using afterClose callback)
            if (this.overlay && !F.coming) {
                this.overlay.fadeOut(opts.speedOut, $.proxy( this.close, this ));
            }
        }
    };

    /*
     *	Title helper
     */

    F.helpers.title = {
        defaults : {
            type     : 'float', // 'float', 'inside', 'outside' or 'over',
            position : 'bottom' // 'top' or 'bottom'
        },

        beforeShow: function (opts) {
            var current = F.current,
                text    = current.title,
                type    = opts.type,
                title,
                target;

            if ($.isFunction(text)) {
                text = text.call(current.element, current);
            }

            if (!isString(text) || $.trim(text) === '') {
                return;
            }

            title = $('<div class="fancybox-title fancybox-title-' + type + '-wrap">' + text + '</div>');

            switch (type) {
                case 'inside':
                    target = F.skin;
                    break;

                case 'outside':
                    target = F.wrap;
                    break;

                case 'over':
                    target = F.inner;
                    break;

                default: // 'float'
                    target = F.skin;

                    title.appendTo('body');

                    if (IE) {
                        title.width( title.width() );
                    }

                    title.wrapInner('<span class="child"></span>');

                    //Increase bottom margin so this title will also fit into viewport
                    F.current.margin[2] += Math.abs( getScalar(title.css('margin-bottom')) );
                    break;
            }

            title[ (opts.position === 'top' ? 'prependTo'  : 'appendTo') ](target);
        }
    };

    // jQuery plugin initialization
    $.fn.fancybox = function (options) {
        var index,
            that     = $(this),
            selector = this.selector || '',
            run      = function(e) {
                var what = $(this).blur(), idx = index, relType, relVal;

                if (!(e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) && !what.is('.fancybox-wrap')) {
                    relType = options.groupAttr || 'data-fancybox-group';
                    relVal  = what.attr(relType);

                    if (!relVal) {
                        relType = 'rel';
                        relVal  = what.get(0)[ relType ];
                    }

                    if (relVal && relVal !== '' && relVal !== 'nofollow') {
                        what = selector.length ? $(selector) : that;
                        what = what.filter('[' + relType + '="' + relVal + '"]');
                        idx  = what.index(this);
                    }

                    options.index = idx;

                    // Stop an event from bubbling if everything is fine
                    if (F.open(what, options) !== false) {
                        e.preventDefault();
                    }
                }
            };

        options = options || {};
        index   = options.index || 0;

        if (!selector || options.live === false) {
            that.unbind('click.fb-start').bind('click.fb-start', run);

        } else {
            D.undelegate(selector, 'click.fb-start').delegate(selector + ":not('.fancybox-item, .fancybox-nav')", 'click.fb-start', run);
        }

        this.filter('[data-fancybox-start=1]').trigger('click');

        return this;
    };

    // Tests that need a body at doc ready
    D.ready(function() {
        var w1, w2;

        if ( $.scrollbarWidth === undefined ) {
            // http://benalman.com/projects/jquery-misc-plugins/#scrollbarwidth
            $.scrollbarWidth = function() {
                var parent = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body'),
                    child  = parent.children(),
                    width  = child.innerWidth() - child.height( 99 ).innerWidth();

                parent.remove();

                return width;
            };
        }

        if ( $.support.fixedPosition === undefined ) {
            $.support.fixedPosition = (function() {
                var elem  = $('<div style="position:fixed;top:20px;"></div>').appendTo('body'),
                    fixed = ( elem[0].offsetTop === 20 || elem[0].offsetTop === 15 );

                elem.remove();

                return fixed;
            }());
        }

        $.extend(F.defaults, {
            scrollbarWidth : $.scrollbarWidth(),
            fixed  : $.support.fixedPosition,
            parent : $('body')
        });

        //Get real width of page scroll-bar
        w1 = $(window).width();

        H.addClass('fancybox-lock-test');

        w2 = $(window).width();

        H.removeClass('fancybox-lock-test');

        $("<style type='text/css'>.fancybox-margin{margin-right:" + (w2 - w1) + "px;}</style>").appendTo("head");
    });

}(window, document, jQuery));



/*custom script*/
/*'use strict';*/
var styleLoaded = false;




document.body.addEventListener('styleLoaded', function(e) {
    styleLoaded = true;
    console.log('style loaded true');
});


$(document).ready(function () {

    /*owl carusel*/
    (function () {
        var $sliderSimple = $('[data-role="slider"]');


        if (styleLoaded) {
            console.log('owl init');
            initOwl();
        } else {
            document.body.addEventListener('styleLoaded', function(e) {
                console.log('owl init');
                initOwl();
            });
        }



        function initOwl() {
            setTimeout(function () {
                $sliderSimple.owlCarousel({
                    items: 1,
                    autoplay: false,
                    autoplayTimeout: 4000,
                    navigation: true, // Show next and prev buttons
                    slideSpeed: 300,
                    paginationSpeed: 300,
                    nav: true,
                    dots: false,
                    dotsEach: true,
                    navText: false,
                    loop: true,
                    autoWidth: false,
                    responsive: false,
                    itemsScaleUp: false,
                    onTranslated: function () {
                        playVideo($('.owl-loaded .owl-item.active'));
                    }
                });
            }, 5000);
        }



        function playVideo (parent) {
            var $video = $(parent).find('video');

            if (!$video.length) return;

            //console.log($video);
            var timer = setTimeout(function () {
                $video.each(function () {
                    //console.log(this);
                    this.play();
                });
            }, 1000);
        }


        /*$(window).on('load', function () {
         $sliderSimple.owlCarousel({
         items: 1,
         autoplay: false,
         autoplayTimeout: 4000,
         navigation: true, // Show next and prev buttons
         slideSpeed: 300,
         paginationSpeed: 300,
         nav: true,
         dots: false,
         dotsEach: true,
         navText: false,
         loop: true,
         autoWidth: false,
         responsive: false,
         itemsScaleUp: false,
         onTranslated: function () {
         playVideo($('.owl-loaded .owl-item.active'));
         }
         });
         console.log('owl refresh');
         });

         $(window).on('refreshOwl', function () {
         $sliderSimple.trigger('refresh.owl.carousel');
         console.log('owl refresh');
         });*/

        /*$("#owl1").owlCarousel({
         items: 1,
         autoplay: false,
         autoplayTimeout: 4000,
         navigation: true, // Show next and prev buttons
         slideSpeed: 300,
         paginationSpeed: 300,
         nav: true,
         dots: true,
         dotsEach: true,
         navText: false,
         loop: true,
         autoWidth: false,
         responsive: false,
         itemsScaleUp: false,
         });

         $("#owl2").owlCarousel({
         items: 1,
         autoplay: false,
         autoplayTimeout: 4000,
         navigation: true, // Show next and prev buttons
         slideSpeed: 300,
         paginationSpeed: 300,
         nav: true,
         dots: true,
         dotsEach: true,
         navText: false,
         loop: true,
         autoWidth: false,
         responsive: false,
         itemsScaleUp: false,
         onTranslated: function () {
         slide = $('#owl2 .active .item');
         if (!$(slide).hasClass('loaded')) {

         $.ajax({
         method: "POST",
         url: "js/loadslide.php",
         data: {'index': $(slide).data('slide')},
         success: function (data) {
         $(slide).html(data).addClass('loaded');
         }
         });
         }
         }
         });*/
    })();

    /*Fancybox*/
    (function () {
        var $fancyMenu = $('[data-role="lightbox-menu"]');
        var $fancySimple = $('[data-role="lightbox"]');
        var $fancyVideo = $('[data-role="lightbox-video"]');
        var $fancyTest = $('[data-role="lightbox-test"]');

        $('.fancybox-modal').fancybox({
            padding: 0,
            margin: [0, 70,0,70],
            fitToView: false,
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function(current) {
                playVideo(current.href);
            }
        });

        $fancySimple.fancybox({
            padding: 0,
            margin: [0, 70,0,70],
            fitToView: false,
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function(current) {
                playVideo(current.href);
            }
        });

        /*http://jsfiddle.net/x03xqu7t/2/ отключить последнему слайду навигацию*/
        $fancyMenu.fancybox({
            prevEffect	: 'none',
            nextEffect	: 'none',
            padding: 0,
            //autoHeight: true,
            fitToView: false,
            loop: false,
            helpers: {
                overlay: {
                    closeClick: true
                }
            },
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterLoad: function(current) {
                if (current.index === current.group.length - 1) {
                    current.arrows = false;
                    current.keys.prev = {};
                    current.keys.next = {};
                    current.helpers.overlay.closeClick = false;
                    setTimeout(function () {
                        $('.fancybox-overlay').one('click', closeFancyOnOverlay);
                    }, 2000);

                    playVideo(current.href);
                    //console.dir(current);
                }
            }
        });

        $fancyTest.fancybox({
            padding: 0,
            loop: false,
            fitToView: false,
            scrolling: 'no',
            tpl: {
                closeBtn: '<span class="lightbox-close"></span>',
                next: '<span class="lightbox-next"></span>',
                prev: '<span class="lightbox-prev"></span>'
            },
            afterClose: function() {
                $('#popup__calculate-cost').trigger('resetTest');
                //console.log('test reset triggered');
            }
        });

        function closeFancyOnOverlay(e) {
            var target = e.target;

            if (this !== target) return;

            $.fancybox.close();
        }

        function playVideo (parent) {
            var $video = $(parent).find('video');

            if (!$video.length) return;

            //console.log($video);
            var timer = setTimeout(function () {
                $video.each(function () {
                    //console.log(this);
                    this.play();
                });
            }, 1000);
        }

        /*youtube fancy change modal on video end*/
        (function () {
            var script = '<script src="http://www.youtube.com/iframe_api?enablejsapi=1" async></script>';
            $('script').eq(0).after(script);

            $fancyVideo.fancybox({
                padding: 0,
                loop: false,
                fitToView: false,
                tpl: {
                    closeBtn: '<span class="lightbox-close"></span>',
                    next: '<span class="lightbox-next"></span>',
                    prev: '<span class="lightbox-prev"></span>'
                },
                afterLoad: onLightboxOpen,
                beforeClose: onLightboxClose
            });

            var player;

            function onLightboxOpen() {
                if(player) {
                    player.playVideo();
                    return;
                }

                onYouTubeIframeAPIReady();
            }

            function onLightboxClose() {
                if (!player) return;
                //console.dir(player);
                //player.stopVideo();
                $('#player').replaceWith('<div id="player"></div>');
                player = null;
                //console.log('closed');
                //console.log($('#player'));
            }

            function onYouTubeIframeAPIReady() {
                player = new YT.Player('player', {
                    height: '390',
                    width: '640',
                    videoId: 'rOM4c0pDhvg',
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    }
                });

                //console.dir(player);
            }

            // autoplay video
            function onPlayerReady(event) {
                event.target.playVideo();
            }

            // when video ends
            function onPlayerStateChange(event) {
                if(event.data === 0) {
                    $.fancybox({
                        href: "#popup__video-form",
                        type: 'inline',
                        padding: 0,
                        fitToView: false,
                        tpl: {
                            closeBtn: '<span class="lightbox-close"></span>',
                            next: '<span class="lightbox-next"></span>',
                            prev: '<span class="lightbox-prev"></span>'
                        },
                        afterLoad: function(current) {
                            playVideo(current.href);
                        }
                    });
                }
            }
        })();
    })();

    /*tea bag*/
    (function () {
        var $teaBag = $('#manager-message-bell');
        var timer = setTimeout(showTeaBag, 10000);
        //showTeaBag();

        $teaBag.on('click', function (e) {
            e.preventDefault();

            hideTeaBag();
            goToHiddenEl();
        });

        function showTeaBag() {
            $teaBag.addClass('active');
        }

        function hideTeaBag() {
            $teaBag.removeClass('active');
        }

        function goToHiddenEl() {
            var $targetEl = $($teaBag.attr('data-target'));
            $targetEl.removeClass('hidden');
            var destination = $targetEl.offset().top;
            var offset = $('.bottom-menu').height();

            if (destination < 0) {
                destination = 0;
            }

            $('html, body').animate({scrollTop: destination - offset}, "slow", function () {
                $targetEl.addClass('active');
            });
        }
    })();

    /*Forms*/
    (function () {
        var $formNamePhone = $('[data-validate="name-phone"]');
        var $formPhone = $('[data-validate="phone"]');

        /*request*/
        var options = {
            delegation: true,
            clearForm: true,
            resetForm: true,
            type: 'post',
            /*beforeSubmit: function () {
             //$.fancybox.close();
             console.dir(arguments);
             },*/
            /*beforeSend: function () {
             console.dir(this);
             },*/
            success: function () {
                $.fancybox({
                    href: "#popupThanks",
                    padding: 0,
                    loop: false,
                    tpl: {
                        closeBtn: '<span class="lightbox-close"></span>',
                        next: '<span class="lightbox-next"></span>',
                        prev: '<span class="lightbox-prev"></span>'
                    }
                });
            },
            error: function () {
                $.fancybox({
                    href: "#popupError",
                    padding: 0,
                    loop: false,
                    tpl: {
                        closeBtn: '<span class="lightbox-close"></span>',
                        next: '<span class="lightbox-next"></span>',
                        prev: '<span class="lightbox-prev"></span>'
                    }
                });
            }
        };
        $formNamePhone
            .add($formPhone)
            .ajaxForm(options);

        $('#form1').ajaxForm(options);
        $('#form2').ajaxForm(options);
        $('#form3').ajaxForm(options);
        $('#form4').ajaxForm(options);
        $('#form5').ajaxForm(options);
        $('#form6').ajaxForm(options);

        /*phone mask*/
        $("input[name=phone]:not(#uptocall-phone)").mask("+7 (999) 999-99-99");

        /*validation*/
        $formNamePhone.each(function(){
            $(this).validate({
                rules: {
                    name: {required: true, maxlength: 100},
                    phone: {required: true}
                },
                messages: {
                    name: {required: "", maxlength: ""},
                    phone: {required: ""}
                }
            });
        });
        $formPhone.each(function () {
            $(this).validate({
                rules: {
                    phone: {required: true}
                },
                messages: {
                    phone: {required: ""}
                }
            });
        });

        $("#form1").validate({
            rules: {
                name: {required: true, maxlength: 100,},
                phone: {required: true, minlength: 10, maxlength: 25,},
            },
            messages: {
                name: {required: "", maxlength: "",},
                phone: {required: "", maxlength: "",},
            }
        });
        $("#form2").validate({
            rules: {
                name: {required: true, maxlength: 100,},
                phone: {required: true, minlength: 10, maxlength: 25,},
            },
            messages: {
                name: {required: "", maxlength: "",},
                phone: {required: "", maxlength: "",},
            }
        });
        $("#form3").validate({
            rules: {
                mess: {required: true, maxlength: 300,},
            },
            messages: {
                mess: {required: "", maxlength: "",},
            }
        });
        $("#form4").validate({
            rules: {
                phone: {required: true, minlength: 10, maxlength: 25,},
            },
            messages: {
                phone: {required: "", maxlength: "",},
            }
        });
        $("#form5").validate({
            rules: {
                name: {required: true, maxlength: 100,},
                phone: {required: true, minlength: 10, maxlength: 25,},
            },
            messages: {
                name: {required: "", maxlength: "",},
                phone: {required: "", maxlength: "",},
            }
        });
        $("#form6").validate({
            rules: {
                name: {required: true, maxlength: 100,},
                phone: {required: true, minlength: 10, maxlength: 25,},
                mess: {required: true, maxlength: 300,},
            },
            messages: {
                name: {required: "", maxlength: "",},
                phone: {required: "", maxlength: "",},
                mess: {required: "", maxlength: "",},
            }
        });

        /*input type file validation*/
        $('input[type=file]').change(function () {
            var filename = $(this).val().replace("C:\\fakepath\\", "");
            if (filename == '') {
                filename = "(Не выбранa)";
            }
            var parent = $(this).parent().parent();
            $(parent).find('.fileName').html(filename);
        });
    })();

    /*set form target*/
    (function () {
        var $button = $('[data-form-location]');

        $button.on('click', setFormLocation);

        function setFormLocation() {
            var _ = $(this);
            var target = _.attr('href');
            var data = _.attr('data-form-location');

            $(target).find('input[name="whatForm"]').eq(0).val(data);
        }
    })();

    /*Yandex map*/
    (function(){
        if (!document.getElementById('map')) return;

        var firstScript = document.querySelectorAll('script')[0];
        var script = document.createElement('script');
        var placemarks = {
            0: {
                coords: [55.76127956896109,37.67980749999999],
                hintContent: 'Оформление выписки из роддома'
            }
        };
        var center = [55.76127956896109,37.67980749999999];
        var zoom = 17;

        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
        script.async = true;
        firstScript.parentNode.insertBefore(script, firstScript);

        script.addEventListener('load', function () {
            ymaps.ready(init);
        });

        function init(){
            var myMap = new ymaps.Map('map', {
                center: center,
                zoom: zoom
            }, {
                searchControlProvider: 'yandex#search'
            });

            myMap.behaviors.disable('scrollZoom');

            for (var currPlacemark in placemarks) {
                var placemark = new ymaps.Placemark(placemarks[currPlacemark].coords, {
                    hintContent: placemarks[currPlacemark].hintContent
                }, {
                    iconLayout: "default#image",
                    iconImageHref: "./images/mark_orange.png",
                    iconImageSize: [50, 50],
                    iconImageOffset: [-25, -50]
                });

                myMap.geoObjects.add(placemark);

                placemark.events.add('click', function (e) {
                    e.preventDefault();

                    $.fancybox({
                        href: '#popup__map',
                        type: null,
                        padding: 0,
                        fitToView: false,
                        tpl: {
                            closeBtn: '<span class="lightbox-close"></span>',
                            next: '<span class="lightbox-next"></span>',
                            prev: '<span class="lightbox-prev"></span>'
                        }
                    });
                });
            }
        }
    })();

    /*test*/
    (function () {
        var $formStep1 = $('#step1__form');
        var $formStep2 = $('#step2__form');
        var $formStep4 = $('#step4__form');

        var $popUp = $('#popup__calculate-cost');
        var $forms = $popUp.find('form');
        var $steps = $popUp.find('.step');
        var $stepCounters = $popUp.find('.steps__counter span');
        var stepIndex = 0;
        var formDataArr = [];


        $popUp.on({
            'resetTest': resetTest,
            'submit': onSubmitValidForm
        });

        $formStep1.add($formStep2).on('click', 'input',  function (e) {
            validate(this.closest('form'));
        });

        $formStep4.on('blur', 'input',  function (e) {
            setTimeout(function () {
                validate(this.closest('form'))
            }.bind(this), 500);
        });

        function onSubmitValidForm(e) {
            e.preventDefault();

            var target = e.target;

            //console.log(target);

            //console.log($(target).parents('.step'));

            stepIndex = $(target).parents('.step').index();

            if (!validate(target)) return;

            if (stepIndex === 1) {
                collectFormData(target);
                nextStep();
                setTimeout(nextStep, 4200);
            } else if (stepIndex < $steps.length - 1) {
                collectFormData(target);
                nextStep();
            } else {
                collectFormData(target);
                sendRequest(target);
            }
        }
        function validate(form) {
            var valid = false;

            if (stepIndex === 3) {
                var phone = form.querySelector('input[name="phone"]');
                valid = !!phone.value;

                phone.classList.remove('valid');
                phone.classList.remove('error');

                if (!valid) {
                    phone.classList.add('error');
                } else {
                    phone.classList.add('valid');
                }
            } else {
                valid = form.querySelectorAll('input:checked').length > 0;

                if (!valid) {
                    showError(form);
                } else {
                    hideError(form);
                }
            }

            return valid;
        }
        function sendRequest(form) {
            //console.dir($.param(formDataArr));
            $.ajax({
                type: form.method,
                url: form.action,
                data: $.param(formDataArr),
                success: function (respond) {
                    //console.log(respond);
                    hideTestBtn();
                    $.fancybox({
                        href: "#popupThanks",
                        padding: 0,
                        loop: false,
                        tpl: {
                            closeBtn: '<span class="lightbox-close"></span>',
                            next: '<span class="lightbox-next"></span>',
                            prev: '<span class="lightbox-prev"></span>'
                        }
                    });
                },
                error: function () {
                    $.fancybox({
                        href: "#popupError",
                        padding: 0,
                        loop: false,
                        tpl: {
                            closeBtn: '<span class="lightbox-close"></span>',
                            next: '<span class="lightbox-next"></span>',
                            prev: '<span class="lightbox-prev"></span>'
                        }
                    });
                }
            })
        }
        function collectFormData(form) {
            var dataArr = $(form).serializeArray();

            formDataArr = formDataArr.concat(dataArr);
            //console.log(formDataArr);
        }
        function nextStep() {
            if (stepIndex === $steps.length - 1) return;

            $stepCounters.eq(stepIndex).removeClass('active');
            $stepCounters.eq(stepIndex + 1).addClass('active');

            $steps.eq(stepIndex).removeClass('active');
            $steps.eq(stepIndex + 1).addClass('active');

            stepIndex++;
        }
        function showError(form) {
            var $error = $(form).find('.error-block');

            $error.fadeIn();
            /*setTimeout(function () {
             $error.fadeOut();
             }, 2000);*/
        }
        function hideError(form) {
            var $error = $(form).find('.error-block');

            $error.fadeOut();
        }
        function resetTest() {
            stepIndex = 0;

            $stepCounters.removeClass('active');
            $stepCounters.eq(0).addClass('active');

            $steps.removeClass('active');
            $steps.eq(0).addClass('active');

            $forms.each(function () {
                this.reset();
            });
        }
        function hideTestBtn() {
            $('[data-role="lightbox-test"]').hide();
        }
    })();

    /*scroller*/
    (function () {
        function scrollToElement(element, offset) {
            $(element).click(function (e) {
                var elementClick = $(this).attr("href");
                var destination = $(elementClick).offset().top;
                if (destination < 0) {
                    destination = 0;
                }
                $('html, body').animate({scrollTop: destination - offset}, "slow");
                e.preventDefault();
            });
        }
        scrollToElement("a[href='#f1']", 102);
        scrollToElement("a[href='#f2']", 102);
        scrollToElement("a[href='#f3']", 102);
        scrollToElement("a[href='#f4']", 102);
        scrollToElement("a[href='#f5']", 102);
        scrollToElement("a[href='#f6']", 102);
        scrollToElement("a[href='#f7']", 102);
    })();

    /*before leave page*/
    /*(function () {
     $(window).on('beforeunload', function (e) {
     console.log(e);
     console.dir(e);

     return;
     })
     })();*/
});

/*global helpers*/
/*some unused function*/
function baseName(str) {
    var base = new String(str).substring(str.lastIndexOf('/') + 1);
    if (base.lastIndexOf(".") != -1)
        base = base.substring(0, base.lastIndexOf("."));
    return base;
}


/*timer*/

if(!$.cookie('limit')){
    $.cookie('limit', new Date(), {
        expires: 15
    });
}
var now = new Date($.cookie('limit'));

var timeend = new Date(now.getFullYear(), now.getMonth(), now.getDate()+15);

var today = new Date();

today = Math.floor((timeend-today)/1000);
/*------------Таймер------------------------*/
var limit = today; // в секундах

function processTimer(){

    if (limit > 7) {
        setTimeout("processTimer()",1000);
        limit--;
    } else {
        // alert("Время вышло");
    }
    var limit_str = "";
    var deys = parseInt((limit / 3600) / 24);
    var hours = parseInt((limit-(deys*3600*24))/3600);
    var minutes = parseInt( ((limit-(deys*3600*24))- (hours*3600))/60);
    var seconds = parseInt(limit-(deys*3600*24+hours*3600+minutes*60));
    if (deys < 10) deys = "0" + deys;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    limit_str = "<div class='timer_block'><div class='deys'>"+deys+"</div><div class='hours'>"+hours+"</div><div class='minutes'>"+minutes+"</div><div class=seconds>"+seconds+"</div></div>";
    // вывод времени
    var el_timer = document.getElementById("timer");
    if (el_timer) el_timer.innerHTML = limit_str;
}
//Запуск таймера
processTimer();



/*shim*/
!function(){var r=Array.prototype,t=Object.prototype.toString,n={indexOf:function(r,t){t=+(t||0);var n=this,e=n.length;if(e>0&&e>t)for(t=0>t?Math.ceil(t):Math.floor(t),-e>t&&(t=0),0>t&&(t+=e);e>t;){if(t in n&&n[t]===r)return t;++t}return-1},forEach:function(r,t){for(var n=-1,e=this,o=e.length;++n<o;)n in e&&(t?r.call(t,e[n],n,e):r(e[n],n,e))},map:function(r,t){for(var n=-1,e=this,o=e.length,i=new Array(o);++n<o;)n in e&&(i[n]=t?r.call(t,e[n],n,e):r(e[n],n,e));return i},filter:function(r,t){for(var n=-1,e=this,o=e.length,i=[];++n<o;)n in e&&(t?r.call(t,e[n],n,e):r(e[n],n,e))&&i.push(e[n]);return i},reduce:function(r,t){var n,e=-1,o=this,i=o.length;if(arguments.length<2){for(;++e<i;)if(e in o){n=o[e];break}}else n=t;for(;++e<i;)e in o&&(n=r(n,o[e],e,o));return n},some:function(r,t){for(var n=-1,e=this,o=e.length;++n<o;)if(n in e&&(t?r.call(t,e[n],n,e):r(e[n],n,e)))return!0;return!1},every:function(r,t){for(var n=-1,e=this,o=e.length;++n<o;)if(n in e&&!(t?r.call(t,e[n],n,e):r(e[n],n,e)))return!1;return!0}};for(var e in n)r[e]||(r[e]=n[e]);Array.isArray||(Array.isArray=function(r){return"[object Array]"===t.call(r)})}(),Date.now||(Date.now=function(){return(new Date).getTime()}),function(){var r=Array.prototype.slice;Function.prototype.bind||(Function.prototype.bind=function(t){var n=this,e=r.call(arguments,1);return function(){return n.apply(t,e.concat(r.call(arguments)))}})}(),function(r){if(!window.JSON){var t,n=Object.prototype.toString,e=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,o={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};window.JSON={stringify:t=function(i){if(null===i)return"null";if("undefined"==typeof i)return r;var u,f,a;switch(n.call(i)){case"[object String]":return e.lastIndex=0,'"'+(e.test(i)?i.replace(e,function(r){var t=o[r];return"string"==typeof t?t:"\\u"+("0000"+r.charCodeAt(0).toString(16)).slice(-4)}):i)+'"';case"[object Number]":case"[object Boolean]":return""+i;case"[object Array]":u="[",f=0;for(var c=i.length;c>f;)a=t(i[f]),u+=(f++?",":"")+("undefined"==typeof a?"null":a);return u+"]";case"[object Object]":if("[object Function]"===n.call(i.toJSON))return t(i.toJSON());u="{",f=0;for(var l in i)i.hasOwnProperty(l)&&(a=t(i[l]),"undefined"!=typeof a&&(u+=(f++?",":"")+'"'+l+'":'+a));return u+"}";default:return r}},parse:function(r){return Function("return "+r)()}}}}(),Object.keys||(Object.keys=function(r){var t=[];for(var n in r)r.hasOwnProperty(n)&&t.push(n);return t}),String.prototype.trim||(String.prototype.trim=function(){for(var r=this.replace(/^\s\s*/,""),t=/\s/,n=r.length;t.test(r.charAt(--n)););return r.slice(0,n+1)});


/*share*/
!function(t){function e(i){if(n[i])return n[i].exports;var M=n[i]={exports:{},id:i,loaded:!1};return t[i].call(M.exports,M,M.exports,e),M.loaded=!0,M.exports}var n={};return e.m=t,e.c=n,e.p="https://yastatic.net/share2/v-1.7.0/",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}var M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},u=n(109),o=i(u),r=n(3),L=n(29),j=i(L),a=n(4),c=i(a),s=n(115),N=i(s),g=n(113),y=i(g),D=n(112),l=i(D),I=(0,r.loadPlugins)(),p=(0,r.getFrameUrl)();Object.keys(I).forEach(function(t){return I[t].config.shareUrl+="&utm_source=share2"});var d=new j["default"](window,"ya-share2"),A=new c["default"](window.document),z=new N["default"](window,o["default"].metrika.id),S=o["default"].defaults,T=(0,y["default"])({defaults:S,plugins:I,frameUrl:p,metrika:z,messenger:d});(0,l["default"])(window,function(){T(".ya-share2",{reinit:!1})}),z.inject(A),window.Ya=window.Ya||{},window.Ya.share2=function(t,e){if("object"===("undefined"==typeof t?"undefined":M(t))&&1===t.nodeType)return T(t,e)[0];if("string"==typeof t)return 0===t.indexOf("#")&&(console.log("DEPRECATION: use element id instead of query selector for initialization"),t=t.slice(1)),T("#"+t,e)[0];throw new TypeError("Neither element nor element id is provided")}},function(t,e){"use strict";e.__esModule=!0;var n={closest:function(t,e){do if(n.hasClass(t,e))return t;while(t=t.parentNode)},hasClass:function(t,e){var i=n.getClassList(t);return i&&-1!==i.indexOf(e)},toArray:function(t){for(var e=[],n=t.length,i=0;n>i;i+=1)e.push(t[i]);return e},on:function(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},off:function(t,e,n){t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},getTarget:function(t){return t.target||t.srcElement},preventDefault:function(t){t.preventDefault?t.preventDefault():t.returnValue=!1},getDataset:function(t){if(t.dataset)return t.dataset;for(var e={},n=t.attributes,i=0,M=n.length;M>i;i+=1){var u=n[i].nodeName,o=n[i].nodeValue;if(0===u.indexOf("data-")){var r=u.replace(/^data-/,"").replace(/-([a-z])/g,function(t,e){return e.toUpperCase()});e[r]=o}}return e},getClassList:function(t){return t.classList?n.toArray(t.classList):t.className?t.className.split(" "):void 0},getTextContent:function(t){return"textContent"in t?t.textContent:t.innerText},setTextContent:function(t,e){"textContent"in t?t.textContent=e:t.innerText=e},remove:function(t){return t.parentNode.removeChild(t)}};e["default"]=n},function(t,e){"use strict";var n=Object.prototype.hasOwnProperty,i=Object.prototype.toString,M=function(t){return"function"==typeof Array.isArray?Array.isArray(t):"[object Array]"===i.call(t)},u=function(t){if(!t||"[object Object]"!==i.call(t))return!1;var e=n.call(t,"constructor"),M=t.constructor&&t.constructor.prototype&&n.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!e&&!M)return!1;var u;for(u in t);return"undefined"==typeof u||n.call(t,u)};t.exports=function o(){var t,e,n,i,r,L,j=arguments[0],a=1,c=arguments.length,s=!1;for("boolean"==typeof j?(s=j,j=arguments[1]||{},a=2):("object"!=typeof j&&"function"!=typeof j||null==j)&&(j={});c>a;++a)if(t=arguments[a],null!=t)for(e in t)n=j[e],i=t[e],j!==i&&(s&&i&&(u(i)||(r=M(i)))?(r?(r=!1,L=n&&M(n)?n:[]):L=n&&u(n)?n:{},j[e]=o(s,L,i)):"undefined"!=typeof i&&(j[e]=i));return j}},function(t,e,n){"use strict";function i(){var t=n(102);return t.keys().reduce(function(e,n){var i=n.match(/^\.\/(\w+)\.js/);return i&&(e[i[1]]=t(n)["default"]),e},{})}function M(){return n(31)}function u(t){var e=n(103),i=n(104),M=n(78);return M+Object.keys(t).map(function(n){return"\n.ya-share2__item_service_"+n+" .ya-share2__badge\n{\n    background-color: "+t[n].color+";\n}\n\n.ya-share2__container_size_s .ya-share2__item_service_"+n+" .ya-share2__icon\n{\n    background-image: url("+e("./"+n+"18.png")+");\n    background-image: url("+i("./"+n+".svg")+");\n}\n\n.ya-share2__container_size_m .ya-share2__item_service_"+n+" .ya-share2__icon\n{\n    background-image: url("+e("./"+n+"24.png")+");\n    background-image: url("+i("./"+n+".svg")+");\n}\n"}).join("")}e.__esModule=!0,e.loadPlugins=i,e.getFrameUrl=M,e.getCss=u},function(t,e){"use strict";function n(t){return t.getElementsByTagName("head")[0]||t.body}e.__esModule=!0;var i=function(t){this._document=t};i.prototype.injectCss=function(t){var e=n(this._document),i=this._document.createElement("style");i.type="text/css";try{i.innerHTML=t}catch(M){i.styleSheet.cssText=t}e.appendChild(i)},i.prototype.injectJs=function(t){var e=n(this._document),i=this._document.createElement("script");return i.src=t,i.defer=!0,e.appendChild(i),i},i.prototype.injectJsInNonBlockingManner=function(t){var e=t.map(function(t){return"\n        var js = document.createElement('script');\n        js.src = '"+t+"';\n        document.body.appendChild(js);\n    "}).join("");this._document.open(),this._document.write('<body onload="'+e+'">'),this._document.close()},e["default"]=i},function(t,e){"use strict";function n(t){return Array.isArray(t)?t:Array.from(t)}e.__esModule=!0;var i=function(){};i.getParams=function(t){var e=t.search.substring(1).split("&");return e.reduce(function(t,e){var i=e.split("="),M=n(i),u=M[0],o=M.slice(1);return t[u]=decodeURIComponent(o.join("=")),t},{})},i.applyTemplate=function(t,e){return t.replace(/{(\w+)}/g,function(t,n){return void 0!==e[n]?encodeURIComponent(e[n]):""})},i.serializeParams=function(t){return Object.keys(t).map(function(e){return e+"="+encodeURIComponent(t[e])}).join("&")},e["default"]=i},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://www.blogger.com/blog-this.g?t={description}&u={url}&n={title}"},popupDimensions:[800,320],i18n:{az:"Blogger",be:"Blogger",en:"Blogger",hy:"Blogger",ka:"Blogger",kk:"Blogger",ro:"Blogger",ru:"Blogger",tr:"Blogger",tt:"Blogger",uk:"Blogger"},color:"#fb8f3d"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://www.delicious.com/save?v=5&noui&jump=close&url={url}&title={title}"},popupDimensions:[800,520],i18n:{az:"Delicious",be:"Delicious",en:"Delicious",hy:"Delicious",ka:"Delicious",kk:"Delicious",ro:"Delicious",ru:"Delicious",tr:"Delicious",tt:"Delicious",uk:"Delicious"},color:"#31a9ff"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://digg.com/submit?url={url}&title={title}&bodytext={description}"},popupDimensions:[800,520],i18n:{az:"Digg",be:"Digg",en:"Digg",hy:"Digg",ka:"Digg",kk:"Digg",ro:"Digg",ru:"Digg",tr:"Digg",tt:"Digg",uk:"Digg"},color:"#000"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://www.evernote.com/clip.action?title={title}&body={description}"},popupDimensions:[800,520],i18n:{az:"Evernote",be:"Evernote",en:"Evernote",hy:"Evernote",ka:"Evernote",kk:"Evernote",ro:"Evernote",ru:"Evernote",tr:"Evernote",tt:"Evernote",uk:"Evernote"},color:"#24d666"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://www.facebook.com/sharer.php?src=sp&u={url}",countUrl:"https://api.facebook.com/method/fql.query?query=select%20%20like_count%2C%20total_count%2C%20share_count%2C%20click_count%20from%20link_stat%20where%20url=%22{url}%22&format=json&callback={callback}",countCallback:function(t){return parseInt((t[0]||t).total_count,10)}},popupDimensions:[800,520],i18n:{az:"Facebook",be:"Facebook",en:"Facebook",hy:"Facebook",ka:"Facebook",kk:"Facebook",ro:"Facebook",ru:"Facebook",tr:"Facebook",tt:"Facebook",uk:"Facebook"},color:"#3c5a98"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://plus.google.com/share?url={url}",countUrl:"https://share.yandex.net/counter/gpp/?callback={callback}&url={url}",countCallback:function(t){return parseInt(t.replace(/\s+/,""),10)}},popupDimensions:[560,370],i18n:{az:"Google+",be:"Google+",en:"Google+",hy:"Google+",ka:"Google+",kk:"Google+",ro:"Google+",ru:"Google+",tr:"Google+",tt:"Google+",uk:"Google+"},color:"#db4437"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}&summary={description}",countUrl:"https://www.linkedin.com/countserv/count/share?url={url}&callback={callback}",countCallback:function(t){return t.count}},popupDimensions:[800,520],i18n:{az:"LinkedIn",be:"LinkedIn",en:"LinkedIn",hy:"LinkedIn",ka:"LinkedIn",kk:"LinkedIn",ro:"LinkedIn",ru:"LinkedIn",tr:"LinkedIn",tt:"LinkedIn",uk:"LinkedIn"},color:"#0083be"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://www.livejournal.com/update.bml?subject={title}&event={url}%0A{description}"},popupDimensions:[800,520],i18n:{az:"LiveJournal",be:"LiveJournal",en:"LiveJournal",hy:"LiveJournal",ka:"LiveJournal",kk:"LiveJournal",ro:"LiveJournal",ru:"LiveJournal",tr:"LiveJournal",tt:"LiveJournal",uk:"LiveJournal"},color:"#0d425a"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://connect.mail.ru/share?url={url}&title={title}&description={description}",countUrl:"https://connect.mail.ru/share_count?func={callback}&callback=1&url_list={url}",countCallback:function(t){var e=Object.keys(t)[0];return e?parseInt(t[e].shares,10):0}},popupDimensions:[560,400],i18n:{az:"Moy Mir",be:"Мой Мир",en:"Moi Mir",hy:"Moi Mir",ka:"Moi Mir",kk:"Мой Мир",ro:"Moi Mir",ru:"Мой Мир",tr:"Moi Mir",tt:"Мой Мир",uk:"Мой Мир"},color:"#4776a6"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl={url}",countUrl:"https://connect.ok.ru/dk?st.cmd=extLike&uid=odklocs0&ref={url}",countCallback:function(t){return parseInt(t||0,10)},countCallbackMount:function(t,e){t.ODKL={updateCount:function(t,n){e(n)}}}},popupDimensions:[800,520],i18n:{az:"Odnoklassniki",be:"Одноклассники",en:"Odnoklassniki",hy:"Odnoklassniki",ka:"Odnoklasniki",kk:"Одноклассники",ro:"Odnoklassniki",ru:"Одноклассники",tr:"Odnoklasniki",tt:"Одноклассники",uk:"Однокласники"},color:"#ff9f4d"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://pinterest.com/pin/create/button/?url={url}&media={image}&description={title}",countUrl:"https://api.pinterest.com/v1/urls/count.json?callback={callback}&url={url}",countCallback:function(t){return parseInt(t.count||0,10)}},popupDimensions:[800,520],i18n:{az:"Pinterest",be:"Pinterest",en:"Pinterest",hy:"Pinterest",ka:"Pinterest",kk:"Pinterest",ro:"Pinterest",ru:"Pinterest",tr:"Pinterest",tt:"Pinterest",uk:"Pinterest"},color:"#c20724"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://getpocket.com/save?url={url}&title={title}"},popupDimensions:[800,520],i18n:{az:"Pocket",be:"Pocket",en:"Pocket",hy:"Pocket",ka:"Pocket",kk:"Pocket",ro:"Pocket",ru:"Pocket",tr:"Pocket",tt:"Pocket",uk:"Pocket"},color:"#ee4056"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&pics={image}"},popupDimensions:[800,520],i18n:{az:"Qzone",be:"Qzone",en:"Qzone",hy:"Qzone",ka:"Qzone",kk:"Qzone",ro:"Qzone",ru:"Qzone",tr:"Qzone",tt:"Qzone",uk:"Qzone"},color:"#f5b53c"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://www.reddit.com/submit?url={url}&title={title}"},popupDimensions:[800,520],i18n:{az:"reddit",be:"reddit",en:"reddit",hy:"reddit",ka:"reddit",kk:"reddit",ro:"reddit",ru:"reddit",tr:"reddit",tt:"reddit",uk:"reddit"},color:"#ff4500"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"http://widget.renren.com/dialog/share?resourceUrl={url}&srcUrl={url}&title={title}&pic={image}&description={description}"},popupDimensions:[800,520],i18n:{az:"Renren",be:"Renren",en:"Renren",hy:"Renren",ka:"Renren",kk:"Renren",ro:"Renren",ru:"Renren",tr:"Renren",tt:"Renren",uk:"Renren"},color:"#1760a7"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"http://service.weibo.com/share/share.php?url={url}&type=3&pic={image}&title={title}"},popupDimensions:[800,520],i18n:{az:"Sina Weibo",be:"Sina Weibo",en:"Sina Weibo",hy:"Sina Weibo",ka:"Sina Weibo",kk:"Sina Weibo",ro:"Sina Weibo",ru:"Sina Weibo",tr:"Sina Weibo",tt:"Sina Weibo",uk:"Sina Weibo"},color:"#c53220"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://surfingbird.ru/share?url={url}&title={title}&desc={description}"},popupDimensions:[500,170],i18n:{az:"Surfingbird",be:"Surfingbird",en:"Surfingbird",hy:"Surfingbird",ka:"Surfingbird",kk:"Surfingbird",ro:"Surfingbird",ru:"Surfingbird",tr:"Surfingbird",tt:"Surfingbird",uk:"Surfingbird"},color:"#30baff"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"http://share.v.t.qq.com/index.php?c=share&a=index&url={url}&title={title}&pic={image}"},popupDimensions:[800,520],i18n:{az:"Tencent Weibo",be:"Tencent Weibo",en:"Tencent Weibo",hy:"Tencent Weibo",ka:"Tencent Weibo",kk:"Tencent Weibo",ro:"Tencent Weibo",ru:"Tencent Weibo",tr:"Tencent Weibo",tt:"Tencent Weibo",uk:"Tencent Weibo"},color:"#53a9d7"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://www.tumblr.com/share/link?url={url}&description={description}"},popupDimensions:[800,520],i18n:{az:"Tumblr",be:"Tumblr",en:"Tumblr",hy:"Tumblr",ka:"Tumblr",kk:"Tumblr",ro:"Tumblr",ru:"Tumblr",tr:"Tumblr",tt:"Tumblr",uk:"Tumblr"},color:"#547093"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"https://twitter.com/intent/tweet?text={title}&url={url}"},popupDimensions:[550,420],i18n:{az:"Twitter",be:"Twitter",en:"Twitter",hy:"Twitter",ka:"Twitter",kk:"Twitter",ro:"Twitter",ru:"Twitter",tr:"Twitter",tt:"Twitter",uk:"Twitter"},color:"#00aced"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"viber://forward?text={title}%20{url}"},i18n:{az:"Viber",be:"Viber",en:"Viber",hy:"Viber",ka:"Viber",kk:"Viber",ro:"Viber",ru:"Viber",tr:"Viber",tt:"Viber",uk:"Viber"},color:"#7b519d"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"http://vk.com/share.php?url={url}&title={title}&description={description}&image={image}",countUrl:"https://vk.com/share.php?act=count&index=0&url={url}",countCallback:function(t){return parseInt(t,10)},countCallbackMount:function(t,e){t.VK={Share:{count:function(t,n){e(n)}}}}},popupDimensions:[550,420],i18n:{az:"ВКонтакте",be:"ВКонтакте",en:"VKontakte",hy:"VKontakte",ka:"VKontakte",kk:"ВКонтакте",ro:"VKontakte",ru:"ВКонтакте",tr:"VKontakte",tt:"ВКонтакте",uk:"ВКонтакті"},color:"#48729e"}},function(t,e){"use strict";e.__esModule=!0,e["default"]={config:{shareUrl:"whatsapp://send?text={title}%20{url}"},i18n:{az:"WhatsApp",be:"WhatsApp",en:"WhatsApp",hy:"WhatsApp",ka:"WhatsApp",kk:"WhatsApp",ro:"WhatsApp",ru:"WhatsApp",tr:"WhatsApp",tt:"WhatsApp",uk:"WhatsApp"},color:"#65bc54"}},function(t,e,n){(function(t){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function M(t){try{return JSON.parse(t)}catch(e){return{}}}function u(t){return t.parent!=t&&t.parent||t.opener||t.top}e.__esModule=!0;var o=n(1),r=i(o),L=function(e,n){this._window=e,this._opener=u(e),this._namespace=n,this._subscriptions=new t};L.prototype.subscribe=function(t,e){var n=this,i=function(t){var i=M(t.data);i.namespace===n._namespace&&e(i.payload)},u=this._subscriptions.get(t)||[];u.push(i),this._subscriptions.set(t,u),r["default"].on(this._window,"message",i)},L.prototype.unsubscribe=function(t){var e=this,n=this._subscriptions.get(t)||[];n.forEach(function(t){return r["default"].off(e._window,"message",t)}),this._subscriptions["delete"](t)},L.prototype.publish=function(t){this._opener.postMessage(JSON.stringify({namespace:this._namespace,payload:t}),"*")},e["default"]=L}).call(e,n(30))},function(t,e){"use strict";function n(){var t={};return function(e){var n=e.valueOf(t);return void 0!==n&&n!==e&&n.identity===t?n:i(e,t)}}function i(t,e){var n={identity:e},i=t.valueOf,M=function(M){return M!==e||this!==t?i.apply(this,arguments):n};return t.valueOf=M,n}function M(t){if(t!==Object(t))throw TypeError("value is not a non-null object");return t}t.exports="WeakMap"in window?window.WeakMap:function(){var t=n();return{get:function(e,n){var i=t(M(e));return i.hasOwnProperty("value")?i.value:n},set:function(e,n){t(M(e)).value=n},has:function(e){return"value"in t(e)},"delete":function(e){return delete t(M(e)).value}}}},function(t,e,n){t.exports=n.p+"frame.html"},function(t,e,n){t.exports=n.p+"png/24f2f276247735e54e8617c69496122c.png"},function(t,e,n){t.exports=n.p+"png/3fc94a0b12e9f11976f37573e8fc78aa.png"},function(t,e,n){t.exports=n.p+"png/b938ffadbb23975b28100f83cc685aac.png"},function(t,e,n){t.exports=n.p+"png/8800ca46ef9f9c55d2d2d9c3df6f7f54.png"},function(t,e,n){t.exports=n.p+"png/1d88b92d994ad9265c99bba5030e181b.png"},function(t,e,n){t.exports=n.p+"png/0540efe7443a2b2abcd9fac5804de395.png"},function(t,e,n){t.exports=n.p+"png/5cbb7650a6fda1158c9bac3d78df1002.png"},function(t,e,n){t.exports=n.p+"png/db262b82235a6de4b2881e8835792c43.png"},function(t,e,n){t.exports=n.p+"png/30c4d6b08c239d48b38fe2d0cea3ca21.png"},function(t,e,n){t.exports=n.p+"png/c216970ad69063babd2b43c2368962ca.png"},function(t,e,n){t.exports=n.p+"png/92788cd540f005bce3fc9579ec2837fc.png"},function(t,e,n){t.exports=n.p+"png/445ae1dcd3664e59be3adf55163f3718.png"},function(t,e,n){t.exports=n.p+"png/c07d18a823692fc733220fcd9f7f83a2.png"},function(t,e,n){t.exports=n.p+"png/e879d1a68d5299ee1ec76617ab6fbfa8.png"},function(t,e,n){t.exports=n.p+"png/580434da00baf023dcf50bfb65e61954.png"},function(t,e,n){t.exports=n.p+"png/7d296b28257676f6324897630dc3a65a.png"},function(t,e,n){t.exports=n.p+"png/96ee71db8bb51b4d458f6661a6e5b83a.png"},function(t,e,n){t.exports=n.p+"png/b08903c06545a3906b7ce2e80a07c76c.png"},function(t,e,n){t.exports=n.p+"png/0d06efa8cc78dddfe278f84e9c35bccb.png"},function(t,e,n){t.exports=n.p+"png/16ef1724bf677df6188f656cf6cfaf52.png"},function(t,e,n){t.exports=n.p+"png/53f68718909a44a96ec1fdee2470f7af.png"},function(t,e,n){t.exports=n.p+"png/e3c999231509ab3ced3a5a1255fb1b58.png"},function(t,e,n){t.exports=n.p+"png/970f790464cc2901e8ef245a0fddb0d4.png"},function(t,e,n){t.exports=n.p+"png/73b45687c10678654bc796057223c4ed.png"},function(t,e,n){t.exports=n.p+"png/6acd05dbcc306d9731b9153f6bb70a2d.png"},function(t,e,n){t.exports=n.p+"png/1eaead09a9872257c47d910ea260b993.png"},function(t,e,n){t.exports=n.p+"png/98f899aff35830d7a87be1ec9c17bbc7.png"},function(t,e,n){t.exports=n.p+"png/0cd39c44acdae373e582a43a49dcdb4f.png"},function(t,e,n){t.exports=n.p+"png/5497a9be39c9b2bb65c0f9ae0f008166.png"},function(t,e,n){t.exports=n.p+"png/f12cde21d116bc2ef3a1d30b6257fd30.png"},function(t,e,n){t.exports=n.p+"png/a49cdd209f506cbd43aac5db45a2be22.png"},function(t,e,n){t.exports=n.p+"png/579042c14cb45c5df0e2d1f4f0af19ac.png"},function(t,e,n){t.exports=n.p+"png/20819a81a1110e378f058a25836b2eb5.png"},function(t,e,n){t.exports=n.p+"png/cb8507ee97f329903e8956cbd0b67575.png"},function(t,e,n){t.exports=n.p+"png/727358c1564b580808f162583b6467ca.png"},function(t,e,n){t.exports=n.p+"png/a7a7e8556f60e5177471eac388d76be9.png"},function(t,e,n){t.exports=n.p+"png/b54119105dec81f7fc080d780bc12509.png"},function(t,e,n){t.exports=n.p+"png/749b2e181f5c308834d9200133bfde9c.png"},function(t,e,n){t.exports=n.p+"png/828291e44a3fcc8018897ffb4047adfc.png"},function(t,e,n){t.exports=n.p+"png/217f88f50a8815f863ef0ca39ce6a23f.png"},function(t,e,n){t.exports=n.p+"png/1d45baf268568c3c0bb4da71863439ca.png"},function(t,e,n){t.exports=n.p+"png/65a6f96cf7b516df9b2ea7f14b8e904e.png"},function(t,e,n){t.exports=n.p+"png/5f02600800ea3d88fcdbe7eaf11b5661.png"},function(t,e,n){t.exports=n.p+"png/5f83bbc58d018ac59f28f23a270919fb.png"},function(t,e,n){t.exports=n.p+"png/47b9ef049bd7ca143c211afe02fbb799.png"},function(t,e,n){t.exports=n.p+"png/de57edc79e5004d9b86aaf2f482f4e99.png"},function(t,e){t.exports='.ya-share2,\n.ya-share2 * {\n  line-height: normal;\n}\n.ya-share2 :link:hover,\n.ya-share2 :visited:hover {\n  color: #000 !important;\n}\n.ya-share2 input {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n  line-height: normal;\n}\n.ya-share2__container_size_m {\n  font-size: 13px;\n}\n.ya-share2__container_size_m .ya-share2__icon {\n  height: 24px;\n  width: 24px;\n  background-size: 24px 24px;\n}\n.ya-share2__container_size_m .ya-share2__title {\n  line-height: 24px;\n}\n.ya-share2__container_size_m .ya-share2__item {\n  margin: 5px 4px 5px 0;\n}\n.ya-share2__container_size_m .ya-share2__counter {\n  font-size: 12px;\n  padding: 5px 8px 0 8px;\n}\n.ya-share2__container_size_m .ya-share2__counter:before {\n  margin-left: -8px;\n}\n.ya-share2__container_size_m .ya-share2__icon_more:before {\n  line-height: 13px;\n}\n.ya-share2__container_size_m .ya-share2__popup {\n  top: 28px;\n  padding: 5px 10px;\n}\n.ya-share2__container_size_m .ya-share2__input_copy {\n  width: 140px;\n}\n.ya-share2__container_size_m .ya-share2__badge + .ya-share2__title {\n  margin-left: 10px;\n}\n.ya-share2__container_size_s {\n  font-size: 12px;\n}\n.ya-share2__container_size_s .ya-share2__icon {\n  height: 18px;\n  width: 18px;\n  background-size: 18px 18px;\n}\n.ya-share2__container_size_s .ya-share2__title {\n  line-height: 18px;\n}\n.ya-share2__container_size_s .ya-share2__item {\n  margin: 3px 4px 3px 0;\n}\n.ya-share2__container_size_s .ya-share2__counter {\n  font-size: 10px;\n  padding: 3px 6px 0 6px;\n}\n.ya-share2__container_size_s .ya-share2__counter:before {\n  margin-left: -6px;\n}\n.ya-share2__container_size_s .ya-share2__icon_more:before {\n  line-height: 10px;\n}\n.ya-share2__container_size_s .ya-share2__popup {\n  top: 22px;\n  padding: 3px 6px;\n}\n.ya-share2__container_size_s .ya-share2__input_copy {\n  width: 110px;\n}\n.ya-share2__container_size_s .ya-share2__badge + .ya-share2__title {\n  margin-left: 6px;\n}\n.ya-share2__list_direction_horizontal > .ya-share2__item {\n  display: inline-block;\n  vertical-align: top;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ya-share2__list_direction_horizontal > .ya-share2__item > .ya-share2__link > .ya-share2__title {\n  display: none;\n}\n.ya-share2__list_direction_vertical > .ya-share2__item {\n  display: block;\n  margin-right: 0;\n}\n.ya-share2__list_direction_vertical > .ya-share2__item > .ya-share2__link > .ya-share2__badge > .ya-share2__counter {\n  display: none;\n}\n.ya-share2__list {\n  display: inline-block;\n  vertical-align: top;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n.ya-share2__item {\n  font-family: Arial, sans;\n  display: inline-block;\n}\n.ya-share2__item:hover {\n  opacity: 0.9;\n}\n.ya-share2__link {\n  display: inline-block;\n  vertical-align: top;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.ya-share2__badge {\n  display: inline-block;\n  vertical-align: top;\n  border-radius: 2px;\n  color: #fff;\n  overflow: hidden;\n  position: relative;\n}\n.ya-share2__icon {\n  display: inline-block;\n  vertical-align: top;\n}\n.ya-share2__icon:active {\n  box-shadow: inset 0 2px 0 0 rgba(0,0,0,0.1);\n}\n.ya-share2__counter {\n  display: none;\n}\n.ya-share2__counter:before {\n  content: "";\n  position: absolute;\n  width: 1px;\n  top: 2px;\n  bottom: 2px;\n  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAAXRSTlMz/za5cAAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=") 0 0 repeat-y;\n}\n.ya-share2__counter_visible {\n  display: inline-block;\n}\n.ya-share2__title {\n  display: inline-block;\n  color: #000;\n  vertical-align: bottom;\n}\n.ya-share2__title:hover {\n  color: #f00;\n}\n.ya-share2__item_more {\n  position: relative;\n}\n.ya-share2__item_more:hover {\n  opacity: 1;\n}\n.ya-share2__icon_more {\n  background-color: #fff;\n  border: 1px solid #cdcdcd;\n  box-sizing: border-box;\n  position: relative;\n}\n.ya-share2__icon_more:before {\n  content: \'…\';\n  color: #a0a0a0;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  text-align: center;\n}\n.ya-share2__popup {\n  position: absolute;\n  top: 0;\n  right: 0;\n  box-shadow: 0 10px 20px -5px rgba(0,0,0,0.4);\n  display: none;\n  border: 1px solid #e6e6e6;\n  z-index: 9999;\n  background-color: #fff;\n}\n.ya-share2__popup_visible {\n  display: block;\n}\n.ya-share2__popup_clipboard .ya-share2__input_copy,\n.ya-share2__link_copy {\n  display: none;\n}\n.ya-share2__popup_clipboard .ya-share2__link_copy {\n  display: inline-block;\n}\n'},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIyLjg4MyAxNy4xODdBNS44MTMgNS44MTMgMCAwIDEgMTcuMDcgMjNoLTYuMjU4QTUuODEyIDUuODEyIDAgMCAxIDUgMTcuMTg3di02LjM3NEE1LjgxMiA1LjgxMiAwIDAgMSAxMC44MTIgNWgyLjkzNGE1LjgxMyA1LjgxMyAwIDAgMSA1LjgxMiA1LjgxM2wuMDAyLjAxMmMuMDQyLjYwMy41NDUgMS4wOCAxLjE2IDEuMDhoMWMuNjQzIDAgMS4xNjQuNTIgMS4xNjQgMS4xNnY0LjEyMnptLTEyLjIxNS01LjI0aDMuMjkyYTEuMTE4IDEuMTE4IDAgMCAwIDAtMi4yMzRoLTMuMjkyYTEuMTE4IDEuMTE4IDAgMCAwIDAgMi4yMzV6bTYuNiA0LjMxSDEwLjY2YTEuMDU3IDEuMDU3IDAgMCAwIDAgMi4xMTRoNi42MDhhMS4wNTcgMS4wNTcgMCAwIDAgMC0yLjExNHoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNSAxNGg5djlINXpNMTQgNWg5djloLTguOTgzTDE0IDV6Ii8+PC9nPjwvc3ZnPgo="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYuNzUgMTIuMjl2My43aDEuMDhzLjIwMi4wMDUuMjAyLS4yNXYtMy43aC0xLjA4cy0uMjAzLS4wMDUtLjIwMy4yNXptOS4wMzYgMy40NXYtMy43aC0xLjA4cy0uMjA0LS4wMDUtLjIwNC4yNXYzLjdoMS4wOHMuMjA0LjAwNS4yMDQtLjI1em0tNS45NyAxLjQ4M2MwIC4yNTYtLjIwMi4yNS0uMjAyLjI1SDVWMTAuODFjMC0uMjU3LjIwMi0uMjUuMjAyLS4yNWgyLjgzVjguMjVjMC0uMjU2LjItLjI1LjItLjI1aDEuNTg1djkuMjIzem0yLjMyNCAwYzAgLjI1Ni0uMjAzLjI1LS4yMDMuMjVoLTEuNTh2LTYuNjY1YzAtLjI1NS4yLS4yNS4yLS4yNWgxLjU4NHY2LjY2NnptMC03Ljk5YzAgLjI1NS0uMjAzLjI1LS4yMDMuMjVoLTEuNTgyVjguMjVjMC0uMjU2LjIwMi0uMjUuMjAyLS4yNWgxLjU4NHYxLjIzM3ptNS40MyAxMC4zNjJjMCAuMjU2LS4yMDMuMjUtLjIwMy4yNWgtNC42MTN2LTEuMjMzYzAtLjI1Ni4yMDItLjI1LjIwMi0uMjVoMi44M3YtLjg5aC0zLjAzMlYxMC44MWMwLS4yNTcuMjAyLS4yNS4yMDItLjI1bDQuNjE0LjAwM3Y5LjAzMnptNS40MyAwYzAgLjI1Ni0uMjAzLjI1LS4yMDMuMjVoLTQuNjE0di0xLjIzM2MwLS4yNTYuMjAyLS4yNS4yMDItLjI1aDIuODN2LS44OWgtMy4wMzJWMTAuODFjMC0uMjU3LjIwMi0uMjUuMjAyLS4yNWw0LjYxNS4wMDR2OS4wM3ptLTEuNzg0LTMuODU2di0zLjdoLTEuMDhzLS4yMDQtLjAwNS0uMjA0LjI1djMuN2gxLjA4cy4yMDQuMDA1LjIwNC0uMjV6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4K"},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTguNDM3IDguNDk3aDEuNzA2Yy4wOSAwIC4xOC0uMDkuMTgtLjE4di0xLjg0YzAtLjMxNC4wOS0uNjMuMTgtLjg1M2wuMDQ0LS4xMzUtMy4zMjMgMy4yNzcuMTgtLjA5Yy4yNy0uMTM1LjYzLS4xOCAxLjAzMy0uMTh6bTEzLjExLS4zMTRjLS4xMzQtLjcxOC0uNTM4LTEuMDMzLS45NDItMS4xNjctLjQwNS0uMTM1LS44MS0uMzE1LTEuODg2LS40NWEyNC40OSAyNC40OSAwIDAgMC0yLjM4LS4xMzRjLS4xOC0uNDk0LS40NS0xLjAzMy0xLjQ4My0xLjMwMi0uNzE4LS4xOC0yLjAyLS4xMzUtMi40MjQtLjA5LS42My4wOS0uODUzLjM2LTEuMDMzLjU0LS4xOC4xOC0uMzE0LjY3Mi0uMzE0Ljk4N3YxLjc1MWMwIC41NC0uMzYuOTQzLS45ODguOTQzSDguNTdjLS4zNTggMC0uNjI3LjA0Ni0uODUyLjEzNS0uMTguMTM1LS4zNi4zMTUtLjQ1LjQ1LS4yMjMuMzE0LS4yNjguNjczLS4yNjggMS4wNzcgMCAwIDAgLjMxNC4wOS44OTguMDQ1LjQ1LjU0IDMuNDEyLjk4OCA0LjQuMTguNDA0LjMxNC41NC42NzMuNzIuODEuMzU4IDIuNjUuNzE3IDMuNTQ4Ljg1Mi44NTMuMDkgMS40MzcuMzYgMS43NS0uMzE1IDAgMCAuMDQ2LS4xOC4xMzYtLjQwNC4yNy0uODUzLjMxNC0xLjYxNi4zMTQtMi4xNTUgMC0uMDQ1LjA5LS4wNDUuMDkgMCAwIC40MDQtLjA5IDEuNzUuOTQzIDIuMTEuNDA1LjEzNSAxLjI1OC4yNyAyLjExLjM2Ljc2NC4wOSAxLjM0OC40MDQgMS4zNDggMi4zOCAwIDEuMjEyLS4yNyAxLjM5LTEuNTcgMS4zOS0xLjA4IDAtMS40ODMuMDQ2LTEuNDgzLS44NTIgMC0uNjczLjY3NC0uNjMgMS4yMTItLjYzLjIyNSAwIC4wNDUtLjE3OC4wNDUtLjU4MiAwLS40NS4yNy0uNjc0IDAtLjY3NC0xLjc1LS4wNDUtMi43ODQgMC0yLjc4NCAyLjIgMCAyLjAyLjc2NCAyLjM4IDMuMjc4IDIuMzggMS45NzYgMCAyLjY1LS4wNDUgMy40NTctMi41Ni4xOC0uNDkzLjU0LTIuMDIuNzY0LTQuNTM0LjE4LTEuNjYtLjEzNS02LjUxLS4zNi03LjcyM3ptLTMuNDEyIDUuMzQzYy0uMjI0IDAtLjM2IDAtLjU4NC4wNDVoLS4wODhzLS4wNDUgMC0uMDQ1LS4wNDR2LS4wNDVjLjA5LS40NDguMzE0LS45ODcuOTg3LS45ODcuNzIuMDQ1Ljg5OC42NzQuODk4IDEuMTY4di4wNDZjMCAuMDQ1LS4wNDQuMDQ1LS4wNDQuMDQ1LS4wNDUgMC0uMDQ1IDAtLjA0NS0uMDQ0LS4zMTUtLjA5LS42NzQtLjEzNS0xLjA3OC0uMTh6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4K"},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjEgMjN2LTguMjFoMi43NzNsLjQxNS0zLjJIMTUuMVY5LjU0N2MwLS45MjcuMjYtMS41NTggMS41OTYtMS41NThsMS43MDQtLjAwMlY1LjEyNkEyMi43ODcgMjIuNzg3IDAgMCAwIDE1LjkxNyA1QzEzLjQ2IDUgMTEuNzggNi40OTIgMTEuNzggOS4yM3YyLjM2SDl2My4yaDIuNzhWMjNoMy4zMnoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEzLjk4NCAxMi4yMTh2My41NjRzMy40NS0uMDA0IDQuODU3LS4wMDRjLS43NiAyLjMxLTEuOTQ0IDMuNTctNC44NTYgMy41Ny0yLjk0OCAwLTUuMjQ4LTIuMzk1LTUuMjQ4LTUuMzQ4czIuMy01LjM0NyA1LjI0OC01LjM0N2MxLjU1OCAwIDIuNTY1LjU1IDMuNDg4IDEuMzE0Ljc0LS43NC42NzctLjg0NiAyLjU1Ny0yLjYyNUE4Ljk0MiA4Ljk0MiAwIDAgMCAxMy45ODMgNUM5LjAyMiA1IDUgOS4wMyA1IDE0czQuMDIyIDkgOC45ODQgOWM3LjQxNiAwIDkuMjMtNi40NyA4LjYyOC0xMC43ODJoLTguNjI4eiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+Cg=="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNNS4yNzYgMTAuNTczaDMuODM3VjIyLjE0SDUuMjc2ek03LjIxOCA1LjAyYy0xLjMxMyAwLTIuMTcuODY2LTIuMTcgMiAwIDEuMTEuODMgMS45OTggMi4xMiAxLjk5OGguMDI0YzEuMzM3IDAgMi4xNy0uODkgMi4xNy0xLjk5OC0uMDI1LTEuMTM0LS44MzMtMi0yLjE0NC0yek0xOC41MjUgMTAuMzI2Yy0yLjAzNSAwLTIuOTQ2IDEuMTIyLTMuNDU3IDEuOTF2LTEuNjM4aC0zLjgzNWMuMDUgMS4wODUgMCAxMS41NjYgMCAxMS41NjZoMy44MzV2LTYuNDZjMC0uMzQ1LjAyNS0uNjkuMTI3LS45MzguMjc3LS42OS45MDgtMS40MDUgMS45NjgtMS40MDUgMS4zODcgMCAxLjk0MyAxLjA2MiAxLjk0MyAyLjYxNnY2LjE4OGgzLjgzNnYtNi42MzJjMC0zLjU1My0xLjg5My01LjIwNi00LjQxNy01LjIwNnoiLz48L2c+PC9zdmc+Cg=="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjAuNDI0IDE1LjQ4MmMuNDkyIDIuMzc4Ljk3NiA0Ljc1IDEuNDcgNy4xMjcuMDQuMi0uMTY4LjQzMy0uMzc3LjM1LTIuMjgtLjgzNS00LjUwNy0xLjY3OC02Ljc2LTIuNTJhLjcwMy43MDMgMCAwIDEtLjM2LS4yNkw2LjA4NSAxMC4xNjVjLS4wNzUtLjA5Mi0uMDkyLS4yNDItLjA2Ny0uMzYuMzUtMS4zODUuODEtMi40MSAxLjk3LTMuMzk2IDEuMTctLjk4NiAyLjI3LTEuMjc4IDMuNjk4LTEuMzg3LjE3NS0uMDE3LjI1LjAxNy4zNS4xNSAyLjcyIDMuMjcyIDUuNDQyIDYuNTQ0IDguMTU1IDkuODE2YTEgMSAwIDAgMSAuMjM0LjQ5MnoiIGZpbGw9IiNGRkYiLz48cGF0aCBkPSJNNy4zMjggMTAuMDRjLjc3Ni0yLjAyIDIuNTg3LTMuMzggNC4zMTUtMy43MTVsLS4yMS0uMjVhNC43NzMgNC43NzMgMCAwIDAtNC4zMyAzLjY4bC4yMjUuMjg0eiIgZmlsbD0iIzBENDI1QSIvPjxwYXRoIGQ9Ik0xMi4yMjcgNy4wMzVjLTEuOTYuMzY3LTMuNTEzIDEuNzAyLTQuMzMgMy42OGwxLjAxNyAxLjIyOEM5Ljc5OCA5Ljk0IDExLjUgOC41NyAxMy4yMyA4LjIyOGwtMS4wMDMtMS4xOTN6TTE1LjMzMiAxNS44NGwtNC40MTUtNS4zMDhhNi44ODQgNi44ODQgMCAwIDAtMS40MjcgMi4xMDNsNS41IDYuNjI3Yy4zMjYtLjQzNC45NzYtMi42NTQuMzQyLTMuNDIyek0xMS4yMzQgMTAuMjNsNC40NCA1LjM0M2MuNS42MSAyLjc2My4zNjcgMy40NzMtLjIxN2wtNS4zNS02LjQzNWMtLjg5NC4xNzYtMS43ODcuNjM1LTIuNTYzIDEuMzF6TTE5LjQ1NiAxNS45MDdjLS42ODUuNTE4LTIuMTM3LjgyNi0zLjI5OC41OTMuMDg0LjkyNi0uMTA4IDIuMTI4LS42OTIgMy4wODhsMi4xMi44IDEuNzIuNjM1Yy4yNS0uNDI1LjYxLS42ODQgMS4wMjYtLjg2bC0uMzkyLTEuOTAyLS40ODQtMi4zNTN6IiBmaWxsPSIjMEQ0MjVBIi8+PC9nPjwvc3ZnPg=="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjUgMTFhMS41IDEuNSAwIDEgMCAwLTMgMS41IDEuNSAwIDAgMCAwIDN6bTcgMGExLjUgMS41IDAgMSAwIDAtMyAxLjUgMS41IDAgMCAwIDAgM3ptNS4zNjcgNi44NzJsLTIuMDI4LTMuNDA3YS45ODguOTg4IDAgMCAwLTEuMzM4LS4zNDUuOTUuOTUgMCAwIDAtLjM1IDEuMzEybC4yNC40MDVhNy41NDggNy41NDggMCAwIDEtNS4zOTUgMi4yNDUgNy41NSA3LjU1IDAgMCAxLTUuMzktMi4yNGwuMjQyLS40MWEuOTUuOTUgMCAwIDAtLjM1Mi0xLjMxMi45ODguOTg4IDAgMCAwLTEuMzM4LjM0NWwtMi4wMjcgMy40MDdhLjk1Ljk1IDAgMCAwIC4zNTIgMS4zMTIuOTkuOTkgMCAwIDAgMS4zMzctLjM0NWwuNzctMS4yOTJBOS41MjQgOS41MjQgMCAwIDAgMTMuOTk2IDIwYTkuNTIgOS41MiAwIDAgMCA2LjQxLTIuNDU2bC43NyAxLjI5NWEuOTkuOTkgMCAwIDAgMS4zMzcuMzQ1Ljk1Ljk1IDAgMCAwIC4zNTMtMS4zMTN6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4K";
},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTMuNTYzIDE0LjEyNmMyLjU3OCAwIDQuNjY4LTIuMDQgNC42NjgtNC41NTUgMC0yLjUxNS0yLjA5LTQuNTU1LTQuNjY3LTQuNTU1LTIuNTc4IDAtNC42NjcgMi4wNC00LjY2NyA0LjU1NiAwIDIuNTE3IDIuMDkgNC41NTYgNC42NjcgNC41NTZ6bTAtNi43OTZjMS4yNjggMCAyLjI5NyAxLjAwMyAyLjI5NyAyLjI0IDAgMS4yNC0xLjAzIDIuMjQyLTIuMjk3IDIuMjQyLTEuMjY4IDAtMi4yOTYtMS4wMDMtMi4yOTYtMi4yNCAwLTEuMjQgMS4wMjgtMi4yNDIgMi4yOTYtMi4yNDJ6Ii8+PHBhdGggZD0iTTE2Ljk4IDE0LjQ4MmMtMS4zMSAxLjAwOC0zLjQxNyAxLjAwOC0zLjQxNyAxLjAwOHMtMi4xMDYgMC0zLjQxNy0xLjAwOGMtLjk3LS43NDYtMS43LS4zMTctMS45NjMuMi0uNDYuOS4wNiAxLjMzNiAxLjIzIDIuMDcgMS4wMDIuNjI3IDIuMzc2Ljg2MiAzLjI2NC45NWwtLjc0LjcyMmMtMS4wNDUgMS4wMi0yLjA1MiAyLjAwMi0yLjc1IDIuNjg1YTEuMDI3IDEuMDI3IDAgMCAwIDAgMS40NzZsLjEyNS4xMjNhMS4wOSAxLjA5IDAgMCAwIDEuNTEzIDBsMi43NS0yLjY4NSAyLjc1IDIuNjg0YTEuMDkgMS4wOSAwIDAgMCAxLjUxNSAwbC4xMjYtLjEyNGExLjAyNyAxLjAyNyAwIDAgMCAwLTEuNDc3bC0yLjc1LTIuNjg2LS43NDQtLjcyNWMuODg4LS4wOSAyLjI0OC0uMzI2IDMuMjQtLjk0OCAxLjE3Mi0uNzM0IDEuNjktMS4xNyAxLjIzLTIuMDctLjI2Mi0uNTE3LS45OTItLjk0Ni0xLjk2Mi0uMnoiLz48L2c+PC9zdmc+Cg=="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcgMTEuNDZjMCAxLjc3Ny42NzQgMy4zNiAyLjEyIDMuOTQ4LjIzNi4wOTguNDUuMDA0LjUxOC0uMjU4LjA0Ny0uMTguMTYtLjY0LjIxLS44My4wNy0uMjYuMDQzLS4zNS0uMTQ4LS41NzYtLjQxNy0uNDktLjY4NC0xLjEyNy0uNjg0LTIuMDI4IDAtMi42MTIgMS45NTgtNC45NTIgNS4wOTctNC45NTIgMi43OCAwIDQuMzA3IDEuNjk3IDQuMzA3IDMuOTYyIDAgMi45ODItMS4zMiA1LjQ5OC0zLjI4MiA1LjQ5OC0xLjA4MyAwLTEuODkzLS44OTQtMS42MzQtMS45OTIuMzEtMS4zMS45MTQtMi43MjMuOTE0LTMuNjcgMC0uODQ1LS40NTUtMS41NS0xLjM5Ni0xLjU1LTEuMTA3IDAtMS45OTYgMS4xNDMtMS45OTYgMi42NzUgMCAuOTc2LjMzIDEuNjM2LjMzIDEuNjM2cy0xLjEzMyA0Ljc5NS0xLjMzIDUuNjM0Yy0uMzk3IDEuNjczLS4wNiAzLjcyMi0uMDMyIDMuOTI4LjAxNi4xMjQuMTc1LjE1My4yNDYuMDYuMTAyLS4xMzMgMS40Mi0xLjc1OCAxLjg2OC0zLjM4My4xMjgtLjQ2LjcyOC0yLjg0Mi43MjgtMi44NDIuMzYuNjg2IDEuNDEgMS4yODggMi41MyAxLjI4OCAzLjMyNiAwIDUuNTg0LTMuMDMgNS41ODQtNy4wODVDMjAuOTUgNy44NTYgMTguMzUgNSAxNC4zOTggNSA5LjQ4IDUgNyA4LjUyMiA3IDExLjQ2eiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+Cg=="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjYzOCA2QTIuMzczIDIuMzczIDAgMCAxIDIzIDguMzh2Ni41OTZjMCAuMTIyLS4wMS4yNDMtLjAyNy4zNi4wMTguMTc2LjAyNy4zNTQuMDI3LjUzMyAwIDMuNzgtNC4wMyA2Ljg0NC05IDYuODQ0UzUgMTkuNjUgNSAxNS44N2MwLS4xOC4wMS0uMzU4LjAyNy0uNTM0YTIuNDE2IDIuNDE2IDAgMCAxLS4wMjctLjM2VjguMzhBMi4zNzIgMi4zNzIgMCAwIDEgNy4zNjIgNmgxMy4yNzZ6TTEwLjE3IDEwLjk0TDE0IDE0Ljc3bDMuODMtMy44M2ExLjE5NiAxLjE5NiAwIDEgMSAxLjY5IDEuNjlsLTQuNjUgNC42NWExLjE5IDEuMTkgMCAwIDEtLjg1NS4zNDggMS4xOSAxLjE5IDAgMCAxLS44ODYtLjM1bC00LjY1LTQuNjQ3YTEuMTk2IDEuMTk2IDAgMSAxIDEuNjktMS42OXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjAzNyAxNi43N3MtLjExNy4xNjctLjUxNC4zMzdsLS42MjIuMjVjLjIyNSAxLjIyNy40NSAyLjQ1NS42NzMgMy42ODIuMDcuMzE2LjI4MiAxLjEwNS0uMDkzIDEuMTkzLS4xOS4wNDUtLjM0NC0uMDc0LS40NDMtLjEzNmwtLjg2NS0uNWMtMS4wMDMtLjU4LTIuMDA3LTEuMTU4LTMuMDEtMS43MzctLjIzLS4xMzgtLjg3Ny0uNjE2LTEuMjMtLjU1LS4yMy4wNC0uMzc4LjE0Mi0uNTQzLjI0MmwtLjg2Ny41LTIuNjg4IDEuNTYtLjk5NC41N2MtLjEzOC4wNy0uMzM4LjA2Ni0uNDQyLS4wMjctLjA4LS4wNy0uMS0uMjg0LS4wNzItLjQzNmwuMjE1LTEuMTMuNjQ0LTMuMzk3Yy4wNTItLjIyNS4yNjYtMS4xLjE4Ni0xLjI4LS4wNTMtLjEyLS4xOTQtLjIyLS4yOTMtLjNsLS42ODYtLjYzNy0yLjM5NS0yLjIzYy0uMjEzLS4xNzItLjM5LS4zOS0uNi0uNTU4bC0uMjY1LS4yNDNjLS4wNy0uMDg4LS4xODUtLjI2NS0uMS0uNDE1LjE2LS4yOCAxLjA5NS0uMjQ2IDEuNTAyLS4zMTVsMy4wMTctLjM1LjkyLS4xYy4xNjUtLjAyOC4zMzctLjAwNS40NjYtLjA3Mi4yNjgtLjEzOC41NzQtLjkxLjcxNS0xLjIyMmwxLjQ3NC0zLjA1MmMuMTctLjMzNS4zMjMtLjY4LjQ4Ni0xLjAwOC4wODQtLjE2OC4xNS0uMzQ3LjM0My0uNC4xODItLjA1LjI5LjExNy4zNS4yLjIuMjY0LjM2Ni43Ny41MDggMS4wOTMuNDg1IDEuMDcuOTcgMi4xNCAxLjQ1MyAzLjIxLjExNy4yNjguNDA4IDEuMDg1LjYwNyAxLjIxLjMuMTg1Ljk2Ni4xMiAxLjM4LjE5MmwzLjE5Ni4zM2MuNC4wNyAxLjQuMDEgMS41My4zLjA4Ni4xOS0uMDguMzUzLS4xNy40NDItLjMyNS4zMDUtLjY1LjYxLS45NzMuOTE2LS43NDQuNy0xLjQ4NyAxLjQtMi4yMyAyLjEwMi0uMjEuMTg0LS44NjguNzE2LS45MzguOTY1LS4wNDQuMTU3LjAyMi40NjYuMS44MTItLjExIDAtLjQ0LS4wMDgtMS4zMy0uMDMyLS43MS0uMDA4LTIuOTQ0LS4xOTItMy4wNTMtLjItLjMxNC0uMDMtLjYzLS4wNTgtLjk0NC0uMDg2LS4xNTgtLjAyNi0uMzY4LjAxMy0uNDUtLjA4NnYtLjAyMmMxLjk0Mi0xLjMxNCAzLjgzMi0yLjcxOCA1Ljc4NC00LjAyNWwtLjAwNy0uMDVjLS4xNjQtLjA4LS40MDMtLjA2NS0uNjA4LS4xMDYtLjQzMi0uMDg3LS44ODgtLjA4Ny0xLjM1OC0uMTY1LS44NDUtLjE0LTEuNzktLjEzLTIuNzQtLjEzLTEuMzE3IDAtMi42Mi4wMzUtMy43NjguMjM2LS41MDYuMDktMS4wMDYuMTA4LTEuNDcyLjIyMi0uMTk0LjA0Ny0uNDAzLjAzNC0uNTUuMTIyIDAgLjAwNC4wMDQuMDEuMDA2LjAxNC4xMTMuMDMuMjg1LjAyLjQzLjAybDEuMDQzLjAyMy45MDcuMDNjLjMwNS4wMS42MS4wMjIuOTE1LjAzNGwuNjY1LjAzN2MuNTQ3LjA4NSAxLjEzMi4wNCAxLjY2LjEzLjQ1NC4wNzUuOTA0LjA3MiAxLjMzLjE1Ni4xMjYuMDI1LjI3NS4wMTcuMzcuMDcydi4wMDdjLS4wNDMuMTA2LS4zNzcuMjg3LS40ODUuMzU3bC0xLjE4Ny44MzZMMTEuMzg1IDE2bC0xLjU5MyAxLjExNGMuMDA0LjA1NC4wMjguMDQuMDUuMDdhMzEuNjggMzEuNjggMCAwIDAgNC4yNDMuMjk0YzEuNDYuMDA1IDIuNzczLS4xMDYgMy41MDgtLjIxOC42My0uMDk2IDEuMjE2LS4xNjUgMS44Ni0uMzIzLjM2NC0uMDkuNTg1LS4xNjYuNTg1LS4xNjZ6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4K"},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PHBhdGggZD0iTTIwLjM2NiAxMS40MTJjLTEuNTMtLjg4Mi0zLjQ1NC0xLjQzLTUuNTczLTEuNTVMMTUuOTEgNi41NWwzLjAyMy44ODJhMi40MSAyLjQxIDAgMCAwIDIuNDE0IDIuNDFjMS4zMzQgMCAyLjQzMy0xLjA3NyAyLjQzMy0yLjQxQzIzLjc4IDYuMDc4IDIyLjY4IDUgMjEuMzQ3IDVjLS44NDQgMC0xLjU5LjQ1LTIuMDIgMS4wOThsLTMuNjctMS4wNThhLjY2OC42NjggMCAwIDAtLjg0NS40M2wtMS40NyA0LjM5M2MtMi4xLjExOC00LjAyNC42NjctNS41NTQgMS41NWEyLjc1MiAyLjc1MiAwIDAgMC0yLjAyLS44NjRBMi43NjIgMi43NjIgMCAwIDAgMyAxMy4zMTNjMCAxLjA0LjU5IDEuOTQgMS40MzIgMi40MS0uMDQuMjM3LS4wNTguNDcyLS4wNTguNzA3IDAgMy42MyA0LjM1NiA2LjU3IDkuNzEzIDYuNTcgNS4zMzcgMCA5LjY5My0yLjk0IDkuNjkzLTYuNTcgMC0uMjM0LS4wMi0uNDctLjA2LS43MDVhMi43MzMgMi43MzMgMCAwIDAgMS40MzQtMi40MSAyLjc2MyAyLjc2MyAwIDAgMC0yLjc2Ny0yLjc2NmMtLjgwNSAwLTEuNTEuMzMzLTIuMDIuODYyek0xMC42MTQgMTRjLjc2NSAwIDEuMzkyLjYyOCAxLjM5MiAxLjM5MmExLjM4IDEuMzggMCAwIDEtMS4zOTIgMS4zNzMgMS4zNjUgMS4zNjUgMCAwIDEtMS4zNzQtMS4zNzNBMS4zOCAxLjM4IDAgMCAxIDEwLjYxNCAxNHptNi45MjYgMGExLjM4IDEuMzggMCAwIDAtMS4zNzQgMS4zOTJjMCAuNzY1LjYxIDEuMzczIDEuMzc0IDEuMzczLjc2NSAwIDEuMzkzLS42MDggMS4zOTMtMS4zNzMgMC0uNzY0LS42MjgtMS4zOTItMS4zOTMtMS4zOTJ6bS03LjM0IDQuOThhLjY3LjY3IDAgMCAxLS4xMTYtLjk2Yy4yMTYtLjMxNC42NjctLjM1My45Ni0uMTE4Ljc4Ni42MDggMi4wNDIuOTQyIDMuMDQzLjk0Mi45OCAwIDIuMjM3LS4zMzQgMy4wNC0uOTQyYS42Ny42NyAwIDAgMSAuOTYzLjExNy42ODcuNjg3IDAgMCAxLS4xMTguOTZjLTEuMDIuODA1LTIuNjEgMS4yNTYtMy44ODUgMS4yNTYtMS4yOTUgMC0yLjg2NS0uNDUtMy44ODYtMS4yNTV6TTIxLjM0OCA4LjQ3Yy0uNTcgMC0xLjA0LS40Ny0xLjA0LTEuMDQgMC0uNTg3LjQ3LTEuMDM4IDEuMDQtMS4wMzguNTcgMCAxLjA0LjQ1IDEuMDQgMS4wNCAwIC41NjgtLjQ3IDEuMDQtMS4wNCAxLjA0eiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+Cg=="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjAyIDE3LjUwOHYtLjAwNGwtLjAyLjAwM2MuMDEgMCAuMDE3LjAwMi4wMiAwem0tNC44NDYtMy41NmwuMTY1LS43NjVjLjA1My0uMjMuMDMyLS41MS4wMzItLjc4VjExLjA0TDkuMzY2IDljLS4xNTYgMC0uMzEzLjA1LS40NDIuMDg2LS40MDIuMTE1LS43NS4yMjYtMS4wODIuMzk2LTEuMzAzLjY2NC0yLjI3NSAxLjc2LTIuNjg1IDMuMzEtLjM4NyAxLjQ2LS4wMDggMi45ODUuNTg3IDMuOTQ3LjEzMi4yMTIuMzAyLjU0LjQ5NS42ODUuMTUtLjAyMi4zMDUtLjE3LjQyLS4yNDQuMjQ4LS4xNi40OC0uMzIyLjctLjUwN2wuMjctLjI1OGMuNzEtLjU3IDEuMjEtMS41MTQgMS41NDQtMi40Njd6bTQuODEyIDMuNTZoLjAyYS40My40MyAwIDAgMC0uMDItLjAwNHYuMDA0em0tMy4zODctMWMtLjA5Ny0uMjE2LS4xOTQtLjQzLS4yOS0uNjQ3bC0uMS0uMjk2aC0uMDEzbC0uMjk3LjU2YTExLjU0IDExLjU0IDAgMCAxLS42MjcuOTQ0Yy0uMjg0LjM3Ny0uNjA1Ljc1LS45NTYgMS4wNjNsLS41OC40NzYuMDEyLjAyNi4zMjMuMTU4Yy4yMy4xMDIuNDg0LjE5NC43NC4yNjQuODg1LjI0NSAyLjAzNi4yIDIuODYyLS4wNi4yLS4wNjIuNzIzLS4yMTguODMtLjM0MnYtLjAyYy0uMTk4LS4xMDMtLjM2My0uMjg2LS41MjctLjQzYTYuMjcgNi4yNyAwIDAgMS0xLjM4LTEuNjk0em0xMi4yNDMtMy43MTVjLS40MS0xLjU1LTEuMzgyLTIuNjQ3LTIuNjg1LTMuMzEtLjMzMi0uMTctLjY4LS4yODItMS4wODItLjM5Ny0uMTMtLjAzNy0uMjg2LS4wODctLjQ0Mi0uMDg2bC0uMDA2IDIuMDR2MS4zNjRjMCAuMjctLjAyLjU0OC4wMzMuNzhsLjE2Ni43NjRjLjMzNC45NTMuODM0IDEuODk4IDEuNTQzIDIuNDY3bC4yNy4yNThjLjIyLjE4NS40NTMuMzQ4LjcuNTA4LjExNi4wNzYuMjcuMjIzLjQyLjI0NS4xOTQtLjE0Ni4zNjQtLjQ3My40OTYtLjY4Ni41OTUtLjk2My45NzQtMi40ODguNTg3LTMuOTQ3em0tNC4xMTYgNC4yNzVjLS4yMjUtLjI5OC0uNDMtLjYyLS42MjctLjk0M2wtLjI5Ny0uNTZoLS4wMTNsLS4xLjI5NmMtLjA5Ni4yMTctLjE5My40MzItLjI5LjY0OGE2LjI3MyA2LjI3MyAwIDAgMS0xLjM3OCAxLjY5NWMtLjE2NC4xNDMtLjMzLjMyNi0uNTI4LjQzdi4wMmMuMTA4LjEyMy42My4yOC44My4zNDIuODI3LjI1OCAxLjk3OC4zMDQgMi44NjQuMDYuMjU1LS4wNy41MDgtLjE2My43NC0uMjY1bC4zMjMtLjE1OC4wMTQtLjAyNi0uNTgtLjQ3NWE3LjMxMiA3LjMxMiAwIDAgMS0uOTU3LTEuMDYyek0xNi44NjcgMTRjLjA3Ni0uMjE2LjExLS40NS4xNjQtLjY4NS4wNTctLjIzNy4wMjgtLjU0NS4wMjgtLjgxOHYtMS41MjRsLS4wMDctMS45NkMxNy4wMzUgOS4wMDUgMTcuMDMgOSAxNyA5Yy0uMjIyLjA1My0uMzY3LjA1Ny0uNjY2LjE1OC0uNC4xMTQtLjc3LjMxLTEuMTEuNDk1LS4zMjMuMTgtLjU5NC40MzYtLjg3Ni42Ni0uMTEuMDg3LS4yMjMuMjE0LS4zNDYuMzVsLjAxLjAxM2ExLjM0IDEuMzQgMCAwIDAtLjAxLjAxM2wuNDA1LjUyN2MuMjYuNDA0LjUuODU4LjY1NCAxLjM2NS4zNjYgMS4yMTQuMjA0IDIuNzEyLS4yNjUgMy42ODJhNS41MTIgNS41MTIgMCAwIDEtLjUwMi44NDRsLS4yOS4zNjNhLjAyLjAyIDAgMCAxLS4wMDMuMDFjLjAwNC4wMDguMDEyLjAxNy4wMTQuMDI0aC4wMWMuNDQzLS4yNDIuNzctLjY0NiAxLjE1My0uOTUuMjEzLS4xNy40LS4zOTMuNTY4LS42MDcuNDU0LS41NzguODUtMS4xNzcgMS4xMi0xLjk0NnptLTIuODcgMy40N2MtLjA5Ny0uMTItLjE5NC0uMjQtLjI5LS4zNjJhNS41MTYgNS41MTYgMCAwIDEtLjUwMi0uODQ0Yy0uNDctLjk3LS42My0yLjQ2OC0uMjY0LTMuNjgyYTUuNDUgNS40NSAwIDAgMSAuNjU1LTEuMzY1TDE0IDEwLjY5bC0uMDEtLjAxNC4wMS0uMDEyYTMuMTQgMy4xNCAwIDAgMC0uMzQ2LS4zNWMtLjI4Mi0uMjI1LS41NTMtLjQ4Mi0uODc3LS42Ni0uMzM4LS4xODctLjcwOC0uMzgyLTEuMTEtLjQ5Ni0uMjk4LS4xLS40NDMtLjEwNS0uNjY1LS4xNTgtLjAzLjAwMi0uMDM2LjAwNS0uMDUzLjAxM2wtLjAwOCAxLjk2djEuNTI0YzAgLjI3My0uMDMuNTguMDI3LjgxOC4wNTQuMjM0LjA4Ny40Ny4xNjQuNjg2LjI3Mi43Ny42NjcgMS4zNyAxLjEyIDEuOTQ3LjE3LjIxNC4zNTYuNDM4LjU3LjYwNy4zODIuMzA0LjcxLjcwOCAxLjE1My45NWguMDFjMC0uMDA3LjAxLS4wMTYuMDEzLS4wMjRhLjAyLjAyIDAgMCAxLS4wMDMtLjAxeiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+Cg=="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjA1IDE2Ljc4M2MtLjExNi40NzQuNjE4LjUwMy43MTguMDcuMDQzLS4yMTQtLjExNS0uMzczLS4zMTYtLjM3My0uMTg3IDAtLjM3NC4xNDQtLjQwMy4zMDN6bS0uMTQ1IDEuMDY0Yy4xMTUtLjU2LS4zNDUtLjk3OC0uODktLjk1LS41Mi4wNDQtLjk1LjQwMy0xLjAzNi44NS0uMTMuNTc0LjM0NC45OS44OS45NDguNTE3LS4wMy45NS0uMzg4IDEuMDM1LS44NDh6bTQuMjcyLTMuNTUyYy0xLjc4NC0xLjEyMi00LjE3LTEuMTM3LTYuMDk4LS41MDQtLjk2NC4zMTgtMS45ODYuOTIyLTIuNTkgMS42ODQtLjcwNC44OS0uOTkyIDIuMDQyLS4yNiAzLjE1IDEuMDggMS42MSAzLjg0IDIuMjg2IDYuMzg3IDEuNjk2IDEuNDk1LS4zNDUgMy4wOTItMS4xOCAzLjc2OC0yLjYxNy42MzMtMS4zMjMtLjA1OC0yLjY3NS0xLjIwOC0zLjQwOHptLTMuNTY3LjU2YzEuMDY0LjE4OCAxLjkxMy44NSAyLjA1NiAxLjk1Ni4yNzMgMi4wODctMi40NDQgMy43NTUtNC41MyAyLjYxOC0uOTUtLjUwMy0xLjU2Ny0xLjc4Mi0uODM0LTMuMDYzLjQ5LS44NjIgMS40MjQtMS40MjMgMi40MTYtMS41MjQuMzAyLS4wNDIuNjA0LS4wMjcuODkyLjAxNXptNi44NzQtLjQxNmMtLjMwMi0uMjAzLS42MDQtLjMxOC0uOTYzLS40MzMtLjM0NS0uMTE1LS40MDItLjE3My0uMjcyLS41MThhMy4wMiAzLjAyIDAgMCAwIC4xODYtLjc1Yy4xNi0xLjI5My0uODktMS42OC0yLjA4NS0xLjU4LS41Ni4wNDMtMS4wMzYuMTg3LTEuNTI2LjM0NS0uMzE2LjEtLjkwNi40My0xLjAzNS4yMy0uMDczLS4xLjAxNC0uMjYuMDQyLS4zNi4xODctLjcwNC4yNi0xLjY4Mi0uNDMtMi4xMTQtLjUwNC0uMzE1LTEuMzgyLS4yMy0xLjkxNC0uMDQyLTIuODc2Ljk3OC03LjI2MiA1LjEyLTYuMzcgOC40MTMuMi43NS42MTggMS4zMSAxLjAyIDEuNzEyIDEuMTk0IDEuMTk0IDMuMDUgMS44NTYgNC43NiAyLjEgMS4yNTIuMTczIDIuNTQ2LjE1OCAzLjc5OC0uMDcyIDIuMDQtLjM3NCAzLjk5Ny0xLjI5NCA1LjI2My0yLjkzNC44NDctMS4wOTMgMS4xMi0yLjY0NiAwLTMuNjM4YTMuNzUgMy43NSAwIDAgMC0uNDc2LS4zNnptMS44MjYtNC4xNDNjLjczMyAxLjY2OC0uMDcyIDIuNDE2LjE4NyAyLjk5LjIxNi40NzUuODYzLjUyIDEuMTUuMTYuMjE2LS4yNzQuMzMtMS4wOC4zNDYtMS40NEE0LjcxNyA0LjcxNyAwIDAgMCAyMS43MjggOC41Yy0xLjEwOC0xLjIxLTIuNTYtMS42MjYtNC4xNTctMS40NjgtLjI4Ni4wMy0uNTE2LjA3Mi0uNjc1LjI0NS0uMzczLjQwMi0uMTg2Ljk5Mi4zMzIgMS4wNzguNDMuMDcyIDEuNTEtLjI2IDIuNzE3LjQ0Ni41Ni4zNDYgMS4wOTMuODkzIDEuMzY2IDEuNDk3em0tMy44ODItLjYzM2MtLjMxNi4zODgtLjA4Ni45NzguNDYuOTYzLjMzLS4wMTQuNDAzLS4wNTcuNzYyLjA1OC4zNDUuMTE1LjcwNC41MDMuNzIuOTY0LjAyOC4zLS4zMTcgMS4wMDUuMzYgMS4xOTJhLjU5LjU5IDAgMCAwIC42MDItLjE4N2MuMTMtLjE0NC4xODctLjQxNy4yMTctLjY0Ny4xLS45NjMtLjM3Ni0xLjc5OC0xLjEzOC0yLjI3Mi0uNDMtLjI2LTEuNjI1LS41MTgtMS45ODQtLjA3MnoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5Ljk4IDEwLjkyNmwtLjI0MiAyLjIzNS0zLjg2NSAzLjgwN0gxMy44MmwtLjc4NyAyLjA1M3YyLjg0bC0yLjc3OC0uNzg2IDMuMi01LjczOEw1IDEwLjU2NGw2LjM0Mi44NDVMOC4yNjIgN2w4LjM5NiA0LjUzIDIuNDc2LTIuNzc4aDEuMTQ4TDIzIDkuOTZsLTMuMDIuOTY2eiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+Cg=="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjQxNCA2LjAxYTQuOTQ2IDQuOTQ2IDAgMCAwLTQuODY2IDYuODg3LjQzLjQzIDAgMCAwIC41NzUuMjI2LjQzLjQzIDAgMCAwIC4yMy0uNTc0IDQuMDEgNC4wMSAwIDAgMS0uMzItMS44NzggNC4wNjggNC4wNjggMCAwIDEgNC4zMjMtMy43ODIgNC4wNjcgNC4wNjcgMCAwIDEgMy43ODcgNC4zMiA0LjA2NyA0LjA2NyAwIDAgMS01LjIzMiAzLjYyLjQzOC40MzggMCAwIDAtLjU0NS4yOTZjLS4wNjQuMjMuMDYuNDc0LjI5NS41NDYuMzU0LjEwNC43MjguMTcgMS4xLjE5NWE0Ljk0NyA0Ljk0NyAwIDAgMCA1LjI2LTQuNTk4IDQuOTQ3IDQuOTQ3IDAgMCAwLTQuNjA2LTUuMjZ6bS0xLjUxNiA2LjM2N2ExLjg3OCAxLjg3OCAwIDEgMC0uNTE4LS43MzdjLS4zMDguMzAyLS42MzUuNjYyLS45NiAxLjA4Ni0xLjE1IDEuNDgtMi41MDIgNC4xNTUtMi40MTYgNy44ODIuMDA2LjIzLjE3Ni41NDMuNC41NThsLjA0My4wMDNjLjI0LjAxNy40NDQtLjM0LjQ0LS41OC0uMDctMi43NjYuNjc2LTUuMjQ0IDIuMi03LjIyNi4yNzItLjM1Ni41NS0uNzA0LjgxLS45ODd6bTEzLjkzNyA0LjYxOGMtMS40Ny0uNTM4LTIuNTktMS40MjgtMy4zMTgtMi42NDVhNS40ODIgNS40ODIgMCAwIDEtLjQtLjguOTIuOTIgMCAwIDAgLjM4LS40MDUuOTMyLjkzMiAwIDAgMC0uNDQ0LTEuMjM0LjkyNS45MjUgMCAwIDAtMS4yMzUuNDQyLjkyNC45MjQgMCAwIDAgLjgxNCAxLjMyNGMuMTAzLjI2Ny4yNDUuNTguNDQuOTEuNTQyLjkxNCAxLjYwOCAyLjE1MiAzLjU5NCAyLjg4YS4yNTQuMjU0IDAgMCAwIC4zMTMtLjEyOGMwLS4wMDcuMDA0LS4wMTIuMDA2LS4wMjVhLjI1Mi4yNTIgMCAwIDAtLjE1LS4zMTh6bS00LjIzOC0xLjg4NGEyLjI5NSAyLjI5NSAwIDAgMS0xLjkyLTMuNDIyIDIuMjk0IDIuMjk0IDAgMCAxIDMuMTMtLjg4NiAyLjI5NSAyLjI5NSAwIDAgMSAuODg1IDMuMTMgMi4xNiAyLjE2IDAgMCAxLS4zMDIuNDI3LjI1LjI1IDAgMCAwIC4wMTcuMzUuMjUuMjUgMCAwIDAgLjM1My0uMDE2IDIuOCAyLjggMCAxIDAtNC41Mi0zLjI1IDIuODA1IDIuODA1IDAgMCAwIDIuMzQgNC4xNy4yNTIuMjUyIDAgMCAwIC4wMTctLjUwM3oiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjQzNSA5LjE2Mmg0LjE2djMuMjE0aC00LjE2djQuNjE1YzAgMS4wNDUtLjAxMyAxLjY0OC4wOTcgMS45NDQuMTEuMjk0LjM4Ni42LjY4Ni43NzYuNC4yNC44NTMuMzU4IDEuMzY1LjM1OC45MTIgMCAxLjgxOC0uMjk1IDIuNzItLjg4OHYyLjgzOGMtLjc2OC4zNjItMS40NjUuNjE4LTIuMDkuNzYzYTguOTMzIDguOTMzIDAgMCAxLTIuMDIuMjJjLS44MjQgMC0xLjMxLS4xMDQtMS45NDItLjMxYTQuNzQyIDQuNzQyIDAgMCAxLTEuNjE3LS44OWMtLjQ0OC0uMzg1LS43NTYtLjc5NC0uOTMtMS4yMjctLjE3LS40MzMtLjI1OC0xLjA2Mi0uMjU4LTEuODg0di02LjMxNEg4di0yLjU1Yy43MDctLjIzIDEuNTI3LS41NTggMi4wMy0uOTg2LjUwNS0uNDMuOTEtLjk0NSAxLjIxNC0xLjU0Ni4zMDYtLjYuNTE2LTEuMzY2LjYzMi0yLjI5NGgyLjU2djQuMTYyeiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+Cg=="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzIDguNzNhNy4zOCA3LjM4IDAgMCAxLTIuMTIuNTgzIDMuNzA2IDMuNzA2IDAgMCAwIDEuNjIzLTIuMDQzIDcuMzk3IDcuMzk3IDAgMCAxLTIuMzQ2Ljg5NiAzLjY5MyAzLjY5MyAwIDAgMC02LjI5MyAzLjM2OCAxMC40ODUgMTAuNDg1IDAgMCAxLTcuNjEtMy44NThjLS4zMi41NDUtLjUgMS4xOC0uNSAxLjg1NiAwIDEuMjguNjUgMi40MSAxLjY0MiAzLjA3M2EzLjY4MyAzLjY4MyAwIDAgMS0xLjY3My0uNDYydi4wNDdjMCAxLjc4OCAxLjI3MyAzLjI4IDIuOTYyIDMuNjJhMy43MTggMy43MTggMCAwIDEtMS42NjcuMDYzIDMuNjk3IDMuNjk3IDAgMCAwIDMuNDUgMi41NjRBNy40MSA3LjQxIDAgMCAxIDUgMTkuOTY3YTEwLjQ1MyAxMC40NTMgMCAwIDAgNS42NiAxLjY1OGM2Ljc5NCAwIDEwLjUwOC01LjYyNiAxMC41MDgtMTAuNTA1IDAtLjE2LS4wMDMtLjMyLS4wMS0uNDc4QTcuNTA3IDcuNTA3IDAgMCAwIDIzIDguNzMyeiIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+Cg=="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjEuMjM4IDE4LjAyYy0uNTQ1LS40NC0xLjEyNy0uODM1LTEuNy0xLjI0LTEuMTQyLS44MDYtMi4xODgtLjg3LTMuMDQuNDMtLjQ4LjcyOC0xLjE1Ljc2LTEuODUuNDQtMS45MzMtLjg4LTMuNDI1LTIuMjM4LTQuMy00LjIxMi0uMzg2LS44NzMtLjM4LTEuNjU2LjUyNC0yLjI3NC40OC0uMzI3Ljk2Mi0uNzEzLjkyMy0xLjQyNy0uMDUtLjkzLTIuMy00LjA0Mi0zLjE4Ni00LjM3YTEuNjA3IDEuNjA3IDAgMCAwLTEuMTEgMEM1LjQyIDYuMDcgNC41NTggNy43OSA1LjM4NCA5LjgyOGMyLjQ2NCA2LjA4IDYuOCAxMC4zMSAxMi43NjggMTIuODk0LjM0LjE0OC43Mi4yMDYuOTEuMjYgMS4zNi4wMTMgMi45NS0xLjMwMyAzLjQxLTIuNjEuNDQzLTEuMjU1LS40OTItMS43NTQtMS4yMzItMi4zNTN6TTE0LjU0NiA1Ljk5YzQuMzYzLjY3NSA2LjM3NiAyLjc2IDYuOTMgNy4xNzguMDUzLjQwOC0uMDk4IDEuMDIyLjQ4IDEuMDMzLjYwNi4wMTMuNDYtLjU5Mi40NjUtMSAuMDUyLTQuMTYtMy41NTYtOC4wMTgtNy43NDgtOC4xNi0uMzE2LjA0Ni0uOTctLjIyLTEuMDEuNDkzLS4wMjguNDguNTIzLjQwMi44ODQuNDU3eiIvPjxwYXRoIGQ9Ik0xNS40IDcuMjAyYy0uNDItLjA1LS45NzQtLjI1LTEuMDcyLjMzNS0uMTAzLjYxNS41MTUuNTUyLjkxMi42NDIgMi42OTUuNjA0IDMuNjMzIDEuNTkgNC4wNzcgNC4yNzcuMDY0LjM5Mi0uMDY0IDEgLjU5OC45LjQ5LS4wNzUuMzEzLS41OTcuMzU1LS45MDMuMDItMi41OC0yLjE3OC00LjkyNy00Ljg3LTUuMjUyeiIvPjxwYXRoIGQ9Ik0xNS42NDcgOS4zMWMtLjI4LjAwOC0uNTU1LjA0LS42NTguMzQtLjE1Ni40NS4xNy41NTYuNS42MSAxLjEwNi4xNzggMS42ODguODM0IDEuOCAxLjk0Mi4wMjguMy4yMTguNTQ0LjUwNy41MS40LS4wNDguNDM3LS40MDcuNDI1LS43NDcuMDItMS4yNDUtMS4zOC0yLjY4NC0yLjU3NS0yLjY1NHoiLz48L2c+PC9zdmc+Cg=="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0Ljg4MyAxOS4zOTZzLjMyNS0uMDM2LjQ5LS4yMThjLjE1NC0uMTY3LjE1LS40OC4xNS0uNDhzLS4wMjMtMS40NjguNjQ4LTEuNjg0Yy42Ni0uMjEzIDEuNTEgMS40MTggMi40MDggMi4wNDYuNjguNDc0IDEuMTk3LjM3IDEuMTk3LjM3bDIuNDA0LS4wMzRzMS4yNTYtLjA4LjY2LTEuMDg0Yy0uMDUtLjA4Mi0uMzQ4LS43NDMtMS43ODgtMi4xMDItMS41MDctMS40MjMtMS4zMDUtMS4xOTIuNTEtMy42NTMgMS4xMDYtMS40OTggMS41NDgtMi40MTIgMS40MS0yLjgwNC0uMTMyLS4zNzMtLjk0NS0uMjc1LS45NDUtLjI3NWwtMi43MDYuMDE3cy0uMi0uMDI4LS4zNS4wNjNjLS4xNDQuMDg4LS4yMzguMjk1LS4yMzguMjk1cy0uNDI4IDEuMTYtMSAyLjE0NmMtMS4yMDQgMi4wOC0xLjY4NiAyLjE5LTEuODgzIDIuMDYtLjQ2LS4zLS4zNDUtMS4yMS0uMzQ1LTEuODU1IDAtMi4wMTcuMy0yLjg1Ny0uNTg2LTMuMDc1LS4yOTUtLjA3Mi0uNTEyLS4xMi0xLjI2NC0uMTI4LS45NjYtLjAxLTEuNzgzLjAwMy0yLjI0Ni4yMzQtLjMwOC4xNTMtLjU0Ni40OTUtLjQuNTE0LjE3OC4wMjUuNTgzLjExLjc5OC40MS4yNzcuMzgyLjI2OCAxLjI0NC4yNjggMS4yNDRzLjE2IDIuMzczLS4zNzMgMi42NjhjLS4zNjUuMjAyLS44NjUtLjIxLTEuOTQtMi4wOTgtLjU1LS45NjctLjk2Ni0yLjAzNi0uOTY2LTIuMDM2cy0uMDgtLjItLjIyMy0uMzA2Yy0uMTczLS4xMy0uNDE2LS4xNy0uNDE2LS4xN2wtMi41Ny4wMTZzLS4zODguMDEtLjUzLjE4MmMtLjEyNS4xNTItLjAxLjQ2Ni0uMDEuNDY2czIuMDE0IDQuNzkgNC4yOTQgNy4yMDJjMi4wOSAyLjIxNCA0LjQ2NSAyLjA2OCA0LjQ2NSAyLjA2OGgxLjA3NnoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo="},function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjggMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIzIDEzLjc2OGMwIDQuODQzLTMuOTU2IDguNzY4LTguODM2IDguNzY4YTguODUzIDguODUzIDAgMCAxLTQuMjcyLTEuMDlMNSAyM2wxLjU5NS00LjcwNGE4LjY3OCA4LjY3OCAwIDAgMS0xLjI2OC00LjUyOEM1LjMyNyA4LjkyNiA5LjI4MyA1IDE0LjE2NCA1IDE5LjA0NCA1IDIzIDguOTI2IDIzIDEzLjc2OHptLTguODM2LTcuMzcyYy00LjA5NyAwLTcuNDMgMy4zMDgtNy40MyA3LjM3MiAwIDEuNjEzLjUyNiAzLjEwNyAxLjQxNSA0LjMyMmwtLjkzIDIuNzM4IDIuODU2LS45MDhhNy40MjUgNy40MjUgMCAwIDAgNC4wODggMS4yMmM0LjA5NiAwIDcuNDMtMy4zMDcgNy40My03LjM3MiAwLTQuMDY0LTMuMzM0LTcuMzcyLTcuNDMtNy4zNzJ6bTQuNDYyIDkuMzljLS4wNTUtLjA4OC0uMi0uMTQyLS40MTUtLjI1LS4yMTYtLjEwNy0xLjI4Mi0uNjI3LTEuNDgtLjY5OC0uMi0uMDcyLS4zNDMtLjEwOC0uNDg3LjEwNy0uMTQ1LjIxNi0uNTYuNy0uNjg2Ljg0Mi0uMTI3LjE0NC0uMjUzLjE2Mi0uNDcuMDU0LS4yMTYtLjEwNi0uOTE0LS4zMzMtMS43NC0xLjA2NS0uNjQ1LS41Ny0xLjA4LTEuMjczLTEuMjA2LTEuNDg4LS4xMjYtLjIxNS0uMDEzLS4zMzIuMDk2LS40NC4wOTctLjA5NS4yMTYtLjI1LjMyNS0uMzc1LjExLS4xMjYuMTQ1LS4yMTUuMjE3LS4zNi4wNzMtLjE0Mi4wMzYtLjI2Ny0uMDE4LS4zNzUtLjA1NS0uMTA4LS40ODgtMS4xNjUtLjY3LTEuNTk1LS4xOC0uNDMtLjM2LS4zNi0uNDg2LS4zNi0uMTI3IDAtLjI3LS4wMTctLjQxNS0uMDE3YS44LjggMCAwIDAtLjU4LjI3Yy0uMTk3LjIxNC0uNzU3LjczNC0uNzU3IDEuNzkgMCAxLjA2Ljc3NiAyLjA4Ljg4NCAyLjIyNC4xMS4xNDIgMS40OTggMi4zODMgMy43IDMuMjQ0IDIuMjAzLjg2IDIuMjAzLjU3MyAyLjYuNTM3LjM5Ny0uMDM1IDEuMjgtLjUyIDEuNDYyLTEuMDIuMTgtLjUwMi4xOC0uOTMzLjEyNi0xLjAyM3oiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo="},function(t,e,n){function i(t){return n(M(t))}function M(t){return u[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var u={"./blogger.js":6,"./delicious.js":7,"./digg.js":8,"./evernote.js":9,"./facebook.js":10,"./gplus.js":11,"./linkedin.js":12,"./lj.js":13,"./moimir.js":14,"./odnoklassniki.js":15,"./pinterest.js":16,"./pocket.js":17,"./qzone.js":18,"./reddit.js":19,"./renren.js":20,"./sinaWeibo.js":21,"./surfingbird.js":22,"./tencentWeibo.js":23,"./tumblr.js":24,"./twitter.js":25,"./viber.js":26,"./vkontakte.js":27,"./whatsapp.js":28};i.keys=function(){return Object.keys(u)},i.resolve=M,t.exports=i,i.id=102},function(t,e,n){function i(t){return n(M(t))}function M(t){return u[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var u={"./blogger18.png":32,"./blogger24.png":33,"./delicious18.png":34,"./delicious24.png":35,"./digg18.png":36,"./digg24.png":37,"./evernote18.png":38,"./evernote24.png":39,"./facebook18.png":40,"./facebook24.png":41,"./gplus18.png":42,"./gplus24.png":43,"./linkedin18.png":44,"./linkedin24.png":45,"./lj18.png":46,"./lj24.png":47,"./moimir18.png":48,"./moimir24.png":49,"./odnoklassniki18.png":50,"./odnoklassniki24.png":51,"./pinterest18.png":52,"./pinterest24.png":53,"./pocket18.png":54,"./pocket24.png":55,"./qzone18.png":56,"./qzone24.png":57,"./reddit18.png":58,"./reddit24.png":59,"./renren18.png":60,"./renren24.png":61,"./sinaWeibo18.png":62,"./sinaWeibo24.png":63,"./surfingbird18.png":64,"./surfingbird24.png":65,"./tencentWeibo18.png":66,"./tencentWeibo24.png":67,"./tumblr18.png":68,"./tumblr24.png":69,"./twitter18.png":70,"./twitter24.png":71,"./viber18.png":72,"./viber24.png":73,"./vkontakte18.png":74,"./vkontakte24.png":75,"./whatsapp18.png":76,"./whatsapp24.png":77};i.keys=function(){return Object.keys(u)},i.resolve=M,t.exports=i,i.id=103},function(t,e,n){function i(t){return n(M(t))}function M(t){return u[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var u={"./blogger.svg":79,"./delicious.svg":80,"./digg.svg":81,"./evernote.svg":82,"./facebook.svg":83,"./gplus.svg":84,"./linkedin.svg":85,"./lj.svg":86,"./moimir.svg":87,"./odnoklassniki.svg":88,"./pinterest.svg":89,"./pocket.svg":90,"./qzone.svg":91,"./reddit.svg":92,"./renren.svg":93,"./sinaWeibo.svg":94,"./surfingbird.svg":95,"./tencentWeibo.svg":96,"./tumblr.svg":97,"./twitter.svg":98,"./viber.svg":99,"./vkontakte.svg":100,"./whatsapp.svg":101};i.keys=function(){return Object.keys(u)},i.resolve=M,t.exports=i,i.id=104},function(t,e){"use strict";function n(t){return("object"==typeof t||"function"==typeof t)&&null!==t}t.exports.get=function(t,e){if(!n(t)||"string"!=typeof e)return t;for(var i=e.split("."),M=0;M<i.length;M++){for(var u=i[M];"\\"===u[u.length-1];)u=u.slice(0,-1)+".",u+=i[++M];if(t=t[u],void 0===t)break}return t},t.exports.set=function(t,e,i){if(n(t)&&"string"==typeof e)for(var M=e.split("."),u=0;u<M.length;u++){for(var o=M[u];"\\"===o[o.length-1];)o=o.slice(0,-1)+".",o+=M[++u];n(t[o])||(t[o]={}),u===M.length-1&&(t[o]=i),t=t[o]}}},function(t,e){"use strict";function n(t){return t in r||(r[t]=new RegExp("(^|\\s+)"+t+"(\\s+|$)","")),r[t]}function i(t,e){return n(e).test(t.className||"")}function M(t,e){i(t,e)||(t.className+=" "+e)}function u(t,e){var n=new RegExp("((?:^|\\s+)"+e+"|"+e+"(?:\\s+|$))","g");t&&(t.className=t.className.replace(n,""))}function o(t,e){i(t,e)?u(t,e):M(t,e)}e.__esModule=!0,e.hasClass=i,e.addClass=M,e.removeClass=u,e.toggleClass=o;var r={}},function(t,e,n){var i;!function(M){function u(t){t||(t={}),this.elemDelim=t.elem||t.elemSeparator||"__",this.modDelim=t.mod||t.modSeparator||"_",this._wordPattern=t.wordPattern||t.literal&&t.literal+"+"||"[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*",this._buildRegex()}var o={BLOCK:"block",BLOCK_MOD:"blockMod",ELEM:"elem",ELEM_MOD:"elemMod"};u.prototype.validate=function(t){return this._regex.test(t)},u.prototype.typeOf=function(t){if("string"==typeof t&&(t=this.parse(t)),t&&t.block){var e=t.modName,n=e&&(t.modVal||!t.hasOwnProperty("modVal"));if(t.elem){if(n)return o.ELEM_MOD;if(!e)return o.ELEM}return n?o.BLOCK_MOD:e?void 0:o.BLOCK}},u.prototype.isBlock=function(t){return this.typeOf(t)===o.BLOCK},u.prototype.isBlockMod=function(t){return this.typeOf(t)===o.BLOCK_MOD},u.prototype.isElem=function(t){return this.typeOf(t)===o.ELEM},u.prototype.isElemMod=function(t){return this.typeOf(t)===o.ELEM_MOD},u.prototype.parse=function(t){var e=this._regex.exec(t);if(e){var n={block:e[1]||e[4]},i=e[5],M=e[2]||e[6];if(i&&(n.elem=i),M){var u=e[3]||e[7];n.modName=M,n.modVal=u||!0}return n}},u.prototype.stringify=function(t){if(!t||!t.block)throw new Error("The field `block` is undefined. It is impossible to stringify BEM notation.");var e=t.block;if(t.elem&&(e+=this.elemDelim+t.elem),t.modName){var n=t.modVal;!n&&0!==n&&t.hasOwnProperty("modVal")||(e+=this.modDelim+t.modName),n&&n!==!0&&(e+=this.modDelim+n)}return e},u.prototype._buildRegex=function(){var t=this._wordPattern,e="("+t+")",n="(?:"+this.elemDelim+"("+t+"))?",i="(?:"+this.modDelim+"("+t+"))?",M=i+i;this._regex=new RegExp("^"+e+M+"$|^"+e+n+M+"$")};var r=!0,L={},j=function(t){t||(t={});var e={elem:t.elem||t.elemSeparator||"__",mod:t.mod||t.modSeparator||"_",wordPattern:t.wordPattern||t.literal&&t.literal+"+"||"[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*"},n=JSON.stringify(e);return L[n]||(L[n]=new u(e))},a=j();j.BEMNaming=u,j.validate=function(){return a.validate.apply(a,arguments)},j.parse=function(){return a.parse.apply(a,arguments)},j.stringify=function(){return a.stringify.apply(a,arguments)},j.typeOf=function(){return a.typeOf.apply(a,arguments)},j.isBlock=function(){return a.isBlock.apply(a,arguments)},j.isElem=function(){return a.isElem.apply(a,arguments)},j.isBlockMod=function(){return a.isBlockMod.apply(a,arguments)},j.isElemMod=function(){return a.isElemMod.apply(a,arguments)},t.exports=j,r=!1,"object"==typeof modules&&(modules.define("bem-naming",function(t){t(j)}),r=!1),i=function(t,e,n){n.exports=j}.call(e,n,e,t),!(void 0!==i&&(t.exports=i)),r=!1,r&&(M.bemNaming=j)}(this)},function(t,e,n){var i=function(){function t(){this._shortTags={};for(var t=0;t<e.length;t++)this._shortTags[e[t]]=1;this._optJsAttrName="onclick",this._optJsAttrIsJs=!0,this._optJsCls="i-bem",this._optJsElem=!0,this._optEscapeContent=!0,this._optNobaseMods=!1,this._optDelimElem="__",this._optDelimMod="_"}t.prototype={toHtml:function(t){this._buf="",this._html(t);var e=this._buf;return delete this._buf,e},_html:function(t){var e,o,r;if(t!==!1&&null!=t)if("object"!=typeof t)this._buf+=this._optEscapeContent?n(t):t;else if(Array.isArray(t))for(e=0,o=t.length;o>e;e++)r=t[e],r!==!1&&null!=r&&this._html(r);else{if(t.toHtml){var L=t.toHtml.call(this,t)||"";return void(this._buf+=L)}var j=t.bem!==!1;if("undefined"!=typeof t.tag&&!t.tag)return void(t.html?this._buf+=t.html:this._html(t.content));t.mix&&!Array.isArray(t.mix)&&(t.mix=[t.mix]);var a,c,s,N="",g="",y=!1;if(a=t.attrs)for(e in a)c=a[e],c===!0?g+=" "+e:c!==!1&&null!==c&&void 0!==c&&(g+=" "+e+'="'+i(c)+'"');if(j){var D=t.block+(t.elem?this._optDelimElem+t.elem:"");t.block&&(N=u(t,D,null,this._optNobaseMods,this._optDelimMod),t.js&&((s={})[D]=t.js===!0?{}:t.js));var l=this._optJsCls&&(this._optJsElem||!t.elem),I=t.mix;if(I&&I.length)for(e=0,o=I.length;o>e;e++){var p=I[e];if(p&&p.bem!==!1){var d=p.block||t.block||"",A=p.elem||(p.block?null:t.block&&t.elem),z=d+(A?this._optDelimElem+A:"");d&&(N+=u(p,z,D,this._optNobaseMods,this._optDelimMod),p.js&&((s=s||{})[z]=p.js===!0?{}:p.js,y=!0,l||(l=d&&this._optJsCls&&(this._optJsElem||!A))))}}if(s){l&&(N+=" "+this._optJsCls);var S=y||t.js!==!0?M(JSON.stringify(s)):'{"'+D+'":{}}';g+=" "+(t.jsAttr||this._optJsAttrName)+"='"+(this._optJsAttrIsJs?"return "+S:S)+"'"}}t.cls&&(N=(N?N+" ":"")+i(t.cls).trim());var T=t.tag||"div";this._buf+="<"+T+(N?' class="'+N+'"':"")+(g?g:""),this._shortTags[T]?this._buf+="/>":(this._buf+=">",t.html?this._buf+=t.html:this._html(t.content),this._buf+="</"+T+">")}}};var e="area base br col command embed hr img input keygen link menuitem meta param source track wbr".split(" "),n=t.prototype.xmlEscape=function(t){return(t+"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},i=t.prototype.attrEscape=function(t){return(t+"").replace(/&/g,"&amp;").replace(/"/g,"&quot;")},M=t.prototype.jsAttrEscape=function(t){return(t+"").replace(/&/g,"&amp;").replace(/'/g,"&#39;")},u=function(t,e,n,i,M){var u,o,r,L="";if(n!==e&&(n&&(L+=" "),L+=e),u=t.elem&&t.elemMods||t.mods)for(r in u)o=u[r],(o||0===o)&&(L+=" "+(i?M:e+M)+r+(o===!0?"":M+o));return L};return t}();t.exports=i},function(t,e){"use strict";e.__esModule=!0,e["default"]={metrika:{id:26812653},defaults:{hooks:{onready:function(){},onshare:function(){}},theme:{bare:!1,copy:"last",counter:!1,lang:"ru",limit:!1,services:"vkontakte,facebook,twitter",size:"m"},content:{description:"",image:"",title:window.document.title,url:window.location.href},contentByService:{}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var M=n(107),u=i(M),o=n(1),r=i(o),L={findInside:function(t,e){return t.querySelectorAll("."+u["default"].stringify(e))},findOutside:function(t,e){return r["default"].closest(t,u["default"].stringify(e))},getMod:function(t,e){for(var n=r["default"].getClassList(t),i=0,M=n.length;M>i;i+=1){var o=u["default"].parse(n[i]);if(o.modName===e)return o.modVal}}};e["default"]=L},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function M(t){var e=document.createElement("input");return e.setAttribute("type","text"),e.setAttribute("value",t),e.style.position="absolute",e.style.left="-9999px",document.body.appendChild(e),e}function u(){try{return document.execCommand("copy")}catch(t){return!1}}function o(t,e){var n=M(t);n.select();var i=u();L["default"].remove(n),i||e(t)}e.__esModule=!0,e.copy=u,e.clip=o;var r=n(1),L=i(r)},function(t,e){"use strict";/*!
 * contentloaded.js
 *
 * Author: Diego Perini (diego.perini at gmail.com)
 * Summary: cross-browser wrapper for DOMContentLoaded
 * Updated: 20101020
 * License: MIT
 * Version: 1.2
 *
 * URL:
 * http://javascript.nwbox.com/ContentLoaded/
 * http://javascript.nwbox.com/ContentLoaded/MIT-LICENSE
 *
 */
    function n(t,e){function n(i){"readystatechange"==i.type&&"complete"!=o.readyState||(("load"==i.type?t:o)[a](c+i.type,n,!1),M||(M=!0,e.call(t,i.type||i)))}function i(){try{r.doScroll("left")}catch(t){return void setTimeout(i,50)}n("poll")}var M=!1,u=!0,o=t.document,r=o.documentElement,L=o.addEventListener,j=L?"addEventListener":"attachEvent",a=L?"removeEventListener":"detachEvent",c=L?"":"on";if("complete"==o.readyState)e.call(t,"lazy");else{if(!L&&r.doScroll){try{u=!t.frameElement}catch(s){}u&&i()}o[j](c+"DOMContentLoaded",n,!1),o[j](c+"readystatechange",n,!1),t[j](c+"load",n,!1)}}e.__esModule=!0,e["default"]=n},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function M(t){return function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return"string"==typeof e&&(e=a["default"].toArray(document.querySelectorAll(e))),Array.isArray(e)||(e=[e]),n.reinit===!1&&(e=e.filter(function(t){return!(0,g.hasClass)(t,"ya-share2_inited")})),e.map(function(e){var i=new L["default"](e,(0,o["default"])({options:n},t));return i.isBare()||D||(y.injectCss((0,c.getCss)(t.plugins)),D=!0),i})}}e.__esModule=!0,e["default"]=M;var u=n(2),o=i(u),r=n(120),L=i(r),j=n(1),a=i(j),c=n(3),s=n(4),N=i(s),g=n(106),y=new N["default"](window.document),D=!1},,function(t,e){"use strict";e.__esModule=!0;var n=function(t,e){this._window=t,this._namespace="yandex_metrika_callbacks",this._id=e};n.prototype.inject=function(t){var e=this,n=t.injectJs("https://mc.yandex.ru/metrika/watch.js"),i="function"==typeof this._window.jQuery;this._window[this._namespace]=this._window[this._namespace]||[],this._window[this._namespace].push(function(){try{e._window["yaCounter"+e._id]=new Ya.Metrika({id:e._id,trackLinks:!0,accurateTrackBounce:!0,params:{jquery:i,version:i&&e._window.jQuery().jquery,shareVersion:2}}),n.parentNode.removeChild(n)}catch(t){console.error(t)}})},n.prototype.getCounter=function(){return this._window["yaCounter"+this._id]},e["default"]=n},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function M(t,e){switch(j[t]){case"boolean":return void 0!==e;default:return e}}function u(t,e){var n={};return Object.keys(t).forEach(function(i){var u=i.split(":"),r=o(u,2),j=r[0],a=r[1],c=M(j,t[i]);return void 0!==e[j]?void(n[j]=c):void Object.keys(e).filter(function(t){return!t.match(/ByService$/)}).some(function(t){if(void 0!==e[t][j]){var i=a?t+"ByService."+a+"."+j:t+"."+j;return L["default"].set(n,i,c),!0}})}),n}var o=function(){function t(t,e){var n=[],i=!0,M=!1,u=void 0;try{for(var o,r=t[Symbol.iterator]();!(i=(o=r.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(L){M=!0,u=L}finally{try{!i&&r["return"]&&r["return"]()}finally{if(M)throw u}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.__esModule=!0,e["default"]=u;var r=n(105),L=i(r),j={bare:"boolean",counter:"boolean"}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function M(t,e){var n=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],i=new L["default"];return i.merge(t),i.merge((0,o["default"])(e,t)),i.merge(n),i}e.__esModule=!0,e["default"]=M;var u=n(116),o=i(u),r=n(118),L=i(r)},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var M=n(105),u=i(M),o=n(2),r=i(o),L=function(){this._options={}};L.prototype.merge=function(t){(0,r["default"])(!0,this._options,t)},L.prototype.get=function(t,e){if(e){var n=t.replace(".","ByService."+e+"."),i=u["default"].get(this._options,n);if(void 0!==i)return i}var M=u["default"].get(this._options,t);if(void 0!==M)return M;throw new ReferenceError("config key "+t+" does not exist")},e["default"]=L},function(t,e){"use strict";var n=function(){function t(t,e){var n=[],i=!0,M=!1,u=void 0;try{for(var o,r=t[Symbol.iterator]();!(i=(o=r.next()).done)&&(n.push(o.value),!e||n.length!==e);i=!0);}catch(L){M=!0,u=L}finally{try{!i&&r["return"]&&r["return"]()}finally{if(M)throw u}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();e.__esModule=!0;var i=function(t,e){this._window=t,this._screen=e};i.prototype.open=function(t,e,i){var M=n(i,2),u=M[0],o=M[1],r={scrollbars:1,resizable:1,menubar:0,toolbar:0,status:0,left:(this._screen.width-u)/2,top:(this._screen.height-o)/2,width:u,height:o},L=Object.keys(r).map(function(t){return t+"="+r[t]}).join(","),j=this._window.open(e,t+(new Date).valueOf(),L);j&&j.focus()},e["default"]=i},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var M=n(121),u=i(M),o=n(5),r=i(o),L=n(119),j=i(L),a=n(110),c=i(a),s=n(111),N=n(1),g=i(N),y=n(117),D=i(y),l=n(106),I=new j["default"](window,screen),p=function(t,e){this._destroyed=!1,this._params=e,this._container=t,this._messenger=e.messenger,this._options=(0,D["default"])(e.defaults,g["default"].getDataset(this._container),e.options),this._initLayout(e.plugins,e.frameUrl),this._bindEvents(e.messenger,e.metrika),(0,l.addClass)(this._container,"ya-share2"),(0,l.addClass)(this._container,"ya-share2_inited"),this._options.get("hooks.onready").call(this)};p.prototype.updateContent=function(t){if(this._destroyed)throw new Error("Could not operate on destroyed block.");this._options.merge({content:t}),this._initLayout(this._params.plugins,this._params.frameUrl)},p.prototype.updateContentByService=function(t){if(this._destroyed)throw new Error("Could not operate on destroyed block.");this._options.merge({contentByService:t}),this._initLayout(this._params.plugins,this._params.frameUrl)},p.prototype.destroy=function(){this._destroyed=!0,(0,l.removeClass)(this._container,"ya-share2_inited"),this._container.innerHTML="",this._container=null,this._messenger.unsubscribe(this),g["default"].off(document.body,"click",this._onBodyClick),g["default"].off(document.body,"keydown",this._onKeydown)},p.prototype._initLayout=function(t,e){var n=this;this._services=this._options.get("theme.services").split(",").filter(function(e){return t[e]}).map(function(e){return{name:e,title:t[e].i18n[n._options.get("theme.lang",e)],location:r["default"].applyTemplate(t[e].config.shareUrl,{title:n._options.get("content.title",e),description:n._options.get("content.description",e),image:n._options.get("content.image",e),url:n._options.get("content.url",e)}),hasCounter:Boolean(t[e].config.countUrl),popupDimensions:t[e].popupDimensions}}),u["default"].update(this._container,"container",[{urls:{content:this._options.get("content.url",name),frame:e},theme:this._options.get("theme"),services:this._services}])},p.prototype._bindEvents=function(t,e){var n=this;this._onBodyClick=this._onBodyClick.bind(this,e),this._onKeydown=this._onKeydown.bind(this),g["default"].on(document.body,"click",this._onBodyClick),g["default"].on(document.body,"keydown",this._onKeydown),t.subscribe(this,function(t){n._options.get("content.url")===t.url&&n.setCount(t.service,t.count)})},p.prototype._onKeydown=function(t){var e=t.which||t.keyCode;switch(e){case 27:this._closePopup()}},p.prototype._onBodyClick=function(t,e){var n=g["default"].getTarget(e),i=c["default"].findOutside(n,{block:"ya-share2"});if(i!==this._container)return void this._closePopup();var M=c["default"].findOutside(n,{block:"ya-share2",elem:"item"});return M?c["default"].getMod(M,"more")?void this._onMoreClick(e,M):c["default"].getMod(M,"copy")?void this._onCopyClick(e):void this._onServiceClick(e,M,t):void 0},p.prototype._onCopyClick=function(t){var e=c["default"].findInside(this._container,{block:"ya-share2",elem:"popup"})[0];(0,l.hasClass)(e,"ya-share2__popup_clipboard")&&(this._closePopup(),(0,s.clip)(this._options.get("content.url"),function(t){prompt("Чтобы скопировать, нажмите ctrl+С и enter",t)})),g["default"].preventDefault(t)},p.prototype._onMoreClick=function(t,e){var n=c["default"].findInside(e,{block:"ya-share2",elem:"popup"})[0];(0,s.copy)()?(0,l.addClass)(n,"ya-share2__popup_clipboard"):(0,l.removeClass)(n,"ya-share2__popup_clipboard"),(0,l.toggleClass)(n,"ya-share2__popup_visible"),g["default"].preventDefault(t)},p.prototype._onServiceClick=function(t,e,n){this._closePopup();var i=c["default"].getMod(e,"service");if(i){var M=this._services.filter(function(t){return t.name===i})[0];if(M){if(this._options.get("hooks.onshare").call(this,M.name),this.setCount(M.name),M.popupDimensions){var u=c["default"].findInside(e,{block:"ya-share2",elem:"link"})[0];g["default"].preventDefault(t),I.open("yaShare2Popup",u.href,M.popupDimensions)}var o=c["default"].findInside(this._container,{block:"ya-share2",elem:"item"}),r=[].indexOf.call(o,e);n.getCounter().reachGoal("BUTTON_CLICK",{serviceName:i,buttonIndex:r})}}},p.prototype.setCount=function(t,e){if(this._options.get("theme.counter")){var n=c["default"].findInside(this._container,{block:"ya-share2",elem:"item",modName:"service",modVal:t})[0];if(!n)return;var i=c["default"].findInside(n,{block:"ya-share2",elem:"counter"})[0];if(!i)return;if(void 0===e){var M=parseInt(g["default"].getTextContent(i)||0,10);isNaN(M)&&(M=0),e=M+1}g["default"].setTextContent(i,e),e>0?(0,l.addClass)(i,"ya-share2__counter_visible"):(0,l.removeClass)(i,"ya-share2__counter_visible")}},p.prototype.isBare=function(){return Boolean(this._options.get("theme.bare"))},p.prototype._closePopup=function(){var t=c["default"].findInside(this._container,{block:"ya-share2",elem:"popup"})[0];(0,l.removeClass)(t,"ya-share2__popup_visible")},e["default"]=p},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function M(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function u(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;e>i;i++)n[i-1]=arguments[i];return(0,r["default"])({block:"ya-share2",elem:t},N[t].apply(N,n))}e.__esModule=!0;var o=n(2),r=i(o),L=n(108),j=i(L),a=n(5),c=i(a),s=new j["default"],N={container:function(t){var e=t.urls,n=t.theme,i=t.services;return{mods:{size:n.size},content:[u("list","horizontal",i,n.limit,e.content,n.copy),n.counter&&u("iframe",e,i)]}},list:function(t,e){var n=arguments.length<=2||void 0===arguments[2]?e.length:arguments[2],i=arguments.length<=3||void 0===arguments[3]?"":arguments[3],M=arguments[4];n===!1&&(n=e.length);var o=e.slice(0,n),r=e.slice(n);return{tag:"ul",mods:{direction:t},content:[o.map(function(t){return u("item",t)}),r.length>0&&u("item_more",r,i,M)]}},item:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return{tag:"li",mods:{service:t.name},content:u("link",t)}},link:function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=t.location,n=t.title,i=t.hasCounter;return{tag:"a",attrs:{href:e||"#",rel:e&&"nofollow",target:e&&"_blank",title:n},content:[u("badge",i),u("title",n)]}},badge:function(t){return{tag:"span",content:[u("icon"),t&&u("counter")]}},icon:function(){return{tag:"span"}},counter:function(){return{tag:"span"}},title:function(t){return{tag:"span",content:t}},item_more:function(t,e,n){return(0,r["default"])(u("item"),{mods:{more:!0},content:[u("link_more"),u("popup",t,e,n)]})},link_more:function(){return(0,r["default"])(u("link"),{mods:{more:!0},content:u("badge_more")})},badge_more:function(){return(0,r["default"])(u("badge"),{mods:{more:!0},content:u("icon_more")})},icon_more:function(){return(0,r["default"])(u("icon"),{mods:{more:!0}})},item_copy:function(t){return(0,r["default"])(u("item"),{mods:{copy:!0},content:[u("link_copy"),u("input_copy",t)]})},link_copy:function(){return(0,r["default"])(u("link"),{mods:{copy:!0},content:u("title","Скопировать ссылку")})},input_copy:function(t){return{tag:"input",attrs:{value:t}}},popup:function(t,e){var n=arguments.length<=2||void 0===arguments[2]?"last":arguments[2],i=u("list","vertical",t);return"first"===n?i.content.unshift(u("item_copy",e)):"last"===n&&i.content.push(u("item_copy",e)),{content:i}},iframe:function(t,e){var n=e.map(function(t){return t.name}).join(",");return{tag:"iframe",attrs:{src:t.frame+"?"+c["default"].serializeParams({url:t.content,services:n}),style:"border: 0; display: none;position: absolute; left: -9999px;"}}}};e["default"]={update:function(t,e,n){t.innerHTML=s.toHtml(u.apply(void 0,[e].concat(M(n))))}}}]);





