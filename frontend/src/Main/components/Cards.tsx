import React, { useState, useRef } from "react";
import { useCards } from "../customHooks/useCards";
import Card from "./Card";
import { useResponsive } from "../customHooks/useResponsive";
import styled from "styled-components";
import { responsiveVariable } from "../types";

interface cardsProps {
  tag: string;
}

const CardsContainer = styled.div<{ responsiveVar: responsiveVariable }>`
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
  height: ${(prop) => (prop.responsiveVar.isDesktop ? "285px" : "auto")};
  -webkit-overflow-scrolling: touch; /* Optional: Enable momentum scrolling in iOS */
  scroll-behavior: smooth; /* Optional: Add smooth scrolling behavior */
`;

const Cards = (props: cardsProps) => {
  const tag = props.tag;
  const [page, setPage] = useState(1);
  const { data } = useCards(tag, page);
  const cards = data ? data : [];
  const scrollRef = useRef<HTMLDivElement>(null);
  const responsiveVar = useResponsive();

  const handleNext = () => {
    //2 is example code.
    //Should change like (page) => page++
    //check remain cards. if under 5N page++
    setPage(2);
    if (responsiveVar.isFiveCards) scrollRef.current!.scrollLeft += 1130;
    else if (responsiveVar.isFourCards) scrollRef.current!.scrollLeft += 908;
    else scrollRef.current!.scrollLeft += 686;
  };

  const handlePrev = () => {
    scrollRef.current!.scrollLeft -= 1130;
  };

  return (
    <>
      {cards.filter((card) => card.tag.includes(tag)).length > 4 &&
      responsiveVar.isDesktop ? (
        <div className="prevButtonContainer">
          <button onClick={handlePrev} className="prevButton" />
        </div>
      ) : (
        <div className="prevButtonContainer">
          <div className="nullLeft"></div>
        </div>
      )}
      <CardsContainer responsiveVar={responsiveVar} ref={scrollRef}>
        {cards
          .filter((card) => card.tag.includes(tag))
          .map((card) => (
            <Card key={card.id} {...card} />
          ))}
      </CardsContainer>
      {cards.filter((card) => card.tag.includes(tag)).length > 4 &&
      responsiveVar.isDesktop ? (
        <div className="nextButtonContainer">
          <button onClick={handleNext} className="nextButton" />
        </div>
      ) : null}
    </>
  );
};

export default Cards;
