import React from "react";
import { SubmitWrapper } from "./Submit.style";

export default function Submit({ children, activeScreen }) {
  return (
    <SubmitWrapper>
      {React.Children.toArray(children).map(
        (component, index) => index === activeScreen && component
      )}
    </SubmitWrapper>
  );
}
