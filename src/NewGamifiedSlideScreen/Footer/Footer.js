import React from "react";

export default function BottomBar({
  index,
  activeScreen,
  setActiveScreen,
  children,
}) {
  const back = () => {
    activeScreen !== 0 && setActiveScreen(activeScreen - 1);
  };

  const next = () => {
    setActiveScreen(activeScreen + 1);
  };

  if (index !== activeScreen) return null;

  return React.cloneElement(children, {
    back,
    next,
  });
}
