import { useEffect, useState } from "react";
import { useAccordionContext } from "../GlobalToggle";

export default function useAccordionHook() {
  const { isActive, dispatch } = useAccordionContext() || {};
  const [isOpen, setIsOpen] = useState(false);
  const [eventKeyState, setEventKeyState] = useState(false);
  const toggleAccordionItem = (eventKey) => {
    dispatch && dispatch({ type: "isActive", data: false });
    setIsOpen((previousState) => !previousState);
    setEventKeyState(eventKey);
  };

  useEffect(() => {
    if (isOpen) {
      dispatch && dispatch({ type: "isActive", data: eventKeyState });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isActive) {
      setIsOpen(eventKeyState === isActive);
    }
  }, [isActive]);

  return {
    eventKeyState,
    isOpen,
    toggleAccordionItem,
  };
}
