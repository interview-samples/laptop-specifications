import { shallow } from "enzyme";
import { ComputerPartsOption } from "../../interfaces/computerParts";
import OptionsList from "./OptionsList";
import Option from "./Option";

describe("OptionsList component", () => {
  it("should have child options component with correct props", () => {
    const onOptionChanged = () => {};
    const options: ComputerPartsOption[] = [
      { name: "option1", amount: 100, default: true },
      { name: "option2", amount: 200, default: false },
    ];
    const wrapper = shallow(
      <OptionsList
        selectedOption="option2"
        options={options}
        onOptionChosen={onOptionChanged}
      />
    );

    const optionComponents = wrapper.find(Option);

    expect(optionComponents.length).toEqual(2);

    const option1 = optionComponents.at(0);
    expect(option1.props()).toEqual({
      option: options[0],
      selected: false,
      onOptionChosen: onOptionChanged,
    });

    const option2 = optionComponents.at(1);
    expect(option2.props()).toEqual({
      option: options[1],
      selected: true,
      onOptionChosen: onOptionChanged,
    });
  });
});
