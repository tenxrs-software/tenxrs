import styled from "styled-components";

export const BudgetTitle = styled.h3`
  margin-left: ${(props) =>
    props.$isTitlePara
      ? props.theme.spacing.margin.marginLeft
      : props.theme.spacing.margin.marginZero};
  font-size: ${(props) => props.theme.font.sizes.button};
  color: ${(props) => props.theme.colors.text.white};
  font-weight: 400;
  text-transform: capitalize;
  margin: ${props => props.$Mb && '0 0 40px'};



  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    margin: ;
  }

  @media only screen and (min-width: 500px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    font-size: ${(props) => props.theme.font.sizes.f14};
    margin: ${props => props.$Mb && '0 0 40px'};
    font-weight: 400;
    width: ${props => props.$width ? '353px' : null};

  }

`;
