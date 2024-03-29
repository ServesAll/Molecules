import React, { useState, useEffect } from "react";
import { Row } from "@servesall/atoms";
import Screen from "./Screen";

const SlideScreen = ({ children, defaultScreen = 0 }) => {
  const [activeScreenId, setActiveScreenId] = useState(defaultScreen);

  useEffect(() => {
    setActiveScreenId(defaultScreen);
  }, [defaultScreen]);

  return (
    <Row style={{ flex: 1 }}>
      {React.Children.toArray(children).map((component, index) => (
        <Screen
          key={index}
          index={index}
          activeScreenId={activeScreenId}
          setActiveScreenId={setActiveScreenId}
        >
          {component}
        </Screen>
      ))}
    </Row>
  );
};

export default SlideScreen;
