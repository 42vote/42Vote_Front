import React from 'react';

type TagProps = {
  label: string;
  tagId: string;
  onSelect: (label: string) => void;
  isSelected: boolean;
}

const Category: React.FC<TagProps> = ({ label, tagId, onSelect, isSelected }) => {

  const handleClick = () => {
    onSelect(tagId);
  };

  return (
    <div className={`tag ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
      {label}
    </div>
  );
};

export default Category;
