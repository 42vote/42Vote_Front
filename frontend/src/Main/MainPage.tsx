import React, { useEffect, useState } from "react";
import "./Styles.css";
import Tag from "./Tag";
import Card from "./Card";
import FixedTop from "../Etc/FixedTop";
import { useScroll } from "./useScroll";

// For API
// type MainPageProps = {
//   tags: string[];
//   cards: CardProps[];
// };

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

const tags = ["tag A", "tag B", "tag C", "tag D"];

const cards: CardProps[] = [
  {
    id: 1,
    title: "1",
    description: "Description for card 1",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag D",
  },
  {
    id: 2,
    title: "2",
    description: "Description for card 2",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag A",
  },
  {
    id: 1234,
    title: "1",
    description: "Description for card 1",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag A",
  },
  {
    id: 243,
    title: "2",
    description: "Description for card 2",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag A",
  },
  {
    id: 11,
    title: "1",
    description: "Description for card 1",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag A",
  },
  {
    id: 22,
    title: "2",
    description: "Description for card 2",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag A",
  },
  {
    id: 111,
    title: "1",
    description: "Description for card 1",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag A",
  },
  {
    id: 223,
    title: "2",
    description: "Description for card 2",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag B",
  },
  {
    id: 2232,
    title: "2",
    description: "Description for card 2",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag B",
  },
  {
    id: 2234,
    title: "2",
    description: "Description for card 2",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag B",
  },
  {
    id: 3,
    title: "3",
    description: "Description for card 3",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag C",
  },
  {
    id: 4,
    title: "4",
    description: "Description for card 4",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag B",
  },
  {
    id: 5,
    title: "5",
    description: "Description for card 5",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag B",
  },
  {
    id: 6,
    title: "6",
    description: "Description for card 6",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "tag C",
  },
];

const MainPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string[]>(tags);

  const handleTagSelect = (label: string) => {
    if (selectedTag.includes(label))
      setSelectedTag(selectedTag.filter((tag) => tag !== label));
    else
      setSelectedTag((selctedTag) => {
        return [...selctedTag, label].sort();
      });
  };

  return (
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
        <>
          <h1 className="tagHeader">#{tag}</h1>
          <div className="cards_area" key={tag}>
            {cards.filter((card) => card.tag.includes(tag)).length > 4 ? (
              <div className="prevButtonContainer">
                <button className="prevButton"/>
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
                <button className="nextButton"/>
              </div>
            ) : null}
          </div>
        </>
      ))}
    </div>
  );
};

export default MainPage;
