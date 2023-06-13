import { useEffect, useState } from "react";
import { selectedComponentContext } from "./contexts/setDetailComponents";
import { categoryDocumentsContext } from "./contexts/setDocuments";
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

  useEffect(()=>{
    console.log(categoryDocuments);
  }, [categoryDocuments])

  return (
    <selectedComponentContext.Provider value={selectedCategoryComponent}>
      <categoryDocumentsContext.Provider value={categoryDocumentsVal}>
        <Admin />
      </categoryDocumentsContext.Provider>
    </selectedComponentContext.Provider>
  );
};

export default AdminIndex;
