// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,f=String.prototype.replace,u=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,y=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":s(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=f.call(i,w,"$1e"),i=f.call(i,b,"e"),i=f.call(i,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=f.call(i,u,"e+0$1"),i=f.call(i,g,"e-0$1"),e.alternate&&(i=f.call(i,d,"$1."),i=f.call(i,y,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===p.call(e.specifier)?p.call(i):l.call(i)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function A(e){return e!=e}function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,i,a,o,s,l,p,f,u,g,d,y;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,p=0;p<e.length;p++)if("string"==typeof(i=e[p]))s+=i;else{if(r=void 0!==i.precision,!(i=E(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+i+"`.");for(i.mapping&&(l=i.mapping),t=i.flags,f=0;f<t.length;f++)switch(a=t.charAt(f)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[l],10),l+=1,A(i.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[l],10),l+=1,A(i.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[l],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1,i.arg=String(i.arg);break;case"c":if(!A(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=A(o)?String(i.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=v(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(u=i.arg,g=i.width,d=i.padRight,y=void 0,(y=g-u.length)<0?u:u=d?u+m(y):m(y)+u)),s+=i.arg||"",l+=1}return s}var k=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function j(e){var r,t,i,n;for(t=[],n=0,i=k.exec(e);i;)(r=e.slice(n,k.lastIndex-i[0].length)).length&&t.push(r),t.push(F(i)),n=k.lastIndex,i=k.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[j(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var I,V=Object.prototype,$=V.toString,O=V.__defineGetter__,U=V.__defineSetter__,C=V.__lookupGetter__,P=V.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(C.call(e,r)||P.call(e,r)?(i=e.__proto__,e.__proto__=V,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&O&&O.call(e,r,t.get),o&&U&&U.call(e,r,t.set),e};var R=I;function Z(e,r){return r>0?0:(1-e)*r}var G,W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),L=Object.prototype.toString,N=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"";G=W&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i,n,a;if(null==e)return L.call(e);t=e[z],a=z,r=null!=(n=e)&&N.call(n,a);try{e[z]=void 0}catch(r){return L.call(e)}return i=L.call(e),r?e[z]=t:delete e[z],i}:function(e){return L.call(e)};var M,Y=G,q="function"==typeof Float32Array,B=Number.POSITIVE_INFINITY,D="function"==typeof Float32Array?Float32Array:null,H="function"==typeof Float32Array?Float32Array:void 0;M=function(){var e,r,t;if("function"!=typeof D)return!1;try{r=new D([1,3.14,-3.14,5e40]),t=r,e=(q&&t instanceof Float32Array||"[object Float32Array]"===Y(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===B}catch(r){e=!1}return e}()?H:function(){throw new Error("not implemented")};var J,K=M,Q="function"==typeof Uint32Array,ee="function"==typeof Uint32Array?Uint32Array:null,re="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var e,r,t;if("function"!=typeof ee)return!1;try{r=new ee(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(Q&&t instanceof Uint32Array||"[object Uint32Array]"===Y(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?re:function(){throw new Error("not implemented")};var te=J,ie=new K(1);new te(ie.buffer)[0]=4286578688;var ne=ie[0];function ae(e){return 0===e&&1/e===ne}function oe(e){return e!=e}function ce(e,r,t,i,n,a,o,c){var s,l,p,f,u,g,d,y,h,b,w,v,m;if(e<=0||0===r)return t;if(r<0&&(n-=(e-1)*(i*=-1),c-=(e-1)*(o*=-1)),u=(f=n)+(e-1)*i,l=f+i,h=(y=c)+(e-1)*o,g=y+o,i<0){for(m=1;m<e;m++)if(b=t[l],w=a[g],oe(b)){for(p=l,d=g;p>u;)t[p]=t[p+i],a[d]=a[d+o],p+=i,d+=o;t[u]=b,a[h]=w}else{for(s=ae(b),p=l-i,d=g-o;p<=f&&(!((v=t[p])<=b)||s&&v===b&&!1===ae(v));)t[p+i]=v,a[d+o]=a[d],p-=i,d-=o;t[p+i]=b,a[d+o]=w,l+=i,g+=o}return t}for(m=1;m<e;m++)if(b=t[l],w=a[g],oe(b)){for(p=l,d=g;p<u;)t[p]=t[p+i],a[d]=a[d+o],p+=i,d+=o;t[u]=b,a[h]=w}else{for(s=ae(b),p=l-i,d=g-o;p>=f&&(!((v=t[p])<=b)||s&&v===b&&!1===ae(v));)t[p+i]=v,a[d+o]=a[d],p-=i,d-=o;t[p+i]=b,a[d+o]=w,l+=i,g+=o}return t}function se(e,r,t,i,n,a){return ce(e,r,t,i,Z(e,i),n,a,Z(e,a))}return R(se,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:ce}),se},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ssort2ins=r();
//# sourceMappingURL=index.js.map
