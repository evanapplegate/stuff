import{L as e,N as r}from"./iframe-BVnUeOdJ.js";import{l as a}from"./Geodetic-FFfs8v2e.js";import{X as s,d as o}from"./index-Ct17IJ10.js";import{n}from"./index-DRKMCDNV.js";import{a as i,A as p}from"./SunLight-DS2cB_Hg.js";import{L as m}from"./Normal-IAvDqSoU.js";import"./preload-helper-D9Z9MdNV.js";import"./index-jrkLbTh5.js";import"./StarsMaterial-Dbo9ZMjT.js";import"./PrecomputedTexturesLoader-CUsMkm8s.js";import"./types-CW8VKOeh.js";const A={title:"atmosphere/Minimal Setup",parameters:{layout:"fullscreen"}},t=()=>e(a,{gl:{depth:!1,toneMappingExposure:10},camera:{position:[5232062795055689e-9,-2.8678862431699113,3639017417296496e-9],rotation:[.7072729447236096,-.48911705050206433,-1.1888907679219152]},children:e(i,{date:Date.parse("2025-01-01T09:00:00Z"),children:r(o,{multisampling:0,enableNormalPass:!0,children:[e(p,{stbnTexture:"core/stbn.bin",sky:!0,sunLight:!0,skyLight:!0}),e(m,{}),e(s,{mode:n.AGX})]})})});t.__docgenInfo={description:"",methods:[],displayName:"MinimalSetup"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => <Canvas gl={{
  depth: false,
  toneMappingExposure: 10
}} camera={{
  // See the Sky/Basic story for deriving ECEF coordinates and rotation.
  position: [5232062.795055689, -2.8678862431699113, 3639017.417296496],
  rotation: [0.7072729447236096, -0.48911705050206433, -1.1888907679219152]
}}>
    <Atmosphere date={Date.parse('2025-01-01T09:00:00Z')}>
      <EffectComposer multisampling={0} enableNormalPass>
        <AerialPerspective stbnTexture='core/stbn.bin' sky sunLight skyLight />
        <LensFlare />
        <ToneMapping mode={ToneMappingMode.AGX} />
      </EffectComposer>
    </Atmosphere>
  </Canvas>`,...t.parameters?.docs?.source}}};const L=["MinimalSetup"];export{t as MinimalSetup,L as __namedExportsOrder,A as default};
