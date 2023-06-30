import React, { useEffect, useState } from "react";
import CategoryContainer from "../CommonComponents/CategoryComponents/CategoryContainer";
import CardsContainers from "../CommonComponents/CardsComponents/CardsContainers";
import "./styles/style.css";
import { useTags } from "./customHooks/useTags";
import { responsiveVariable } from "./types";
import { useResponsive } from "./customHooks/useResponsive";
import { setRootFontSize } from "../Lib/setRootFontSize";

const MainPage: React.FC = () => {
  const { data, isLoading } = useTags("false");
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const responsiveVar: responsiveVariable = useResponsive();
  useEffect(() => {
    let tagList: string[] = [];
    if (!isLoading && data) {
      tagList.push(data[0].id);
    }
    setSelectedTag(tagList);
  }, [isLoading, data, responsiveVar.isDesktop]);

  useEffect(() => {
    if (responsiveVar.isMobile) setRootFontSize(15);
    if (responsiveVar.isDesktop && !responsiveVar.isScreen) setRootFontSize(14);
    if (responsiveVar.isSmallScreen) setRootFontSize(20);
    if (responsiveVar.isMediumScreen) setRootFontSize(28);
    if (responsiveVar.isBigScreen) setRootFontSize(33);
  }, [responsiveVar]);

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
