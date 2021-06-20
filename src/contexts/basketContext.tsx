import React, { createContext, useContext, useCallback } from "react";
import { BasketActionTypes } from "../actions/basket";
import { BasketSelection } from "../interfaces/basket";
import basketReducer from "../reducers/basket";

export interface BasketContext {
  selections: BasketSelection[];
  initialise: (selections: BasketSelection[]) => void;
  updateCategorySelection: (selection: BasketSelection) => void;
  selectedOptionForCatgory: (categoryName: string) => string;
  basketTotal: () => number;
}

const basketContext = createContext<BasketContext>({
  selections: [],
  initialise: (selections) => {},
  updateCategorySelection: (selection) => {},
  selectedOptionForCatgory: (categoryName) => "",
  basketTotal: () => 0,
});

const BasketContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(basketReducer, []);

  const initialise = useCallback((selections: BasketSelection[]) => {
    dispatch({ type: BasketActionTypes.initialise, payload: selections });
  }, []);

  const updateCategorySelection = useCallback((selection: BasketSelection) => {
    dispatch({ type: BasketActionTypes.updateSelection, payload: selection });
  }, []);

  const selectedOptionForCatgory = useCallback(
    (categoryName: string) => {
      return (
        state.find((s) => s.categoryName === categoryName)?.optionName || ""
      );
    },
    [state]
  );

  const basketTotal = useCallback(() => {
    return state.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  }, [state]);

  return (
    <basketContext.Provider
      value={{
        selections: state,
        initialise,
        updateCategorySelection,
        selectedOptionForCatgory,
        basketTotal,
      }}
    >
      {children}
    </basketContext.Provider>
  );
};

export default BasketContextProvider;

export const useBasketContext = () => useContext(basketContext);
