import React from "react";
import { SafeAreaView, SectionList } from "react-native";
import Time from "./Time";
import Date from "./Date";
import TimeLineGhost from "./TimeLine.ghost";

const TimeLineSection = ({ children, data }) => {
  return (
    <SectionList
      stickySectionHeadersEnabled={true}
      contentContainerStyle={{ paddingBottom: 20 }}
      sections={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item, index, section }) => (
        <Time item={item} index={index} section={section} children={children} />
      )}
      renderSectionHeader={({ section: { date } }) => {
        return <Date date={date} />;
      }}
    />
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

const TimeLine = ({ children, data }) => {
  if (!data) return <TimeLineGhost />;

  const new_date = massageData(data);

  return (
    <SafeAreaView>
      <TimeLineSection data={new_date} children={children} />
    </SafeAreaView>
  );
};

export default TimeLine;
