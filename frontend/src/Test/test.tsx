import { useColor } from "color-thief-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function getTextColorByBackgroundColor(hexColor: string) {
  const c = hexColor.substring(1); // 색상 앞의 # 제거
  const rgb = parseInt(c, 16); // rrggbb를 10진수로 변환
  const r = (rgb >> 16) & 0xff; // red 추출
  const g = (rgb >> 8) & 0xff; // green 추출
  const b = (rgb >> 0) & 0xff; // blue 추출
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  // 색상 선택
  return luma < 127.5 ? "white" : "black"; // 글자색이
}

const ImgContainer = styled.div<{ imgURL: string; mainColor: string }>`
  background-image: url(${(prop) => prop.imgURL});
  background-color: ${(prop) => prop.mainColor};
  background-size: cover;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  height: 7.5rem;
`;

const Cards = styled.div<{ mainColor: string }>`
  background-color: ${(prop) => prop.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 9.375rem;
  margin: 1rem;
  padding: 1rem;
`;

const ProductCard = styled.div<{ mainColor: string }>`
  background-color: ${(prop) => prop.mainColor};
  margin: 0.625rem;
  padding: 1.25rem;
  border-radius: 0.625rem;
  height: 11.25rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-shadow: 3px 3px 0.625rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const ProductCardTitle = styled.h2<{ textColor: string }>`
  margin-top: 0.3125rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(prop) => prop.textColor};
  transition: color 0.5s ease-in-out;
  white-space: nowrap;
  max-width: 7.5rem;
  margin-bottom: 0.3125rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

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
