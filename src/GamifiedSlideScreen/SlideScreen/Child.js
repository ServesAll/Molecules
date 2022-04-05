import React from "react";
import { Row } from "@servesall/atoms";
import Screen from "./Screen";

const Child = React.memo(({ children, activeScreenId, setActiveScreenId }) => {
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
});

export default Child;
