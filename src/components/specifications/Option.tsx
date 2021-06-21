import React from "react";
import classNames from "classnames";
import { ComputerPartsOption } from "../../interfaces/computerParts";
import { useDepsContext } from "../../contexts/dependanciesContext";

interface OptionPropTypes {
  selected: boolean;
  option: ComputerPartsOption;
  onOptionChosen: (option: ComputerPartsOption) => void;
}

const Option: React.FC<OptionPropTypes> = ({
  option,
  selected,
  onOptionChosen,
}) => {
  const { currencySvc } = useDepsContext();

  const handleClick = () => {
    onOptionChosen(option);
  };

  const classes = classNames(
    "component-options__component-option clickable rounded-grey-border",
    { selected }
  );

  return (
    <li
      onClick={handleClick}
      className={classes}
    >
      <span className="component-option__name">{option.name}</span>
      <span className="component-option__price">
        {currencySvc.formatCurrency(option.amount)}
      </span>
    </li>
  );
};

export default Option;
