import React, { useEffect } from "react";
import { useThemeContext } from "@servesall/atoms";
import { Wrapper } from "./Container.style";
import { useAccordionContext } from "../../GlobalToggle";
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

export default function Container({ children, styles, eventKey }) {
  const { isActive } = useAccordionContext() || {};

  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 750,
        easing: Easing.bezier(0.19, 1.0, 0.22, 1.0),
      }),
    };
  });

  useEffect(() => {
    isActive != eventKey
      ? isActive
        ? (opacity.value = 0.5)
        : (opacity.value = 1)
      : (opacity.value = 1);
  }, [isActive]);

  const theme = useThemeContext();
  return (
    <Animated.View style={[animatedStyle]}>
      <Wrapper
        theme={theme}
        styles={styles}
        border={isActive != eventKey ? (isActive ? false : true) : false}
      >
        {children}
      </Wrapper>
    </Animated.View>
  );
}
