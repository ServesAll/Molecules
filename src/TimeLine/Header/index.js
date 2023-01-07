import React from "react";
import { View, Animated } from "react-native";

export default function HeaderWrapper({ children }) {
  return <View style={{ flex: 1 }}>{children}</View>;
}
