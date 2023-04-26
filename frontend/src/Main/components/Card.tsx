import React from "react";
import { useNavigate } from "react-router-dom";

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  const navi = useNavigate();
 
  const handleCardClick = () => {
    navi("/detail");
  };

  return (
    <div onClick={handleCardClick} className="card">
      <div className="product-card">
        <img className="product-card__image" src={"https://via.placeholder.com/200x200"} alt={title} />
        <h2 className="product-card__title">{title}</h2>
        <div className="product-progress">
          <div className="product-progress-bar" style={{ width: "50%" }} />
        </div>
      </div>
    </div>
  );
};

export default Card;
