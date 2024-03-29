import React, { useEffect, useRef } from "react";
import { Head } from "./Head.style";
import { findNodeHandle, Pressable, View } from "react-native";
import { Row, Padding, useThemeContext } from "@servesall/atoms";
import LottieView from "lottie-react-native";
import plusClose from "./Assets/plusClose.json";
import { useAccordionContext } from "../../GlobalToggle";
import Animated, {
  withTiming,
  useSharedValue,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";

export default function HeadElement({
  children,
  toggleAccordionItem,
  eventKey,
  isOpen,
  style,
  lightContent = false,
  showToggle = true,
}) {
  const theme = useThemeContext();
  const { isActive, scrollRef } = useAccordionContext() || {};
  const BodyRef = useRef();
  const openRef = useRef();

  const scrollToItem = () => {
    requestAnimationFrame(() => {
      if (scrollRef && BodyRef) {
        BodyRef.current?.measureLayout(
          findNodeHandle(scrollRef.current),
          (x, y) => {
            scrollRef.current?.scrollTo({ x: 0, y: y - 20, animated: true });
          }
        );
      }
    });
  };

  useEffect(() => {
    if (isOpen && BodyRef.current) {
      setTimeout(() => scrollToItem(), 250);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      openRef.current?.play(0, 20);
    } else {
      openRef.current?.play(20, 33);
    }
  }, [isOpen]);

  const opacity = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, {
        duration: 750,
        easing: Easing.bezier(0.19, 1.0, 0.22, 1.0),
      }),
    };
  });

  useEffect(() => {
    isActive != eventKey
      ? isActive
        ? (opacity.value = 1)
        : (opacity.value = 1)
      : (opacity.value = 1);
  }, [isActive]);

  return (
    <Pressable ref={BodyRef} onPress={() => toggleAccordionItem(eventKey)}>
      <Head styles={style}>
        <Row
          style={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 9 }}>
            <Animated.View style={[animatedStyle]}>{children}</Animated.View>
          </View>
          {showToggle && (
            <View style={{ flex: 1 }}>
              <Padding>
                <LottieView
                  style={{
                    height: 15,
                  }}
                  ref={openRef}
                  autoPlay={false}
                  loop={false}
                  source={plusClose}
                  colorFilters={[
                    {
                      keypath: "open-vertical",
                      color: lightContent ? theme.color1 : theme.color2,
                    },
                    {
                      keypath: "open-horizontal",
                      color: lightContent ? theme.color1 : theme.color2,
                    },
                  ]}
                />
              </Padding>
            </View>
          )}
        </Row>
      </Head>
    </Pressable>
  );
}
