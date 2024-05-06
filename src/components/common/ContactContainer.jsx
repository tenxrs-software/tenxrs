import styled from "styled-components";

export const ContactContainer = styled.div`
  align-items: ${(props) => props.$alignCenter};
  display: grid;
  grid-template-columns: repeat(3, max-content);
  text-align: center;
  gap: 0 24px;

  @media only screen and (max-width: 500px) and (min-width: 375px) {
    display: flex;
    flex-wrap: wrap;
  }
  @media only screen and (min-width: 500px) and (max-width: 768px) {
    width: 420px;
    flex-wrap: wrap;
    display: flex;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    display: flex;
    width: 100%;
  }
`;
