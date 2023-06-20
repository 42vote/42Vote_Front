import {
  ActiveCategoryListContainer,
  ActiveCategoryListDiv,
  AdminCategoryListContainer,
  ExpiredCategoryListContainer,
  ExpiredCategoryListDiv,
  ListHeader,
} from "../styles/styledComponents";
import { useContext } from "react";
import { selectedComponentContext } from "../contexts/setDetailComponents";
import { selectTagProps } from "../../Main/types";
import { CreateButton } from "../../Main/styles/styleComponents";
import Categorys from "../../CommonComponents/CategoryComponents/Categorys";
import { categoryDocumentsContext } from "../contexts/setDocuments";
import { toggleOnContext } from "../contexts/setToggle";

const AdminCategoryList = (props: selectTagProps) => {
  const { selectedComponent, setSelectedComponent } = useContext(
    selectedComponentContext
  );
  const { setCategoryDocuments } = useContext(categoryDocumentsContext);
  const { setToggleOn } = useContext(toggleOnContext);
  const selectedTag = props.selectedTag;
  const setSelectedTag = props.setSelectedTag;

  const handleTagSelect = (tagId: string) => {
    if (selectedTag.length === 1 && selectedTag[0] === tagId) return;
    setSelectedTag([tagId]);
    setSelectedComponent("detail");
    setCategoryDocuments([]);
    setToggleOn(false);
  };

  const getCreatePage = () => {
    setSelectedComponent("create");
    setSelectedTag([]);
  };

  return (
    <AdminCategoryListContainer>
      <ActiveCategoryListContainer>
<<<<<<< HEAD
        <ListHeader>activated</ListHeader>
=======
        <ListHeader>Activate</ListHeader>
>>>>>>> ba46cfd ([EDIT] AdminCategoryList ListHeader msg changed)
        <ActiveCategoryListDiv>
          <Categorys
            selectedTag={selectedTag}
            handleSelect={handleTagSelect}
            isMain={props.isMain}
            isExpired="false"
          />
          <CreateButton
            onClick={getCreatePage}
            selectedComponent={selectedComponent}
          >
            +
          </CreateButton>
        </ActiveCategoryListDiv>
      </ActiveCategoryListContainer>
      <ExpiredCategoryListContainer>
        <ListHeader>Expire</ListHeader>
        <ExpiredCategoryListDiv>
          <Categorys
            selectedTag={selectedTag}
            handleSelect={handleTagSelect}
            isMain={props.isMain}
            isExpired="true"
          />
        </ExpiredCategoryListDiv>
      </ExpiredCategoryListContainer>
    </AdminCategoryListContainer>
  );
};

export default AdminCategoryList;
