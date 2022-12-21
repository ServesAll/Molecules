import React from "react";
import {
  MarginHorizontal,
  H2,
  Row,
  Margin,
  Icon,
  useThemeContext,
} from "@servesall/atoms";
import { format } from "date-fns";

export default function DateScreen({ date }) {
  const theme = useThemeContext();

  return (
    <Row style={{ backgroundColor: theme.color1 }}>
      <Margin>
        <Row style={{ alignItems: "center", paddingLeft: 5 }}>
          <Icon
            icon="big_calendar"
            size="medium"
            autoplay={false}
            loop={false}
            color={theme.color2}
          />

          <MarginHorizontal>
            <H2>{format(new Date(date), "iii do LLL")}</H2>
          </MarginHorizontal>
        </Row>
      </Margin>
    </Row>
  );
}
