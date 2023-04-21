import React from "react";
import Cards from "./Cards";
import styled from "styled-components";
import { responsiveVariable, selectTagProps } from "../types";
import { useResponsive } from "../customHooks/useResponsive";

const CardsArea = styled.div<{ responsiveVar: responsiveVariable }>`
  margin: 20px;
  display: grid;
  grid-template-rows: 0.5fr auto;
  grid-template-columns: 1fr ${(prop) =>
    prop.responsiveVar.isFiveCards
      ? "1110px"
      : prop.responsiveVar.isFourCards
      ? "888px"
      : prop.responsiveVar.isThreeCards
      ? "666px"
      : "356px"} 1fr;
`;

const TagCardContainers = (props: selectTagProps) => {
  const selectedTag = props.selectedTag;
  const responsiveVar = useResponsive();

  return (
    <>
      {selectedTag.map((tag) => (
        <div key={tag}>
          <CardsArea
            key={tag}
            responsiveVar={responsiveVar}
          >
            <h1 className="tagHeader">#{tag}</h1>
            <Cards tag={tag} />
          </CardsArea>
        </div>
      ))}
    </>
  );
};

export default TagCardContainers;
