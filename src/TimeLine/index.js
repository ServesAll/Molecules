import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolation,
} from "react-native-reanimated";
import { View, SectionList } from "react-native";
import Time from "./Time";
import Date from "./Date";
import TimeLineGhost from "./TimeLine.ghost";
import HeaderWrapper from "./Header";

const AnimatedSectionList = Animated.createAnimatedComponent(SectionList);

const clamp = (value, lowerBound, upperBound) => {
  "worklet";
  return Math.min(Math.max(lowerBound, value), upperBound);
};

const TimeLineSection = ({
  children,
  data,
  header,
  header_height,
  header_height_cut,
}) => {
  const scrollOffset = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event, ctx) => {
      const diff = event.contentOffset.y - ctx.prevY;
      scrollOffset.value = clamp(scrollOffset.value + diff, 0, header_height);
      ctx.prevY = event.contentOffset.y;
    },
    onBeginDrag: (event, ctx) => {
      ctx.prevY = event.contentOffset.y;
    },
    onEndDrag: (event) => {
      if (event.contentOffset.y < header_height / 2) {
        scrollOffset.value = 0;
      } else {
        if (scrollOffset.value > header_height / 2) {
          scrollOffset.value = header_height;
        } else {
          scrollOffset.value = 0;
        }
      }
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [0, header_height],
            [0, -header_height_cut],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {header && (
        <Animated.View
          style={[
            {
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              width: "100%",
              zIndex: 1,
              height: header_height,
            },
            animatedStyles,
          ]}
        >
          <HeaderWrapper>{header}</HeaderWrapper>
        </Animated.View>
      )}
      <AnimatedSectionList
        onScroll={header && scrollHandler}
        scrollEventThrottle={16}
        stickySectionHeadersEnabled={true}
        contentContainerStyle={{ paddingTop: header ? header_height : 0 }}
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index, section }) => (
          <Time
            item={item}
            index={index}
            section={section}
            children={children}
          />
        )}
        renderSectionHeader={({ section: { date } }) => {
          return <Date date={date} />;
        }}
      />
    </View>
  );
};

const massageData = (data) => {
  let result = Object.values(
    data.reduce((acc, item) => {
      if (!acc[item.details.booking_date_utc])
        acc[item.details.booking_date_utc] = {
          date: item.details.booking_date_utc,
          data: [],
        };
      acc[item.details.booking_date_utc].data.push(item);
      return acc;
    }, {})
  );
  return result;
};

const TimeLine = ({
  children,
  header,
  data,
  header_height = 100,
  header_height_cut = 50,
}) => {
  if (!data) return <TimeLineGhost />;

  const new_date = massageData(data);

  return (
    <TimeLineSection
      data={new_date}
      children={children}
      header={header}
      header_height={header_height}
      header_height_cut={header_height_cut}
    />
  );
};

export default TimeLine;
