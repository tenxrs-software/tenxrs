import styled from "styled-components";

export const TitleSpan = styled.span`
font-weight: ${props => props.$isMain? props.theme.font.weight.title : props.theme.font.weight.subTiltle};
font-style: ${props => props.$isMain? props.theme.font.style.title : props.theme.font.style.subTiltle};
color: ${props => props.$isMain? props.theme.colors.text.spans.white : props.theme.colors.text.spans.yellow};
`