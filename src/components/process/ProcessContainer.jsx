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
    margin-bottom: 0;
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    height: 225px;
    margin-bottom: 0;
  }
`;

export const ProcessCardContainerText = styled.h5`
  color: ${(props) => (props.$pale ? "#ACACAC" : "white")};
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
            <h4>Discovery</h4>
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
            <h4>Design</h4>
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
            <h4>Development</h4>
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
            <h4>Validation</h4>
            <h5>Implement product analytics</h5>
          </div>
        </ProcessCardContainer>
      </SplideSlide>
    </Splide>
  );
};
