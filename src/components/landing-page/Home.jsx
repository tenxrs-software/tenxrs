import { Canvas } from "@react-three/fiber";
import Scene from "../3d/Scene";
import { Title } from "../common/Title";
import { TitleSpan } from "../common/TitleSpan";
import Nav from "../nav/Nav";
import { BudgetTitle } from "../form/BudgetTitle";
import { Center, LandingContent } from "../common/Containers";

const Home = () => {
  return (
    <>
      <Center>
        <Nav />
        <LandingContent>
          <Canvas style={{ position: "absolute", top: "-10%", left: "20%" }}>
            <Scene />
          </Canvas>
          <Title
            $widthVary="272px"
            $isMain="true"
            $425fontSize="32px"
            $768fontSize="60px"
            $425width="272px"
            $768width="578px"
            $768margin="24px 0 "
            $1024fontSize="78px"
            $1024width="665px"
            $1024margin="0"
            $425mb="0"
          >
            Transforming Ideas Into{" "}
            <TitleSpan $isMain="true">Reality</TitleSpan>
          </Title>
          <BudgetTitle
            $isTitlePara="true"
            $425sub="14px"
            $425width="263px"
            $1024margin="8px 0 0"
          >
            Your Trusted Partner In Web And App Development
          </BudgetTitle>
        </LandingContent>
      </Center>
    </>
  );
};

export default Home;
