import { SelectedCategoryInfoContainer } from "../styles/styledComponents";
import CategoryDetail from "./CategoryDetail";
import CategoryStatistics from "./CategoryStatistics";

const SelectedCategoryInfo = () => {
  return (
    <SelectedCategoryInfoContainer>
      <CategoryDetail />
      <CategoryStatistics />
    </SelectedCategoryInfoContainer>
  );
};

export default SelectedCategoryInfo;
