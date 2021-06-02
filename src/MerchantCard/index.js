import React from "react";
import { H2, PaddingVertical } from "@servesall/atoms";
import { MerchantCardWrapper, ImageWrapper } from "./MerchantCard.style";
import ImageLoader from "../ImageLoader";

function MerchantCard({ merchant, theme }) {
  return (
    <MerchantCardWrapper theme={theme}>
      <ImageWrapper theme={theme}>
        <ImageLoader background={theme.color7} imageUrl={merchant.image_uri} />
      </ImageWrapper>
      <PaddingVertical>
        <H2>{merchant.name}</H2>
      </PaddingVertical>
    </MerchantCardWrapper>
  );
}

export default MerchantCard;
