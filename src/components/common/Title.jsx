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
  max-width:${props =>  props.theme.font.width.textwidth};
  text-transform: capitalize;  
  margin: ${(props) => (props.marTop ? props.marTop : "0 0 8px")};

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    margin: ${(props) => props.$1024margin};
    width: ${props => props.theme.landingTitle.width.size1024};
    font-size: ${props => props.theme.landingTitle.font.size1024};
  }

  // @media screen and (min-width: 1024px) {
  //   font-size: 32px;
  // }
  @media screen and (max-width: 786px) {
    font-size: ${(props) => props.theme.landingTitle.font.size768};
    max-width: 525px ;
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    font-size : ${props =>  props.theme.landingTitle.font.size425};
    max-width :  ${props =>  props.theme.landingTitle.width.size425}

  }

`;
