import React from "react";
import CardsContainer from "./CardsContainer";
import { selectTagProps } from "../../types";
import { useResponsive } from "../../customHooks/useResponsive";
import { CardsArea, CardsContainersDiv } from "../../styles/styleComponents";
import MyPageCards from "../../../Mypage/components/myPageCardsContainer";

const CardsContainers = (props: selectTagProps) => {
  const selectedTag = props.selectedTag;
  const responsiveVar = useResponsive();

  return (
    <CardsContainersDiv>
      {selectedTag.map((tag) => (
        <div key={tag}>
          <CardsArea key={tag} responsiveVar={responsiveVar}>
            {props.isMain ? (
              <CardsContainer tag={tag} isMain={props.isMain} />
            ) : (
              <MyPageCards tag={tag} isMain={props.isMain} />
            )}
          </CardsArea>
        </div>
      ))}
    </CardsContainersDiv>
  );
};

export default CardsContainers;
