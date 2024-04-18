import React, { useState, useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { GreenBar } from "./Foreground.style";

export default function Foreground({ steps, currentStep, theme }) {
  const [activeStep, setActiveStep] = useState(currentStep);
  const stepsLenght = steps - 1;
  const width = useSharedValue(0);

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
    width.value = withTiming(((currentStep + 1) * 100) / (stepsLenght + 1), {
      duration: 200,
      easing: Easing.out(Easing.exp),
    });
  }, [steps, currentStep]);

  return (
    <>
      <Animated.View style={[animatedWidth]}>
        <GreenBar theme={theme} />
      </Animated.View>
    </>
  );
}
