import React, { useState } from "react";
import { Row, Icon, Margin, useThemeContext } from "@servesall/atoms";
import { Pressable } from "react-native";
import Screen from "./Screen";

const BackButton = ({ activeScreenId, setActiveScreenId }) => {
  const { color2 } = useThemeContext();
  if (!activeScreenId) return null;
  return (
    <Pressable onPress={() => setActiveScreenId(activeScreenId - 1)}>
      <Margin>
        <Icon
          icon="back"
          size="medium"
          autoplay={false}
          loop={false}
          color={color2}
        />
      </Margin>
    </Pressable>
  );
};

const SlideScreen = ({ children }) => {
  const [activeScreenId, setActiveScreenId] = useState(0);
  return (
    <>
      <BackButton
        activeScreenId={activeScreenId}
        setActiveScreenId={setActiveScreenId}
      />
      <Row style={{ flex: 1 }}>
        {children.map((component, index) => (
          <Screen
            index={index}
            activeScreenId={activeScreenId}
            setActiveScreenId={setActiveScreenId}
          >
            {component}
          </Screen>
        ))}
      </Row>
    </>
  );
};

export default SlideScreen;
