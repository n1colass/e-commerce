import React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { categories } from "../../../types/categories";

const FilterList = () => {
  const [checkedItems, setCheckedItems] = React.useState<number[]>([]);

  const toggleCheck = (item: number) => {
    const currentCheckIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];
    const currentCategory = categories.filter((el) => el.id === item)[0]
      .category;
    if (currentCheckIndex !== -1) {
      newCheckedItems.splice(currentCheckIndex, 1);
    }
    if (currentCheckIndex === -1) {
      newCheckedItems.push(item);
    }

    setCheckedItems(newCheckedItems);
    console.log(currentCategory, newCheckedItems.includes(item));
  };

  return (
    <FormGroup>
      {categories.map((item) => {
        return (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
                onChange={() => toggleCheck(item.id)}
                checked={checkedItems.includes(item.id)}
              />
            }
            label={item.category}
          />
        );
      })}
    </FormGroup>
  );
};

export default FilterList;
