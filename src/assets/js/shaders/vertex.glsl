precision mediump float;

varying vec2 vUv;

varying vec3 vNormal;
varying vec3 vWorldPos;

void main() {
  vUv = uv;

  vNormal = normal;

  vec3 pos = position;

  vWorldPos = vec4(modelMatrix * vec4(pos, 1.0)).xyz;

  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(pos, 1.0);
}
