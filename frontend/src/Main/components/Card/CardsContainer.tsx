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
  const tagInfo = useTags().data?.filter((arr) => arr.id === selectedTag);
  const [page, setPage] = useState(1);
  const documentApiQuery: documentListQuery = {
    categoryId: selectedTag,
    listSize: "5",
    listIndex: page,
    myPost: "false",
    myVote: "false",
  };
  const { data, isLoading } = useCards(documentApiQuery);
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
    if (responsiveVar.isFiveCards)
      scrollRef.current!.scrollLeft += 70.47 * fontSizeNum;
    else if (responsiveVar.isFourCards)
      scrollRef.current!.scrollLeft += 56.5 * fontSizeNum;
    else scrollRef.current!.scrollLeft += 41.78 * fontSizeNum;
  };

  const handlePrev = () => {
    const fontSize: string = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("font-size")
      .split("px")[0];
    const fontSizeNum: number = Number(fontSize);
    setPage(2);
    if (responsiveVar.isFiveCards)
      scrollRef.current!.scrollLeft -= 70.47 * fontSizeNum;
    else if (responsiveVar.isFourCards)
      scrollRef.current!.scrollLeft -= 56.5 * fontSizeNum;
    else scrollRef.current!.scrollLeft -= 41.78 * fontSizeNum;
  };

  //need to delete filter cuz cards has one tag items.
  return (
    <>
      <TagHeader responsiveVar={responsiveVar}>
        #{tagInfo ? tagInfo[0].title : "TagName"}
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
            data.map((card) => <Card key={card.id} {...card} />)
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
