import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) =>
    props.$isMain
      ? props.theme.font.sizes.mainTitle
      : props.theme.font.sizes.title};
  color: ${(props) => props.theme.colors.text.white};
  font-weight: ${(props) =>
    props.$isMain
      ? props.theme.font.weight.sixHundred
      : props.theme.font.weight.fourHundred};
  width: ${(props) => (props.$widthVary ? props.width700 : "908px")};
  text-transform: capitalize;
  margin-left: 0;
  margin-right: 0;
  margin-top: ${(props) => (props.$marTop ? props.$marTop : "40px")};
  margin-bottom: ${(props) => (props.$marBtm ? props.$marBtm : "0")};
  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
