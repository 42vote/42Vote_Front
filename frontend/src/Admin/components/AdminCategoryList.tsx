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
import { CreateButton, ReorderButton } from "../../Main/styles/styleComponents";
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

  const goCreatePage = () => {
    setSelectedComponent("create");
    setSelectedTag([]);
  };

  const goReOrderPage = () => {
    setSelectedComponent("reorder");
    setSelectedTag([]);
  };

  return (
    <AdminCategoryListContainer>
      <ActiveCategoryListContainer>
        <ListHeader>Activate</ListHeader>
        <ActiveCategoryListDiv>
          <Categorys
            selectedTag={selectedTag}
            handleSelect={handleTagSelect}
            isMain={props.isMain}
            isExpired="false"
          />
          <CreateButton
            onClick={goCreatePage}
            selectedComponent={selectedComponent}
          >
            +
          </CreateButton>
          <ReorderButton
            onClick={goReOrderPage}
            selectedComponent={selectedComponent}
          >
            AdjeustOrder
          </ReorderButton>
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
