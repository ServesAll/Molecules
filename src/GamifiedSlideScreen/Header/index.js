import React from "react";
import { Margin, Row, MarginVertical, useThemeContext } from "@servesall/atoms";
import Submit from "./Submit";
import Background from "./Background";
import Foreground from "./Foreground";
import { BarWrapper } from "./GamifiedHeader.style";

export default function GamifiedHeader({ steps, currentStep }) {
  const theme = useThemeContext();
  return (
    <Margin>
      <Row style={{ alignItems: "center" }}>
        <MarginVertical>
          <BarWrapper>
            <Background theme={theme} steps={steps} currentStep={currentStep} />
            {steps > 0 && (
              <Foreground
                theme={theme}
                steps={steps}
                currentStep={currentStep}
              />
            )}
          </BarWrapper>
        </MarginVertical>
        <Submit />
      </Row>
    </Margin>
  );
}
