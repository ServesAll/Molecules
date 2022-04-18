import React from "react";
import { BottomSheetFooter } from "@gorhom/bottom-sheet";

import FooterElement from "./Footer";

export default function BottomBar({
  props,
  activeScreen,
  setActiveScreen,
  Footer,
}) {
  return (
    <BottomSheetFooter {...props} bottomInset={0}>
      {Footer && (
        <FooterElement
          Footer={Footer}
          setActiveScreen={setActiveScreen}
          activeScreen={activeScreen}
        />
      )}
    </BottomSheetFooter>
  );
}
