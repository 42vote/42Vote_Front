import React, { useState, useRef } from "react";
import { useCards } from "../../customHooks/useCards";
import { CardsList, TagHeader } from "../../styles/styleComponents";
import { useResponsive } from "../../customHooks/useResponsive";
import { documentListQuery } from "../../types";
import { useTags } from "../../customHooks/useTags";
import Card from "./Card";
import NoCards from "./NoCards";
import SkeletonCards from "./SkeletonCards";

interface cardsProps {
  tag: string;
}

const CardsContainer = (props: cardsProps) => {
  const selectedTag = props.tag;
  const [page, setPage] = useState(1);
  const documentApiQuery: documentListQuery = {
    categoryId: selectedTag,
    listSize: "5",
    listIndex: page,
    myPost: "false",
    myVote: "false",
  };

  const { data, isLoading } = useCards(documentApiQuery);
  const tagInfo = useTags().data?.filter((arr) => arr.id === selectedTag);
  
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
      scrollRef.current!.scrollLeft += 70.47 * fontSizeNum * direction;
    else if (responsiveVar.isFourCards)
      scrollRef.current!.scrollLeft += 56.5 * fontSizeNum * direction;
    else scrollRef.current!.scrollLeft += 41.78 * fontSizeNum * direction;

  }

  const handleNext = () => {
    setPage((page) => page++);
    scrollMove(1);
  };

  const handlePrev = () => {
    setPage((page) => page++);
    scrollMove(-1);
  };

  return (
    <>
      <TagHeader responsiveVar={responsiveVar}>
        #{tagInfo ? tagInfo[0].title : ""}
      </TagHeader>
      {!isLoading && data && data.length > 4 && responsiveVar.isDesktop ? (
        <div className="prevButtonContainer">
          <button onClick={handlePrev} className="prevButton" />
        </div>
      ) : (
        <div className="prevButtonContainer">
          <div className="nullLeft"></div>
        </div>
      )}
      <CardsList responsiveVar={responsiveVar} ref={scrollRef}>
        {!isLoading && data ? (
          data.length > 0 ? (
            data.map((card) => (
              <>
                <Card key={card.id} {...card} />
                <div>Load More</div>
              </>
            ))
          ) : (
            <NoCards />
          )
        ) : (
          Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCards key={index} />
          ))
        )}
      </CardsList>
      {!isLoading && data && data.length > 4 && responsiveVar.isDesktop ? (
        <div className="nextButtonContainer">
          <button onClick={handleNext} className="nextButton" />
        </div>
      ) : null}
    </>
  );
};

export default CardsContainer;
