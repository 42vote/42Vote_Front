import { selectTagProps } from "../../../Main/types";
import StatisticsOption from "./SelectStatisticsOption";
import { StatisticsContainer } from "../../styles/styledComponents";
import StatisticsCards from "./StatisticsCards";
import StatisticsExport from "./StatisticsExport";

const CategoryStatistics = (props: selectTagProps) => {
  const selectedTag = props.selectedTag;

  return (
    <StatisticsContainer>
      <StatisticsOption tagId={selectedTag[0]} />
      <StatisticsCards tagId={selectedTag[0]} />
      <StatisticsExport />
    </StatisticsContainer>
  );
};

export default CategoryStatistics;
