webpackJsonp([1],[,function(r,o,e){"use strict";function t(r,o,e,t,n,f){var a,i,s,h,l=e.length,u=e[0].length;if(o<1)throw new Error("degree must be at least 1 (linear)");if(o>l-1)throw new Error("degree must be less than or equal to point count - 1");if(!n)for(n=[],a=0;a<l;a++)n[a]=1;if(t){if(t.length!==l+o+1)throw new Error("bad knot vector length")}else{var t=[];for(a=0;a<l+o+1;a++)t[a]=a}var w=[o,t.length-1-o],g=t[w[0]],v=t[w[1]];if((r=r*(v-g)+g)<g||r>v)throw new Error("out of bounds");for(s=w[0];s<w[1]&&!(r>=t[s]&&r<=t[s+1]);s++);var c=[];for(a=0;a<l;a++){for(c[a]=[],i=0;i<u;i++)c[a][i]=e[a][i]*n[a];c[a][u]=n[a]}var b;for(h=1;h<=o+1;h++)for(a=s;a>s-o-1+h;a--)for(b=(r-t[a])/(t[a+o+1-h]-t[a]),i=0;i<u+1;i++)c[a][i]=(1-b)*c[a-1][i]+b*c[a][i];var f=f||[];for(a=0;a<u;a++)f[a]=c[s][a]/c[s][u];return f}r.exports=t}]);
//# sourceMappingURL=vendor.694c3ac0be7b02ec4333.js.map