// ParticleBackground.js
import { useFrame, useThree } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";

function Particles() {
  const points = useRef();
  const particleCount = 2000;


  const pointPositions = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!points.current) return;

    points.current.rotation.x += 0.0003;
    points.current.rotation.y += 0.0003;
  });

  return (
    <>
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={pointPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.001}
          color="white"
          sizeAttenuation={true}
          transparent={true}
          opacity={0.5}
        />
      </points>
    </>
  );
}

export default Particles;
