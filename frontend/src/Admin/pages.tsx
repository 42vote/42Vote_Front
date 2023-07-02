import { AdminContainer } from "./styles/styledComponents";
import SelectedCategoryInfo from "./components/SelectedCategoryInfo";
import AdminCategoryList from "./components/AdminCategoryList";
import { useTags } from "../Main/customHooks/useTags";
import { useEffect, useState } from "react";
import { useResponsive } from "../Main/customHooks/useResponsive";
import { setRootFontSize } from "../Lib/setRootFontSize";

const Admin = () => {
  const { isLoading, data } = useTags("false");
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const responsiveVar = useResponsive();

  useEffect(() => {
    let tagList: string[] = [];
    if (!isLoading && data)
      tagList.push(data[0].id);
    setSelectedTag(tagList);
  }, [isLoading, data]);

  useEffect(() => {
    if (responsiveVar.isMobile) setRootFontSize(15);
    if (responsiveVar.isDesktop && !responsiveVar.isScreen) setRootFontSize(14);
    if (responsiveVar.isSmallScreen) setRootFontSize(20);
    if (responsiveVar.isMediumScreen) setRootFontSize(28);
    if (responsiveVar.isBigScreen) setRootFontSize(33);
  }, [responsiveVar]);

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
