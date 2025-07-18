import React, { useRef, useEffect } from "react";
import { ScrollView } from "./Scroller.style";
import { useAccordionContext } from "../GlobalToggle";

export default function AccordionScroll({
  children,
  style,
  contentContainerStyle,
}) {
  const scrollRef = useRef();
  const { dispatch } = useAccordionContext();

  useEffect(() => {
    dispatch({ type: "setScroller", data: scrollRef });
  }, []);

  return (
    <ScrollView
      ref={scrollRef}
      styles={style}
      contentContainerStyle={contentContainerStyle}
    >
      {children}
    </ScrollView>
  );
}
