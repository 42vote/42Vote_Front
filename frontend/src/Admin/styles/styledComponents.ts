import styled from "styled-components";
import { responsiveVariable } from "../../Main/types";

export const AdminContainer = styled.div`
  margin-top: 4%;
  height: 100vh;
  display: grid;
  grid-template-columns: 12.6rem 1.618fr;
`;

export const AdminCategoryListContainer = styled.div`
  overflow: hidden;
  grid-column: 1;
  // border: 1px solid black;
`;

export const SelectedCategoryInfoContainer = styled.div`
  grid-column: 2;
  margin-left: 1.5rem;
  // border: 1px solid black;
`;

export const StatisticsContainer = styled.div`
  display: grid;
  height: 90%;
  grid-template-rows: 3rem 1.6fr;
`;

export const SelectedCategorys = styled.div<{ responsiveVar: responsiveVariable }>`
  grid-column: 2;
  display: ${(props) => (props.responsiveVar.isDesktop ? "flex" : "grid")};
  flex-wrap: wrap;
  align-content:center;
  ${(props) => (props.responsiveVar.isDesktop ? "" : "grid-template-rows: 1fr auto;")}
  justify-items: center;
  margin-left: 1rem;
  margin-top: 0.5rem;
`;

export const StatisticsDocListContainer = styled.div`
  grid-row: 2;
  max-height: 75%;
  overflow-y: auth;
  scroll-begavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const StatisticsCardsContainer = styled.div`
  grid-row: 2;
  grid-column: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
`

export const StatisticsOptionContainer = styled.div<{responsiveVar:responsiveVariable}>`
  grid-row: 1;
  display: grid;
  grid-template-rows: 0.5fr ${(props) =>
      props.responsiveVar.isDesktop ? "auto" : "80vh"};
  grid-template-columns: 1fr ${(props) =>
      props.responsiveVar.isFiveCards
        ? "61.375rem"
        : props.responsiveVar.isFourCards
        ? "49.5rem"
        : props.responsiveVar.isThreeCards
        ? "37.625rem"
        : props.responsiveVar.isTwoCards
        ? "25.75rem"
        : "65%"} 1fr;
`;

export const StatisticsCardsArea = styled.div<{ responsiveVar: responsiveVariable }>`
  display: grid;
  grid-template-rows: 0.5fr ${(props) =>
      props.responsiveVar.isDesktop ? "auto" : "80vh"};
  grid-template-columns: 1fr ${(props) =>
      props.responsiveVar.isFiveCards
        ? "61.375rem"
        : props.responsiveVar.isFourCards
        ? "49.5rem"
        : props.responsiveVar.isThreeCards
        ? "37.625rem"
        : props.responsiveVar.isTwoCards
        ? "25.75rem"
        : "65%"} 1fr;
  overflow-y: auto;
  scrollbar-width: none;
`;