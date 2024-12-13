import React from "react";
import { Row, H4, Padding, useThemeContext } from "@servesall/atoms";
import Background from "./Background";
import Foreground from "./Foreground";
import { BarWrapper } from "./GamifiedHeader.style";

export default function GamifiedHeader({ activeScreen, screenLength }) {
  const theme = useThemeContext();

  return (
    <Row style={{ alignItems: "center", minHeight: 16 }}>
      <BarWrapper>
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
      </BarWrapper>
      <Padding />
      <H4>{(activeScreen / screenLength) * 100}%</H4>
    </Row>
  );
}
