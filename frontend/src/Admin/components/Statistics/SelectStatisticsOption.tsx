import { useState } from "react";
import { useResponsive } from "../../../Main/customHooks/useResponsive";
import { Tag, Tags } from "../../../Main/styles/styleComponents";
import { StatisticsOptionContainer } from "../../styles/styledComponents";

const StatisticsOption = () => {
  const responsiveVar = useResponsive();
  const [isSelected, setIsSelected] = useState(false);
  const selectedClick = () => {
    setIsSelected(!isSelected);
  };
  return (
    <StatisticsOptionContainer responsiveVar={responsiveVar}>
      <Tags responsiveVar={responsiveVar}>
        <Tag isSelected={isSelected} onClick={selectedClick}>
          추천수 정렬
        </Tag>
      </Tags>
    </StatisticsOptionContainer>
  );
};

export default StatisticsOption;
