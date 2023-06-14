import { AdminCategoryListContainer } from "../styles/styledComponents";
import { useContext } from "react";
import { selectedComponentContext } from "../contexts/setDetailComponents";
import { selectTagProps } from "../../Main/types";
import { CreateButton } from "../../Main/styles/styleComponents";
import Categorys from "../../CommonComponents/CategoryComponents/Categorys";
import { categoryDocumentsContext } from "../contexts/setDocuments";

const AdminCategoryList = (props: selectTagProps) => {
  const { selectedComponent, setSelectedComponent } = useContext(
    selectedComponentContext
  );
  const { categoryDocuments, setCategoryDocuments } = useContext(categoryDocumentsContext);
  const selectedTag = props.selectedTag;
  const setSelectedTag = props.setSelectedTag;

  const handleTagSelect = (tagId: string) => {
    if (selectedTag.length === 1 && selectedTag[0] === tagId) return;
    setSelectedTag([tagId]);
    setSelectedComponent("detail");
    setCategoryDocuments([]);    
  };

  const getCreatePage = () => {
    setSelectedComponent("create");
    setSelectedTag([]);
  };

  return (
    <AdminCategoryListContainer>
      <Categorys
        selectedTag={selectedTag}
        handleSelect={handleTagSelect}
        isMain={props.isMain}
      />
      <CreateButton
        onClick={getCreatePage}
        selectedComponent={selectedComponent}
      >
        +
      </CreateButton>
    </AdminCategoryListContainer>
  );
};

export default AdminCategoryList;
