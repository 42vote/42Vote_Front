import React from "react";
import { useNavigate } from "react-router-dom";
import { CardProps } from "../../Main/types";
import {
  Cards,
  ProductCard,
  ImgContainer,
  ProductCardTitle,
} from "../../Main/styles/styleComponents";
import { getTextColorByBackgroundColor } from "../../Lib/getColors";

const Card: React.FC<CardProps> = ({
  id,
  title,
  goal,
  image,
  voteCnt,
  isVoteExpired,
}) => {
  // const color = useColor(image, "hex", { crossOrigin: "Anonymous" });
  let mainColor = "#ffffff";
  // if (color.data) mainColor = color.data;
  let ret = Number(voteCnt) * (100 / Number(goal));
  if (ret > 100)
    ret = 100;
  const navi = useNavigate();
  const handleCardClick = () => {
    navi("/detail/" + id);
  };

  return (
    <Cards mainColor={mainColor} onClick={handleCardClick}>
      <ProductCard mainColor={mainColor}>
        <ImgContainer imgURL={image} mainColor={mainColor}>
          <img className="product-card__image" src={image} alt={title} />
        </ImgContainer>
        <ProductCardTitle textColor={getTextColorByBackgroundColor(mainColor)}>
          {title}
        </ProductCardTitle>
        <div className="product-progress">
          <div className="product-progress-bar" style={{ width: ret + "%" }} />
        </div>
      </ProductCard>
    </Cards>
  );
};

export default Card;
