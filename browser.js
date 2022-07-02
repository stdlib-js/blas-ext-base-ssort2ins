// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return t({},"x",{}),!0}catch(t){return!1}},e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,f=n.__defineSetter__,u=n.__lookupGetter__,a=n.__lookupSetter__,l=e,c=function(t,r,e){var l,c,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(u.call(t,r)||a.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),y="get"in e,p="set"in e,c&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,e.get),p&&f&&f.call(t,r,e.set),t},y=r()?l:c,p=function(t,r,e){y(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})},b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),s=Object.prototype.toString,d=s,_=function(t){return d.call(t)},m=Object.prototype.hasOwnProperty,v=function(t,r){return null!=t&&m.call(t,r)},w="function"==typeof Symbol?Symbol.toStringTag:"",A=v,g=w,j=s,h=function(t){var r,e,n;if(null==t)return j.call(t);e=t[g],r=A(t,g);try{t[g]=void 0}catch(r){return j.call(t)}return n=j.call(t),r?t[g]=e:delete t[g],n},S=_,F=h,O=b&&"symbol"==typeof Symbol.toStringTag?F:S,T=O,U="function"==typeof Float32Array,E=function(t){return U&&t instanceof Float32Array||"[object Float32Array]"===T(t)},P=Number.POSITIVE_INFINITY,I="function"==typeof Float32Array?Float32Array:null,x=E,N=P,V=I,k="function"==typeof Float32Array?Float32Array:void 0,G=function(){throw new Error("not implemented")},C=function(){var t,r;if("function"!=typeof V)return!1;try{r=new V([1,3.14,-3.14,5e40]),t=x(r)&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===N}catch(r){t=!1}return t}()?k:G,Y=O,q="function"==typeof Uint32Array,z="function"==typeof Uint32Array?Uint32Array:null,B=function(t){return q&&t instanceof Uint32Array||"[object Uint32Array]"===Y(t)},D=z,H="function"==typeof Uint32Array?Uint32Array:void 0,J=function(){throw new Error("not implemented")},K=function(){var t,r;if("function"!=typeof D)return!1;try{r=new D(r=[1,3.14,-3.14,4294967296,4294967297]),t=B(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?H:J,L=new C(1);new K(L.buffer)[0]=4286578688;var M=L[0],Q=function(t){return 0===t&&1/t===M},R=function(t){return t!=t};function W(t,r,e,n,o,i){var f,u,a,l,c,y,p,b,s,d,_,m,v;if(t<=0||0===r)return e;if(r<0&&(n*=-1,i*=-1),i<0?(b=(1-t)*i,s=0):(b=0,s=(t-1)*i),y=b+i,n<0){for(c=0,u=(l=(1-t)*n)+n,v=1;v<t;v++)if(d=e[u],_=o[y],R(d)){for(a=u,p=y;a>c;)e[a]=e[a+n],o[p]=o[p+i],a+=n,p+=i;e[c]=d,o[s]=_}else{for(f=Q(d),a=u-n,p=y-i;a<=l&&(!((m=e[a])<=d)||f&&m===d&&!1===Q(m));)e[a+n]=m,o[p+i]=o[p],a-=n,p-=i;e[a+n]=d,o[p+i]=_,u+=n,y+=i}return e}for(c=(t-1)*n,u=(l=0)+n,v=1;v<t;v++)if(d=e[u],_=o[y],R(d)){for(a=u,p=y;a<c;)e[a]=e[a+n],o[p]=o[p+i],a+=n,p+=i;e[c]=d,o[s]=_}else{for(f=Q(d),a=u-n,p=y-i;a>=l&&(!((m=e[a])<=d)||f&&m===d&&!1===Q(m));)e[a+n]=m,o[p+i]=o[p],a-=n,p-=i;e[a+n]=d,o[p+i]=_,u+=n,y+=i}return e}return p(W,"ndarray",(function(t,r,e,n,o,i,f,u){var a,l,c,y,p,b,s,d,_,m,v,w,A;if(t<=0||0===r)return e;if(r<0&&(o-=(t-1)*(n*=-1),u-=(t-1)*(f*=-1)),p=(y=o)+(t-1)*n,l=y+n,_=(d=u)+(t-1)*f,b=d+f,n<0){for(A=1;A<t;A++)if(m=e[l],v=i[b],R(m)){for(c=l,s=b;c>p;)e[c]=e[c+n],i[s]=i[s+f],c+=n,s+=f;e[p]=m,i[_]=v}else{for(a=Q(m),c=l-n,s=b-f;c<=y&&(!((w=e[c])<=m)||a&&w===m&&!1===Q(w));)e[c+n]=w,i[s+f]=i[s],c-=n,s-=f;e[c+n]=m,i[s+f]=v,l+=n,b+=f}return e}for(A=1;A<t;A++)if(m=e[l],v=i[b],R(m)){for(c=l,s=b;c<p;)e[c]=e[c+n],i[s]=i[s+f],c+=n,s+=f;e[p]=m,i[_]=v}else{for(a=Q(m),c=l-n,s=b-f;c>=y&&(!((w=e[c])<=m)||a&&w===m&&!1===Q(w));)e[c+n]=w,i[s+f]=i[s],c-=n,s-=f;e[c+n]=m,i[s+f]=v,l+=n,b+=f}return e})),W},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).ssort2ins=r();
//# sourceMappingURL=browser.js.map
