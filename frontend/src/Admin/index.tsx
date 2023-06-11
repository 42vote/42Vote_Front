import { useState } from "react";
import { selectedComponentContext } from "./contexts/setDetailComponents";
import Admin from "./pages";

const AdminIndex = () => {
  const [selectedComponent, setSelectedComponent] = useState("detail");
  const selectedCategoryComponent = {
    selectedComponent: selectedComponent,
    setSelectedComponent: setSelectedComponent,
  };

  return (
    <selectedComponentContext.Provider value={selectedCategoryComponent}>
      <Admin />
    </selectedComponentContext.Provider>
  );
};

export default AdminIndex;
