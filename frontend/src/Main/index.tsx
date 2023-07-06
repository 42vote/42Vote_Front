import MainPage from "./page";
import { useState } from "react";
import { AbsolutedDiv } from "./styles/styleComponents";
import { toggleOnContext } from "../Admin/contexts/setToggle";
import { selectedComponentContext } from "../Admin/contexts/setDetailComponents";

const MainIndex: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState("line");
  const selectedCategoryComponent = {
    selectedComponent: selectedComponent,
    setSelectedComponent: setSelectedComponent,
  };

  const [toggleOn, setToggleOn] = useState(false);
  const togglenOnVal = {
    toggleOn: toggleOn,
    setToggleOn: setToggleOn,
  };
  return (
    <AbsolutedDiv>
      <selectedComponentContext.Provider value={selectedCategoryComponent}>
        <toggleOnContext.Provider value={togglenOnVal}>
          <MainPage />
        </toggleOnContext.Provider>
      </selectedComponentContext.Provider>
    </AbsolutedDiv>
  );
};

export default MainIndex;
