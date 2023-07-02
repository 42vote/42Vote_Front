import { ExportButton, ExportContainer } from "../../styles/styledComponents";
import { useResponsive } from "../../../Main/customHooks/useResponsive";
import { downloadCSV } from "../../apis/adminApis";

interface TagId {
  tagId: string,
}
//check is downloadCSV fixed in api server
const StatisticsExport = (prop: TagId) => {
  const responsiveVar = useResponsive();
  return (
    <ExportContainer responsiveVar={responsiveVar}>
      <ExportButton onClick={ () => downloadCSV(prop.tagId)} isPatching={false}>통계 추출</ExportButton>
    </ExportContainer>
  );
};

export default StatisticsExport;
