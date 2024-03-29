import styled from "styled-components";
import { responsiveVariable } from "../../Main/types";

export const AdminContainer = styled.div`
  padding-top: calc(clamp(30px, 3%, 50px) + 20px);
  min-height: 100vh;
  display: grid;
  box-sizing: border-box;
  grid-template-columns: 12.6rem 1.618fr;
`;

export const AdminCategoryListContainer = styled.div`
  padding-top: calc(clamp(30px, 3%, 50px) + 20px);
  overflow: hidden;
  grid-column: 1;
  display: grid;
  grid-template-rows: 1.618fr 1fr;
  // border: 1px solid black;
`;

export const ActiveCategoryListContainer = styled.div`
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 50vh;
`;

export const ActiveCategoryListDiv = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;
  scroll-begavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  height 50vh;
`;

export const ExpiredCategoryListContainer = styled.div`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 33vh;
`;

export const ExpiredCategoryListDiv = styled.div`
  overflow-y: scroll;
  scrollbar-width: none;
  scroll-begavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const SelectedCategoryInfoContainer = styled.div`
  grid-column: 2;
  margin-left: 1.5rem;
  margin-top: 1.5rem;
  // border: 1px solid black;
`;

export const StatisticsContainer = styled.div`
  display: grid;
  height: 90%;
  grid-template-rows: 3rem 1.6fr 3rem;
`;

export const SelectedCategorys = styled.div<{
  responsiveVar: responsiveVariable;
}>`
  grid-column: 2;
  display: ${(props) => (props.responsiveVar.isDesktop ? "flex" : "grid")};
  flex-wrap: wrap;
  align-content: center;
  ${(props) =>
    props.responsiveVar.isDesktop ? "" : "grid-template-rows: 1fr auto;"}
  justify-items: center;
  margin-left: 1rem;
  margin-top: 0.5rem;
`;

export const StatisticsDocListContainer = styled.div`
  grid-row: 2;
  max-height: 76vh;
  overflow-y: auto;
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
  margin-top: 0.75rem;
  margin-left: 1rem;
  padding-bottom: 1rem;
  grid-row: 2;
  grid-column: 2;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-items: center;
  overflow-y: auto;
  max-height: 80vh;
  scrollbar-width: none;
  scroll-begavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const StatisticsOptionContainer = styled.div<{
  responsiveVar: responsiveVariable;
}>`
  grid-row: 1;
  display: grid;
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

export const StatisticsCardsArea = styled.div<{
  responsiveVar: responsiveVariable;
}>`
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

export const StatisticsTagHeader = styled.h1<{
  responsiveVar: responsiveVariable;
}>`
  font-family: "Lora-Bold";
  grid-row: 1;
  grid-column: 2;
  justify-self: ${(prop) =>
    prop.responsiveVar.isDesktop ? "start" : "center"};
  margin-left: 2.27rem;
  margin-top: 0.6rem;
  margin-bottom: 0.625rem;
`;

//toggle

export const SwitchLayOut = styled.div<{ responsiveVar: responsiveVariable }>`
  display: grid;
  justify-items: end;
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
  height: 1.6rem;
  width: 100%;
  flex-direction: row-reverse;
`;

export const SwitchContainer = styled.div`
  grid-column: 2;
  position: relative;
  display: inline-block;
  margin-right: 2rem;
  width: 3.3333rem; /* Converted from 50px */
  height: 1.6rem; /* Converted from 24px */
`;

export const Slider = styled.span<{ isOn: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => (props.isOn ? "#000" : "#ddd")};
  transition: 0.4s;
  border-radius: 2.2667rem; /* Converted from 34px */
`;

export const SliderRound = styled.span<{ isOn: boolean }>`
  position: absolute;
  content: "";
  height: 1.0667rem; /* Converted from 16px */
  width: 1.0667rem; /* Converted from 16px */
  left: 0.2667rem; /* Converted from 4px */
  bottom: 0.2667rem; /* Converted from 4px */
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
  transform: translateX(
    ${(props) => (props.isOn ? "1.7333rem" : "0")}
  ); /* Converted from 26px */
`;

export const ListHeader = styled.div`
  font-family: "Lora-Bold", "kbiz-Bold";
  font-size: max(15px, 1.9vw);
  margin-left: 1.6rem;
`;

export const AdminButton = styled.button<{ isPatching: boolean }>`
  font-family: "kbiz-Medium";
  font-size: max(15px, 1.1vw);
  height: 3rem;
  background-color: ${(props) => (props.isPatching ? "#383838" : "white")};
  color: ${(props) => (props.isPatching ? "white" : "black")};
  border-radius: 20px;
  border: 1px solid #383838;
  padding: 6px 15px;
  margin: 20px 0;
  ${(props) =>
    props.isPatching ? "" : "&:hover { background-color: #e5e5e5;}"}
  &:active {
    background-color: #383838;
    color: white;
  }
`;

export const ExportButton = styled.button<{ isPatching: boolean }>`
  grid-column: 2;
  font-family: "kbiz-Medium";
  font-size: max(15px, 1.1vw);
  height: 3rem;
  background-color: ${(props) => (props.isPatching ? "#383838" : "white")};
  color: ${(props) => (props.isPatching ? "white" : "black")};
  border-radius: 20px;
  border: 1px solid #383838;
  padding: 6px 15px;
  margin: 20px 0;
  ${(props) =>
    props.isPatching ? "" : "&:hover { background-color: #e5e5e5;}"}
  &:active {
    background-color: #383838;
    color: white;
  }
`;

export const ReorderContainer = styled.div`
  display: flex;
  margin-top: 1.6rem;
  flex-direction: column;
  align-items: center;
`;

export const ExportContainer = styled.div<{
  responsiveVar: responsiveVariable;
}>`
  gird-row: 3;
  height: 3rem;
  display: grid;
  justify-items: center;
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
  height: 1.6rem;
  width: 100%;
  flex-direction: row-reverse;
`;
