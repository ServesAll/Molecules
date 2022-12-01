import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useThemeContext } from "@servesall/atoms";
import { ScrollView } from "react-native-gesture-handler";
import { ScrollWrapper } from "./HorizontalScroll.style";

const HorizontalScroll = ({
  preview = 0,
  children,
  scrollToPosition = false,
}) => {
  const [childPreviewWidth, setChildPreviewWidth] = useState([]);
  const theme = useThemeContext();
  const scrollRef = React.useRef();

  const onLayout = (event, index) => {
    const elementWidth = event.nativeEvent.layout.width;
    const previewWidth = elementWidth * ((100 - preview) / 100);
    const previewAdjustment = elementWidth - previewWidth;

    setChildPreviewWidth([
      ...childPreviewWidth,
      elementWidth * (index + 1) - previewAdjustment,
    ]);
    scrollToPosition &&
      scrollRef.current.scrollTo({ x: scrollToPosition, y: 0, animated: true });
  };

  useEffect(() => {
    scrollRef.current.scrollTo({ x: scrollToPosition, y: 0, animated: true });
  }, [scrollToPosition]);

  return (
    <ScrollWrapper theme={theme}>
      <ScrollView
        ref={scrollRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToOffsets={childPreviewWidth}
        decelerationRate="fast"
      >
        {React.Children.map(children, (child, index) => (
          <View onLayout={(event) => onLayout(event, index)}>{child}</View>
        ))}
      </ScrollView>
    </ScrollWrapper>
  );
};

export default HorizontalScroll;
