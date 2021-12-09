import React, { useEffect, useState } from "react";
import { View } from "react-native";
import DragArea from "./DragArea";
import DropArea from "./DropArea";

export default function ResourceDragAndDrop() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 8 }}>
        <DropArea />
      </View>
      <View style={{ flex: 1 }}>
        <DragArea />
      </View>
    </View>
  );
}
