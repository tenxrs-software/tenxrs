import styled from "styled-components";

export const Center = styled.div`
max-width: 1440px;
width: 100%;
display: flex;
flex-direction: column;
margin: 0 auto;
background: black;
text-align: ${props => props.$text? 'center' : 'left'};
padding-bottom: ${props => props.$end ? '80px' : 0};
`

export const CardContainer = styled.div`
width: 398px;
margin-bottom: 150px;
`

export const IconContainer = styled.div`
width: 80px;
margin-bottom: 150px;
`