import React from "react";
import { useNavigate } from "react-router-dom";
import { CardProps } from "../../types";
import styled from "styled-components";

const ImgContainer = styled.div<{ imgURL: string }>`
  background-image: url(${(prop) => prop.imgURL});
  background-color: #d9d9d9;
  background-size: fit;
  backdrop-filter: blur(30px);
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  height: 7.5rem;
`;

const Card: React.FC<CardProps> = ({
  id,
  title,
  goal,
  image,
  voteCnt,
  isVoteExpired,
}) => {
  const ret = Number(voteCnt) * (100 / Number(goal));
  const navi = useNavigate();
  const handleCardClick = () => {
    navi("/detail/" + id);
  };

  return (
    <div onClick={handleCardClick} className="card">
      <div className="product-card">
        <ImgContainer imgURL={image}>
          <img className="product-card__image" src={image} alt={title} />
        </ImgContainer>
        <h2 className="product-card__title">{title}</h2>
        <div className="product-progress">
          <div className="product-progress-bar" style={{ width: ret + "%" }} />
        </div>
      </div>
    </div>
  );
};

export default Card;
