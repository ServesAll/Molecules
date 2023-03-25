import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import {
  H2,
  Margin,
  Row,
  H4,
  Switch,
  CenterLeft,
  MarginRight,
} from "@servesall/atoms";
import { add, format } from "date-fns";
import Time from "./Time";

const DividerElement = ({ name, color }) => {
  return (
    <Margin>
      <H2 color={color}>{name}</H2>
    </Margin>
  );
};

const Times = React.memo(
  ({ timesSelected = [], onSelect, ListHeaderComponent = null }) => {
    const [interval, setInterval] = useState(30);
    const [times, setTimes] = useState([]);
    const [toggledTimes, setToggledTimes] = useState(timesSelected);

    useEffect(() => {
      let hoursArray = [];

      if (interval === 15) {
        hoursArray = [
          225, 240, 255, 270, 285, 300, 315, 330, 345, 360, 375, 390, 405, 420,
          435, 450, 465, 480, 495, 510, 525, 540, 555, 570, 585, 600, 615, 630,
          645, 660, 675, 690, 705, 720, 735, 750, 765, 780, 795, 810, 825, 840,
          855, 870, 885, 900, 915, 930, 945, 960, 975, 990, 1005, 1020, 1035,
          1050, 1065, 1080, 1095, 1110, 1125, 1140, 1155, 1170, 1185, 1200,
          1215, 1230, 1245, 1260, 1275, 1290, 1305, 1320, 1335, 1350, 1365,
          1380, 1395, 1410, 1425, 1440, 15, 30, 45, 60, 75, 90, 105, 120, 135,
          150, 165, 180, 195, 210,
        ];
      } else if (interval === 30) {
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

    const Item = ({ time, minuteValue }) => (
      <Time
        isActive={toggledTimes.includes(minuteValue)}
        time={time}
        timeToggle={(value) => {
          filterTimes({ minuteValue, value });
        }}
      />
    );

    return (
      <View style={{ flex: 1 }}>
        <Row>
          <H4>Every</H4>
          <Switch
            fat={true}
            style={{
              backgroundColor: interval == 15 ? theme.greenLight : theme.color1,
            }}
            value={interval == 15}
            onValueChange={(value) => setInterval(value ? 15 : false)}
          >
            <CenterLeft>
              <Margin>
                <MarginRight>
                  <MarginRight>
                    <H4 color={interval == 15 ? theme.greenDark : theme.color2}>
                      15min
                    </H4>
                  </MarginRight>
                </MarginRight>
              </Margin>
            </CenterLeft>
          </Switch>
          <Switch
            fat={true}
            style={{
              backgroundColor: interval == 30 ? theme.greenLight : theme.color1,
            }}
            value={interval == 30}
            onValueChange={(value) => setInterval(value ? 30 : false)}
          >
            <CenterLeft>
              <Margin>
                <MarginRight>
                  <MarginRight>
                    <H4 color={interval == 30 ? theme.greenDark : theme.color2}>
                      30min
                    </H4>
                  </MarginRight>
                </MarginRight>
              </Margin>
            </CenterLeft>
          </Switch>
          <Switch
            fat={true}
            style={{
              backgroundColor: interval == 60 ? theme.greenLight : theme.color1,
            }}
            value={interval == 60}
            onValueChange={(value) => setInterval(value ? 60 : false)}
          >
            <CenterLeft>
              <Margin>
                <MarginRight>
                  <MarginRight>
                    <H4 color={interval == 60 ? theme.greenDark : theme.color2}>
                      1h
                    </H4>
                  </MarginRight>
                </MarginRight>
              </Margin>
            </CenterLeft>
          </Switch>
        </Row>
        <BottomSheetFlatList
          data={times}
          keyExtractor={(i) => i}
          renderItem={({ item }) => (
            <Item time={item.time} minuteValue={item.minuteValue} />
          )}
        />
      </View>
    );
  }
);

export default Times;
