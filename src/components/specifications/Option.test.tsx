import { shallow } from "enzyme";
import * as DependancyContext from "../../contexts/dependanciesContext";
import { ComputerPartsOption } from "../../interfaces/computerParts";
import Option from "./Option";

describe("Option component", () => {
  let mockDependanciesContext: jest.MockInstance<{}, []>;

  beforeEach(() => {
    mockDependanciesContext = jest
      .spyOn(DependancyContext, "useDepsContext")
      .mockReturnValue({
        currencySvc: {
          formatCurrency: () => "$10",
        },
      });
  });

  afterEach(() => {
    mockDependanciesContext.mockReset();
  });

  it("should render selected options details correctly", () => {
    const wrapper = setup(true);
    expect(wrapper.at(0).type()).toBe("li");
    expect(wrapper.at(0).hasClass("selected")).toBe(true);

    const spanName = wrapper.at(0).find("span.component-option__name");
    expect(spanName.text()).toEqual("option1");

    const spanAmount = wrapper.at(0).find("span.component-option__price");
    expect(spanAmount.text()).toEqual("$10");
  });

  it("should render unselected options details correctly", () => {
    const wrapper = setup(false);
    expect(wrapper.at(0).type()).toBe("li");
    expect(wrapper.at(0).hasClass("selected")).toBe(false);

    const spanName = wrapper.at(0).find("span.component-option__name");
    expect(spanName.text()).toEqual("option1");

    const spanAmount = wrapper.at(0).find("span.component-option__price");
    expect(spanAmount.text()).toEqual("$10");
  });

  it("should use callback function when clicked", () => {
    const mockOnOptionChosen = jest.fn(() => {});

    const option: ComputerPartsOption = {
      name: "option1",
      amount: 100,
      default: false,
    };
    const wrapper = setup(false, option, mockOnOptionChosen);

    wrapper.simulate("click");

    expect(mockOnOptionChosen.mock.calls.length).toBe(1);
    expect(mockOnOptionChosen.mock.calls[0]).toEqual([option]);
  });
});

const setup = (
  isSelected: boolean,
  passedOption?: ComputerPartsOption,
  passedOnOptionChosen?: (option: ComputerPartsOption) => void
) => {
  const option: ComputerPartsOption = passedOption || {
    name: "option1",
    amount: 1000,
    default: false,
  };
  const selected = isSelected;
  const onOptionChosen = passedOnOptionChosen || jest.fn(() => {});

  const wrapper = shallow(
    <Option
      option={option}
      selected={selected}
      onOptionChosen={onOptionChosen}
    />
  );
  return wrapper;
};
