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
  // max-height: 314px;
  margin-bottom: 150px;
  background: ${(props) => props.$CardBg};
  padding: 24px 24px 0 24px;
  border-radius: 20px;

  @media screen and (max-width: 768px) {
    /* Adjust width for smaller devices */
    font-size: 13px;
  }
`;
export const Padding_24 = styled.div`
  padding: 0 24px;
`;
export const IconContainer = styled.div`
  width: 50px;
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
  margin: ${(props) => (props.$marginTop ? props.$marginTop : "100px 0")};
  justify-content: ${(props) =>
    props.$contentType ? props.$contentType : "center"};
  @media screen and (max-width: 425px) {
    flex-direction: column-reverse;
    max-width: 100%;
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

export const BudgetFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
