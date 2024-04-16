import { Canvas } from "@react-three/fiber"
import Scene from "../3d/Scene"
import { useEffect, useState } from "react";


const Home = () => {

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth)
        })
    }, [window.innerWidth])


    return (
    <div>
    <Canvas style={{backgroundColor: "black", width: "1440px", height: '100vh'}}>
        <Scene />
    </Canvas>
    </div>
    )
}

export default Home;