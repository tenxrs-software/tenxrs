import { Environment, MeshTransmissionMaterial, useGLTF, Text, OrbitControls, Image, Float, Stars, Shadow, MeshDistortMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";

const Torus = () => {
    const { nodes } = useGLTF("/src/assets/tenxtorus.glb");
    const { viewport } = useThree(); // Destructuring viewport from useThree

    const mesh = useRef();
    const torusPosition = [1, -2, 0]; // Initial position of the torus

    useFrame(() => {
        mesh.current.rotation.x += 0.03;
    });

    const materialProps = useControls({
        thickness: { value: 0.6, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0, min: 0, max: 1, step: 0.1 },
        transmission: { value: 1, min: 0, max: 1, step: 0.1 },
        ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.02, min: 0, max: 1 },
        backside: { value: true },
    });

    return (
        <>
            <directionalLight intensity={10} position={[-5, 0, 0]} />
            <Environment preset='warehouse' />
            <group position={torusPosition} scale={3.4}>
                <mesh ref={mesh} {...nodes.Torus001}>
                <OrbitControls enableZoom={false}/>
                    <MeshTransmissionMaterial {...materialProps} />
                </mesh>
                {/* </Float> */}
            </group>
        </>
    );
};

export default Torus;
