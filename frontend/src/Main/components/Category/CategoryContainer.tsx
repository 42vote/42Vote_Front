import React, { useEffect } from "react";
import { useTags } from "../../customHooks/useTags";
import { selectTagProps } from "../../types";
import { useResponsive } from "../../customHooks/useResponsive";
import DeskCategorys from "./DeskCategorys";

const CategoryContainer = (props: selectTagProps) => {
  const { data, isLoading } = useTags();
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

  return (
    <>
      <DeskCategorys selectedTag={selectedTag} handleSelect={handleTagSelect} />
    </>
  );
};

export default CategoryContainer;
