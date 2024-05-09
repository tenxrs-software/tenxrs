import {
  CardContainer,
  Center,
  FlexRowContainer,
  IconContainer,
  PillsContainer,
  SpectrumDiv,
  Wrapper,
} from "../common/Containers.jsx";
import { FWButton } from "../common/FWButton";
import { Title } from "../common/Title";
import { TitleSpan } from "../common/TitleSpan";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../assets/card-design.png";
import { Line } from "../common/LineDivider.jsx";
import { Pill } from "../common/Pill.jsx";
import { useEffect, useState } from "react";
import Card from "../common/card/Card.jsx";
import { data } from "../data.js";
import { Subtitle } from "../common/Subtitle.jsx";
import { main } from '../../Themes.jsx'




const About = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", window);
    };
  }, [width]);

  return (
    <>
      <Center>
        <FWButton>Let's Work</FWButton>
        <Line />

        <Subtitle>
          Building Digital Products with Precision 
          <TitleSpan> From Idea to Launch: </TitleSpan>
        </Subtitle>
        <Splide
          options={{
            perPage: 3.5,
            rewind: true,
            gap: "20px",
            pagination: false,
            focus: "center",
            arrows: false,
            breakpoints: {
              ...main.SplideBreakpoints.cards
            },
          }}
        >
          {data.map((item, index) => {
            return (
              <SplideSlide key={index}>
                <div style={{ display: "flex" }}>
                  <CardContainer $CardBg={item.background}>
                    <Card
                      icon={item.icon}
                      serviceImg={item.img}
                      title={item.title}
                    />
                  </CardContainer>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>

        <Splide
          options={{
            perPage: "10",
            rewind: true,
            autoplay: true,
            arrows: false,
            pagination: false,
            breakpoints: {
             ...main.SplideBreakpoints.icons
            },
          }}
        >
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/js.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/java.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/react.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/nodejs.png" width="80%" />
            </IconContainer>
          </SplideSlide>

          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/js.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/java.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/react.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/nodejs.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/js.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/java.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/react.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/nodejs.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/js.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/java.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/react.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/nodejs.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/js.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/java.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/react.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/nodejs.png" width="80%" />
            </IconContainer>
          </SplideSlide>
        </Splide>

        <FlexRowContainer>
      
         <SpectrumDiv
            src="/src/assets/glass-spectrum.png"            
          />

          <Wrapper>
          <Subtitle  $width={'65.8vw'}>
            collaborated with Organisations in diverse
            <TitleSpan> sectors</TitleSpan>
          </Subtitle>
          
          <PillsContainer $Textwidth>
            <Pill>Startups</Pill>
            <Pill>Foreign Exchange</Pill>
            <Pill>Application</Pill>
            <Pill>Finance</Pill>
            <Pill>Neuroscience</Pill>
          </PillsContainer>
          </Wrapper>
        </FlexRowContainer>

        {/* <p style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p> */}
      </Center>
    </>
  );
};

export default About;
