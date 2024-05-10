import styled from "styled-components";

export const P = styled.p`
  color: ${(props) =>
    props.$Textcolor ? props.theme.colors.text.white : props.$Textcolor};
`;

const Card = ({ icon, title, serviceImg, bg }) => {
  return (
    <div>  
      <img src={icon} alt="icon" />
      <P $Textcolor='true'> {title}</P>
      <img width="100%" src={serviceImg} alt="service image" />
    </div>
  );
};

export default Card;
