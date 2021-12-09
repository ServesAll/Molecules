import React from "react";
import { View } from "react-native";
import { useThemeContext, Margin } from "@servesall/atoms";

export default function GhostDate() {
  const theme = useThemeContext();
  return (
    <View style={{ flex: 1 }}>
      <Margin>
        <View
          style={{
            width: 200,
            height: 40,
            borderRadius: 20,
            backgroundColor: theme.color7,
          }}
        />
      </Margin>
      <Margin>
        <View
          style={{
            flex: 1,
            height: 320,
            borderRadius: 20,
            backgroundColor: theme.color7,
          }}
        />
      </Margin>
      <Margin>
        <View
          style={{
            width: 200,
            height: 40,
            borderRadius: 20,
            backgroundColor: theme.color7,
          }}
        />
      </Margin>
      <Margin>
        <View
          style={{
            flex: 1,
            height: 320,
            borderRadius: 20,
            backgroundColor: theme.color7,
          }}
        />
      </Margin>
    </View>
  );
}
