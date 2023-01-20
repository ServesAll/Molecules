import React from "react";
import { View } from "react-native";
import {
  useThemeContext,
  Margin,
  MarginRight,
  MarginVertical,
  Row,
} from "@servesall/atoms";
import LottieView from "lottie-react-native";
import DashedLine from "react-native-dashed-line";
import ghostloader from "./Assets/ghostloader.json";

export default function MerchantListItemGhost() {
  const theme = useThemeContext();
  return (
    <MarginRight>
      <MarginVertical>
        <Margin>
          <Row style={{ paddingLeft: 25 }}>
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
        </Margin>
      </MarginVertical>
    </MarginRight>
  );
}
