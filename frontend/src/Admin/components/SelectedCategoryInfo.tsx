import { SelectedCategoryInfoContainer } from "../styles/styledComponents";
import { useContext } from "react";
import { selectedComponentContext } from "../contexts/setDetailComponents";
import { selectTagProps } from "../../Main/types";
import CategoryDetail from "./CategoryDetail";
import CategoryCreate from "./CategoryCreate";
import CategoryStatistics from "./Statistics/CategoryStatistics";
import ToggleSwitch from "./ComponentSwitch";
import ReorderCategory from "./ReorderCategory/ReorderCategory";

const SelectedCategoryInfo = (props: selectTagProps) => {
  const { selectedComponent } = useContext(selectedComponentContext);
  const selectedTag = props.selectedTag;
  const setSelectedTag = props.setSelectedTag;

  return (
    <SelectedCategoryInfoContainer>
      {selectedComponent !== "create" && selectedComponent !== "reorder" && <ToggleSwitch />}
      {selectedComponent === "statistics" ? (
        <CategoryStatistics
          isMain={true}
          setSelectedTag={setSelectedTag}
          selectedTag={selectedTag}
        />
      ) : selectedComponent === "detail" ? (
        <CategoryDetail categoryId={Number(selectedTag[0])} />
      ) : selectedComponent === "reorder" ? (
        <ReorderCategory />
      ) : (
        <CategoryCreate />
      )}
    </SelectedCategoryInfoContainer>
  );
};

export default SelectedCategoryInfo;
