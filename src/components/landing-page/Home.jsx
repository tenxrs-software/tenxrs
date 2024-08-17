import { Canvas } from "@react-three/fiber";
import Scene from "../3d/Scene";
import { Title } from "../common/Title";
import { TitleSpan } from "../common/TitleSpan";
import Nav from "../nav/Nav";
import { BudgetTitle } from "../form/BudgetTitle";
import { Center, LandingContent } from "../common/Containers";
import useWindowResize from "../Hooks/WindowResize";


const Home = () => {
  const width = useWindowResize()

  return (
    <>
      <Center id="Tenxrs">
        <LandingContent>
          <Canvas style={{ position: "absolute", top: `${width >= 1440 && "-20%" || width <= 768 && '-20%'  }`, left: `${width <= 768 && '28%' || width >= 768 && '300px' } ` }}>
            <Scene />
          </Canvas>
          <Title $isMain='true'>
            Transforming Ideas Into
            <TitleSpan $isMain="true"> Reality</TitleSpan>
          </Title>
          <BudgetTitle $isTitlePara="true" $width>
            Your Trusted Partner In Web And App Development
          </BudgetTitle>
        </LandingContent>
      </Center>
    </>
  );
};

export default Home;
