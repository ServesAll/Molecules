import React, { useState, useEffect } from "react";
import {
  H3,
  useThemeContext,
  CenterLeft,
  MarginHorizontal,
  Margin,
  PaddingVertical,
  PaddingHorizontal,
  Switch,
} from "@servesall/atoms";

const Weekday = React.memo(({ dayName, isActive = false, weekdayToggle }) => {
  const { fontFamily2, greenDark, greenLight, color1, color2 } =
    useThemeContext();
  const [isEnabled, setIsEnabled] = useState(isActive);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    const returnWeek = {};
    returnWeek[dayName] = !isEnabled;
    weekdayToggle({ day: returnWeek });
  };

  useEffect(() => {
    setIsEnabled(isActive);
  }, [isActive]);

  return (
    <MarginHorizontal>
      <PaddingVertical>
        <Switch
          fat={true}
          value={isEnabled}
          onValueChange={(value) => toggleSwitch()}
          style={{ backgroundColor: isEnabled ? greenLight : color1 }}
        >
          <CenterLeft>
            <Margin>
              <H3
                color={isEnabled ? greenDark : color2}
                style={{ textTransform: "capitalize" }}
              >
                {dayName}
              </H3>
            </Margin>
          </CenterLeft>
        </Switch>
      </PaddingVertical>
    </MarginHorizontal>
  );
});

export default Weekday;
