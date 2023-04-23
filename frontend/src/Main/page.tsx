import React, { useState } from "react";
import FixedTop from "../Etc/FixedTop";
import TagButtons from "./components/TagButtons";
import TagCardContainers from "./components/TagCardContainers";
import { tags } from "./demoData";
import "./styles/style.css";

const MainPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string[]>(tags);

  return (
    <div>
      <FixedTop />
      <TagButtons selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <TagCardContainers
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
    </div>
  );
};

export default MainPage;
