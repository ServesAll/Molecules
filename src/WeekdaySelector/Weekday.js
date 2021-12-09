import React, { useState, useEffect } from "react";
import { Switch } from "react-native";
import {
  H3,
  useThemeContext,
  Stretch,
  Row,
  Padding,
  MarginHorizontal,
  CenterLeft,
  PaddingVertical,
  PaddingHorizontal,
} from "@servesall/atoms";

const Weekday = React.memo(({ dayName, isActive = false, weekdayToggle }) => {
  const { color1, color2, color11, color7, fontFamily2 } = useThemeContext();
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
        <Padding style={{ borderBottomWidth: 1, borderColor: color7 }}>
          <PaddingVertical>
            <Stretch>
              <Row style={{ justifyContent: "space-between" }}>
                <CenterLeft>
                  <H3
                    fontFamily={fontFamily2}
                    style={{ textTransform: "capitalize" }}
                  >
                    {dayName}
                  </H3>
                </CenterLeft>
                <Switch
                  trackColor={{ false: color2, true: color11 }}
                  thumbColor={isActive ? color1 : color1}
                  ios_backgroundColor={color2}
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </Row>
            </Stretch>
          </PaddingVertical>
        </Padding>
      </MarginHorizontal>
    </PaddingHorizontal>
  );
});

export default Weekday;
