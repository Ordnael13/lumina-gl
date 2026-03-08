varying vec2 vUv;
uniform float uTime;
uniform vec2 uMouse;

void main() {
  vUv = uv;
  vec3 pos = position;
  float wave1 = sin(pos.x * 2.0 + uTime * 0.8) * 0.15;
  float wave2 = sin(pos.y * 3.0 + uTime * 1.2) * 0.1;
  float dist = distance(uv, uMouse);
  float ripple = smoothstep(0.4, 0.0, dist) * 0.25;
  pos.z += wave1 + wave2 + ripple;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
}