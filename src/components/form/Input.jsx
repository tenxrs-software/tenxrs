import styled from "styled-components";

const Input = styled.input`
  padding: 16px 0;
  background: black;
  border: 1px solid black;
  outline: none;
  margin: 44px 10px;
  border-bottom: 1.5px solid ${(props) => props.theme.colors.common.grey};
  color: ${(props) => props.theme.colors.text.spans.yellow};
  font-size: 24px;

  &::placeholder {
    color: ${(props) => props.theme.colors.common.grey};
    font-size: 24px;
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    font-size: 13px;
    padding: 8px 0;
    margin: 40px 0;
  }
`;

export const InputContainer = ({ placeholder, type }) => {
  return <Input placeholder={placeholder} type={type} />;
};
