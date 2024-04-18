import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { GreenBar, GreenStep, PulseWrapper } from "./Foreground.style";
import green_pulse from "./green_pulse.json";

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
    /*
    const success = steps.findIndex((object) => {
      return object.success;
    });
    
    setSuccessStep(success);
    */
    width.value = withTiming(((currentStep + 1) * 100) / (stepsLenght + 1), {
      duration: 200,
      easing: Easing.out(Easing.exp),
    });
  }, [steps, currentStep]);

  /*

   <PulseWrapper left={((activeStep + 1) * 100) / (stepsLenght + 1)}>
        <LottieView
          style={{
            width: 32,
          }}
          autoPlay={true}
          loop={true}
          source={green_pulse}
        />
      </PulseWrapper>
      */

  return (
    <>
      <Animated.View style={[animatedWidth]}>
        <GreenBar theme={theme} />
      </Animated.View>
    </>
  );
}
