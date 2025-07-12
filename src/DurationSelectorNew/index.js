import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import Duration from "./Duration";

const DURATION_SUBSET_IDS = [2, 3, 4, 5, 7, 9, 13, 17, 25, 33];

const DurationItem = React.memo(
  ({ duration = [], onSelect, isRadio = false, dafault_times = [] }) => {
    const [times, setTimes] = useState([]);
    const [toggledTimes, setToggledTimes] = useState(duration || []);

    function toHoursAndMinutes(totalMinutes) {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return `${hours}h${minutes > 0 ? ` ${minutes}m` : " 00m"}`;
    }

    useEffect(() => {
      const filteredTimes = dafault_times.filter((item) => {
        return DURATION_SUBSET_IDS.includes(item.id);
      });

      setTimes(filteredTimes);
    }, []);

    const filterTimes = ({ time, value }) => {
      if (!value) {
        const newArrOfTimes = toggledTimes.filter((item) => {
          return item.id !== time.id;
        });
        setToggledTimes(newArrOfTimes);
      } else {
        if (isRadio) {
          setToggledTimes([time]);
        } else {
          setToggledTimes((prevValue) => [...prevValue, time]);
        }
      }
    };

    useEffect(() => {
      onSelect(toggledTimes);
    }, [toggledTimes]);

    const renderItem = ({ item }) => {
      return (
        <Duration
          value={item.id}
          time={item.time}
          isActive={toggledTimes.some((time) => time.id === item.id)}
          durationToggle={({ value }) => filterTimes({ time: item, value })}
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
        <FlatList
          contentContainerStyle={{ paddingBottom: 100 }}
          data={times}
          keyExtractor={(item) => item.id}
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
