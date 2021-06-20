import React from "react";
import Category from "./Category";
import { useBasketContext } from "../../contexts/basketContext";
import { BasketSelection } from "../../interfaces/basket";
import { ComputerPartsCategory } from "../../interfaces/computerParts";

interface CategoriesListPropTypes {
  categories: ComputerPartsCategory[];
}

const CategoriesList: React.FC<CategoriesListPropTypes> = ({ categories }) => {
  const { selectedOptionForCatgory, updateCategorySelection } =
    useBasketContext();

  const handleCategoryOptionChosen = (selection: BasketSelection) => {
    updateCategorySelection(selection);
  };

  return (
    <>
      {categories.map((category) => {
        return (
          <Category
            key={category.name}
            selectedOption={selectedOptionForCatgory(category.name)}
            category={category}
            onCategoryOptionChosen={handleCategoryOptionChosen}
          />
        );
      })}
    </>
  );
};

export default CategoriesList;
