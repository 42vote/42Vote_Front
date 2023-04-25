import styled from "styled-components";
import { responsiveVariable } from "../types";

export const CardsArea = styled.div<{ responsiveVar: responsiveVariable }>`
  display: grid;
  grid-template-rows: 0.5fr auto;
  grid-template-columns: 1fr ${(prop) =>
      prop.responsiveVar.isFiveCards
        ? "69.375rem"
        : prop.responsiveVar.isFourCards
        ? "55.5rem"
        : prop.responsiveVar.isThreeCards
        ? "41.625rem"
        : "22.25rem"} 1fr;
`;

export const CardsContainer = styled.div<{ responsiveVar: responsiveVariable }>`
  grid-row: 2;
  grid-column: 2;
  display: flex;
  flex-direction: ${(prop) =>
    prop.responsiveVar.isDesktop ? "row" : "column"};
  flex-wrap: nowrap;
  align-items: center;
  -ms-overflow-style: none; /* IE, Edge */
  overflow-x: auto;
  scrollbar-width: none;
  height: ${(prop) => (prop.responsiveVar.isDesktop ? "17.8125rem" : "auto")};
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
        : "22.25rem"} 1fr;
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
