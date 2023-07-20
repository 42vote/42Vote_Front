import { SelectedCategoryInfoContainer } from "../styles/styledComponents";
import { useContext } from "react";
import { selectedComponentContext } from "../../CommonContext/selectedComponentContext";
import { selectTagProps } from "../../Main/types";
import CategoryDetail from "./CategoryDetail";
import CategoryStatistics from "./Statistics/CategoryStatistics";
import ToggleSwitch from "./ComponentSwitch";
import ReorderCategory from "./AdminCategorys/ReorderCategory/ReorderCategory";

const SelectedCategoryInfo = (props: selectTagProps) => {
  const { selectedComponent } = useContext(selectedComponentContext);
  const selectedTag = props.selectedTag;
  const setSelectedTag = props.setSelectedTag;

  return (
    <SelectedCategoryInfoContainer>
      {selectedComponent !== "create" && selectedComponent !== "reorder" && (
        <ToggleSwitch off="detail" on="statistics" />
      )}
      {selectedComponent === "statistics" ? (
        <CategoryStatistics
          isMain={true}
          setSelectedTag={setSelectedTag}
          selectedTag={selectedTag}
        />
      ) : selectedComponent === "reorder" ? (
        <ReorderCategory />
      ) : (
        <CategoryDetail categoryId={selectedComponent === "detail" ? Number(selectedTag[0]) : 0} />
      )}
    </SelectedCategoryInfoContainer>
  );
};

export default SelectedCategoryInfo;
