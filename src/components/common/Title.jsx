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
  width: ${(props) => (props.$widthVary ? props.$widthVary : "908px")};
  text-transform: capitalize;
  margin-left: 0;
  margin-right: 0;
  margin-top: ${(props) => (props.marTop ? props.marTop : "40px")};
  margin-bottom: ${(props) => (props.$marBtm ? props.$marBtm : "0")};

  @media screen and (min-width: 1024px) {
    font-size: 32px;
  }
  @media screen and (max-width: 786px) {
    font-size: ${(props) => props.$768fontSize};
    width: ${(props) => props.$768width};
    margin: ${(props) => props.$768margin};
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    font-size: ${(props) => props.$425fontSize};
    margin-bottom: ${(props) => (props.$425mb ? props.$425mb : "24px")};
    width: ${(props) => props.$425width};
    text-align: ${(props) => props.$TextAlign};
    padding: ${(props) => props.$425padding};
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin: ${(props) => props.$1024margin};
    width: ${(props) => props.$1024width};
    font-size: ${(props) => props.$1024fontSize};
  }
`;
