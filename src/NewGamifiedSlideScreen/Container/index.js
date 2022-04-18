import React, { useState } from "react";

export default function Container({ children, defaultScreen = 0 }) {
  const [activeScreen, setActiveScreen] = useState(defaultScreen);

  return React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { setActiveScreen, activeScreen });
    }
    return child;
  });
}
