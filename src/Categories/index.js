import React from "react";
import { useThemeContext } from "@servesall/atoms";
import CategoryElement from "./Categories";
import Ghost from "./Category.ghost";

export default function Categories({
  categories,
  merchant_categories,
  radio,
  onValueChange = () => {},
}) {
  const theme = useThemeContext();

  if (!categories) return <Ghost theme={theme} />;

  return (
    <CategoryElement
      theme={theme}
      categories={categories}
      merchant_categories={merchant_categories}
      radio={radio}
      onValueChange={onValueChange}
    />
  );
}
