"use strict";var _=function(o,q){return function(){return q||o((q={exports:{}}).exports,q),q.exports}};var E=_(function(W,A){
var g=require('@stdlib/math-base-assert-is-negative-zerof/dist'),z=require('@stdlib/math-base-assert-is-nanf/dist');function J(o,q,v,r,m,e,n,Z){var b,i,a,h,w,c,u,k,R,f,j,l,p;if(o<=0||q===0)return v;if(q<0&&(r*=-1,n*=-1,m-=(o-1)*r,Z-=(o-1)*n),h=m,w=h+(o-1)*r,i=h+r,k=Z,R=k+(o-1)*n,c=k+n,r<0){for(p=1;p<o;p++)if(f=v[i],j=e[c],z(f)){for(a=i,u=c;a>w;)v[a]=v[a+r],e[u]=e[u+n],a+=r,u+=n;v[w]=f,e[R]=j}else{for(b=g(f),a=i-r,u=c-n;a<=h&&(l=v[a],!(l<=f&&!(b&&l===f&&g(l)===!1)));)v[a+r]=l,e[u+n]=e[u],a-=r,u-=n;v[a+r]=f,e[u+n]=j,i+=r,c+=n}return v}for(p=1;p<o;p++)if(f=v[i],j=e[c],z(f)){for(a=i,u=c;a<w;)v[a]=v[a+r],e[u]=e[u+n],a+=r,u+=n;v[w]=f,e[R]=j}else{for(b=g(f),a=i-r,u=c-n;a>=h&&(l=v[a],!(l<=f&&!(b&&l===f&&g(l)===!1)));)v[a+r]=l,e[u+n]=e[u],a-=r,u-=n;v[a+r]=f,e[u+n]=j,i+=r,c+=n}return v}A.exports=J
});var D=_(function($,C){
var B=require('@stdlib/strided-base-stride2offset/dist'),K=E();function L(o,q,v,r,m,e){return K(o,q,v,r,B(o,r),m,e,B(o,e))}C.exports=L
});var H=_(function(s,G){
var M=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),F=D(),P=E();M(F,"ndarray",P);G.exports=F
});var Q=require("path").join,S=require('@stdlib/utils-try-require/dist'),T=require('@stdlib/assert-is-error/dist'),U=H(),O,I=S(Q(__dirname,"./native.js"));T(I)?O=U:O=I;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
