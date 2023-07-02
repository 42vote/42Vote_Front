import { ExportButton, ExportContainer } from "../../styles/styledComponents";
import { useResponsive } from "../../../Main/customHooks/useResponsive";
import { downloadCSV } from "../../apis/adminApis";
import { useTags } from "../../../Main/customHooks/useTags";

interface TagId {
  tagId: string;
}
//check is downloadCSV fixed in api server
const StatisticsExport = (prop: TagId) => {
  const tagInfo = useTags("all").data?.filter((arr) => arr.id === prop.tagId);
  const responsiveVar = useResponsive();
  const downloadFd = () => {
    downloadCSV(prop.tagId).then((res:Blob) => {
      const blob = new Blob([res], {type: 'text/excel;charset=utf-8;'});
      const fileUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = fileUrl;
      link.style.display = 'none';
      link.download = tagInfo ? tagInfo[0].title + ".xlsx" : "csvFile.xlsx";
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  };
  return (
    <ExportContainer responsiveVar={responsiveVar}>
      <ExportButton onClick={() => downloadFd()} isPatching={false}>
        통계 추출 [.csv]
      </ExportButton>
    </ExportContainer>
  );
};

export default StatisticsExport;
