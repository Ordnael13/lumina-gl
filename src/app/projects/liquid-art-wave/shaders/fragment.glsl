varying vec2 vUv;
uniform sampler2D uTexture;
uniform float uTime;

void main() {
  vec2 distortion = vec2(
    sin(vUv.y * 10.0 + uTime) * 0.005,
    cos(vUv.x * 10.0 + uTime) * 0.005
  );
  vec4 color = texture2D(uTexture, vUv + distortion);
  float vignette = 1.0 - distance(vUv, vec2(0.5));
  gl_FragColor = color * mix(0.7, 1.0, vignette);
}