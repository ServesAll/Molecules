import React, { useState, useEffect } from "react";
import {
  H3,
  useThemeContext,
  Switch,
  MarginHorizontal,
  Margin,
  CenterLeft,
  PaddingTop,
} from "@servesall/atoms";
import Animated, { FadeInUp } from "react-native-reanimated";

const Time = ({ time, timeToggle, toggledTimes }) => {
  const { greenLight, greenDark, color1, color2 } = useThemeContext();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    timeToggle(!isEnabled);
  };

  useEffect(() => {
    setIsEnabled(toggledTimes.some((item) => item.id === time.id));
  }, [toggledTimes]);

  return (
    <Animated.View key={time.id} entering={FadeInUp.duration(300)}>
      <MarginHorizontal>
        <PaddingTop>
          <Switch
            fat={true}
            style={{ backgroundColor: isEnabled ? greenLight : color1 }}
            value={isEnabled}
            onValueChange={(value) => toggleSwitch()}
          >
            <CenterLeft>
              <Margin>
                <H3 color={isEnabled ? greenDark : color2}>
                  {new Date(time.time).toLocaleTimeString("en-GB", {
                    timeStyle: "short",
                    timeZone: "UTC",
                  })}
                </H3>
              </Margin>
            </CenterLeft>
          </Switch>
        </PaddingTop>
      </MarginHorizontal>
    </Animated.View>
  );
};

export default Time;
