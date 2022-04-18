import React from "react";
import FooterElement from "./Footer";

export default function BottomBar({ children, activeScreen, setActiveScreen }) {
  return React.Children.toArray(children).map((component, index) => (
    <FooterElement
      key={index}
      index={index}
      setActiveScreen={setActiveScreen}
      activeScreen={activeScreen}
    >
      {component}
    </FooterElement>
  ));
}
