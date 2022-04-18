import React, { useMemo, useCallback } from "react";
import {
  Box,
  FullScreen,
  Center,
  Loader,
  useThemeContext,
} from "@servesall/atoms";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomSheet from "@gorhom/bottom-sheet";

export default function GamifiedSlideScreen({ children, loading }) {
  const theme = useThemeContext();
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ["94%"], []);

  const handleSheetChanges = useCallback((index) => {
    if (index === -1) {
      navigation.goBack();
    }
  }, []);

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
      >
        {loading && (
          <FullScreen style={{ backgroundColor: theme.color1 }}>
            <Center>
              <Loader color={theme.color2} />
            </Center>
          </FullScreen>
        )}
        {children}
      </BottomSheet>
    </Box>
  );
}
