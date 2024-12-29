// dotFragment.glsl
uniform vec3 baseColor;
uniform vec3 glowColor;

varying float vIntensity;

void main() {
  vec3 color = mix(baseColor, glowColor, vIntensity);
  gl_FragColor = vec4(color, 0.7 + vIntensity * 0.3);
}