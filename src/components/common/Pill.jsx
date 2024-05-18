import styled from "styled-components";

export const Pill = styled.button`
  background: ${(props) => props.theme.colors.background.buttons.primary};
  color: ${(props) => props.theme.colors.text.white};
  font-size: 20px;
  border-radius: 200px;
  padding: ${(props) =>
    props.$customPadding ? props.$customPadding : "10px 24px"};
  max-width: min-content 1440px;
  border: 1.5px solid ${(props) => props.theme.colors.common.grey};
  transition: all 0.2s ease-in;
  &:hover {
    background: ${(props) => props.theme.colors.background.buttons.hover};
  }
  @media screen and (max-width: 768px) {
    padding: 10px 24px;
    font-size: 16px;
  }
  @media only screen and (max-width: 500px) and (min-width: 375px) {
    font-size: 14px;
    width: ${(props) => props.$425width};
  }
`;
