import { selectTagProps } from "../../../Main/types";
import StatisticsOption from "./SelectStatisticsOption";
import { StatisticsContainer } from "../../styles/styledComponents";
import StatisticsCards from "./StatisticsCards";

const CategoryStatistics = (props: selectTagProps) => {
  const selectedTag = props.selectedTag;

  return (
    <StatisticsContainer>
      <StatisticsOption />
      <StatisticsCards tagId={selectedTag[0]} />
    </StatisticsContainer>
  );
};

export default CategoryStatistics;
