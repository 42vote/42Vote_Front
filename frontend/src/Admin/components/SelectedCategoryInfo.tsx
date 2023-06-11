import { SelectedCategoryInfoContainer } from "../styles/styledComponents";
import { useState, useContext } from "react";
import CategoryDetail from "./CategoryDetail";
import CategoryStatistics from "./CategoryStatistics";
import { selectedComponentContext } from "../contexts/setDetailComponents";
import CategoryCreate from "./CategoryCreate";
import { selectTagProps } from "../../Main/types";

const SelectedCategoryInfo = (props: selectTagProps) => {
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

  const selectedTag = props.selectedTag;
  const setSelectedTag = props.setSelectedTag;

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