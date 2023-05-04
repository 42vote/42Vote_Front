import React from "react";
import FixedTop from "../Etc/FixedTop";
import { MyPageHeader } from "./styles/styledComponents";
import CardsContainers from "../Main/components/Card/CardsContainers";

const MyPage: React.FC = () => {
  return (
    <div id="desktop">
      <FixedTop />
      <div>
        <MyPageHeader>MyPage</MyPageHeader>
        <CardsContainers
          selectedTag={["-1", "-2"]}
          setSelectedTag={() => {}}
          isMain={false}
        />
      </div>
    </div>
  );
};

export default MyPage;
