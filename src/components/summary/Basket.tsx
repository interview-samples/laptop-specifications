import { useBasketContext } from "../../contexts/basketContext";
import { useDepsContext } from "../../contexts/dependanciesContext";

const Basket = () => {
  const { selections, basketTotal } = useBasketContext();
  const { currencySvc } = useDepsContext();

  return (
    <>
      <div className="summary-window__chosen-specs">
        <ul className="chosen-specs__spec-list list--no-style">
          {selections.map((s) => {
            return (
              <li key={s.categoryName} className="spec-list__spec">
                {s.optionName}
              </li>
            );
          })}
        </ul>
      </div>
      <span className="summary-window__total">
        Total: {currencySvc.formatCurrency(basketTotal())}
      </span>
    </>
  );
};

export default Basket;
