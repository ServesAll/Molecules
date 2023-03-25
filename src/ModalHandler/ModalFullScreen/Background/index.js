import React from "react";
import { View } from "react-native";
import { useThemeContext } from "@servesall/atoms";

const Backdrop = ({ style }) => {
  const theme = useThemeContext();
  return (
    <View
      style={[
        {
          borderRadius: 0,
          backgroundColor: theme.color1,
          borderTopWidth: 2,
          borderColor: theme.color7,
        },
        { ...style },
      ]}
    />
  );
};

export default Backdrop;
