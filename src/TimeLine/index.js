import React, { useState } from "react";
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
import TimetListItemGhost from "./TimeLineItem.ghost";
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
  onEndReachedThreshold,
  onEndReached,
  isFinished,
  noBookings,
}) => {
  const scrollOffset = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event, ctx) => {
      if (event.contentOffset.y < 0) return;
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
        onEndReachedThreshold={onEndReachedThreshold}
        onEndReached={() => {
          onEndReached();
        }}
        ListFooterComponent={() => {
          if (!isFinished) {
            return <TimetListItemGhost />;
          }
          return null;
        }}
        ListEmptyComponent={noBookings}
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

  let resultOrderedByTime = result.map((item) => {
    return {
      ...item,
      data: item.data.sort((a, b) => {
        return a.details.booking_date_time > b.details.booking_date_time
          ? 1
          : -1;
      }),
    };
  });
  return resultOrderedByTime;
};

const TimeLine = ({
  children,
  header,
  data,
  header_height = 100,
  header_height_cut = 50,
  onEndReachedThreshold,
  onEndReached,
  loading,
  isFinished,
  noBookings,
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
      onEndReachedThreshold={onEndReachedThreshold}
      onEndReached={onEndReached}
      loading={loading}
      isFinished={isFinished}
      noBookings={noBookings}
    />
  );
};

export default TimeLine;
