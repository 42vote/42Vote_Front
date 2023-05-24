import styled from "styled-components";
import { responsiveVariable } from "../types";

export const AbsolutedDiv = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
`;
export const CardsContainersDiv = styled.div`
  max-height: 62rem;
  overflow-y: auto;
  scroll-behavior: smooth; /* Optional: Add smooth scrolling behavior */
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
export const CardsArea = styled.div<{ responsiveVar: responsiveVariable }>`
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

export const TagHeader = styled.h1<{ responsiveVar: responsiveVariable }>`
  grid-row: 1;
  grid-column: 2;
  justify-self: ${(prop) =>
    prop.responsiveVar.isDesktop ? "start" : "center"};
  margin-left: ${(prop) => (prop.responsiveVar.isDesktop ? "1.25rem" : "0px")};
  margin-top: 0.625rem;
  margin-bottom: 0.625rem;
`;

export const SelectedCategory = styled.div`
    grid-row: 1;
` 

export const DropDownToggle = styled.button`
`

export const Tags = styled.div<{ responsiveVar: responsiveVariable }>`
  grid-column: 2;
  grid-row: 1;
  display: grid;
  grid-template-rows: 1fr auto;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 1.875rem;
  margin-left: 1rem;
  align-itmes: center;
  justify-items: center;
`;

export const TagsDrop = styled.div`
    grid-row: 2;
    display: flex;
    flex-direction: column;
    align-content: center;
`

export const TagConatiner = styled.div<{ responsiveVar: responsiveVariable }>`
  display: grid;
  position: relative;
  z-index: 99;
  margin-top: ${(props) =>
    props.responsiveVar.isDesktop ? "3rem" : "1.875rem"};
  grid-template-columns: 1fr ${(props) =>
      props.responsiveVar.isFiveCards
        ? "59.375rem"
        : props.responsiveVar.isFourCards
        ? "47.5rem"
        : props.responsiveVar.isThreeCards
        ? "35.625rem"
        : "65%"} 1fr;
`;

export const SkeletonTag = styled.div`
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
