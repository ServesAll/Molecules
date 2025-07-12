import React, { useState, useEffect } from "react";
import {
  H3,
  useThemeContext,
  CenterLeft,
  Margin,
  PaddingTop,
  PaddingHorizontal,
  Switch,
} from "@servesall/atoms";

const Weekday = React.memo(
  ({ dayName, dayValue, isActive = false, weekdayToggle }) => {
    const { greenDark, greenLight, color1, color2 } = useThemeContext();
    const [isEnabled, setIsEnabled] = useState(isActive);

    useEffect(() => {
      setIsEnabled(isActive);
    }, [isActive]);

    return (
      <PaddingHorizontal>
        <PaddingTop>
          <Switch
            fat={true}
            value={isEnabled}
            onValueChange={(value) => {
              setIsEnabled((previousState) => !previousState);
              weekdayToggle(value ? [dayValue] : []);
            }}
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
        </PaddingTop>
      </PaddingHorizontal>
    );
  }
);

export default Weekday;
