import React, { useEffect, useCallback } from "react";
import { selectTagProps } from "../../types";
import { useResponsive } from "../../customHooks/useResponsive";
import Categorys from "./Categorys";
import { TagConatiner } from "../../styles/styleComponents";

const CategoryContainer = (props: selectTagProps) => {
  const responsiveVar = useResponsive();
  const selectedTag = props.selectedTag;
  const selectedOne = props.selectedTag[0];
  const setSelectedTag = props.setSelectedTag;

  const handleTagSelect = (tagId: string) => {
    if (selectedTag.length === 1 && selectedTag[0] === tagId) return;
    if (selectedTag.includes(tagId))
      setSelectedTag(selectedTag.filter((tag) => tag !== tagId));
    else if (responsiveVar.isDesktop)
      setSelectedTag((selctedTag) => {
        return [...selctedTag, tagId];
      });
    else setSelectedTag([tagId]);
  };

  const mobileSet = useCallback(() => {
    setSelectedTag([selectedOne]);
  }, [selectedOne, setSelectedTag]);

  useEffect(() => {
    if (responsiveVar.isMobile) mobileSet();
  }, [responsiveVar.isMobile, mobileSet]);

  return (
    <TagConatiner responsiveVar={responsiveVar}>
      <Categorys selectedTag={selectedTag} handleSelect={handleTagSelect} isMain={props.isMain} />
    </TagConatiner>
  );
};

export default CategoryContainer;
