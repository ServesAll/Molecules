import React from 'react';
import Background from './Background';
import Body from './Body';

const Modal = ({children, offsetTop, variableHeight, onClose = () => {}}) => {
  return (
    <Background onClose={onClose}>
      <Body offsetTop={offsetTop} onClose={onClose} variableHeight={variableHeight}>
        {children}
      </Body>
    </Background>
  );
};

export default Modal;
