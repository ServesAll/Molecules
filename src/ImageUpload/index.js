import React, { useEffect, useState } from "react";
import { Pressable } from "react-native";
import ImagePicker from "react-native-image-crop-picker";
import { UploadWrapper, UploadIconWrapper } from "./ImageUpload.style";
import UploadIcon from "./UploadIcon";
import ImageLoader from "../ImageLoader";

export default function ImageUpload({ theme, imageUri, onChange = () => {} }) {
  const [image, setImage] = useState(false);

  useEffect(() => {
    if (imageUri) {
      setImage(imageUri);
    }
  }, [imageUri]);

  useEffect(() => {
    if (image) {
      onChange(image);
    }
  }, [image]);

  const pickImage = () => {
    ImagePicker.openPicker({
      width: 1080,
      height: 720,
      cropping: true,
    }).then((image) => {
      setImage(image.sourceURL || image.path);
    });
  };

  return (
    <Pressable onPress={() => pickImage()}>
      <UploadWrapper theme={theme}>
        {image && <ImageLoader background={theme.color7} imageUrl={image} />}
        {!image && (
          <UploadIconWrapper theme={theme}>
            <UploadIcon />
          </UploadIconWrapper>
        )}
      </UploadWrapper>
    </Pressable>
  );
}
