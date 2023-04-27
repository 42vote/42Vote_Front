import React from "react";
import Cards from "./Cards";
import { selectTagProps } from "../types";
import { useResponsive } from "../customHooks/useResponsive";
import { CardsArea } from "../styles/styleComponents";

const TagCardContainers = (props: selectTagProps) => {
  const selectedTag = props.selectedTag;
  const responsiveVar = useResponsive();

  return (
    <>
      {selectedTag.map((tag) => (
        <div key={tag}>
          <CardsArea key={tag} responsiveVar={responsiveVar}>
            <Cards tag={tag} />
          </CardsArea>
        </div>
      ))}
    </>
  );
};

export default TagCardContainers;
