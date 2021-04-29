import React, { useEffect, useRef } from "react";
import { Head } from "./Head.style";
import { findNodeHandle, Pressable } from "react-native";
import { useAccordionContext } from "../../GlobalToggle";

export default function HeadElement({
  children,
  toggleAccordionItem,
  eventKey,
  isOpen,
  style,
}) {
  const { isActive, scrollRef } = useAccordionContext() || {};
  const BodyRef = useRef();

  const scrollToItem = () => {
    requestAnimationFrame(() => {
      if (scrollRef && BodyRef) {
        BodyRef.current?.measureLayout(
          findNodeHandle(scrollRef.current),
          (x, y) => {
            scrollRef.current?.scrollTo({ x: 0, y: y, animated: true });
          }
        );
      }
    });
  };

  useEffect(() => {
    if (isOpen && BodyRef.current) {
      setTimeout(() => {
        scrollToItem();
      }, 350);
    }
  }, [isOpen]);

  return (
    <Pressable
      style={{
        opacity: isActive != eventKey ? (isActive ? 0.6 : 1) : 1,
      }}
      ref={BodyRef}
      onPress={() => toggleAccordionItem(eventKey)}
    >
      <Head styles={style}>{children}</Head>
    </Pressable>
  );
}
