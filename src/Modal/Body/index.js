import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
  runOnJS,
} from 'react-native-reanimated';
import {GestureHandlerRootView, PanGestureHandler} from 'react-native-gesture-handler';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {PanBarWrap, PanBar} from './Body.style';

export default function Body({children, offsetTop = 200, onClose}) {
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
      if (x.value < statusBarHeight) {
        x.value = withSpring(statusBarHeight);
      } else {
        if (_.translationY > 300 || x.value > 550) {
          runOnJS(close)();
        }
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

  return (
      <GestureHandlerRootView>
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Animated.View
        style={[{height: '100%', zIndex: 11}, animatedStyle, animatedStylePan]}>
        <PanBarWrap>
          <PanBar />
        </PanBarWrap>
        {children}
      </Animated.View>
    </PanGestureHandler>
      </GestureHandlerRootView>
  );
}
