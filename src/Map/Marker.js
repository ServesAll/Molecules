import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import marker from "./newMarker.json";

const MarkerAnimation = ({ isMoving }) => {
  const markerRef = useRef();

  useEffect(() => {
    if (isMoving) {
      markerRef.current.play(0, 21);
    } else {
      markerRef.current.play(21, 46);
    }
  }, [isMoving]);

  return (
    <LottieView
      ref={markerRef}
      style={{
        height: 80,
        width: 80,
        zIndex: 23,
      }}
      loop={false}
      source={marker}
    />
  );
};

export default MarkerAnimation;
