import React, { useState } from "react";
import {
  H3,
  useThemeContext,
  Switch,
  PaddingHorizontal,
  MarginHorizontal,
  Margin,
  CenterLeft,
  PaddingVertical,
} from "@servesall/atoms";

const Time = React.memo(({ time, isActive = false, timeToggle }) => {
  const { fontFamily2 } = useThemeContext();
  const [isEnabled, setIsEnabled] = useState(isActive);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    timeToggle(!isEnabled);
  };

  return (
    <PaddingHorizontal>
      <MarginHorizontal>
        <PaddingVertical>
          <Switch value={isEnabled} onValueChange={(value) => toggleSwitch()}>
            <CenterLeft>
              <Margin>
                <H3 fontFamily={fontFamily2}>{time}</H3>
              </Margin>
            </CenterLeft>
          </Switch>
        </PaddingVertical>
      </MarginHorizontal>
    </PaddingHorizontal>
  );
});

export default Time;
