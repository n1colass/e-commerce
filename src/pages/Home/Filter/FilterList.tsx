import React from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { categories } from "../../../types/categories";
import { useSendCategoryMutation } from "../../../store/productsAPI";
import { useDebounce } from "../../../hooks/useDebounce";
import {
  setData,
  setLoadingStatus,
} from "../../../store/slices/filterCategorySlice";
import { useAppDispatch } from "../../../hooks/redux";
import { Product } from "../../../types/product";

const FilterList = () => {
  const [checkedItems, setCheckedItems] = React.useState<string[]>([]);
  const [sendCategory, { data, isSuccess }] = useSendCategoryMutation();

  const dispatch = useAppDispatch();
  React.useEffect(() => {
    console.log(data, isSuccess);
    if (isSuccess === true) {
      dispatch(setData(data as Product[]));
    }
  }, [dispatch, isSuccess]);

  const toggleCheck = (item: string) => {
    const currentCheckIndex = checkedItems.indexOf(item);
    const newCheckedItems = [...checkedItems];
    if (currentCheckIndex !== -1) {
      newCheckedItems.splice(currentCheckIndex, 1);
    }
    if (currentCheckIndex === -1) {
      newCheckedItems.push(item);
    }

    setCheckedItems(newCheckedItems);
    dispatch(setLoadingStatus());
  };

  React.useEffect(
    useDebounce(async () => {
      await sendCategory(checkedItems);
    }, 700),
    [checkedItems]
  );

  return (
    <FormGroup>
      {categories.map((item) => {
        return (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox
                onChange={() => toggleCheck(item.category)}
                checked={checkedItems.includes(item.category)}
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
