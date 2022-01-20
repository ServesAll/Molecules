import React from "react";
import { H3, H4, Padding, Row, PaddingTop } from "@servesall/atoms";
import { Wrapper, AniWrapper, StatusWrapper } from "./BookingMerchant.style";
import LottieView from "lottie-react-native";
import Happy_Shaded from "./Assets/Happy_Shaded.json";
import Meh_Shaded from "./Assets/Meh_Shaded.json";
import Blushing_Shaded from "./Assets/Blushing_Shaded.json";
import BookingActions from "./BookingActions";

const BookingMerchant = React.memo(
  ({ name, status, pax, theme, submit, onClick = () => {} }) => {
    const statusColors = {
      Pending: {
        color: theme.color12,
        border: theme.color12border,
        background: theme.color12light,
        image: Happy_Shaded,
        autoPlay: true,
        progress: null,
      },
      Confirmed: {
        color: theme.color11,
        border: theme.color11border,
        background: theme.color11light,
        image: Blushing_Shaded,
        autoPlay: false,
        progress: 0.5,
      },
      Declined: {
        color: theme.color11,
        border: theme.color11border,
        background: theme.color11light,
        image: Blushing_Shaded,
        autoPlay: false,
        progress: 0.5,
      },
      Cancelled: {
        color: theme.color11,
        border: theme.color11border,
        background: theme.color11light,
        image: Blushing_Shaded,
        autoPlay: false,
        progress: 0.5,
      },
      Attended: {
        color: theme.color11,
        border: theme.color11border,
        background: theme.color11light,
        image: Blushing_Shaded,
        autoPlay: false,
        progress: 0.5,
      },
      NoShow: {
        color: theme.color11,
        border: theme.color11border,
        background: theme.color11light,
        image: Blushing_Shaded,
        autoPlay: false,
        progress: 0.5,
      },
    };

    return (
      <Wrapper theme={theme} color={statusColors[status]}>
        <Padding>
          <Row style={{ alignItems: "center" }}>
            <AniWrapper>
              <LottieView
                style={{
                  height: 50,
                }}
                autoPlay={statusColors[status].autoPlay}
                progress={statusColors[status].progress}
                loop={true}
                source={statusColors[status].image}
              />
            </AniWrapper>

            <Padding style={{ flex: 1 }}>
              <Row style={{ justifyContent: "space-between" }}>
                <H3 fontFamily={theme.fontFamily3}>{name}</H3>
                <H3 fontFamily={theme.fontFamily3}>x {pax}</H3>
              </Row>
              <PaddingTop>
                <Row>
                  <StatusWrapper theme={theme} color={statusColors[status]}>
                    <Padding>
                      <H4
                        style={{ lineHeight: 18 }}
                        color={statusColors[status].color}
                      >
                        {status}
                      </H4>
                    </Padding>
                  </StatusWrapper>
                </Row>
              </PaddingTop>
            </Padding>
          </Row>
          <BookingActions submit={submit} theme={theme} status={status} />
        </Padding>
      </Wrapper>
    );
  }
);

export default BookingMerchant;
