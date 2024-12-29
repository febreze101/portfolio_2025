import React, { useMemo, useRef } from "react";
import * as THREE from "three";

interface DottedPatternProps {
  material: THREE.ShaderMaterial;
}

function DottedPattern({ material }: DottedPatternProps) {
  const points = useRef<THREE.Points>(null);
  const gridSize = 100;
  const spacing = 0.2;
  const offset = (gridSize * spacing) / 2;

  const dotPositions = useMemo(() => {
    const positions = new Float32Array(gridSize * gridSize * 3);
    let idx = 0;

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        positions[idx++] = x * spacing - offset;
        positions[idx++] = y * spacing - offset;
        positions[idx++] = 0;
      }
    }
    return positions;
  }, []);

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={gridSize * gridSize}
          array={dotPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <primitive object={material} attach="material" />
    </points>
  );
}

export default DottedPattern;
