import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  runOnJS,
} from "react-native-reanimated";
import { SafeAreaView, Dimensions, Platform, StatusBar } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { PanBarWrap, PanBar, BodyWrap } from "./Body.style";

export default function Body({
  children,
  offsetTop = 200,
  onClose,
  background = "#FFFFFF",
  variableHeight = true,
}) {
  const statusBarHeight = getStatusBarHeight();
  const offset = useSharedValue(2000);
  const x = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(offset.value, {
            damping: 10,
            stiffness: 90,
            mass: 0.5,
          }),
        },
      ],
    };
  });

  useEffect(() => {
    offset.value = offsetTop;
  }, []);

  const close = () => {
    onClose();
  };

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startY = x.value === 0 ? offset.value : x.value;
    },
    onActive: (event, ctx) => {
      x.value = ctx.startY + event.translationY;
    },
    onEnd: (_) => {
      if (x.value < statusBarHeight && variableHeight) {
        x.value = withSpring(statusBarHeight);
      }
      if (!variableHeight) {
        x.value = withSpring(offsetTop);
      }

      if (_.translationY > 300 || x.value > 550) {
        runOnJS(close)();
      }
    },
  });

  const animatedStylePan = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: x.value,
        },
      ],
    };
  });

  const PlatformGracePadding = Platform.OS === "ios" ? 30 : 0;

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        backgroundColor="rgba(0,0,0,0.6)"
        barStyle="light-content"
      />
      <GestureHandlerRootView>
        <PanGestureHandler
          activeOffsetY={[-10, 10]}
          onGestureEvent={gestureHandler}
        >
          <Animated.View
            style={[
              {
                height: Dimensions.get("window").height - offsetTop,
                zIndex: 11,
                backgroundColor: background,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                overflow: "hidden",
              },
              animatedStyle,
              animatedStylePan,
            ]}
          >
            <BodyWrap
              height={
                Dimensions.get("window").height -
                offsetTop -
                statusBarHeight -
                PlatformGracePadding
              }
            >
              <PanBarWrap>
                <PanBar />
              </PanBarWrap>

              {children}
            </BodyWrap>
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
}
