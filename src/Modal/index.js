import React, { useEffect } from "react";
import Background from "./Background";
import Body from "./Body";
import { useModalContext } from "./Context";

const Modal = ({
  children,
  offsetTop,
  variableHeight,
  onClose = () => {},
  style,
}) => {
  const { dispatch } = useModalContext();

  useEffect(() => {
    dispatch && dispatch({ type: "isModalActive", data: true });
    return () => {
      dispatch && dispatch({ type: "isModalActive", data: false });
    };
  }, []);

  return (
    <Background style={style} onClose={onClose}>
      <Body
        offsetTop={offsetTop}
        onClose={onClose}
        variableHeight={variableHeight}
      >
        {children}
      </Body>
    </Background>
  );
};

export default Modal;
