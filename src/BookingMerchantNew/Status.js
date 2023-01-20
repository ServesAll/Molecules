import React from "react";
import { useThemeContext, H5, PaddingHorizontal } from "@servesall/atoms";
import { StatusWrapper } from "./Booking.style";

export default function Status({ name }) {
  const theme = useThemeContext();

  const statusColors = {
    Pending: {
      color: theme.color12,
      border: theme.color12border,
      background: theme.color12light,
    },
    Confirmed: {
      color: theme.color11,
      border: theme.color11border,
      background: theme.color11light,
    },
    Declined: {
      color: theme.color6,
      border: theme.color6light,
      background: theme.color6light,
    },
    Cancelled: {
      color: theme.color6,
      border: theme.color6light,
      background: theme.color6light,
    },
    Attended: {
      color: theme.darkBlue,
      border: theme.darkBlue,
      background: theme.darkBlueLight,
    },
    NoShow: {
      color: theme.darkYellowDark,
      border: theme.darkYellowDark,
      background: theme.darkYellowDark,
    },
  };

  return (
    <StatusWrapper theme={theme} color={statusColors[name].color}>
      <PaddingHorizontal>
        <H5 color={theme.color1}>{name}</H5>
      </PaddingHorizontal>
    </StatusWrapper>
  );
}
