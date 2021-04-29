import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import upload from "./upload.json";

const UploadIcon = () => {
  const uploadRef = useRef();

  return (
    <LottieView
      ref={uploadRef}
      style={{
        height: 120,
        width: 120,
        zIndex: 23,
      }}
      loop={false}
      source={upload}
    />
  );
};

export default UploadIcon;
