import React, { useRef } from "react";
import { useCards } from "../../Main/customHooks/useCards";
import { CardsList, TagHeader } from "../../Main/styles/styleComponents";
import { useResponsive } from "../../Main/customHooks/useResponsive";
import { useTags } from "../../Main/customHooks/useTags";
import { useDocSize } from "../../Main/customHooks/useDocSize";
import { cardsProps } from "./types";
import { documentApiQuery, getShownCardsNum } from "./utils";
import Card from "./Card";
import NoCards from "./NoCards";
import SkeletonCards from "./SkeletonCards";

const CardsContainer = (props: cardsProps) => {
  const docSize = useDocSize(props.tag);
  const selectedTag = props.tag;
  const documentQuery = documentApiQuery(
    selectedTag,
    props.tag === "-1" ? "true" : "false",
    props.tag === "-2" ? "true" : "false"
  );
  const { getCards, getCardsIsSuccess, getNextPageIsPossible, getNextPage } =
    useCards(documentQuery, docSize.data ? docSize.data.categorySize : -1);

  const responsiveVar = useResponsive();
  const cardExist: boolean =
    getCards !== undefined &&
    getCardsIsSuccess &&
    getCards.pages[0].cardArrary.length > 0;
  const shownCardsNum = getShownCardsNum(responsiveVar);
  const tagInfo = useTags().data?.filter((arr) => arr.id === selectedTag);
  const title = tagInfo?.length
    ? tagInfo[0].title
    : props.tag === "-1"
    ? "myPost"
    : "myVote";

  const scrollRef = useRef<HTMLDivElement>(null);
  const fontSizeNum: number = Number(
    window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("font-size")
      .split("px")[0]
  );
  const scrollMove = (direction: number) => {
    if (responsiveVar.isFiveCards)
      scrollRef.current!.scrollLeft += 60 * fontSizeNum * direction;
    else if (responsiveVar.isFourCards)
      scrollRef.current!.scrollLeft += 48 * fontSizeNum * direction;
    else if (responsiveVar.isThreeCards)
      scrollRef.current!.scrollLeft += 36.325 * fontSizeNum * direction;
    else if (responsiveVar.isTwoCards)
      scrollRef.current!.scrollLeft += 24.08 * fontSizeNum * direction;
  };
  const scrollEvent = () => {
    const container = scrollRef.current;
    if (container) {
      let isEnd: boolean = false;
      if (responsiveVar.isDesktop)
        isEnd =
          container.scrollLeft >=
          container.scrollWidth - container.offsetWidth - 1 * fontSizeNum;
      else if (responsiveVar.isMobile) {
        isEnd =
          container.scrollTop + container.clientHeight >=
          container.scrollHeight - 1;
      }
      if (isEnd && getNextPageIsPossible) getNextPage();
    }
  };
  const handleNext = () => {
    scrollMove(1);
  };
  const handlePrev = () => {
    scrollMove(-1);
  };

  console.log("cardExist: ", cardExist);
  console.log("getCards: ", getCards);
  console.log(
    "getCards.pags[0].cardArray.length",
    getCards?.pages[0].cardArrary.length
  );
  console.log("shownCardsNum: ", shownCardsNum);
  console.log("isDesktop: ", responsiveVar.isDesktop);

  return (
    <>
      <TagHeader responsiveVar={responsiveVar}>#{title}</TagHeader>
      {(cardExist &&
        getCards &&
        getCards.pages[0].cardArrary.length > shownCardsNum &&
        responsiveVar.isDesktop) ||
      (getNextPageIsPossible && responsiveVar.isDesktop) ? (
        <div className="prevButtonContainer">
          <button onClick={handlePrev} className="prevButton" />
        </div>
      ) : (
        <>
          <div className="prevButtonContainer"></div>
          <div className="nextButtonContainer">
            <div className="nullLeft" />
          </div>
        </>
      )}
      <CardsList
        responsiveVar={responsiveVar}
        ref={scrollRef}
        onScroll={scrollEvent}
      >
        {getCardsIsSuccess && getCards ? (
          getCards.pages[0].cardArrary.length > 0 ? (
            getCards.pages.map((pages) =>
              pages.cardArrary.map((card) => <Card key={card.id} {...card} />)
            )
          ) : (
            <NoCards />
          )
        ) : (
          Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCards key={index} />
          ))
        )}
        {cardExist &&
          getCards &&
          getNextPageIsPossible &&
          getCards.pages[0].cardArrary.length > 0 && <SkeletonCards />}
      </CardsList>
      {(cardExist &&
        getCards &&
        getCards.pages[0].cardArrary.length > shownCardsNum &&
        responsiveVar.isDesktop) ||
      (getNextPageIsPossible && responsiveVar.isDesktop) ? (
        <div className="nextButtonContainer">
          <button onClick={handleNext} className="nextButton" />
        </div>
      ) : null}
    </>
  );
};

export default CardsContainer;
