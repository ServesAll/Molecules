import React, { useState, useEffect, useCallback } from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import {
  Margin,
  Row,
  H4,
  Switch,
  CenterLeft,
  MarginRight,
  MarginHorizontal,
  useThemeContext,
  MarginTop,
  PaddingTop,
  BorderBottom,
} from "@servesall/atoms";
import Time from "./Time";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
  withSpring,
} from "react-native-reanimated";

function Custom({ interval, setInterval, theme }) {
  return (
    <View>
      <MarginHorizontal>
        <MarginTop>
          <H4>Every</H4>
        </MarginTop>
      </MarginHorizontal>
      <Margin>
        <Row style={{ justifyContent: "space-between" }}>
          <Switch
            fat={true}
            style={{
              backgroundColor:
                interval == 900000 ? theme.greenLight : theme.color1,
            }}
            value={interval == 900000}
            onValueChange={(value) => setInterval(value ? 900000 : false)}
          >
            <CenterLeft>
              <Margin>
                <MarginRight>
                  <MarginRight>
                    <H4
                      color={
                        interval == 900000 ? theme.greenDark : theme.color2
                      }
                    >
                      15m
                    </H4>
                  </MarginRight>
                </MarginRight>
              </Margin>
            </CenterLeft>
          </Switch>
          <MarginHorizontal>
            <Switch
              fat={true}
              style={{
                backgroundColor:
                  interval == 1800000 ? theme.greenLight : theme.color1,
              }}
              value={interval == 1800000}
              onValueChange={(value) => setInterval(value ? 1800000 : false)}
            >
              <CenterLeft>
                <Margin>
                  <MarginRight>
                    <MarginRight>
                      <H4
                        color={
                          interval == 1800000 ? theme.greenDark : theme.color2
                        }
                      >
                        30m
                      </H4>
                    </MarginRight>
                  </MarginRight>
                </Margin>
              </CenterLeft>
            </Switch>
          </MarginHorizontal>
          <Switch
            fat={true}
            style={{
              backgroundColor:
                interval == 3600000 ? theme.greenLight : theme.color1,
            }}
            value={interval == 3600000}
            onValueChange={(value) => setInterval(value ? 3600000 : false)}
          >
            <CenterLeft>
              <Margin>
                <MarginRight>
                  <MarginRight>
                    <H4
                      color={
                        interval == 3600000 ? theme.greenDark : theme.color2
                      }
                    >
                      60m
                    </H4>
                  </MarginRight>
                </MarginRight>
              </Margin>
            </CenterLeft>
          </Switch>
        </Row>
      </Margin>
    </View>
  );
}

export default function Times({
  header = false,
  timesSelected = [],
  onSelect,
  default_times,
  bookingTimesInterval,
  changeBookingTimesInterval,
}) {
  const theme = useThemeContext();
  const [interval, setInterval] = useState(bookingTimesInterval);
  const [times, setTimes] = useState([]);
  const [toggledTimes, setToggledTimes] = useState(timesSelected);
  const scrollY = useSharedValue(0);
  const lastScrollY = useSharedValue(0);
  const isScrollingUp = useSharedValue(false);

  useEffect(() => {
    if (!interval) return;

    if (toggledTimes.length > 0) {
      const selectedTimes = toggledTimes.filter((time) => {
        const minutes = time.time;
        return minutes % interval === 0;
      });
      setToggledTimes(selectedTimes);
    }

    const filteredTimes = default_times.filter((time) => {
      const minutes = time.time;
      return minutes % interval === 0;
    });

    const sortedTimes = [...filteredTimes].sort(
      (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
    );

    const timeLabels = [
      { type: "label", label: "Early Morning", range: [0, 6], id: "EM" },
      { type: "label", label: "Morning", range: [6, 12], id: "M" },
      { type: "label", label: "Afternoon", range: [12, 17], id: "A" },
      { type: "label", label: "Evening", range: [17, 21], id: "E" },
      { type: "label", label: "Night", range: [21, 24], id: "N" },
    ];

    function getTimeLabel(hour) {
      return timeLabels.find(
        ({ range }) => hour >= range[0] && hour < range[1]
      );
    }

    function insertTimeLabels(array) {
      const result = [];
      const addedLabels = new Set();

      for (const item of array) {
        const hour = new Date(item.time).getUTCHours();
        const label = getTimeLabel(hour);
        if (label && !addedLabels.has(label.label)) {
          result.push(label);
          addedLabels.add(label.label);
        }
        result.push(item);
      }

      return result;
    }

    setTimes(insertTimeLabels(sortedTimes));

    changeBookingTimesInterval(interval);
  }, [interval, default_times]);

  /*
    useEffect(() => {
      const sortedTimes = [...default_times].sort(
        (a, b) => new Date(a.time).getTime() - new Date(b.time).getTime()
      );

      const timeLabels = [
        { type: "label", label: "Early Morning", range: [0, 6] },
        { type: "label", label: "Morning", range: [6, 12] },
        { type: "label", label: "Afternoon", range: [12, 17] },
        { type: "label", label: "Evening", range: [17, 21] },
        { type: "label", label: "Night", range: [21, 24] },
      ];
      function getTimeLabel(hour) {
        return timeLabels.find(
          ({ range }) => hour >= range[0] && hour < range[1]
        );
      }

      function insertTimeLabels(array) {
        const result = [];
        const addedLabels = new Set();

        for (const item of array) {
          const hour = item.time / (1000 * 60 * 60); // convert ms to hours
          const label = getTimeLabel(hour);
          if (label && !addedLabels.has(label)) {
            result.push(label);
            addedLabels.add(label);
          }
          result.push(item);
        }

        return result;
      }

      setTimes(insertTimeLabels(sortedTimes));
    }, [default_times]);
    */

  const removeItem = (id) => {
    setRemovedItems((prev) => ({ ...prev, [id]: true }));
  };

  const filterTimes = useCallback(({ item, value }) => {
    if (!value) {
      setToggledTimes((prevValue) => {
        return prevValue.filter((time) => {
          return time.id !== item.id;
        });
      });
    } else {
      setToggledTimes((prevValue) => [...prevValue, item]);
    }
  }, []);

  useEffect(() => {
    onSelect(toggledTimes);
  }, [toggledTimes]);

  const ITEM_HEIGHT = 65; // fixed height of item component
  const getItemLayout = (data, index) => {
    return {
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    };
  };

  const handleScroll = (event) => {
    const currentScrollY = event.nativeEvent.contentOffset.y;
    isScrollingUp.value = currentScrollY < lastScrollY.value;
    lastScrollY.value = currentScrollY;
    scrollY.value = withSpring(currentScrollY, {
      damping: 20,
      stiffness: 90,
      mass: 0.5,
    });
  };

  const customHeaderStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, 135],
      [0, -135],
      Extrapolate.CLAMP
    );

    return {
      position: "absolute",
      left: 0,
      right: 0,
      zIndex: 2,
      transform: [
        {
          translateY: translateY,
        },
      ],
    };
  });

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[customHeaderStyle, { backgroundColor: theme.color1 }]}
      >
        <BorderBottom>
          <View style={{ height: 100 }}>
            <Margin>{header}</Margin>
          </View>
          <Custom interval={interval} setInterval={setInterval} theme={theme} />
        </BorderBottom>
      </Animated.View>
      <View style={{ flex: 1 }}>
        <FlashList
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ paddingBottom: 30 }}
          onScroll={handleScroll}
          scrollEventThrottle={1}
          ListHeaderComponent={
            <View>
              <View style={{ height: 230 }} />
            </View>
          }
          data={times}
          renderItem={({ item }) => {
            if (item.type === "label") {
              return (
                <MarginTop>
                  <PaddingTop>
                    <MarginHorizontal>
                      <H4>{item.label}</H4>
                    </MarginHorizontal>
                  </PaddingTop>
                </MarginTop>
              );
            } else {
              return (
                <Time
                  toggledTimes={toggledTimes}
                  time={item}
                  timeToggle={(value) => {
                    filterTimes({ item, value });
                  }}
                />
              );
            }
          }}
          estimatedItemSize={40}
          extraData={toggledTimes}
        />
      </View>
    </View>
  );
}
