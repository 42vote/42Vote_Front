import CategoryContainer from "../../Main/components/Category/CategoryContainer";
import { AdminCategoryListContainer } from "../styles/styledComponents";
import { useState, useContext } from "react";
import { selectedComponentContext } from "../contexts/setDetailComponents";

const AdminCategoryList = () => {
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const {selectedComponent, setSelectedComponent} = useContext(selectedComponentContext);

  const getCreatePage = () => {
    setSelectedComponent("create");
  }
  return (
    <AdminCategoryListContainer>
      <CategoryContainer
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        isMain={true}
      />
      <button onClick={getCreatePage}>CreateCategory</button>
    </AdminCategoryListContainer>
  );
};

export default AdminCategoryList