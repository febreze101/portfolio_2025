import React, { useMemo, useRef } from "react";

function SpiralPattern({ material }) {
  const points = useRef();
  const gridSize = 100;
  const spacing = 0.2;
  const offset = (gridSize * spacing) / 2;

  const dotPositions = useMemo(() => {
    const positions = new Float32Array(gridSize * gridSize * 3);
    let idx = 0;

    const numCircles = 20; // Number of circular rings
    const pointsPerCircle = gridSize; // Points in each circle
    const radiusStep = 0.2; // Space between circles

    // For each circle
    for (let circle = 0; circle < numCircles; circle++) {
      const radius = circle * radiusStep;
      // For each point on this circle
      for (let point = 0; point < pointsPerCircle; point++) {
        const angle = (point / pointsPerCircle) * Math.PI * 2;

        positions[idx++] = Math.cos(angle) * radius; // x
        positions[idx++] = Math.sin(angle) * radius; // y
        positions[idx++] = 0; // z
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

export default SpiralPattern;
