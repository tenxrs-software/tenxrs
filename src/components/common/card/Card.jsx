import styled from "styled-components";

const Card = ({ icon, title, serviceImg }) => {
  return (
    <>
      <img src={icon} alt="" />
      <p style={{ color: "white" }}>{title}</p>
      <img width="100%" src={serviceImg} alt="" />
    </>
  );
};

export default Card;
