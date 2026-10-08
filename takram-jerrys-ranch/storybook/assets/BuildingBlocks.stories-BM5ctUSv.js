import{Y as w,q as X,L as v}from"./iframe-BVnUeOdJ.js";import{W as x,b5 as C,bn as f,R as z,as as B,aO as W,b3 as $,C as k,bz as V,aE as L,O as b,aX as ue,x as Re,bt as Ce,bs as q,bP as E,D as ze,ae as G,bN as le,l as _,bO as D,v as Le}from"./Geodetic-FFfs8v2e.js";import{j as de}from"./StarsMaterial-Dbo9ZMjT.js";import{F as me,z as Ue,E as pe,a as T,P as O}from"./PrecomputedTexturesLoader-CUsMkm8s.js";import{u as R}from"./useControls-B4rxjebD.js";import{r as _e}from"./types-CW8VKOeh.js";import"./preload-helper-D9Z9MdNV.js";import"./index-jrkLbTh5.js";import"./index-DRKMCDNV.js";function De(e,t,o,a=x){const r=new C({glslVersion:z,vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 1.0, 1.0);
      }
    `,fragmentShader:`
      precision highp sampler3D;
      uniform sampler3D inputTexture;
      uniform int layer;
      out vec4 outputColor;
      void main() {
        outputColor = texelFetch(inputTexture, ivec3(gl_FragCoord.xy, layer), 0);
      }
    `,uniforms:{inputTexture:new f(t),layer:new f(0)}}),n=new B(new W(2,2),r),s=new $;s.add(n);const i=new k,{width:u,height:c,depth:p}=t,d=new V(u,c,{type:b,colorSpace:L}),l=new Float32Array(u*c*p*4);for(let y=0;y<p;++y)r.uniforms.layer.value=y,e.setRenderTarget(d),e.render(s,i),e.readRenderTargetPixels(d,0,0,u,c,l.subarray(u*c*4*y));e.setRenderTarget(null);const h=new Blob([a===x?new me(l).buffer:l.buffer]),S=document.createElement("a");S.href=URL.createObjectURL(h),S.download=o,document.body.appendChild(S),S.click(),document.body.removeChild(S)}const Oe=new TextEncoder,he=3;class ge{async parse(t,o,a){if(!t||!(t.isWebGLRenderer||t.isWebGPURenderer||t.isDataTexture))throw Error("EXRExporter.parse: Unsupported first parameter, expected instance of WebGLRenderer, WebGPURenderer or DataTexture.");if(t.isWebGLRenderer||t.isWebGPURenderer){const r=t,n=o,s=a;Fe(n);const i=Pe(n,s),u=await Ae(r,n,i),c=Z(u,i),p=Q(c,i);return J(p,i)}else if(t.isDataTexture){const r=t,n=o;Me(r);const s=Ie(r,n),i=r.image.data,u=Z(i,s),c=Q(u,s);return J(c,s)}}}function Fe(e){if(!e||!e.isRenderTarget)throw Error("EXRExporter.parse: Unsupported second parameter, expected instance of WebGLRenderTarget.");if(e.isCubeRenderTarget||e.isWebGLCubeRenderTarget||e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)throw Error("EXRExporter.parse: Unsupported render target type, expected instance of WebGLRenderTarget.");if(e.texture.type!==b&&e.texture.type!==x)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture type.");if(e.texture.format!==ue)throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture format, expected RGBAFormat.")}function Me(e){if(e.type!==b&&e.type!==x)throw Error("EXRExporter.parse: Unsupported DataTexture texture type.");if(e.format!==ue)throw Error("EXRExporter.parse: Unsupported DataTexture texture format, expected RGBAFormat.");if(!e.image.data)throw Error("EXRExporter.parse: Invalid DataTexture image data.");if(e.type===b&&e.image.data.constructor.name!=="Float32Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Float32Array'.");if(e.type===x&&e.image.data.constructor.name!=="Uint16Array")throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Uint16Array'.")}function Pe(e,t={}){const o={0:1,2:1,3:16},a=e.width,r=e.height,n=e.texture.type,s=e.texture.format,i=t.compression!==void 0?t.compression:he,u=t.type!==void 0?t.type:x,c=u===b?2:1,p=o[i];return{width:a,height:r,type:n,format:s,compression:i,blockLines:p,dataType:c,dataSize:2*c,numBlocks:Math.ceil(r/p),numInputChannels:4,numOutputChannels:4}}function Ie(e,t={}){const o={0:1,2:1,3:16},a=e.image.width,r=e.image.height,n=e.type,s=e.format,i=t.compression!==void 0?t.compression:he,u=t.type!==void 0?t.type:x,c=u===b?2:1,p=o[i];return{width:a,height:r,type:n,format:s,compression:i,blockLines:p,dataType:c,dataSize:2*c,numBlocks:Math.ceil(r/p),numInputChannels:4,numOutputChannels:4}}async function Ae(e,t,o){let a;return e.isWebGLRenderer?(o.type===b?a=new Float32Array(o.width*o.height*o.numInputChannels):a=new Uint16Array(o.width*o.height*o.numInputChannels),await e.readRenderTargetPixelsAsync(t,0,0,o.width,o.height,a)):a=await e.readRenderTargetPixelsAsync(t,0,0,o.width,o.height),a}function Z(e,t){const o=t.width,a=t.height,r={r:0,g:0,b:0,a:0},n={value:0},s=t.numOutputChannels==4?1:0,i=t.type==b?He:Ve,u=t.dataType==1?We:Y,c=new Uint8Array(t.width*t.height*t.numOutputChannels*t.dataSize),p=new DataView(c.buffer);for(let d=0;d<a;++d)for(let l=0;l<o;++l){const h=d*o*4+l*4,S=i(e,h),y=i(e,h+1),be=i(e,h+2),Ee=i(e,h+3),F=(a-d-1)*o*(3+s)*t.dataSize;Be(r,S,y,be,Ee),n.value=F+l*t.dataSize,u(p,r.a,n),n.value=F+s*o*t.dataSize+l*t.dataSize,u(p,r.b,n),n.value=F+(1+s)*o*t.dataSize+l*t.dataSize,u(p,r.g,n),n.value=F+(2+s)*o*t.dataSize+l*t.dataSize,u(p,r.r,n)}return c}function Q(e,t){let o,a,r=0;const n={data:new Array,totalSize:0},s=t.width*t.numOutputChannels*t.blockLines*t.dataSize;switch(t.compression){case 0:o=Ne;break;case 2:case 3:o=Xe;break}t.compression!==0&&(a=new Uint8Array(s));for(let i=0;i<t.numBlocks;++i){const u=e.subarray(s*i,s*(i+1)),c=o(u,a);r+=c.length,n.data.push({dataChunk:c,size:c.length})}return n.totalSize=r,n}function Ne(e){return e}function Xe(e,t){let o=0,a=Math.floor((e.length+1)/2),r=0;const n=e.length-1;for(;!(r>n||(t[o++]=e[r++],r>n));)t[a++]=e[r++];let s=t[0];for(let u=1;u<t.length;u++){const c=t[u]-s+384;s=t[u],t[u]=c}return Ue(t)}function Ge(e,t,o){const a={value:0},r=new DataView(e.buffer);m(r,20000630,a),m(r,2,a),g(r,"compression",a),g(r,"compression",a),m(r,1,a),U(r,o.compression,a),g(r,"screenWindowCenter",a),g(r,"v2f",a),m(r,8,a),m(r,0,a),m(r,0,a),g(r,"screenWindowWidth",a),g(r,"float",a),m(r,4,a),Y(r,1,a),g(r,"pixelAspectRatio",a),g(r,"float",a),m(r,4,a),Y(r,1,a),g(r,"lineOrder",a),g(r,"lineOrder",a),m(r,1,a),U(r,0,a),g(r,"dataWindow",a),g(r,"box2i",a),m(r,16,a),m(r,0,a),m(r,0,a),m(r,o.width-1,a),m(r,o.height-1,a),g(r,"displayWindow",a),g(r,"box2i",a),m(r,16,a),m(r,0,a),m(r,0,a),m(r,o.width-1,a),m(r,o.height-1,a),g(r,"channels",a),g(r,"chlist",a),m(r,o.numOutputChannels*18+1,a),g(r,"A",a),m(r,o.dataType,a),a.value+=4,m(r,1,a),m(r,1,a),g(r,"B",a),m(r,o.dataType,a),a.value+=4,m(r,1,a),m(r,1,a),g(r,"G",a),m(r,o.dataType,a),a.value+=4,m(r,1,a),m(r,1,a),g(r,"R",a),m(r,o.dataType,a),a.value+=4,m(r,1,a),m(r,1,a),U(r,0,a),U(r,0,a);let n=a.value+o.numBlocks*8;for(let s=0;s<t.data.length;++s)$e(r,n,a),n+=t.data[s].size+8}function J(e,t){const o=t.numBlocks*8,a=259+18*t.numOutputChannels,r={value:a+o},n=new Uint8Array(a+o+e.totalSize+t.numBlocks*8),s=new DataView(n.buffer);Ge(n,e,t);for(let i=0;i<e.data.length;++i){const u=e.data[i].dataChunk,c=e.data[i].size;m(s,i*t.blockLines,r),m(s,c,r),n.set(u,r.value),r.value+=c}return n}function Be(e,t,o,a,r){e.r=t,e.g=o,e.b=a,e.a=r}function U(e,t,o){e.setUint8(o.value,t),o.value+=1}function m(e,t,o){e.setUint32(o.value,t,!0),o.value+=4}function We(e,t,o){e.setUint16(o.value,Re.toHalfFloat(t),!0),o.value+=2}function Y(e,t,o){e.setFloat32(o.value,t,!0),o.value+=4}function $e(e,t,o){e.setBigUint64(o.value,BigInt(t),!0),o.value+=8}function g(e,t,o){const a=Oe.encode(t+"\0");for(let r=0;r<a.length;++r)U(e,a[r],o)}function ke(e){const t=(e&31744)>>10,o=e&1023;return(e>>15?-1:1)*(t?t===31?o?NaN:1/0:Math.pow(2,t-15)*(1+o/1024):6103515625e-14*(o/1024))}function Ve(e,t){return ke(e[t])}function He(e,t){return e[t]}async function fe(e,t,o=x){const a=new C({glslVersion:z,vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 1.0, 1.0);
      }
    `,fragmentShader:`
      precision highp sampler3D;
      uniform sampler3D inputTexture;
      out vec4 outputColor;
      void main() {
        ivec3 size = textureSize(inputTexture, 0);
        ivec3 coord = ivec3(
          gl_FragCoord.x,
          int(gl_FragCoord.y) % size.y,
          floor(gl_FragCoord.y / float(size.y))
        );
        outputColor = texelFetch(inputTexture, coord, 0);
      }
    `,uniforms:{inputTexture:new f(t)}}),r=new B(new W(2,2),a),n=new $;n.add(r);const s=new k,{width:i,height:u,depth:c}=t,p=new V(i,u*c,{type:o,colorSpace:L});e.setRenderTarget(p),e.render(n,s),e.setRenderTarget(null);const l=await new ge().parse(e,p,{type:o});return a.dispose(),p.dispose(),l.buffer}async function qe(e,t,o,a){const r=await fe(e,t,a),n=new Blob([r]),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=o,document.body.appendChild(s),s.click(),document.body.removeChild(s)}const H=({texture:e,name:t,type:o,zoom:a=1,valueScale:r=1})=>{const n=w.useMemo(()=>new C({glslVersion:z,vertexShader:Ye,fragmentShader:je,uniforms:{resolution:new f(new q),size:new f(new Ce(e.image.width,e.image.height,e.image.depth)),zoom:new f(0),columns:new f(0),inputTexture:new f(e),gammaCorrect:new f(!1),valueScale:new f(0)}}),[e]),s=E(({gl:l})=>l),{gammaCorrect:i,zoom:u,valueScaleLog10:c,previewEXR:p}=R({gammaCorrect:!0,zoom:{value:a,min:.5,max:10},valueScaleLog10:{value:Math.log10(r),min:-5,max:5},previewEXR:!1,saveEXR:X(()=>{qe(s,e,`${t}.exr`,o).catch(l=>{console.error(l)})}),saveBinary:X(()=>{De(s,e,`${t}.bin`)})}),d=w.useMemo(()=>new ze,[]);return w.useEffect(()=>{let l=!1;return(async()=>{const h=await fe(s,e,o);if(l)return;const y=new pe().parse(h);d.image={data:y.data,width:y.width,height:y.height/e.depth,depth:e.depth},d.type=y.type,d.minFilter=G,d.magFilter=G,d.colorSpace=L,d.needsUpdate=!0})().catch(h=>{console.error(h)}),()=>{l=!0}},[e,o,s,p,d]),le(({size:l})=>{n.uniforms.inputTexture.value=p?d:e,n.uniforms.resolution.value.set(l.width,l.height),n.uniforms.zoom.value=u,n.uniforms.columns.value=Math.floor(l.width/e.image.width),n.uniforms.gammaCorrect.value=i,n.uniforms.valueScale.value=10**c}),v(de,{material:n})},Ye=`
  out vec2 vUv;

  void main() {
    vUv = position.xy * 0.5 + 0.5;
    gl_Position = vec4(position.xy, 1.0, 1.0);
  }
`,je=`
  precision highp float;
  precision highp sampler3D;

  in vec2 vUv;

  out vec4 outputColor;

  uniform vec2 resolution;
  uniform vec3 size;
  uniform float zoom;
  uniform int columns;
  uniform sampler3D inputTexture;
  uniform bool gammaCorrect;
  uniform float valueScale;

  void main() {
    vec2 uv = vec2(vUv.x, 1.0 - vUv.y) * resolution / size.xy / zoom;
    ivec2 xy = ivec2(uv);
    if (xy.x >= columns) {
      discard;
    }
    int index = xy.y * columns + xy.x % columns;
    if (index >= int(size.z)) {
      discard;
    }
    vec3 uvw = vec3(fract(uv), (float(index) + 0.5) / size.z);
    vec4 color = vec4(texture(inputTexture, uvw).rgb * valueScale, 1.0);
    outputColor = gammaCorrect ? linearToOutputTexel(color) : color;
  }
`;H.__docgenInfo={description:"",methods:[],displayName:"Data3DTextureViewer",props:{texture:{required:!0,tsType:{name:"Data3DTexture"},description:""},name:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"AnyFloatType"},description:""},zoom:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},valueScale:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};const K=new T({format:"binary",higherOrderScattering:!0}),ee=new T({format:"exr",higherOrderScattering:!0}),Ze=()=>{const{source:e}=R({source:{options:["generator","binary","exr"]}}),t=E(({gl:n})=>n),o=w.useMemo(()=>new O(t,{higherOrderScattering:!0}),[t]);w.useEffect(()=>(o.update(),()=>{o.dispose()}),[o]),K.setType(t),ee.setType(t);const a=D(e==="binary"?K:ee,"atmosphere"),r=e==="generator"?o.textures.higherOrderScatteringTexture:a.higherOrderScatteringTexture;if(r!=null)return v(H,{texture:r,name:"higher_order_scattering",valueScale:.5})},ve=()=>v(_,{children:v(Ze,{})});ve.__docgenInfo={description:"",methods:[],displayName:"Story"};async function Qe(e,t,o,a=x){const r=new C({glslVersion:z,vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 1.0, 1.0);
      }
    `,fragmentShader:`
      precision highp sampler2D;
      uniform sampler2D inputTexture;
      out vec4 outputColor;
      void main() {
        outputColor = texelFetch(inputTexture, ivec2(gl_FragCoord.xy), 0);
      }
    `,uniforms:{inputTexture:new f(t)}}),n=new B(new W(2,2),r),s=new $;s.add(n);const i=new k,{width:u,height:c}=t,p=new V(u,c,{type:b,colorSpace:L});e.setRenderTarget(p),e.render(s,i),e.setRenderTarget(null);const d=new Float32Array(u*c*4);await e.readRenderTargetPixelsAsync(p,0,0,u,c,d);const l=new Blob([a===x?new me(d).buffer:d.buffer]),h=document.createElement("a");h.href=URL.createObjectURL(l),h.download=o,document.body.appendChild(h),h.click(),document.body.removeChild(h)}async function ye(e,t,o=x){const a=new C({glslVersion:z,vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 1.0, 1.0);
      }
    `,fragmentShader:`
      precision highp sampler2D;
      uniform sampler2D inputTexture;
      out vec4 outputColor;
      void main() {
        outputColor = texelFetch(inputTexture, ivec2(gl_FragCoord.xy), 0);
      }
    `,uniforms:{inputTexture:new f(t)}}),r=new B(new W(2,2),a),n=new $;n.add(r);const s=new k,{width:i,height:u}=t,c=new V(i,u,{type:o,colorSpace:L});e.setRenderTarget(c),e.render(n,s),e.setRenderTarget(null);const d=await new ge().parse(e,c,{type:o});return a.dispose(),c.dispose(),d.buffer}async function Je(e,t,o,a){const r=await ye(e,t,a),n=new Blob([r]),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download=o,document.body.appendChild(s),s.click(),document.body.removeChild(s)}const j=({texture:e,name:t,type:o,zoom:a=1,valueScale:r=1})=>{const n=w.useMemo(()=>(_e(e.image),new C({glslVersion:z,vertexShader:Ke,fragmentShader:et,uniforms:{resolution:new f(new q),size:new f(new q(e.image.width,e.image.height)),zoom:new f(0),inputTexture:new f(e),gammaCorrect:new f(!1),valueScale:new f(0)}})),[e]),s=E(({gl:l})=>l),{gammaCorrect:i,zoom:u,valueScaleLog10:c,previewEXR:p}=R({gammaCorrect:!0,zoom:{value:a,min:.5,max:10},valueScaleLog10:{value:Math.log10(r),min:-5,max:5},previewEXR:!1,saveEXR:X(()=>{Je(s,e,`${t}.exr`,o).catch(l=>{console.error(l)})}),saveBinary:X(()=>{Qe(s,e,`${t}.bin`).catch(l=>{console.error(l)})})}),d=w.useMemo(()=>new Le,[]);return w.useEffect(()=>{let l=!1;return(async()=>{const h=await ye(s,e,o);if(l)return;const y=new pe().parse(h);d.image={data:y.data,width:y.width,height:y.height},d.type=y.type,d.minFilter=G,d.magFilter=G,d.colorSpace=L,d.needsUpdate=!0})().catch(h=>{console.error(h)}),()=>{l=!0}},[e,o,s,p,d]),le(({size:l})=>{n.uniforms.inputTexture.value=p?d:e,n.uniforms.resolution.value.set(l.width,l.height),n.uniforms.zoom.value=u,n.uniforms.gammaCorrect.value=i,n.uniforms.valueScale.value=10**c}),v(de,{material:n})},Ke=`
  out vec2 vUv;

  void main() {
    vUv = position.xy * 0.5 + 0.5;
    gl_Position = vec4(position.xy, 1.0, 1.0);
  }
`,et=`
  precision highp float;
  precision highp sampler2D;

  in vec2 vUv;

  out vec4 outputColor;

  uniform vec2 resolution;
  uniform vec2 size;
  uniform float zoom;
  uniform sampler2D inputTexture;
  uniform bool gammaCorrect;
  uniform float valueScale;

  void main() {
    vec2 scale = resolution / size / zoom;
    vec2 uv = vUv * scale + (1.0 - scale) * 0.5;
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      discard;
    }

    vec4 color = vec4(texture(inputTexture, uv).rgb * valueScale, 1.0);
    outputColor = gammaCorrect ? linearToOutputTexel(color) : color;
  }
`;j.__docgenInfo={description:"",methods:[],displayName:"DataTextureViewer",props:{texture:{required:!0,tsType:{name:"Texture"},description:""},name:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"AnyFloatType"},description:""},zoom:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},valueScale:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};const te=new T({format:"binary"}),re=new T({format:"exr"}),tt=()=>{const{source:e}=R({source:{options:["generator","binary","exr"]}}),t=E(({gl:r})=>r),o=w.useMemo(()=>new O(t),[t]);w.useEffect(()=>(o.update(),()=>{o.dispose()}),[o]),te.setType(t),re.setType(t);const a=D(e==="binary"?te:re,"atmosphere");return v(j,{texture:e==="generator"?o.textures.irradianceTexture:a.irradianceTexture,name:"irradiance",zoom:8,valueScale:100})},we=()=>v(_,{children:v(tt,{})});we.__docgenInfo={description:"",methods:[],displayName:"Story"};const ae=new T({format:"binary"}),oe=new T({format:"exr"}),rt=()=>{const{source:e}=R({source:{options:["generator","binary","exr"]}}),t=E(({gl:r})=>r),o=w.useMemo(()=>new O(t),[t]);w.useEffect(()=>(o.update(),()=>{o.dispose()}),[o]),ae.setType(t),oe.setType(t);const a=D(e==="binary"?ae:oe,"atmosphere");return v(H,{texture:e==="generator"?o.textures.scatteringTexture:a.scatteringTexture,name:"scattering",valueScale:.5})},xe=()=>v(_,{children:v(rt,{})});xe.__docgenInfo={description:"",methods:[],displayName:"Story"};const ne=new T({format:"binary",combinedScattering:!1}),se=new T({format:"exr",combinedScattering:!1}),at=()=>{const{source:e}=R({source:{options:["generator","binary","exr"]}}),t=E(({gl:n})=>n),o=w.useMemo(()=>new O(t,{combinedScattering:!1}),[t]);w.useEffect(()=>(o.update(),()=>{o.dispose()}),[o]),ne.setType(t),se.setType(t);const a=D(e==="binary"?ne:se,"atmosphere"),r=e==="generator"?o.textures.singleMieScatteringTexture:a.singleMieScatteringTexture;if(r!=null)return v(H,{texture:r,name:"single_mie_scattering",valueScale:.5})},Te=()=>v(_,{children:v(at,{})});Te.__docgenInfo={description:"",methods:[],displayName:"Story"};const ie=new T({format:"binary"}),ce=new T({format:"exr"}),ot=()=>{const{source:e}=R({source:{options:["generator","binary","exr"]}}),t=E(({gl:r})=>r),o=w.useMemo(()=>new O(t),[t]);w.useEffect(()=>(o.update(),()=>{o.dispose()}),[o]),ie.setType(t),ce.setType(t);const a=D(e==="binary"?ie:ce,"atmosphere");return v(j,{texture:e==="generator"?o.textures.transmittanceTexture:a.transmittanceTexture,name:"transmittance",zoom:2})},Se=()=>v(_,{children:v(ot,{})});Se.__docgenInfo={description:"",methods:[],displayName:"Story"};const ht={title:"atmosphere/Building Blocks",parameters:{layout:"fullscreen"}},M=Se,P=xe,I=we,A=Te,N=ve;M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:"_Transmittance",...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:"_Scattering",...P.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"_Irradiance",...I.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:"_SingleMieScattering",...A.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:"_HigherOrderScattering",...N.parameters?.docs?.source}}};const gt=["Transmittance","Scattering","Irradiance","SingleMieScattering","HigherOrderScattering"];export{N as HigherOrderScattering,I as Irradiance,P as Scattering,A as SingleMieScattering,M as Transmittance,gt as __namedExportsOrder,ht as default};
