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
  max-width: 398px;
  margin-bottom: 150px;
  background: ${(props) => props.$CardBg};
  padding: 24px 24px 0 24px;
  border-radius: 20px;

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

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    margin-bottom: 95px;
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
  margin-bottom: 150px;

  @media screen and (max-width: 1024px) {
    /* Adjust width for smaller devices */
    max-width: 80%;
  }

  @media only screen and (min-width: 500px) and (max-width: 768px) {
    margin-bottom: 0;
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    margin-bottom: 0px;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const PillsContainer = styled.div`
  display: flex;
  gap: ${(props) => (props.$gap ? props.$gap : "10px")};
  margin-top: ${(props) => (props.$marginTop ? props.$marginTop : "24px")};
  margin-bottom: ${(props) => (props.$minMargin ? props.$minMargin : 0)};
  max-width: ${(props) => props.$widthSize};
  flex-wrap: wrap;

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: ${(props) => props.$1024width};
    margin: ${(props) => props.$1024margin};
  }

  @media only screen and (min-width: 500px) and (max-width: 768px) {
    margin: ${(props) => props.$768margin};
    width: ${(props) => props.$768width};
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    width: ${(props) => props.$425width};
    padding: ${(props) => props.$425padding};
  }
`;

export const FlexRow = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${(props) => props.$gap};
  margin: ${(props) => (props.$marginTop ? props.$marginTop : "100px 0")};
  justify-content: ${(props) =>
    props.$contentType ? props.$contentType : "center"};

  @media only screen and (min-width: 500px) and (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 50px;
    margin: 50px 0;
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    width: 349px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    gap: 0;
    text-align: center;
  }

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    gap: 86px;
    margin: 134px 0 0;
  }
`;

export const SpectrumDiv = styled.img`
  max-width: 360px;

  @media only screen and (min-width: 500px) and (max-width: 768px) {
    width: ${(props) => props.$768width};
  }

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    width: 65%;
    margin: 40px 0 0 0;
  }

  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    max-width: 306px;
  }
`;
export const LandingContent = styled.div`
  position: relative;
  margin: 100px 0px 0px;

  @media only screen and (min-width: 500px) and (max-width: 768px) {
    margin-top: 57px;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    margin-top: 89px;
  }
  @media only screen and (max-width: 500px) and (min-width: 375px) {
    margin-top: 40px;
  }
`;
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
