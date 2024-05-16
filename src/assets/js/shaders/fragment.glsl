precision mediump float;

uniform float uAlpha;
uniform float uTime;
uniform float uProgress;
uniform vec2 uResolution;
uniform sampler2D uTexture;

float PI = 3.14159265359;

#include "./noise.glsl"

varying vec2 vUv;

varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vec2 uv = vUv;

  vec2 fakeUv = vec2(dot(vec3(1.0), vNormal), dot(vec3(-1.0, 0.0, 1.0), vNormal));

  fakeUv = fract(fakeUv / 10. + vec2(uTime / 10., uTime / 10.));

  vec3 color = vec3(0.0);

  float noise = cnoise(vec4(uv * 20., uTime / 10., 0.), vec4(10.0));

  vec4 texture = texture2D(uTexture, fakeUv + noise * 0.2);

  float fresnel = dot(cameraPosition, vNormal);

  fresnel = fresnel * fresnel * fresnel;

  fresnel = clamp(fresnel, 0.0, 1.0);

  float diffuse = dot(normalize(vNormal), normalize(vec3(1.0, 1.0, 1.0)));

  color = vec3(abs(sin(diffuse * 10.)));

  color = texture.rgb;

  color = mix(vec3(1.0), texture.rgb, fresnel);

  gl_FragColor = vec4(color, 1.0);
}
