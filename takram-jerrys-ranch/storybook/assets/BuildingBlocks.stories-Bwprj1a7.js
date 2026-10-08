import{Y as u,q as G,L as s,N as ie,F as ae}from"./iframe-BVnUeOdJ.js";import{C as N,aZ as q,bn as i,R as p,as as P,aO as b,bw as se,b0 as ce,ae as F,b1 as f,aE as Y,bz as le,aX as ue,af as de,b5 as h,b3 as V,bA as $,bs as D,bP as E,bN as U,l as y,bI as B,h as pe,p as ge,bt as me}from"./Geodetic-FFfs8v2e.js";import{a as ve,C as fe}from"./constants-Ca8ktEwD.js";import{z,w as C}from"./index-DRKMCDNV.js";import{u as R}from"./useControls-B4rxjebD.js";import{j}from"./StarsMaterial-Dbo9ZMjT.js";import{O as he}from"./OrbitControls-CdXBx8tN.js";import"./preload-helper-D9Z9MdNV.js";import"./index-jrkLbTh5.js";class k{constructor({size:n,fragmentShader:o}){this.needsRender=!0,this.camera=new N,this.size=n,this.material=new q({glslVersion:p,vertexShader:`
        in vec3 position;
        out vec2 vUv;
        void main() {
          vUv = position.xy * 0.5 + 0.5;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:o,uniforms:{layer:new i(0)}}),this.mesh=new P(new b(2,2),this.material),this.renderTarget=new se(n,n,n,{depthBuffer:!1,format:ce});const e=this.renderTarget.texture;e.minFilter=F,e.magFilter=F,e.wrapS=f,e.wrapT=f,e.wrapR=f,e.colorSpace=Y,e.needsUpdate=!0}dispose(){this.renderTarget.dispose(),this.material.dispose()}render(n,o){if(this.needsRender){this.needsRender=!1;for(let e=0;e<this.size;++e)this.material.uniforms.layer.value=e/this.size,n.setRenderTarget(this.renderTarget,e),n.render(this.mesh,this.camera);n.setRenderTarget(null)}}get texture(){return this.renderTarget.texture}}const ye=`// Based on the following work with slight modifications.
// https://github.com/sebh/TileableVolumeNoise

/**
 * The MIT License (MIT)
 *
 * Copyright(c) 2017 Sébastien Hillaire
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

precision highp float;
precision highp int;

#include "core/math"
#include "perlin"
#include "tileableNoise"

uniform float layer;

in vec2 vUv;

layout(location = 0) out float outputColor;

float getPerlinWorley(const vec3 point) {
  int octaveCount = 3;
  float frequency = 8.0;
  float perlin = getPerlinNoise(point, frequency, octaveCount);
  perlin = clamp(perlin, 0.0, 1.0);

  float cellCount = 4.0;
  vec3 noise = vec3(
    1.0 - getWorleyNoise(point, cellCount * 2.0),
    1.0 - getWorleyNoise(point, cellCount * 8.0),
    1.0 - getWorleyNoise(point, cellCount * 14.0)
  );
  float fbm = dot(noise, vec3(0.625, 0.25, 0.125));
  return remap(perlin, 0.0, 1.0, fbm, 1.0);
}

float getWorleyFbm(const vec3 point) {
  float cellCount = 4.0;
  vec4 noise = vec4(
    1.0 - getWorleyNoise(point, cellCount * 2.0),
    1.0 - getWorleyNoise(point, cellCount * 4.0),
    1.0 - getWorleyNoise(point, cellCount * 8.0),
    1.0 - getWorleyNoise(point, cellCount * 16.0)
  );
  vec3 fbm = vec3(
    dot(noise.xyz, vec3(0.625, 0.25, 0.125)),
    dot(noise.yzw, vec3(0.625, 0.25, 0.125)),
    dot(noise.zw, vec2(0.75, 0.25))
  );
  return dot(fbm, vec3(0.625, 0.25, 0.125));
}

void main() {
  vec3 point = vec3(vUv.x, vUv.y, layer);
  float perlinWorley = getPerlinWorley(point);
  float worleyFbm = getWorleyFbm(point);
  outputColor = remap(perlinWorley, worleyFbm - 1.0, 1.0);
}
`,A=`// Ported from GLM: https://github.com/g-truc/glm/blob/master/glm/gtc/noise.inl

/**
 * OpenGL Mathematics (GLM)
 *
 * GLM is licensed under The Happy Bunny License or MIT License
 *
 * The Happy Bunny License (Modified MIT License)
 *
 * Copyright (c) 2005 - G-Truc Creation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * Restrictions:
 *  By making use of the Software for military purposes, you choose to make a
 *  Bunny unhappy.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * The MIT License
 *
 * Copyright (c) 2005 - G-Truc Creation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

vec4 mod289(const vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(const vec4 v) {
  return mod289((v * 34.0 + 1.0) * v);
}

vec4 taylorInvSqrt(const vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec4 fade(const vec4 v) {
  return v * v * v * (v * (v * 6.0 - 15.0) + 10.0);
}

// Classic Perlin noise, periodic version
float perlin(const vec4 position, const vec4 rep) {
  vec4 Pi0 = mod(floor(position), rep); // Integer part modulo rep
  vec4 Pi1 = mod(Pi0 + 1.0, rep); // Integer part + 1 mod rep
  vec4 Pf0 = fract(position); // Fractional part for interpolation
  vec4 Pf1 = Pf0 - 1.0; // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.y, Pi0.y, Pi1.y, Pi1.y);
  vec4 iz0 = vec4(Pi0.z);
  vec4 iz1 = vec4(Pi1.z);
  vec4 iw0 = vec4(Pi0.w);
  vec4 iw1 = vec4(Pi1.w);

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);
  vec4 ixy00 = permute(ixy0 + iw0);
  vec4 ixy01 = permute(ixy0 + iw1);
  vec4 ixy10 = permute(ixy1 + iw0);
  vec4 ixy11 = permute(ixy1 + iw1);

  vec4 gx00 = ixy00 / 7.0;
  vec4 gy00 = floor(gx00) / 7.0;
  vec4 gz00 = floor(gy00) / 6.0;
  gx00 = fract(gx00) - 0.5;
  gy00 = fract(gy00) - 0.5;
  gz00 = fract(gz00) - 0.5;
  vec4 gw00 = vec4(0.75) - abs(gx00) - abs(gy00) - abs(gz00);
  vec4 sw00 = step(gw00, vec4(0));
  gx00 -= sw00 * (step(0.0, gx00) - 0.5);
  gy00 -= sw00 * (step(0.0, gy00) - 0.5);

  vec4 gx01 = ixy01 / 7.0;
  vec4 gy01 = floor(gx01) / 7.0;
  vec4 gz01 = floor(gy01) / 6.0;
  gx01 = fract(gx01) - 0.5;
  gy01 = fract(gy01) - 0.5;
  gz01 = fract(gz01) - 0.5;
  vec4 gw01 = vec4(0.75) - abs(gx01) - abs(gy01) - abs(gz01);
  vec4 sw01 = step(gw01, vec4(0.0));
  gx01 -= sw01 * (step(0.0, gx01) - 0.5);
  gy01 -= sw01 * (step(0.0, gy01) - 0.5);

  vec4 gx10 = ixy10 / 7.0;
  vec4 gy10 = floor(gx10) / 7.0;
  vec4 gz10 = floor(gy10) / 6.0;
  gx10 = fract(gx10) - 0.5;
  gy10 = fract(gy10) - 0.5;
  gz10 = fract(gz10) - 0.5;
  vec4 gw10 = vec4(0.75) - abs(gx10) - abs(gy10) - abs(gz10);
  vec4 sw10 = step(gw10, vec4(0.0));
  gx10 -= sw10 * (step(0.0, gx10) - 0.5);
  gy10 -= sw10 * (step(0.0, gy10) - 0.5);

  vec4 gx11 = ixy11 / 7.0;
  vec4 gy11 = floor(gx11) / 7.0;
  vec4 gz11 = floor(gy11) / 6.0;
  gx11 = fract(gx11) - 0.5;
  gy11 = fract(gy11) - 0.5;
  gz11 = fract(gz11) - 0.5;
  vec4 gw11 = vec4(0.75) - abs(gx11) - abs(gy11) - abs(gz11);
  vec4 sw11 = step(gw11, vec4(0.0));
  gx11 -= sw11 * (step(0.0, gx11) - 0.5);
  gy11 -= sw11 * (step(0.0, gy11) - 0.5);

  vec4 g0000 = vec4(gx00.x, gy00.x, gz00.x, gw00.x);
  vec4 g1000 = vec4(gx00.y, gy00.y, gz00.y, gw00.y);
  vec4 g0100 = vec4(gx00.z, gy00.z, gz00.z, gw00.z);
  vec4 g1100 = vec4(gx00.w, gy00.w, gz00.w, gw00.w);
  vec4 g0010 = vec4(gx10.x, gy10.x, gz10.x, gw10.x);
  vec4 g1010 = vec4(gx10.y, gy10.y, gz10.y, gw10.y);
  vec4 g0110 = vec4(gx10.z, gy10.z, gz10.z, gw10.z);
  vec4 g1110 = vec4(gx10.w, gy10.w, gz10.w, gw10.w);
  vec4 g0001 = vec4(gx01.x, gy01.x, gz01.x, gw01.x);
  vec4 g1001 = vec4(gx01.y, gy01.y, gz01.y, gw01.y);
  vec4 g0101 = vec4(gx01.z, gy01.z, gz01.z, gw01.z);
  vec4 g1101 = vec4(gx01.w, gy01.w, gz01.w, gw01.w);
  vec4 g0011 = vec4(gx11.x, gy11.x, gz11.x, gw11.x);
  vec4 g1011 = vec4(gx11.y, gy11.y, gz11.y, gw11.y);
  vec4 g0111 = vec4(gx11.z, gy11.z, gz11.z, gw11.z);
  vec4 g1111 = vec4(gx11.w, gy11.w, gz11.w, gw11.w);

  vec4 norm00 = taylorInvSqrt(
    vec4(dot(g0000, g0000), dot(g0100, g0100), dot(g1000, g1000), dot(g1100, g1100))
  );
  g0000 *= norm00.x;
  g0100 *= norm00.y;
  g1000 *= norm00.z;
  g1100 *= norm00.w;

  vec4 norm01 = taylorInvSqrt(
    vec4(dot(g0001, g0001), dot(g0101, g0101), dot(g1001, g1001), dot(g1101, g1101))
  );
  g0001 *= norm01.x;
  g0101 *= norm01.y;
  g1001 *= norm01.z;
  g1101 *= norm01.w;

  vec4 norm10 = taylorInvSqrt(
    vec4(dot(g0010, g0010), dot(g0110, g0110), dot(g1010, g1010), dot(g1110, g1110))
  );
  g0010 *= norm10.x;
  g0110 *= norm10.y;
  g1010 *= norm10.z;
  g1110 *= norm10.w;

  vec4 norm11 = taylorInvSqrt(
    vec4(dot(g0011, g0011), dot(g0111, g0111), dot(g1011, g1011), dot(g1111, g1111))
  );
  g0011 *= norm11.x;
  g0111 *= norm11.y;
  g1011 *= norm11.z;
  g1111 *= norm11.w;

  float n0000 = dot(g0000, Pf0);
  float n1000 = dot(g1000, vec4(Pf1.x, Pf0.y, Pf0.z, Pf0.w));
  float n0100 = dot(g0100, vec4(Pf0.x, Pf1.y, Pf0.z, Pf0.w));
  float n1100 = dot(g1100, vec4(Pf1.x, Pf1.y, Pf0.z, Pf0.w));
  float n0010 = dot(g0010, vec4(Pf0.x, Pf0.y, Pf1.z, Pf0.w));
  float n1010 = dot(g1010, vec4(Pf1.x, Pf0.y, Pf1.z, Pf0.w));
  float n0110 = dot(g0110, vec4(Pf0.x, Pf1.y, Pf1.z, Pf0.w));
  float n1110 = dot(g1110, vec4(Pf1.x, Pf1.y, Pf1.z, Pf0.w));
  float n0001 = dot(g0001, vec4(Pf0.x, Pf0.y, Pf0.z, Pf1.w));
  float n1001 = dot(g1001, vec4(Pf1.x, Pf0.y, Pf0.z, Pf1.w));
  float n0101 = dot(g0101, vec4(Pf0.x, Pf1.y, Pf0.z, Pf1.w));
  float n1101 = dot(g1101, vec4(Pf1.x, Pf1.y, Pf0.z, Pf1.w));
  float n0011 = dot(g0011, vec4(Pf0.x, Pf0.y, Pf1.z, Pf1.w));
  float n1011 = dot(g1011, vec4(Pf1.x, Pf0.y, Pf1.z, Pf1.w));
  float n0111 = dot(g0111, vec4(Pf0.x, Pf1.y, Pf1.z, Pf1.w));
  float n1111 = dot(g1111, Pf1);

  vec4 fade_xyzw = fade(Pf0);
  vec4 n_0w = mix(vec4(n0000, n1000, n0100, n1100), vec4(n0001, n1001, n0101, n1101), fade_xyzw.w);
  vec4 n_1w = mix(vec4(n0010, n1010, n0110, n1110), vec4(n0011, n1011, n0111, n1111), fade_xyzw.w);
  vec4 n_zw = mix(n_0w, n_1w, fade_xyzw.z);
  vec2 n_yzw = mix(n_zw.xy, n_zw.zw, fade_xyzw.y);
  float n_xyzw = mix(n_yzw.x, n_yzw.y, fade_xyzw.x);
  return 2.2 * n_xyzw;
}
`,L=`// Based on the following work with slight modifications.
// https://github.com/sebh/TileableVolumeNoise

/**
 * The MIT License (MIT)
 *
 * Copyright(c) 2017 Sébastien Hillaire
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

float hash(const float n) {
  return fract(sin(n + 1.951) * 43758.5453);
}

float noise(const vec3 x) {
  vec3 p = floor(x);
  vec3 f = fract(x);

  f = f * f * (3.0 - 2.0 * f);
  float n = p.x + p.y * 57.0 + 113.0 * p.z;
  return mix(
    mix(mix(hash(n + 0.0), hash(n + 1.0), f.x), mix(hash(n + 57.0), hash(n + 58.0), f.x), f.y),
    mix(
      mix(hash(n + 113.0), hash(n + 114.0), f.x),
      mix(hash(n + 170.0), hash(n + 171.0), f.x),
      f.y
    ),
    f.z
  );
}

float getWorleyNoise(const vec3 p, const float cellCount) {
  vec3 cell = p * cellCount;
  float d = 1.0e10;
  for (int x = -1; x <= 1; ++x) {
    for (int y = -1; y <= 1; ++y) {
      for (int z = -1; z <= 1; ++z) {
        vec3 tp = floor(cell) + vec3(x, y, z);
        tp = cell - tp - noise(mod(tp, cellCount / 1.0));
        d = min(d, dot(tp, tp));
      }
    }
  }
  return clamp(d, 0.0, 1.0);
}

float getPerlinNoise(const vec3 point, const vec3 frequency, const int octaveCount) {
  // Noise frequency factor between octave, forced to 2.
  const float octaveFrequencyFactor = 2.0;

  // Compute the sum for each octave.
  float sum = 0.0;
  float roughness = 0.5;
  float weightSum = 0.0;
  float weight = 1.0;
  vec3 nextFrequency = frequency;
  for (int i = 0; i < octaveCount; ++i) {
    vec4 p = vec4(point.x, point.y, point.z, 0.0) * vec4(nextFrequency, 1.0);
    float value = perlin(p, vec4(nextFrequency, 1.0));
    sum += value * weight;
    weightSum += weight;
    weight *= roughness;
    nextFrequency *= octaveFrequencyFactor;
  }

  return sum / weightSum; // Intentionally skip clamping.
}

float getPerlinNoise(const vec3 point, const float frequency, const int octaveCount) {
  return getPerlinNoise(point, vec3(frequency), octaveCount);
}
`;class X extends k{constructor(){super({size:ve,fragmentShader:z(ye,{core:{math:C},perlin:A,tileableNoise:L})})}}const xe=`// Based on the following work with slight modifications.
// https://github.com/sebh/TileableVolumeNoise

/**
 * The MIT License (MIT)
 *
 * Copyright(c) 2017 Sébastien Hillaire
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

precision highp float;
precision highp int;

#include "core/math"
#include "perlin"
#include "tileableNoise"

uniform float layer;

in vec2 vUv;

layout(location = 0) out float outputColor;

void main() {
  vec3 point = vec3(vUv.x, vUv.y, layer);
  float cellCount = 2.0;
  vec4 noise = vec4(
    1.0 - getWorleyNoise(point, cellCount * 1.0),
    1.0 - getWorleyNoise(point, cellCount * 2.0),
    1.0 - getWorleyNoise(point, cellCount * 4.0),
    1.0 - getWorleyNoise(point, cellCount * 8.0)
  );
  vec3 fbm = vec3(
    dot(noise.xyz, vec3(0.625, 0.25, 0.125)),
    dot(noise.yzw, vec3(0.625, 0.25, 0.125)),
    dot(noise.zw, vec2(0.75, 0.25))
  );
  outputColor = dot(fbm, vec3(0.625, 0.25, 0.125));
}
`;class K extends k{constructor(){super({size:fe,fragmentShader:z(xe,{core:{math:C},perlin:A,tileableNoise:L})})}}class Z{constructor({size:n,fragmentShader:o}){this.needsRender=!0,this.camera=new N,this.size=n,this.material=new q({glslVersion:p,vertexShader:`
        in vec3 position;
        out vec2 vUv;
        void main() {
          vUv = position.xy * 0.5 + 0.5;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:o,uniforms:{layer:new i(0)}}),this.mesh=new P(new b(2,2),this.material),this.renderTarget=new le(n,n,{depthBuffer:!1,format:ue});const e=this.renderTarget.texture;e.generateMipmaps=!0,e.minFilter=de,e.magFilter=F,e.wrapS=f,e.wrapT=f,e.colorSpace=Y,e.needsUpdate=!0}dispose(){this.renderTarget.dispose(),this.material.dispose()}render(n,o){this.needsRender&&(this.needsRender=!1,n.setRenderTarget(this.renderTarget),n.render(this.mesh,this.camera),n.setRenderTarget(null))}get texture(){return this.renderTarget.texture}}const Te=`precision highp float;
precision highp int;

#include "core/math"
#include "perlin"
#include "tileableNoise"

in vec2 vUv;

layout(location = 0) out vec4 outputColor;

float getWorleyFbm(
  const vec3 point,
  float frequency,
  float amplitude,
  const float lacunarity,
  const float gain,
  const int octaveCount
) {
  float noise = 0.0;
  for (int i = 0; i < octaveCount; ++i) {
    noise += amplitude * (1.0 - getWorleyNoise(point, frequency));
    frequency *= lacunarity;
    amplitude *= gain;
  }
  return noise;
}

void main() {
  vec3 point = vec3(vUv.x, vUv.y, 0.0);

  // Mid clouds
  {
    float worley = getWorleyFbm(
      point + vec3(0.5),
      8.0, // frequency
      0.4, // amplitude
      2.0, // lacunarity
      0.95, // gain
      4 // octaveCount
    );
    worley = smoothstep(1.0, 1.4, worley);
    outputColor.g = worley;
  }

  // Low clouds
  {
    float worley = getWorleyFbm(
      point,
      16.0, // frequency
      0.4, // amplitude
      2.0, // lacunarity
      0.95, // gain
      4 // octaveCount
    );
    worley = smoothstep(0.8, 1.4, worley);
    outputColor.r = saturate(worley - outputColor.g);
  }

  // High clouds
  {
    float perlin = getPerlinNoise(
      point,
      vec3(6.0, 12.0, 1.0), // frequency
      8 // octaveCount
    );
    perlin = smoothstep(-0.5, 0.5, perlin);
    outputColor.b = perlin;
  }

  // Extra
  {
    float perlin = getPerlinNoise(
      point + vec3(-19.1, 33.4, 47.2),
      32.0, // frequency
      4 // octaveCount
    );
    perlin = smoothstep(-0.5, 0.5, perlin);
    outputColor.a = perlin;
  }

  outputColor.a = 1.0;
}
`;let we=class extends Z{constructor(){super({size:512,fragmentShader:z(Te,{core:{math:C},perlin:A,tileableNoise:L})})}};const Ie=`precision highp float;
precision highp int;

#include "core/math"
#include "perlin"
#include "tileableNoise"

in vec2 vUv;

layout(location = 0) out vec4 outputColor;

const vec3 frequency = vec3(12.0);
const int octaveCount = 3;

float perlin(const vec3 point) {
  return getPerlinNoise(point, frequency, octaveCount);
}

vec3 perlin3d(const vec3 point) {
  float perlin1 = perlin(point);
  float perlin2 = perlin(point.yzx + vec3(-19.1, 33.4, 47.2));
  float perlin3 = perlin(point.zxy + vec3(74.2, -124.5, 99.4));
  return vec3(perlin1, perlin2, perlin3);
}

vec3 curl(vec3 point) {
  const float delta = 0.1;
  vec3 dx = vec3(delta, 0.0, 0.0);
  vec3 dy = vec3(0.0, delta, 0.0);
  vec3 dz = vec3(0.0, 0.0, delta);

  vec3 px0 = perlin3d(point - dx);
  vec3 px1 = perlin3d(point + dx);
  vec3 py0 = perlin3d(point - dy);
  vec3 py1 = perlin3d(point + dy);
  vec3 pz0 = perlin3d(point - dz);
  vec3 pz1 = perlin3d(point + dz);

  float x = py1.z - py0.z - pz1.y + pz0.y;
  float y = pz1.x - pz0.x - px1.z + px0.z;
  float z = px1.y - px0.y - py1.x + py0.x;

  const float divisor = 1.0 / (2.0 * delta);
  return normalize(vec3(x, y, z) * divisor);
}

void main() {
  vec3 point = vec3(vUv.x, vUv.y, 0.0);
  outputColor.rgb = 0.5 * curl(point) + 0.5;
  outputColor.a = 1.0;
}
`;let Se=class extends Z{constructor(){super({size:128,fragmentShader:z(Ie,{core:{math:C},perlin:A,tileableNoise:L})})}};async function Oe(t,n){const o=new h({glslVersion:p,vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 1.0, 1.0);
      }
    `,fragmentShader:`
      precision highp sampler2D;
      uniform sampler2D inputTexture;
      out vec4 outputColor;
      void main() {
        // Flipping Y isn't needed, as Texture already flipped it by default.
        outputColor = texelFetch(inputTexture, ivec2(gl_FragCoord.xy), 0);
      }
    `,uniforms:{inputTexture:new i(t.texture)}}),e=new P(new b(2,2),o),c=new V;c.add(e);const l=new N,a=new $({preserveDrawingBuffer:!0});t.render(a);const{size:r}=t;a.setSize(r,r),a.render(c,l),await new Promise(g=>{a.domElement.toBlob(m=>{if(m!=null){const d=document.createElement("a");d.href=URL.createObjectURL(m),d.download=n,document.body.appendChild(d),d.click(),document.body.removeChild(d)}g()})}),t.dispose(),o.dispose(),a.dispose()}const W=({createProceduralTexture:t,fileName:n})=>{const o=u.useMemo(()=>t(),[t]),e=u.useMemo(()=>new h({glslVersion:p,vertexShader:Ee,fragmentShader:Re,uniforms:{resolution:new i(new D),size:new i(new D().setScalar(o.size*2)),inputTexture:new i(o.texture),gammaCorrect:new i(!1)}}),[o]),{gl:c}=E();u.useEffect(()=>{o.render(c)},[o,c]);const{gammaCorrect:l}=R({gammaCorrect:!1,save:G(()=>{Oe(t(),n).catch(a=>{console.error(a)})})},[t,n]);return U(({size:a})=>{e.uniforms.resolution.value.set(a.width,a.height),e.uniforms.gammaCorrect.value=l}),s(j,{material:e})},Ee=`
  out vec2 vUv;

  void main() {
    vUv = position.xy * 0.5 + 0.5;
    gl_Position = vec4(position.xy, 1.0, 1.0);
  }
`,Re=`
  precision highp float;
  precision highp sampler2D;

  in vec2 vUv;

  out vec4 outputColor;

  uniform vec2 resolution;
  uniform vec2 size;
  uniform sampler2D inputTexture;
  uniform bool gammaCorrect;

  void main() {
    vec2 scale = resolution / size;
    vec2 uv = vUv * scale + (1.0 - scale) * 0.5;
    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) {
      discard;
    }

    vec4 coord = vec4(uv, uv - 0.5) * 2.0;
    vec4 color;
    if (uv.y > 0.5) {
      if (uv.x < 0.5) {
        color = vec4(vec3(texture(inputTexture, coord.xw).r), 1.0);
      } else {
        color = vec4(vec3(texture(inputTexture, coord.zw).g), 1.0);
      }
    } else {
      if (uv.x < 0.5) {
        color = vec4(vec3(texture(inputTexture, coord.xy).b), 1.0);
      } else {
        color = vec4(vec3(texture(inputTexture, coord.zy).a), 1.0);
      }
    }
    outputColor = gammaCorrect ? linearToOutputTexel(color) : color;
  }
`;W.__docgenInfo={description:"",methods:[],displayName:"ProceduralTextureViewer",props:{createProceduralTexture:{required:!0,tsType:{name:"signature",type:"function",raw:"() => ProceduralTexture",signature:{arguments:[],return:{name:"ProceduralTexture"}}},description:""},fileName:{required:!0,tsType:{name:"string"},description:""}}};const Q=()=>s(y,{children:s(W,{createProceduralTexture:()=>new we,fileName:"local_weather.png"})});Q.__docgenInfo={description:"",methods:[],displayName:"Story"};function Ne(t,n){const o=new h({glslVersion:p,vertexShader:`
      void main() {
        gl_Position = vec4(position.xy, 1.0, 1.0);
      }
    `,fragmentShader:`
      precision highp sampler3D;
      uniform sampler3D inputTexture;
      uniform int layer;
      out vec4 outputColor;
      void main() {
        ivec3 size = textureSize(inputTexture, 0);
        vec2 coord = vec2(gl_FragCoord.x, float(size.y) - gl_FragCoord.y);
        outputColor = vec4(vec3(texelFetch(inputTexture, ivec3(coord, layer), 0).r), 1.0);
      }
    `,uniforms:{inputTexture:new i(t.texture),layer:new i(0)}}),e=new P(new b(2,2),o),c=new V;c.add(e);const l=new N,a=new $({preserveDrawingBuffer:!0});t.render(a);const{size:r}=t;a.setSize(r,r);const g=document.createElement("canvas");B(g!=null),g.width=r,g.height=r;const m=g.getContext("2d");B(m!=null);const d=new Uint8Array(r*r*r);for(let x=0;x<r;++x){o.uniforms.layer.value=x,a.render(c,l),m.drawImage(a.domElement,0,0);const re=m.getImageData(0,0,r,r);for(let H=0,_=r*r*x;H<r*r*4;H+=4,++_)d[_]=re.data[H]}const oe=new Blob([d],{type:"application/octet-stream"}),v=document.createElement("a");v.href=URL.createObjectURL(oe),v.download=n,document.body.appendChild(v),v.click(),document.body.removeChild(v),t.dispose(),o.dispose(),a.dispose()}const M=({createProceduralTexture:t,fileName:n})=>{const o=u.useMemo(()=>t(),[t]),e=u.useMemo(()=>new h({glslVersion:p,vertexShader:Pe,fragmentShader:be,uniforms:{resolution:new i(new D),size:new i(o.size),columns:new i(0),inputTexture:new i(o.texture),gammaCorrect:new i(!1)}}),[o]),{gl:c}=E();u.useEffect(()=>{o.render(c)},[o,c]);const{gammaCorrect:l}=R({gammaCorrect:!1,save:G(()=>{Ne(t(),n)})},[n]);return U(({size:a})=>{e.uniforms.resolution.value.set(a.width,a.height),e.uniforms.columns.value=Math.floor(a.width/o.size),e.uniforms.gammaCorrect.value=l}),s(j,{material:e})},Pe=`
  out vec2 vUv;

  void main() {
    vUv = position.xy * 0.5 + 0.5;
    gl_Position = vec4(position.xy, 1.0, 1.0);
  }
`,be=`
  precision highp float;
  precision highp sampler3D;

  in vec2 vUv;

  out vec4 outputColor;

  uniform vec2 resolution;
  uniform float size;
  uniform int columns;
  uniform sampler3D inputTexture;
  uniform bool gammaCorrect;

  void main() {
    vec2 uv = vec2(vUv.x, 1.0 - vUv.y) * resolution / size;
    ivec2 xy = ivec2(uv);
    if (xy.x >= columns) {
      discard;
    }
    int index = xy.y * columns + xy.x % columns;
    if (index >= int(size)) {
      discard;
    }
    vec3 uvw = vec3(fract(uv), (float(index)) / size);
    vec4 color = vec4(vec3(texture(inputTexture, uvw).r), 1.0);
    outputColor = gammaCorrect ? linearToOutputTexel(color) : color;
  }
`;M.__docgenInfo={description:"",methods:[],displayName:"Procedural3DTextureViewer",props:{createProceduralTexture:{required:!0,tsType:{name:"signature",type:"function",raw:"() => Procedural3DTexture",signature:{arguments:[],return:{name:"Procedural3DTexture"}}},description:""},fileName:{required:!0,tsType:{name:"string"},description:""}}};const J=()=>s(y,{children:s(M,{createProceduralTexture:()=>new X,fileName:"shape.bin"})});J.__docgenInfo={description:"",methods:[],displayName:"Story"};const ee=()=>s(y,{children:s(M,{createProceduralTexture:()=>new K,fileName:"shape_detail.bin"})});ee.__docgenInfo={description:"",methods:[],displayName:"Story"};const ne=()=>s(y,{children:s(W,{createProceduralTexture:()=>new Se,fileName:"turbulence.png"})});ne.__docgenInfo={description:"",methods:[],displayName:"Story"};const ze=new pe(1,1,1),Ce=()=>{const t=u.useMemo(()=>new X,[]),n=u.useMemo(()=>new K,[]),o=u.useMemo(()=>new h({glslVersion:p,vertexShader:Ae,fragmentShader:Le,uniforms:{cameraPosition:new i(new me),shape:new i(t.texture),detail:new i(n.texture),base:new i(new ge(8421504)),threshold:new i(0),opacity:new i(0),range:new i(0),steps:new i(0),frame:new i(0),scale:new i(0)}}),[t,n]),e=R("viewer",{threshold:{value:.5,min:0,max:1,step:.01},opacity:{value:.25,min:0,max:1,step:.01},range:{value:.25,min:0,max:1,step:.01},steps:{value:100,min:0,max:200,step:1},scale:{value:1,min:.1,max:5}}),{camera:c}=E();U(()=>{const r=o.uniforms;r.cameraPosition.value.copy(c.position),r.threshold.value=e.threshold,r.opacity.value=e.opacity,r.range.value=e.range,r.steps.value=e.steps,r.scale.value=e.scale,++r.frame.value});const{gl:l}=E();u.useEffect(()=>{t.render(l),n.render(l)},[t,n,l]);const{target:a}=R("target",{target:{options:["shape","shapeDetail"]}});return u.useEffect(()=>{o.uniforms.shape.value={shape:t,shapeDetail:n}[a].texture},[t,n,o,a]),ie(ae,{children:[s(he,{}),s("mesh",{geometry:ze,material:o})]})},te=()=>s(y,{camera:{position:[-1,1,-1]},children:s(Ce,{})}),Ae=`
  out vec3 vOrigin;
  out vec3 vDirection;

  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vOrigin = vec3(inverse(modelMatrix) * vec4(cameraPosition, 1.0)).xyz;
    vDirection = position - vOrigin;
    gl_Position = projectionMatrix * mvPosition;
  }
`,Le=`
  precision highp float;
  precision highp sampler3D;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;

  in vec3 vOrigin;
  in vec3 vDirection;

  out vec4 outputColor;

  uniform sampler3D shape;
  uniform sampler3D detail;

  uniform vec3 base;
  uniform float threshold;
  uniform float range;
  uniform float opacity;
  uniform float steps;
  uniform float frame;
  uniform float scale;

  float remap(float value, float min1, float max1, float min2, float max2) {
    return min2 + (value - min1) / (max1 - min1) * (max2 - min2);
  }

  uint hash(uint seed) {
    seed = seed ^ 61u ^ (seed >> 16u);
    seed *= 9u;
    seed = seed ^ (seed >> 4u);
    seed *= 0x27d4eb2du;
    seed = seed ^ (seed >> 15u);
    return seed;
  }

  float random(inout uint seed) {
    return float(hash(seed)) / 4294967296.0;
  }

  vec2 hitBox(vec3 origin, vec3 direction) {
    const vec3 minBox = vec3(-0.5);
    const vec3 maxBox = vec3(0.5);
    vec3 a = (minBox - origin) / direction;
    vec3 b = (maxBox - origin) / direction;
    vec3 minT = min(a, b);
    vec3 maxT = max(a, b);
    float t0 = max(minT.x, max(minT.y, minT.z));
    float t1 = min(maxT.x, min(maxT.y, maxT.z));
    return vec2(t0, t1);
  }

  float sampleTexture(vec3 uvw) {
    return texture(shape, uvw * scale).r;
  }

  float shading(vec3 coord) {
    const float step = 0.005;
    return sampleTexture(coord + vec3(-step)) - sampleTexture(coord + vec3(step));
  }

  void main() {
    vec3 rayDirection = normalize(vDirection);
    vec2 bounds = hitBox(vOrigin, rayDirection);
    if (bounds.x > bounds.y) {
      discard;
    }

    bounds.x = max(bounds.x, 0.0);

    vec3 point = vOrigin + bounds.x * rayDirection;
    vec3 increment = 1.0 / abs(rayDirection);
    float delta = min(increment.x, min(increment.y, increment.z));
    delta /= steps;

    // Nice little seed from
    // https://blog.demofox.org/2020/05/25/casual-shadertoy-path-tracing-1-basic-camera-diffuse-emissive/
    uint seed =
      uint(gl_FragCoord.x) * uint(1973) +
      uint(gl_FragCoord.y) * uint(9277) +
      uint(frame) * uint(26699);
    vec3 size = vec3(textureSize(shape, 0));
    float rand = random(seed) * 2.0 - 1.0;
    point += rayDirection * rand * (1.0 / size);

    vec4 color = vec4(base, 0.0);
    for (float t = bounds.x; t < bounds.y; t += delta) {
      float d = sampleTexture(point + 0.5);
      d = smoothstep(threshold - range, threshold + range, d) * opacity;

      float col = shading(point + 0.5) * 3.0 + (point.x + point.y) * 0.25 + 0.2;
      color.rgb += (1.0 - color.a) * d * col;
      color.a += (1.0 - color.a) * d;
      if (color.a > 0.99) {
        break;
      }
      point += rayDirection * delta;
    }

    outputColor = linearToOutputTexel(color);
  }
`;te.__docgenInfo={description:"",methods:[],displayName:"Story"};const Ve={title:"clouds/Building Blocks",parameters:{layout:"fullscreen"}},T=Q,w=J,I=ee,S=ne,O=te;T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:"_LocalWeather",...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:"_Shape",...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:"_ShapeDetail",...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:"_Turbulence",...S.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:"_VolumetricShape",...O.parameters?.docs?.source}}};const $e=["LocalWeather","Shape","ShapeDetail","Turbulence","VolumetricShape"];export{T as LocalWeather,w as Shape,I as ShapeDetail,S as Turbulence,O as VolumetricShape,$e as __namedExportsOrder,Ve as default};
