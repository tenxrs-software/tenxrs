import { Splide, SplideSlide } from "@splidejs/react-splide";
import styled from "styled-components";
import searchIcon from "../../assets/Vectorsearch.png";
import BrushIcon from "../../assets/Vectorpaint-brush.png";
import TubeIcon from "../../assets/tube.png";
import BrowseIcon from "../../assets/browser.png";
const ProcessCardContainer = styled.div`
  max-width: 398px;
  background: #202020;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  align-items: flex-start;
  height: 314px;
  padding: 25px 30px;
  justify-content: space-between;
  text-align: start;
  color: white;
  margin-bottom: 80px;
  &:hover {
    background: #5534f7;
  }

  @media screen and (max-width: 1024px) {
    max-height: 234px;
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
  // font-style : ${props =>  props.theme.font.style.subTitle};
  font-weight : ${props => props.$semiBold ? props.theme.font.weight.sixHundred : props.theme.font.weight.subTitle};
  font-size : ${props => props.$fontSize ? props.theme.font.sizes.button : '16px'};
  margin : 10px 0;
  
  

`;

export const ProcessItems = () => {
  return (
    <Splide
      options={{
        perPage: 3.5,
        rewind: true,
        gap: "24px",
        focus: "center",
        arrows: false,
        pagination: false,
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
      <SplideSlide>
        <ProcessCardContainer>
          <img src={searchIcon} alt="img" />
          <div>
            <ProcessCardContainerText $semiBold $fontSize>Discovery</ProcessCardContainerText>
            <ProcessCardContainerText $pale>
              Clarifying and focusing on the problem.
            </ProcessCardContainerText>
          </div>
        </ProcessCardContainer>
      </SplideSlide>
      <SplideSlide>
        <ProcessCardContainer>
          <img src={BrushIcon} alt="" />
          <div>
            <ProcessCardContainerText $semiBold $fontSize>Design</ProcessCardContainerText>
            <ProcessCardContainerText $pale>
              Building a testable version of the idea.
            </ProcessCardContainerText>
          </div>
        </ProcessCardContainer>
      </SplideSlide>
      <SplideSlide>
        <ProcessCardContainer>
          <img src={BrowseIcon} />
          <div>
            <ProcessCardContainerText $semiBold $fontSize>Development</ProcessCardContainerText>
            <ProcessCardContainerText $pale>
              Build out of design style guide
            </ProcessCardContainerText>
          </div>
        </ProcessCardContainer>
      </SplideSlide>
      <SplideSlide>
        <ProcessCardContainer>
          <img src={TubeIcon} alt="" />
          <div>
            <ProcessCardContainerText $semiBold $fontSize>Validation</ProcessCardContainerText>
            <ProcessCardContainerText $pale>Implement product analytics</ProcessCardContainerText>
          </div>
        </ProcessCardContainer>
      </SplideSlide>
    </Splide>
  );
};
