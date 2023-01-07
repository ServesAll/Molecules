import React from "react";
import { View } from "react-native";
import {
  MarginHorizontal,
  MarginTop,
  MarginLeft,
  PaddingLeft,
  Row,
  H4,
  Margin,
  Icon,
  useThemeContext,
} from "@servesall/atoms";
import DashedLine from "react-native-dashed-line";
import { format } from "date-fns";

const Time = ({ item, index, section, children }) => {
  const theme = useThemeContext();
  return (
    <MarginHorizontal>
      {section.data[index - 1]?.details.booking_date_time !==
        item.details.booking_date_time && (
        <Row style={{ alignItems: "center", paddingLeft: 5 }}>
          <Icon
            icon="big_time"
            size="medium"
            autoplay={false}
            loop={false}
            color={theme.color2}
          />

          <Margin>
            <H4>
              {format(new Date(item.details.booking_date_time), "h:mm aaa")}
            </H4>
          </Margin>
        </Row>
      )}
      <MarginHorizontal>
        <Row>
          <DashedLine
            axis="vertical"
            dashLength={10}
            dashGap={5}
            dashColor={theme.color7}
          />

          <View style={{ flex: 1 }}>
            <PaddingLeft>
              <MarginLeft>
                <MarginTop>{React.cloneElement(children, { item })}</MarginTop>
              </MarginLeft>
            </PaddingLeft>
          </View>
        </Row>
      </MarginHorizontal>
    </MarginHorizontal>
  );
};

export default Time;
