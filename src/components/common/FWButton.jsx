import styled from "styled-components";

export const FWButton = styled.button`
  background: ${(props) => props.theme.colors.background.buttons.primary};
  width: 100%;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 80px;
  color: ${(props) => props.theme.colors.text.white};
  font-size: 20px;
  border-radius: 200px;
  padding: 18px;
  max-width: 1440px;
  border: 1.5px solid ${(props) => props.theme.colors.common.grey};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.colors.background.buttons.hover};
    border: 1.5px solid transparent;
  }

  top: 60%;
  left: 50%;
  right: 20%;
`;
