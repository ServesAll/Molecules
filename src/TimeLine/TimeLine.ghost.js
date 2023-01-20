import React from "react";
import { View } from "react-native";
import {
  useThemeContext,
  Margin,
  MarginTop,
  MarginBottom,
  Row,
} from "@servesall/atoms";
import LottieView from "lottie-react-native";
import DashedLine from "react-native-dashed-line";
import ghostloader from "./Assets/ghostloader.json";

export default function MerchantListGhost() {
  const theme = useThemeContext();
  return (
    <MarginTop>
      <Margin>
        <MarginBottom>
          <View style={{ width: 180, borderRadius: 18, overflow: "hidden" }}>
            <View
              style={{
                width: 180,
                height: 26,
                backgroundColor: theme.color7,
                borderRadius: 18,
              }}
            />
            <LottieView
              style={{
                position: "absolute",
                width: "100%",
              }}
              autoPlay={true}
              loop={true}
              source={ghostloader}
            />
          </View>
        </MarginBottom>
        <MarginTop>
          <Row style={{ paddingLeft: 25 }}>
            <DashedLine
              axis="vertical"
              dashLength={10}
              dashGap={5}
              dashColor={theme.color7}
            />

            <View
              style={{
                flex: 1,
                aspectRatio: 3 / 1,
                borderRadius: 18,
                overflow: "hidden",
                marginLeft: 25,
              }}
            >
              <View
                style={{
                  width: "100%",
                  aspectRatio: 3 / 1,
                  backgroundColor: theme.color7,
                  borderRadius: 18,
                }}
              />
              <LottieView
                style={{
                  position: "absolute",
                  width: "100%",
                  resizeMode: "contain",
                }}
                autoPlay={true}
                loop={true}
                source={ghostloader}
              />
            </View>
          </Row>
        </MarginTop>
        <MarginTop>
          <Row style={{ paddingLeft: 25 }}>
            <DashedLine
              axis="vertical"
              dashLength={10}
              dashGap={5}
              dashColor={theme.color7}
            />

            <View
              style={{
                flex: 1,
                aspectRatio: 3 / 1,
                borderRadius: 18,
                overflow: "hidden",
                marginLeft: 25,
              }}
            >
              <View
                style={{
                  width: "100%",
                  aspectRatio: 3 / 1,
                  backgroundColor: theme.color7,
                  borderRadius: 18,
                }}
              />
              <LottieView
                style={{
                  position: "absolute",
                  width: "100%",
                  resizeMode: "contain",
                }}
                autoPlay={true}
                loop={true}
                source={ghostloader}
              />
            </View>
          </Row>
        </MarginTop>
        <MarginTop>
          <Row style={{ paddingLeft: 25 }}>
            <DashedLine
              axis="vertical"
              dashLength={10}
              dashGap={5}
              dashColor={theme.color7}
            />

            <View
              style={{
                flex: 1,
                aspectRatio: 3 / 1,
                borderRadius: 18,
                overflow: "hidden",
                marginLeft: 25,
              }}
            >
              <View
                style={{
                  width: "100%",
                  aspectRatio: 3 / 1,
                  backgroundColor: theme.color7,
                  borderRadius: 18,
                }}
              />
              <LottieView
                style={{
                  position: "absolute",
                  width: "100%",
                  resizeMode: "contain",
                }}
                autoPlay={true}
                loop={true}
                source={ghostloader}
              />
            </View>
          </Row>
        </MarginTop>
      </Margin>
      <Margin>
        <MarginBottom>
          <View style={{ width: 180, borderRadius: 18, overflow: "hidden" }}>
            <View
              style={{
                width: 180,
                height: 26,
                backgroundColor: theme.color7,
                borderRadius: 18,
              }}
            />
            <LottieView
              style={{
                position: "absolute",
                width: "100%",
              }}
              autoPlay={true}
              loop={true}
              source={ghostloader}
            />
          </View>
        </MarginBottom>
        <MarginTop>
          <Row style={{ paddingLeft: 25 }}>
            <DashedLine
              axis="vertical"
              dashLength={10}
              dashGap={5}
              dashColor={theme.color7}
            />

            <View
              style={{
                flex: 1,
                aspectRatio: 3 / 1,
                borderRadius: 18,
                overflow: "hidden",
                marginLeft: 25,
              }}
            >
              <View
                style={{
                  width: "100%",
                  aspectRatio: 3 / 1,
                  backgroundColor: theme.color7,
                  borderRadius: 18,
                }}
              />
              <LottieView
                style={{
                  position: "absolute",
                  width: "100%",
                  resizeMode: "contain",
                }}
                autoPlay={true}
                loop={true}
                source={ghostloader}
              />
            </View>
          </Row>
        </MarginTop>
        <MarginTop>
          <Row style={{ paddingLeft: 25 }}>
            <DashedLine
              axis="vertical"
              dashLength={10}
              dashGap={5}
              dashColor={theme.color7}
            />

            <View
              style={{
                flex: 1,
                aspectRatio: 3 / 1,
                borderRadius: 18,
                overflow: "hidden",
                marginLeft: 25,
              }}
            >
              <View
                style={{
                  width: "100%",
                  aspectRatio: 3 / 1,
                  backgroundColor: theme.color7,
                  borderRadius: 18,
                }}
              />
              <LottieView
                style={{
                  position: "absolute",
                  width: "100%",
                  resizeMode: "contain",
                }}
                autoPlay={true}
                loop={true}
                source={ghostloader}
              />
            </View>
          </Row>
        </MarginTop>
        <MarginTop>
          <Row style={{ paddingLeft: 25 }}>
            <DashedLine
              axis="vertical"
              dashLength={10}
              dashGap={5}
              dashColor={theme.color7}
            />

            <View
              style={{
                flex: 1,
                aspectRatio: 3 / 1,
                borderRadius: 18,
                overflow: "hidden",
                marginLeft: 25,
              }}
            >
              <View
                style={{
                  width: "100%",
                  aspectRatio: 3 / 1,
                  backgroundColor: theme.color7,
                  borderRadius: 18,
                }}
              />
              <LottieView
                style={{
                  position: "absolute",
                  width: "100%",
                  resizeMode: "contain",
                }}
                autoPlay={true}
                loop={true}
                source={ghostloader}
              />
            </View>
          </Row>
        </MarginTop>
      </Margin>
    </MarginTop>
  );
}
