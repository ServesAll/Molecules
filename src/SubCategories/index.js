import React from "react";
import { useThemeContext } from "@servesall/atoms";
import SubCategoryElement from "./SubCategories";
import Ghost from "./Category.ghost";

export default function SubCategories({
  sub_categories,
  service_sub_categories,
  radio,
  onValueChange = () => {},
}) {
  const theme = useThemeContext();

  if (!service_sub_categories || !sub_categories)
    return <Ghost theme={theme} />;

  return (
    <SubCategoryElement
      theme={theme}
      sub_categories={sub_categories}
      service_sub_categories={service_sub_categories}
      radio={radio}
      onValueChange={onValueChange}
    />
  );
}
