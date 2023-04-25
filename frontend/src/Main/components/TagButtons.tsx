import React, { useEffect } from "react";
import { useTags } from "../customHooks/useTags";
import { selectTagProps } from "../types";
import { useResponsive } from "../customHooks/useResponsive";
import { SkeletonTag, TagConatiner } from "../styles/styleComponents";
import Tag from "./Tag";

const TagButtons = (props: selectTagProps) => {
  const { data, isLoading } = useTags();
  const responsiveVar = useResponsive();
  const selectedTag = props.selectedTag;
  const setSelectedTag = props.setSelectedTag;

  const handleTagSelect = (tagId: string) => {
    if (selectedTag.includes(tagId))
      setSelectedTag(selectedTag.filter((tag) => tag !== tagId));
    else if (responsiveVar.isDesktop)
      setSelectedTag((selctedTag) => {
        return [...selctedTag, tagId].sort();
      });
    else setSelectedTag([tagId]);
  };

  useEffect(() => {
    if (responsiveVar.isMobile) setSelectedTag([selectedTag[0]]);
  }, [responsiveVar.isMobile]);

  return (
    <TagConatiner responsiveVar={responsiveVar}>
      <div className="tags-container">
        {!isLoading ? (data?.map((tag) => (
          <Tag
            key={tag.id}
            tagId={tag.id}
            label={tag.title}
            onSelect={handleTagSelect}
            isSelected={selectedTag.includes(tag.title)}
          />
        ))) : (
          Array.from({ length: 4 }).map((_, index) => (
            <SkeletonTag key={index} />
          ))
        )}
      </div>
    </TagConatiner>
  );
};

export default TagButtons;
