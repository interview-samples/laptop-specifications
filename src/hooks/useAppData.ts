import { useEffect, useRef } from "react";
import { useBasketContext } from "../contexts/basketContext";
import { useDepsContext } from "../contexts/dependanciesContext";
import { BasketSelection } from "../interfaces/basket";
import { ComputerPartsData } from "../interfaces/computerParts";
import usePromiseHook from "./usePromiseHook";

export function useAppData(): [boolean, boolean, ComputerPartsData | null] {
  const { initialise } = useBasketContext();
  const { optionsDataSvc } = useDepsContext();
  const promiseRef = useRef(optionsDataSvc.loadData());
  const [isLoading, hasError, data] = usePromiseHook<ComputerPartsData>(
    promiseRef.current
  );

  useEffect(() => {
    if (data) {
      const selections = data.categories.map<BasketSelection>((c) => {
        const defaultOption = c.options.find((o) => o.default);
        return {
          categoryName: c.name,
          optionName: defaultOption?.name || "",
          amount: defaultOption?.amount || 0,
        };
      });
      initialise(selections);
    }
  }, [data, initialise]);

  return [isLoading, hasError, data];
}
