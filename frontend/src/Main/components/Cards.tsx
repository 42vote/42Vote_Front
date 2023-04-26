import React, { useState, useRef } from "react";
import { useCards } from "../customHooks/useCards";
import { CardsContainer } from "../styles/styleComponents";
import { useResponsive } from "../customHooks/useResponsive";
import { documentListQuery } from "../types";
import Card from "./Card";
import { cards } from "../demoData";

interface cardsProps {
  tag: string;
}

const Cards = (props: cardsProps) => {
  const tag = props.tag;
  const [page, setPage] = useState(1);
  const documentApiQuery:documentListQuery = {
    categoryId: tag,
    listSize: "5",
    listIndex: page,
    myPost: "false",
    myVote: "false"
  }
  const { data, isLoading } = useCards(documentApiQuery);
  if (!isLoading)
    console.log(data);
  const scrollRef = useRef<HTMLDivElement>(null);
  const responsiveVar = useResponsive();

  const handleNext = () => {
    //2 is example code.
    //Should change like (page) => page++
    //check remain cards. if under 5N page++
    const fontSize: string = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("font-size")
      .split("px")[0];
    const fontSizeNum: number = Number(fontSize);
    setPage(2);
    if (responsiveVar.isFiveCards) scrollRef.current!.scrollLeft += 70.47 * fontSizeNum;
    else if (responsiveVar.isFourCards) scrollRef.current!.scrollLeft += 56.5 * fontSizeNum;
    else scrollRef.current!.scrollLeft += 41.78 * fontSizeNum;
  };

  const handlePrev = () => {
    const fontSize: string = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("font-size")
      .split("px")[0];
    const fontSizeNum: number = Number(fontSize);
    setPage(2);
    if (responsiveVar.isFiveCards) scrollRef.current!.scrollLeft -= 70.47 * fontSizeNum;
    else if (responsiveVar.isFourCards) scrollRef.current!.scrollLeft -= 56.5 * fontSizeNum;
    else scrollRef.current!.scrollLeft -= 41.78 * fontSizeNum;
  };

  //need to delete filter cuz cards has one tag items.
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
