import React from "react";
import Cards from "./Cards";
import { selectTagProps } from "../types";
import { useResponsive } from "../customHooks/useResponsive";
import { CardsArea, TagHeader } from "../styleComponents";

const TagCardContainers = (props: selectTagProps) => {
  const selectedTag = props.selectedTag;
  const responsiveVar = useResponsive();

  return (
    <>
      {selectedTag.map((tag) => (
        <div key={tag}>
          <CardsArea key={tag} responsiveVar={responsiveVar}>
            <TagHeader responsiveVar={responsiveVar}>#{tag}</TagHeader>
            <Cards tag={tag} />
          </CardsArea>
        </div>
      ))}
    </>
  );
};

export default TagCardContainers;
