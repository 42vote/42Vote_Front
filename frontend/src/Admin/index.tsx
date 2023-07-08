import { useState } from "react";
import { selectedComponentContext } from "../CommonContext/selectedComponentContext";
import { categoryDocumentsContext } from "./contexts/setDocuments";
import { toggleOnContext } from "../CommonContext/toggleOnContext";
import { documentListRes } from "../Types/common";
import Admin from "./pages";

const AdminIndex = () => {
  const [selectedComponent, setSelectedComponent] = useState("detail");
  const selectedCategoryComponent = {
    selectedComponent: selectedComponent,
    setSelectedComponent: setSelectedComponent,
  };

  const [categoryDocuments, setCategoryDocuments] = useState<documentListRes[]>(
    []
  );
  const categoryDocumentsVal = {
    categoryDocuments: categoryDocuments,
    setCategoryDocuments: setCategoryDocuments,
  };

  const [toggleOn, setToggleOn] = useState(false);
  const togglenOnVal = {
    toggleOn: toggleOn,
    setToggleOn: setToggleOn,
  };

  return (
    <selectedComponentContext.Provider value={selectedCategoryComponent}>
      <categoryDocumentsContext.Provider value={categoryDocumentsVal}>
        <toggleOnContext.Provider value={togglenOnVal}>
          <Admin />
        </toggleOnContext.Provider>
      </categoryDocumentsContext.Provider>
    </selectedComponentContext.Provider>
  );
};

export default AdminIndex;
