import React from "react";
import { H3, PaddingVertical } from "@servesall/atoms";
import { MerchantCardWrapper, ImageWrapper } from "./MerchantCard.style";
import ImageLoader from "../ImageLoader";

function MerchantCard({ merchant, theme }) {
  return (
    <MerchantCardWrapper theme={theme}>
      <ImageWrapper theme={theme}>
        <ImageLoader background={theme.color7} imageUrl={merchant.image_uri} />
      </ImageWrapper>
      <PaddingVertical>
        <H3>{merchant.name}</H3>
      </PaddingVertical>
    </MerchantCardWrapper>
  );
}

export default MerchantCard;
