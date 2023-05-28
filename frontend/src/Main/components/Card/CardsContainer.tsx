import React, { useRef } from "react";
import { useCards } from "../../customHooks/useCards";
import { CardsList, TagHeader } from "../../styles/styleComponents";
import { useResponsive } from "../../customHooks/useResponsive";
import { documentListQuery } from "../../types";
import { useTags } from "../../customHooks/useTags";
import Card from "./Card";
import NoCards from "./NoCards";
import SkeletonCards from "./SkeletonCards";
import { useDocSize } from "../../customHooks/useDocSize";

interface cardsProps {
  tag: string;
  isMain: boolean;
}

const CardsContainer = (props: cardsProps) => {
  const selectedTag = props.tag;
  const documentApiQuery: documentListQuery = {
    categoryId: selectedTag,
    listSize: "5",
    myPost: "false",
    myVote: "false",
  };

  const docSize = useDocSize(props.tag);
  const { getCards, getCardsIsSuccess, getNextPageIsPossible, getNextPage } =
    useCards(documentApiQuery, docSize.data ? docSize.data.categorySize : -1);
  const tagInfo = useTags().data?.filter((arr) => arr.id === selectedTag);
  const cardExist: boolean =
    getCards !== undefined &&
    getCardsIsSuccess &&
    getCards.pages[0].cardArrary.length > 0;

  const scrollRef = useRef<HTMLDivElement>(null);
  const responsiveVar = useResponsive();
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
    else scrollRef.current!.scrollLeft += 36.325 * fontSizeNum * direction;
  };

  const scrollEvent = () => {
    const container = scrollRef.current;
    if (container) {
      let isEnd: boolean = false;
      if (responsiveVar.isDesktop || responsiveVar.isTwoCards)
        isEnd =
          container.scrollLeft >= container.scrollWidth - container.offsetWidth - 1 * fontSizeNum;
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

  return (
    <>
      <TagHeader responsiveVar={responsiveVar}>
        #{tagInfo ? tagInfo[0].title : ""}
      </TagHeader>
      {cardExist &&
      getCards &&
      getCards.pages[0].cardArrary.length > 4 &&
      responsiveVar.isDesktop ? (
        <div className="prevButtonContainer">
          <button onClick={handlePrev} className="prevButton" />
        </div>
      ) : (
        <div className="prevButtonContainer">
          <div className="nullLeft"></div>
        </div>
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
      {cardExist &&
      getCards &&
      getCards.pages[0].cardArrary.length > 4 &&
      responsiveVar.isDesktop ? (
        <div className="nextButtonContainer">
          <button onClick={handleNext} className="nextButton" />
        </div>
      ) : null}
    </>
  );
};

export default CardsContainer;
