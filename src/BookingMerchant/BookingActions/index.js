import React from "react";
import { View } from "react-native";
import { H3, Margin, Row, RoundedBtn, Center } from "@servesall/atoms";

const BookingActions = React.memo(({ status, theme, submit }) => {
  if (status === "Pending") {
    return (
      <Margin>
        <Row style={{ flex: 1, justifyContent: "space-between" }}>
          <View style={{ flex: 6 }}>
            <RoundedBtn
              onClick={() => submit({ status_id: 6 })}
              style={{ borderWidth: 1, borderColor: theme.color10 }}
              color={theme.color1}
            >
              <Center>
                <Margin>
                  <H3>Decline</H3>
                </Margin>
              </Center>
            </RoundedBtn>
          </View>
          <View style={{ flex: 1 }} />
          <View style={{ flex: 6 }}>
            <RoundedBtn
              onClick={() => submit({ status_id: 2 })}
              color={theme.color2}
            >
              <Center>
                <Margin>
                  <H3 color={theme.color1}>Accept</H3>
                </Margin>
              </Center>
            </RoundedBtn>
          </View>
        </Row>
      </Margin>
    );
  }
  return null;
});

export default BookingActions;
