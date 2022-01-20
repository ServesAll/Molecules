import React, { useEffect, useState } from "react";
import { View, Image, Dimensions } from "react-native";
import {
  Margin,
  MarginTop,
  MarginVertical,
  TextBtn,
  H1,
  H2,
  H3,
  Row,
  useThemeContext,
} from "@servesall/atoms";
import merchantFilter from "./merchantFilter.png";
import { Body, Wrapper, ImageWrap } from "./ServiceContainer.style";
import sports from "./assets/sports.json";
import fitness from "./assets/fitness.json";
import restaurant from "./assets/restaurant.json";
import spa from "./assets/spa.json";
import pet from "./assets/pet.json";
import LottieView from "lottie-react-native";

const ImageRender = ({ available_categories, service }) => {
  const categoryObject = available_categories.find(
    (e) => e.category_id == service.category_id
  );
  if (service.asset) {
    return (
      <>
        <Image
          source={{
            uri: service.asset.cdn_uri || null,
          }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 80,
            position: "absolute",
            left: 0,
            top: 0,
          }}
        />
        <Image
          source={{ uri: merchantFilter }}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 80,
            left: 0,
            top: 0,
          }}
        />
      </>
    );
  } else {
    return (
      <View
        style={{
          width: "100%",
          backgroundColor: categoryObject.color,
          height: 80,
          left: 0,
          top: 0,
          overflow: "hidden",
          alignItems: "flex-end",
        }}
      >
        <LottieView
          style={{ height: 120 }}
          autoPlay={false}
          loop={false}
          source={categoryObject.image}
        />
      </View>
    );
  }
};

const ServiceContainer = React.memo(
  ({ service, children, onClick = () => {} }) => {
    const theme = useThemeContext();

    const available_categories = [
      {
        category_id: 1,
        id: "restaurants",
        name: "Restaurant",
        color: theme.color6,
        image: restaurant,
      },
      {
        category_id: 2,
        id: "fitness",
        name: "Fitness",
        color: theme.color15,
        image: fitness,
      },
      {
        category_id: 3,
        id: "sports",
        name: "Sports",
        color: theme.color11,
        image: sports,
      },
      {
        category_id: 5,
        id: "spa",
        name: "Spa & Beauty",
        color: theme.color12,
        image: spa,
      },

      {
        category_id: 8,
        id: "pet",
        name: "Pet Services",
        color: theme.color5,
        image: pet,
      },
    ];

    return (
      <Wrapper theme={theme}>
        <ImageWrap theme={theme}>
          <ImageRender
            available_categories={available_categories}
            service={service}
          />
          <View
            style={{
              width: "100%",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Margin>
              <H3 color={theme.color1}>{service.name}</H3>
            </Margin>
          </View>
        </ImageWrap>

        <Body theme={theme}>
          <Margin>{children}</Margin>
        </Body>
      </Wrapper>
    );
  }
);

export default ServiceContainer;
