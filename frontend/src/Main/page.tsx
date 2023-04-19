import React, { useState } from "react";
import FixedTop from "../Etc/FixedTop";
import TagButtons from "./components/TagButtons";
import Cards from "./components/Cards";
import { useTags } from "./customHooks/useTags";
import { useCards } from "./customHooks/useCards";
import { tags } from "./demoData";
import "./style.css";

const MainPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string[]>(tags);
  const tagData = useTags();
  const cardData = useCards(tagData.data);

  return (
    <>
      {!tagData.isLoading && !cardData.isLoading ? (
        <div className="main-page">
          <FixedTop />
          <TagButtons selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
          <Cards selectedTag={selectedTag} setSelectedTag={setSelectedTag}/>
        </div>
      ) : null}
    </>
  );
};

export default MainPage;
