import { main } from '../../Themes.jsx'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";
import searchIcon from "../../assets/Vectorsearch.png";
import BrushIcon from "../../assets/Vectorpaint-brush.png";
import TubeIcon from "../../assets/tube.png";
import BrowseIcon from "../../assets/browser.png";
const ProcessCardContainer = styled.div`
  max-width: 350px;
  background: #202020;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: flex-start;
  height: 280px;
  padding: 25px 30px;
  justify-content: space-between;
  text-align: start;
  color: white;
  margin-bottom: 80px;
  &:hover {
    background: #5534f7;
  }
  
  @media screen and (max-width: 1024px) {
    text-align: start;
  
  }
  @media screen and (max-width: 768px) {
    max-height: 224px;
    padding: 24px;
    text-align: start;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    height: 225px;
    margin-bottom: 40px;
  }
`;

export const ProcessCardContainerText = styled.h5`
  color: ${(props) => (props.$pale ? "#ACACAC" : "white")};
  font-weight : ${props => props.$semiBold ? props.theme.font.weight.sixHundred : props.theme.font.weight.subTitle};
  font-size : ${props => props.$fontSize ? props.theme.font.sizes.button : '16px'};
  margin :  0;
`;

export const ProcessItems = () => {
  return (
    <Splide
      options={{
        perPage: 3.5,
        rewind: true,
        gap: "20px",
        focus: "center",
        arrows: false,
        pagination: false,
        breakpoints: {
          ...main.SplideBreakpoints.cards
        },
      }}
    >
      <SplideSlide>
        <ProcessCardContainer>
          <img src={searchIcon} alt="img" />
          <div>
            <ProcessCardContainerText $semiBold='true' $fontSize='true'>Discovery</ProcessCardContainerText>
            <ProcessCardContainerText $pale='true'>
              Clarifying and focusing on the problem.
            </ProcessCardContainerText>
          </div>
        </ProcessCardContainer>
      </SplideSlide>
      <SplideSlide>
        <ProcessCardContainer>
          <img src={BrushIcon} alt="img" />
          <div>
            <ProcessCardContainerText $semiBold='true' $fontSize='true'>Design</ProcessCardContainerText>
            <ProcessCardContainerText $pale='true'>
              Building a testable version of the idea.
            </ProcessCardContainerText>
          </div>
        </ProcessCardContainer>
      </SplideSlide>
      <SplideSlide>
        <ProcessCardContainer>
          <img src={BrowseIcon} />
          <div>
            <ProcessCardContainerText $semiBold='true' $fontSize='true'>Development</ProcessCardContainerText>
            <ProcessCardContainerText $pale='true'>
              Build out of design style guide
            </ProcessCardContainerText>
          </div>
        </ProcessCardContainer>
      </SplideSlide>
      <SplideSlide>
        <ProcessCardContainer>
          <img src={TubeIcon} alt="img" />
          <div>
            <ProcessCardContainerText $semiBold='true' $fontSize='true'>Validation</ProcessCardContainerText>
            <ProcessCardContainerText $pale='true'>Implement product analytics</ProcessCardContainerText>
          </div>
        </ProcessCardContainer>
      </SplideSlide>
    </Splide>
  );
};
