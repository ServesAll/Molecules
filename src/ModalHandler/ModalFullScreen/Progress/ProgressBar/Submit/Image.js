import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import rocket from "./rocket.json";

export default function AnimatedHeader() {
  const animationSubmit = useRef(null);

  useEffect(() => {
    animationSubmit.current.play(12, 132);
  }, []);

  return (
    <LottieView
      resizeMode="contain"
      autoPlay={true}
      loop={true}
      ref={animationSubmit}
      source={rocket}
    />
  );
}
