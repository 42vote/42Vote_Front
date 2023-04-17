import React from "react";
import "./Styles.css";

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <a href={"test"} target="_blank" rel="noopener noreferrer" className="card">
      <div className="product-card">
        <img
          className="product-card__image"
          src={imageUrl}
          alt={title}
        />
        <h2 className="product-card__title">{title}</h2>
        <div className="product-progress">
          <div
            className="product-progress-bar"
            style={{ width: "50%" }}
          />
        </div>
      </div>
    </a>
  );
};

export default Card;
