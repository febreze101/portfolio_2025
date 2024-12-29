// dotVertex.glsl
uniform vec3 mousePos;
uniform float glowRadius;
uniform float pointSize;

varying float vIntensity;
uniform float fadeStrength;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  
  float dist = distance(position.xy, mousePos.xy);
  vIntensity = (1.0 - smoothstep(0.0, glowRadius, dist)) * fadeStrength;
  
  gl_PointSize = pointSize * (1.0 + vIntensity * 2.0);
}