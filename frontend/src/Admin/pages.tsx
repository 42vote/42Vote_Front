import { AdminContainer } from "./styles/styledComponents";
import SelectedCategoryInfo from "./components/SelectedCategoryInfo";
import AdminCategoryList from "./components/AdminCategorys/AdminCategoryList";
import { useTags } from "../Main/customHooks/useTags";
import { useContext, useEffect, useRef, useState } from "react";
import { useResponsive } from "../Main/customHooks/useResponsive";
import { setRootFontSize } from "../Lib/setRootFontSize";
import { selectedComponentContext } from "../CommonContext/selectedComponentContext";

const Admin = () => {
  const { isLoading, data } = useTags("false");
  const [selectedTag, setSelectedTag] = useState<string[]>([]);
  const responsiveVar = useResponsive();
  const selectedComponent = useContext(selectedComponentContext);
  const selectedComponentRef = useRef(selectedComponent.selectedComponent);
  selectedComponentRef.current = selectedComponent.selectedComponent;

  useEffect(() => {
    let tagList: string[] = [];
    if (!isLoading && data && selectedComponentRef.current !== "reorder") {
      tagList.push(data[0].id);
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
