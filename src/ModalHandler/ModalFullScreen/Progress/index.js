import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import ProgressBar from "./ProgressBar";

const Progress = ({ back, screenIndex, screenLength }) => {
  const navigation = useNavigation();

  const closeWindow = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <ProgressBar
      activeScreen={screenIndex}
      screenLength={screenLength}
      closeWindow={closeWindow}
      back={back}
    />
  );
};

export default Progress;
