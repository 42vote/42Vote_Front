import { useColor } from "color-thief-react";
import { useNavigate } from "react-router-dom";
import { getTextColorByBackgroundColor } from "../Lib/getColors";
import { ImgContainer, Cards, ProductCard, ProductCardTitle } from "../Main/styles/styleComponents";

const Test = () => {
  const imgSrc =
    "https://live.staticflickr.com/65535/50237066832_72c7290c5c_c.jpg";
  const color = useColor(imgSrc, "hex", { crossOrigin: "anonymous" });
  const navi = useNavigate();
  const handleCardClick = () => {
    navi("");
  };
  return (
    <>
      {color.loading ? <>Loading</> : <>{color.data}</>}
      <>
        <Cards
          mainColor={color.data ? color.data : "#d9d9d9"}
          onClick={handleCardClick}
        >
          <ProductCard mainColor={color.data ? color.data : "#d9d9d9"}>
            <ImgContainer
              imgURL={imgSrc}
              mainColor={color.data ? color.data : "#d9d9d9"}
            >
              <img className="product-card__image" src={imgSrc} alt={"img"} />
            </ImgContainer>
            <ProductCardTitle
              textColor={getTextColorByBackgroundColor(
                color.data ? color.data : "#d9d9d9"
              )}
            >
              test
            </ProductCardTitle>
            <div className="product-progress">
              <div className="product-progress-bar" style={{ width: "50%" }} />
            </div>
          </ProductCard>
        </Cards>
      </>
    </>
  );
};

export default Test;
