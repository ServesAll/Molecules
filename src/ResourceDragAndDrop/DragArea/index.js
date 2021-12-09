import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import ResourceDraggable from "./ResourceDraggable";

const DEFAULT_RESOURCE_IMAGES = {};

export default function DragArea({ resources = [] }) {
  return (
    <ScrollView horizontal={true}>
      {resources.map(() => {
        return <ResourceDraggable />;
      })}
    </ScrollView>
  );
}
