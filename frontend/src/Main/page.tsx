import React, { useEffect, useState } from "react";
import CategoryContainer from "./components/Category/CategoryContainer";
import CardsContainers from "./components/Card/CardsContainers";
import "./styles/style.css";
import { useTags } from "./customHooks/useTags";
import { responsiveVariable } from "./types";
import { useResponsive } from "./customHooks/useResponsive";

const MainPage: React.FC = () => {
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

  //이 부분 transition안되는 이유?
  return (
    <div>
      <CategoryContainer
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        isMain={true}
      />
      <CardsContainers
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        isMain={true}
      />
    </div>
  );
};

export default MainPage;
