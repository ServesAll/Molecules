import React, { useState } from "react";
import {
  H3,
  useThemeContext,
  Switch,
  MarginHorizontal,
  Margin,
  CenterLeft,
  PaddingVertical,
} from "@servesall/atoms";

const Time = React.memo(({ time, isActive = false, timeToggle }) => {
  const { fontFamily2, greenLight, greenDark, color1, color2 } =
    useThemeContext();
  const [isEnabled, setIsEnabled] = useState(isActive);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    timeToggle(!isEnabled);
  };

  return (
    <MarginHorizontal>
      <PaddingVertical>
        <Switch
          fat={true}
          style={{ backgroundColor: isEnabled ? greenLight : color1 }}
          value={isEnabled}
          onValueChange={(value) => toggleSwitch()}
        >
          <CenterLeft>
            <Margin>
              <H3 color={isEnabled ? greenDark : color2}>{time}</H3>
            </Margin>
          </CenterLeft>
        </Switch>
      </PaddingVertical>
    </MarginHorizontal>
  );
});

export default Time;
