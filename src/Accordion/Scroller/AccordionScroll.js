import React, { useRef, useEffect } from "react";
import { ScrollView } from "./Scroller.style";
import { useAccordionContext } from "../GlobalToggle";

export default function AccordionScroll({ children, style }) {
  const scrollRef = useRef();
  const {dispatch} = useAccordionContext();

  useEffect(() => {
    dispatch({typr: 'setScroller', data: scrollRef});
  }, []);

  return (
      <ScrollView ref={scrollRef} styles={style}>
        {children}
      </ScrollView>
  );
}
