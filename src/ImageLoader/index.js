import React, { useState } from "react";
import LottieView from "lottie-react-native";
import { ImageLoaderWrapper, ImageComponent } from "./ImageLoader.style";
import loader from "./assets/loader.json";

const ImageLoader = ({ background, imageUrl, styles }) => {
  const [showImage, setShowImage] = useState(false);
  return (
    <ImageLoaderWrapper background={background}>
      {!showImage && <LottieView source={loader} autoPlay loop />}
      <ImageComponent
        source={{ uri: imageUrl }}
        showImage={showImage}
        onLoad={() => setShowImage(true)}
        resizeMode="cover"
        styles={styles}
      />
    </ImageLoaderWrapper>
  );
};

export default ImageLoader;
