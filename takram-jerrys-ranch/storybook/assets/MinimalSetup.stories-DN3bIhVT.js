import{L as e,N as r}from"./iframe-BVnUeOdJ.js";import{l as a}from"./Geodetic-FFfs8v2e.js";import{X as s,d as o}from"./index-Ct17IJ10.js";import{n}from"./index-DRKMCDNV.js";import{a as i,A as p}from"./SunLight-DS2cB_Hg.js";import{a as l}from"./Clouds-Dvk-Sl5N.js";import"./constants-Ca8ktEwD.js";import{L as u}from"./Normal-IAvDqSoU.js";import"./preload-helper-D9Z9MdNV.js";import"./index-jrkLbTh5.js";import"./StarsMaterial-Dbo9ZMjT.js";import"./PrecomputedTexturesLoader-CUsMkm8s.js";import"./types-CW8VKOeh.js";const L={title:"clouds/Minimal Setup",parameters:{layout:"fullscreen"}},t=()=>e(a,{gl:{depth:!1,toneMappingExposure:10},camera:{near:1,far:4e5,position:[4529893894855564e-9,2615333425024031e-9,3638042815326614e-9],rotation:[.6423512931563148,-.2928348796035058,-.8344824769956042]},children:e(i,{date:Date.parse("2025-01-01T07:00:00Z"),children:r(o,{multisampling:0,enableNormalPass:!0,children:[e(l,{localWeatherTexture:"clouds/local_weather.png",shapeTexture:"clouds/shape.bin",shapeDetailTexture:"clouds/shape_detail.bin",turbulenceTexture:"clouds/turbulence.png",stbnTexture:"core/stbn.bin"}),e(p,{stbnTexture:"core/stbn.bin",sky:!0,sunLight:!0,skyLight:!0}),e(u,{}),e(s,{mode:n.AGX})]})})});t.__docgenInfo={description:"",methods:[],displayName:"MinimalSetup"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Canvas gl={{
  depth: false,
  toneMappingExposure: 10
}} camera={{
  near: 1,
  far: 4e5,
  // See the Clouds/Basic story for deriving ECEF coordinates and rotation.
  position: [4529893.894855564, 2615333.425024031, 3638042.815326614],
  rotation: [0.6423512931563148, -0.2928348796035058, -0.8344824769956042]
}}>
    <Atmosphere date={Date.parse('2025-01-01T07:00:00Z')}>
      <EffectComposer multisampling={0} enableNormalPass>
        <Clouds localWeatherTexture='clouds/local_weather.png' shapeTexture='clouds/shape.bin' shapeDetailTexture='clouds/shape_detail.bin' turbulenceTexture='clouds/turbulence.png' stbnTexture='core/stbn.bin' />
        <AerialPerspective stbnTexture='core/stbn.bin' sky sunLight skyLight />
        <LensFlare />
        <ToneMapping mode={ToneMappingMode.AGX} />
      </EffectComposer>
    </Atmosphere>
  </Canvas>`,...t.parameters?.docs?.source}}};const y=["MinimalSetup"];export{t as MinimalSetup,y as __namedExportsOrder,L as default};
