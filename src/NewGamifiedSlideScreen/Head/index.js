import React from "react";
import { View } from "react-native";
import {
  MarginHorizontal,
  PaddingHorizontal,
  Row,
  Margin,
  Center,
  Icon,
  RoundedBtn,
  useThemeContext,
} from "@servesall/atoms";
import { useNavigation } from "@react-navigation/native";
import Submit from "./Submit";
import Background from "./Background";
import Foreground from "./Foreground";
import { BarWrapper } from "./GamifiedHeader.style";

export default function GamifiedHeader({
  activeScreen,
  setActiveScreen,
  showHeader = true,
  screenLength,
}) {
  const navigation = useNavigation();
  const theme = useThemeContext();
  const canGoBack = activeScreen > 0;

  const goBack = () => {
    canGoBack && setActiveScreen(activeScreen - 1);
    !canGoBack && navigation.goBack();
  };
  return (
    <MarginHorizontal>
      <Row style={{ alignItems: "center" }}>
        <View>
          <RoundedBtn
            style={{ width: 40 }}
            size="small"
            active={true}
            color={theme.color1}
            onClick={goBack}
            hitSlop={20}
          >
            <Center>
              {canGoBack ? (
                <Icon
                  icon="back_fat"
                  size="small"
                  autoplay={false}
                  loop={false}
                  color={theme.color2}
                />
              ) : (
                <Icon
                  icon="close"
                  size="small"
                  autoplay={false}
                  loop={false}
                  color={theme.color2}
                />
              )}
            </Center>
          </RoundedBtn>
        </View>
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
        {showHeader && activeScreen === screenLength && <Submit />}
      </Row>
    </MarginHorizontal>
  );
}
