import MainPage from "./page";
import { useState } from "react";
import { toggleOnContext } from "../CommonContext/toggleOnContext";
import { AbsolutedDiv } from "../CommonComponents/StyledComponents/AbsolutedDiv";
import { selectedComponentContext } from "../CommonContext/selectedComponentContext";

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
