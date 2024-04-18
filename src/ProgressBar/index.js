import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressIndicator = ({ screenIndex, screenLength }) => {
  return <ProgressBar activeScreen={screenIndex} screenLength={screenLength} />;
};

export default ProgressIndicator;
