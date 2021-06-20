import { shallow } from "enzyme";
import { ComputerPartsCategory } from "../../interfaces/computerParts";
import Specification from "./Specifications";
import CategoriesList from "./CategoriesList";

describe("Specification component", () => {
  it("should have child CategoriesList component", () => {
    const categories: ComputerPartsCategory[] = [{ name: "cat1", options: [] }];
    const wrapper = shallow(<Specification categories={categories} />);

    const categoriesList = wrapper.find(CategoriesList);

    expect(categoriesList.length).toEqual(1);
    expect(categoriesList.at(0).props()).toEqual({ categories: categories });
  });
});
