import React from "react";
import { selectTagProps } from "../../Main/types";
import { useResponsive } from "../../Main/customHooks/useResponsive";
import { CardsArea, CardsContainersDiv } from "../../Main/styles/styleComponents";
import CardsContainer2 from "./CardsContainer";

const CardsContainers = (props: selectTagProps) => {
  const selectedTag = props.selectedTag;
  const responsiveVar = useResponsive();

  return (
    <CardsContainersDiv>
      {selectedTag.map((tag) => (
        <div key={tag}>
          <CardsArea key={tag} responsiveVar={responsiveVar}>
            <CardsContainer2 tag={tag} isMain={props.isMain} />
          </CardsArea>
        </div>
      ))}
    </CardsContainersDiv>
  );
};

export default CardsContainers;
