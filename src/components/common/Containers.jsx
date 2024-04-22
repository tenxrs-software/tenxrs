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
  width: 100%;
  max-width: 398px;
  margin-bottom: 150px;

  @media screen and (max-width: 768px) {
    /* Adjust width for smaller devices */
    max-width: 90%;
  }
`;
export const Padding = styled.div`
  padding: 0 24px;
`;
export const IconContainer = styled.div`
  width: 80px;
  margin-bottom: 150px;

  @media screen and (max-width: 1024px) {
    /* Adjust width for smaller devices */
    max-width: 80%;
  }
`;

export const PillsContainer = styled.div`
  display: flex;
  gap: ${(props) => (props.$gap ? props.$gap : "10px")};
  margin-top: ${(props) => (props.$marginTop ? props.$marginTop : 0)};
  margin-bottom: ${(props) => (props.$minMargin ? props.$minMargin : 0)};

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FlexRow = styled.div`
  display: flex;
  gap: ${(props) => (props.$gap ? props.$gap : "auto")};
  margin: 100px 0;

  @media screen and (max-width: 768px) {
    max-width: 90%;
  }
`;

export const SpectrumDiv = styled.img`
  max-width: 360px;
  max-height: 360px;

  @media screen and (max-width: 768px) {
    width: 228px;
    height: 228px;
  }
`;

export const FlexRowContainer = ({ children }) => {
  return (
    <FlexRow $gap="100px">
      <div>{children[0]}</div>
      <div>
        {children[1]}
        {children[2]}
      </div>
    </FlexRow>
  );
};
