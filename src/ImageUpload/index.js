import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import { UploadWrapper, UploadIconWrapper } from "./ImageUpload.style";
import UploadIcon from "./UploadIcon";
import ImageLoader from "../ImageLoader";

export default function ImageUpload({
  theme,
  square = false,
  imageUri,
  imageName,
  resetImage = false,
  onChange = () => {},
}) {
  const [image, setImage] = useState(false);

  useEffect(() => {
    if (imageUri || resetImage) {
      setImage({ source: imageUri, filename: imageName || "" });
    }
  }, [imageUri, imageName]);

  useEffect(() => {
    if (image) {
      onChange(image);
    }
  }, [image]);

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 1080,
      height: square ? 1080 : 720,
      cropping: true,
    }).then((image) => {
      setImage({
        source: image.sourceURL || image.path,
        filename: image.filename,
      });
    });
  };

  return (
    <Pressable onPress={() => pickImage()}>
      <UploadWrapper square={square} theme={theme}>
        {image && (
          <ImageLoader background={theme.color7} imageUrl={image.source} />
        )}
        {!image && (
          <UploadIconWrapper theme={theme}>
            <UploadIcon />
          </UploadIconWrapper>
        )}
      </UploadWrapper>
    </Pressable>
  );
}
