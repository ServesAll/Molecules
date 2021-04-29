import React from "react";
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
  const height = useSharedValue(1);

  const transition = useDerivedValue(() => {
    return isOpen
      ? withSpring(height.value, {
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
      height: transition.value,
    };
  });

  return (
    <Animated.View
      style={[
        {
          height: 1,
          overflow: "hidden",
        },
        animatedStyle,
      ]}
    >
      <Body
        isOpen={isOpen}
        onLayout={(e) => (height.value = e.nativeEvent.layout.height)}
      >
        {children}
      </Body>
    </Animated.View>
  );
}
