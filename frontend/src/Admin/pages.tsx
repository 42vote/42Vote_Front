import { AdminContainer } from "./styles/styledComponents";
import SelectedCategoryInfo from "./components/SelectedCategoryInfo";
import AdminCategoryList from "./components/AdminCategoryList";
import { useTags } from "../Main/customHooks/useTags";
import { useEffect, useState } from "react";

const Admin = () => {
  const { isLoading, data } = useTags("all");
  const [selectedTag, setSelectedTag] = useState<string[]>([]);

  useEffect(() => {
    let tagList: string[] = [];
    if (!isLoading && data) tagList.push(data[0].id);
    setSelectedTag(tagList);
  }, [isLoading, data]);

  return (
    <AdminContainer>
      <AdminCategoryList
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        isMain={false}
      />
      <SelectedCategoryInfo
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
        isMain={false}
      />
    </AdminContainer>
  );
};

export default Admin;
