import React, { useEffect, useState } from "react";
import FixedTop from "../Etc/FixedTop";
import CategoryContainer from "./components/Category/CategoryContainer";
import CardsContainers from "./components/Card/CardsContainers";
import "./styles/style.css";
import { useTags } from "./customHooks/useTags";
import { responsiveVariable } from "./types";
import { useResponsive } from "./customHooks/useResponsive";

const MainPage: React.FC = () => {
  //need to fix. tags to [].
  const { data, isLoading } = useTags();
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const responsiveVar: responsiveVariable = useResponsive();
  useEffect(() => {
    let tagList: string[] = [];
    if (!isLoading && data) {
      if (responsiveVar.isDesktop)
        for (let i = 0; i < data.length; i++) {
          tagList.push(data[i].id);
        }
      else tagList.push(data[0].id);
    }
    setSelectedTag(tagList);
  }, [isLoading, data]);

  return (
    <div>
      <FixedTop />
      <CategoryContainer
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <CardsContainers
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
    </div>
  );
};

export default MainPage;
