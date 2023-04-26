import React, { useState } from "react";
import FixedTop from "../Etc/FixedTop";
import TagCardContainers from "../Main/components/TagCardContainers";
import { MyPageHeader } from "./styles/styledComponents";


const MyPage: React.FC = () => {
  const selectedTag = ["tag A", "tag D"];

  return (
    <div id="desktop">
      <FixedTop />
      <div>
        <MyPageHeader>MyPage</MyPageHeader>
        <TagCardContainers
          selectedTag={selectedTag}
          setSelectedTag={() => {}}
        />
      </div>
    </div>
  );
};

export default MyPage;
