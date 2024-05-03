import styled from "styled-components";

export const BudgetTitle = styled.h3`
  margin-left: ${props => props.$isTitlePara? props.theme.spacing.margin.marginLeft : props.theme.spacing.margin.marginZero};
  font-size: ${(props) => props.theme.font.sizes.button};
  color: ${(props) => props.theme.colors.text.white};
  font-weight: 400;
  text-transform: capitalize;
`;
