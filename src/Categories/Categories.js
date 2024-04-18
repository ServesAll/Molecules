import React, { useState, useEffect } from "react";
import { MarginTop } from "@servesall/atoms";
import { available_categories } from "./CategoryConfig";
import Category from "./Category";

export default function CategoryElement({
  categories,
  merchant_categories,
  radio,
  theme,
  onValueChange,
}) {
  const [selected_categories, set_selected_categories] = useState(
    merchant_categories ? [...merchant_categories] : []
  );

  const toggleCategories = ({ category_id, value }) => {
    if (radio) {
      if (value) {
        set_selected_categories([{ category_id }]);
      }
    } else {
      if (value) {
        set_selected_categories((prevValues) => [
          ...prevValues,
          { category_id },
        ]);
      } else {
        set_selected_categories(
          selected_categories.filter((obj) => obj.category_id !== category_id)
        );
      }
    }
  };

  useEffect(() => {
    onValueChange(selected_categories);
  }, [selected_categories]);

  return (
    <>
      {categories.map(({ id, category_id }) => {
        const search_category = category_id ? category_id : id;
        const category_config = available_categories.find((cat) => {
          return cat.category_id === search_category;
        });
        const isActive = selected_categories.find(
          (obj) => obj.category_id === search_category
        );

        return (
          <MarginTop key={id}>
            <Category
              category={category_config}
              toggleCategories={toggleCategories}
              radio={radio}
              theme={theme}
              isActive={isActive}
            />
          </MarginTop>
        );
      })}
    </>
  );
}
