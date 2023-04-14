import React from 'react';
import './Styles.css';

interface CardProps {
    id: number,
    title: string,
    description: string,
    imageUrl: string,
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl}) => {
  return (
    <a href={'test'} target="_blank" rel="noopener noreferrer" className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-details">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Card;
