import styled from "styled-components";
import { responsiveVariable } from "../types";
export const CardsContainersDiv = styled.div`
  max-height: 62rem;
  overflow-y: auto;
  scroll-behavior: smooth; /* Optional: Add smooth scrolling behavior */
  &::-webkit-scrollbar {
    display: none;
  }
`
export const CardsArea = styled.div<{ responsiveVar: responsiveVariable }>`
  display: grid;
  grid-template-rows: 0.5fr ${(props) =>
    props.responsiveVar.isDesktop ? "auto" : "43rem"};
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
  animation: comeOut 0.5s;

  @keyframes comeOut {
    0% {
      opacity: 0;
      margin-top: 30rem;
    }
    50% {
      opacity: 0.65;
      opcity: 0.25;
    }
    80% {
      opacity: 0.95;
    }
    100% {
      margin-top: 0rem;
      opacity: 1;
    }
  }
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

export const TagConatiner = styled.div<{ responsiveVar: responsiveVariable }>`
  display: grid;
  margin-top: 1.875rem;
  grid-template-columns: 1fr ${(prop) =>
      prop.responsiveVar.isFiveCards
        ? "69.375rem"
        : prop.responsiveVar.isFourCards
        ? "55.5rem"
        : prop.responsiveVar.isThreeCards
        ? "41.625rem"
        : "80%"} 1fr;
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
