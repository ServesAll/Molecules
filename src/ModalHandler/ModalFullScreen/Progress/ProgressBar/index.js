import React from "react";
import { View } from "react-native";
import {
  Row,
  Margin,
  CenterRight,
  CenterLeft,
  Icon,
  RoundedBtn,
  useThemeContext,
} from "@servesall/atoms";
import Background from "./Background";
import Foreground from "./Foreground";
import { BarWrapper } from "./GamifiedHeader.style";

export default function GamifiedHeader({
  activeScreen,
  back,
  screenLength,
  closeWindow,
}) {
  const theme = useThemeContext();
  const canGoBack = activeScreen > 0;

  return (
    <Row style={{ alignItems: "center", minHeight: 50 }}>
      {canGoBack && (
        <View>
          <RoundedBtn
            style={{ width: 40 }}
            size="small"
            active={true}
            color="transparent"
            onClick={back}
            hitSlop={20}
          >
            <CenterRight>
              <Icon
                icon="back_fat"
                size="small"
                autoplay={false}
                loop={false}
                color={theme.color2}
              />
            </CenterRight>
          </RoundedBtn>
        </View>
      )}
      <BarWrapper>
        <Margin>
          <Background
            theme={theme}
            steps={screenLength}
            currentStep={activeScreen}
          />

          <Foreground
            theme={theme}
            steps={screenLength}
            currentStep={activeScreen}
          />
        </Margin>
      </BarWrapper>
      <RoundedBtn
        style={{ width: 40 }}
        size="small"
        active={true}
        color="transparent"
        onClick={closeWindow}
        hitSlop={20}
      >
        <CenterLeft>
          <Icon
            icon="close"
            size="small"
            autoplay={false}
            loop={false}
            color={theme.color2}
          />
        </CenterLeft>
      </RoundedBtn>
    </Row>
  );
}
