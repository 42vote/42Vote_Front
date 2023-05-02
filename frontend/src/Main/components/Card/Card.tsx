import React from "react";
import { useNavigate } from "react-router-dom";
import { CardProps } from "../../types";


const Card: React.FC<CardProps> = ({ id, title, goal, voteCnt, isVoteExpired }) => {
  const ret = Number(voteCnt) * (100 / Number(goal));
  const navi = useNavigate();
  const handleCardClick = () => {
    navi("/detail/" + id);
  };

  return (
    <div onClick={handleCardClick} className="card">
      <div className="product-card">
        <img className="product-card__image" src={"https://via.placeholder.com/200x200"} alt={title} />
        <h2 className="product-card__title">{title}</h2>
        <div className="product-progress">
          <div className="product-progress-bar" style={{ width: ret + "%" }} />
        </div>
      </div>
    </div>
  );
};

export default Card;
