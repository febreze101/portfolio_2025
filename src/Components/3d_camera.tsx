import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import * as THREE from 'three';

type GLTFResult = GLTF & {
    nodes: {
        [key: string]: THREE.Mesh
    }
    materials: {
        [key: string]: THREE.Material
    }
}

interface ModelProps {
    url: string
    scale?: number | [number, number, number]
    position?: [number, number, number]
    rotation?: [number, number, number]
}

interface ModelViewerProps {
    modelUrl: string
    backgroundColor?: THREE.Color | string | number
    cameraPosition?: [number, number, number]
    autoRotate?: boolean
}

function Model({ url, scale = 0.3, position = [0, -3, 0], rotation = [0, 0, 0] }: ModelProps) {
    const { scene } = useGLTF(url) as GLTFResult;

    return (
        <primitive 
            object={scene} 
            scale={scale}
            position={position}
            rotation={rotation}
        />
    )
}

function ModelViewer({
    modelUrl,
    backgroundColor = 'white',
    cameraPosition = [0, 0, 5],
    autoRotate = true
}: ModelViewerProps) {  
    
    return (
        <>
            <div style={{ width: '100%', height: '50vh' }} className="border-2 rounded-3xl">
                <Canvas
                    camera={{ position: cameraPosition, fov: 75 }}
                    gl={{ antialias: true }}
                > 
                    <color attach='background' args={[backgroundColor]}/>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} intensity={0.5} />
                    <spotLight position={[-5, 5, 5]} intensity={0.5} penumbra={1} />

                    <Suspense fallback={null}>
                        <Model url={modelUrl} />
                    </Suspense>

                    <OrbitControls 
                        enableDamping={true}
                        dampingFactor={0.05}
                        autoRotate={autoRotate}
                    />
                </Canvas>
            </div>
        </>
    )
}

useGLTF.preload('/src/assets/models/camera.glb');

export default ModelViewer;