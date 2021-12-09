import React from "react";
import { View } from "react-native";
import {
  useThemeContext,
  H3,
  MarginHorizontal,
  Margin,
  Padding,
} from "@servesall/atoms";
import FlatDay from "./FlatDay";

const FlatMonth = ({ month, setRange, startDate, endDate }) => {
  const theme = useThemeContext();
  return (
    <View style={{ height: 370 }}>
      <Padding>
        <Margin>
          <H3>{month.title}</H3>
        </Margin>
      </Padding>
      <MarginHorizontal>
        <View style={{ flexDirection: "row", flex: 1, flexWrap: "wrap" }}>
          {month.datesArr.map((item, index) => {
            const setIndex = month.monthNum + item;
            const selected = startDate === setIndex || endDate === setIndex;
            const inRange = startDate < setIndex && endDate > setIndex;
            const isCompleteStart =
              startDate && endDate && startDate === setIndex;
            const isCompleteEnd = startDate && endDate && endDate === setIndex;
            return (
              <FlatDay
                onClick={setRange}
                theme={theme}
                day={item}
                index={setIndex}
                isSelected={selected}
                inRange={inRange}
                isCompleteStart={isCompleteStart}
                isCompleteEnd={isCompleteEnd}
                key={item ? setIndex : `${index}${month.title}`}
              />
            );
          })}
        </View>
      </MarginHorizontal>
    </View>
  );
};

export default FlatMonth;
