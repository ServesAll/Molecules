import React, { useEffect } from "react";
import { View, Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";

const Screen = ({ children, index, activeScreen, setActiveScreen }) => {
  const width = useSharedValue(Dimensions.get("window").width);
  const opacity = useSharedValue(1);
  const windowWidth = useSharedValue(Dimensions.get("window").width);

  const animatedWidth = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: width.value,
        },
      ],
      opacity: opacity.value,
      width: windowWidth.value,
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    };
  });

  useEffect(() => {
    if (activeScreen === index) {
      width.value = withTiming(0, {
        duration: 250,
        easing: Easing.out(Easing.exp),
      });

      opacity.value = withTiming(1, {
        duration: 200,
        easing: Easing.out(Easing.exp),
      });
    } else {
      if (activeScreen > index) {
        width.value = withTiming(-windowWidth.value, {
          duration: 250,
          easing: Easing.out(Easing.exp),
        });
      } else {
        width.value = withTiming(windowWidth.value, {
          duration: 250,
          easing: Easing.out(Easing.exp),
        });
      }
      opacity.value = withTiming(0, {
        duration: 200,
        easing: Easing.out(Easing.exp),
      });
    }
  }, [activeScreen]);

  return (
    <Animated.View style={[animatedWidth]}>
      {index === activeScreen && (
        <View style={{ flex: 1, overflow: "hidden" }}>
          {React.cloneElement(children, {
            setActiveScreenId: setActiveScreen,
            index,
            activeScreenId: activeScreen,
          })}
        </View>
      )}
    </Animated.View>
  );
};

export default Screen;
