import React, { useCallback, useEffect, useState, useRef } from "react";
import { View } from "react-native";
import {
  useThemeContext,
  H3,
  MarginHorizontal,
  PaddingVertical,
  Row,
  Center,
} from "@servesall/atoms";
import { FlatList } from "react-native-gesture-handler";
import startOfMonth from "date-fns/startOfMonth";
import FlatMonth from "./FlatMonth";

const year = new Date().getFullYear();

const calendar = [
  {
    month: "January",
    days: 31,
    monthNum: 100,
    firstDay: startOfMonth(new Date(year, 0)),
  },
  {
    month: "Febuary",
    days: 28,
    monthNum: 200,
    firstDay: startOfMonth(new Date(year, 1)),
  },
  {
    month: "March",
    days: 31,
    monthNum: 300,
    firstDay: startOfMonth(new Date(year, 2)),
  },
  {
    month: "April",
    days: 30,
    monthNum: 400,
    firstDay: startOfMonth(new Date(year, 3)),
  },
  {
    month: "May",
    days: 31,
    monthNum: 500,
    firstDay: startOfMonth(new Date(year, 4)),
  },
  {
    month: "June",
    days: 30,
    monthNum: 600,
    firstDay: startOfMonth(new Date(year, 5)),
  },
  {
    month: "July",
    days: 31,
    monthNum: 700,
    firstDay: startOfMonth(new Date(year, 6)),
  },
  {
    month: "August",
    days: 31,
    monthNum: 800,
    firstDay: startOfMonth(new Date(year, 7)),
  },
  {
    month: "September",
    days: 30,
    monthNum: 900,
    firstDay: startOfMonth(new Date(year, 8)),
  },
  {
    month: "October",
    days: 31,
    monthNum: 1000,
    firstDay: startOfMonth(new Date(year, 9)),
  },
  {
    month: "November",
    days: 30,
    monthNum: 1100,
    firstDay: startOfMonth(new Date(year, 10)),
  },
  {
    month: "December",
    days: 31,
    monthNum: 1200,
    firstDay: startOfMonth(new Date(year, 11)),
  },
];

const Weekdays = () => {
  const theme = useThemeContext();
  return (
    <View style={{ backgroundColor: theme.color1 }}>
      <MarginHorizontal>
        <PaddingVertical>
          <Row style={{ justifyContent: "space-between" }}>
            <Center style={{ minWidth: "14%" }}>
              <H3 fontFamily={theme.fontFamily2}>Mo</H3>
            </Center>
            <Center style={{ minWidth: "14%" }}>
              <H3 fontFamily={theme.fontFamily2}>Tu</H3>
            </Center>
            <Center style={{ minWidth: "14%" }}>
              <H3 fontFamily={theme.fontFamily2}>We</H3>
            </Center>
            <Center style={{ minWidth: "14%" }}>
              <H3 fontFamily={theme.fontFamily2}>Th</H3>
            </Center>
            <Center style={{ minWidth: "14%" }}>
              <H3 fontFamily={theme.fontFamily2}>Fr</H3>
            </Center>
            <Center style={{ minWidth: "14%" }}>
              <H3 fontFamily={theme.fontFamily2}>Sa</H3>
            </Center>
            <Center style={{ minWidth: "14%" }}>
              <H3 fontFamily={theme.fontFamily2}>Su</H3>
            </Center>
          </Row>
        </PaddingVertical>
      </MarginHorizontal>
    </View>
  );
};

const arrayOfDays = ({ firstDay, days }) => {
  const daysArray = [];
  for (let i = 1; i <= days; i++) {
    daysArray.push(i);
  }
  let firstDayFix = firstDay.getDay();
  if (firstDayFix === 0) firstDayFix = 7;
  for (let i = 2; i <= firstDayFix; i++) {
    daysArray.unshift(false);
  }

  return daysArray;
};

const renderMonth = () => {
  const DATA = [{ title: "weekdays", weekdays: true, id: "weekdays" }];
  calendar.map((item) => {
    DATA.push({
      title: item.month,
      id: item.month,
      monthNum: item.monthNum,
      datesArr: arrayOfDays({
        firstDay: item.firstDay,
        days: item.days,
      }),
    });
  });
  return DATA;
};

const FlatCalendar = React.memo(
  ({ start, end, onSelect, isOnedayRange, ListHeaderComponent }) => {
    const [startDate, setStartDate] = useState(start);
    const [endDate, setEndDate] = useState(end);
    const scrollEl = useRef();

    const setRange = (date) => {
      if (startDate && endDate) {
        setStartDate(date);
        setEndDate(false);
      }
      if (startDate && !endDate) {
        if (date < startDate) {
          setStartDate(date);
          setEndDate(false);
        } else {
          setEndDate(date);
        }
      }

      if (!startDate && !endDate) {
        setStartDate(date);
      }
    };

    useEffect(() => {
      startDate &&
        scrollEl.current.scrollToIndex({
          animated: false,
          index: Math.trunc(startDate / 100) - 1,
        });
    }, []);

    useEffect(() => {
      startDate && onSelect({ key: "startDate", value: startDate });
      endDate && onSelect({ key: "endDate", value: endDate });
    }, [startDate, endDate]);

    const renderItem = useCallback(
      ({ item }) => {
        if (item.weekdays) {
          return <Weekdays />;
        } else {
          return (
            <FlatMonth
              setRange={setRange}
              startDate={startDate}
              endDate={endDate}
              month={item}
            />
          );
        }
      },
      [startDate, endDate]
    );

    const keyExtractor = useCallback((item) => item.id, []);

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          ref={scrollEl}
          getItemLayout={(data, index) => ({
            length: 370,
            offset: 370 * index,
            index,
          })}
          data={renderMonth()}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          removeClippedSubviews={true}
          extraData={{ startDate, endDate }}
          windowSize={3}
          ListHeaderComponent={ListHeaderComponent}
          stickyHeaderIndices={[1]}
        />
      </View>
    );
  }
);

export default FlatCalendar;
