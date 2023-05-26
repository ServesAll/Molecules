import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { useThemeContext, Box } from "@servesall/atoms";
import { Dimensions, View, Keyboard } from "react-native";
import Progress from "./Progress";
import Background from "./Background";

const windowHeight = Dimensions.get("window").height;

const ModalFullScreen = ({ children, key }) => {
  const theme = useThemeContext();
  const [screenIndex, setScreenIndex] = useState(0);

  // callbacks
  const back = useCallback(() => {
    setScreenIndex((prev) => prev - 1);
  }, [screenIndex]);

  // callbacks
  const next = useCallback(() => {
    setScreenIndex((prev) => prev + 1);
  }, [screenIndex]);

  return (
    <Box key={key} style={{ backgroundColor: theme.color1 }}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          screenIndex,
          setScreenIndex,
          back,
          next,
        })
      )}
    </Box>
  );
};

ModalFullScreen.Progress = (props) => {
  return <Progress {...props} />;
};

ModalFullScreen.Head = (props) => {
  return React.cloneElement(props.children, {
    ...props,
  });
};

ModalFullScreen.Body = (props) => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [windowHeight - 200, windowHeight - 50], []);

  const BottomSheetBackground = useCallback(({ style }) => {
    return <Background style={style} />;
  });

  useEffect(() => {
    bottomSheetRef.current.snapToIndex(0);
  }, [props.screenIndex]);

  useEffect(() => {
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setTimeout(() => {
        bottomSheetRef.current.snapToIndex(0);
      }, 100);
    });

    return () => {
      hideSubscription.remove();
    };
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      handleComponent={() => null}
      backgroundComponent={(props) => <BottomSheetBackground {...props} />}
    >
      <Box style={{ marginTop: 2 }}>
        {React.cloneElement(props.children, {
          ...props,
        })}
      </Box>
    </BottomSheet>
  );
};

ModalFullScreen.Footer = (props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  return (
    <View
      style={{
        height: isSubmitting ? "100%" : 90,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      {React.cloneElement(props.children, {
        ...props,
        setIsSubmitting,
      })}
    </View>
  );
};

ModalFullScreen.SubModal = (props) => {
  if (props.children) {
    return (
      <View
        style={{
          flex: 1,
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 100,
          position: "absolute",
        }}
      >
        {React.cloneElement(props.children, {
          ...props,
        })}
      </View>
    );
  }
};

export default ModalFullScreen;
