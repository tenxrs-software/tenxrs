import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${props => props.theme.font.sizes.title};
  color: ${props => props.theme.colors.text.white};
  font-weight: 400;
  text-transform: capitalize;
`;