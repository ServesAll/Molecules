import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Padding, Center, useThemeContext } from "@servesall/atoms";

export default function DropArea({ width }) {
  const { color11border } = useThemeContext();
  return (
    <View style={{ width: width, height: width }}>
      <Center>
        <View
          style={{
            backgroundColor: color11border,
            width: 24,
            height: 24,
            borderRadius: 12,
          }}
        ></View>
      </Center>
    </View>
  );
}
