import Particles from "./Particles";
import { useMemo, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import createFrostedMaterial from "./createFrostedMaterial";

function ParticleBackground() {
  const [mousePos, setMousePos] = useState([0, 0]);
  const frostedMaterial = useMemo(() => createFrostedMaterial(), []);

  // Update mouse position
  const handlePointerMove = (event) => {
    const x = event.uv.x;
    const y = event.uv.y;

    frostedMaterial.uniforms.mousePos.value.set(x, y);
  };

  return (
    <>
      {/* <mesh position={[0, 0, 2]}>
        <planeGeometry args={[10, 10]} />
        <meshPhysicalMaterial
          transmission={1}
          roughness={0.4}
          thickness={0.1}
          ior={1.5}
          transparent
        />
      </mesh> */}
      <Particles />
      <mesh position={[0, 0, 2]} onPointerMove={handlePointerMove}>
        <planeGeometry args={[25, 25]} />
        <primitive object={frostedMaterial} attach="material" />
      </mesh>
    </>
  );
}

export default ParticleBackground;
