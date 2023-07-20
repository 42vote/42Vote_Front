import React, { useContext, useEffect, useRef, useState } from "react";
import CategoryContainer from "../CommonComponents/CategoryComponents/CategoryContainer";
import LineCardsContainers from "../CommonComponents/CardsComponents/LineCardsContainers";
import "./styles/style.css";
import { useTags } from "./customHooks/useTags";
import { responsiveVariable } from "./types";
import { useResponsive } from "./customHooks/useResponsive";
import { setRootFontSize } from "../Lib/setRootFontSize";
import { MarginTopDiv } from "./styles/styleComponents";
import { selectedComponentContext } from "../CommonContext/selectedComponentContext";
import RectangleCardsContainer from "../CommonComponents/CardsComponents/rectangleCardsContainer";
import { toggleOnContext } from "../CommonContext/toggleOnContext";

const MainPage: React.FC = () => {
  const { data, isLoading } = useTags("false");
  const { selectedComponent } = useContext(selectedComponentContext);
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const responsiveVar: responsiveVariable = useResponsive();
  const toggleOn = useContext(toggleOnContext);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted) {
      if (toggleOn.toggleOn) {
        setSelectedTag((x) => [x[0]]);
      }
    }
  }, [toggleOn.toggleOn]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  useEffect(() => {
    let tagList: string[] = [];
    if (!isLoading && data) {
      if (responsiveVar.isDesktop)
        for (let i = 0; i < data.length; i++) tagList.push(data[i].id);
      else tagList.push(data[0].id);
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
    <MarginTopDiv>
      <CategoryContainer
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        isMain={true}
      />
      {selectedComponent === "line" && (
        <LineCardsContainers
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          isMain={true}
        />
      )}
      {selectedComponent === "rectangle" && (
        <RectangleCardsContainer
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
          isMain={true}
        />
      )}
    </MarginTopDiv>
  );
};

export default MainPage;
