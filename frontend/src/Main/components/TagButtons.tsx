import React, { useEffect } from "react";
import { useTags } from "../customHooks/useTags";
import { selectTagProps } from "../types";
import { useResponsive } from "../customHooks/useResponsive";
import { TagConatiner } from "../styleComponents";
import Tag from "./Tag";

const TagButtons = (props: selectTagProps) => {
  const { data } = useTags();
  const selectedTag = props.selectedTag;
  const setSelectedTag = props.setSelectedTag;
  const responsiveVar = useResponsive();

  const handleTagSelect = (label: string) => {
    if (selectedTag.includes(label))
      setSelectedTag(selectedTag.filter((tag) => tag !== label));
    else if (responsiveVar.isDesktop)
      setSelectedTag((selctedTag) => {
        return [...selctedTag, label].sort();
      });
    else setSelectedTag([label]);
  };

  useEffect(() => {
    if (responsiveVar.isMobile) setSelectedTag([selectedTag[0]]);
  }, [responsiveVar.isMobile]);

  return (
    <TagConatiner responsiveVar={responsiveVar}>
      <div className="tags-container">
        {data?.map((tag) => (
          <Tag
            key={tag}
            label={tag}
            onSelect={handleTagSelect}
            isSelected={selectedTag.includes(tag)}
          />
        ))}
      </div>
    </TagConatiner>
  );
};

export default TagButtons;
