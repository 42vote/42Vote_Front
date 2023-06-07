import CategoryContainer from "../../Main/components/Category/CategoryContainer";
import { AdminCategoryListContainer } from "../styles/styledComponents";
import { useState } from "react";

const AdminCategoryList = () => {
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  return (
    <AdminCategoryListContainer>
      <CategoryContainer
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        isMain={true}
      />
    </AdminCategoryListContainer>
  );
};

export default AdminCategoryList