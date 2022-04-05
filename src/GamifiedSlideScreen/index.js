import React, { useMemo, useCallback, useState } from "react";
import {
  Box,
  FullScreen,
  Center,
  Loader,
  useThemeContext,
} from "@servesall/atoms";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomSheet, { BottomSheetFooter } from "@gorhom/bottom-sheet";
import SlideScreen from "./SlideScreen";
import Header from "./Header";
import BottomBar from "./BottomBar";

export default function GamifiedSlideScreen({
  children,
  defaultScreen,
  loading,
}) {
  const number_of_children = children.length;
  const theme = useThemeContext();
  const [activeScreen, setActiveScreen] = useState(defaultScreen);
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["94%"], []);

  const handleSheetChanges = useCallback((index) => {
    if (index === -1) {
      navigation.goBack();
    }
  }, []);

  // renders
  const renderFooter = useCallback(
    (props) => (
      <BottomSheetFooter {...props} bottomInset={0}>
        <BottomBar
          setActiveScreen={setActiveScreen}
          activeScreen={activeScreen}
        />
      </BottomSheetFooter>
    ),
    [activeScreen]
  );

  return (
    <Box
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0, 0, 0, 0.4)" />
      <BottomSheet
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        footerComponent={renderFooter}
      >
        <Box>
          {loading && (
            <FullScreen style={{ backgroundColor: theme.color1 }}>
              <Center>
                <Loader color={theme.color2} />
              </Center>
            </FullScreen>
          )}
          <Header currentStep={activeScreen} steps={number_of_children} />
          <SlideScreen
            setActiveScreen={setActiveScreen}
            defaultScreen={activeScreen}
            children={children}
          />
        </Box>
      </BottomSheet>
    </Box>
  );
}
