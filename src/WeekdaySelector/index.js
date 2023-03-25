import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import Weekday from "./Weekday";

const Weekdays = React.memo(
  ({ days, onSelect, ListHeaderComponent = null }) => {
    const [weekdays, setWeekdays] = useState({
      monday: false,
      tuesday: false,
      wednesday: false,
      thursday: false,
      friday: false,
      saturday: false,
      sunday: false,
    });

    useEffect(() => {
      if (days) {
        setWeekdays({ ...weekdays, ...days });
      }
    }, [days]);

    const weekdayToggle = ({ day }) => {
      const newWeekdays = { ...weekdays, ...day };
      setWeekdays(newWeekdays);
      onSelect({ value: newWeekdays });
    };

    return (
      <View style={{ flex: 1 }}>
        <BottomSheetScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          {ListHeaderComponent && <ListHeaderComponent />}
          <Weekday
            dayName={"monday"}
            isActive={weekdays.monday}
            weekdayToggle={({ day }) => weekdayToggle({ day })}
          />
          <Weekday
            dayName={"tuesday"}
            isActive={weekdays.tuesday}
            weekdayToggle={({ day }) => weekdayToggle({ day })}
          />
          <Weekday
            dayName={"wednesday"}
            isActive={weekdays.wednesday}
            weekdayToggle={({ day }) => weekdayToggle({ day })}
          />
          <Weekday
            dayName={"thursday"}
            isActive={weekdays.thursday}
            weekdayToggle={({ day }) => weekdayToggle({ day })}
          />
          <Weekday
            dayName={"friday"}
            isActive={weekdays.friday}
            weekdayToggle={({ day }) => weekdayToggle({ day })}
          />
          <Weekday
            dayName={"saturday"}
            isActive={weekdays.saturday}
            weekdayToggle={({ day }) => weekdayToggle({ day })}
          />
          <Weekday
            dayName={"sunday"}
            isActive={weekdays.sunday}
            weekdayToggle={({ day }) => weekdayToggle({ day })}
          />
        </BottomSheetScrollView>
      </View>
    );
  }
);

export default Weekdays;
