import { Environment, MeshTransmissionMaterial, OrbitControls, Text, useGLTF } from "@react-three/drei";
import {useRef} from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

const Torus = () => {
    const { nodes } = useGLTF("/tenxtorus.glb");
    const { viewport } = useThree();

    const mesh = useRef()
    useFrame(() => {
        mesh.current.rotation.x += 0.03;
    })

    const materialProps = useControls({
        thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0, min: 0, max: 1, step: 0.1 },
        transmission: { value: 1, min: 0, max: 1, step: 0.1 },
        ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.02, min: 0, max: 1 },
        backside: { value: true },
    })

    return <>
        <directionalLight intensity={3} position={[0, 0, 0]} />
        <Environment preset='city' />
        <group scale={viewport.width / 10}>

        <Text position={[0, 0, 20]} fontSize={0.2} font={"Poppins-Light.ttf"}>You found me!</Text>
        <Text position={[0, 0, 10]} fontSize={0.2} font={"Poppins-Light.ttf"}>Keep going!</Text>
            <Text position={[0, 0, -0.5]} fontSize={0.2} font={"Poppins-Light.ttf"}>Welcome to tenxrs!</Text>
            <mesh ref={mesh} {...nodes.Torus001}>
                <MeshTransmissionMaterial {...materialProps} />
            </mesh>
        </group>
        <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={0.05} makeDefault />
    </>
}


export default Torus;