import { CardContainer, Center, FlexRowContainer, IconContainer, PillsContainer } from "../common/Containers.jsx";
import { FWButton } from "../common/FWButton"
import { Title } from "../common/Title";
import { TitleSpan } from "../common/TitleSpan";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '../../assets/card-design.png';
import { Line } from "../common/LineDivider.jsx";
import { Pill } from "../common/Pill.jsx";

const About = () => {

    return (<>
        <Center>

            <FWButton>Let's work</FWButton>
            <Line />
            <Title>Building Digital Products with Precision <br /> <TitleSpan>From Idea to Launch: </TitleSpan> </Title>

            <Splide options={{ perPage: '3', rewind: true }}>
                <SplideSlide>
                    <CardContainer>
                        <img src="/src/assets/card-design.png" width='100%' />
                    </CardContainer>
                </SplideSlide>
                <SplideSlide>
                    <CardContainer>
                        <img src="/src/assets/card-miro.png" width='100%' />
                    </CardContainer>
                </SplideSlide>
                <SplideSlide>
                    <CardContainer>
                        <img src="/src/assets/card-web-development.png" width='100%' />
                    </CardContainer>
                </SplideSlide>
                <SplideSlide>
                    <CardContainer>
                        <img src="/src/assets/card-app-development.png" width='100%' />
                    </CardContainer>
                </SplideSlide>
            </Splide>

            <Splide options={{ perPage: '10', rewind: true, autoplay: true }}>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/js.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/java.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/react.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/nodejs.png" width='100%' />
                    </IconContainer>
                </SplideSlide>

                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/js.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/java.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/react.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/nodejs.png" width='100%' />
                    </IconContainer>
                </SplideSlide><SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/js.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/java.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/react.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/nodejs.png" width='100%' />
                    </IconContainer>
                </SplideSlide><SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/js.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/java.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/react.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/nodejs.png" width='100%' />
                    </IconContainer>
                </SplideSlide><SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/js.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/java.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/react.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
                <SplideSlide>
                    <IconContainer>
                        <img src="/src/assets/nodejs.png" width='100%' />
                    </IconContainer>
                </SplideSlide>
            </Splide>

            <FlexRowContainer>
                <img src="/src/assets/glass-spectrum.png" width='360px' />
                    <Title>collaborated with Organisations in diverse <br /> <TitleSpan>sectors</TitleSpan> </Title>
                    <PillsContainer>
                        <Pill>Startups</Pill>
                        <Pill>Foreign Exchange</Pill>
                        <Pill>Application</Pill>
                        <Pill>Finance</Pill>
                        <Pill>Neuroscience</Pill>
                    </PillsContainer>
            </FlexRowContainer>
                    <p style={{color: "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </Center>
    </>)
}

export default About;