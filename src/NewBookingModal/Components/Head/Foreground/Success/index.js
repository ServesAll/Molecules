import React from "react";
import { Success } from "@servesall/atoms";
import { SuccessStep } from "./Success.style";

export default function Foreground({ left, theme }) {
  return (
    <SuccessStep theme={theme} left={left}>
      <Success
        theme={theme}
        style={{
          width: 26,
          height: 26,
        }}
      />
    </SuccessStep>
  );
}
