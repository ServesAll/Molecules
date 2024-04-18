import React, { useState, useEffect } from "react";
import { MarginTop } from "@servesall/atoms";
import Category from "./Category";

export default function SubCategoryElement({
  sub_categories,
  service_sub_categories,
  radio,
  theme,
  onValueChange,
}) {
  const [selected_sub_categories, set_selected_sub_categories] = useState([
    ...service_sub_categories,
  ]);

  const toggleCategories = ({ sub_category_id, value }) => {
    if (radio) {
      if (value) {
        set_selected_sub_categories([{ sub_category_id }]);
      }
    } else {
      if (value) {
        set_selected_sub_categories((prevValues) => [
          ...prevValues,
          { sub_category_id },
        ]);
      } else {
        set_selected_sub_categories(
          selected_sub_categories.filter(
            (obj) => obj.category_id !== sub_category_id
          )
        );
      }
    }
  };

  useEffect(() => {
    onValueChange(selected_sub_categories);
  }, [selected_sub_categories]);

  return (
    <>
      {sub_categories.map(({ id, sub_category_id, name }) => {
        const search_category = sub_category_id ? sub_category_id : id;
        const isActive = selected_sub_categories.find(
          (obj) => obj.sub_category_id === search_category
        );

        return (
          <MarginTop key={id}>
            <Category
              category_identifier={search_category}
              name={name}
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
