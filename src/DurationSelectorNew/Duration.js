import React, { useState, useEffect } from "react";
import {
  H3,
  useThemeContext,
  Switch,
  Margin,
  MarginHorizontal,
  CenterLeft,
  PaddingTop,
} from "@servesall/atoms";

const Duration = React.memo(
  ({ time, value, isActive = false, durationToggle }) => {
    const { fontFamily2, greenLight, greenDark, color1, color2 } =
      useThemeContext();
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
      <MarginHorizontal>
        <PaddingTop>
          <Switch
            fat={true}
            style={{ backgroundColor: isEnabled ? greenLight : color1 }}
            value={isEnabled}
            onValueChange={(value) => toggleSwitch()}
            radio={true}
          >
            <CenterLeft>
              <Margin>
                <H3 color={isEnabled ? greenDark : color2}>
                  {`${time / 60000} minutes`}
                  {time >= 3600000
                    ? ` (${
                        Math.floor(time / 3600000) === time / 3600000
                          ? Math.floor(time / 3600000)
                          : (time / 3600000).toFixed(1)
                      }h)`
                    : ""}
                </H3>
              </Margin>
            </CenterLeft>
          </Switch>
        </PaddingTop>
      </MarginHorizontal>
    );
  }
);

export default Duration;
