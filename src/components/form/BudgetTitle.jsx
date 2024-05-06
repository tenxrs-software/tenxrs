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

  @media only screen and (min-width: 500px) and (max-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    font-size: ${(props) => props.$425sub};
    margin: 6px 0;
    font-weight: 400;
    width: ${(props) => props.$425width};
  }

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    margin: ${(props) => props.$1024margin};
  }
`;
