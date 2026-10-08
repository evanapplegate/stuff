import{aj as Lt,M as mo,bI as ar,bA as fo,ae as et,aX as Qe,k as po,bo as br,b6 as go,br as _o,$ as To,bq as yo,W as Ne,O as lt,w as So,aY as zt,x as pt,ai as gt,b0 as fn,D as yn,v as Kn,bn as he,aq as Sn,as as Eo,aO as Io,b3 as vo,C as Ao,aZ as Ro,R as xo,u as wo,aD as bo,A as Nr,aJ as dn,bz as No,n as Jt,aE as ei,bw as Co,bt as Oo}from"./Geodetic-FFfs8v2e.js";import{z as Rt}from"./index-DRKMCDNV.js";import{b as Uo,I as bn,c as Nn,g as Mo,f as Do,e as Po,h as Lo,T as Cn,m as On,S as Tt,d as yt,i as St,n as xt,_ as wt}from"./StarsMaterial-Dbo9ZMjT.js";import{r as Fo}from"./types-CW8VKOeh.js";class Bo extends Lt{load(t,i,s,c){const a=new mo(this.manager);a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(t,h=>{ar(h instanceof ArrayBuffer);try{i(h)}catch(f){c!=null?c(f):console.error(f),this.manager.itemError(t)}},s,c)}}function ti(r){return r instanceof fo?r.getContext().getExtension("OES_texture_float_linear")!=null:r.backend.hasFeature?.("float32-filterable")??!1}const Ho="This is not an object",Go="This is not a Float16Array object",Cr="This constructor is not a subclass of Float16Array",ni="The constructor property value is not an object",ko="Species constructor didn't return TypedArray object",zo="Derived constructor created TypedArray object which was too small length",Qt="Attempting to access detached ArrayBuffer",$n="Cannot convert undefined or null to object",Jn="Cannot mix BigInt and other types, use explicit conversions",Or="@@iterator property is not callable",Ur="Reduce of empty array with no initial value",Zo="The comparison function must be either a function or undefined",kn="Offset is out of bounds";function j(r){return(t,...i)=>De(r,t,i)}function Ft(r,t){return j(Mt(r,t).get)}const{apply:De,construct:Kt,defineProperty:Mr,get:zn,getOwnPropertyDescriptor:Mt,getPrototypeOf:tn,has:Qn,ownKeys:ri,set:Dr,setPrototypeOf:ii}=Reflect,Yo=Proxy,{EPSILON:Wo,MAX_SAFE_INTEGER:Pr,isFinite:oi,isNaN:Dt}=Number,{iterator:tt,species:Xo,toStringTag:cr,for:qo}=Symbol,Pt=Object,{create:Un,defineProperty:nn,freeze:Vo,is:Lr}=Pt,jn=Pt.prototype,Ko=jn.__lookupGetter__?j(jn.__lookupGetter__):(r,t)=>{if(r==null)throw ne($n);let i=Pt(r);do{const s=Mt(i,t);if(s!==void 0)return it(s,"get")?s.get:void 0}while((i=tn(i))!==null)},it=Pt.hasOwn||j(jn.hasOwnProperty),si=Array,ai=si.isArray,Mn=si.prototype,$o=j(Mn.join),Jo=j(Mn.push),Qo=j(Mn.toLocaleString),ur=Mn[tt],jo=j(ur),{abs:es,trunc:ci}=Math,Dn=ArrayBuffer,ts=Dn.isView,ui=Dn.prototype,ns=j(ui.slice),rs=Ft(ui,"byteLength"),er=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null,is=er&&Ft(er.prototype,"byteLength"),lr=tn(Uint8Array),os=lr.from,Se=lr.prototype,ss=Se[tt],as=j(Se.keys),cs=j(Se.values),us=j(Se.entries),ls=j(Se.set),Fr=j(Se.reverse),hs=j(Se.fill),ms=j(Se.copyWithin),Br=j(Se.sort),Zt=j(Se.slice),fs=j(Se.subarray),ye=Ft(Se,"buffer"),_t=Ft(Se,"byteOffset"),X=Ft(Se,"length"),li=Ft(Se,cr),ds=Uint8Array,Ge=Uint16Array,Hr=(...r)=>De(os,Ge,r),hr=Uint32Array,ps=Float32Array,Et=tn([][tt]()),Pn=j(Et.next),gs=j((function*(){})().next),_s=tn(Et),Ts=DataView.prototype,ys=j(Ts.getUint16),ne=TypeError,Zn=RangeError,hi=WeakSet,mi=hi.prototype,Ss=j(mi.add),Es=j(mi.has),Ln=WeakMap,mr=Ln.prototype,En=j(mr.get),Is=j(mr.has),fr=j(mr.set),fi=new Ln,vs=Un(null,{next:{value:function(){const t=En(fi,this);return Pn(t)}},[tt]:{value:function(){return this}}});function $t(r){if(r[tt]===ur&&Et.next===Pn)return r;const t=Un(vs);return fr(fi,t,jo(r)),t}const di=new Ln,pi=Un(_s,{next:{value:function(){const t=En(di,this);return gs(t)},writable:!0,configurable:!0}});for(const r of ri(Et))r!=="next"&&nn(pi,r,Mt(Et,r));function Gr(r){const t=Un(pi);return fr(di,t,r),t}function In(r){return r!==null&&typeof r=="object"||typeof r=="function"}function kr(r){return r!==null&&typeof r=="object"}function vn(r){return li(r)!==void 0}function tr(r){const t=li(r);return t==="BigInt64Array"||t==="BigUint64Array"}function As(r){try{return ai(r)?!1:(rs(r),!0)}catch{return!1}}function gi(r){if(er===null)return!1;try{return is(r),!0}catch{return!1}}function Rs(r){return As(r)||gi(r)}function zr(r){return ai(r)?r[tt]===ur&&Et.next===Pn:!1}function xs(r){return vn(r)?r[tt]===ss&&Et.next===Pn:!1}function pn(r){if(typeof r!="string")return!1;const t=+r;return r!==t+""||!oi(t)?!1:t===ci(t)}const An=qo("__Float16Array__");function ws(r){if(!kr(r))return!1;const t=tn(r);if(!kr(t))return!1;const i=t.constructor;if(i===void 0)return!1;if(!In(i))throw ne(ni);return Qn(i,An)}const nr=1/Wo;function bs(r){return r+nr-nr}const _i=6103515625e-14,Ns=65504,Ti=.0009765625,Zr=Ti*_i,Cs=Ti*nr;function Os(r){const t=+r;if(!oi(t)||t===0)return t;const i=t>0?1:-1,s=es(t);if(s<_i)return i*bs(s/Zr)*Zr;const c=(1+Cs)*s,a=c-(c-s);return a>Ns||Dt(a)?i*(1/0):i*a}const yi=new Dn(4),Si=new ps(yi),Ei=new hr(yi),Xe=new Ge(512),qe=new ds(512);for(let r=0;r<256;++r){const t=r-127;t<-24?(Xe[r]=0,Xe[r|256]=32768,qe[r]=24,qe[r|256]=24):t<-14?(Xe[r]=1024>>-t-14,Xe[r|256]=1024>>-t-14|32768,qe[r]=-t-1,qe[r|256]=-t-1):t<=15?(Xe[r]=t+15<<10,Xe[r|256]=t+15<<10|32768,qe[r]=13,qe[r|256]=13):t<128?(Xe[r]=31744,Xe[r|256]=64512,qe[r]=24,qe[r|256]=24):(Xe[r]=31744,Xe[r|256]=64512,qe[r]=13,qe[r|256]=13)}function Je(r){Si[0]=Os(r);const t=Ei[0],i=t>>23&511;return Xe[i]+((t&8388607)>>qe[i])}const dr=new hr(2048);for(let r=1;r<1024;++r){let t=r<<13,i=0;for(;(t&8388608)===0;)t<<=1,i-=8388608;t&=-8388609,i+=947912704,dr[r]=t|i}for(let r=1024;r<2048;++r)dr[r]=939524096+(r-1024<<13);const Bt=new hr(64);for(let r=1;r<31;++r)Bt[r]=r<<23;Bt[31]=1199570944;Bt[32]=2147483648;for(let r=33;r<63;++r)Bt[r]=2147483648+(r-32<<23);Bt[63]=3347054592;const Ii=new Ge(64);for(let r=1;r<64;++r)r!==32&&(Ii[r]=1024);function q(r){const t=r>>10;return Ei[0]=dr[Ii[t]+(r&1023)]+Bt[t],Si[0]}function rt(r){const t=+r;return Dt(t)||t===0?0:ci(t)}function Yn(r){const t=rt(r);return t<0?0:t<Pr?t:Pr}function gn(r,t){if(!In(r))throw ne(Ho);const i=r.constructor;if(i===void 0)return t;if(!In(i))throw ne(ni);const s=i[Xo];return s??t}function jt(r){if(gi(r))return!1;try{return ns(r,0,0),!1}catch{}return!0}function Yr(r,t){const i=Dt(r),s=Dt(t);if(i&&s)return 0;if(i)return 1;if(s||r<t)return-1;if(r>t)return 1;if(r===0&&t===0){const c=Lr(r,0),a=Lr(t,0);if(!c&&a)return-1;if(c&&!a)return 1}return 0}const pr=2,Rn=new Ln;function Ot(r){return Is(Rn,r)||!ts(r)&&ws(r)}function W(r){if(!Ot(r))throw ne(Go)}function _n(r,t){const i=Ot(r),s=vn(r);if(!i&&!s)throw ne(ko);if(typeof t=="number"){let c;if(i){const a=B(r);c=X(a)}else c=X(r);if(c<t)throw ne(zo)}if(tr(r))throw ne(Jn)}function B(r){const t=En(Rn,r);if(t!==void 0){const c=ye(t);if(jt(c))throw ne(Qt);return t}const i=r.buffer;if(jt(i))throw ne(Qt);const s=Kt($,[i,r.byteOffset,r.length],r.constructor);return En(Rn,s)}function Wr(r){const t=X(r),i=[];for(let s=0;s<t;++s)i[s]=q(r[s]);return i}const vi=new hi;for(const r of ri(Se)){if(r===cr)continue;const t=Mt(Se,r);it(t,"get")&&typeof t.get=="function"&&Ss(vi,t.get)}const Us=Vo({get(r,t,i){return pn(t)&&it(r,t)?q(zn(r,t)):Es(vi,Ko(r,t))?zn(r,t):zn(r,t,i)},set(r,t,i,s){return pn(t)&&it(r,t)?Dr(r,t,Je(i)):Dr(r,t,i,s)},getOwnPropertyDescriptor(r,t){if(pn(t)&&it(r,t)){const i=Mt(r,t);return i.value=q(i.value),i}return Mt(r,t)},defineProperty(r,t,i){return pn(t)&&it(r,t)&&it(i,"value")&&(i.value=Je(i.value)),Mr(r,t,i)}});class ${constructor(t,i,s){let c;if(Ot(t))c=Kt(Ge,[B(t)],new.target);else if(In(t)&&!Rs(t)){let h,f;if(vn(t)){h=t,f=X(t);const S=ye(t);if(jt(S))throw ne(Qt);if(tr(t))throw ne(Jn);const C=new Dn(f*pr);c=Kt(Ge,[C],new.target)}else{const S=t[tt];if(S!=null&&typeof S!="function")throw ne(Or);S!=null?zr(t)?(h=t,f=t.length):(h=[...t],f=h.length):(h=t,f=Yn(h.length)),c=Kt(Ge,[f],new.target)}for(let S=0;S<f;++S)c[S]=Je(h[S])}else c=Kt(Ge,arguments,new.target);const a=new Yo(c,Us);return fr(Rn,a,c),a}static from(t,...i){const s=this;if(!Qn(s,An))throw ne(Cr);if(s===$){if(Ot(t)&&i.length===0){const E=B(t),w=new Ge(ye(E),_t(E),X(E));return new $(ye(Zt(w)))}if(i.length===0)return new $(ye(Hr(t,Je)));const S=i[0],C=i[1];return new $(ye(Hr(t,function(E,...w){return Je(De(S,this,[E,...$t(w)]))},C)))}let c,a;const h=t[tt];if(h!=null&&typeof h!="function")throw ne(Or);if(h!=null)zr(t)?(c=t,a=t.length):xs(t)?(c=t,a=X(t)):(c=[...t],a=c.length);else{if(t==null)throw ne($n);c=Pt(t),a=Yn(c.length)}const f=new s(a);if(i.length===0)for(let S=0;S<a;++S)f[S]=c[S];else{const S=i[0],C=i[1];for(let E=0;E<a;++E)f[E]=De(S,C,[c[E],E])}return f}static of(...t){const i=this;if(!Qn(i,An))throw ne(Cr);const s=t.length;if(i===$){const a=new $(s),h=B(a);for(let f=0;f<s;++f)h[f]=Je(t[f]);return a}const c=new i(s);for(let a=0;a<s;++a)c[a]=t[a];return c}keys(){W(this);const t=B(this);return as(t)}values(){W(this);const t=B(this);return Gr((function*(){for(const i of cs(t))yield q(i)})())}entries(){W(this);const t=B(this);return Gr((function*(){for(const[i,s]of us(t))yield[i,q(s)]})())}at(t){W(this);const i=B(this),s=X(i),c=rt(t),a=c>=0?c:s+c;if(!(a<0||a>=s))return q(i[a])}with(t,i){W(this);const s=B(this),c=X(s),a=rt(t),h=a>=0?a:c+a,f=+i;if(h<0||h>=c)throw Zn(kn);const S=new Ge(ye(s),_t(s),X(s)),C=new $(ye(Zt(S))),E=B(C);return E[h]=Je(f),C}map(t,...i){W(this);const s=B(this),c=X(s),a=i[0],h=gn(s,$);if(h===$){const S=new $(c),C=B(S);for(let E=0;E<c;++E){const w=q(s[E]);C[E]=Je(De(t,a,[w,E,this]))}return S}const f=new h(c);_n(f,c);for(let S=0;S<c;++S){const C=q(s[S]);f[S]=De(t,a,[C,S,this])}return f}filter(t,...i){W(this);const s=B(this),c=X(s),a=i[0],h=[];for(let C=0;C<c;++C){const E=q(s[C]);De(t,a,[E,C,this])&&Jo(h,E)}const f=gn(s,$),S=new f(h);return _n(S),S}reduce(t,...i){W(this);const s=B(this),c=X(s);if(c===0&&i.length===0)throw ne(Ur);let a,h;i.length===0?(a=q(s[0]),h=1):(a=i[0],h=0);for(let f=h;f<c;++f)a=t(a,q(s[f]),f,this);return a}reduceRight(t,...i){W(this);const s=B(this),c=X(s);if(c===0&&i.length===0)throw ne(Ur);let a,h;i.length===0?(a=q(s[c-1]),h=c-2):(a=i[0],h=c-1);for(let f=h;f>=0;--f)a=t(a,q(s[f]),f,this);return a}forEach(t,...i){W(this);const s=B(this),c=X(s),a=i[0];for(let h=0;h<c;++h)De(t,a,[q(s[h]),h,this])}find(t,...i){W(this);const s=B(this),c=X(s),a=i[0];for(let h=0;h<c;++h){const f=q(s[h]);if(De(t,a,[f,h,this]))return f}}findIndex(t,...i){W(this);const s=B(this),c=X(s),a=i[0];for(let h=0;h<c;++h){const f=q(s[h]);if(De(t,a,[f,h,this]))return h}return-1}findLast(t,...i){W(this);const s=B(this),c=X(s),a=i[0];for(let h=c-1;h>=0;--h){const f=q(s[h]);if(De(t,a,[f,h,this]))return f}}findLastIndex(t,...i){W(this);const s=B(this),c=X(s),a=i[0];for(let h=c-1;h>=0;--h){const f=q(s[h]);if(De(t,a,[f,h,this]))return h}return-1}every(t,...i){W(this);const s=B(this),c=X(s),a=i[0];for(let h=0;h<c;++h)if(!De(t,a,[q(s[h]),h,this]))return!1;return!0}some(t,...i){W(this);const s=B(this),c=X(s),a=i[0];for(let h=0;h<c;++h)if(De(t,a,[q(s[h]),h,this]))return!0;return!1}set(t,...i){W(this);const s=B(this),c=rt(i[0]);if(c<0)throw Zn(kn);if(t==null)throw ne($n);if(tr(t))throw ne(Jn);if(Ot(t))return ls(B(this),B(t),c);if(vn(t)){const S=ye(t);if(jt(S))throw ne(Qt)}const a=X(s),h=Pt(t),f=Yn(h.length);if(c===1/0||f+c>a)throw Zn(kn);for(let S=0;S<f;++S)s[S+c]=Je(h[S])}reverse(){W(this);const t=B(this);return Fr(t),this}toReversed(){W(this);const t=B(this),i=new Ge(ye(t),_t(t),X(t)),s=new $(ye(Zt(i))),c=B(s);return Fr(c),s}fill(t,...i){W(this);const s=B(this);return hs(s,Je(t),...$t(i)),this}copyWithin(t,i,...s){W(this);const c=B(this);return ms(c,t,i,...$t(s)),this}sort(t){W(this);const i=B(this),s=t!==void 0?t:Yr;return Br(i,(c,a)=>s(q(c),q(a))),this}toSorted(t){W(this);const i=B(this);if(t!==void 0&&typeof t!="function")throw new ne(Zo);const s=t!==void 0?t:Yr,c=new Ge(ye(i),_t(i),X(i)),a=new $(ye(Zt(c))),h=B(a);return Br(h,(f,S)=>s(q(f),q(S))),a}slice(t,i){W(this);const s=B(this),c=gn(s,$);if(c===$){const me=new Ge(ye(s),_t(s),X(s));return new $(ye(Zt(me,t,i)))}const a=X(s),h=rt(t),f=i===void 0?a:rt(i);let S;h===-1/0?S=0:h<0?S=a+h>0?a+h:0:S=a<h?a:h;let C;f===-1/0?C=0:f<0?C=a+f>0?a+f:0:C=a<f?a:f;const E=C-S>0?C-S:0,w=new c(E);if(_n(w,E),E===0)return w;const F=ye(s);if(jt(F))throw ne(Qt);let K=0;for(;S<C;)w[K]=q(s[S]),++S,++K;return w}subarray(t,i){W(this);const s=B(this),c=gn(s,$),a=new Ge(ye(s),_t(s),X(s)),h=fs(a,t,i),f=new c(ye(h),_t(h),X(h));return _n(f),f}indexOf(t,...i){W(this);const s=B(this),c=X(s);let a=rt(i[0]);if(a===1/0)return-1;a<0&&(a+=c,a<0&&(a=0));for(let h=a;h<c;++h)if(it(s,h)&&q(s[h])===t)return h;return-1}lastIndexOf(t,...i){W(this);const s=B(this),c=X(s);let a=i.length>=1?rt(i[0]):c-1;if(a===-1/0)return-1;a>=0?a=a<c-1?a:c-1:a+=c;for(let h=a;h>=0;--h)if(it(s,h)&&q(s[h])===t)return h;return-1}includes(t,...i){W(this);const s=B(this),c=X(s);let a=rt(i[0]);if(a===1/0)return!1;a<0&&(a+=c,a<0&&(a=0));const h=Dt(t);for(let f=a;f<c;++f){const S=q(s[f]);if(h&&Dt(S)||S===t)return!0}return!1}join(t){W(this);const i=B(this),s=Wr(i);return $o(s,t)}toLocaleString(...t){W(this);const i=B(this),s=Wr(i);return Qo(s,...$t(t))}get[cr](){if(Ot(this))return"Float16Array"}}nn($,"BYTES_PER_ELEMENT",{value:pr});nn($,An,{});ii($,lr);const xn=$.prototype;nn(xn,"BYTES_PER_ELEMENT",{value:pr});nn(xn,tt,{value:xn.values,writable:!0,configurable:!0});ii(xn,Se);function Ms(r,t,...i){return q(ys(r,t,...$t(i)))}class Ds extends Lt{constructor(t,i){super(i),this.parser=t}load(t,i,s,c){const a=new Bo(this.manager);a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(this.withCredentials),a.load(t,h=>{try{i(this.parser(h))}catch(f){c!=null?c(f):console.error(f),this.manager.itemError(t)}},s,c)}}function Ps(r){const t=r instanceof Int8Array?po:r instanceof Uint8Array?br:r instanceof Uint8ClampedArray?br:r instanceof Int16Array?go:r instanceof Uint16Array?_o:r instanceof Int32Array?To:r instanceof Uint32Array?yo:r instanceof $?Ne:r instanceof Float32Array?lt:r instanceof Float64Array?lt:null;return ar(t!=null),t}class Yt extends Lt{constructor(t,i,s={},c){super(c),this.textureClass=t,this.parser=i,this.options={format:Qe,minFilter:et,magFilter:et,...s}}load(t,i,s,c){const a=new this.textureClass,h=new Ds(this.parser,this.manager);return h.setRequestHeader(this.requestHeader),h.setPath(this.path),h.setWithCredentials(this.withCredentials),h.load(t,f=>{a.image.data=f instanceof $?new Uint16Array(f.buffer):f;const{width:S,height:C,depth:E,...w}=this.options;S!=null&&(a.image.width=S),C!=null&&(a.image.height=C),"depth"in a.image&&E!=null&&(a.image.depth=E),a.type=Ps(f),Object.assign(a,w),a.needsUpdate=!0,i?.(a)},s,c),a}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Ce=Uint8Array,ke=Uint16Array,gr=Int32Array,Fn=new Ce([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Bn=new Ce([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),rr=new Ce([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ai=function(r,t){for(var i=new ke(31),s=0;s<31;++s)i[s]=t+=1<<r[s-1];for(var c=new gr(i[30]),s=1;s<30;++s)for(var a=i[s];a<i[s+1];++a)c[a]=a-i[s]<<5|s;return{b:i,r:c}},Ri=Ai(Fn,2),xi=Ri.b,ir=Ri.r;xi[28]=258,ir[258]=28;var wi=Ai(Bn,0),Ls=wi.b,Xr=wi.r,or=new ke(32768);for(var ee=0;ee<32768;++ee){var ut=(ee&43690)>>1|(ee&21845)<<1;ut=(ut&52428)>>2|(ut&13107)<<2,ut=(ut&61680)>>4|(ut&3855)<<4,or[ee]=((ut&65280)>>8|(ut&255)<<8)>>1}var je=(function(r,t,i){for(var s=r.length,c=0,a=new ke(t);c<s;++c)r[c]&&++a[r[c]-1];var h=new ke(t);for(c=1;c<t;++c)h[c]=h[c-1]+a[c-1]<<1;var f;if(i){f=new ke(1<<t);var S=15-t;for(c=0;c<s;++c)if(r[c])for(var C=c<<4|r[c],E=t-r[c],w=h[r[c]-1]++<<E,F=w|(1<<E)-1;w<=F;++w)f[or[w]>>S]=C}else for(f=new ke(s),c=0;c<s;++c)r[c]&&(f[c]=or[h[r[c]-1]++]>>15-r[c]);return f}),ht=new Ce(288);for(var ee=0;ee<144;++ee)ht[ee]=8;for(var ee=144;ee<256;++ee)ht[ee]=9;for(var ee=256;ee<280;++ee)ht[ee]=7;for(var ee=280;ee<288;++ee)ht[ee]=8;var en=new Ce(32);for(var ee=0;ee<32;++ee)en[ee]=5;var Fs=je(ht,9,0),Bs=je(ht,9,1),Hs=je(en,5,0),Gs=je(en,5,1),Wn=function(r){for(var t=r[0],i=1;i<r.length;++i)r[i]>t&&(t=r[i]);return t},We=function(r,t,i){var s=t/8|0;return(r[s]|r[s+1]<<8)>>(t&7)&i},Xn=function(r,t){var i=t/8|0;return(r[i]|r[i+1]<<8|r[i+2]<<16)>>(t&7)},_r=function(r){return(r+7)/8|0},bi=function(r,t,i){return(i==null||i>r.length)&&(i=r.length),new Ce(r.subarray(t,i))},ks=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ve=function(r,t,i){var s=new Error(t||ks[r]);if(s.code=r,Error.captureStackTrace&&Error.captureStackTrace(s,Ve),!i)throw s;return s},zs=function(r,t,i,s){var c=r.length,a=0;if(!c||t.f&&!t.l)return i||new Ce(0);var h=!i,f=h||t.i!=2,S=t.i;h&&(i=new Ce(c*3));var C=function(ft){var ot=i.length;if(ft>ot){var st=new Ce(Math.max(ot*2,ft));st.set(i),i=st}},E=t.f||0,w=t.p||0,F=t.b||0,K=t.l,me=t.d,re=t.m,Oe=t.n,ze=c*8;do{if(!K){E=We(r,w,1);var Ue=We(r,w+1,3);if(w+=3,Ue)if(Ue==1)K=Bs,me=Gs,re=9,Oe=5;else if(Ue==2){var Re=We(r,w,31)+257,pe=We(r,w+10,15)+4,Z=Re+We(r,w+5,31)+1;w+=14;for(var L=new Ce(Z),ie=new Ce(19),se=0;se<pe;++se)ie[rr[se]]=We(r,w+se*3,7);w+=pe*3;for(var ge=Wn(ie),_e=(1<<ge)-1,xe=je(ie,ge,1),se=0;se<Z;){var ce=xe[We(r,w,_e)];w+=ce&15;var fe=ce>>4;if(fe<16)L[se++]=fe;else{var de=0,te=0;for(fe==16?(te=3+We(r,w,3),w+=2,de=L[se-1]):fe==17?(te=3+We(r,w,7),w+=3):fe==18&&(te=11+We(r,w,127),w+=7);te--;)L[se++]=de}}var Ie=L.subarray(0,Re),ue=L.subarray(Re);re=Wn(Ie),Oe=Wn(ue),K=je(Ie,re,1),me=je(ue,Oe,1)}else Ve(1);else{var fe=_r(w)+4,Ae=r[fe-4]|r[fe-3]<<8,Ee=fe+Ae;if(Ee>c){S&&Ve(0);break}f&&C(F+Ae),i.set(r.subarray(fe,Ee),F),t.b=F+=Ae,t.p=w=Ee*8,t.f=E;continue}if(w>ze){S&&Ve(0);break}}f&&C(F+131072);for(var mt=(1<<re)-1,ae=(1<<Oe)-1,Pe=w;;Pe=w){var de=K[Xn(r,w)&mt],oe=de>>4;if(w+=de&15,w>ze){S&&Ve(0);break}if(de||Ve(2),oe<256)i[F++]=oe;else if(oe==256){Pe=w,K=null;break}else{var ve=oe-254;if(oe>264){var se=oe-257,J=Fn[se];ve=We(r,w,(1<<J)-1)+xi[se],w+=J}var Le=me[Xn(r,w)&ae],Y=Le>>4;Le||Ve(3),w+=Le&15;var ue=Ls[Y];if(Y>3){var J=Bn[Y];ue+=Xn(r,w)&(1<<J)-1,w+=J}if(w>ze){S&&Ve(0);break}f&&C(F+131072);var Fe=F+ve;if(F<ue){var Ye=a-ue,It=Math.min(ue,Fe);for(Ye+F<0&&Ve(3);F<It;++F)i[F]=s[Ye+F]}for(;F<Fe;++F)i[F]=i[F-ue]}}t.l=K,t.p=Pe,t.b=F,t.f=E,K&&(E=1,t.m=re,t.d=me,t.n=Oe)}while(!E);return F!=i.length&&h?bi(i,0,F):i.subarray(0,F)},nt=function(r,t,i){i<<=t&7;var s=t/8|0;r[s]|=i,r[s+1]|=i>>8},Wt=function(r,t,i){i<<=t&7;var s=t/8|0;r[s]|=i,r[s+1]|=i>>8,r[s+2]|=i>>16},qn=function(r,t){for(var i=[],s=0;s<r.length;++s)r[s]&&i.push({s,f:r[s]});var c=i.length,a=i.slice();if(!c)return{t:Ci,l:0};if(c==1){var h=new Ce(i[0].s+1);return h[i[0].s]=1,{t:h,l:1}}i.sort(function(Ee,Re){return Ee.f-Re.f}),i.push({s:-1,f:25001});var f=i[0],S=i[1],C=0,E=1,w=2;for(i[0]={s:-1,f:f.f+S.f,l:f,r:S};E!=c-1;)f=i[i[C].f<i[w].f?C++:w++],S=i[C!=E&&i[C].f<i[w].f?C++:w++],i[E++]={s:-1,f:f.f+S.f,l:f,r:S};for(var F=a[0].s,s=1;s<c;++s)a[s].s>F&&(F=a[s].s);var K=new ke(F+1),me=sr(i[E-1],K,0);if(me>t){var s=0,re=0,Oe=me-t,ze=1<<Oe;for(a.sort(function(Re,pe){return K[pe.s]-K[Re.s]||Re.f-pe.f});s<c;++s){var Ue=a[s].s;if(K[Ue]>t)re+=ze-(1<<me-K[Ue]),K[Ue]=t;else break}for(re>>=Oe;re>0;){var fe=a[s].s;K[fe]<t?re-=1<<t-K[fe]++-1:++s}for(;s>=0&&re;--s){var Ae=a[s].s;K[Ae]==t&&(--K[Ae],++re)}me=t}return{t:new Ce(K),l:me}},sr=function(r,t,i){return r.s==-1?Math.max(sr(r.l,t,i+1),sr(r.r,t,i+1)):t[r.s]=i},qr=function(r){for(var t=r.length;t&&!r[--t];);for(var i=new ke(++t),s=0,c=r[0],a=1,h=function(S){i[s++]=S},f=1;f<=t;++f)if(r[f]==c&&f!=t)++a;else{if(!c&&a>2){for(;a>138;a-=138)h(32754);a>2&&(h(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(h(c),--a;a>6;a-=6)h(8304);a>2&&(h(a-3<<5|8208),a=0)}for(;a--;)h(c);a=1,c=r[f]}return{c:i.subarray(0,s),n:t}},Xt=function(r,t){for(var i=0,s=0;s<t.length;++s)i+=r[s]*t[s];return i},Ni=function(r,t,i){var s=i.length,c=_r(t+2);r[c]=s&255,r[c+1]=s>>8,r[c+2]=r[c]^255,r[c+3]=r[c+1]^255;for(var a=0;a<s;++a)r[c+a+4]=i[a];return(c+4+s)*8},Vr=function(r,t,i,s,c,a,h,f,S,C,E){nt(t,E++,i),++c[256];for(var w=qn(c,15),F=w.t,K=w.l,me=qn(a,15),re=me.t,Oe=me.l,ze=qr(F),Ue=ze.c,fe=ze.n,Ae=qr(re),Ee=Ae.c,Re=Ae.n,pe=new ke(19),Z=0;Z<Ue.length;++Z)++pe[Ue[Z]&31];for(var Z=0;Z<Ee.length;++Z)++pe[Ee[Z]&31];for(var L=qn(pe,7),ie=L.t,se=L.l,ge=19;ge>4&&!ie[rr[ge-1]];--ge);var _e=C+5<<3,xe=Xt(c,ht)+Xt(a,en)+h,ce=Xt(c,F)+Xt(a,re)+h+14+3*ge+Xt(pe,ie)+2*pe[16]+3*pe[17]+7*pe[18];if(S>=0&&_e<=xe&&_e<=ce)return Ni(t,E,r.subarray(S,S+C));var de,te,Ie,ue;if(nt(t,E,1+(ce<xe)),E+=2,ce<xe){de=je(F,K,0),te=F,Ie=je(re,Oe,0),ue=re;var mt=je(ie,se,0);nt(t,E,fe-257),nt(t,E+5,Re-1),nt(t,E+10,ge-4),E+=14;for(var Z=0;Z<ge;++Z)nt(t,E+3*Z,ie[rr[Z]]);E+=3*ge;for(var ae=[Ue,Ee],Pe=0;Pe<2;++Pe)for(var oe=ae[Pe],Z=0;Z<oe.length;++Z){var ve=oe[Z]&31;nt(t,E,mt[ve]),E+=ie[ve],ve>15&&(nt(t,E,oe[Z]>>5&127),E+=oe[Z]>>12)}}else de=Fs,te=ht,Ie=Hs,ue=en;for(var Z=0;Z<f;++Z){var J=s[Z];if(J>255){var ve=J>>18&31;Wt(t,E,de[ve+257]),E+=te[ve+257],ve>7&&(nt(t,E,J>>23&31),E+=Fn[ve]);var Le=J&31;Wt(t,E,Ie[Le]),E+=ue[Le],Le>3&&(Wt(t,E,J>>5&8191),E+=Bn[Le])}else Wt(t,E,de[J]),E+=te[J]}return Wt(t,E,de[256]),E+te[256]},Zs=new gr([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Ci=new Ce(0),Ys=function(r,t,i,s,c,a){var h=a.z||r.length,f=new Ce(s+h+5*(1+Math.ceil(h/7e3))+c),S=f.subarray(s,f.length-c),C=a.l,E=(a.r||0)&7;if(t){E&&(S[0]=a.r>>3);for(var w=Zs[t-1],F=w>>13,K=w&8191,me=(1<<i)-1,re=a.p||new ke(32768),Oe=a.h||new ke(me+1),ze=Math.ceil(i/3),Ue=2*ze,fe=function(at){return(r[at]^r[at+1]<<ze^r[at+2]<<Ue)&me},Ae=new gr(25e3),Ee=new ke(288),Re=new ke(32),pe=0,Z=0,L=a.i||0,ie=0,se=a.w||0,ge=0;L+2<h;++L){var _e=fe(L),xe=L&32767,ce=Oe[_e];if(re[xe]=ce,Oe[_e]=xe,se<=L){var de=h-L;if((pe>7e3||ie>24576)&&(de>423||!C)){E=Vr(r,S,0,Ae,Ee,Re,Z,ie,ge,L-ge,E),ie=pe=Z=0,ge=L;for(var te=0;te<286;++te)Ee[te]=0;for(var te=0;te<30;++te)Re[te]=0}var Ie=2,ue=0,mt=K,ae=xe-ce&32767;if(de>2&&_e==fe(L-ae))for(var Pe=Math.min(F,de)-1,oe=Math.min(32767,L),ve=Math.min(258,de);ae<=oe&&--mt&&xe!=ce;){if(r[L+Ie]==r[L+Ie-ae]){for(var J=0;J<ve&&r[L+J]==r[L+J-ae];++J);if(J>Ie){if(Ie=J,ue=ae,J>Pe)break;for(var Le=Math.min(ae,J-2),Y=0,te=0;te<Le;++te){var Fe=L-ae+te&32767,Ye=re[Fe],It=Fe-Ye&32767;It>Y&&(Y=It,ce=Fe)}}}xe=ce,ce=re[xe],ae+=xe-ce&32767}if(ue){Ae[ie++]=268435456|ir[Ie]<<18|Xr[ue];var ft=ir[Ie]&31,ot=Xr[ue]&31;Z+=Fn[ft]+Bn[ot],++Ee[257+ft],++Re[ot],se=L+Ie,++pe}else Ae[ie++]=r[L],++Ee[r[L]]}}for(L=Math.max(L,se);L<h;++L)Ae[ie++]=r[L],++Ee[r[L]];E=Vr(r,S,C,Ae,Ee,Re,Z,ie,ge,L-ge,E),C||(a.r=E&7|S[E/8|0]<<3,E-=7,a.h=Oe,a.p=re,a.i=L,a.w=se)}else{for(var L=a.w||0;L<h+C;L+=65535){var st=L+65535;st>=h&&(S[E/8|0]=C,st=h),E=Ni(S,E+1,r.subarray(L,st))}a.i=h}return bi(f,0,s+_r(E)+c)},Oi=function(){var r=1,t=0;return{p:function(i){for(var s=r,c=t,a=i.length|0,h=0;h!=a;){for(var f=Math.min(h+2655,a);h<f;++h)c+=s+=i[h];s=(s&65535)+15*(s>>16),c=(c&65535)+15*(c>>16)}r=s,t=c},d:function(){return r%=65521,t%=65521,(r&255)<<24|(r&65280)<<8|(t&255)<<8|t>>8}}},Ws=function(r,t,i,s,c){if(!c&&(c={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),h=new Ce(a.length+r.length);h.set(a),h.set(r,a.length),r=h,c.w=a.length}return Ys(r,t.level==null?6:t.level,t.mem==null?c.l?Math.ceil(Math.max(8,Math.min(13,Math.log(r.length)))*1.5):20:12+t.mem,i,s,c)},Ui=function(r,t,i){for(;i;++t)r[t]=i,i>>>=8},Xs=function(r,t){var i=t.level,s=i==0?0:i<6?1:i==9?3:2;if(r[0]=120,r[1]=s<<6|(t.dictionary&&32),r[1]|=31-(r[0]<<8|r[1])%31,t.dictionary){var c=Oi();c.p(t.dictionary),Ui(r,2,c.d())}},qs=function(r,t){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&Ve(6,"invalid zlib data"),(r[1]>>5&1)==1&&Ve(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function fa(r,t){t||(t={});var i=Oi();i.p(r);var s=Ws(r,t,t.dictionary?6:2,4);return Xs(s,t),Ui(s,s.length-4,i.d()),s}function qt(r,t){return zs(r.subarray(qs(r),-4),{i:2},t,t)}var Vs=typeof TextDecoder<"u"&&new TextDecoder,Ks=0;try{Vs.decode(Ci,{stream:!0}),Ks=1}catch{}class Mi extends So{constructor(t){super(t),this.type=Ne,this.outputFormat=Qe,this.part=0}parse(t){const L=Math.pow(2.7182818,2.2);let ie=null;function se(e,n){let o=0;for(let m=0;m<65536;++m)(m==0||e[m>>3]&1<<(m&7))&&(n[o++]=m);const l=o-1;for(;o<65536;)n[o++]=0;return l}function ge(e){for(let n=0;n<16384;n++)e[n]={},e[n].len=0,e[n].lit=0,e[n].p=null}const _e={l:0,c:0,lc:0};function xe(e,n,o,l,m){for(;o<e;)n=n<<8|vr(l,m),o+=8;o-=e,_e.l=n>>o&(1<<e)-1,_e.c=n,_e.lc=o}const ce=new Array(59);function de(e){for(let o=0;o<=58;++o)ce[o]=0;for(let o=0;o<65537;++o)ce[e[o]]+=1;let n=0;for(let o=58;o>0;--o){const l=n+ce[o]>>1;ce[o]=n,n=l}for(let o=0;o<65537;++o){const l=e[o];l>0&&(e[o]=l|ce[l]++<<6)}}function te(e,n,o,l,m,p){const u=n;let _=0,d=0;for(;l<=m;l++){if(u.value-n.value>o)return!1;xe(6,_,d,e,u);const g=_e.l;if(_=_e.c,d=_e.lc,p[l]=g,g==63){if(u.value-n.value>o)throw new Error("Something wrong with hufUnpackEncTable");xe(8,_,d,e,u);let T=_e.l+6;if(_=_e.c,d=_e.lc,l+T>m+1)throw new Error("Something wrong with hufUnpackEncTable");for(;T--;)p[l++]=0;l--}else if(g>=59){let T=g-59+2;if(l+T>m+1)throw new Error("Something wrong with hufUnpackEncTable");for(;T--;)p[l++]=0;l--}}de(p)}function Ie(e){return e&63}function ue(e){return e>>6}function mt(e,n,o,l){for(;n<=o;n++){const m=ue(e[n]),p=Ie(e[n]);if(m>>p)throw new Error("Invalid table entry");if(p>14){const u=l[m>>p-14];if(u.len)throw new Error("Invalid table entry");if(u.lit++,u.p){const _=u.p;u.p=new Array(u.lit);for(let d=0;d<u.lit-1;++d)u.p[d]=_[d]}else u.p=new Array(1);u.p[u.lit-1]=n}else if(p){let u=0;for(let _=1<<14-p;_>0;_--){const d=l[(m<<14-p)+u];if(d.len||d.p)throw new Error("Invalid table entry");d.len=p,d.lit=n,u++}}}return!0}const ae={c:0,lc:0};function Pe(e,n,o,l){e=e<<8|vr(o,l),n+=8,ae.c=e,ae.lc=n}const oe={c:0,lc:0};function ve(e,n,o,l,m,p,u,_,d){if(e==n){l<8&&(Pe(o,l,m,p),o=ae.c,l=ae.lc),l-=8;let g=o>>l;if(g=new Uint8Array([g])[0],_.value+g>d)return!1;const T=u[_.value-1];for(;g-- >0;)u[_.value++]=T}else if(_.value<d)u[_.value++]=e;else return!1;oe.c=o,oe.lc=l}function J(e){return e&65535}function Le(e){const n=J(e);return n>32767?n-65536:n}const Y={a:0,b:0};function Fe(e,n){const o=Le(e),m=Le(n),p=o+(m&1)+(m>>1),u=p,_=p-m;Y.a=u,Y.b=_}function Ye(e,n){const o=J(e),l=J(n),m=o-(l>>1)&65535,p=l+m-32768&65535;Y.a=p,Y.b=m}function It(e,n,o,l,m,p,u){const _=u<16384,d=o>m?m:o;let g=1,T,I;for(;g<=d;)g<<=1;for(g>>=1,T=g,g>>=1;g>=1;){I=0;const y=I+p*(m-T),v=p*g,b=p*T,A=l*g,R=l*T;let M,H,D,k;for(;I<=y;I+=b){let O=I;const N=I+l*(o-T);for(;O<=N;O+=R){const U=O+A,V=O+v,z=V+A;_?(Fe(e[O+n],e[V+n]),M=Y.a,D=Y.b,Fe(e[U+n],e[z+n]),H=Y.a,k=Y.b,Fe(M,H),e[O+n]=Y.a,e[U+n]=Y.b,Fe(D,k),e[V+n]=Y.a,e[z+n]=Y.b):(Ye(e[O+n],e[V+n]),M=Y.a,D=Y.b,Ye(e[U+n],e[z+n]),H=Y.a,k=Y.b,Ye(M,H),e[O+n]=Y.a,e[U+n]=Y.b,Ye(D,k),e[V+n]=Y.a,e[z+n]=Y.b)}if(o&g){const U=O+v;_?Fe(e[O+n],e[U+n]):Ye(e[O+n],e[U+n]),M=Y.a,e[U+n]=Y.b,e[O+n]=M}}if(m&g){let O=I;const N=I+l*(o-T);for(;O<=N;O+=R){const U=O+A;_?Fe(e[O+n],e[U+n]):Ye(e[O+n],e[U+n]),M=Y.a,e[U+n]=Y.b,e[O+n]=M}}T=g,g>>=1}return I}function ft(e,n,o,l,m,p,u,_,d){let g=0,T=0;const I=u,y=Math.trunc(l.value+(m+7)/8);for(;l.value<y;)for(Pe(g,T,o,l),g=ae.c,T=ae.lc;T>=14;){const b=g>>T-14&16383,A=n[b];if(A.len)T-=A.len,ve(A.lit,p,g,T,o,l,_,d,I),g=oe.c,T=oe.lc;else{if(!A.p)throw new Error("hufDecode issues");let R;for(R=0;R<A.lit;R++){const M=Ie(e[A.p[R]]);for(;T<M&&l.value<y;)Pe(g,T,o,l),g=ae.c,T=ae.lc;if(T>=M&&ue(e[A.p[R]])==(g>>T-M&(1<<M)-1)){T-=M,ve(A.p[R],p,g,T,o,l,_,d,I),g=oe.c,T=oe.lc;break}}if(R==A.lit)throw new Error("hufDecode issues")}}const v=8-m&7;for(g>>=v,T-=v;T>0;){const b=n[g<<14-T&16383];if(b.len)T-=b.len,ve(b.lit,p,g,T,o,l,_,d,I),g=oe.c,T=oe.lc;else throw new Error("hufDecode issues")}return!0}function ot(e,n,o,l,m,p){const u={value:0},_=o.value,d=Be(n,o),g=Be(n,o);o.value+=4;const T=Be(n,o);if(o.value+=4,d<0||d>=65537||g<0||g>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const I=new Array(65537),y=new Array(16384);ge(y);const v=l-(o.value-_);if(te(e,o,v,d,g,I),T>8*(l-(o.value-_)))throw new Error("Something wrong with hufUncompress");mt(I,d,g,y),ft(I,y,e,o,T,g,p,m,u)}function st(e,n,o){for(let l=0;l<o;++l)n[l]=e[n[l]]}function at(e){for(let n=1;n<e.length;n++){const o=e[n-1]+e[n]-128;e[n]=o}}function rn(e,n){let o=0,l=Math.floor((e.length+1)/2),m=0;const p=e.length-1;for(;!(m>p||(n[m++]=e[o++],m>p));)n[m++]=e[l++]}function Hn(e){let n=e.byteLength;const o=new Array;let l=0;const m=new DataView(e);for(;n>0;){const p=m.getInt8(l++);if(p<0){const u=-p;n-=u+1;for(let _=0;_<u;_++)o.push(m.getUint8(l++))}else{const u=p;n-=2;const _=m.getUint8(l++);for(let d=0;d<u+1;d++)o.push(_)}}return o}function Di(e,n,o,l,m,p){let u=new DataView(p.buffer);const _=o[e.idx[0]].width,d=o[e.idx[0]].height,g=3,T=Math.floor(_/8),I=Math.ceil(_/8),y=Math.ceil(d/8),v=_-(I-1)*8,b=d-(y-1)*8,A={value:0},R=new Array(g),M=new Array(g),H=new Array(g),D=new Array(g),k=new Array(g);for(let N=0;N<g;++N)k[N]=n[e.idx[N]],R[N]=N<1?0:R[N-1]+I*y,M[N]=new Float32Array(64),H[N]=new Uint16Array(64),D[N]=new Uint16Array(I*64);for(let N=0;N<y;++N){let U=8;N==y-1&&(U=b);let V=8;for(let P=0;P<I;++P){P==I-1&&(V=v);for(let G=0;G<g;++G)H[G].fill(0),H[G][0]=m[R[G]++],Tr(A,l,H[G]),yr(H[G],M[G]),Sr(M[G]);Li(M);for(let G=0;G<g;++G)Er(M[G],D[G],P*64)}let z=0;for(let P=0;P<g;++P){const G=o[e.idx[P]].type;for(let le=8*N;le<8*N+U;++le){z=k[P][le];for(let He=0;He<T;++He){const Q=He*64+(le&7)*8;u.setUint16(z+0*G,D[P][Q+0],!0),u.setUint16(z+2*G,D[P][Q+1],!0),u.setUint16(z+4*G,D[P][Q+2],!0),u.setUint16(z+6*G,D[P][Q+3],!0),u.setUint16(z+8*G,D[P][Q+4],!0),u.setUint16(z+10*G,D[P][Q+5],!0),u.setUint16(z+12*G,D[P][Q+6],!0),u.setUint16(z+14*G,D[P][Q+7],!0),z+=16*G}}if(T!=I)for(let le=8*N;le<8*N+U;++le){const He=k[P][le]+8*T*2*G,Q=T*64+(le&7)*8;for(let Ke=0;Ke<V;++Ke)u.setUint16(He+Ke*2*G,D[P][Q+Ke],!0)}}}const O=new Uint16Array(_);u=new DataView(p.buffer);for(let N=0;N<g;++N){o[e.idx[N]].decoded=!0;const U=o[e.idx[N]].type;if(o[N].type==2)for(let V=0;V<d;++V){const z=k[N][V];for(let P=0;P<_;++P)O[P]=u.getUint16(z+P*2*U,!0);for(let P=0;P<_;++P)u.setFloat32(z+P*2*U,x(O[P]),!0)}}}function Pi(e,n,o,l,m,p){const u=new DataView(p.buffer),_=o[e],d=_.width,g=_.height,T=Math.ceil(d/8),I=Math.ceil(g/8),y=Math.floor(d/8),v=d-(T-1)*8,b=g-(I-1)*8,A={value:0};let R=0;const M=new Float32Array(64),H=new Uint16Array(64),D=new Uint16Array(T*64);for(let k=0;k<I;++k){let O=8;k==I-1&&(O=b);for(let N=0;N<T;++N)H.fill(0),H[0]=m[R++],Tr(A,l,H),yr(H,M),Sr(M),Er(M,D,N*64);for(let N=8*k;N<8*k+O;++N){let U=n[e][N];for(let V=0;V<y;++V){const z=V*64+(N&7)*8;for(let P=0;P<8;++P)u.setUint16(U+P*2*_.type,D[z+P],!0);U+=16*_.type}if(T!=y){const V=y*64+(N&7)*8;for(let z=0;z<v;++z)u.setUint16(U+z*2*_.type,D[V+z],!0)}}}_.decoded=!0}function Tr(e,n,o){let l,m=1;for(;m<64;)l=n[e.value],l==65280?m=64:l>>8==255?m+=l&255:(o[m]=l,m++),e.value++}function yr(e,n){n[0]=x(e[0]),n[1]=x(e[1]),n[2]=x(e[5]),n[3]=x(e[6]),n[4]=x(e[14]),n[5]=x(e[15]),n[6]=x(e[27]),n[7]=x(e[28]),n[8]=x(e[2]),n[9]=x(e[4]),n[10]=x(e[7]),n[11]=x(e[13]),n[12]=x(e[16]),n[13]=x(e[26]),n[14]=x(e[29]),n[15]=x(e[42]),n[16]=x(e[3]),n[17]=x(e[8]),n[18]=x(e[12]),n[19]=x(e[17]),n[20]=x(e[25]),n[21]=x(e[30]),n[22]=x(e[41]),n[23]=x(e[43]),n[24]=x(e[9]),n[25]=x(e[11]),n[26]=x(e[18]),n[27]=x(e[24]),n[28]=x(e[31]),n[29]=x(e[40]),n[30]=x(e[44]),n[31]=x(e[53]),n[32]=x(e[10]),n[33]=x(e[19]),n[34]=x(e[23]),n[35]=x(e[32]),n[36]=x(e[39]),n[37]=x(e[45]),n[38]=x(e[52]),n[39]=x(e[54]),n[40]=x(e[20]),n[41]=x(e[22]),n[42]=x(e[33]),n[43]=x(e[38]),n[44]=x(e[46]),n[45]=x(e[51]),n[46]=x(e[55]),n[47]=x(e[60]),n[48]=x(e[21]),n[49]=x(e[34]),n[50]=x(e[37]),n[51]=x(e[47]),n[52]=x(e[50]),n[53]=x(e[56]),n[54]=x(e[59]),n[55]=x(e[61]),n[56]=x(e[35]),n[57]=x(e[36]),n[58]=x(e[48]),n[59]=x(e[49]),n[60]=x(e[57]),n[61]=x(e[58]),n[62]=x(e[62]),n[63]=x(e[63])}function Sr(e){const n=.5*Math.cos(.7853975),o=.5*Math.cos(3.14159/16),l=.5*Math.cos(3.14159/8),m=.5*Math.cos(3*3.14159/16),p=.5*Math.cos(5*3.14159/16),u=.5*Math.cos(3*3.14159/8),_=.5*Math.cos(7*3.14159/16),d=new Array(4),g=new Array(4),T=new Array(4),I=new Array(4);for(let y=0;y<8;++y){const v=y*8;d[0]=l*e[v+2],d[1]=u*e[v+2],d[2]=l*e[v+6],d[3]=u*e[v+6],g[0]=o*e[v+1]+m*e[v+3]+p*e[v+5]+_*e[v+7],g[1]=m*e[v+1]-_*e[v+3]-o*e[v+5]-p*e[v+7],g[2]=p*e[v+1]-o*e[v+3]+_*e[v+5]+m*e[v+7],g[3]=_*e[v+1]-p*e[v+3]+m*e[v+5]-o*e[v+7],T[0]=n*(e[v+0]+e[v+4]),T[3]=n*(e[v+0]-e[v+4]),T[1]=d[0]+d[3],T[2]=d[1]-d[2],I[0]=T[0]+T[1],I[1]=T[3]+T[2],I[2]=T[3]-T[2],I[3]=T[0]-T[1],e[v+0]=I[0]+g[0],e[v+1]=I[1]+g[1],e[v+2]=I[2]+g[2],e[v+3]=I[3]+g[3],e[v+4]=I[3]-g[3],e[v+5]=I[2]-g[2],e[v+6]=I[1]-g[1],e[v+7]=I[0]-g[0]}for(let y=0;y<8;++y)d[0]=l*e[16+y],d[1]=u*e[16+y],d[2]=l*e[48+y],d[3]=u*e[48+y],g[0]=o*e[8+y]+m*e[24+y]+p*e[40+y]+_*e[56+y],g[1]=m*e[8+y]-_*e[24+y]-o*e[40+y]-p*e[56+y],g[2]=p*e[8+y]-o*e[24+y]+_*e[40+y]+m*e[56+y],g[3]=_*e[8+y]-p*e[24+y]+m*e[40+y]-o*e[56+y],T[0]=n*(e[y]+e[32+y]),T[3]=n*(e[y]-e[32+y]),T[1]=d[0]+d[3],T[2]=d[1]-d[2],I[0]=T[0]+T[1],I[1]=T[3]+T[2],I[2]=T[3]-T[2],I[3]=T[0]-T[1],e[0+y]=I[0]+g[0],e[8+y]=I[1]+g[1],e[16+y]=I[2]+g[2],e[24+y]=I[3]+g[3],e[32+y]=I[3]-g[3],e[40+y]=I[2]-g[2],e[48+y]=I[1]-g[1],e[56+y]=I[0]-g[0]}function Li(e){for(let n=0;n<64;++n){const o=e[0][n],l=e[1][n],m=e[2][n];e[0][n]=o+1.5747*m,e[1][n]=o-.1873*l-.4682*m,e[2][n]=o+1.8556*l}}function Er(e,n,o){for(let l=0;l<64;++l)n[o+l]=pt.toHalfFloat(Fi(e[l]))}function Fi(e){return e<=1?Math.sign(e)*Math.pow(Math.abs(e),2.2):Math.sign(e)*Math.pow(L,Math.abs(e)-1)}function on(e){return new DataView(e.array.buffer,e.offset.value,e.size)}function Bi(e){const n=e.viewer.buffer.slice(e.offset.value,e.offset.value+e.size),o=new Uint8Array(Hn(n)),l=new Uint8Array(o.length);return at(o),rn(o,l),new DataView(l.buffer)}function Gn(e){const n=e.array.slice(e.offset.value,e.offset.value+e.size),o=qt(n),l=new Uint8Array(o.length);return at(o),rn(o,l),new DataView(l.buffer)}function Hi(e){const n=e.viewer,o={value:e.offset.value},l=new Uint16Array(e.columns*e.lines*(e.inputChannels.length*e.type)),m=new Uint8Array(8192);let p=0;const u=new Array(e.inputChannels.length);for(let b=0,A=e.inputChannels.length;b<A;b++)u[b]={},u[b].start=p,u[b].end=u[b].start,u[b].nx=e.columns,u[b].ny=e.lines,u[b].size=e.type,p+=u[b].nx*u[b].ny*u[b].size;const _=Ht(n,o),d=Ht(n,o);if(d>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(_<=d)for(let b=0;b<d-_+1;b++)m[b+_]=ct(n,o);const g=new Uint16Array(65536),T=se(m,g),I=Be(n,o);ot(e.array,n,o,I,l,p);for(let b=0;b<e.inputChannels.length;++b){const A=u[b];for(let R=0;R<u[b].size;++R)It(l,A.start+R,A.nx,A.size,A.ny,A.nx*A.size,T)}st(g,l,p);let y=0;const v=new Uint8Array(l.buffer.byteLength);for(let b=0;b<e.lines;b++)for(let A=0;A<e.inputChannels.length;A++){const R=u[A],M=R.nx*R.size,H=new Uint8Array(l.buffer,R.end*2,M*2);v.set(H,y),y+=M*2,R.end+=M}return new DataView(v.buffer)}function Gi(e){const n=e.array.slice(e.offset.value,e.offset.value+e.size),o=qt(n),l=e.inputChannels.length*e.lines*e.columns*e.totalBytes,m=new ArrayBuffer(l),p=new DataView(m);let u=0,_=0;const d=new Array(4);for(let g=0;g<e.lines;g++)for(let T=0;T<e.inputChannels.length;T++){let I=0;switch(e.inputChannels[T].pixelType){case 1:d[0]=u,d[1]=d[0]+e.columns,u=d[1]+e.columns;for(let v=0;v<e.columns;++v){const b=o[d[0]++]<<8|o[d[1]++];I+=b,p.setUint16(_,I,!0),_+=2}break;case 2:d[0]=u,d[1]=d[0]+e.columns,d[2]=d[1]+e.columns,u=d[2]+e.columns;for(let v=0;v<e.columns;++v){const b=o[d[0]++]<<24|o[d[1]++]<<16|o[d[2]++]<<8;I+=b,p.setUint32(_,I,!0),_+=4}break}}return p}function ki(e){const n=e.array;let o=e.offset.value;const l=e.columns,m=e.lines,p=e.inputChannels,u=e.totalBytes,_=be.compression==="B44A_COMPRESSION",d=new Uint8Array(m*l*u),g=new Uint16Array(16);let T=0;for(let I=0;I<p.length;I++){const y=p[I],v=y.pixelType*2,b=Math.ceil(l/y.xSampling),A=Math.ceil(m/y.ySampling),R=y.xSampling===1&&y.ySampling===1;if(y.pixelType!==1){for(let D=0;D<A;D++)if(R){const k=D*l*u+T*l;for(let O=0;O<b*v;O++)d[k+O]=n[o++]}else o+=b*v;T+=v;continue}const M=Math.ceil(b/4),H=Math.ceil(A/4);for(let D=0;D<H;D++)for(let k=0;k<M;k++){if(_&&n[o+2]>=52){const O=n[o]<<8|n[o+1],N=O&32768?O&32767:~O&65535;g.fill(N),o+=3}else{const O=n[o]<<8|n[o+1],N=n[o+2]>>2,U=32<<N,V=O+((n[o+2]<<4|n[o+3]>>4)&63)*(1<<N)-U&65535,z=V+((n[o+3]<<2|n[o+4]>>6)&63)*(1<<N)-U&65535,P=z+(n[o+4]&63)*(1<<N)-U&65535,G=O+(n[o+5]>>2&63)*(1<<N)-U&65535,le=V+((n[o+5]<<4|n[o+6]>>4)&63)*(1<<N)-U&65535,He=z+((n[o+6]<<2|n[o+7]>>6)&63)*(1<<N)-U&65535,Q=P+(n[o+7]&63)*(1<<N)-U&65535,Ke=G+(n[o+8]>>2&63)*(1<<N)-U&65535,vt=le+((n[o+8]<<4|n[o+9]>>4)&63)*(1<<N)-U&65535,Gt=He+((n[o+9]<<2|n[o+10]>>6)&63)*(1<<N)-U&65535,$e=Q+(n[o+10]&63)*(1<<N)-U&65535,dt=Ke+(n[o+11]>>2&63)*(1<<N)-U&65535,ln=vt+((n[o+11]<<4|n[o+12]>>4)&63)*(1<<N)-U&65535,hn=Gt+((n[o+12]<<2|n[o+13]>>6)&63)*(1<<N)-U&65535,mn=$e+(n[o+13]&63)*(1<<N)-U&65535,kt=[O,G,Ke,dt,V,le,vt,ln,z,He,Gt,hn,P,Q,$e,mn];for(let At=0;At<16;At++)g[At]=kt[At]&32768?kt[At]&32767:~kt[At]&65535;o+=14}if(y.pLinear){if(ie===null){ie=new Uint16Array(65536);for(let O=0;O<65536;O++)if((O&31744)===31744||O>32768)ie[O]=0;else{const N=x(O);ie[O]=N<=0?0:pt.toHalfFloat(8*Math.log(N))}}for(let O=0;O<16;O++)g[O]=ie[g[O]]}for(let O=0;O<4;O++){const N=D*4+O;if(!(N>=A))for(let U=0;U<4;U++){const V=k*4+U;if(V>=b)continue;const z=g[O*4+U];for(let P=0;P<y.ySampling;P++){const G=N*y.ySampling+P;if(!(G>=m))for(let le=0;le<y.xSampling;le++){const He=V*y.xSampling+le;if(He>=l)continue;const Q=G*l*u+T*l+He*2;d[Q]=z&255,d[Q+1]=z>>8&255}}}}}T+=2}return new DataView(d.buffer)}function Ir(e){const n=e.viewer,o={value:e.offset.value},l=new Uint8Array(e.columns*e.lines*(e.inputChannels.length*e.type*2)),m={version:Te(n,o),unknownUncompressedSize:Te(n,o),unknownCompressedSize:Te(n,o),acCompressedSize:Te(n,o),dcCompressedSize:Te(n,o),rleCompressedSize:Te(n,o),rleUncompressedSize:Te(n,o),rleRawSize:Te(n,o),totalAcUncompressedCount:Te(n,o),totalDcUncompressedCount:Te(n,o),acCompression:Te(n,o)};if(m.version<2)throw new Error("EXRLoader.parse: "+be.compression+" version "+m.version+" is unsupported");const p=new Array;let u=Ht(n,o)-2;for(;u>0;){const A=sn(n.buffer,o),R=ct(n,o),M=R>>2&3,H=(R>>4)-1,D=new Int8Array([H])[0],k=ct(n,o);p.push({name:A,index:D,type:k,compression:M}),u-=A.length+3}const _=be.channels,d=new Array(e.inputChannels.length);for(let A=0;A<e.inputChannels.length;++A){const R=d[A]={},M=_[A];R.name=M.name,R.compression=0,R.decoded=!1,R.type=M.pixelType,R.pLinear=M.pLinear,R.width=e.columns,R.height=e.lines}const g={idx:new Array(3)};for(let A=0;A<e.inputChannels.length;++A){const R=d[A],M=R.name.lastIndexOf("."),H=M>=0?R.name.substring(M+1):R.name;for(let D=0;D<p.length;++D){const k=p[D];H===k.name&&R.type===k.type&&(R.compression=k.compression,k.index>=0&&(g.idx[k.index]=A),R.offset=A)}}let T,I,y;if(m.acCompressedSize>0)switch(m.acCompression){case 0:T=new Uint16Array(m.totalAcUncompressedCount),ot(e.array,n,o,m.acCompressedSize,T,m.totalAcUncompressedCount);break;case 1:const A=e.array.slice(o.value,o.value+m.totalAcUncompressedCount),R=qt(A);T=new Uint16Array(R.buffer),o.value+=m.totalAcUncompressedCount;break}if(m.dcCompressedSize>0){const A={array:e.array,offset:o,size:m.dcCompressedSize};I=new Uint16Array(Gn(A).buffer),o.value+=m.dcCompressedSize}if(m.rleRawSize>0){const A=e.array.slice(o.value,o.value+m.rleCompressedSize),R=qt(A);y=Hn(R.buffer),o.value+=m.rleCompressedSize}let v=0;const b=new Array(d.length);for(let A=0;A<b.length;++A)b[A]=new Array;for(let A=0;A<e.lines;++A)for(let R=0;R<d.length;++R)b[R].push(v),v+=d[R].width*e.type*2;g.idx[0]!==void 0&&d[g.idx[0]]&&Di(g,b,d,T,I,l);for(let A=0;A<d.length;++A){const R=d[A];if(!R.decoded)switch(R.compression){case 2:let M=0,H=0;for(let D=0;D<e.lines;++D){let k=b[A][M];for(let O=0;O<R.width;++O){for(let N=0;N<2*R.type;++N)l[k++]=y[H+N*R.width*R.height];H++}M++}break;case 1:Pi(A,b,d,T,I,l);break;default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(l.buffer)}function sn(e,n){const o=new Uint8Array(e);let l=0;for(;o[n.value+l]!=0;)l+=1;const m=new TextDecoder().decode(o.slice(n.value,n.value+l));return n.value=n.value+l+1,m}function zi(e,n,o){const l=new TextDecoder().decode(new Uint8Array(e).slice(n.value,n.value+o));return n.value=n.value+o,l}function Zi(e,n){const o=Me(e,n),l=Be(e,n);return[o,l]}function Yi(e,n){const o=Be(e,n),l=Be(e,n);return[o,l]}function Me(e,n){const o=e.getInt32(n.value,!0);return n.value=n.value+4,o}function Be(e,n){const o=e.getUint32(n.value,!0);return n.value=n.value+4,o}function vr(e,n){const o=e[n.value];return n.value=n.value+1,o}function ct(e,n){const o=e.getUint8(n.value);return n.value=n.value+1,o}const Te=function(e,n){const o=Number(e.getBigInt64(n.value,!0));return n.value+=8,o};function we(e,n){const o=e.getFloat32(n.value,!0);return n.value+=4,o}function Wi(e,n){return pt.toHalfFloat(we(e,n))}function x(e){const n=(e&31744)>>10,o=e&1023;return(e>>15?-1:1)*(n?n===31?o?NaN:1/0:Math.pow(2,n-15)*(1+o/1024):6103515625e-14*(o/1024))}function Ht(e,n){const o=e.getUint16(n.value,!0);return n.value+=2,o}function Xi(e,n){return x(Ht(e,n))}function qi(e,n,o,l){const m=o.value,p=[];for(;o.value<m+l-1;){const u=sn(n,o),_=Me(e,o),d=ct(e,o);o.value+=3;const g=Me(e,o),T=Me(e,o);p.push({name:u,pixelType:_,pLinear:d,xSampling:g,ySampling:T})}return o.value+=1,p}function Vi(e,n){const o=we(e,n),l=we(e,n),m=we(e,n),p=we(e,n),u=we(e,n),_=we(e,n),d=we(e,n),g=we(e,n);return{redX:o,redY:l,greenX:m,greenY:p,blueX:u,blueY:_,whiteX:d,whiteY:g}}function Ki(e,n){const o=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],l=ct(e,n);return o[l]}function $i(e,n){const o=Me(e,n),l=Me(e,n),m=Me(e,n),p=Me(e,n);return{xMin:o,yMin:l,xMax:m,yMax:p}}function Ji(e,n){const o=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],l=ct(e,n);return o[l]}function Qi(e,n){const o=["ENVMAP_LATLONG","ENVMAP_CUBE"],l=ct(e,n);return o[l]}function ji(e,n){const o=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],l=["ROUND_DOWN","ROUND_UP"],m=Be(e,n),p=Be(e,n),u=ct(e,n);return{xSize:m,ySize:p,levelMode:o[u&15],roundingMode:l[u>>4]}}function eo(e,n){const o=we(e,n),l=we(e,n);return[o,l]}function to(e,n){const o=we(e,n),l=we(e,n),m=we(e,n);return[o,l,m]}function no(e,n,o,l,m){if(l==="string"||l==="stringvector"||l==="iccProfile")return zi(n,o,m);if(l==="chlist")return qi(e,n,o,m);if(l==="chromaticities")return Vi(e,o);if(l==="compression")return Ki(e,o);if(l==="box2i")return $i(e,o);if(l==="envmap")return Qi(e,o);if(l==="tiledesc")return ji(e,o);if(l==="lineOrder")return Ji(e,o);if(l==="float")return we(e,o);if(l==="v2f")return eo(e,o);if(l==="v3f")return to(e,o);if(l==="int")return Me(e,o);if(l==="rational")return Zi(e,o);if(l==="timecode")return Yi(e,o);if(l==="preview"||l==="deepImageState"||l==="idmanifest")return o.value+=m,"skipped";o.value+=m}function ro(e,n){const o=Math.log2(e);return n=="ROUND_DOWN"?Math.floor(o):Math.ceil(o)}function io(e,n,o){let l=0;switch(e.levelMode){case"ONE_LEVEL":l=1;break;case"MIPMAP_LEVELS":l=ro(Math.max(n,o),e.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return l}function Ar(e,n,o,l){const m=new Array(e);for(let p=0;p<e;p++){const u=1<<p;let _=n/u|0;l=="ROUND_UP"&&_*u<n&&(_+=1);const d=Math.max(_,1);m[p]=(d+o-1)/o|0}return m}function oo(){const e=this,n=e.offset,o={value:0};for(let l=0;l<e.tileCount;l++){const m=Me(e.viewer,n),p=Me(e.viewer,n);n.value+=8,e.size=Be(e.viewer,n);const u=m*e.blockWidth,_=p*e.blockHeight;e.columns=u+e.blockWidth>e.width?e.width-u:e.blockWidth,e.lines=_+e.blockHeight>e.height?e.height-_:e.blockHeight;const d=e.columns*e.totalBytes,T=e.size<e.lines*d?e.uncompress(e):on(e);n.value+=e.size;for(let I=0;I<e.lines;I++){const y=I*e.columns*e.totalBytes;for(let v=0;v<e.inputChannels.length;v++){const b=be.channels[v].name,A=e.channelByteOffsets[b]*e.columns,R=e.decodeChannels[b];if(R===void 0)continue;o.value=y+A;const M=(e.height-(1+_+I))*e.outLineWidth;for(let H=0;H<e.columns;H++){const D=M+(H+u)*e.outputChannels+R;e.byteArray[D]=e.getter(T,o)}}}}}function so(){const e=this,n=e.offset,o={value:0};for(let l=0;l<e.height/e.blockHeight;l++){const m=Me(e.viewer,n)-be.dataWindow.yMin;e.size=Be(e.viewer,n),e.lines=m+e.blockHeight>e.height?e.height-m:e.blockHeight;const p=e.columns*e.totalBytes,_=e.size<e.lines*p?e.uncompress(e):on(e);n.value+=e.size;for(let d=0;d<e.blockHeight;d++){const g=l*e.blockHeight,T=d+e.scanOrder(g);if(T>=e.height)continue;const I=d*p,y=(e.height-1-T)*e.outLineWidth;for(let v=0;v<e.inputChannels.length;v++){const b=be.channels[v].name,A=e.channelByteOffsets[b]*e.columns,R=e.decodeChannels[b];if(R!==void 0){o.value=I+A;for(let M=0;M<e.columns;M++){const H=y+M*e.outputChannels+R;e.byteArray[H]=e.getter(_,o)}}}}}}function ao(){const e=this,n=e.chunkOffsets,o={value:0};for(let l=0;l<n.length;l++){const m={value:n[l]};m.value+=4;const p=Me(e.viewer,m)-be.dataWindow.yMin;e.size=Be(e.viewer,m),e.lines=p+e.blockHeight>e.height?e.height-p:e.blockHeight;const u=e.columns*e.totalBytes,_=e.size<e.lines*u,d=e.offset;e.offset=m;const g=_?e.uncompress(e):on(e);e.offset=d;for(let T=0;T<e.blockHeight;T++){const I=T+p;if(I>=e.height)continue;const y=T*u,v=(e.height-1-I)*e.outLineWidth;for(let b=0;b<e.inputChannels.length;b++){const A=be.channels[b].name,R=e.channelByteOffsets[A]*e.columns,M=e.decodeChannels[A];if(M!==void 0){o.value=y+R;for(let H=0;H<e.columns;H++){const D=v+H*e.outputChannels+M;e.byteArray[D]=e.getter(g,o)}}}}}}function Rr(e,n,o,l){if(o===0)return null;const m=e.slice(n,n+o);switch(l){case"NO_COMPRESSION":return new DataView(m.buffer,m.byteOffset,m.byteLength);case"RLE_COMPRESSION":{const p=new Uint8Array(Hn(m.buffer.slice(m.byteOffset,m.byteOffset+m.byteLength))),u=new Uint8Array(p.length);return at(p),rn(p,u),new DataView(u.buffer)}case"ZIPS_COMPRESSION":{const p=qt(m),u=new Uint8Array(p.length);return at(p),rn(p,u),new DataView(u.buffer)}default:throw new Error("EXRLoader.parse: "+l+" is unsupported for deep data")}}function co(){const e=this,n=e.chunkOffsets,o=e.width,l=e.height,m=e.deepChannels,p=be.compression,u=e.multiPart,_=e.decodeChannels,d=e.outputChannels,g=e.byteArray instanceof Uint16Array;let T=-1;for(let I=0;I<m.length;I++)if(m[I].name==="A"){T=I;break}for(let I=0;I<n.length;I++){const y={value:n[I]};u&&(y.value+=4);const v=Me(e.viewer,y)-be.dataWindow.yMin,b=Te(e.viewer,y),A=Te(e.viewer,y);Te(e.viewer,y);const R=Rr(e.array,y.value,b,p);if(y.value+=b,R===null)continue;const M=new Uint32Array(o);for(let U=0;U<o;U++)M[U]=R.getUint32(U*4,!0);const H=M[o-1];if(H===0){y.value+=A;continue}const D=Rr(e.array,y.value,A,p),k=[];let O=0;for(let U=0;U<m.length;U++)k.push(O),O+=H*m[U].bytesPerSample;const N=(l-1-v)*e.outLineWidth;for(let U=0;U<o;U++){const V=U===0?0:M[U-1],P=M[U]-V;if(P===0)continue;const G=new Float32Array(d);let le=0;for(let Q=0;Q<P;Q++){const Ke=V+Q,vt=1-le;if(vt<=0)break;let Gt=1;if(T>=0){const $e=m[T].bytesPerSample,dt=k[T]+Ke*$e;Gt=$e===2?x(D.getUint16(dt,!0)):D.getFloat32(dt,!0)}for(let $e=0;$e<m.length;$e++){const dt=m[$e],ln=_[dt.name];if(ln===void 0)continue;const hn=dt.bytesPerSample,mn=k[$e]+Ke*hn,kt=hn===2?x(D.getUint16(mn,!0)):D.getFloat32(mn,!0);G[ln]+=kt*vt}le+=Gt*vt}_.A!==void 0&&(G[_.A]=le);const He=N+U*d;for(let Q=0;Q<d;Q++)e.byteArray[He+Q]=g?pt.toHalfFloat(G[Q]):G[Q]}}}function xr(e,n,o){const l={};let m=!1;for(;;){const p=sn(n,o);if(p==="")break;m=!0;const u=sn(n,o),_=Be(e,o),d=no(e,n,o,u,_);d===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${u}'.`):l[p]=d}return m?l:null}function uo(e,n,o){if(e.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");const l=e.getUint8(4),m=e.getUint8(5),p={singleTile:!!(m&2),longName:!!(m&4),deepFormat:!!(m&8),multiPart:!!(m&16)};o.value=8;const u=[];if(p.multiPart){for(;;){const _=xr(e,n,o);if(_===null)break;_.version=l,_.spec=p,u.push(_)}if(u.length===0)throw new Error("THREE.EXRLoader: No valid part headers found.")}else{const _=xr(e,n,o);_.version=l,_.spec=p,u.push(_)}return u}function lo(e,n,o,l,m,p){const u={size:0,viewer:n,array:o,offset:l,width:e.dataWindow.xMax-e.dataWindow.xMin+1,height:e.dataWindow.yMax-e.dataWindow.yMin+1,inputChannels:e.channels,channelByteOffsets:{},shouldExpand:!1,yCbCr:!1,scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:gt};switch(e.compression){case"NO_COMPRESSION":u.blockHeight=1,u.uncompress=on;break;case"RLE_COMPRESSION":u.blockHeight=1,u.uncompress=Bi;break;case"ZIPS_COMPRESSION":u.blockHeight=1,u.uncompress=Gn;break;case"ZIP_COMPRESSION":u.blockHeight=16,u.uncompress=Gn;break;case"PIZ_COMPRESSION":u.blockHeight=32,u.uncompress=Hi;break;case"PXR24_COMPRESSION":u.blockHeight=16,u.uncompress=Gi;break;case"B44_COMPRESSION":case"B44A_COMPRESSION":u.blockHeight=32,u.uncompress=ki;break;case"DWAA_COMPRESSION":u.blockHeight=32,u.uncompress=Ir;break;case"DWAB_COMPRESSION":u.blockHeight=256,u.uncompress=Ir;break;default:throw new Error("EXRLoader.parse: "+e.compression+" is unsupported")}const _={};for(const y of e.channels)switch(y.name){case"BY":case"RY":case"Y":case"R":case"G":case"B":case"A":_[y.name]=!0,u.type=y.pixelType}let d=!1,g=!1;if(_.Y&&_.RY&&_.BY)u.outputChannels=4,u.yCbCr=!0;else if(_.R&&_.G&&_.B)u.outputChannels=4;else if(_.Y)u.outputChannels=1;else throw new Error("EXRLoader.parse: file contains unsupported data channels.");switch(u.outputChannels){case 4:p==Qe?(d=!_.A,u.format=Qe,u.colorSpace=gt,u.outputChannels=4,u.decodeChannels={R:0,G:1,B:2,A:3}):p==zt?(u.format=zt,u.colorSpace=gt,u.outputChannels=2,u.decodeChannels={R:0,G:1}):p==fn?(u.format=fn,u.colorSpace=gt,u.outputChannels=1,u.decodeChannels={R:0}):g=!0;break;case 1:p==Qe?(d=!0,u.format=Qe,u.colorSpace=gt,u.outputChannels=4,u.shouldExpand=!0,u.decodeChannels={Y:0}):p==zt?(u.format=zt,u.colorSpace=gt,u.outputChannels=2,u.shouldExpand=!0,u.decodeChannels={Y:0}):p==fn?(u.format=fn,u.colorSpace=gt,u.outputChannels=1,u.decodeChannels={Y:0}):g=!0;break;default:g=!0}if(g)throw new Error("EXRLoader.parse: invalid output format for specified file.");if(u.yCbCr&&(u.format=Qe,u.outputChannels=4,u.decodeChannels={Y:0,RY:1,BY:2},d=!0),u.type==1)switch(m){case lt:u.getter=Xi;break;case Ne:u.getter=Ht;break}else if(u.type==2)switch(m){case lt:u.getter=we;break;case Ne:u.getter=Wi}else throw new Error("EXRLoader.parse: unsupported pixelType "+u.type+" for "+e.compression+".");u.columns=u.width;const T=u.width*u.height*u.outputChannels;switch(m){case lt:u.byteArray=new Float32Array(T),d&&u.byteArray.fill(1,0,T);break;case Ne:u.byteArray=new Uint16Array(T),d&&u.byteArray.fill(15360,0,T);break;default:console.error("THREE.EXRLoader: unsupported type: ",m);break}let I=0;for(const y of e.channels)u.decodeChannels[y.name]!==void 0&&(u.channelByteOffsets[y.name]=I),I+=y.pixelType*2;if(u.totalBytes=I,u.outLineWidth=u.width*u.outputChannels,e.lineOrder==="INCREASING_Y"?u.scanOrder=y=>y:u.scanOrder=y=>u.height-1-y,e.spec.deepFormat){u.deepChannels=[];let y=0;for(const v of e.channels){const b=v.pixelType===0?4:v.pixelType*2;u.deepChannels.push({name:v.name,pixelType:v.pixelType,bytesPerSample:b}),y+=b}u.deepBytesPerSample=y,u.chunkOffsets=e._chunkOffsets,u.multiPart=e.spec.multiPart,u.decode=co.bind(u)}else if(e.spec.singleTile){u.blockHeight=e.tiles.ySize,u.blockWidth=e.tiles.xSize;const y=io(e.tiles,u.width,u.height),v=Ar(y,u.width,e.tiles.xSize,e.tiles.roundingMode),b=Ar(y,u.height,e.tiles.ySize,e.tiles.roundingMode);u.tileCount=v[0]*b[0];for(let A=0;A<y;A++)for(let R=0;R<b[A];R++)for(let M=0;M<v[A];M++)Te(n,l);u.decode=oo.bind(u)}else if(e.spec.multiPart)u.blockWidth=u.width,u.chunkOffsets=e._chunkOffsets,u.decode=ao.bind(u);else{u.blockWidth=u.width;const y=Math.ceil(u.height/u.blockHeight);for(let v=0;v<y;v++)Te(n,l);u.decode=so.bind(u)}return u}const an={value:0},cn=new DataView(t),ho=new Uint8Array(t),un=uo(cn,t,an),wr=Math.max(0,Math.min(this.part,un.length-1)),be=un[wr];if(be.spec.multiPart||be.spec.deepFormat)for(let e=0;e<un.length;e++){const n=un[e].chunkCount;if(e===wr){be._chunkOffsets=[];for(let o=0;o<n;o++)be._chunkOffsets.push(Te(cn,an))}else for(let o=0;o<n;o++)Te(cn,an)}const Ze=lo(be,cn,ho,an,this.type,this.outputFormat);if(Ze.decode(),Ze.shouldExpand){const e=Ze.byteArray;if(this.outputFormat==Qe)for(let n=0;n<e.length;n+=4)e[n+2]=e[n+1]=e[n];else if(this.outputFormat==zt)for(let n=0;n<e.length;n+=2)e[n+1]=e[n]}if(Ze.yCbCr){const e=Ze.byteArray,n=Ze.width*Ze.height;if(this.type===Ne)for(let o=0;o<n;o++){const l=o*4,m=x(e[l]),p=x(e[l+1]),u=x(e[l+2]),_=(1+p)*m,d=(1+u)*m,g=(m-_*.2126-d*.0722)/.7152;e[l]=pt.toHalfFloat(Math.max(0,_)),e[l+1]=pt.toHalfFloat(Math.max(0,g)),e[l+2]=pt.toHalfFloat(Math.max(0,d))}else for(let o=0;o<n;o++){const l=o*4,m=e[l],p=e[l+1],u=e[l+2],_=(1+p)*m,d=(1+u)*m;e[l]=Math.max(0,_),e[l+1]=Math.max(0,(m-_*.2126-d*.0722)/.7152),e[l+2]=Math.max(0,d)}}return{header:be,width:Ze.width,height:Ze.height,data:Ze.byteArray,format:Ze.format,colorSpace:Ze.colorSpace,type:this.type}}setDataType(t){return this.type=t,this}setOutputFormat(t){return this.outputFormat=t,this}setPart(t){return this.part=t,this}load(t,i,s,c){function a(h,f){h.colorSpace=f.colorSpace,h.minFilter=et,h.magFilter=et,h.generateMipmaps=!1,h.flipY=!1,i&&i(h,f)}return super.load(t,a,s,c)}}class Vn extends Lt{constructor(t={},i){super(i),this.options=t}load(t,i,s,c){const{width:a,height:h,depth:f}=this.options,S=new yn(null,a,h,f),C=new Mi(this.manager);return C.setRequestHeader(this.requestHeader),C.setPath(this.path),C.setWithCredentials(this.withCredentials),C.load(t,E=>{const{image:w}=E;S.image={data:w.data,width:a??w.width,height:h??w.height,depth:f??Math.sqrt(w.height)},S.type=E.type,S.format=E.format,S.colorSpace=E.colorSpace,S.needsUpdate=!0;try{i?.(S)}catch(F){c!=null?c(F):console.error(F),this.manager.itemError(t)}},s,c),S}}class Kr extends Lt{constructor(t={},i){super(i),this.options=t}load(t,i,s,c){const{width:a,height:h}=this.options,f=new Kn(null,a,h),S=new Mi(this.manager);return S.setRequestHeader(this.requestHeader),S.setPath(this.path),S.setWithCredentials(this.withCredentials),S.load(t,C=>{const{image:E}=C;f.image={data:E.data,width:a??E.width,height:h??E.height},f.type=C.type,f.format=C.format,f.colorSpace=C.colorSpace,f.needsUpdate=!0;try{i?.(f)}catch(w){c!=null?c(w):console.error(w),this.manager.itemError(t)}},s,c),f}}let Tn;function $s(){if(Tn!=null)return Tn;const r=new Uint32Array([268435456]);return Tn=new Uint8Array(r.buffer,r.byteOffset,r.byteLength)[0]===0,Tn}function Js(r,t,i,s=!0){if(s===$s())return new t(r);const c=Object.assign(new DataView(r),{getFloat16(h,f){return Ms(this,h,f)}}),a=new t(c.byteLength/t.BYTES_PER_ELEMENT);for(let h=0,f=0;h<a.length;++h,f+=t.BYTES_PER_ELEMENT)a[h]=c[i](f,s);return a}const da=r=>new Uint8Array(r),Vt=(r,t)=>Js(r,$,"getFloat16",t),$r=typeof window<"u"&&window.requestIdleCallback!=null?window.requestIdleCallback:function(t,i={}){const c=i.timeout??1,a=performance.now();return setTimeout(()=>{t({get didTimeout(){return i.timeout!=null?!1:performance.now()-a-1>c},timeRemaining(){return Math.max(0,1+(performance.now()-a))}})},1)},bt=`// Based on: https://github.com/ebruneton/precomputed_atmospheric_scattering/blob/master/atmosphere/functions.glsl

/**
 * Copyright (c) 2017 Eric Bruneton
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Precomputed Atmospheric Scattering
 * Copyright (c) 2008 INRIA
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holders nor the names of its
 *    contributors may be used to endorse or promote products derived from
 *    this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF
 * THE POSSIBILITY OF SUCH DAMAGE.
 */

Number GetLayerDensity(const DensityProfileLayer layer, const Length altitude) {
  Number density = layer.exp_term * exp(layer.exp_scale * altitude) +
      layer.linear_term * altitude + layer.constant_term;
  return clamp(density, Number(0.0), Number(1.0));
}

Number GetProfileDensity(const DensityProfile profile, const Length altitude) {
  DensityProfileLayer layers[2] = profile.layers;
  return altitude < layers[0].width
    ? GetLayerDensity(layers[0], altitude)
    : GetLayerDensity(layers[1], altitude);
}

Length ComputeOpticalLengthToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere, const DensityProfile profile,
    const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  // Number of intervals for the numerical integration.
  const int SAMPLE_COUNT = 500;
  // The integration step, i.e. the length of each integration interval.
  Length dx =
      DistanceToTopAtmosphereBoundary(atmosphere, r, mu) / Number(SAMPLE_COUNT);
  // Integration loop.
  Length result = 0.0 * m;
  for (int i = 0; i <= SAMPLE_COUNT; ++i) {
    Length d_i = Number(i) * dx;
    // Distance between the current sample point and the planet center.
    Length r_i = sqrt(d_i * d_i + 2.0 * r * mu * d_i + r * r);
    // Number density at the current sample point (divided by the number density
    // at the bottom of the atmosphere, yielding a dimensionless number).
    Number y_i = GetProfileDensity(profile, r_i - atmosphere.bottom_radius);
    // Sample weight (from the trapezoidal rule).
    Number weight_i = i == 0 || i == SAMPLE_COUNT ? 0.5 : 1.0;
    result += y_i * weight_i * dx;
  }
  return result;
}

DimensionlessSpectrum ComputeTransmittanceToTopAtmosphereBoundary(
    const AtmosphereParameters atmosphere, const Length r, const Number mu) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  vec3 optical_depth = (
      atmosphere.rayleigh_scattering *
          ComputeOpticalLengthToTopAtmosphereBoundary(
              atmosphere, atmosphere.rayleigh_density, r, mu) +
      atmosphere.mie_extinction *
          ComputeOpticalLengthToTopAtmosphereBoundary(
              atmosphere, atmosphere.mie_density, r, mu) +
      atmosphere.absorption_extinction *
          ComputeOpticalLengthToTopAtmosphereBoundary(
              atmosphere, atmosphere.absorption_density, r, mu));
  // @shotamatsuda: Added for the precomputation stage in half-float precision.
  #ifdef TRANSMITTANCE_PRECISION_LOG
  return optical_depth;
  #else // TRANSMITTANCE_PRECISION_LOG
  return exp(-optical_depth);
  #endif // TRANSMITTANCE_PRECISION_LOG
}

Number GetUnitRangeFromTextureCoord(const Number u, const int texture_size) {
  return (u - 0.5 / Number(texture_size)) / (1.0 - 1.0 / Number(texture_size));
}

void GetRMuFromTransmittanceTextureUv(const AtmosphereParameters atmosphere,
    const vec2 uv, out Length r, out Number mu) {
  assert(uv.x >= 0.0 && uv.x <= 1.0);
  assert(uv.y >= 0.0 && uv.y <= 1.0);
  Number x_mu = GetUnitRangeFromTextureCoord(uv.x, TRANSMITTANCE_TEXTURE_WIDTH);
  Number x_r = GetUnitRangeFromTextureCoord(uv.y, TRANSMITTANCE_TEXTURE_HEIGHT);
  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon, from which we can compute r:
  Length rho = H * x_r;
  r = sqrt(rho * rho + atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the top atmosphere boundary for the ray (r,mu), and its minimum
  // and maximum values over all mu - obtained for (r,1) and (r,mu_horizon) -
  // from which we can recover mu:
  Length d_min = atmosphere.top_radius - r;
  Length d_max = rho + H;
  Length d = d_min + x_mu * (d_max - d_min);
  mu = d == 0.0 * m ? Number(1.0) : (H * H - rho * rho - d * d) / (2.0 * r * d);
  mu = ClampCosine(mu);
}

DimensionlessSpectrum ComputeTransmittanceToTopAtmosphereBoundaryTexture(
    const AtmosphereParameters atmosphere, const vec2 frag_coord) {
  const vec2 TRANSMITTANCE_TEXTURE_SIZE =
      vec2(TRANSMITTANCE_TEXTURE_WIDTH, TRANSMITTANCE_TEXTURE_HEIGHT);
  Length r;
  Number mu;
  GetRMuFromTransmittanceTextureUv(
      atmosphere, frag_coord / TRANSMITTANCE_TEXTURE_SIZE, r, mu);
  return ComputeTransmittanceToTopAtmosphereBoundary(atmosphere, r, mu);
}

void ComputeSingleScatteringIntegrand(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const Length d, const bool ray_r_mu_intersects_ground,
    out DimensionlessSpectrum rayleigh, out DimensionlessSpectrum mie) {
  Length r_d = ClampRadius(atmosphere, sqrt(d * d + 2.0 * r * mu * d + r * r));
  Number mu_s_d = ClampCosine((r * mu_s + d * nu) / r_d);
  DimensionlessSpectrum transmittance =
      GetTransmittance(
          atmosphere, transmittance_texture, r, mu, d,
          ray_r_mu_intersects_ground) *
      GetTransmittanceToSun(
          atmosphere, transmittance_texture, r_d, mu_s_d);
  rayleigh = transmittance * GetProfileDensity(
      atmosphere.rayleigh_density, r_d - atmosphere.bottom_radius);
  mie = transmittance * GetProfileDensity(
      atmosphere.mie_density, r_d - atmosphere.bottom_radius);
}

Length DistanceToNearestAtmosphereBoundary(const AtmosphereParameters atmosphere,
    Length r, Number mu, bool ray_r_mu_intersects_ground) {
  if (ray_r_mu_intersects_ground) {
    return DistanceToBottomAtmosphereBoundary(atmosphere, r, mu);
  } else {
    return DistanceToTopAtmosphereBoundary(atmosphere, r, mu);
  }
}

void ComputeSingleScattering(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    out IrradianceSpectrum rayleigh, out IrradianceSpectrum mie) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Number of intervals for the numerical integration.
  const int SAMPLE_COUNT = 50;
  // The integration step, i.e. the length of each integration interval.
  Length dx =
      DistanceToNearestAtmosphereBoundary(atmosphere, r, mu,
          ray_r_mu_intersects_ground) / Number(SAMPLE_COUNT);
  // Integration loop.
  DimensionlessSpectrum rayleigh_sum = DimensionlessSpectrum(0.0);
  DimensionlessSpectrum mie_sum = DimensionlessSpectrum(0.0);
  for (int i = 0; i <= SAMPLE_COUNT; ++i) {
    Length d_i = Number(i) * dx;
    // The Rayleigh and Mie single scattering at the current sample point.
    DimensionlessSpectrum rayleigh_i;
    DimensionlessSpectrum mie_i;
    ComputeSingleScatteringIntegrand(atmosphere, transmittance_texture,
        r, mu, mu_s, nu, d_i, ray_r_mu_intersects_ground, rayleigh_i, mie_i);
    // Sample weight (from the trapezoidal rule).
    Number weight_i = (i == 0 || i == SAMPLE_COUNT) ? 0.5 : 1.0;
    rayleigh_sum += rayleigh_i * weight_i;
    mie_sum += mie_i * weight_i;
  }
  rayleigh = rayleigh_sum * dx * atmosphere.solar_irradiance *
      atmosphere.rayleigh_scattering;
  mie = mie_sum * dx * atmosphere.solar_irradiance * atmosphere.mie_scattering;
}

void GetRMuMuSNuFromScatteringTextureUvwz(const AtmosphereParameters atmosphere,
    const vec4 uvwz, out Length r, out Number mu, out Number mu_s,
    out Number nu, out bool ray_r_mu_intersects_ground) {
  assert(uvwz.x >= 0.0 && uvwz.x <= 1.0);
  assert(uvwz.y >= 0.0 && uvwz.y <= 1.0);
  assert(uvwz.z >= 0.0 && uvwz.z <= 1.0);
  assert(uvwz.w >= 0.0 && uvwz.w <= 1.0);

  // Distance to top atmosphere boundary for a horizontal ray at ground level.
  Length H = sqrt(atmosphere.top_radius * atmosphere.top_radius -
      atmosphere.bottom_radius * atmosphere.bottom_radius);
  // Distance to the horizon.
  Length rho =
      H * GetUnitRangeFromTextureCoord(uvwz.w, SCATTERING_TEXTURE_R_SIZE);
  r = sqrt(rho * rho + atmosphere.bottom_radius * atmosphere.bottom_radius);

  if (uvwz.z < 0.5) {
    // Distance to the ground for the ray (r,mu), and its minimum and maximum
    // values over all mu - obtained for (r,-1) and (r,mu_horizon) - from which
    // we can recover mu:
    Length d_min = r - atmosphere.bottom_radius;
    Length d_max = rho;
    Length d = d_min + (d_max - d_min) * GetUnitRangeFromTextureCoord(
        1.0 - 2.0 * uvwz.z, SCATTERING_TEXTURE_MU_SIZE / 2);
    mu = d == 0.0 * m ? Number(-1.0) :
        ClampCosine(-(rho * rho + d * d) / (2.0 * r * d));
    ray_r_mu_intersects_ground = true;
  } else {
    // Distance to the top atmosphere boundary for the ray (r,mu), and its
    // minimum and maximum values over all mu - obtained for (r,1) and
    // (r,mu_horizon) - from which we can recover mu:
    Length d_min = atmosphere.top_radius - r;
    Length d_max = rho + H;
    Length d = d_min + (d_max - d_min) * GetUnitRangeFromTextureCoord(
        2.0 * uvwz.z - 1.0, SCATTERING_TEXTURE_MU_SIZE / 2);
    mu = d == 0.0 * m ? Number(1.0) :
        ClampCosine((H * H - rho * rho - d * d) / (2.0 * r * d));
    ray_r_mu_intersects_ground = false;
  }

  Number x_mu_s =
      GetUnitRangeFromTextureCoord(uvwz.y, SCATTERING_TEXTURE_MU_S_SIZE);
  Length d_min = atmosphere.top_radius - atmosphere.bottom_radius;
  Length d_max = H;
  Length D = DistanceToTopAtmosphereBoundary(
      atmosphere, atmosphere.bottom_radius, atmosphere.mu_s_min);
  Number A = (D - d_min) / (d_max - d_min);
  Number a = (A - x_mu_s * A) / (1.0 + x_mu_s * A);
  Length d = d_min + min(a, A) * (d_max - d_min);
  mu_s = d == 0.0 * m ? Number(1.0) :
     ClampCosine((H * H - d * d) / (2.0 * atmosphere.bottom_radius * d));

  nu = ClampCosine(uvwz.x * 2.0 - 1.0);
}

void GetRMuMuSNuFromScatteringTextureFragCoord(
    const AtmosphereParameters atmosphere, const vec3 frag_coord,
    out Length r, out Number mu, out Number mu_s, out Number nu,
    out bool ray_r_mu_intersects_ground) {
  const vec4 SCATTERING_TEXTURE_SIZE = vec4(
      SCATTERING_TEXTURE_NU_SIZE - 1,
      SCATTERING_TEXTURE_MU_S_SIZE,
      SCATTERING_TEXTURE_MU_SIZE,
      SCATTERING_TEXTURE_R_SIZE);
  Number frag_coord_nu =
      floor(frag_coord.x / Number(SCATTERING_TEXTURE_MU_S_SIZE));
  Number frag_coord_mu_s =
      mod(frag_coord.x, Number(SCATTERING_TEXTURE_MU_S_SIZE));
  vec4 uvwz =
      vec4(frag_coord_nu, frag_coord_mu_s, frag_coord.y, frag_coord.z) /
          SCATTERING_TEXTURE_SIZE;
  GetRMuMuSNuFromScatteringTextureUvwz(
      atmosphere, uvwz, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  // Clamp nu to its valid range of values, given mu and mu_s.
  nu = clamp(nu, mu * mu_s - sqrt((1.0 - mu * mu) * (1.0 - mu_s * mu_s)),
      mu * mu_s + sqrt((1.0 - mu * mu) * (1.0 - mu_s * mu_s)));
}

void ComputeSingleScatteringTexture(const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture, const vec3 frag_coord,
    out IrradianceSpectrum rayleigh, out IrradianceSpectrum mie) {
  Length r;
  Number mu;
  Number mu_s;
  Number nu;
  bool ray_r_mu_intersects_ground;
  GetRMuMuSNuFromScatteringTextureFragCoord(atmosphere, frag_coord,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  ComputeSingleScattering(atmosphere, transmittance_texture,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground, rayleigh, mie);
}

AbstractSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const AbstractScatteringTexture scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  vec4 uvwz = GetScatteringTextureUvwzFromRMuMuSNu(
      atmosphere, r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  Number tex_coord_x = uvwz.x * Number(SCATTERING_TEXTURE_NU_SIZE - 1);
  Number tex_x = floor(tex_coord_x);
  Number lerp = tex_coord_x - tex_x;
  vec3 uvw0 = vec3((tex_x + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  vec3 uvw1 = vec3((tex_x + 1.0 + uvwz.y) / Number(SCATTERING_TEXTURE_NU_SIZE),
      uvwz.z, uvwz.w);
  return AbstractSpectrum(texture(scattering_texture, uvw0) * (1.0 - lerp) +
      texture(scattering_texture, uvw1) * lerp);
}

RadianceSpectrum GetScattering(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground,
    const int scattering_order) {
  if (scattering_order == 1) {
    IrradianceSpectrum rayleigh = GetScattering(
        atmosphere, single_rayleigh_scattering_texture, r, mu, mu_s, nu,
        ray_r_mu_intersects_ground);
    IrradianceSpectrum mie = GetScattering(
        atmosphere, single_mie_scattering_texture, r, mu, mu_s, nu,
        ray_r_mu_intersects_ground);
    return rayleigh * RayleighPhaseFunction(nu) +
        mie * MiePhaseFunction(atmosphere.mie_phase_function_g, nu);
  } else {
    return GetScattering(
        atmosphere, multiple_scattering_texture, r, mu, mu_s, nu,
        ray_r_mu_intersects_ground);
  }
}

IrradianceSpectrum GetIrradiance(
    const AtmosphereParameters atmosphere,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu_s);

RadianceDensitySpectrum ComputeScatteringDensity(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const IrradianceTexture irradiance_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const int scattering_order) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);
  assert(scattering_order >= 2);

  // Compute unit direction vectors for the zenith, the view direction omega and
  // and the sun direction omega_s, such that the cosine of the view-zenith
  // angle is mu, the cosine of the sun-zenith angle is mu_s, and the cosine of
  // the view-sun angle is nu. The goal is to simplify computations below.
  vec3 zenith_direction = vec3(0.0, 0.0, 1.0);
  vec3 omega = vec3(sqrt(1.0 - mu * mu), 0.0, mu);
  Number sun_dir_x = omega.x == 0.0 ? 0.0 : (nu - mu * mu_s) / omega.x;
  Number sun_dir_y = sqrt(max(1.0 - sun_dir_x * sun_dir_x - mu_s * mu_s, 0.0));
  vec3 omega_s = vec3(sun_dir_x, sun_dir_y, mu_s);

  const int SAMPLE_COUNT = 16;
  const Angle dphi = pi / Number(SAMPLE_COUNT);
  const Angle dtheta = pi / Number(SAMPLE_COUNT);
  RadianceDensitySpectrum rayleigh_mie =
      RadianceDensitySpectrum(0.0 * watt_per_cubic_meter_per_sr_per_nm);

  // Nested loops for the integral over all the incident directions omega_i.
  for (int l = 0; l < SAMPLE_COUNT; ++l) {
    Angle theta = (Number(l) + 0.5) * dtheta;
    Number cos_theta = cos(theta);
    Number sin_theta = sin(theta);
    bool ray_r_theta_intersects_ground =
        RayIntersectsGround(atmosphere, r, cos_theta);

    // The distance and transmittance to the ground only depend on theta, so we
    // can compute them in the outer loop for efficiency.
    Length distance_to_ground = 0.0 * m;
    DimensionlessSpectrum transmittance_to_ground = DimensionlessSpectrum(0.0);
    DimensionlessSpectrum ground_albedo = DimensionlessSpectrum(0.0);
    if (ray_r_theta_intersects_ground) {
      distance_to_ground =
          DistanceToBottomAtmosphereBoundary(atmosphere, r, cos_theta);
      transmittance_to_ground =
          GetTransmittance(atmosphere, transmittance_texture, r, cos_theta,
              distance_to_ground, true /* ray_intersects_ground */);
      ground_albedo = atmosphere.ground_albedo;
    }

    for (int m = 0; m < 2 * SAMPLE_COUNT; ++m) {
      Angle phi = (Number(m) + 0.5) * dphi;
      vec3 omega_i =
          vec3(cos(phi) * sin_theta, sin(phi) * sin_theta, cos_theta);
      SolidAngle domega_i = (dtheta / rad) * (dphi / rad) * sin(theta) * sr;

      // The radiance L_i arriving from direction omega_i after n-1 bounces is
      // the sum of a term given by the precomputed scattering texture for the
      // (n-1)-th order:
      Number nu1 = dot(omega_s, omega_i);
      RadianceSpectrum incident_radiance = GetScattering(atmosphere,
          single_rayleigh_scattering_texture, single_mie_scattering_texture,
          multiple_scattering_texture, r, omega_i.z, mu_s, nu1,
          ray_r_theta_intersects_ground, scattering_order - 1);

      // and of the contribution from the light paths with n-1 bounces and whose
      // last bounce is on the ground. This contribution is the product of the
      // transmittance to the ground, the ground albedo, the ground BRDF, and
      // the irradiance received on the ground after n-2 bounces.
      vec3 ground_normal =
          normalize(zenith_direction * r + omega_i * distance_to_ground);
      IrradianceSpectrum ground_irradiance = GetIrradiance(
          atmosphere, irradiance_texture, atmosphere.bottom_radius,
          dot(ground_normal, omega_s));
      incident_radiance += transmittance_to_ground *
          ground_albedo * (1.0 / (PI * sr)) * ground_irradiance;

      // The radiance finally scattered from direction omega_i towards direction
      // -omega is the product of the incident radiance, the scattering
      // coefficient, and the phase function for directions omega and omega_i
      // (all this summed over all particle types, i.e. Rayleigh and Mie).
      Number nu2 = dot(omega, omega_i);
      Number rayleigh_density = GetProfileDensity(
          atmosphere.rayleigh_density, r - atmosphere.bottom_radius);
      Number mie_density = GetProfileDensity(
          atmosphere.mie_density, r - atmosphere.bottom_radius);
      rayleigh_mie += incident_radiance * (
          atmosphere.rayleigh_scattering * rayleigh_density *
              RayleighPhaseFunction(nu2) +
          atmosphere.mie_scattering * mie_density *
              MiePhaseFunction(atmosphere.mie_phase_function_g, nu2)) *
          domega_i;
    }
  }
  return rayleigh_mie;
}

RadianceSpectrum ComputeMultipleScattering(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ScatteringDensityTexture scattering_density_texture,
    const Length r, const Number mu, const Number mu_s, const Number nu,
    const bool ray_r_mu_intersects_ground) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu >= -1.0 && mu <= 1.0);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(nu >= -1.0 && nu <= 1.0);

  // Number of intervals for the numerical integration.
  const int SAMPLE_COUNT = 50;
  // The integration step, i.e. the length of each integration interval.
  Length dx =
      DistanceToNearestAtmosphereBoundary(
          atmosphere, r, mu, ray_r_mu_intersects_ground) /
              Number(SAMPLE_COUNT);
  // Integration loop.
  RadianceSpectrum rayleigh_mie_sum =
      RadianceSpectrum(0.0 * watt_per_square_meter_per_sr_per_nm);
  for (int i = 0; i <= SAMPLE_COUNT; ++i) {
    Length d_i = Number(i) * dx;

    // The r, mu and mu_s parameters at the current integration point (see the
    // single scattering section for a detailed explanation).
    Length r_i =
        ClampRadius(atmosphere, sqrt(d_i * d_i + 2.0 * r * mu * d_i + r * r));
    Number mu_i = ClampCosine((r * mu + d_i) / r_i);
    Number mu_s_i = ClampCosine((r * mu_s + d_i * nu) / r_i);

    // The Rayleigh and Mie multiple scattering at the current sample point.
    RadianceSpectrum rayleigh_mie_i =
        GetScattering(
            atmosphere, scattering_density_texture, r_i, mu_i, mu_s_i, nu,
            ray_r_mu_intersects_ground) *
        GetTransmittance(
            atmosphere, transmittance_texture, r, mu, d_i,
            ray_r_mu_intersects_ground) *
        dx;
    // Sample weight (from the trapezoidal rule).
    Number weight_i = (i == 0 || i == SAMPLE_COUNT) ? 0.5 : 1.0;
    rayleigh_mie_sum += rayleigh_mie_i * weight_i;
  }
  return rayleigh_mie_sum;
}

RadianceDensitySpectrum ComputeScatteringDensityTexture(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const IrradianceTexture irradiance_texture,
    const vec3 frag_coord, const int scattering_order) {
  Length r;
  Number mu;
  Number mu_s;
  Number nu;
  bool ray_r_mu_intersects_ground;
  GetRMuMuSNuFromScatteringTextureFragCoord(atmosphere, frag_coord,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  return ComputeScatteringDensity(atmosphere, transmittance_texture,
      single_rayleigh_scattering_texture, single_mie_scattering_texture,
      multiple_scattering_texture, irradiance_texture, r, mu, mu_s, nu,
      scattering_order);
}

RadianceSpectrum ComputeMultipleScatteringTexture(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const ScatteringDensityTexture scattering_density_texture,
    const vec3 frag_coord, out Number nu) {
  Length r;
  Number mu;
  Number mu_s;
  bool ray_r_mu_intersects_ground;
  GetRMuMuSNuFromScatteringTextureFragCoord(atmosphere, frag_coord,
      r, mu, mu_s, nu, ray_r_mu_intersects_ground);
  return ComputeMultipleScattering(atmosphere, transmittance_texture,
      scattering_density_texture, r, mu, mu_s, nu,
      ray_r_mu_intersects_ground);
}

IrradianceSpectrum ComputeDirectIrradiance(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const Length r, const Number mu_s) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);

  Number alpha_s = atmosphere.sun_angular_radius / rad;
  // Approximate average of the cosine factor mu_s over the visible fraction of
  // the Sun disc.
  Number average_cosine_factor =
    mu_s < -alpha_s ? 0.0 : (mu_s > alpha_s ? mu_s :
        (mu_s + alpha_s) * (mu_s + alpha_s) / (4.0 * alpha_s));

  return atmosphere.solar_irradiance *
      GetTransmittanceToTopAtmosphereBoundary(
          atmosphere, transmittance_texture, r, mu_s) * average_cosine_factor;

}

IrradianceSpectrum ComputeIndirectIrradiance(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const Length r, const Number mu_s, const int scattering_order) {
  assert(r >= atmosphere.bottom_radius && r <= atmosphere.top_radius);
  assert(mu_s >= -1.0 && mu_s <= 1.0);
  assert(scattering_order >= 1);

  const int SAMPLE_COUNT = 32;
  const Angle dphi = pi / Number(SAMPLE_COUNT);
  const Angle dtheta = pi / Number(SAMPLE_COUNT);

  IrradianceSpectrum result =
      IrradianceSpectrum(0.0 * watt_per_square_meter_per_nm);
  vec3 omega_s = vec3(sqrt(1.0 - mu_s * mu_s), 0.0, mu_s);
  for (int j = 0; j < SAMPLE_COUNT / 2; ++j) {
    Angle theta = (Number(j) + 0.5) * dtheta;
    for (int i = 0; i < 2 * SAMPLE_COUNT; ++i) {
      Angle phi = (Number(i) + 0.5) * dphi;
      vec3 omega =
          vec3(cos(phi) * sin(theta), sin(phi) * sin(theta), cos(theta));
      SolidAngle domega = (dtheta / rad) * (dphi / rad) * sin(theta) * sr;

      Number nu = dot(omega, omega_s);
      result += GetScattering(atmosphere, single_rayleigh_scattering_texture,
          single_mie_scattering_texture, multiple_scattering_texture,
          r, omega.z, mu_s, nu, false /* ray_r_theta_intersects_ground */,
          scattering_order) *
              omega.z * domega;
    }
  }
  return result;
}

void GetRMuSFromIrradianceTextureUv(const AtmosphereParameters atmosphere,
    const vec2 uv, out Length r, out Number mu_s) {
  assert(uv.x >= 0.0 && uv.x <= 1.0);
  assert(uv.y >= 0.0 && uv.y <= 1.0);
  Number x_mu_s = GetUnitRangeFromTextureCoord(uv.x, IRRADIANCE_TEXTURE_WIDTH);
  Number x_r = GetUnitRangeFromTextureCoord(uv.y, IRRADIANCE_TEXTURE_HEIGHT);
  r = atmosphere.bottom_radius +
      x_r * (atmosphere.top_radius - atmosphere.bottom_radius);
  mu_s = ClampCosine(2.0 * x_mu_s - 1.0);
}

const vec2 IRRADIANCE_TEXTURE_SIZE =
    vec2(IRRADIANCE_TEXTURE_WIDTH, IRRADIANCE_TEXTURE_HEIGHT);

IrradianceSpectrum ComputeDirectIrradianceTexture(
    const AtmosphereParameters atmosphere,
    const TransmittanceTexture transmittance_texture,
    const vec2 frag_coord) {
  Length r;
  Number mu_s;
  GetRMuSFromIrradianceTextureUv(
      atmosphere, frag_coord / IRRADIANCE_TEXTURE_SIZE, r, mu_s);
  return ComputeDirectIrradiance(atmosphere, transmittance_texture, r, mu_s);
}

IrradianceSpectrum ComputeIndirectIrradianceTexture(
    const AtmosphereParameters atmosphere,
    const ReducedScatteringTexture single_rayleigh_scattering_texture,
    const ReducedScatteringTexture single_mie_scattering_texture,
    const ScatteringTexture multiple_scattering_texture,
    const vec2 frag_coord, const int scattering_order) {
  Length r;
  Number mu_s;
  GetRMuSFromIrradianceTextureUv(
      atmosphere, frag_coord / IRRADIANCE_TEXTURE_SIZE, r, mu_s);
  return ComputeIndirectIrradiance(atmosphere,
      single_rayleigh_scattering_texture, single_mie_scattering_texture,
      multiple_scattering_texture, r, mu_s, scattering_order);
}
`,Qs=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform sampler2D transmittanceTexture;

layout(location = 0) out vec4 outputColor;

void main() {
  vec3 deltaIrradiance;
  vec3 irradiance;
  deltaIrradiance = ComputeDirectIrradianceTexture(
    ATMOSPHERE,
    transmittanceTexture,
    gl_FragCoord.xy
  );
  irradiance = vec3(0.0);
  outputColor = vec4(OUTPUT, 1.0);
}
`,js=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform mat3 luminanceFromRadiance;
uniform sampler3D singleRayleighScatteringTexture;
uniform sampler3D singleMieScatteringTexture;
uniform sampler3D multipleScatteringTexture;
uniform int scatteringOrder;

layout(location = 0) out vec4 outputColor;

void main() {
  vec3 deltaIrradiance;
  vec3 irradiance;
  deltaIrradiance = ComputeIndirectIrradianceTexture(
    ATMOSPHERE,
    singleRayleighScatteringTexture,
    singleMieScatteringTexture,
    multipleScatteringTexture,
    gl_FragCoord.xy,
    scatteringOrder
  );
  irradiance = luminanceFromRadiance * deltaIrradiance;
  outputColor = vec4(OUTPUT, 1.0);
}
`,ea=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform mat3 luminanceFromRadiance;
uniform sampler2D transmittanceTexture;
uniform sampler3D scatteringDensityTexture;
uniform int layer;

layout(location = 0) out vec4 outputColor;

void main() {
  vec4 deltaMultipleScattering;
  vec4 scattering;
  float nu;
  deltaMultipleScattering.rgb = ComputeMultipleScatteringTexture(
    ATMOSPHERE,
    transmittanceTexture,
    scatteringDensityTexture,
    vec3(gl_FragCoord.xy, float(layer) + 0.5),
    nu
  );
  deltaMultipleScattering.a = 1.0;
  scattering = vec4(
    luminanceFromRadiance * deltaMultipleScattering.rgb / RayleighPhaseFunction(nu),
    0.0
  );
  outputColor = OUTPUT;
}
`,ta=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform sampler2D transmittanceTexture;
uniform sampler3D singleRayleighScatteringTexture;
uniform sampler3D singleMieScatteringTexture;
uniform sampler3D multipleScatteringTexture;
uniform sampler2D irradianceTexture;
uniform int scatteringOrder;
uniform int layer;

layout(location = 0) out vec4 scatteringDensity;

void main() {
  scatteringDensity.rgb = ComputeScatteringDensityTexture(
    ATMOSPHERE,
    transmittanceTexture,
    singleRayleighScatteringTexture,
    singleMieScatteringTexture,
    multipleScatteringTexture,
    irradianceTexture,
    vec3(gl_FragCoord.xy, float(layer) + 0.5),
    scatteringOrder
  );
  scatteringDensity.a = 1.0;
}
`,na=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

uniform mat3 luminanceFromRadiance;
uniform sampler2D transmittanceTexture;
uniform int layer;

layout(location = 0) out vec4 outputColor;

void main() {
  vec4 deltaRayleigh;
  vec4 deltaMie;
  vec4 scattering;
  vec4 singleMieScattering;
  ComputeSingleScatteringTexture(
    ATMOSPHERE,
    transmittanceTexture,
    vec3(gl_FragCoord.xy, float(layer) + 0.5),
    deltaRayleigh.rgb,
    deltaMie.rgb
  );
  deltaRayleigh.a = 1.0;
  deltaMie.a = 1.0;
  scattering = vec4(
    luminanceFromRadiance * deltaRayleigh.rgb,
    (luminanceFromRadiance * deltaMie.rgb).r
  );
  singleMieScattering.rgb = luminanceFromRadiance * deltaMie.rgb;
  singleMieScattering.a = 1.0;
  outputColor = OUTPUT;
}
`,ra=`precision highp float;
precision highp sampler3D;

#include "bruneton/definitions"
#include "bruneton/common"
#include "bruneton/precompute"

uniform AtmosphereParameters ATMOSPHERE;

layout(location = 0) out vec4 transmittance;

void main() {
  transmittance.rgb = ComputeTransmittanceToTopAtmosphereBoundaryTexture(
    ATMOSPHERE,
    gl_FragCoord.xy
  );
  transmittance.a = 1.0;
}
`,ia=`
  precision highp float;
  in vec2 position;
  void main() {
    gl_Position = vec4(position, 1.0, 1.0);
  }
`;function wn(r,t,i){const s=new No(t,i,{depthBuffer:!1,type:r,format:Qe}),c=s.texture;return c.minFilter=et,c.magFilter=et,c.wrapS=Jt,c.wrapT=Jt,c.colorSpace=ei,s}function Ut(r,t,i,s){const c=new Co(t,i,s,{depthBuffer:!1,type:r,format:Qe}),a=c.texture;return a.minFilter=et,a.magFilter=et,a.wrapS=Jt,a.wrapT=Jt,a.wrapR=Jt,a.colorSpace=ei,c}function oa(r){const t=r[Symbol.iterator]();return new Promise((i,s)=>{const c=()=>{try{const{value:a,done:h}=t.next();h===!0?i(a):$r(c)}catch(a){s(a instanceof Error?a:new Error)}};$r(c)})}async function Jr(r,t,i){const{width:s,height:c}=t,a=i.type===Ne?new Uint16Array(s*c*4):new Float32Array(s*c*4);await r.readRenderTargetPixelsAsync(t,0,0,t.width,t.height,a),i.userData.imageData=a}class sa{constructor(t){this.lambdas=new Oo,this.luminanceFromRadiance=new Sn,t===Ne&&(this.opticalDepth=wn(t,On,Cn)),this.deltaIrradiance=wn(t,Nn,bn),this.deltaRayleighScattering=Ut(t,St,yt,Tt),this.deltaMieScattering=Ut(t,St,yt,Tt),this.deltaScatteringDensity=Ut(t,St,yt,Tt),this.deltaMultipleScattering=this.deltaRayleighScattering}dispose(){this.opticalDepth?.dispose(),this.deltaIrradiance.dispose(),this.deltaRayleighScattering.dispose(),this.deltaMieScattering.dispose(),this.deltaScatteringDensity.dispose()}}class Nt extends Ro{constructor(t){super({glslVersion:xo,vertexShader:ia,...t,defines:{TRANSMITTANCE_TEXTURE_WIDTH:On.toFixed(0),TRANSMITTANCE_TEXTURE_HEIGHT:Cn.toFixed(0),SCATTERING_TEXTURE_R_SIZE:Lo.toFixed(0),SCATTERING_TEXTURE_MU_SIZE:Po.toFixed(0),SCATTERING_TEXTURE_MU_S_SIZE:Do.toFixed(0),SCATTERING_TEXTURE_NU_SIZE:Mo.toFixed(0),IRRADIANCE_TEXTURE_WIDTH:Nn.toFixed(0),IRRADIANCE_TEXTURE_HEIGHT:bn.toFixed(0),...t.defines}})}set additive(t){this.transparent=t,this.blending=t?wo:bo,this.blendEquation=Nr,this.blendEquationAlpha=Nr,this.blendSrc=dn,this.blendDst=dn,this.blendSrcAlpha=dn,this.blendDstAlpha=dn}setUniforms(t){const i=this.uniforms;i.luminanceFromRadiance!=null&&i.luminanceFromRadiance.value.copy(t.luminanceFromRadiance),i.singleRayleighScatteringTexture!=null&&(i.singleRayleighScatteringTexture.value=t.deltaRayleighScattering.texture),i.singleMieScatteringTexture!=null&&(i.singleMieScatteringTexture.value=t.deltaMieScattering.texture),i.multipleScatteringTexture!=null&&(i.multipleScatteringTexture.value=t.deltaMultipleScattering.texture),i.scatteringDensityTexture!=null&&(i.scatteringDensityTexture.value=t.deltaScatteringDensity.texture),i.irradianceTexture!=null&&(i.irradianceTexture.value=t.deltaIrradiance.texture)}}class pa{constructor(t,{type:i=ti(t)?lt:Ne,combinedScattering:s=!0,higherOrderScattering:c=!0}={}){this.transmittanceMaterial=new Nt({fragmentShader:Rt(ra,{bruneton:{common:wt,definitions:xt,precompute:bt}})}),this.directIrradianceMaterial=new Nt({fragmentShader:Rt(Qs,{bruneton:{common:wt,definitions:xt,precompute:bt}}),uniforms:{transmittanceTexture:new he(null)}}),this.singleScatteringMaterial=new Nt({fragmentShader:Rt(na,{bruneton:{common:wt,definitions:xt,precompute:bt}}),uniforms:{luminanceFromRadiance:new he(new Sn),transmittanceTexture:new he(null),layer:new he(0)}}),this.scatteringDensityMaterial=new Nt({fragmentShader:Rt(ta,{bruneton:{common:wt,definitions:xt,precompute:bt}}),uniforms:{transmittanceTexture:new he(null),singleRayleighScatteringTexture:new he(null),singleMieScatteringTexture:new he(null),multipleScatteringTexture:new he(null),irradianceTexture:new he(null),scatteringOrder:new he(0),layer:new he(0)}}),this.indirectIrradianceMaterial=new Nt({fragmentShader:Rt(js,{bruneton:{common:wt,definitions:xt,precompute:bt}}),uniforms:{luminanceFromRadiance:new he(new Sn),singleRayleighScatteringTexture:new he(null),singleMieScatteringTexture:new he(null),multipleScatteringTexture:new he(null),scatteringOrder:new he(0)}}),this.multipleScatteringMaterial=new Nt({fragmentShader:Rt(ea,{bruneton:{common:wt,definitions:xt,precompute:bt}}),uniforms:{luminanceFromRadiance:new he(new Sn),transmittanceTexture:new he(null),scatteringDensityTexture:new he(null),layer:new he(0)}}),this.mesh=new Eo(new Io(2,2)),this.scene=new vo().add(this.mesh),this.camera=new Ao,this.updating=!1,this.renderer=t,this.type=i,this.transmittanceRenderTarget=wn(i,On,Cn),this.scatteringRenderTarget=Ut(i,St,yt,Tt),this.irradianceRenderTarget=wn(i,Nn,bn),s||(this.singleMieScatteringRenderTarget=Ut(i,St,yt,Tt)),c&&(this.higherOrderScatteringRenderTarget=Ut(i,St,yt,Tt)),this.textures={transmittanceTexture:this.transmittanceRenderTarget.texture,scatteringTexture:this.scatteringRenderTarget.texture,irradianceTexture:this.irradianceRenderTarget.texture,singleMieScatteringTexture:this.singleMieScatteringRenderTarget?.texture,higherOrderScatteringTexture:this.higherOrderScatteringRenderTarget?.texture}}render3DRenderTarget(t,i){for(let s=0;s<t.depth;++s)i.uniforms.layer.value=s,this.renderer.setRenderTarget(t,s),this.renderer.render(this.scene,this.camera)}computeTransmittance(t){const i=this.transmittanceMaterial;delete i.defines.TRANSMITTANCE_PRECISION_LOG,i.needsUpdate=!0,this.mesh.material=i,this.renderer.setRenderTarget(t.renderTarget),this.renderer.render(this.scene,this.camera)}computeOpticalDepth(t){const i=this.transmittanceMaterial;i.defines.TRANSMITTANCE_PRECISION_LOG="1",i.needsUpdate=!0,this.mesh.material=i,this.renderer.setRenderTarget(t.renderTarget),this.renderer.render(this.scene,this.camera)}computeDirectIrradiance(t){const i=this.directIrradianceMaterial;i.defines.OUTPUT=t.output,i.additive=t.additive,this.type===Ne?i.defines.TRANSMITTANCE_PRECISION_LOG="1":delete i.defines.TRANSMITTANCE_PRECISION_LOG,i.needsUpdate=!0;const s=i.uniforms;s.transmittanceTexture.value=t.context.opticalDepth?.texture??this.transmittanceRenderTarget.texture,this.mesh.material=i,this.renderer.setRenderTarget(t.renderTarget),this.renderer.render(this.scene,this.camera)}computeSingleScattering(t){const i=this.singleScatteringMaterial;i.defines.OUTPUT=t.output,i.additive=t.additive,this.type===Ne?i.defines.TRANSMITTANCE_PRECISION_LOG="1":delete i.defines.TRANSMITTANCE_PRECISION_LOG,i.needsUpdate=!0;const s=i.uniforms;s.transmittanceTexture.value=t.context.opticalDepth?.texture??this.transmittanceRenderTarget.texture,i.setUniforms(t.context),this.mesh.material=i,this.render3DRenderTarget(t.renderTarget,i)}computeScatteringDensity(t){const i=this.scatteringDensityMaterial;this.type===Ne?i.defines.TRANSMITTANCE_PRECISION_LOG="1":delete i.defines.TRANSMITTANCE_PRECISION_LOG,i.needsUpdate=!0;const s=i.uniforms;s.transmittanceTexture.value=t.context.opticalDepth?.texture??this.transmittanceRenderTarget.texture,s.scatteringOrder.value=t.scatteringOrder,i.setUniforms(t.context),this.mesh.material=i,this.render3DRenderTarget(t.renderTarget,i)}computeIndirectIrradiance(t){const i=this.indirectIrradianceMaterial;i.defines.OUTPUT=t.output,i.additive=t.additive,i.needsUpdate=!0;const s=i.uniforms;s.scatteringOrder.value=t.scatteringOrder-1,i.setUniforms(t.context),this.mesh.material=i,this.renderer.setRenderTarget(t.renderTarget),this.renderer.render(this.scene,this.camera)}computeMultipleScattering(t){const i=this.multipleScatteringMaterial;i.defines.OUTPUT=t.output,i.additive=t.additive,this.type===Ne?i.defines.TRANSMITTANCE_PRECISION_LOG="1":delete i.defines.TRANSMITTANCE_PRECISION_LOG,i.needsUpdate=!0;const s=i.uniforms;s.transmittanceTexture.value=t.context.opticalDepth?.texture??this.transmittanceRenderTarget.texture,i.setUniforms(t.context),this.mesh.material=i,this.render3DRenderTarget(t.renderTarget,i)}*precompute(t,i){this.computeTransmittance({renderTarget:this.transmittanceRenderTarget}),this.type===Ne&&(ar(t.opticalDepth!=null),this.computeOpticalDepth({renderTarget:t.opticalDepth})),this.computeDirectIrradiance({renderTarget:t.deltaIrradiance,context:t,output:"deltaIrradiance",additive:!1}),this.computeDirectIrradiance({renderTarget:this.irradianceRenderTarget,context:t,output:"irradiance",additive:i}),this.renderer.setRenderTarget(null),yield,this.computeSingleScattering({renderTarget:t.deltaRayleighScattering,context:t,output:"deltaRayleigh",additive:!1}),this.computeSingleScattering({renderTarget:t.deltaMieScattering,context:t,output:"deltaMie",additive:!1}),this.computeSingleScattering({renderTarget:this.scatteringRenderTarget,context:t,output:"scattering",additive:i}),this.singleMieScatteringRenderTarget!=null&&this.computeSingleScattering({renderTarget:this.singleMieScatteringRenderTarget,context:t,output:"singleMieScattering",additive:i}),this.renderer.setRenderTarget(null),yield;for(let s=2;s<=4;++s)this.computeScatteringDensity({renderTarget:t.deltaScatteringDensity,context:t,scatteringOrder:s}),this.computeIndirectIrradiance({renderTarget:t.deltaIrradiance,context:t,scatteringOrder:s,output:"deltaIrradiance",additive:!1}),this.computeIndirectIrradiance({renderTarget:this.irradianceRenderTarget,context:t,scatteringOrder:s,output:"irradiance",additive:!0}),this.computeMultipleScattering({renderTarget:t.deltaMultipleScattering,context:t,output:"deltaMultipleScattering",additive:!1}),this.computeMultipleScattering({renderTarget:this.scatteringRenderTarget,context:t,output:"scattering",additive:!0}),this.higherOrderScatteringRenderTarget!=null&&this.computeMultipleScattering({renderTarget:this.higherOrderScatteringRenderTarget,context:t,output:"scattering",additive:!0}),this.renderer.setRenderTarget(null),yield}async update(t=Uo.DEFAULT){this.updating=!0;const i=t.toUniform();this.transmittanceMaterial.uniforms.ATMOSPHERE=i,this.directIrradianceMaterial.uniforms.ATMOSPHERE=i,this.singleScatteringMaterial.uniforms.ATMOSPHERE=i,this.scatteringDensityMaterial.uniforms.ATMOSPHERE=i,this.indirectIrradianceMaterial.uniforms.ATMOSPHERE=i,this.multipleScatteringMaterial.uniforms.ATMOSPHERE=i;const s=this.renderer,c=new sa(this.type);c.lambdas.set(680,550,440),c.luminanceFromRadiance.identity();const a=s.autoClear;return s.autoClear=!1,await oa(this.precompute(c,!1)),s.autoClear=a,c.dispose(),await Jr(this.renderer,this.transmittanceRenderTarget,this.transmittanceRenderTarget.texture),await Jr(this.renderer,this.irradianceRenderTarget,this.irradianceRenderTarget.texture),this.updating=!1,this.disposeQueue?.(),this.textures}dispose(t={}){if(this.updating){this.disposeQueue=()=>{this.dispose(t),this.disposeQueue=void 0};return}const{textures:i=!0}=t;i||(this.transmittanceRenderTarget.textures.splice(0,1),this.scatteringRenderTarget.textures.splice(0,1),this.irradianceRenderTarget.textures.splice(0,1),this.singleMieScatteringRenderTarget?.textures.splice(0,1),this.higherOrderScatteringRenderTarget?.textures.splice(0,1)),this.transmittanceRenderTarget.dispose(),this.scatteringRenderTarget.dispose(),this.irradianceRenderTarget.dispose(),this.singleMieScatteringRenderTarget?.dispose(),this.higherOrderScatteringRenderTarget?.dispose(),this.transmittanceMaterial.dispose(),this.directIrradianceMaterial.dispose(),this.singleScatteringMaterial.dispose(),this.scatteringDensityMaterial.dispose(),this.indirectIrradianceMaterial.dispose(),this.multipleScatteringMaterial.dispose(),this.mesh.geometry.dispose()}}function aa(r){var t=[];if(r.length===0)return"";if(typeof r[0]!="string")throw new TypeError("Url must be a string. Received "+r[0]);if(r[0].match(/^[^/:]+:\/*$/)&&r.length>1){var i=r.shift();r[0]=i+r[0]}r[0].match(/^file:\/\/\//)?r[0]=r[0].replace(/^([^/:]+):\/*/,"$1:///"):r[0]=r[0].replace(/^([^/:]+):\/*/,"$1://");for(var s=0;s<r.length;s++){var c=r[s];if(typeof c!="string")throw new TypeError("Url must be a string. Received "+c);c!==""&&(s>0&&(c=c.replace(/^[\/]+/,"")),s<r.length-1?c=c.replace(/[\/]+$/,""):c=c.replace(/[\/]+$/,"/"),t.push(c))}var a=t.join("/");a=a.replace(/\/(\?|&|#[^!])/g,"$1");var h=a.split("?");return a=h.shift()+(h.length>0?"?":"")+h.join("&"),a}function ca(){var r;return typeof arguments[0]=="object"?r=arguments[0]:r=[].slice.call(arguments),aa(r)}const Qr={width:On,height:Cn},Ct={width:St,height:yt,depth:Tt},jr={width:Nn,height:bn};class ga extends Lt{constructor({format:t="exr",type:i=Ne,combinedScattering:s=!0,higherOrderScattering:c=!0}={},a){super(a),this.format=t,this.type=i,this.combinedScattering=s,this.higherOrderScattering=c}setType(t){return this.type=ti(t)?lt:Ne,this}load(t,i,s,c){const a={},h=({key:f,loader:S,path:C})=>(S.setRequestHeader(this.requestHeader),S.setPath(this.path),S.setWithCredentials(this.withCredentials),S.load(ca(t,C),E=>{E.type=this.type,this.type===lt&&(Fo(E.image),E.image.data!=null&&(E.image.data=new Float32Array(new $(E.image.data?.buffer)))),E.minFilter=et,E.magFilter=et,a[`${f}Texture`]=E,a.irradianceTexture!=null&&a.scatteringTexture!=null&&a.transmittanceTexture!=null&&(this.combinedScattering||a.singleMieScatteringTexture!=null)&&(!this.higherOrderScattering||a.higherOrderScatteringTexture!=null)&&i?.(a)},s,c));return this.format==="exr"?{transmittanceTexture:h({key:"transmittance",loader:new Kr(Qr,this.manager),path:"transmittance.exr"}),scatteringTexture:h({key:"scattering",loader:new Vn(Ct,this.manager),path:"scattering.exr"}),irradianceTexture:h({key:"irradiance",loader:new Kr(jr,this.manager),path:"irradiance.exr"}),singleMieScatteringTexture:this.combinedScattering?void 0:h({key:"singleMieScattering",loader:new Vn(Ct,this.manager),path:"single_mie_scattering.exr"}),higherOrderScatteringTexture:this.higherOrderScattering?h({key:"higherOrderScattering",loader:new Vn(Ct,this.manager),path:"higher_order_scattering.exr"}):void 0}:{transmittanceTexture:h({key:"transmittance",loader:new Yt(Kn,Vt,Qr,this.manager),path:"transmittance.bin"}),scatteringTexture:h({key:"scattering",loader:new Yt(yn,Vt,Ct,this.manager),path:"scattering.bin"}),irradianceTexture:h({key:"irradiance",loader:new Yt(Kn,Vt,jr,this.manager),path:"irradiance.bin"}),singleMieScatteringTexture:this.combinedScattering?void 0:h({key:"singleMieScattering",loader:new Yt(yn,Vt,Ct,this.manager),path:"single_mie_scattering.bin"}),higherOrderScatteringTexture:this.higherOrderScattering?h({key:"higherOrderScattering",loader:new Yt(yn,Vt,Ct,this.manager),path:"higher_order_scattering.bin"}):void 0}}}export{Bo as A,Yt as D,Mi as E,$ as F,pa as P,ga as a,da as p,fa as z};
