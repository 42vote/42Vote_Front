import React, { useEffect } from "react";
import { selectTagProps } from "../../types";
import { useResponsive } from "../../customHooks/useResponsive";
import Categorys from "./Categorys";

const CategoryContainer = (props: selectTagProps) => {
  const responsiveVar = useResponsive();
  const selectedTag = props.selectedTag;
  const setSelectedTag = props.setSelectedTag;

  const handleTagSelect = (tagId: string) => {
    if (selectedTag.includes(tagId))
      setSelectedTag(selectedTag.filter((tag) => tag !== tagId));
    else if (responsiveVar.isDesktop)
      setSelectedTag((selctedTag) => {
        return [...selctedTag, tagId];
      });
    else setSelectedTag([tagId]);
  };

  useEffect(() => {
    if (responsiveVar.isMobile) setSelectedTag([selectedTag[0]]);
  }, [responsiveVar.isMobile]);

  return <Categorys selectedTag={selectedTag} handleSelect={handleTagSelect} />;
};

export default CategoryContainer;
