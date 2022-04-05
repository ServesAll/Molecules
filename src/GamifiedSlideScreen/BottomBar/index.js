import React, { useMemo, useCallback, useState } from "react";
import {
  Box,
  Row,
  RoundBtn,
  H3,
  Center,
  MarginVertical,
  MarginHorizontal,
  useThemeContext,
} from "@servesall/atoms";

export default function BottomBar({ activeScreen, setActiveScreen }) {
  const theme = useThemeContext();
  return (
    <Box
      style={{
        backgroundColor: theme.color1,
        borderTopWidth: 1,
        borderColor: theme.color10,
      }}
    >
      <MarginVertical>
        <Row>
          <Box style={{ flex: 4 }}>
            <MarginHorizontal>
              <RoundBtn
                size="small"
                active={activeScreen !== 0}
                color={theme.color1}
                onClick={() => {
                  activeScreen !== 0 && setActiveScreen(activeScreen - 1);
                }}
              >
                <Center>
                  <H3 color={theme.color2}>Back</H3>
                </Center>
              </RoundBtn>
            </MarginHorizontal>
          </Box>
          <Box style={{ flex: 6 }}>
            <MarginHorizontal>
              <RoundBtn
                size="small"
                color={theme.color2}
                onClick={() => {
                  setActiveScreen(activeScreen + 1);
                }}
              >
                <Center>
                  <H3 color={theme.color1}>Next</H3>
                </Center>
              </RoundBtn>
            </MarginHorizontal>
          </Box>
        </Row>
      </MarginVertical>
    </Box>
  );
}
