import React from "react";
import { Pressable, View } from "react-native";
import { H3 } from "@servesall/atoms";

const FlatDay = React.memo(
  ({
    day,
    theme,
    onClick,
    index,
    isSelected,
    inRange,
    isCompleteStart,
    isCompleteEnd,
  }) => {
    return (
      <Pressable
        onPress={() => onClick(index)}
        style={{
          width: "14%",
          height: 50,
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {inRange && (
          <View
            style={{
              backgroundColor: theme.color10,
              position: "absolute",
              width: "101%",
              height: 40,
              top: 5,
              zIndex: -1,
            }}
          />
        )}
        {isSelected && (
          <View
            style={{
              backgroundColor: theme.color2,
              position: "absolute",
              width: 50,
              height: 50,
              borderRadius: 25,
              zIndex: 2,
            }}
          />
        )}
        {isCompleteStart && (
          <View
            style={{
              backgroundColor: theme.color10,
              position: "absolute",
              width: "51%",
              height: 40,
              top: 5,
              right: 0,
              zIndex: -1,
            }}
          />
        )}
        {isCompleteEnd && (
          <View
            style={{
              backgroundColor: theme.color10,
              position: "absolute",
              width: "51%",
              height: 40,
              top: 5,
              left: 0,
              zIndex: -1,
            }}
          />
        )}
        <H3
          align="center"
          style={{ zIndex: 3 }}
          color={isSelected ? theme.color1 : theme.color2}
          fontFamily={theme.fontFamily2}
        >
          {day}
        </H3>
      </Pressable>
    );
  }
);

export default FlatDay;
