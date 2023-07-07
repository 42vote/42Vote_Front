import React, { useContext } from "react";
import { selectedComponentContext } from "../contexts/setDetailComponents";
import { useResponsive } from "../../Main/customHooks/useResponsive";
import {
  SwitchLayOut,
  SwitchContainer,
  Slider,
  SliderRound,
} from "../styles/styledComponents";
import { toggleOnContext } from "../contexts/setToggle";

interface toggleOption {
  on: string;
  off: string;
}

const ToggleSwitch = (prop: toggleOption) => {
  const { setSelectedComponent } = useContext(selectedComponentContext);
  const { toggleOn, setToggleOn } = useContext(toggleOnContext);
  const responsiveVar = useResponsive();

  const handleToggle = () => {
    if (toggleOn) setSelectedComponent(prop.off);
    else setSelectedComponent(prop.on);
    setToggleOn(!toggleOn);
  };

  return (
    <SwitchLayOut responsiveVar={responsiveVar}>
      <SwitchContainer>
        <Slider isOn={toggleOn} onClick={handleToggle}>
          <SliderRound isOn={toggleOn} />
        </Slider>
      </SwitchContainer>
    </SwitchLayOut>
  );
};

export default ToggleSwitch;
