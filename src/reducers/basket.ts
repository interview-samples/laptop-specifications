import { BasketActionTypes } from "../actions/basket";
import { BasketSelection } from "../interfaces/basket";

export interface InitialiseAction {
  type: BasketActionTypes.initialise;
  payload: BasketSelection[];
}

export interface UpdateAction {
  type: BasketActionTypes.updateSelection;
  payload: BasketSelection;
}

const basketReducer = (
  state: BasketSelection[] = [],
  action: InitialiseAction | UpdateAction
): BasketSelection[] => {
  switch (action.type) {
    case BasketActionTypes.initialise:
      return action.payload;
    case BasketActionTypes.updateSelection:
      return state.map((selection) => {
        return selection.categoryName === action.payload.categoryName
          ? action.payload
          : selection;
      });
    default:
      return state;
  }
};

export default basketReducer;
