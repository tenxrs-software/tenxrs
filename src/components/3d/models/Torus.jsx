import { Environment, MeshTransmissionMaterial, useGLTF, Text, OrbitControls, Image, Float, Stars, Shadow, MeshDistortMaterial } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { useControls } from "leva";

const Torus = () => {
    const { nodes } = useGLTF("/src/assets/tenxtorus.glb");
    const { viewport } = useThree(); // Destructuring viewport from useThree

    const mesh = useRef();
    const torusPosition = [0, 1, 0]; // Initial position of the torus

    useFrame(() => {
        mesh.current.rotation.x += 0.03;
    });

    return (
        <>
            <directionalLight intensity={10} position={[-5, 0, 0]} />
            <Environment preset='warehouse' />
            <group position={[0,-2.5, -1]}>
                <Text position={[0, 2, 0]} fontSize={viewport.width / 20} font={"Poppins-Light.ttf"} textAlign="left" fontWeight="bold">We Turn</Text>
                <Text position={[0, 1, 0]} fontSize={viewport.width / 20} font={"Poppins-Light.ttf"} textAlign="left">Ideas Into Reality</Text>
                <Text position={[0, 0, 0]} fontSize={viewport.width / 60} font={"Poppins-Light.ttf"} textAlign="left">TENXRS</Text>
            </group>
            <group position={torusPosition} scale={1.1}>
                <Stars radius={100} depth={50} count={350} factor={4} saturation={0} fade speed={2} />
                <mesh ref={mesh} {...nodes.Torus001}>
                <OrbitControls enableZoom={false}/>
                    <MeshTransmissionMaterial {...{
    "thickness": 0.6,
    "roughness": 6,
    "transmission": 1,
    "ior": 1.2,
    "chromaticAberration": 0.02,
    "backside": true
}} />
                </mesh>
                {/* </Float> */}
            </group>
        </>
    );
};

export default Torus;
