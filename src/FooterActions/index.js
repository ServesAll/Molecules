import React from "react";
import {
  H3,
  Center,
  AnimatedButton,
  Padding,
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
        <Padding
          style={{
            flex: 1,
            ...((loading || success || error) && { margin: 0 }),
          }}
        >
          <Row
            style={{
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            {leftElement}
            <AnimatedButton
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
              </Center>
            </AnimatedButton>
          </Row>
        </Padding>
      </Wrapper>
    );
  }
);

export default FooterActions;
