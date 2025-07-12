import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressIndicator = ({
  screenIndex,
  screenLength,
  colorCoded = false,
}) => {
  return (
    <ProgressBar
      activeScreen={screenIndex}
      screenLength={screenLength}
      colorCoded={colorCoded}
    />
  );
};

export default ProgressIndicator;
