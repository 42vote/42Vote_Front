import React, { useState } from "react";
import "./Styles.css";
import Tag from "./Tag";
import Card from "./Card";
import FixedTop from "../Etc/FixedTop";

type MainPageProps = {
  tags: string[];
  cards: CardProps[];
};

interface CardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tag: string;
}

const tags = ["A", "B", "C"];

const cards: CardProps[] = [
  {
    id: 1,
    title: "1",
    description: "Description for card 1",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "A",
  },
  {
    id: 2,
    title: "2",
    description: "Description for card 2",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "A",
  },
  {
    id: 3,
    title: "3",
    description: "Description for card 3",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "A",
  },
  {
    id: 4,
    title: "4",
    description: "Description for card 4",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "B",
  },
  {
    id: 5,
    title: "5",
    description: "Description for card 5",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "B",
  },
  {
    id: 6,
    title: "6",
    description: "Description for card 6",
    imageUrl: "https://via.placeholder.com/200x200",
    tag: "C",
  },
];

const MainPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string[]>(tags);

  const handleTagSelect = (label: string) => {
    //setUsers(users.filter(user => user.id !== id))
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
          <div className="cards-container">
            {cards
              .filter((card) => card.tag.includes(tag))
              .map((card) => (
                <Card key={card.id} {...card} />
              ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default MainPage;
