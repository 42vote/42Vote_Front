import React from "react";
import { Tag } from "../../Main/styles/styleComponents";

type TagProps = {
  label: string;
  tagId: string;
  onSelect: (label: string) => void;
  isSelected: boolean;
};

const Category: React.FC<TagProps> = ({
  label,
  tagId,
  onSelect,
  isSelected,
}) => {
  const handleClick = () => {
    onSelect(tagId);
  };

  return (
    <Tag isSelected={isSelected} onClick={handleClick}>
      {label}
    </Tag>
  );
};

export default Category;
