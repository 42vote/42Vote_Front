import { CardsList, TagHeader } from "../../Main/styles/styleComponents";
import { documentListQuery, responsiveVariable } from "../../Main/types";
import { useCards } from "../../Main/customHooks/useCards";
import { useRef } from "react";
import { useResponsive } from "../../Main/customHooks/useResponsive";
import Card from "../../Main/components/Card/Card";
import NoCards from "../../Main/components/Card/NoCards";
import SkeletonCards from "../../Main/components/Card/SkeletonCards";
import { useDocSize } from "../../Main/customHooks/useDocSize";
import { getShownCardsNum, myPostListQuery, myVoteListQuery } from "../../CardsComponents/utils";
import { cardsProps } from "../../CardsComponents/types";

const MyPageCards = (props: cardsProps) => {
  const docSize = useDocSize(props.tag);
  const { getCards, getCardsIsSuccess, getNextPageIsPossible, getNextPage } =
    useCards(props.tag === "-1" ? myPostListQuery : myVoteListQuery, docSize.data ? docSize.data.categorySize : -1);

  const responsiveVar = useResponsive();
  const cardExist: boolean =
    getCards !== undefined &&
    getCardsIsSuccess &&
    getCards.pages[0].cardArrary.length > 0;
  const shownCardsNum = getShownCardsNum(responsiveVar);
  //tagInfo는 tag정보가 있을 때만, myPage에서는?
  const tagInfo = "myPage";

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
    else scrollRef.current!.scrollLeft += 36.325 * fontSizeNum * direction;
  };
  const scrollEvent = () => {
    const container = scrollRef.current;
    if (container) {
      let isEnd: boolean = false;
      if (responsiveVar.isDesktop)
        isEnd =
          container.scrollLeft >= container.scrollWidth - container.offsetWidth;
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
        #{props.tag === "-1" ? "MyPost" : "MyVote"}
      </TagHeader>
      {getCardsIsSuccess &&
      getCards &&
      getCards.pages[0].cardArrary.length > shownCardsNum &&
      responsiveVar.isDesktop ? (
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
        {cardExist && getCards &&
          getNextPageIsPossible &&
          getCards.pages[0].cardArrary.length > 0 && <SkeletonCards />}
      </CardsList>
      {cardExist &&
      getCards &&
      getCards.pages[0].cardArrary.length > shownCardsNum &&
      responsiveVar.isDesktop ? (
        <div className="nextButtonContainer">
          <button onClick={handleNext} className="nextButton" />
        </div>
      ) : null}
    </>
  );
};

export default MyPageCards;
