import React, { useContext, useState } from "react";
import { selectedComponentContext } from "../contexts/setDetailComponents";
import { useResponsive } from "../../Main/customHooks/useResponsive";
import {
  SwitchLayOut,
  SwitchContainer,
  Slider,
  SliderRound,
} from "../styles/styledComponents";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const { setSelectedComponent } = useContext(selectedComponentContext);
  const responsiveVar = useResponsive();

  const handleToggle = () => {
    if (isOn) setSelectedComponent("detail");
    else setSelectedComponent("statistics");
    setIsOn(!isOn);
  };

  return (
    <SwitchLayOut responsiveVar={responsiveVar}>
      <SwitchContainer>
        <Slider isOn={isOn} onClick={handleToggle}>
          <SliderRound isOn={isOn} />
        </Slider>
      </SwitchContainer>
    </SwitchLayOut>
  );
};

export default ToggleSwitch;
