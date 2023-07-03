import { AdminContainer } from "./styles/styledComponents";
import SelectedCategoryInfo from "./components/SelectedCategoryInfo";
import AdminCategoryList from "./components/AdminCategorys/AdminCategoryList";
import { useTags } from "../Main/customHooks/useTags";
import { useEffect, useRef, useState } from "react";
import { useResponsive } from "../Main/customHooks/useResponsive";
import { setRootFontSize } from "../Lib/setRootFontSize";

const Admin = () => {
  const { isLoading, data } = useTags("false");
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const responsiveVar = useResponsive();
  const isMounted = useRef(false);
  useEffect(() => {
    let tagList: string[] = [];
    if (!isLoading && data && !isMounted.current){
      tagList.push(data[0].id);
      isMounted.current = true;
    }
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
