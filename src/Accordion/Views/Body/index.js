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

function BodyElement({ children, isOpen, isNormal = false }) {
  const minHeight = useSharedValue(
    isNormal ? 100 : Dimensions.get("screen").height - 200
  );

  const transition = useDerivedValue(() => {
    return isOpen
      ? withTiming(minHeight.value, {
          duration: 200,
          easing: Easing.bezier(0.19, 1.0, 0.22, 1.0),
        })
      : withTiming(1, {
          duration: 200,
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
      <Body isOpen={isOpen}>{isOpen && children}</Body>
    </Animated.View>
  );
}

export default React.memo(BodyElement);
