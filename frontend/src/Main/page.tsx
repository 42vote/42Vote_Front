import React, { useState } from "react";
import FixedTop from "../Etc/FixedTop";
import TagButtons from "./components/TagButtons";
import TagCardContainers from "./components/TagCardContainers";
import "./styles/style.css";

const MainPage: React.FC = () => {
  //need to fix. tags to [].
  const [selectedTag, setSelectedTag] = useState<string[]>([]);

  return (
    <div>
      <div id="mobile">
        <FixedTop />
      </div>
      <TagButtons selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <TagCardContainers
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
    </div>
  );
};

export default MainPage;
