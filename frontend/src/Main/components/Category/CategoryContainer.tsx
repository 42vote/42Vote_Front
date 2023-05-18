import React, { useEffect } from "react";
import { useTags } from "../../customHooks/useTags";
import { selectTagProps } from "../../types";
import { useResponsive } from "../../customHooks/useResponsive";
import { SkeletonTag, TagConatiner, Tags } from "../../styles/styleComponents";
import Category from "./Category";

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
    <TagConatiner responsiveVar={responsiveVar}>
      <Tags responsiveVar={responsiveVar}>
        {!isLoading
          ? data?.map((tag) => (
              <Category
                key={tag.id}
                tagId={tag.id}
                label={tag.title}
                onSelect={handleTagSelect}
                isSelected={selectedTag.includes(tag.id)}
              />
            ))
          : Array.from({ length: 4 }).map((_, index) => (
              <SkeletonTag key={index} />
            ))}
      </Tags>
    </TagConatiner>
  );
};

export default CategoryContainer;
