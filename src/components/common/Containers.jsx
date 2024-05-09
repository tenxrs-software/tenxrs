import styled from "styled-components";

export const Center = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: black;
  text-align: ${(props) => (props.$text ? "center" : "left")};
  padding-bottom: ${(props) => (props.$end ? "80px" : 0)};
`;

export const CardContainer = styled.div`
  width: 398px;
  margin-bottom: 100px;
  background: ${(props) => props.$CardBg};
  padding: 24px 24px 0 24px;
  border-radius: 20px;


  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    margin-bottom: 95px;
  }

  @media only screen and (min-width: 500px) and (max-width: 768px) {
    /* Adjust width for smaller devices */
    font-size: 13px;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    max-width: 322px;
    font-size: 13px;
    border-radius: 16px;
    margin-bottom: 40px;
  }

`;
export const Padding_64 = styled.div`
  padding: 0 64px;

  @media only screen and (min-width: 500px) and (max-width: 768px) {
    padding: 0 24px;
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    padding: 0 16px;
  }
`;
export const IconContainer = styled.div`
  max-width: 50px;
  margin-bottom: 100px;

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    margin-bottom: 71px;
  }
  @media only screen and (min-width: 500px) and (max-width: 768px) {
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    margin-bottom: 0px;
  }
`;

export const PillsContainer = styled.div`
  display: flex;
  gap: ${(props) => (props.$gap ? props.$gap : "10px")};
  margin-bottom: ${(props) => (props.$minMargin ? props.$minMargin : 0)};
  max-width: ${(props) => props.$widthSize};
  flex-wrap: wrap;
  
  @media only screen and (max-width: 1440px) and (min-width: 1024px){
    width : ${props => props.$Textwidth && '607px' }
    
  }

  @media only screen and (min-width: 500px) and (max-width: 768px) {
    width: ${props => props.$Textwidth && '320px'};
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    width : 100%;
    margin-bottom :40px;
  }
`;

export const FlexRow = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  gap: ${(props) => props.$gap};
  margin: ${(props) => (props.$marginTop ? props.$marginTop : '0 0 100px')};
  justify-content: ${(props) =>
    props.$contentType ? props.$contentType : "center"};

    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      gap: 76px;
      
    } 

  @media only screen and (min-width: 500px) and (max-width: 768px) {
    width: 36.927083333333336vw;
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100% ;
    gap: 0

  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content : center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
    gap: 0;
    text-align: center;
  }

`;

export const SpectrumDiv = styled.img`
  max-width: 340px;

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    max-width: 306px;
  }
  @media only screen and (min-width: 500px) and (max-width: 768px) {
    max-width: 29.8vw;
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    width: 65%;
  }

`;
export const LandingContent = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
width: 100%;
display : flex;
justify-content : center;
flex-direction : column;

@media only screen and (min-width : 1024px ) and (max-width : 1440px){
  width : 100%;
  align-items: center;

}
  @media only screen and (min-width : 500px ) and (max-width : 768px){
    width : 424px;

  }

  @media only screen and (min-width : 375px) and (max-width: 500px){
    justify-content :center;
    text-align : center
  }
`
export const FlexRowContainer = ({ children }) => {
  return (
    <FlexRow $gap="115px">
      <div>{children[0]}</div>
      <div>
        {children[1]}
        {children[2]}
      </div>
    </FlexRow>
  );
};
