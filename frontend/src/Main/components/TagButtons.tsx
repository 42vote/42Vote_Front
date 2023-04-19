import React from "react";
import { useTags } from "../customHooks/useTags";
import Tag from "./Tag";
import { selectTagProps } from "../types";


const TagButtons = (props: selectTagProps) => {
  const { data } = useTags();
  const selectedTag = props.selectedTag;
  const setSelectedTag = props.setSelectedTag;

  const handleTagSelect = (label: string) => {
    if (selectedTag.includes(label))
      setSelectedTag(selectedTag.filter((tag) => tag !== label));
    else
      setSelectedTag((selctedTag) => {
        return [...selctedTag, label].sort();
      });
  };

  return (
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
  );
};

export default TagButtons;
