import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import Weekday from "./Weekday";

const Weekdays = React.memo(
  ({ days, onSelect, ListHeaderComponent = null }) => {
    const [weekdays, setWeekdays] = useState([]);

    useEffect(() => {
      if (days && weekdays.length === 0) {
        setWeekdays([...weekdays, ...days]);
      }
    }, [days]);

    const weekdayToggle = (value, day) => {
      if (day.length) {
        setWeekdays([...weekdays, ...day]);

        onSelect({ value: [...weekdays, ...day] });
      } else {
        const index = weekdays.indexOf(value);
        weekdays.splice(index, 1);

        setWeekdays(weekdays);

        onSelect({ value: weekdays });
      }
    };

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          {ListHeaderComponent && <ListHeaderComponent />}
          <Weekday
            dayName={"Monday"}
            dayValue={1}
            isActive={weekdays.includes(1)}
            weekdayToggle={(day) => weekdayToggle(1, day)}
          />
          <Weekday
            dayName={"Tuesday"}
            dayValue={2}
            isActive={weekdays.includes(2)}
            weekdayToggle={(day) => weekdayToggle(2, day)}
          />
          <Weekday
            dayName={"Wednesday"}
            dayValue={3}
            isActive={weekdays.includes(3)}
            weekdayToggle={(day) => weekdayToggle(3, day)}
          />
          <Weekday
            dayName={"Thursday"}
            dayValue={4}
            isActive={weekdays.includes(4)}
            weekdayToggle={(day) => weekdayToggle(4, day)}
          />
          <Weekday
            dayName={"Friday"}
            dayValue={5}
            isActive={weekdays.includes(5)}
            weekdayToggle={(day) => weekdayToggle(5, day)}
          />
          <Weekday
            dayName={"Saturday"}
            dayValue={6}
            isActive={weekdays.includes(6)}
            weekdayToggle={(day) => weekdayToggle(6, day)}
          />
          <Weekday
            dayName={"Sunday"}
            dayValue={7}
            isActive={weekdays.includes(7)}
            weekdayToggle={(day) => weekdayToggle(7, day)}
          />
        </ScrollView>
      </View>
    );
  }
);

export default Weekdays;
