// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function l(r){return"string"==typeof r}var s=Math.abs,f=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":s(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=u.call(n,b,"$1e"),n=u.call(n,w,"e"),n=u.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=u.call(n,g,"e+0$1"),n=u.call(n,d,"e-0$1"),r.alternate&&(n=u.call(n,y,"$1."),n=u.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===p.call(r.specifier)?p.call(n):f.call(n)}function _(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+_(n):_(n)+r}var E=String.fromCharCode,S=isNaN,k=Array.isArray;function x(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function F(r){var e,t,n,a,o,s,f,p,u;if(!k(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(s="",f=1,p=0;p<r.length;p++)if(l(n=r[p]))s+=n;else{if(e=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,S(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,S(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!S(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=S(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),s+=n.arg||"",f+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function T(r){var e,t,n,i;for(t=[],i=0,n=j.exec(r);n;)(e=r.slice(i,j.lastIndex-n[0].length)).length&&t.push(e),t.push(I(n)),i=j.lastIndex,n=j.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function V(r){return"string"==typeof r}function $(r){var e,t,n;if(!V(r))throw new TypeError($("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=T(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return F.apply(null,t)}var O,U=Object.prototype,C=U.toString,P=U.__defineGetter__,R=U.__defineSetter__,N=U.__lookupGetter__,Z=U.__lookupSetter__;O=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError($("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError($("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(N.call(r,e)||Z.call(r,e)?(n=r.__proto__,r.__proto__=U,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&P&&P.call(r,e,t.get),o&&R&&R.call(r,e,t.set),r};var G=O;var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var L=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var z,M="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof M?M.toStringTag:"";z=W&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return L.call(r);t=r[Y],a=Y,e=null!=(i=r)&&X.call(i,a);try{r[Y]=void 0}catch(e){return L.call(r)}return n=L.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return L.call(r)};var q=z,B="function"==typeof Float32Array;var D=Number.POSITIVE_INFINITY,H="function"==typeof Float32Array?Float32Array:null;var J,K="function"==typeof Float32Array?Float32Array:void 0;J=function(){var r,e,t;if("function"!=typeof H)return!1;try{e=new H([1,3.14,-3.14,5e40]),t=e,r=(B&&t instanceof Float32Array||"[object Float32Array]"===q(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===D}catch(e){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q=J,rr="function"==typeof Uint32Array;var er="function"==typeof Uint32Array?Uint32Array:null;var tr,nr="function"==typeof Uint32Array?Uint32Array:void 0;tr=function(){var r,e,t;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(rr&&t instanceof Uint32Array||"[object Uint32Array]"===q(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var ir=tr,ar=new Q(1);new ir(ar.buffer)[0]=4286578688;var or=ar[0];function cr(r){return 0===r&&1/r===or}function lr(r){return r!=r}function sr(r,e,t,n,i,a){var o,c,l,s,f,p,u,g,d,y,h,v,w;if(r<=0||0===e)return t;if(e<0&&(n*=-1,a*=-1),a<0?(g=(1-r)*a,d=0):(g=0,d=(r-1)*a),p=g+a,n<0){for(f=0,c=(s=(1-r)*n)+n,w=1;w<r;w++)if(y=t[c],h=i[p],lr(y)){for(l=c,u=p;l>f;)t[l]=t[l+n],i[u]=i[u+a],l+=n,u+=a;t[f]=y,i[d]=h}else{for(o=cr(y),l=c-n,u=p-a;l<=s&&(!((v=t[l])<=y)||o&&v===y&&!1===cr(v));)t[l+n]=v,i[u+a]=i[u],l-=n,u-=a;t[l+n]=y,i[u+a]=h,c+=n,p+=a}return t}for(f=(r-1)*n,c=(s=0)+n,w=1;w<r;w++)if(y=t[c],h=i[p],lr(y)){for(l=c,u=p;l<f;)t[l]=t[l+n],i[u]=i[u+a],l+=n,u+=a;t[f]=y,i[d]=h}else{for(o=cr(y),l=c-n,u=p-a;l>=s&&(!((v=t[l])<=y)||o&&v===y&&!1===cr(v));)t[l+n]=v,i[u+a]=i[u],l-=n,u-=a;t[l+n]=y,i[u+a]=h,c+=n,p+=a}return t}function fr(r,e,t,n,i,a,o,c){var l,s,f,p,u,g,d,y,h,v,w,b,m;if(r<=0||0===e)return t;if(e<0&&(i-=(r-1)*(n*=-1),c-=(r-1)*(o*=-1)),u=(p=i)+(r-1)*n,s=p+n,h=(y=c)+(r-1)*o,g=y+o,n<0){for(m=1;m<r;m++)if(v=t[s],w=a[g],lr(v)){for(f=s,d=g;f>u;)t[f]=t[f+n],a[d]=a[d+o],f+=n,d+=o;t[u]=v,a[h]=w}else{for(l=cr(v),f=s-n,d=g-o;f<=p&&(!((b=t[f])<=v)||l&&b===v&&!1===cr(b));)t[f+n]=b,a[d+o]=a[d],f-=n,d-=o;t[f+n]=v,a[d+o]=w,s+=n,g+=o}return t}for(m=1;m<r;m++)if(v=t[s],w=a[g],lr(v)){for(f=s,d=g;f<u;)t[f]=t[f+n],a[d]=a[d+o],f+=n,d+=o;t[u]=v,a[h]=w}else{for(l=cr(v),f=s-n,d=g-o;f>=p&&(!((b=t[f])<=v)||l&&b===v&&!1===cr(b));)t[f+n]=b,a[d+o]=a[d],f-=n,d-=o;t[f+n]=v,a[d+o]=w,s+=n,g+=o}return t}G(sr,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:fr});export{sr as default,fr as ndarray};
//# sourceMappingURL=mod.js.map
