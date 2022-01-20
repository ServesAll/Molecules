import React, { useState, useEffect } from "react";
import {
  H3,
  useThemeContext,
  Switch,
  Margin,
  MarginHorizontal,
  CenterLeft,
  PaddingVertical,
  PaddingHorizontal,
} from "@servesall/atoms";

const Duration = React.memo(
  ({ name, value, isActive = false, durationToggle }) => {
    const { fontFamily2 } = useThemeContext();
    const [isEnabled, setIsEnabled] = useState(isActive);
    const toggleSwitch = () => {
      setIsEnabled((previousState) => !previousState);
    };

    useEffect(() => {
      setIsEnabled(isActive);
    }, [isActive]);

    useEffect(() => {
      isEnabled !== isActive &&
        durationToggle({ value: isEnabled ? value : 0 });
    }, [isEnabled]);

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
                    {name}
                  </H3>
                </Margin>
              </CenterLeft>
            </Switch>
          </PaddingVertical>
        </MarginHorizontal>
      </PaddingHorizontal>
    );
  }
);

export default Duration;
