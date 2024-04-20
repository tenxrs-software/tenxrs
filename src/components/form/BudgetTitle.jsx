import styled from "styled-components";

export const BudgetTitle = styled.h3`
  font-size: ${props => props.theme.font.sizes.button};
  color: ${props => props.theme.colors.text.white};
  font-weight: 400;
  text-transform: capitalize;
`;