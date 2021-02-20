import React, {useState, useEffect} from 'react';
import Container from './Container';
import Head from './Head';
import Body from './Body';
import useAccordionHook from '../Hooks';

const AccordionItem = ({
  children,
  defaultState = false,
  onChange = () => {},
  eventKey = false,
}) => {
  const {isOpen, toggleAccordionItem} = useAccordionHook();
  const [hasChanged, setHasChanged] = useState(false);

  useEffect(() => {
    setHasChanged(isOpen);
  }, [isOpen]);

  useEffect(() => {
    defaultState && toggleAccordionItem(defaultState);
  }, [defaultState]);

  return (
    <Container onChange={isOpen !== hasChanged && onChange(isOpen)}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isOpen,
          toggleAccordionItem,
          eventKey,
        }),
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
