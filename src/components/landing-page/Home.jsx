import { Canvas } from "@react-three/fiber"
import Scene from "../3d/Scene"
import { Title } from "../common/Title";
import { TitleSpan } from "../common/TitleSpan"; 
import Nav from "../nav/Nav";
import { BudgetTitle } from "../form/BudgetTitle";

const Home = () => {
    return (
        <>
    <Nav/>
    <div style={{position: "relative", marginTop: "100px"}}>
    <Canvas style = {{position: "absolute", top: "-10%", left: "20%"}}>
        <Scene />
    </Canvas>
    <Title $isMain = "true">Transforming Ideas Into <TitleSpan $isMain = "true">Reality</TitleSpan></Title>
    <BudgetTitle $isTitlePara = "true">Your Trusted Partner In Web And App Development</BudgetTitle>
    </div>
        </>
    )
}

export default Home;