import React from "react";
import { useThemeContext } from "@servesall/atoms";
import FlatCalendar from "./FlatCalendar";

const DateRange = React.memo(
  ({
    startDate = false,
    endDate = false,
    isOnedayRange = false,
    onSelect,
    ListHeaderComponent = null,
  }) => {
    const theme = useThemeContext();
    return (
      <>
        <FlatCalendar
          isOnedayRange={isOnedayRange}
          theme={theme}
          start={startDate}
          end={endDate}
          onSelect={onSelect}
          ListHeaderComponent={ListHeaderComponent && <ListHeaderComponent />}
        />
      </>
    );
  }
);

export default DateRange;
