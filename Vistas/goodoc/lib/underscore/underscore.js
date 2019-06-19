(function(){var e=this;var t=e._;var n={};var r=Array.prototype,i=Object.prototype,s=Function.prototype;var o=r.push,u=r.slice,a=r.concat,f=i.toString,l=i.hasOwnProperty;var c=r.forEach,h=r.map,p=r.reduce,d=r.reduceRight,v=r.filter,m=r.every,g=r.some,y=r.indexOf,b=r.lastIndexOf,w=Array.isArray,E=Object.keys,S=s.bind;var x=function(e){if(e instanceof x)return e;if(!(this instanceof x))return new x(e);this._wrapped=e};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=x}exports._=x}else{e._=x}x.VERSION="1.5.2";var T=x.each=x.forEach=function(e,t,r){if(e==null)return;if(c&&e.forEach===c){e.forEach(t,r)}else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++){if(t.call(r,e[i],i,e)===n)return}}else{var o=x.keys(e);for(var i=0,s=o.length;i<s;i++){if(t.call(r,e[o[i]],o[i],e)===n)return}}};x.map=x.collect=function(e,t,n){var r=[];if(e==null)return r;if(h&&e.map===h)return e.map(t,n);T(e,function(e,i,s){r.push(t.call(n,e,i,s))});return r};var N="Reduce of empty array with no initial value";x.reduce=x.foldl=x.inject=function(e,t,n,r){var i=arguments.length>2;if(e==null)e=[];if(p&&e.reduce===p){if(r)t=x.bind(t,r);return i?e.reduce(t,n):e.reduce(t)}T(e,function(e,s,o){if(!i){n=e;i=true}else{n=t.call(r,n,e,s,o)}});if(!i)throw new TypeError(N);return n};x.reduceRight=x.foldr=function(e,t,n,r){var i=arguments.length>2;if(e==null)e=[];if(d&&e.reduceRight===d){if(r)t=x.bind(t,r);return i?e.reduceRight(t,n):e.reduceRight(t)}var s=e.length;if(s!==+s){var o=x.keys(e);s=o.length}T(e,function(u,a,f){a=o?o[--s]:--s;if(!i){n=e[a];i=true}else{n=t.call(r,n,e[a],a,f)}});if(!i)throw new TypeError(N);return n};x.find=x.detect=function(e,t,n){var r;C(e,function(e,i,s){if(t.call(n,e,i,s)){r=e;return true}});return r};x.filter=x.select=function(e,t,n){var r=[];if(e==null)return r;if(v&&e.filter===v)return e.filter(t,n);T(e,function(e,i,s){if(t.call(n,e,i,s))r.push(e)});return r};x.reject=function(e,t,n){return x.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)};x.every=x.all=function(e,t,r){t||(t=x.identity);var i=true;if(e==null)return i;if(m&&e.every===m)return e.every(t,r);T(e,function(e,s,o){if(!(i=i&&t.call(r,e,s,o)))return n});return!!i};var C=x.some=x.any=function(e,t,r){t||(t=x.identity);var i=false;if(e==null)return i;if(g&&e.some===g)return e.some(t,r);T(e,function(e,s,o){if(i||(i=t.call(r,e,s,o)))return n});return!!i};x.contains=x.include=function(e,t){if(e==null)return false;if(y&&e.indexOf===y)return e.indexOf(t)!=-1;return C(e,function(e){return e===t})};x.invoke=function(e,t){var n=u.call(arguments,2);var r=x.isFunction(t);return x.map(e,function(e){return(r?t:e[t]).apply(e,n)})};x.pluck=function(e,t){return x.map(e,function(e){return e[t]})};x.where=function(e,t,n){if(x.isEmpty(t))return n?void 0:[];return x[n?"find":"filter"](e,function(e){for(var n in t){if(t[n]!==e[n])return false}return true})};x.findWhere=function(e,t){return x.where(e,t,true)};x.max=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&e.length<65535){return Math.max.apply(Math,e)}if(!t&&x.isEmpty(e))return-Infinity;var r={computed:-Infinity,value:-Infinity};T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o>r.computed&&(r={value:e,computed:o})});return r.value};x.min=function(e,t,n){if(!t&&x.isArray(e)&&e[0]===+e[0]&&e.length<65535){return Math.min.apply(Math,e)}if(!t&&x.isEmpty(e))return Infinity;var r={computed:Infinity,value:Infinity};T(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o<r.computed&&(r={value:e,computed:o})});return r.value};x.shuffle=function(e){var t;var n=0;var r=[];T(e,function(e){t=x.random(n++);r[n-1]=r[t];r[t]=e});return r};x.sample=function(e,t,n){if(arguments.length<2||n){return e[x.random(e.length-1)]}return x.shuffle(e).slice(0,Math.max(0,t))};var k=function(e){return x.isFunction(e)?e:function(t){return t[e]}};x.sortBy=function(e,t,n){var r=k(t);return x.pluck(x.map(e,function(e,t,i){return{value:e,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria;var r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index-t.index}),"value")};var L=function(e){return function(t,n,r){var i={};var s=n==null?x.identity:k(n);T(t,function(n,o){var u=s.call(r,n,o,t);e(i,u,n)});return i}};x.groupBy=L(function(e,t,n){(x.has(e,t)?e[t]:e[t]=[]).push(n)});x.indexBy=L(function(e,t,n){e[t]=n});x.countBy=L(function(e,t){x.has(e,t)?e[t]++:e[t]=1});x.sortedIndex=function(e,t,n,r){n=n==null?x.identity:k(n);var i=n.call(r,t);var s=0,o=e.length;while(s<o){var u=s+o>>>1;n.call(r,e[u])<i?s=u+1:o=u}return s};x.toArray=function(e){if(!e)return[];if(x.isArray(e))return u.call(e);if(e.length===+e.length)return x.map(e,x.identity);return x.values(e)};x.size=function(e){if(e==null)return 0;return e.length===+e.length?e.length:x.keys(e).length};x.first=x.head=x.take=function(e,t,n){if(e==null)return void 0;return t==null||n?e[0]:u.call(e,0,t)};x.initial=function(e,t,n){return u.call(e,0,e.length-(t==null||n?1:t))};x.last=function(e,t,n){if(e==null)return void 0;if(t==null||n){return e[e.length-1]}else{return u.call(e,Math.max(e.length-t,0))}};x.rest=x.tail=x.drop=function(e,t,n){return u.call(e,t==null||n?1:t)};x.compact=function(e){return x.filter(e,x.identity)};var A=function(e,t,n){if(t&&x.every(e,x.isArray)){return a.apply(n,e)}T(e,function(e){if(x.isArray(e)||x.isArguments(e)){t?o.apply(n,e):A(e,t,n)}else{n.push(e)}});return n};x.flatten=function(e,t){return A(e,t,[])};x.without=function(e){return x.difference(e,u.call(arguments,1))};x.uniq=x.unique=function(e,t,n,r){if(x.isFunction(t)){r=n;n=t;t=false}var i=n?x.map(e,n,r):e;var s=[];var o=[];T(i,function(n,r){if(t?!r||o[o.length-1]!==n:!x.contains(o,n)){o.push(n);s.push(e[r])}});return s};x.union=function(){return x.uniq(x.flatten(arguments,true))};x.intersection=function(e){var t=u.call(arguments,1);return x.filter(x.uniq(e),function(e){return x.every(t,function(t){return x.indexOf(t,e)>=0})})};x.difference=function(e){var t=a.apply(r,u.call(arguments,1));return x.filter(e,function(e){return!x.contains(t,e)})};x.zip=function(){var e=x.max(x.pluck(arguments,"length").concat(0));var t=new Array(e);for(var n=0;n<e;n++){t[n]=x.pluck(arguments,""+n)}return t};x.object=function(e,t){if(e==null)return{};var n={};for(var r=0,i=e.length;r<i;r++){if(t){n[e[r]]=t[r]}else{n[e[r][0]]=e[r][1]}}return n};x.indexOf=function(e,t,n){if(e==null)return-1;var r=0,i=e.length;if(n){if(typeof n=="number"){r=n<0?Math.max(0,i+n):n}else{r=x.sortedIndex(e,t);return e[r]===t?r:-1}}if(y&&e.indexOf===y)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1};x.lastIndexOf=function(e,t,n){if(e==null)return-1;var r=n!=null;if(b&&e.lastIndexOf===b){return r?e.lastIndexOf(t,n):e.lastIndexOf(t)}var i=r?n:e.length;while(i--)if(e[i]===t)return i;return-1};x.range=function(e,t,n){if(arguments.length<=1){t=e||0;e=0}n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0);var i=0;var s=new Array(r);while(i<r){s[i++]=e;e+=n}return s};var O=function(){};x.bind=function(e,t){var n,r;if(S&&e.bind===S)return S.apply(e,u.call(arguments,1));if(!x.isFunction(e))throw new TypeError;n=u.call(arguments,2);return r=function(){if(!(this instanceof r))return e.apply(t,n.concat(u.call(arguments)));O.prototype=e.prototype;var i=new O;O.prototype=null;var s=e.apply(i,n.concat(u.call(arguments)));if(Object(s)===s)return s;return i}};x.partial=function(e){var t=u.call(arguments,1);return function(){return e.apply(this,t.concat(u.call(arguments)))}};x.bindAll=function(e){var t=u.call(arguments,1);if(t.length===0)throw new Error("bindAll must be passed function names");T(t,function(t){e[t]=x.bind(e[t],e)});return e};x.memoize=function(e,t){var n={};t||(t=x.identity);return function(){var r=t.apply(this,arguments);return x.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}};x.delay=function(e,t){var n=u.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)};x.defer=function(e){return x.delay.apply(x,[e,1].concat(u.call(arguments,1)))};x.throttle=function(e,t,n){var r,i,s;var o=null;var u=0;n||(n={});var a=function(){u=n.leading===false?0:new Date;o=null;s=e.apply(r,i)};return function(){var f=new Date;if(!u&&n.leading===false)u=f;var l=t-(f-u);r=this;i=arguments;if(l<=0){clearTimeout(o);o=null;u=f;s=e.apply(r,i)}else if(!o&&n.trailing!==false){o=setTimeout(a,l)}return s}};x.debounce=function(e,t,n){var r,i,s,o,u;return function(){s=this;i=arguments;o=new Date;var a=function(){var f=new Date-o;if(f<t){r=setTimeout(a,t-f)}else{r=null;if(!n)u=e.apply(s,i)}};var f=n&&!r;if(!r){r=setTimeout(a,t)}if(f)u=e.apply(s,i);return u}};x.once=function(e){var t=false,n;return function(){if(t)return n;t=true;n=e.apply(this,arguments);e=null;return n}};x.wrap=function(e,t){return function(){var n=[e];o.apply(n,arguments);return t.apply(this,n)}};x.compose=function(){var e=arguments;return function(){var t=arguments;for(var n=e.length-1;n>=0;n--){t=[e[n].apply(this,t)]}return t[0]}};x.after=function(e,t){return function(){if(--e<1){return t.apply(this,arguments)}}};x.keys=E||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)if(x.has(e,n))t.push(n);return t};x.values=function(e){var t=x.keys(e);var n=t.length;var r=new Array(n);for(var i=0;i<n;i++){r[i]=e[t[i]]}return r};x.pairs=function(e){var t=x.keys(e);var n=t.length;var r=new Array(n);for(var i=0;i<n;i++){r[i]=[t[i],e[t[i]]]}return r};x.invert=function(e){var t={};var n=x.keys(e);for(var r=0,i=n.length;r<i;r++){t[e[n[r]]]=n[r]}return t};x.functions=x.methods=function(e){var t=[];for(var n in e){if(x.isFunction(e[n]))t.push(n)}return t.sort()};x.extend=function(e){T(u.call(arguments,1),function(t){if(t){for(var n in t){e[n]=t[n]}}});return e};x.pick=function(e){var t={};var n=a.apply(r,u.call(arguments,1));T(n,function(n){if(n in e)t[n]=e[n]});return t};x.omit=function(e){var t={};var n=a.apply(r,u.call(arguments,1));for(var i in e){if(!x.contains(n,i))t[i]=e[i]}return t};x.defaults=function(e){T(u.call(arguments,1),function(t){if(t){for(var n in t){if(e[n]===void 0)e[n]=t[n]}}});return e};x.clone=function(e){if(!x.isObject(e))return e;return x.isArray(e)?e.slice():x.extend({},e)};x.tap=function(e,t){t(e);return e};var M=function(e,t,n,r){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;if(e instanceof x)e=e._wrapped;if(t instanceof x)t=t._wrapped;var i=f.call(e);if(i!=f.call(t))return false;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if(typeof e!="object"||typeof t!="object")return false;var s=n.length;while(s--){if(n[s]==e)return r[s]==t}var o=e.constructor,u=t.constructor;if(o!==u&&!(x.isFunction(o)&&o instanceof o&&x.isFunction(u)&&u instanceof u)){return false}n.push(e);r.push(t);var a=0,l=true;if(i=="[object Array]"){a=e.length;l=a==t.length;if(l){while(a--){if(!(l=M(e[a],t[a],n,r)))break}}}else{for(var c in e){if(x.has(e,c)){a++;if(!(l=x.has(t,c)&&M(e[c],t[c],n,r)))break}}if(l){for(c in t){if(x.has(t,c)&&!(a--))break}l=!a}}n.pop();r.pop();return l};x.isEqual=function(e,t){return M(e,t,[],[])};x.isEmpty=function(e){if(e==null)return true;if(x.isArray(e)||x.isString(e))return e.length===0;for(var t in e)if(x.has(e,t))return false;return true};x.isElement=function(e){return!!(e&&e.nodeType===1)};x.isArray=w||function(e){return f.call(e)=="[object Array]"};x.isObject=function(e){return e===Object(e)};T(["Arguments","Function","String","Number","Date","RegExp"],function(e){x["is"+e]=function(t){return f.call(t)=="[object "+e+"]"}});if(!x.isArguments(arguments)){x.isArguments=function(e){return!!(e&&x.has(e,"callee"))}}if(typeof /./!=="function"){x.isFunction=function(e){return typeof e==="function"}}x.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))};x.isNaN=function(e){return x.isNumber(e)&&e!=+e};x.isBoolean=function(e){return e===true||e===false||f.call(e)=="[object Boolean]"};x.isNull=function(e){return e===null};x.isUndefined=function(e){return e===void 0};x.has=function(e,t){return l.call(e,t)};x.noConflict=function(){e._=t;return this};x.identity=function(e){return e};x.times=function(e,t,n){var r=Array(Math.max(0,e));for(var i=0;i<e;i++)r[i]=t.call(n,i);return r};x.random=function(e,t){if(t==null){t=e;e=0}return e+Math.floor(Math.random()*(t-e+1))};var _={escape:{"&":"&","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};_.unescape=x.invert(_.escape);var D={escape:new RegExp("["+x.keys(_.escape).join("")+"]","g"),unescape:new RegExp("("+x.keys(_.unescape).join("|")+")","g")};x.each(["escape","unescape"],function(e){x[e]=function(t){if(t==null)return"";return(""+t).replace(D[e],function(t){return _[e][t]})}});x.result=function(e,t){if(e==null)return void 0;var n=e[t];return x.isFunction(n)?n.call(e):n};x.mixin=function(e){T(x.functions(e),function(t){var n=x[t]=e[t];x.prototype[t]=function(){var e=[this._wrapped];o.apply(e,arguments);return F.call(this,n.apply(x,e))}})};var P=0;x.uniqueId=function(e){var t=++P+"";return e?e+t:t};x.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var H=/(.)^/;var B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"};var j=/\\|'|\r|\n|\t|\u2028|\u2029/g;x.template=function(e,t,n){var r;n=x.defaults({},n,x.templateSettings);var i=new RegExp([(n.escape||H).source,(n.interpolate||H).source,(n.evaluate||H).source].join("|")+"|$","g");var s=0;var o="__p+='";e.replace(i,function(t,n,r,i,u){o+=e.slice(s,u).replace(j,function(e){return"\\"+B[e]});if(n){o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"}if(r){o+="'+\n((__t=("+r+"))==null?'':__t)+\n'"}if(i){o+="';\n"+i+"\n__p+='"}s=u+t.length;return t});o+="';\n";if(!n.variable)o="with(obj||{}){\n"+o+"}\n";o="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{r=new Function(n.variable||"obj","_",o)}catch(u){u.source=o;throw u}if(t)return r(t,x);var a=function(e){return r.call(this,e,x)};a.source="function("+(n.variable||"obj")+"){\n"+o+"}";return a};x.chain=function(e){return x(e).chain()};var F=function(e){return this._chain?x(e).chain():e};x.mixin(x);T(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];x.prototype[e]=function(){var n=this._wrapped;t.apply(n,arguments);if((e=="shift"||e=="splice")&&n.length===0)delete n[0];return F.call(this,n)}});T(["concat","join","slice"],function(e){var t=r[e];x.prototype[e]=function(){return F.call(this,t.apply(this._wrapped,arguments))}});x.extend(x.prototype,{chain:function(){this._chain=true;return this},value:function(){return this._wrapped}})}).call(this)