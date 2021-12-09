import React from "react";
import { Dimensions } from "react-native";
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useDerivedValue,
  Easing,
} from "react-native-reanimated";
import { Body } from "./Body.style";

export default function BodyElement({ children, isOpen }) {
  const minHeight = useSharedValue(Dimensions.get("screen").height - 180);

  const transition = useDerivedValue(() => {
    return isOpen
      ? withSpring(minHeight.value, {
          damping: 10,
          stiffness: 90,
          mass: 0.5,
        })
      : withTiming(1, {
          duration: 250,
          easing: Easing.bezier(0.19, 1.0, 0.22, 1.0),
        });
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      minHeight: transition.value,
    };
  });

  return (
    <Animated.View
      style={[
        {
          minHeight: 1,
          overflow: "hidden",
        },
        animatedStyle,
      ]}
    >
      <Body isOpen={isOpen}>{children}</Body>
    </Animated.View>
  );
}
