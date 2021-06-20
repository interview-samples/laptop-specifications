import { BasketSelection } from "./../interfaces/basket";
import basketReducer, { InitialiseAction, UpdateAction } from "./basket";
import { BasketActionTypes } from "../actions/basket";

describe("Basket reducer", () => {
  it("should intialise correctly", () => {
    const payload: BasketSelection[] = [
      { categoryName: "cat1", optionName: "option1", amount: 100 },
      { categoryName: "cat2", optionName: "option2", amount: 100 },
    ];

    const action: InitialiseAction = {
      type: BasketActionTypes.initialise,
      payload,
    };

    const result = basketReducer([], action);

    expect(result).toBe(payload);
  });

  it("should update a selection correctly", () => {
    const initialState: BasketSelection[] = [
      { categoryName: "cat1", optionName: "option1", amount: 100 },
      { categoryName: "cat2", optionName: "option2", amount: 200 },
    ];

    const payload: BasketSelection = {
      categoryName: "cat2",
      optionName: "option3",
      amount: 300,
    };

    const action: UpdateAction = {
      type: BasketActionTypes.updateSelection,
      payload,
    };

    const result = basketReducer(initialState, action);

    const expected: BasketSelection[] = [
      { categoryName: "cat1", optionName: "option1", amount: 100 },
      { categoryName: "cat2", optionName: "option3", amount: 300 },
    ];

    expect(result).toEqual(expected);
  });
});
