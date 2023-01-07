import React from "react";
import { View } from "react-native";
import { H3, Row, Margin, CenterLeft } from "@servesall/atoms";
import { LinearGradient } from "react-native-gradients";
import { MerchantCardWrapper, ImageWrapper } from "./MerchantCard.style";
import ImageLoader from "../ImageLoader";

function MerchantCard({ merchant, theme }) {
  return (
    <MerchantCardWrapper theme={theme}>
      <ImageWrapper theme={theme}>
        <ImageLoader background={theme.color7} imageUrl={merchant.image_uri} />
        <View
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            flex: 1,
            height: 55,
          }}
        >
          <Row>
            <View
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                flex: 1,
                height: 55,
                opacity: 0.8,
              }}
            >
              <LinearGradient
                colorList={[
                  { offset: "0%", color: merchant.primary_color, opacity: "1" },
                  {
                    offset: "50%",
                    color: merchant.secondary_color,
                    opacity: "1",
                  },
                ]}
                angle={0}
              />
            </View>
            <CenterLeft>
              <Margin>
                <H3 color={theme.color1}>{merchant.name}</H3>
              </Margin>
            </CenterLeft>
          </Row>
        </View>
      </ImageWrapper>
    </MerchantCardWrapper>
  );
}

export default MerchantCard;
