import { SelectedCategoryInfoContainer } from "../styles/styledComponents";
import { useState } from "react";
import CategoryDetail from "./CategoryDetail";
import CategoryStatistics from "./CategoryStatistics";

const SelectedCategoryInfo = () => {
  const [isStatistics, setIsStatistics] = useState(false);
  const setInfoType = () => {
    setIsStatistics(!isStatistics);
  }
  return (
    <SelectedCategoryInfoContainer>
      {isStatistics ? <CategoryStatistics /> : <CategoryDetail />}
      <button onClick={setInfoType}>ChangeInfoType</button>
    </SelectedCategoryInfoContainer>
  );
};

export default SelectedCategoryInfo;
