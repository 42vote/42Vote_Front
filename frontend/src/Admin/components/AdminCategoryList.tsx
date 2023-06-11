import { AdminCategoryListContainer } from "../styles/styledComponents";
import { useContext } from "react";
import { selectedComponentContext } from "../contexts/setDetailComponents";
import { selectTagProps } from "../../Main/types";
import Categorys from "../../Main/components/Category/Categorys";

const AdminCategoryList = (props: selectTagProps) => {
  const { selectedComponent, setSelectedComponent } = useContext(
    selectedComponentContext
  );
  const selectedTag = props.selectedTag;
  const setSelectedTag = props.setSelectedTag;

  const handleTagSelect = (tagId: string) => {
    if (selectedTag.length === 1 && selectedTag[0] === tagId) return;
    setSelectedTag([tagId]);
  };

  const getCreatePage = () => {
    setSelectedComponent("create");
  };
  
  return (
    <AdminCategoryListContainer>
      <Categorys selectedTag={selectedTag} handleSelect={handleTagSelect} />
      <button onClick={getCreatePage}>CreateCategory</button>
    </AdminCategoryListContainer>
  );
};

export default AdminCategoryList;
