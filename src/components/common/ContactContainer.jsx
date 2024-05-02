import styled from "styled-components";

export const ContactContainer = styled.div`
  align-items: ${(props) => props.$alignCenter};
  display: grid;
  grid-template-columns: repeat(3, max-content);
  text-align: center;
  gap: 0 24px;

  @media screen and (max-width: 425px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
