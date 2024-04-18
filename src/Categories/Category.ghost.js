import React from "react";
import { View } from "react-native";
import {
  MarginTop,
  RoundedBtn,
  Row,
  Padding,
  PaddingHorizontal,
} from "@servesall/atoms";
import LottieView from "lottie-react-native";
import ghostloader from "./Assets/ghostloader.json";

const GhostItem = ({ theme }) => {
  return (
    <MarginTop>
      <RoundedBtn
        color={theme.color1}
        style={{
          borderWidth: 2,
          borderColor: theme.color7,
          overflow: "hidden",
        }}
      >
        <Padding>
          <Row style={{ alignItems: "center" }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 8,
                backgroundColor: theme.color7,
              }}
            />
            <PaddingHorizontal>
              <View
                style={{
                  width: 150,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: theme.color7,
                }}
              />
            </PaddingHorizontal>
          </Row>
        </Padding>

        <LottieView
          style={{
            position: "absolute",
            width: "100%",
          }}
          autoPlay={true}
          loop={true}
          source={ghostloader}
        />
      </RoundedBtn>
    </MarginTop>
  );
};

export default function Ghost({ theme }) {
  return (
    <>
      <GhostItem theme={theme} />
      <GhostItem theme={theme} />
      <GhostItem theme={theme} />
      <GhostItem theme={theme} />
    </>
  );
}
