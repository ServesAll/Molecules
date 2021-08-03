import React from "react";
import { Image, View } from "react-native";
import {
  H3,
  H4,
  H2,
  Padding,
  Center,
  AnimatedButton,
  Margin,
  Row,
  Success,
  Error,
  Loader,
  MarginHorizontal,
  Icon,
  PaddingVertical,
  PaddingHorizontal,
  PaddingTop,
  MarginTop,
} from "@servesall/atoms";
import { Wrapper } from "./Actions.style";
import money from "./Assets/money.png";
import format from "date-fns/format";
import LottieView from "lottie-react-native";
import shiney_back from "./Assets/shiney_back.json";

const Actions = ({ children, theme }) => {
  return <Wrapper theme={theme}>{children}</Wrapper>;
};

Actions.NewBooking = ({ item, theme, onClick = () => {} }) => {
  return (
    <Padding>
      <Row style={{ alignItems: "center" }}>
        <Image
          style={{ width: 70, height: 70, zIndex: 10 }}
          source={{ uri: money }}
        />
        <LottieView
          style={{
            left: -5,
            height: 80,
            position: "absolute",
          }}
          autoPlay={true}
          loop={true}
          source={shiney_back}
        />
        <PaddingHorizontal style={{ flex: 1 }}>
          <H4 fontFamily={theme.fontFamily2}>New Booking!</H4>
          <PaddingTop>
            <Row style={{ justifyContent: "space-between" }}>
              <H3 color={theme.color2}>
                {format(new Date(item.details.booking_date_time), "eee do LLL")}
              </H3>
              <H3 color={theme.color2} fontFamily={theme.fontFamily2}>
                {format(new Date(item.details.booking_date_time), "H:mm aaaa")}
              </H3>
            </Row>
          </PaddingTop>
        </PaddingHorizontal>
      </Row>
    </Padding>
  );
};

export default Actions;
