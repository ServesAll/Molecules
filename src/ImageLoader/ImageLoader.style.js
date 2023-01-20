import styled from "styled-components/native";
import LottieView from "lottie-react-native";
import FastImage from "react-native-fast-image";

export const ImageLoaderWrapper = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  background-color: ${(props) => props.background};
`;

export const ImagePreload = styled(LottieView)`
  align-items: stretch;
  justify-content: center;
`;

export const ImageComponent = styled(FastImage)`
  flex: 1;
  justify-content: center;
  opacity: ${(props) => (props.showImage ? 1 : 0)};
`;
