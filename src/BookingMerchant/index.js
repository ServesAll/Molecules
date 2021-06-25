import React from "react";
import {
  H3,
  H4,
  Padding,
  Center,
  AnimatedButton,
  Margin,
  Row,
  Success,
  Error,
  Loader,
  MarginHorizontal,
  Icon,
} from "@servesall/atoms";
import { Wrapper, AniWrapper, PaxWrapper } from "./BookingMerchant.style";
import LottieView from "lottie-react-native";
import Happy_Shaded from "./Assets/Happy_Shaded.json";

const BookingMerchant = React.memo(
  ({ name, status, pax, theme, onClick = () => {} }) => {
    const statusColors = {
      Pending: theme.color12,
    };

    return (
      <Wrapper theme={theme} color={statusColors[status]}>
        <Padding>
          <Row>
            <AniWrapper>
              <LottieView
                style={{
                  height: 50,
                }}
                autoPlay={true}
                loop={true}
                source={Happy_Shaded}
              />
              <PaxWrapper>
                <Center>
                  <H3>{pax}</H3>
                </Center>
              </PaxWrapper>
            </AniWrapper>
            <Padding>
              <H3>{name}</H3>
              <H4>{status}</H4>
            </Padding>
          </Row>
        </Padding>
      </Wrapper>
    );
  }
);

export default BookingMerchant;
