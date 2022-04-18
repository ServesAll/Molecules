import React from "react";

export default function BottomBar({ activeScreen, setActiveScreen, Footer }) {
  const back = () => {
    activeScreen !== 0 && setActiveScreen(activeScreen - 1);
  };

  const next = () => {
    setActiveScreen(activeScreen + 1);
  };

  return <>{React.cloneElement(Footer, { next, back })}</>;
}
