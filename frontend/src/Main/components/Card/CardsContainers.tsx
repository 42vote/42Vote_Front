import React from "react";
import { selectTagProps } from "../../types";
import { useResponsive } from "../../customHooks/useResponsive";
import { CardsArea, CardsContainersDiv } from "../../styles/styleComponents";
import CardsContainer2 from "../../../CardsComponents/CardsContainer";

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
