import{E as g,z as A,F as ie,t as W,d as x,B as P,p as O,x as z,j as ae,e as ue,g as le,P as ce,k as M,m as I,M as fe,K as ve,h as me,A as he}from"./index-DRKMCDNV.js";import{bn as u,b4 as w,W as S,bP as B,bN as de,aF as pe,b5 as K,aD as Z,bs as Q,bz as H,ar as k}from"./Geodetic-FFfs8v2e.js";import{Y as l,M as U}from"./iframe-BVnUeOdJ.js";import{D as N}from"./index-Ct17IJ10.js";import{r as ge}from"./types-CW8VKOeh.js";const xe=`#include "core/depth"
#include "core/turbo"

uniform float near;
uniform float far;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  float depth = readDepthValue(depthBuffer, uv);
  depth = reverseLogDepth(depth, cameraNear, cameraFar);
  depth = linearizeDepth(depth, near, far) / far;

  #ifdef USE_TURBO
  vec3 color = turbo(1.0 - depth);
  #else // USE_TURBO
  vec3 color = vec3(depth);
  #endif // USE_TURBO

  outputColor = vec4(color, inputColor.a);
}
`;var Te=Object.defineProperty,we=(r,e,t,s)=>{for(var n=void 0,o=r.length-1,i;o>=0;o--)(i=r[o])&&(n=i(e,t,n)||n);return n&&Te(e,t,n),n};const Re={blendFunction:P.SRC,useTurbo:!1,near:1,far:1e3};class Ue extends g{constructor(e){const{blendFunction:t,useTurbo:s,near:n,far:o}={...Re,...e};super("DepthEffect",A(xe,{core:{depth:W,turbo:ie}}),{blendFunction:t,attributes:x.DEPTH,uniforms:new Map(Object.entries({near:new u(n),far:new u(o)}))}),this.useTurbo=s}get near(){return this.uniforms.get("near").value}set near(e){this.uniforms.get("near").value=e}get far(){return this.uniforms.get("far").value}set far(e){this.uniforms.get("far").value=e}}we([O("USE_TURBO")],Ue.prototype,"useTurbo");const $=Symbol("SETUP");function be(r){const e=r.vertexShader.replace("#include <fog_pars_vertex>",`
        #include <fog_pars_vertex>
        #include <normal_pars_vertex>
      `).replace("#include <defaultnormal_vertex>",`
        #include <defaultnormal_vertex>
        #include <normal_vertex>
      `).replace("#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )","#if 1").replace("#include <clipping_planes_vertex>",`
        #include <clipping_planes_vertex>
        vViewPosition = - mvPosition.xyz;
      `);r.vertexShader=`
    #undef FLAT_SHADED
    varying vec3 vViewPosition;
    ${e}
  `;const t=r.fragmentShader.replace(/#ifndef FLAT_SHADED\s+varying vec3 vNormal;\s+#endif/m,"#include <normal_pars_fragment>").replace("#include <common>",`
        #include <common>
        #include <packing>
      `).replace("#include <specularmap_fragment>",`
        #include <specularmap_fragment>
        #include <normal_fragment_begin>
        #include <normal_fragment_maps>
      `);return r.fragmentShader=`
    #undef FLAT_SHADED
    varying vec3 vViewPosition;
    ${t}
  `,r}function R(r,{type:e}={}){if(r[$]===!0)return r;e==="basic"&&be(r);const t=e==="physical"?`
          vec4(
            packNormalToVec2(normal),
            metalnessFactor,
            roughnessFactor
          )
        `:`
          vec4(
            packNormalToVec2(normal),
            reflectivity,
            0.0
          );
        `;return r.fragmentShader=`
    layout(location = 1) out vec4 outputBuffer1;

    #if !defined(USE_ENVMAP)
      uniform float reflectivity;
    #endif // !defined(USE_ENVMAP)

    ${z}
    ${r.fragmentShader.replace(/}\s*$/m,`
          outputBuffer1 = ${t};
        }
      `)}
  `,r[$]=!0,r}function ye(){R(w.lambert),R(w.phong),R(w.basic,{type:"basic"}),R(w.standard,{type:"physical"}),R(w.physical,{type:"physical"})}class Y extends ae{constructor(e,t,s,n){super(t,s,n),this.geometryTexture=e.texture.clone(),this.geometryTexture.isRenderTargetTexture=!0,this.geometryTexture.type=S,ye()}render(e,t,s,n,o){t!=null&&(t.textures[1]=this.geometryTexture),super.render(e,t,null),t!=null&&(t.textures.length=1)}setSize(e,t){ge(this.geometryTexture.image),this.geometryTexture.image.width=e,this.geometryTexture.image.height=t}}Y.__docgenInfo={description:"",methods:[{name:"setSize",docblock:null,modifiers:[],params:[{name:"width",optional:!1,type:{name:"number"}},{name:"height",optional:!1,type:{name:"number"}}],returns:{type:{name:"void"}}}],displayName:"GeometryPass"};function q(r){return(r.getAttributes()&x.CONVOLUTION)===x.CONVOLUTION}const Be=({ref:r,children:e,camera:t,scene:s,enabled:n=!0,renderPriority:o=1,autoClear:i=!0,resolutionScale:c,depthBuffer:b,stencilBuffer:_=!1,multisampling:D=8,frameBufferType:L=S})=>{const v=B(({gl:a})=>a),ne=B(({scene:a})=>a),re=B(({camera:a})=>a),y=s??ne,p=t??re,[f,j]=l.useMemo(()=>{const a=new ue(v,{depthBuffer:b,stencilBuffer:_,multisampling:D,frameBufferType:L}),m=new Y(a.inputBuffer,y,p);return a.addPass(m),[a,m]},[v,y,p,b,_,D,L]),C=B(({size:a})=>a);l.useEffect(()=>{f?.setSize(C.width,C.height)},[f,C]),de((a,m)=>{if(n){const h=v.autoClear;v.autoClear=i,_&&!i&&v.clearStencil(),f.render(m),v.autoClear=h}},n?o:0);const G=l.useRef(null);l.useLayoutEffect(()=>{const a=[],m=G.current?.__r3f;if(m!=null&&f!=null){const h=m.children;for(let d=0;d<h.length;++d){const T=h[d].object;if(T instanceof g){const V=[T];if(!q(T)){let E=null;for(;(E=h[d+1]?.object)instanceof g&&!q(E);)V.push(E),++d}const se=new le(p,...V);a.push(se)}else T instanceof ce&&a.push(T)}for(const d of a)f?.addPass(d)}return()=>{for(const h of a)f?.removePass(h)}},[f,e,p]),l.useEffect(()=>{const a=v.toneMapping;return v.toneMapping=pe,()=>{v.toneMapping=a}},[v]);const oe=l.useMemo(()=>({composer:f,camera:p,scene:y,geometryPass:j,normalPass:null,downSamplingPass:null,resolutionScale:c}),[f,p,y,j,c]);return l.useImperativeHandle(r,()=>f,[f]),U.jsx(N.Provider,{value:oe,children:U.jsx("group",{ref:G,children:e})})};Be.__docgenInfo={description:"",methods:[],displayName:"EffectComposer",props:{enabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},depthBuffer:{required:!1,tsType:{name:"boolean"},description:""},stencilBuffer:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},autoClear:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},resolutionScale:{required:!1,tsType:{name:"number"},description:""},multisampling:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},frameBufferType:{required:!1,tsType:{name:"TextureDataType"},description:"",defaultValue:{value:"HalfFloatType",computed:!0}},renderPriority:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},camera:{required:!1,tsType:{name:"Camera"},description:""},scene:{required:!1,tsType:{name:"Scene"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Se=`#include "core/packing"

uniform sampler2D geometryBuffer;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  vec4 normalMetalnessRoughness = texture(geometryBuffer, uv);

  #ifdef OUTPUT_NORMAL
  vec3 normal = unpackVec2ToNormal(texture(geometryBuffer, uv).xy);
  outputColor = vec4(normal * 0.5 + 0.5, inputColor.a);
  #endif // OUTPUT_NORMAL

  #ifdef OUTPUT_PBR
  outputColor = vec4(
    vec3(normalMetalnessRoughness.b, normalMetalnessRoughness.a, 0.0),
    inputColor.a
  );
  #endif // OUTPUT_PBR
}
`,X={blendFunction:P.SRC,output:"normal"};class Pe extends g{constructor(e){const{blendFunction:t,geometryBuffer:s=null,output:n}={...X,...e};super("GeometryEffect",A(Se,{core:{packing:z}}),{blendFunction:t,attributes:x.DEPTH,uniforms:new Map(Object.entries({geometryBuffer:new u(s)}))}),this.output=n}get geometryBuffer(){return this.uniforms.get("geometryBuffer").value}set geometryBuffer(e){this.uniforms.get("geometryBuffer").value=e}get output(){return this.defines.has("OUTPUT_NORMAL")?"normal":"pbr"}set output(e){e!==this.output&&(e==="normal"?this.defines.set("OUTPUT_NORMAL","1"):this.defines.delete("OUTPUT_NORMAL"),e==="pbr"?this.defines.set("OUTPUT_PBR","1"):this.defines.delete("OUTPUT_PBR"),this.setChanged())}}const _e=({ref:r,...e})=>{const{blendFunction:t,...s}={...X,...e},{geometryPass:n}=l.useContext(N),o=l.useMemo(()=>new Pe({blendFunction:t}),[t]);return l.useEffect(()=>()=>{o.dispose()},[o]),U.jsx("primitive",{ref:r,object:o,geometryBuffer:n?.geometryTexture,...s})};_e.__docgenInfo={description:"",methods:[],displayName:"Geometry",composes:["ElementProps"]};const Ce=`#include <common>

uniform sampler2D inputBuffer;

uniform float thresholdLevel;
uniform float thresholdRange;

in vec2 vCenterUv1;
in vec2 vCenterUv2;
in vec2 vCenterUv3;
in vec2 vCenterUv4;
in vec2 vRowUv1;
in vec2 vRowUv2;
in vec2 vRowUv3;
in vec2 vRowUv4;
in vec2 vRowUv5;
in vec2 vRowUv6;
in vec2 vRowUv7;
in vec2 vRowUv8;
in vec2 vRowUv9;

float clampToBorder(const vec2 uv) {
  return float(uv.x >= 0.0 && uv.x <= 1.0 && uv.y >= 0.0 && uv.y <= 1.0);
}

// Reference: https://learnopengl.com/Guest-Articles/2022/Phys.-Based-Bloom
void main() {
  vec3 color = 0.125 * texture(inputBuffer, vec2(vRowUv5)).rgb;
  vec4 weight =
    0.03125 *
    vec4(
      clampToBorder(vRowUv1),
      clampToBorder(vRowUv3),
      clampToBorder(vRowUv7),
      clampToBorder(vRowUv9)
    );
  color += weight.x * texture(inputBuffer, vec2(vRowUv1)).rgb;
  color += weight.y * texture(inputBuffer, vec2(vRowUv3)).rgb;
  color += weight.z * texture(inputBuffer, vec2(vRowUv7)).rgb;
  color += weight.w * texture(inputBuffer, vec2(vRowUv9)).rgb;

  weight =
    0.0625 *
    vec4(
      clampToBorder(vRowUv2),
      clampToBorder(vRowUv4),
      clampToBorder(vRowUv6),
      clampToBorder(vRowUv8)
    );
  color += weight.x * texture(inputBuffer, vec2(vRowUv2)).rgb;
  color += weight.y * texture(inputBuffer, vec2(vRowUv4)).rgb;
  color += weight.z * texture(inputBuffer, vec2(vRowUv6)).rgb;
  color += weight.w * texture(inputBuffer, vec2(vRowUv8)).rgb;

  weight =
    0.125 *
    vec4(
      clampToBorder(vRowUv2),
      clampToBorder(vRowUv4),
      clampToBorder(vRowUv6),
      clampToBorder(vRowUv8)
    );
  color += weight.x * texture(inputBuffer, vec2(vCenterUv1)).rgb;
  color += weight.y * texture(inputBuffer, vec2(vCenterUv2)).rgb;
  color += weight.z * texture(inputBuffer, vec2(vCenterUv3)).rgb;
  color += weight.w * texture(inputBuffer, vec2(vCenterUv4)).rgb;

  // WORKAROUND: Avoid screen flashes if the input buffer contains NaN texels.
  // See: https://github.com/takram-design-engineering/three-geospatial/issues/7
  if (any(isnan(color))) {
    gl_FragColor = vec4(vec3(0.0), 1.0);
    return;
  }

  float l = luminance(color);
  float scale = saturate(smoothstep(thresholdLevel, thresholdLevel + thresholdRange, l));
  gl_FragColor = vec4(color * scale, 1.0);
}
`,Ee=`uniform vec2 texelSize;

out vec2 vCenterUv1;
out vec2 vCenterUv2;
out vec2 vCenterUv3;
out vec2 vCenterUv4;
out vec2 vRowUv1;
out vec2 vRowUv2;
out vec2 vRowUv3;
out vec2 vRowUv4;
out vec2 vRowUv5;
out vec2 vRowUv6;
out vec2 vRowUv7;
out vec2 vRowUv8;
out vec2 vRowUv9;

void main() {
  vec2 uv = position.xy * 0.5 + 0.5;
  vCenterUv1 = uv + texelSize * vec2(-1.0, 1.0);
  vCenterUv2 = uv + texelSize * vec2(1.0, 1.0);
  vCenterUv3 = uv + texelSize * vec2(-1.0, -1.0);
  vCenterUv4 = uv + texelSize * vec2(1.0, -1.0);
  vRowUv1 = uv + texelSize * vec2(-2.0, 2.0);
  vRowUv2 = uv + texelSize * vec2(0.0, 2.0);
  vRowUv3 = uv + texelSize * vec2(2.0, 2.0);
  vRowUv4 = uv + texelSize * vec2(-2.0, 0.0);
  vRowUv5 = uv + texelSize;
  vRowUv6 = uv + texelSize * vec2(2.0, 0.0);
  vRowUv7 = uv + texelSize * vec2(-2.0, -2.0);
  vRowUv8 = uv + texelSize * vec2(0.0, -2.0);
  vRowUv9 = uv + texelSize * vec2(2.0, -2.0);

  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Me={thresholdLevel:10,thresholdRange:1};class Ae extends K{constructor(e){const{inputBuffer:t=null,thresholdLevel:s,thresholdRange:n,...o}={...Me,...e};super({name:"DownsampleThresholdMaterial",fragmentShader:Ce,vertexShader:Ee,blending:Z,toneMapped:!1,depthWrite:!1,depthTest:!1,...o,uniforms:{inputBuffer:new u(t),texelSize:new u(new Q),thresholdLevel:new u(s),thresholdRange:new u(n),...o.uniforms}})}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(e){this.uniforms.inputBuffer.value=e}get thresholdLevel(){return this.uniforms.thresholdLevel.value}set thresholdLevel(e){this.uniforms.thresholdLevel.value=e}get thresholdRange(){return this.uniforms.thresholdRange.value}set thresholdRange(e){this.uniforms.thresholdRange.value=e}}const Oe=`#include <common>

#define SQRT_2 0.7071067811865476

uniform sampler2D inputBuffer;

uniform vec2 texelSize;
uniform float ghostAmount;
uniform float haloAmount;
uniform float chromaticAberration;

in vec2 vUv;
in vec2 vAspectRatio;

vec3 sampleGhost(const vec2 direction, const vec3 color, const float offset) {
  vec2 suv = clamp(1.0 - vUv + direction * offset, 0.0, 1.0);
  vec3 result = texture(inputBuffer, suv).rgb * color;

  // Falloff at the perimeter.
  float d = clamp(length(0.5 - suv) / (0.5 * SQRT_2), 0.0, 1.0);
  result *= pow(1.0 - d, 3.0);
  return result;
}

vec4 sampleGhosts(float amount) {
  vec3 color = vec3(0.0);
  vec2 direction = vUv - 0.5;
  color += sampleGhost(direction, vec3(0.8, 0.8, 1.0), -5.0);
  color += sampleGhost(direction, vec3(1.0, 0.8, 0.4), -1.5);
  color += sampleGhost(direction, vec3(0.9, 1.0, 0.8), -0.4);
  color += sampleGhost(direction, vec3(1.0, 0.8, 0.4), -0.2);
  color += sampleGhost(direction, vec3(0.9, 0.7, 0.7), -0.1);
  color += sampleGhost(direction, vec3(0.5, 1.0, 0.4), 0.7);
  color += sampleGhost(direction, vec3(0.5, 0.5, 0.5), 1.0);
  color += sampleGhost(direction, vec3(1.0, 1.0, 0.6), 2.5);
  color += sampleGhost(direction, vec3(0.5, 0.8, 1.0), 10.0);
  return vec4(color * amount, 1.0);
}

// Reference: https://john-chapman.github.io/2017/11/05/pseudo-lens-flare.html
float cubicRingMask(const float x, const float radius, const float thickness) {
  float v = min(abs(x - radius) / thickness, 1.0);
  return 1.0 - v * v * (3.0 - 2.0 * v);
}

vec3 sampleHalo(const float radius) {
  vec2 direction = normalize((vUv - 0.5) / vAspectRatio) * vAspectRatio;
  vec3 offset = vec3(texelSize.x * chromaticAberration) * vec3(-1.0, 0.0, 1.0);
  vec2 suv = fract(1.0 - vUv + direction * radius);
  vec3 result = vec3(
    texture(inputBuffer, suv + direction * offset.r).r,
    texture(inputBuffer, suv + direction * offset.g).g,
    texture(inputBuffer, suv + direction * offset.b).b
  );

  // Falloff at the center and perimeter.
  vec2 wuv = (vUv - vec2(0.5, 0.0)) / vAspectRatio + vec2(0.5, 0.0);
  float d = saturate(distance(wuv, vec2(0.5)));
  result *= cubicRingMask(d, 0.45, 0.25);
  return result;
}

vec4 sampleHalos(const float amount) {
  vec3 color = vec3(0.0);
  color += sampleHalo(0.3);
  return vec4(color, 1.0) * amount;
}

void main() {
  gl_FragColor += sampleGhosts(ghostAmount);
  gl_FragColor += sampleHalos(haloAmount);
}

`,ze=`uniform vec2 texelSize;

out vec2 vUv;
out vec2 vAspectRatio;

void main() {
  vUv = position.xy * 0.5 + 0.5;
  vAspectRatio = vec2(texelSize.x / texelSize.y, 1.0);
  gl_Position = vec4(position.xy, 1.0, 1.0);
}
`,Ne={ghostAmount:.001,haloAmount:.001,chromaticAberration:10};class Fe extends K{constructor(e){const{inputBuffer:t=null,ghostAmount:s,haloAmount:n,chromaticAberration:o,...i}={...Ne,...e};super({name:"LensFlareFeaturesMaterial",fragmentShader:Oe,vertexShader:ze,blending:Z,toneMapped:!1,depthWrite:!1,depthTest:!1,uniforms:{inputBuffer:new u(t),texelSize:new u(new Q),ghostAmount:new u(s),haloAmount:new u(n),chromaticAberration:new u(o),...i.uniforms}})}setSize(e,t){this.uniforms.texelSize.value.set(1/e,1/t)}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(e){this.uniforms.inputBuffer.value=e}get ghostAmount(){return this.uniforms.ghostAmount.value}set ghostAmount(e){this.uniforms.ghostAmount.value=e}get haloAmount(){return this.uniforms.haloAmount.value}set haloAmount(e){this.uniforms.haloAmount.value=e}get chromaticAberration(){return this.uniforms.chromaticAberration.value}set chromaticAberration(e){this.uniforms.chromaticAberration.value=e}}const De=`uniform sampler2D bloomBuffer;
uniform sampler2D featuresBuffer;
uniform float intensity;

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  vec3 bloom = texture(bloomBuffer, uv).rgb;
  vec3 features = texture(featuresBuffer, uv).rgb;
  outputColor = vec4(inputColor.rgb + (bloom + features) * intensity, inputColor.a);
}
`,J={blendFunction:P.NORMAL,resolutionScale:.5,width:M.AUTO_SIZE,height:M.AUTO_SIZE,intensity:.005};class Le extends g{constructor(e){const{blendFunction:t,resolutionScale:s,width:n,height:o,resolutionX:i=n,resolutionY:c=o,intensity:b}={...J,...e};super("LensFlareEffect",De,{blendFunction:t,attributes:x.CONVOLUTION,uniforms:new Map(Object.entries({bloomBuffer:new u(null),featuresBuffer:new u(null),intensity:new u(1)}))}),this.onResolutionChange=()=>{this.setSize(this.resolution.baseWidth,this.resolution.baseHeight)},this.renderTarget1=new H(1,1,{depthBuffer:!1,type:S}),this.renderTarget1.texture.name="LensFlare.Target1",this.renderTarget2=new H(1,1,{depthBuffer:!1,type:S}),this.renderTarget2.texture.name="LensFlare.Target2",this.thresholdMaterial=new Ae,this.thresholdPass=new I(this.thresholdMaterial),this.blurPass=new fe,this.blurPass.levels=8,this.preBlurPass=new ve({kernelSize:me.SMALL}),this.featuresMaterial=new Fe,this.featuresPass=new I(this.featuresMaterial),this.uniforms.get("bloomBuffer").value=this.blurPass.texture,this.uniforms.get("featuresBuffer").value=this.renderTarget1.texture,this.resolution=new M(this,i,c,s),this.resolution.addEventListener("change",this.onResolutionChange),this.intensity=b}initialize(e,t,s){this.thresholdPass.initialize(e,t,s),this.blurPass.initialize(e,t,s),this.preBlurPass.initialize(e,t,s),this.featuresPass.initialize(e,t,s)}update(e,t,s){this.thresholdPass.render(e,t,this.renderTarget1),this.blurPass.render(e,this.renderTarget1,null),this.preBlurPass.render(e,this.renderTarget1,this.renderTarget2),this.featuresPass.render(e,this.renderTarget2,this.renderTarget1)}setSize(e,t){const s=this.resolution;s.setBaseSize(e,t);const{width:n,height:o}=s;this.renderTarget1.setSize(n,o),this.renderTarget2.setSize(n,o),this.thresholdMaterial.setSize(n,o),this.blurPass.setSize(n,o),this.preBlurPass.setSize(n,o),this.featuresMaterial.setSize(n,o)}get intensity(){return this.uniforms.get("intensity").value}set intensity(e){this.uniforms.get("intensity").value=e}get thresholdLevel(){return this.thresholdMaterial.thresholdLevel}set thresholdLevel(e){this.thresholdMaterial.thresholdLevel=e}get thresholdRange(){return this.thresholdMaterial.thresholdRange}set thresholdRange(e){this.thresholdMaterial.thresholdRange=e}}const je=({ref:r,...e})=>{const{blendFunction:t,...s}={...J,...e},n=l.useMemo(()=>new Le,[]);return l.useEffect(()=>()=>{n.dispose()},[n]),U.jsx("primitive",{ref:r,object:n,...s})};je.__docgenInfo={description:"",methods:[],displayName:"LensFlare",composes:["ElementProps"]};const Ge=`#include "core/depth"
#include "core/packing"
#include "core/transform"

uniform highp sampler2D normalBuffer;

uniform mat4 projectionMatrix;
uniform mat4 inverseProjectionMatrix;

vec3 reconstructNormal(const vec2 uv) {
  float depth = readDepthValue(depthBuffer, uv);
  depth = reverseLogDepth(depth, cameraNear, cameraFar);
  vec3 position = screenToView(
    uv,
    depth,
    getViewZ(depth),
    projectionMatrix,
    inverseProjectionMatrix
  );
  vec3 dx = dFdx(position);
  vec3 dy = dFdy(position);
  return normalize(cross(dx, dy));
}

vec3 readNormal(const vec2 uv) {
  #ifdef OCT_ENCODED
  return unpackVec2ToNormal(texture(normalBuffer, uv).xy);
  #else // OCT_ENCODED
  return 2.0 * texture(normalBuffer, uv).xyz - 1.0;
  #endif // OCT_ENCODED
}

void mainImage(const vec4 inputColor, const vec2 uv, out vec4 outputColor) {
  #ifdef RECONSTRUCT_FROM_DEPTH
  vec3 normal = reconstructNormal(uv);
  #else // RECONSTRUCT_FROM_DEPTH
  vec3 normal = readNormal(uv);
  #endif // RECONSTRUCT_FROM_DEPTH

  outputColor = vec4(normal * 0.5 + 0.5, inputColor.a);
}
`;var Ve=Object.defineProperty,ee=(r,e,t,s)=>{for(var n=void 0,o=r.length-1,i;o>=0;o--)(i=r[o])&&(n=i(e,t,n)||n);return n&&Ve(e,t,n),n};const te={blendFunction:P.SRC,octEncoded:!1,reconstructFromDepth:!1};class F extends g{constructor(e,t){const{blendFunction:s,normalBuffer:n=null,octEncoded:o,reconstructFromDepth:i}={...te,...t};super("NormalEffect",A(Ge,{core:{depth:W,packing:z,transform:he}}),{blendFunction:s,attributes:x.DEPTH,uniforms:new Map(Object.entries({normalBuffer:new u(n),projectionMatrix:new u(new k),inverseProjectionMatrix:new u(new k)}))}),this.camera=e,e!=null&&(this.mainCamera=e),this.octEncoded=o,this.reconstructFromDepth=i}get mainCamera(){return this.camera}set mainCamera(e){this.camera=e}update(e,t,s){const n=this.uniforms,o=n.get("projectionMatrix"),i=n.get("inverseProjectionMatrix"),c=this.camera;c!=null&&(o.value.copy(c.projectionMatrix),i.value.copy(c.projectionMatrixInverse))}get normalBuffer(){return this.uniforms.get("normalBuffer").value}set normalBuffer(e){this.uniforms.get("normalBuffer").value=e}}ee([O("OCT_ENCODED")],F.prototype,"octEncoded");ee([O("RECONSTRUCT_FROM_DEPTH")],F.prototype,"reconstructFromDepth");const Ie=({ref:r,...e})=>{const{blendFunction:t,...s}={...te,...e},{geometryPass:n,normalPass:o,camera:i}=l.useContext(N),c=l.useMemo(()=>new F(i,{blendFunction:t}),[i,t]);return l.useEffect(()=>()=>{c.dispose()},[c]),U.jsx("primitive",{ref:r,object:c,mainCamera:i,normalBuffer:n?.geometryTexture??o?.texture??null,...s,octEncoded:n?.geometryTexture!=null})};Ie.__docgenInfo={description:"",methods:[],displayName:"Normal",composes:["ElementProps"]};export{Ue as D,Be as E,_e as G,je as L,Ie as N,Le as a};
