import React from "react";
import {
  MarginHorizontal,
  Row,
  Margin,
  Icon,
  Center,
  useThemeContext,
} from "@servesall/atoms";
import Submit from "./Submit";
import Background from "./Background";
import Foreground from "./Foreground";
import { BarWrapper } from "./GamifiedHeader.style";

export default function GamifiedHeader({ steps, currentStep }) {
  const theme = useThemeContext();
  return (
    <MarginHorizontal>
      <Row style={{ alignItems: "center" }}>
        <Icon
          icon="back_fat"
          size="small"
          autoplay={false}
          loop={false}
          color={theme.color2}
        />

        <BarWrapper>
          <Margin>
            <Background theme={theme} steps={steps} currentStep={currentStep} />
            {steps > 0 && (
              <Foreground
                theme={theme}
                steps={steps}
                currentStep={currentStep}
              />
            )}
          </Margin>
        </BarWrapper>

        <Submit />
      </Row>
    </MarginHorizontal>
  );
}
