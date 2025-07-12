import React, { useState, useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { GreenBar } from "./Foreground.style";

export default function Foreground({ steps, currentStep, theme, colorCoded }) {
  const [activeStep, setActiveStep] = useState(currentStep);
  const stepsLenght = steps;
  const width = useSharedValue(0);

  function getColor() {
    if (colorCoded) {
      const percentage = (currentStep * 100) / stepsLenght;
      console.log(percentage);
      if (percentage <= 25) {
        return theme.orange;
      } else if (percentage <= 50) {
        return theme.yellow;
      } else if (percentage <= 75) {
        return theme.yellow;
      } else {
        return theme.green;
      }
    }
    return theme.green;
  }

  const animatedWidth = useAnimatedStyle(() => {
    return {
      width: width.value + "%",
      top: "50%",
      position: "absolute",
      left: 0,
    };
  });

  useEffect(() => {
    setActiveStep(currentStep);
    width.value = withTiming((currentStep * 100) / stepsLenght, {
      duration: 200,
      easing: Easing.out(Easing.exp),
    });
  }, [steps, currentStep]);

  return (
    <>
      <Animated.View style={[animatedWidth]}>
        <GreenBar theme={theme} color={getColor()} />
      </Animated.View>
    </>
  );
}
