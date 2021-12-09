import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Margin } from "@servesall/atoms";
import Duration from "./Duration";

const DurationItem = React.memo(
  ({ duration = 0, onSelect, ListHeaderComponent = null }) => {
    const hour = duration < 60 ? 0 : Math.floor(duration / 60);
    const minute = duration < 60 ? duration : duration % 60;

    const [durationHour, setDurationHour] = useState(hour);
    const [durationMinute, setDurationMinute] = useState(minute);

    const durationToggle = ({ value, variant, hour }) => {
      if (variant === "minute") {
        setDurationMinute(value);
        if (hour === 0) {
          setDurationHour(0);
        }
      } else {
        setDurationHour(value);
        setDurationMinute(0);
      }
    };

    useEffect(() => {
      onSelect({ value: durationHour * 60 + durationMinute });
    }, [durationHour, durationMinute]);

    const MinuteValues = ({ selectedHour }) => {
      return (
        <Margin>
          <Duration
            value={15}
            name={"15 minutes"}
            isActive={durationMinute === 15 && selectedHour === durationHour}
            durationToggle={({ value }) =>
              durationToggle({ value, variant: "minute" })
            }
          />
          <Duration
            value={30}
            name={"30 minutes"}
            isActive={durationMinute === 30 && selectedHour === durationHour}
            durationToggle={({ value }) =>
              durationToggle({ value, variant: "minute" })
            }
          />
          <Duration
            value={45}
            name={"45 munites"}
            isActive={durationMinute === 45 && selectedHour === durationHour}
            durationToggle={({ value }) =>
              durationToggle({ value, variant: "minute" })
            }
          />
        </Margin>
      );
    };

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <ListHeaderComponent />
          <Duration
            value={15}
            name={"15 minutes"}
            isActive={
              durationHour === 0.25 ||
              (durationHour === 0 && durationMinute === 15)
            }
            durationToggle={({ value }) =>
              durationToggle({ value, variant: "minute", hour: 0 })
            }
          />
          <Duration
            value={30}
            name={"30 minutes"}
            isActive={
              durationHour === 0.5 ||
              (durationHour === 0 && durationMinute === 30)
            }
            durationToggle={({ value }) =>
              durationToggle({ value, variant: "minute", hour: 0 })
            }
          />
          <Duration
            value={45}
            name={"45 minutes"}
            isActive={
              durationHour === 0.75 ||
              (durationHour === 0 && durationMinute === 45)
            }
            durationToggle={({ value }) =>
              durationToggle({ value, variant: "minute", hour: 0 })
            }
          />
          <Duration
            value={1}
            name={"1 hour"}
            isActive={durationHour === 1}
            durationToggle={({ value }) => durationToggle({ value })}
          />
          {durationHour === 1 && <MinuteValues selectedHour={1} />}
          <Duration
            value={2}
            name={"2 hours"}
            isActive={durationHour === 2}
            durationToggle={({ value }) => durationToggle({ value })}
          />
          {durationHour === 2 && <MinuteValues selectedHour={2} />}
          <Duration
            value={3}
            name={"3 hours"}
            isActive={durationHour === 3}
            durationToggle={({ value }) => durationToggle({ value })}
          />
          {durationHour === 3 && <MinuteValues selectedHour={3} />}
          <Duration
            value={4}
            name={"4 hours"}
            isActive={durationHour === 4}
            durationToggle={({ value }) => durationToggle({ value })}
          />
          {durationHour === 4 && <MinuteValues selectedHour={4} />}
          <Duration
            value={5}
            name={"5 hours"}
            isActive={durationHour === 5}
            durationToggle={({ value }) => durationToggle({ value })}
          />
          {durationHour === 5 && <MinuteValues selectedHour={5} />}
          <Duration
            value={6}
            name={"6 hours"}
            isActive={durationHour === 6}
            durationToggle={({ value }) => durationToggle({ value })}
          />
          {durationHour === 6 && <MinuteValues selectedHour={6} />}
          <Duration
            value={7}
            name={"7 hours"}
            isActive={durationHour === 7}
            durationToggle={({ value }) => durationToggle({ value })}
          />
          {durationHour === 7 && <MinuteValues selectedHour={7} />}
          <Duration
            value={8}
            name={"8 hours"}
            isActive={durationHour === 8}
            durationToggle={({ value }) => durationToggle({ value })}
          />
          {durationHour === 8 && <MinuteValues selectedHour={8} />}
          <Duration
            value={9}
            name={"9 hours"}
            isActive={durationHour === 9}
            durationToggle={({ value }) => durationToggle({ value })}
          />
          {durationHour === 9 && <MinuteValues selectedHour={9} />}
          <Duration
            value={10}
            name={"10 hours"}
            isActive={durationHour === 10}
            durationToggle={({ value }) => durationToggle({ value })}
          />
          {durationHour === 10 && <MinuteValues selectedHour={10} />}
          <Duration
            value={11}
            name={"11 hours"}
            isActive={durationHour === 11}
            durationToggle={({ value }) => durationToggle({ value })}
          />
          {durationHour === 11 && <MinuteValues selectedHour={11} />}
          <Duration
            value={12}
            name={"12 hours"}
            isActive={durationHour === 12}
            durationToggle={({ value }) => durationToggle({ value })}
          />
          {durationHour === 12 && <MinuteValues selectedHour={12} />}
        </ScrollView>
      </View>
    );
  }
);

export default DurationItem;
