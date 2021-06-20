import React from "react";
import OptionsList from "./OptionsList";
import { BasketSelection } from "../../interfaces/basket";
import {
  ComputerPartsCategory,
  ComputerPartsOption,
} from "../../interfaces/computerParts";

interface CategoryPropTypes {
  category: ComputerPartsCategory;
  selectedOption: string;
  onCategoryOptionChosen: (selection: BasketSelection) => void;
}

const Option: React.FC<CategoryPropTypes> = ({
  category,
  onCategoryOptionChosen,
  selectedOption,
}) => {
  const handleOptionChosen = (option: ComputerPartsOption) => {
    onCategoryOptionChosen({
      categoryName: category.name,
      optionName: option.name,
      amount: option.amount,
    });
  };

  return (
    <div className="spec-sheet__ComputerParts">
      <h4 className="component__title">{category.name}</h4>
      <OptionsList
        selectedOption={selectedOption}
        options={category.options}
        onOptionChosen={handleOptionChosen}
      />
    </div>
  );
};

export default Option;
