import styled from "styled-components";

const Input = styled.input`
padding: 16px 0;
background: black;
border: 1px solid black;
outline: none;
margin: 44px 10px;
border-bottom: 1.5px solid ${props => props.theme.colors.common.grey};
color: ${props => props.theme.colors.text.spans.yellow};
font-size: 24px;

&::placeholder{
    color: ${props => props.theme.colors.common.grey};
    font-size: 24px;
}
`


export const InputContainer = ({placeholder, type}) => {
    return <Input placeholder={placeholder} type={type} />
}