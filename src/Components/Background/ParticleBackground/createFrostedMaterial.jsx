import * as THREE from "three";

const vertexShader = `
    varying vec2 vUv;
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

const fragmentShader = `
    uniform vec2 mousePos;
    uniform float radius;
    uniform float smoothness;
    varying vec2 vUv;

    void main() {
        vec2 center = mousePos;
        float dist = distance(vUv, center);

        float circle = 1.0 - smoothstep(radius - smoothness, radius, dist);

        // Frosted glass effect
        float frost = 0.5;
        float transmission = mix(frost, 1.0, circle);

        gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0 - transmission);
    }
`;

function createFrostedMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      mousePos: { value: new THREE.Vector2(0, 0) },
      radius: { value: .1 },
      smoothness: { value: 0.1 },
    },
    vertexShader,
    fragmentShader,
    transparent: true,
    side: THREE.DoubleSide,
  });
}

export default createFrostedMaterial;
