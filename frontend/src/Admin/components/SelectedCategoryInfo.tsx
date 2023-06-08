import { SelectedCategoryInfoContainer } from "../styles/styledComponents";
import { useState, useContext } from "react";
import CategoryDetail from "./CategoryDetail";
import CategoryStatistics from "./CategoryStatistics";
import { selectedComponentContext } from "../contexts/setDetailComponents";
import CategoryCreate from "./CategoryCreate";

const SelectedCategoryInfo = () => {
  const { selectedComponent, setSelectedComponent } = useContext(
    selectedComponentContext
  );
  const [isStatistics, setIsStatistics] = useState(false);
  const setInfoType = () => {
    if (isStatistics) {
      setSelectedComponent("detail");
      setIsStatistics(false);
    } else {
      setSelectedComponent("statistics");
      setIsStatistics(true);
    }
  };
  return (
    <SelectedCategoryInfoContainer>
      {selectedComponent === "statistics" ? (
        <CategoryStatistics />
      ) : selectedComponent === "detail" ? (
        <CategoryDetail />
      ) : (
        <CategoryCreate />
      )}
      <button onClick={setInfoType}>ChangeInfoType</button>
    </SelectedCategoryInfoContainer>
  );
};

export default SelectedCategoryInfo;
