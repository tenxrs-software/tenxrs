import styled from "styled-components";

const Card = ({ icon, title, serviceImg, bg }) => {
  return (
    <div>
      <img src={icon} alt="" />
      <p style={{ color: "white" }}>{title}</p>
      <img width="100%" src={serviceImg} alt="" />
    </div>
  );
};

export default Card;
