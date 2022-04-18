import React, { useRef, useEffect } from "react";
import LottieView from "lottie-react-native";
import { Center, Padding } from "@servesall/atoms";
import { SubmitWrapper } from "./Submit.style";
import rocket from "./rocket.json";

export default function Submit() {
  const animation = useRef(null);

  useEffect(() => {
    //animation.current.play(12, 132);
  }, []);

  return (
    <SubmitWrapper>
      <Center>
        <LottieView
          style={{
            width: 40,
          }}
          autoPlay={false}
          loop={true}
          ref={animation}
          source={rocket}
        />
      </Center>
    </SubmitWrapper>
  );
}
