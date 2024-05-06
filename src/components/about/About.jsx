import {
  CardContainer,
  Center,
  FlexRowContainer,
  IconContainer,
  PillsContainer,
  SpectrumDiv,
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

        <Title
          $marBtm="40px"
          $marTop="100px"
          $margin="71px 0 34px"
          $768width="607px"
          $425width="321px"
          $425fontSize="20px"
          $768fontSize="32px"
          $1024width="642px"
          $1024margin="70px 0 40px"
        >
          Building Digital Products with Precision <br />
          <TitleSpan>From Idea to Launch: </TitleSpan>
        </Title>
        <Splide
          options={{
            perPage: 3.5,
            rewind: true,
            gap: "24px",
            pagination: false,
            focus: "center",
            arrows: false,
            breakpoints: {
              1024: {
                perPage: 2.2,
              },
              768: {
                perPage: 2.2,
              },
              500: {
                perPage: 1.2,
                gap: "19px",
              },
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
              425: {
                perPage: 4.5,
              },
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
              <img src="/src/assets/java.png" width="100%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/react.png" width="100%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/nodejs.png" width="100%" />
            </IconContainer>
          </SplideSlide>

          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/js.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/java.png" width="100%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/react.png" width="100%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/nodejs.png" width="100%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/js.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/java.png" width="100%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/react.png" width="100%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/nodejs.png" width="100%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/js.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/java.png" width="100%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/react.png" width="100%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/nodejs.png" width="100%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/js.png" width="80%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/java.png" width="100%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/react.png" width="100%" />
            </IconContainer>
          </SplideSlide>
          <SplideSlide>
            <IconContainer>
              <img src="/src/assets/nodejs.png" width="100%" />
            </IconContainer>
          </SplideSlide>
        </Splide>

        <FlexRowContainer>
          <SpectrumDiv
            src="/src/assets/glass-spectrum.png"
            $768width="29.8vw"
          />
          <Title
            $minMargin="24px 0"
            $widthVary="700px"
            $425width="262px"
            $TextAlign="center"
            $425padding="0 50px"
            $425fontSize="20px"
            $768fontSize="2rem"
            $768width="56vw"
            $768margin="0"
            $1024width={width < 1024 ? "50vw" : "52vw"}
            $1024margin="0"
          >
            collaborated with Organisations in diverse{" "}
            <TitleSpan>sectors</TitleSpan>
          </Title>
          <PillsContainer
            $widthSize="600px"
            $425width="349px"
            $768width="41.7vw"
            $1024width="42.7vw"
          >
            <Pill>Startups</Pill>
            <Pill>Foreign Exchange</Pill>
            <Pill>Application</Pill>
            <Pill>Finance</Pill>
            <Pill>Neuroscience</Pill>
          </PillsContainer>
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
