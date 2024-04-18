import React from "react";
import { Padding, H3, Row, MarginHorizontal, Switch } from "@servesall/atoms";

export default function Category({
  theme,
  radio,
  category_identifier,
  name,
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
          sub_category_id: category_identifier,
        });
      }}
      style={{
        backgroundColor: isActive ? color11light : color1,
      }}
    >
      <Row style={{ alignItems: "center", flex: 1 }}>
        <Padding>
          <MarginHorizontal>
            <H3 fontFamily={fontFamily3} color={isActive ? greenDark : color2}>
              {name}
            </H3>
          </MarginHorizontal>
        </Padding>
      </Row>
    </Switch>
  );
}
