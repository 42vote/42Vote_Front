import React from 'react';
import '../style.css';

type TagProps = {
  label: string;
  onSelect: (label: string) => void;
  isSelected: boolean;
}

const Tag: React.FC<TagProps> = ({ label, onSelect, isSelected }) => {
  const handleClick = () => {
    onSelect(label);
  };

  return (
    <div className={`tag ${isSelected ? 'selected' : ''}`} onClick={handleClick}>
      {label}
    </div>
  );
};

export default Tag;
