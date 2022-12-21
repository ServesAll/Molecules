import React from "react";
import { View } from "react-native";
import {
  useThemeContext,
  Margin,
  MarginTop,
  PaddingTop,
} from "@servesall/atoms";
import LottieView from "lottie-react-native";
import ghostloader from "./Assets/ghostloader.json";
import ghostloaderlarge from "./Assets/ghostloaderlarge.json";

export default function MerchantListGhost() {
  const theme = useThemeContext();
  return (
    <>
      <Margin>
        <View
          style={{
            width: "100%",
            aspectRatio: 1 / 1,
            borderRadius: 18,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: "100%",
              aspectRatio: 1 / 1,
              backgroundColor: theme.color7,
              borderRadius: 18,
            }}
          />
          <LottieView
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            autoPlay={true}
            loop={true}
            source={ghostloaderlarge}
          />
        </View>
        <MarginTop>
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

          <PaddingTop>
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
          </PaddingTop>
        </MarginTop>
      </Margin>
      <Margin>
        <View style={{ width: "100%", borderRadius: 18, overflow: "hidden" }}>
          <View
            style={{
              width: "100%",
              aspectRatio: 1 / 1,
              backgroundColor: theme.color7,
              borderRadius: 18,
            }}
          />
          <LottieView
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              resizeMode: "contain",
            }}
            autoPlay={true}
            loop={true}
            source={ghostloaderlarge}
          />
        </View>

        <MarginTop>
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
          <PaddingTop>
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
          </PaddingTop>
        </MarginTop>
      </Margin>
    </>
  );
}
