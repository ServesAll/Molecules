import React from "react";
import { View } from "react-native";
import {
  H3,
  Center,
  AnimatedButton,
  Row,
  Success,
  Error,
  Loader,
  MarginHorizontal,
  Icon,
} from "@servesall/atoms";
import { Wrapper } from "./FooterActions.style";

const FooterActions = React.memo(
  ({
    children,
    leftElement = false,
    active,
    loading,
    success,
    error,
    theme,
    onClick = () => {},
  }) => {
    return (
      <Wrapper theme={theme}>
        <Row
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {leftElement}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 1.6,
              height: "100%",
              ...((loading || success || error) && { margin: 0 }),
            }}
          >
            <AnimatedButton
              leftElement={leftElement}
              active={active}
              color={loading ? "transparent" : theme.color2}
              loading={loading}
              onClick={() => onClick()}
              success={success}
              error={error}
              successElement={
                <Center>
                  <Success />
                </Center>
              }
              errorElement={
                <Center>
                  <Error />
                </Center>
              }
              LoaderElement={
                <Center>
                  <Loader color={theme.color2} />
                </Center>
              }
            >
              <Center>
                {children || (
                  <Row>
                    <MarginHorizontal>
                      <H3 color={theme.color1}>Submit</H3>
                    </MarginHorizontal>

                    <Icon
                      icon="next"
                      autoplay={false}
                      loop={false}
                      color={theme.color1}
                    />
                  </Row>
                )}
              </Center>
            </AnimatedButton>
          </View>
        </Row>
      </Wrapper>
    );
  }
);

export default FooterActions;
