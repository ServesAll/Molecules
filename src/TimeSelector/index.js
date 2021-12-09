import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { H2, Margin, MarginHorizontal } from "@servesall/atoms";
import { add, format } from "date-fns";
import Time from "./Time";

const DividerElement = ({ name, color }) => {
  return (
    <MarginHorizontal>
      <Margin>
        <H2 color={color}>{name}</H2>
      </Margin>
    </MarginHorizontal>
  );
};

const Times = React.memo(
  ({ timesSelected = [], onSelect, ListHeaderComponent = null }) => {
    const [interval, setInterval] = useState(30);
    const [times, setTimes] = useState([]);
    const [toggledTimes, setToggledTimes] = useState(timesSelected);

    useEffect(() => {
      let hoursArray = [];
      if (interval === 30) {
        hoursArray = [
          240, 270, 300, 330, 360, 390, 420, 450, 480, 510, 540, 570, 600, 630,
          660, 690, 720, 750, 780, 810, 840, 870, 900, 930, 960, 990, 1020,
          1050, 1080, 1110, 1140, 1170, 1200, 1230, 1260, 1290, 1320, 1350,
          1380, 1410, 1440, 30, 60, 90, 120, 150, 180, 210,
        ];
      } else {
        hoursArray = [
          240, 300, 360, 420, 480, 540, 600, 660, 720, 780, 840, 900, 960, 1020,
          1080, 1140, 1200, 1260, 1320, 1380, 1440, 60, 120, 180,
        ];
      }
      const hourArr = [];
      hoursArray.map((item) => {
        hourArr.push({
          time: format(
            add(new Date("2021-01-01T00:00:00.000+01:00"), {
              minutes: item,
            }),
            "hh:mm bbbb"
          ),
          minuteValue: item,
        });
      });

      setTimes(hourArr);
    }, [interval]);

    const filterTimes = ({ minuteValue, value }) => {
      if (!value) {
        const newArrOfTimes = toggledTimes.filter((item) => {
          return item !== minuteValue;
        });
        setToggledTimes(newArrOfTimes);
        onSelect({ key: "times", value: newArrOfTimes });
      } else {
        const newArrOfTimes = toggledTimes.filter((item) => {
          return item !== minuteValue;
        });
        setToggledTimes([...newArrOfTimes, minuteValue]);
        onSelect({
          key: "times",
          value: [...newArrOfTimes, minuteValue],
        });
      }
    };

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <ListHeaderComponent />
          {times.map(({ time, minuteValue }) => {
            return (
              <View key={minuteValue}>
                {minuteValue >= 240 && minuteValue < 270 && (
                  <DividerElement name="Morning" />
                )}
                {minuteValue >= 720 && minuteValue < 750 && (
                  <DividerElement name="Afternoon" />
                )}
                {minuteValue >= 1020 && minuteValue < 1050 && (
                  <DividerElement name="Evening" />
                )}
                {minuteValue >= 1440 && <DividerElement name="Night" />}
                <Time
                  isActive={toggledTimes.includes(minuteValue)}
                  time={time}
                  timeToggle={(value) => {
                    filterTimes({ minuteValue, value });
                  }}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
);

export default Times;
