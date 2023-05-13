import { CardsList, TagHeader } from "../../Main/styles/styleComponents";
import { documentListQuery } from "../../Main/types";
import { useCards } from "../../Main/customHooks/useCards";
import { useRef } from "react";
import { useResponsive } from "../../Main/customHooks/useResponsive";
import Card from "../../Main/components/Card/Card";
import NoCards from "../../Main/components/Card/NoCards";
import SkeletonCards from "../../Main/components/Card/SkeletonCards";

const myPostListQuery: documentListQuery = {
  categoryId: "",
  listSize: "5",
  myPost: "true",
  myVote: "false",
};
const myVoteListQuery: documentListQuery = {
  categoryId: "",
  listSize: "5",
  myPost: "true",
  myVote: "false",
};

interface cardsProps {
  tag: string;
  isMain: boolean;
}

const MyPageCards = (props: cardsProps) => {
  // need to update NestJS
  // const docSize = useDocSize();
  const { getCards, getCardsIsSuccess, getNextPageIsPossible, getNextPage } =
    useCards(props.tag === "-1" ? myPostListQuery : myVoteListQuery, 1);
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
        {getCards &&
          getNextPageIsPossible &&
          getCards.pages[0].cardArrary.length > 0 && <SkeletonCards />}
      </CardsList>
      {getCardsIsSuccess &&
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

export default MyPageCards;
