// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zerof@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nanf@v0.1.0-esm/index.mjs";function t(r,t,f,n,i,o){var a,d,m,l,u,j,p,h,v,b,c,g,x;if(r<=0||0===t)return f;if(t<0&&(n*=-1,o*=-1),o<0?(h=(1-r)*o,v=0):(h=0,v=(r-1)*o),j=h+o,n<0){for(u=0,d=(l=(1-r)*n)+n,x=1;x<r;x++)if(b=f[d],c=i[j],s(b)){for(m=d,p=j;m>u;)f[m]=f[m+n],i[p]=i[p+o],m+=n,p+=o;f[u]=b,i[v]=c}else{for(a=e(b),m=d-n,p=j-o;m<=l&&(!((g=f[m])<=b)||a&&g===b&&!1===e(g));)f[m+n]=g,i[p+o]=i[p],m-=n,p-=o;f[m+n]=b,i[p+o]=c,d+=n,j+=o}return f}for(u=(r-1)*n,d=(l=0)+n,x=1;x<r;x++)if(b=f[d],c=i[j],s(b)){for(m=d,p=j;m<u;)f[m]=f[m+n],i[p]=i[p+o],m+=n,p+=o;f[u]=b,i[v]=c}else{for(a=e(b),m=d-n,p=j-o;m>=l&&(!((g=f[m])<=b)||a&&g===b&&!1===e(g));)f[m+n]=g,i[p+o]=i[p],m-=n,p-=o;f[m+n]=b,i[p+o]=c,d+=n,j+=o}return f}function f(r,t,f,n,i,o,a,d){var m,l,u,j,p,h,v,b,c,g,x,y,z;if(r<=0||0===t)return f;if(t<0&&(i-=(r-1)*(n*=-1),d-=(r-1)*(a*=-1)),p=(j=i)+(r-1)*n,l=j+n,c=(b=d)+(r-1)*a,h=b+a,n<0){for(z=1;z<r;z++)if(g=f[l],x=o[h],s(g)){for(u=l,v=h;u>p;)f[u]=f[u+n],o[v]=o[v+a],u+=n,v+=a;f[p]=g,o[c]=x}else{for(m=e(g),u=l-n,v=h-a;u<=j&&(!((y=f[u])<=g)||m&&y===g&&!1===e(y));)f[u+n]=y,o[v+a]=o[v],u-=n,v-=a;f[u+n]=g,o[v+a]=x,l+=n,h+=a}return f}for(z=1;z<r;z++)if(g=f[l],x=o[h],s(g)){for(u=l,v=h;u<p;)f[u]=f[u+n],o[v]=o[v+a],u+=n,v+=a;f[p]=g,o[c]=x}else{for(m=e(g),u=l-n,v=h-a;u>=j&&(!((y=f[u])<=g)||m&&y===g&&!1===e(y));)f[u+n]=y,o[v+a]=o[v],u-=n,v-=a;f[u+n]=g,o[v+a]=x,l+=n,h+=a}return f}r(t,"ndarray",f);export{t as default,f as ndarray};
//# sourceMappingURL=index.mjs.map
