import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";

const Screen = ({ children, index, activeScreenId = 0, setActiveScreenId }) => {
  const width = useSharedValue(0);
  const opacity = useSharedValue(1);

  const animatedWidth = useAnimatedStyle(() => {
    return {
      width: `${width.value}%`,
      opacity: opacity.value,
    };
  });

  useEffect(() => {
    if (activeScreenId === index) {
      width.value = withTiming(100, {
        duration: 250,
        easing: Easing.out(Easing.exp),
      });
      opacity.value = withTiming(1, {
        duration: 200,
        easing: Easing.out(Easing.exp),
      });
    } else {
      width.value = withTiming(0, {
        duration: 250,
        easing: Easing.out(Easing.exp),
      });
      opacity.value = withTiming(0, {
        duration: 200,
        easing: Easing.out(Easing.exp),
      });
    }
  }, [activeScreenId]);

  return (
    <Animated.View style={[animatedWidth]}>
      <View style={{ flex: 1, overflow: "hidden" }}>
        {React.cloneElement(children, { setActiveScreenId, index })}
      </View>
    </Animated.View>
  );
};

export default Screen;
