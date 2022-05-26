import React, { useEffect } from "react";
import { Dimensions } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { Center, Success, Error, Loader } from "@servesall/atoms";

const FooterBtn = ({ children, theme, loading, success, error, style }) => {
  const translateY = useSharedValue(200);
  const height = useSharedValue(70);
  const right = useSharedValue(0);
  const left = useSharedValue(0);
  const bottom = useSharedValue(10);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
      width: "100%",
    };
  });

  const animatedAbsolute = useAnimatedStyle(() => {
    return {
      height: height.value,
      right: right.value,
      left: left.value,
      bottom: bottom.value,
    };
  });

  useEffect(() => {
    translateY.value = withTiming(0, {
      duration: 450,
      easing: Easing.in(Easing.elastic(2)),
    });
  }, []);

  useEffect(() => {
    if (loading) {
      height.value = withTiming(Dimensions.get("window").height, {
        duration: 250,
      });
      right.value = withTiming(0, {
        duration: 250,
        easing: Easing.in(Easing.elastic(2)),
      });
      bottom.value = withTiming(0, {
        duration: 250,
        easing: Easing.in(Easing.elastic(2)),
      });
    } else {
      setTimeout(() => {
        height.value = withTiming(70, {
          duration: 200,
        });
        right.value = withTiming(0, {
          duration: 200,
          easing: Easing.in(Easing.elastic(2)),
        });
        bottom.value = withTiming(10, {
          duration: 200,
          easing: Easing.in(Easing.elastic(2)),
        });
      }, 600);
    }
  }, [loading]);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          position: "absolute",
          height: 70,
          width: "100%",
          zIndex: 11,
          backgroundColor:
            loading || success || error
              ? "rgba(255, 255, 255, 0.8)"
              : "rgba(255, 255, 255, 0)",
          ...style,
        },
        animatedAbsolute,
      ]}
    >
      <Center>
        <Animated.View style={[animatedStyle]}>
          {success && (
            <Center>
              <Success />
            </Center>
          )}
          {error && (
            <Center>
              <Error />
            </Center>
          )}
          {!success && !error && loading && (
            <Center>
              <Loader color={theme.color2} />
            </Center>
          )}
          {!success && !error && !loading && <>{children}</>}
        </Animated.View>
      </Center>
    </Animated.View>
  );
};

export default FooterBtn;
