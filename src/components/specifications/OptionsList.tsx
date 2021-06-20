import React from "react";
import Option from "./Option";
import { ComputerPartsOption } from "../../interfaces/computerParts";

interface OptionListPropTypes {
  options: ComputerPartsOption[];
  selectedOption: string;
  onOptionChosen: (option: ComputerPartsOption) => void;
}

const OptionsList: React.FC<OptionListPropTypes> = ({
  options,
  onOptionChosen,
  selectedOption,
}) => {
  return (
    <ul className="component__component-options list--no-style">
      {options.map((option) => (
        <Option
          selected={option.name === selectedOption}
          key={option.name}
          option={option}
          onOptionChosen={onOptionChosen}
        />
      ))}
    </ul>
  );
};

export default OptionsList;
