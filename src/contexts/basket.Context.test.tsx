import { mount } from "enzyme";
import { useEffect } from "react";
import BasketContextProvider, { useBasketContext } from "./basketContext";
import { BasketActionTypes } from "../actions/basket";

let mockDispatch: jest.Mock<void, []> = jest.fn(() => {});

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: () => {},
  useReducer: () => [
    [
      { categoryName: "cat1", optionName: "opt1", amount: 100 },
      { categoryName: "cat2", optionName: "opt2", amount: 200 },
    ],
    mockDispatch,
  ],
}));

afterEach(() => {
  mockDispatch.mockReset();
});

describe("basket context", () => {
  it("should provide correct selections", () => {
    const TestComponent = () => {
      const { selections } = useBasketContext();
      return (
        <p>
          {selections
            .map((s) => `${s.categoryName}${s.optionName}${s.amount}`)
            .join("")}
        </p>
      );
    };
    const wrapper = mount(
      <BasketContextProvider>
        <TestComponent />
      </BasketContextProvider>
    );
    expect(wrapper.text()).toBe("cat1opt1100cat2opt2200");
  });

  it("should provide correct total", () => {
    const TestComponent = () => {
      const { basketTotal } = useBasketContext();
      return <p>{basketTotal()}</p>;
    };
    const wrapper = mount(
      <BasketContextProvider>
        <TestComponent />
      </BasketContextProvider>
    );
    expect(wrapper.text()).toBe("300");
  });

  it("should provide correct selected option name for category", () => {
    const TestComponent = () => {
      const { selectedOptionForCatgory } = useBasketContext();
      return <p>{selectedOptionForCatgory("cat2")}</p>;
    };
    const wrapper = mount(
      <BasketContextProvider>
        <TestComponent />
      </BasketContextProvider>
    );
    expect(wrapper.text()).toBe("opt2");
  });

  it("should dispatch initialise action", () => {
    const initialisePayload = [
      { categoryName: "cat1", optionName: "opt1", amount: 100 },
      { categoryName: "cat2", optionName: "opt2", amount: 200 },
    ];

    const TestComponent = () => {
      const { initialise } = useBasketContext();
      useEffect(() => {
        initialise(initialisePayload);
      });
      return null;
    };
    mount(
      <BasketContextProvider>
        <TestComponent />
      </BasketContextProvider>
    );
    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0]).toEqual([
      {
        type: BasketActionTypes.initialise,
        payload: initialisePayload,
      },
    ]);
  });

  it("should dispatch update category action", () => {
    const updatePayload = {
      categoryName: "cat1",
      optionName: "opt2",
      amount: 100,
    };

    const TestComponent = () => {
      const { updateCategorySelection } = useBasketContext();
      useEffect(() => {
        updateCategorySelection(updatePayload);
      });
      return null;
    };
    mount(
      <BasketContextProvider>
        <TestComponent />
      </BasketContextProvider>
    );
    expect(mockDispatch.mock.calls.length).toBe(1);
    expect(mockDispatch.mock.calls[0]).toEqual([
      {
        type: BasketActionTypes.updateSelection,
        payload: updatePayload,
      },
    ]);
  });
});
