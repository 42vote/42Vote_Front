import React from "react";
import { useCards } from "../customHooks/useCards";
import { selectTagProps } from "../types";
import { useTags } from "../customHooks/useTags";
import Card from "./Card";

const Cards = (props: selectTagProps) => {
  const selectedTag = props.selectedTag;
  const tag = useTags();
  const { data } = useCards(tag.data);
  const cards = data ? data : [];

  const handleNext = () => {};

  const handlePrev = () => {};

  return (
    <>
      {selectedTag.map((tag) => (
        <div key={tag}>
          <h1 className="tagHeader">#{tag}</h1>
          <div className="cards_area">
            {cards.filter((card) => card.tag.includes(tag)).length > 4 ? (
              <div className="prevButtonContainer">
                <button onClick={handlePrev} className="prevButton" />
              </div>
            ) : null}
            <div className="cards-container">
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
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
