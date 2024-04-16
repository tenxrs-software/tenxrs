import { Environment, MeshTransmissionMaterial, OrbitControls, Text, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

const Torus = () => {
    const { nodes } = useGLTF("/tenxtorus.glb");
    const { viewport, camera } = useThree(); // Destructuring camera from useThree

    const mesh = useRef();
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

    const textScale = viewport.width / 8;
    const torusScale = viewport.width / 6.5;

    const handleClick = () => {
        // Handle click event
        console.log("Text clicked!");
    };

    camera.fov = 10;
    return (
        <>
            <directionalLight intensity={10} position={[-5, 0, 0]} />
            <Environment preset='city' />
            <group position={[-viewport.width / 4, viewport.height / 8, 0]} scale={[textScale, textScale, textScale]}>
                <mesh onClick={handleClick}>
                    <Text position={[0, 0.4, 0]} fontSize={0.5} font={"Poppins-Light.ttf"} textAlign="left" fontWeight="bold">Transforming</Text>
                </mesh>
                <Text position={[0.5, -0.3, 0]} fontSize={0.5} font={"Poppins-Light.ttf"} textAlign="left">Ideas Into Reality</Text>
                <Text position={[-0.345, -0.8, 0]} fontSize={0.11} font={"Poppins-Light.ttf"} textAlign="left">Your trusted partner in Software Engineering</Text>
            </group>
            <group position={[viewport.width / 4.6, viewport.height / 10, 0]} scale={[torusScale, torusScale, torusScale]}>
                <mesh ref={mesh} {...nodes.Torus001}>
                    <MeshTransmissionMaterial {...materialProps} />
                </mesh>
            </group>
        </>
    );
};

export default Torus;
