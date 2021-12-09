import React, { useState } from "react";
import { Row } from "@servesall/atoms";
import Screen from "./Screen";

const SlideScreen = ({ children }) => {
  const [activeScreenId, setActiveScreenId] = useState(0);
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
