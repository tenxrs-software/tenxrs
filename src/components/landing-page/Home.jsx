import { Canvas } from "@react-three/fiber"
import Scene from "../3d/Scene"


const Home = () => {
    return (
    <>
    
    <Canvas style={{backgroundColor: "black", width: innerWidth, height: innerHeight}}>
        <Scene />
    </Canvas>
    
    </>
    )
}

export default Home;