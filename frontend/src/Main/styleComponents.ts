import styled from "styled-components";
import { responsiveVariable } from "./types";

export const CardsArea = styled.div<{ responsiveVar: responsiveVariable }>`
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

export const TagHeader = styled.h1<{ responsiveVar: responsiveVariable }>`
  grid-row: 1;
  grid-column: 2;
  justify-self: ${(prop) => prop.responsiveVar.isDesktop ? "start" : "center"};
  margin-left: ${(prop) => prop.responsiveVar.isDesktop ? "20px" : "0px"};
  margin-top: 10px;
  margin-bottom: 10px;
`;


export const TagConatiner = styled.div<{ responsiveVar: responsiveVariable }>`
  display: grid;
  grid-template-columns: 1fr ${(prop) =>
      prop.responsiveVar.isFiveCards
        ? "1110px"
        : prop.responsiveVar.isFourCards
        ? "888px"
        : prop.responsiveVar.isThreeCards
        ? "666px"
        : "356px"} 1fr;
`;