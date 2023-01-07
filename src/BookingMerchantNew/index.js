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
} from "@servesall/atoms";
import { useNavigation } from "@react-navigation/native";
import Status from "./Status";

export default function Booking({ item }) {
  const theme = useThemeContext();
  const navigation = useNavigation();

  return (
    <RoundedBtn
      smallBorder={true}
      color={theme.color10}
      style={{ borderColor: theme.color7, borderWidth: 2, minHeight: 120 }}
      active={true}
      onClick={() => navigation.navigate("BookingDetails", { booking: item })}
    >
      <Margin>
        <PaddingLeft style={{ flex: 1 }}>
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
        </PaddingLeft>
      </Margin>
    </RoundedBtn>
  );
}
