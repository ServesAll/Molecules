import React from "react";
import Container from "./Container";
import Body from "./Body";
import Header from "./Head";
import Modal from "./Modal";
import Footer from "./Footer";

const SlideItem = ({ children, style, loading }) => {
  return (
    <Modal styles={style} loading={loading}>
      {children}
    </Modal>
  );
};

SlideItem.Container = (props) => {
  return <Container {...props} />;
};

SlideItem.Body = (props) => {
  return <Body {...props} />;
};

SlideItem.Header = (props) => {
  return <Header {...props} />;
};

SlideItem.Footer = (props) => {
  return <Footer {...props} />;
};

export default SlideItem;
