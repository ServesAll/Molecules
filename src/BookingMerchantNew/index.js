import React from "react";
import {
  RoundedBtn,
  Margin,
  H3,
  H4,
  useThemeContext,
  Row,
  PaddingLeft,
  Icon,
  PaddingVertical,
  Box,
} from "@servesall/atoms";
import { useNavigation } from "@react-navigation/native";
import Status from "./Status";

export default function Booking({ item }) {
  const theme = useThemeContext();
  const navigation = useNavigation();

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
    <RoundedBtn
      smallBorder={true}
      color={statusColors[item.status.status_name.name].background}
      style={{
        borderColor: statusColors[item.status.status_name.name].color,
        borderWidth: 2,
        minHeight: 120,
      }}
      active={true}
      onClick={() => navigation.navigate("BookingDetails", { booking: item })}
    >
      <Margin>
        <Box style={{ flex: 1 }}>
          <H3>{item.user.full_name}</H3>

          <PaddingVertical>
            <H4 fontFamily={theme.fontFamily2} numberOfLines={1}>
              {item.details.service.name}
            </H4>
          </PaddingVertical>

          <Row
            style={{
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Status name={item.status.status_name.name} />
            <Row>
              <Icon
                icon="big_pax"
                size="small"
                autoplay={false}
                loop={false}
                color={theme.color2}
              />
              <PaddingLeft>
                <H3>{item.details.pax}</H3>
              </PaddingLeft>
            </Row>
          </Row>
        </Box>
      </Margin>
    </RoundedBtn>
  );
}
