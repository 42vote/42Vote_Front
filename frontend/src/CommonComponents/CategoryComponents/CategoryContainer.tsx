import React, { useEffect, useCallback, useContext } from "react";
import { selectTagProps } from "../../Main/types";
import { useResponsive } from "../../Main/customHooks/useResponsive";
import Categorys from "./Categorys";
import { TagContainer } from "../../Main/styles/styleComponents";
import ToggleSwitch from "../../Admin/components/ComponentSwitch";
import { toggleOnContext } from "../../Admin/contexts/setToggle";
import { selectedComponentContext } from "../../Admin/contexts/setDetailComponents";

const CategoryContainer = (props: selectTagProps) => {
  const responsiveVar = useResponsive();
  const selectedTag = props.selectedTag;
  const selectedOne = props.selectedTag[0];
  const setSelectedTag = props.setSelectedTag;
  const { toggleOn, setToggleOn } = useContext(toggleOnContext);
  const { setSelectedComponent } = useContext(selectedComponentContext);

  const handleTagSelect = (tagId: string) => {
    if (toggleOn) {
      setSelectedTag([tagId]);
      return;
    }
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
    setToggleOn(false);
    setSelectedComponent("line");
  }, [selectedOne, setSelectedTag, setToggleOn, setSelectedComponent]);

  useEffect(() => {
    if (responsiveVar.isMobile) mobileSet();
  }, [responsiveVar.isMobile, mobileSet]);

  return (
    <>
      <TagContainer responsiveVar={responsiveVar}>
        <Categorys
          selectedTag={selectedTag}
          handleSelect={handleTagSelect}
          isMain={props.isMain}
          isExpired="false"
        />
      </TagContainer>
      {!responsiveVar.isMobile && <ToggleSwitch off="line" on="rectangle" />}
    </>
  );
};

export default CategoryContainer;
