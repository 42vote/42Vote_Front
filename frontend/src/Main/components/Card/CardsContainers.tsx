import React from "react";
import CardsContainer from "./CardsContainer";
import { selectTagProps } from "../../types";
import { useResponsive } from "../../customHooks/useResponsive";
import { CardsArea } from "../../styles/styleComponents";

const CardsContainers = (props: selectTagProps) => {
  const selectedTag = props.selectedTag;
  const responsiveVar = useResponsive();

  return (
    <>
      {selectedTag.map((tag) => (
        <div key={tag}>
          <CardsArea key={tag} responsiveVar={responsiveVar}>
            <CardsContainer tag={tag} />
          </CardsArea>
        </div>
      ))}
    </>
  );
};

export default CardsContainers;
