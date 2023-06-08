import { useTags } from "../Main/customHooks/useTags";
import { useState } from "react";
import { selectedComponentContext } from "./contexts/setDetailComponents";
import Admin from "./pages";

const AdminIndex = () => {
  const { isLoading } = useTags("all");
  const [selectedComponent, setSelectedComponent] = useState("detail");
  const selectedCategoryComponent = {
    selectedComponent: selectedComponent,
    setSelectedComponent: setSelectedComponent,
  };

  return (
    <selectedComponentContext.Provider value={selectedCategoryComponent}>
      {isLoading ? null : <Admin />}
    </selectedComponentContext.Provider>
  );
};

export default AdminIndex;
