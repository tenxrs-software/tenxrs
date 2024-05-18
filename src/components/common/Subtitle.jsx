import styled from "styled-components";

export const Subtitle = styled.h1`
    color : ${props => props.theme.colors.text.white};
    font-weight : ${props => props.theme.font.weight.fourHundred};
    font-size : ${props => props.theme.font.sizes.subTitle};
    font-style : ${props => props.theme.font.style.subTitle};
    margin : 0 0 40px ;
    max-width : ${props => props.$mx_width ? props.$mx_width : props.theme.subtitles.width.mx};

    
    @media only screen and (max-width : 1024px) and (min-width : 768px ){
        padding : ${props => props.$pad24 && props.theme.spacing.padding.p24}
    }
    @media only screen and (min-width : 500px) and (max-width: 768px){
        margin-bottom: ${props => props.$mb ? props.$mb : props.theme.spacing.margin.m34};
         width : ${props => props.$width}    
    }

    @media only screen and (max-width : 500px) and (min-width : 375px ){
        font-size : ${props => props.theme.font.sizes.button};
        margin-left : ${props => props.$marginLeft};
        margin-bottom : 24px;
        max-width : 321px;

    }
`