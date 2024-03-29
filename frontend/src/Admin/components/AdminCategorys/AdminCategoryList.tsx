import {
  ActiveCategoryListContainer,
  ActiveCategoryListDiv,
  AdminCategoryListContainer,
  ExpiredCategoryListContainer,
  ExpiredCategoryListDiv,
  ListHeader,
} from "../../styles/styledComponents";
import { useContext } from "react";
import { selectedComponentContext } from "../../../CommonContext/selectedComponentContext";
import { selectTagProps } from "../../../Main/types";
import {
  CreateButton,
  ReorderButton,
} from "../../../Main/styles/styleComponents";
import Categorys from "../../../CommonComponents/CategoryComponents/Categorys";
import { categoryDocumentsContext } from "../../contexts/setDocuments";
import { toggleOnContext } from "../../../CommonContext/toggleOnContext";

const AdminCategoryList = (props: selectTagProps) => {
  const { selectedComponent, setSelectedComponent } = useContext(
    selectedComponentContext
  );
  const { setCategoryDocuments } = useContext(categoryDocumentsContext);
  const { toggleOn,  setToggleOn } = useContext(toggleOnContext);
  const selectedTag = props.selectedTag;
  const setSelectedTag = props.setSelectedTag;

  const handleTagSelect = (tagId: string) => {
    if (selectedTag.length === 1 && selectedTag[0] === tagId) return;
    setSelectedTag([tagId]);
    if (!toggleOn) setSelectedComponent("detail");
    setCategoryDocuments([]);
  };

  const goCreatePage = () => {
    setSelectedComponent("create");
    setSelectedTag([]);
  };

  const goReOrderPage = () => {
    setSelectedComponent("reorder");
    setToggleOn(false);
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
            　AdjustOrder　
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
