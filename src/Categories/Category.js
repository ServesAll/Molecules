import React from "react";
import { Padding, H3, Row, MarginHorizontal, Switch } from "@servesall/atoms";
import LottieView from "lottie-react-native";

export default function Category({
  theme,
  radio,
  category,
  isActive,
  toggleCategories,
}) {
  const { color11light, color1, color2, greenDark, fontFamily3 } = theme;
  return (
    <Switch
      radio={radio}
      fat={true}
      value={isActive}
      onValueChange={(value) => {
        toggleCategories({
          value,
          category_id: category.category_id
            ? category.category_id
            : category.id,
        });
      }}
      style={{
        backgroundColor: isActive ? color11light : color1,
      }}
    >
      <Padding>
        <Row style={{ alignItems: "center" }}>
          <LottieView
            style={{ height: 60, zIndex: 10, aspectRatio: 1 }}
            autoPlay={false}
            loop={false}
            source={category.image}
          />
          <MarginHorizontal>
            <H3 fontFamily={fontFamily3} color={isActive ? greenDark : color2}>
              {category.name}
            </H3>
          </MarginHorizontal>
        </Row>
      </Padding>
    </Switch>
  );
}
