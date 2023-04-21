import React, { useEffect } from "react";
import { useTags } from "../customHooks/useTags";
import Tag from "./Tag";
import { responsiveVariable, selectTagProps } from "../types";
import styled from "styled-components";
import { useResponsive } from "../customHooks/useResponsive";

const TagConatiner = styled.div<{ responsiveVar: responsiveVariable }>`
  display: grid;
  grid-template-columns: 1fr ${(prop) =>
      prop.responsiveVar.isFiveCards
        ? "1110px"
        : prop.responsiveVar.isFourCards
        ? "888px"
        : prop.responsiveVar.isThreeCards
        ? "666px"
        : "356px"} 1fr;
`;

const TagButtons = (props: selectTagProps) => {
  const { data } = useTags();
  const selectedTag = props.selectedTag;
  const setSelectedTag = props.setSelectedTag;
  const responsiveVar = useResponsive();

  const handleTagSelect = (label: string) => {
    if (selectedTag.includes(label))
      setSelectedTag(selectedTag.filter((tag) => tag !== label));
    if (responsiveVar.isDesktop)
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
