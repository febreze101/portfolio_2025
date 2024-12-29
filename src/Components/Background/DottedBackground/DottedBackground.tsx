import { useState, useMemo, useRef, useEffect } from "react";
import DottedPattern from "./DottedPattern";
import vertexShader from "../shaders/dotVertex.glsl";
import fragmentShader from "../shaders/dotFragment.glsl";
import * as THREE from "three";
import { useFrame, ThreeEvent } from "@react-three/fiber";

function DottedBackground() {
  const [mousePos, setMousePos] = useState<[number, number]>([0, 0]);
  const fadeValue = useRef<number>(0);
  const isActive = useRef<boolean>(false);
  const timeoutId = useRef<number | null>(null);

  // Custom shader material
  const glowMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        mousePos: { value: new THREE.Vector3(0, 0, 0) },
        glowRadius: { value: 1.0 },
        baseColor: { value: new THREE.Color(0x344e41) },
        glowColor: { value: new THREE.Color(0xffffff) },
        pointSize: { value: 2.0 },
        fadeStrength: { value: 0.0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
    });
  }, []);

  useFrame(() => {
    if (isActive.current) {
      fadeValue.current = Math.min(fadeValue.current + 0.1, 1);
    } else {
      fadeValue.current = Math.max(fadeValue.current - 0.1, 0);
    }
    glowMaterial.uniforms.fadeStrength.value = fadeValue.current;
  });

  // Update mouse position
  const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
    const x = event.point.x;
    const y = event.point.y;
    setMousePos([x, y]);
    glowMaterial.uniforms.mousePos.value.set(x, y, 0);
    isActive.current = true;

    // Reset the timer
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeoutId.current = setTimeout(() => {
      isActive.current = false;
    }, 1000);
  };

  useEffect(() => {
    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
    };
  }, []);

  return (
    <>
      <group onPointerMove={handlePointerMove}>
        <DottedPattern material={glowMaterial} />
      </group>
    </>
  );
}

export default DottedBackground;
