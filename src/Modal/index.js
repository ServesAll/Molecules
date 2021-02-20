import React from 'react';
import Background from './Background';
import Body from './Body';

const Modal = ({children, offsetTop, onClose = () => {}}) => {
  return (
    <Background onClose={onClose}>
      <Body offsetTop={offsetTop} onClose={onClose}>
        {children}
      </Body>
    </Background>
  );
};

export default Modal;
