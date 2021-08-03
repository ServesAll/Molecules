import React, { useState, useEffect } from "react";
import Container from "./Container";
import Head from "./Head";
import Body from "./Body";
import useAccordionHook from "../Hooks";

const AccordionItem = ({
  children,
  defaultState = false,
  onChange = () => {},
  eventKey = false,
  style,
}) => {
  const { isOpen, toggleAccordionItem } = useAccordionHook();
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    setHasChanged(isOpen);
  }, [isOpen]);

  useEffect(() => {
    defaultState && toggleAccordionItem(defaultState);
  }, [defaultState]);

  useEffect(() => {
    if (isOpen !== hasChanged) {
      onChange(isOpen);
    }
  }, [isOpen, hasChanged]);

  return (
    <Container styles={style} eventKey={eventKey}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen,
          toggleAccordionItem,
          eventKey,
        })
      )}
    </Container>
  );
};

AccordionItem.Head = (props) => {
  return <Head {...props} />;
};

AccordionItem.Body = (props) => {
  return <Body {...props} />;
};

export default AccordionItem;
