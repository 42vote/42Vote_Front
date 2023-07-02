import styled from "styled-components";
import { ExportButton } from "../../styles/styledComponents";
import { responsiveVariable } from "../../../Main/types";
import { useResponsive } from "../../../Main/customHooks/useResponsive";

const ExportContainer = styled.div<{ responsiveVar: responsiveVariable }>`
  gird-row: 3;
  height: 3rem;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr ${(props) =>
      props.responsiveVar.isFiveCards
        ? "61.375rem"
        : props.responsiveVar.isFourCards
        ? "49.5rem"
        : props.responsiveVar.isThreeCards
        ? "37.625rem"
        : props.responsiveVar.isTwoCards
        ? "25.75rem"
        : "65%"} 1fr;
  height: 1.6rem;
  width: 100%;
  flex-direction: row-reverse;
`;

const StatisticsExport = () => {
  const responsiveVar = useResponsive();
  return (
    <ExportContainer responsiveVar={responsiveVar}>
      <ExportButton isPatching={false}>통계 추출</ExportButton>
    </ExportContainer>
  );
};

export default StatisticsExport;
