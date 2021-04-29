import React, { useRef } from "react";
import { ScrollView } from "./Scroller.style";
import { AccordionProvider } from "../GlobalToggle";

export default function AccordionScroller({ children, style }) {
  const scrollRef = useRef();

  return (
    <AccordionProvider
      value={{
        scrollRef,
      }}
    >
      <ScrollView ref={scrollRef} styles={style}>
        {children}
      </ScrollView>
    </AccordionProvider>
  );
}
