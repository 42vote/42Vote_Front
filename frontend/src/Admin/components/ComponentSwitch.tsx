import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { selectedComponentContext } from '../contexts/setDetailComponents';

const SwitchContainer = styled.div`
  position: absolute;
  display: inline-block;
  width: 3.3333rem; /* Converted from 50px */
  height: 1.6rem; /* Converted from 24px */
`;

const Slider = styled.span<{ isOn: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => (props.isOn ? '#000' : '#ddd')};
  transition: 0.4s;
  border-radius: 2.2667rem; /* Converted from 34px */
`;

const SliderRound = styled.span<{ isOn: boolean }>`
  position: absolute;
  content: '';
  height: 1.0667rem; /* Converted from 16px */
  width: 1.0667rem; /* Converted from 16px */
  left: 0.2667rem; /* Converted from 4px */
  bottom: 0.2667rem; /* Converted from 4px */
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
  transform: translateX(${props => (props.isOn ? '1.7333rem' : '0')}); /* Converted from 26px */
`;

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  const { setSelectedComponent } = useContext(
    selectedComponentContext
  );

  const handleToggle = () => {
    if (isOn)
        setSelectedComponent("detail");
    else
        setSelectedComponent("statistics"); 
    setIsOn(!isOn);
  };

  return (
    <SwitchContainer>
        <Slider isOn={isOn} onClick={handleToggle}>
          <SliderRound isOn={isOn} />
        </Slider>
    </SwitchContainer>
  );
};

export default ToggleSwitch;
