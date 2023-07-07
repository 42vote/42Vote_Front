import styled from "styled-components";
import { responsiveVariable } from "../types";

//common

export const AbsolutedDiv = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`;

//Cards

export const TagHeader = styled.h1<{ responsiveVar: responsiveVariable }>`
  font-family: 'NanumGothic-Bold';
  grid-row: 1;
  grid-column: 2;
  justify-self: ${(prop) =>
    prop.responsiveVar.isDesktop ? "start" : "center"};
  margin-left: ${(prop) => (prop.responsiveVar.isDesktop ? "1.25rem" : "0px")};
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
`;

export const CardsContainersDiv = styled.div`
  scroll-behavior: smooth; /* Optional: Add smooth scrolling behavior */
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const CardsArea = styled.div<{responsiveVar: responsiveVariable }>`
  display: grid;
  grid-template-rows: 0.5fr ${(props) =>
      props.responsiveVar.isDesktop ? "auto" : "80vh"};
  grid-template-columns: 1fr ${(props) =>
      props.responsiveVar.isFiveCards
        ? "59.375rem"
        : props.responsiveVar.isFourCards
        ? "47.5rem"
        : props.responsiveVar.isThreeCards
        ? "35.625rem"
        : props.responsiveVar.isTwoCards
        ? "23.75rem"
        : "65%"} 1fr;
  overflow-y: auto;
  scrollbar-width: none;
`;

export const CardsList = styled.div<{ responsiveVar: responsiveVariable }>`
  grid-row: 2;
  grid-column: 2;
  display: flex;
  flex-direction: ${(prop) =>
    prop.responsiveVar.isDesktop ? "row" : "column"};
  flex-wrap: nowrap;
  align-items: ${(prop) =>
    prop.responsiveVar.isDesktop ? "center" : "center"};
  justify-items: center;
  -ms-overflow-style: none; /* IE, Edge */
  overflow-x: auto;
  scrollbar-width: none;
  height: ${(prop) => (prop.responsiveVar.isDesktop ? "14.8125rem" : "auto")};
  -webkit-overflow-scrolling: touch; /* Optional: Enable momentum scrolling in iOS */
  scroll-behavior: smooth; /* Optional: Add smooth scrolling behavior */
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImgContainer = styled.div<{ imgURL: string; mainColor: string }>`
  background-image: url(${(prop) => prop.imgURL});
  background-color: ${(prop) => prop.mainColor};
  background-size: cover;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  height: 7.5rem;
`;

export const Cards = styled.div<{ mainColor: string }>`
  background-color: ${(prop) => prop.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 9.375rem;
  margin: 1rem;
  padding: 1rem;
`;

export const ProductCard = styled.div<{ mainColor: string }>`
  background-color: ${(prop) => prop.mainColor};
  width: 7.5rem;
  margin: 0.625rem;
  padding: 1.25rem;
  border-radius: 0.625rem;
  height: 11.25rem;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  box-shadow: 3px 3px 0.625rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const ProductCardTitle = styled.h2<{ textColor: string }>`
font-family: 'NanumGothic';  
margin-top: 0.3125rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(prop) => prop.textColor};
  transition: color 0.5s ease-in-out;
  white-space: nowrap;
  max-width: 7.5rem;
  margin-bottom: 0.3125rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

//Category
export const MarginTopDiv = styled.div`
  margin-top: calc(clamp(30px, 3%, 50px) + 20px);
`

export const TagContainer = styled.div<{ responsiveVar: responsiveVariable }>`
  display: grid;
  position: relative;
  z-index: 99;
  grid-template-columns: 1fr ${(props) =>
      props.responsiveVar.isFiveCards
        ? "59.375rem"
        : props.responsiveVar.isFourCards
        ? "47.5rem"
        : props.responsiveVar.isThreeCards
        ? "35.625rem"
        : props.responsiveVar.isTwoCards
        ? "23.75rem"
        : "65%"} 1fr;
`;

export const Tags = styled.div<{ responsiveVar: responsiveVariable }>`
  grid-column: 2;
  display: ${(props) => (props.responsiveVar.isDesktop ? "flex" : "grid")};
  flex-wrap: wrap;
  align-content: center;
  ${(props) =>
    props.responsiveVar.isDesktop ? "" : "grid-template-rows: 1fr auto;"}
  margin-top: 1.875rem;
  margin-left: 1rem;
  justify-items: center;
`;

export const SkeletonTag = styled.div`
  justify-content: center;
  align-items: center;
  display: inline-block;
  padding: 0.3125rem 1rem;
  margin: 0.25rem;
  height: 1rem;
  width: 1.4rem;
  font-weight: bold;
  color: transparent;
  border-radius: 0.625rem;
  background-color: #ddd;
  cursor: default;
  user-select: none;
  animation: skeleton-pulse 1s infinite;

  @keyframes skeleton-pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const SelectedCategory = styled.div`
  grid-row: 1;
  display: flex;
  width: 12rem;
  justify-content: center;
  align-items: center;
`;
export const DropDownToggle = styled.span<{ selected: boolean }>`
  grid-row: 1;
  width: 0.5em;
  height: 0.5em;
  display: inline-block;
  vertical-align: middle;
  border-left: 0.15em solid currentColor;
  border-bottom: 0.15em solid currentColor;
  transform: rotate(-45deg);
  margin-left: 0.38em;
  margin-top: ${(props) => (props.selected ? "4px" : "-0.25em")};
  transition: transform 100ms ease-in-out;
  ${(props) => (props.selected ? "transform: rotate(-225deg);" : "")}
  cursor: pointer;
`;

export const TagsDrop = styled.div<{ isOpen: boolean; size: number }>`
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: flex-start;
  width: 10rem;
  overflow: hidden;
  animation: ${(props) => (props.isOpen ? "get-in" : "get-out")} 300ms
    ease-in-out;

  @keyframes get-in {
    0% {
      height: 0;
    }
    100% {
      height: ${(props) => props.size * 32.75 + "px"};
    }
  }

  @keyframes get-out {
    0% {
      height: ${(props) => props.size * 32.75 + "px"};
    }
    100% {
      height: 0;
    }
  }
`;

export const Tag = styled.div<{ isSelected: boolean }>`
  font-family: 'NanumGothic';
  display: inline-block;
  padding: 0.3125rem 1rem;
  margin: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${(prop) => (prop.isSelected ? "#000" : "#ddd")};
  color: ${(prop) => (prop.isSelected ? "#ddd" : "#000")};
  ${(prop) => (prop.isSelected ? "border: none;" : null)}
  border-radius: 0.625rem;
  cursor: pointer;
  user-select: none;
  box-shadow: 2px 2px 0.125rem rgba(0, 0, 0, 0.3);
`;

export const CreateButton = styled.div<{ selectedComponent: string }>`
  grid-row: 1;
  display: inline-block;
  padding: 0.3125rem 1rem;
  margin-top: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${(prop) =>
    prop.selectedComponent === "create" ? "#000" : "#ddd"};
  color: ${(prop) => (prop.selectedComponent === "create" ? "#ddd" : "#000")};
  ${(prop) => (prop.selectedComponent === "create" ? "border: none;" : null)}
  border-radius: 0.625rem;
  cursor: pointer;
  margin-left: 1.25rem;
  user-select: none;
  box-shadow: 2px 2px 0.125rem rgba(0, 0, 0, 0.3);
`;

export const ReorderButton = styled.div<{ selectedComponent: string }>`
  grid-row: 1;
  display: inline-block;
  padding: 0.3125rem 1rem;
  margin-top: 2rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${(prop) =>
    prop.selectedComponent === "reorder" ? "#000" : "#ddd"};
  color: ${(prop) => (prop.selectedComponent === "reorder" ? "#ddd" : "#000")};
  ${(prop) => (prop.selectedComponent === "reorder" ? "border: none;" : null)}
  border-radius: 0.625rem;
  cursor: pointer;
  margin-left: 1.25rem;
  user-select: none;
  box-shadow: 2px 2px 0.125rem rgba(0, 0, 0, 0.3);
`;
