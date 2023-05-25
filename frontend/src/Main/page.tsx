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

  useEffect(()=> {
    if (responsiveVar.isMobile) setRootFontSize(15)
    if (responsiveVar.isDesktop) setRootFontSize(14)
    
  },[responsiveVar])

  const setRootFontSize = (size: number) => {
    let root = document.documentElement;
    root.style.setProperty('--font-size', size+"px")
    localStorage.setItem('fontSize', size+"px")
    root.style.setProperty('fontSize', localStorage.getItem('fontSize'))
  }

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
