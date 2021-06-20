import { shallow, ShallowWrapper } from "enzyme";
import * as BasketContextExports from "../../contexts/basketContext";
import * as ProviderContextExports from "../../contexts/dependanciesContext";
import { BasketContext } from "../../contexts/basketContext";

import React from "react";
import Basket from "./Basket";

describe("Basket components", () => {
  let wrapper: ShallowWrapper<React.Component<{}, {}, any>, any, Readonly<{}>>;
  let mockBasketContext: jest.MockInstance<BasketContext, []>;
  let mockDependanciesContext: jest.MockInstance<{}, []>;

  beforeAll(() => {
    const contextValues: BasketContext = {
      selections: [
        { categoryName: "Cat1", optionName: "Opt1", amount: 300 },
        { categoryName: "Cat2", optionName: "Opt2", amount: 400 },
      ],
      basketTotal: () => 700,
      initialise: () => {},
      updateCategorySelection: () => {},
      selectedOptionForCatgory: () => "",
    };
    mockBasketContext = jest
      .spyOn(BasketContextExports, "useBasketContext")
      .mockImplementation(() => contextValues);
    mockDependanciesContext = jest
      .spyOn(ProviderContextExports, "useDepsContext")
      .mockImplementation(() => ({
        currencySvc: {
          formatCurrency: (amount: number) => `£${amount}`,
        },
      }));
    wrapper = shallow(<Basket />);
  });

  afterAll(() => {
    mockBasketContext.mockReset();
    mockDependanciesContext.mockReset();
  });

  it("should display corrent selections", () => {
    const items = wrapper.find("li");

    expect(items.length).toBe(2);

    expect(items.at(0).text()).toBe("Opt1");

    expect(items.at(1).text()).toBe("Opt2");
  });

  it("should display corrent total", () => {
    const span = wrapper.find("span").at(0);

    expect(span.text()).toBe("Total: £700");
  });
});
