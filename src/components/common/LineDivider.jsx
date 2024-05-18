import styled from "styled-components";

export const Line = styled.div`
background: ${props => props.theme.colors.common.grey};
height: 1.5px;
margin-bottom : 100px;

@media only screen and (min-width : 375px) and (max-width : 500px){
    margin-bottom : 40px;
}

@media only screen and (min-width : 500px) and (max-width : 768px){
    margin-bottom : 71px;
}

`;