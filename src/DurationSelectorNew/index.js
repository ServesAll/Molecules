import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import Duration from "./Duration";

const DurationItem = React.memo(
  ({
    duration = [],
    onSelect,
    isRadio = false,
    ListHeaderComponent = null,
  }) => {
    const [times, setTimes] = useState([]);
    const [toggledTimes, setToggledTimes] = useState(duration || []);

    function toHoursAndMinutes(totalMinutes) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return `${hours}h${minutes > 0 ? ` ${minutes}m` : " 00m"}`;
    }

    useEffect(() => {
      const hoursArray = [
        15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225,
        240, 255, 270, 285, 300, 315, 330, 345, 360, 375, 390, 405, 420, 435,
        450, 465, 480,
      ];

      const hourArr = [];
      hoursArray.map((item) => {
        hourArr.push({
          time: toHoursAndMinutes(item),
          minuteValue: item,
        });
      });

      setTimes(hourArr);
    }, []);

    const filterTimes = ({ minuteValue, value }) => {
      if (!value) {
        const newArrOfTimes = toggledTimes.filter((item) => {
          return item !== minuteValue;
        });
        setToggledTimes(newArrOfTimes);
      } else {
        if (isRadio) {
          setToggledTimes([minuteValue]);
        } else {
          setToggledTimes((prevValue) => [...prevValue, minuteValue]);
        }
      }
    };

    useEffect(() => {
      onSelect({
        value: toggledTimes,
      });
    }, [toggledTimes]);

    const renderItem = ({ item }) => {
      return (
        <Duration
          value={item.minuteValue}
          name={item.time}
          isActive={toggledTimes.includes(item.minuteValue)}
          durationToggle={({ value }) =>
            filterTimes({ minuteValue: item.minuteValue, value })
          }
        />
      );
    };

    const ITEM_HEIGHT = 65; // fixed height of item component
    const getItemLayout = (data, index) => {
      return {
        length: ITEM_HEIGHT,
        offset: ITEM_HEIGHT * index,
        index,
      };
    };

    return (
      <View style={{ flex: 1 }}>
        <BottomSheetFlatList
          contentContainerStyle={{ paddingBottom: 100 }}
          data={times}
          keyExtractor={(item) => item.minuteValue}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          initialNumToRender={7}
          maxToRenderPerBatch={7}
          removeClippedSubviews={true}
          windowSize={3}
        />
      </View>
    );
  }
);

export default DurationItem;
