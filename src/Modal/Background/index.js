import React, {useEffect} from 'react';
import {Pressable} from 'react-native';
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';

export default function Background({children, onClose}) {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 450,
        easing: Easing.bezier(0.19, 1.0, 0.22, 1.0),
      }),
    };
  });

  useEffect(() => {
    opacity.value = 1;
  }, []);

  return (
    <Animated.View
      style={[
        {
          height: '100%',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          flex: 1,
          position: 'absolute',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        },
        animatedStyle,
      ]}>
      <Pressable
        style={{
          flex: 1,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          position: 'absolute',
          height: '100%',
        }}
        onPress={() => onClose()}
      />
      {children}
    </Animated.View>
  );
}
