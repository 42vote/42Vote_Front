import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8rem;
  height: 9.375rem;
  margin: 1rem;
  padding: 1rem;
`;

const ProductCard = styled.div`
  margin: 0.625rem;
  padding: 1.25rem;
  border-radius: 0.625rem;
  height: 10.7rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-shadow: 0px 0px 0.625rem rgba(0, 0, 0, 0.2);
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 0.625rem rgba(0, 0, 0, 0.3);
  }

  &:hover .product-card__image {
    opacity: 0.7;
  }
`;

const ProductImage = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  object-fit: contain;
  border-radius: 0.3125rem;
  background-color: #ddd;
  animation: skeleton-pulse 1s infinite;

  @keyframes skeleton-pulse {
    0% {
      opacity: 1;
    }
    25% {
        opcity: 0.25;
    }
    50% {
      opacity: 0.5;
    }
    75% {
        opcity: 0.75;
    }
    100% {
      opacity: 1;
    }
  }

`;

const ProductTitle = styled.h2`
  margin-top: 0.3125rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333333;
  transition: color 0.5s ease-in-out;
  white-space: nowrap;
  max-width: 7.5rem;
  margin-bottom: 0.3125rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductProgress = styled.div`
  height: 0.5625rem;
  background-color: #fff;
  border-radius: 0.625rem;
  border: none;
  margin-top: 0.1875rem;
`;

const ProgressBar = styled.div`
  height: 100%;
  background-color: #ddd;
  border: none;
  animation: skeleton-pulse 1s infinite;

  @keyframes skeleton-pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

const SkeletonCards = () => {

  return (
    <CardWrapper>
      <ProductCard>
        <ProductImage />
        <ProductTitle>{"ㅤㅤㅤㅤ"}</ProductTitle>
        <ProductProgress>
          <ProgressBar style={{ width: "100%" }} />
        </ProductProgress>
      </ProductCard>
    </CardWrapper>
  );
};


export default SkeletonCards;