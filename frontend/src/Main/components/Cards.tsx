import React, { useState, useRef} from "react";
import { useCards } from "../customHooks/useCards";
import Card from "./Card";

interface cardsProps {
  tag: string;
}

const Cards = (props: cardsProps) => {
  const tag = props.tag;
  const [page, setPage] = useState(1);
  const { data } = useCards(tag, page);
  const cards = data ? data : [];
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    //2 is example code.
    //Should change like (page) => page++
    setPage (2);
    scrollRef.current!.scrollLeft += 1130;
  };

  const handlePrev = () => {
    scrollRef.current!.scrollLeft -= 1130;
  };

  return (
    <>
      {cards.filter((card) => card.tag.includes(tag)).length > 4 ? (
        <div className="prevButtonContainer">
          <button onClick={handlePrev} className="prevButton" />
        </div>
      ) : null}
      <div className="cards-container" ref={scrollRef}>
        {cards
          .filter((card) => card.tag.includes(tag))
          .map((card) => (
            <Card key={card.id} {...card} />
          ))}
      </div>
      {cards.filter((card) => card.tag.includes(tag)).length > 4 ? (
        <div className="nextButtonContainer">
          <button onClick={handleNext} className="nextButton" />
        </div>
      ) : null}
    </>
  );
};

export default Cards;
