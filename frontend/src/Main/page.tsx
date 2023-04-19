import React, { useState } from "react";
import "./style.css";
import Tag from "./compoents/Tag";
import Card from "./compoents/Card";
import FixedTop from "../Etc/FixedTop";
import { tags, cards } from "./demoData";
import { useTags } from "./customHooks/useTags";
import { useCards } from "./customHooks/useCards";

const MainPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string[]>(tags);
  const tag2 = useTags();
  const card2 = useCards(tag2.data);
  if (!tag2.isLoading && !card2.isLoading) {
    console.log(tag2.data);
    console.log(card2.data);
  }

  const handleTagSelect = (label: string) => {
    if (selectedTag.includes(label))
      setSelectedTag(selectedTag.filter((tag) => tag !== label));
    else
      setSelectedTag((selctedTag) => {
        return [...selctedTag, label].sort();
      });
  };

  const handleNext = () => {};

  const handlePrev = () => {};

  return (
    <>
      {!tag2.isLoading && !card2.isLoading ? (
        <div className="main-page">
          <FixedTop />
          <div className="tags-container">
            {tags.map((tag) => (
              <Tag
                key={tag}
                label={tag}
                onSelect={handleTagSelect}
                isSelected={selectedTag.includes(tag)}
              />
            ))}
          </div>
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
        </div>
      ) : null}
    </>
  );
};

export default MainPage;
