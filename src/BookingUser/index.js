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
import ImageLoader from "../ImageLoader";
import { ImageWrapper } from "./Booking.style";
import Status from "./Status";

export default function Booking({ item }) {
  const theme = useThemeContext();

  return (
    <RoundedBtn
      smallBorder={true}
      color={theme.color10}
      style={{ borderColor: theme.color7, borderWidth: 2, minHeight: 120 }}
      active={true}
      onClick={() => {}}
    >
      <Margin>
        <Row>
          <ImageWrapper>
            <ImageLoader
              background={theme.color7}
              imageUrl={
                item.details.service.asset.cdn_uri
                  ? item.details.service.asset.cdn_uri
                  : item.merchant.asset.cdn_uri
              }
            />
          </ImageWrapper>
          <PaddingLeft style={{ flex: 1 }}>
            <H3>{item.merchant.profile.name}</H3>

            <PaddingVertical>
              <H4 fontFamily={theme.fontFamily2} numberOfLines={1}>
                {item.details.service.name}
              </H4>
            </PaddingVertical>

            <Row
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Status name={item.status.status.name} />
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
        </Row>
      </Margin>
    </RoundedBtn>
  );
}
