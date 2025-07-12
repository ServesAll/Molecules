import React, { useRef } from "react";
import { ScrollView } from "./Scroller.style";
import { AccordionProvider } from "../GlobalToggle";

export default function AccordionScroller({
  children,
  style,
  contentContainerStyle,
}) {
  const scrollRef = useRef();

  return (
    <AccordionProvider
      value={{
        scrollRef,
      }}
    >
      <ScrollView
        ref={scrollRef}
        styles={style}
        contentContainerStyle={contentContainerStyle}
      >
        {children}
      </ScrollView>
    </AccordionProvider>
  );
}
