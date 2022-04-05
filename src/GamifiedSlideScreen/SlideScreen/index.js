import React, { useState, useEffect } from "react";
import { Row } from "@servesall/atoms";
import Child from "./Child";

const SlideScreen = ({
  children,
  defaultScreen = 0,
  setActiveScreen = () => {},
}) => {
  const [activeScreenId, setActiveScreenId] = useState(defaultScreen);

  useEffect(() => {
    setActiveScreenId(defaultScreen);
    setActiveScreen(defaultScreen);
  }, [defaultScreen]);

  useEffect(() => {
    setActiveScreen(activeScreenId);
  }, [activeScreenId]);

  return (
    <Row style={{ flex: 1 }}>
      <Child
        children={children}
        activeScreenId={activeScreenId}
        setActiveScreenId={setActiveScreenId}
      />
    </Row>
  );
};

export default SlideScreen;
