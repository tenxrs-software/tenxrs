import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) => props.theme.font.sizes.title};
  color: ${(props) => props.theme.colors.text.white};
  font-weight: 400;
  text-transform: capitalize;
  margin: ${(props) => (props.$minMargin ? props.$minMargin : "40px 0")};

  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
