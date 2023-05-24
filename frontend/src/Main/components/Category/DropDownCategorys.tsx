import { useEffect, useState } from "react";
import { categoryRes } from "../../../Types/common";
import Category from "./Category";
import { DropDownToggle, SelectedCategory, TagsDrop } from "../../styles/styleComponents";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";

interface DropDownCategoryProps {
  data: categoryRes[];
  selectedTag: string[];
  handleSelect: (tagId: string) => void;
}

const DropDownCategorys = (props: DropDownCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const data = props.data;
  const selectedTag = props.selectedTag;
  const [selectedData, setSelectedData] = useState<categoryRes>(data[0]);
  const handleTagSelect = props.handleSelect;

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === selectedTag[0]) setSelectedData(data[i]);
    }
  }, []);

  return (
    <>
      <SelectedCategory>
        <Category
          tagId={selectedData.id}
          label={selectedData.title}
          onSelect={handleTagSelect}
          isSelected={selectedTag.includes(selectedData.id)}
        />
        <DropDownToggle selected={isOpen} onClick={toggleDropdown} />
      </SelectedCategory>
      {isOpen && (
        <TagsDrop>
          {data.map((category) => (
            <Category
              key={category.id}
              tagId={category.id}
              label={category.title}
              onSelect={handleTagSelect}
              isSelected={selectedTag.includes(category.id)}
            />
          ))}
        </TagsDrop>
      )}
    </>
  );
};

export default DropDownCategorys;
