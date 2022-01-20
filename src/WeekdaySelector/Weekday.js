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
  const { fontFamily2 } = useThemeContext();
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
    <PaddingHorizontal>
      <MarginHorizontal>
        <PaddingVertical>
          <Switch value={isEnabled} onValueChange={(value) => toggleSwitch()}>
            <CenterLeft>
              <Margin>
                <H3
                  fontFamily={fontFamily2}
                  style={{ textTransform: "capitalize" }}
                >
                  {dayName}
                </H3>
              </Margin>
            </CenterLeft>
          </Switch>
        </PaddingVertical>
      </MarginHorizontal>
    </PaddingHorizontal>
  );
});

export default Weekday;
