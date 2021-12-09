import React, { useEffect, useState } from "react";
import { View, Dimensions } from "react-native";
import { Margin, Row, useThemeContext } from "@servesall/atoms";
import DropZone from "./DropZone";

const windowWidth = Dimensions.get("window").width;

const DEFAULT_SIZES = {
  1: 16,
};

export default function DropArea({ category_id = 1 }) {
  const { color11light, color11border } = useThemeContext();
  const Area = (windowWidth - 42) * (windowWidth - 42);
  const ChildArea = Area / DEFAULT_SIZES[category_id];
  const ChildWidth = Math.sqrt(ChildArea);

  const items = [];

  for (let i = 1; i <= DEFAULT_SIZES[category_id]; i++) {
    items.push(<DropZone width={ChildWidth} key={i} />);
  }

  return (
    <Margin style={{ flex: 1 }}>
      <View
        style={{
          height: windowWidth - 40,
          width: windowWidth - 40,
          backgroundColor: color11light,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: color11border,
        }}
      >
        <Row
          style={{
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          {items}
        </Row>
      </View>
    </Margin>
  );
}
