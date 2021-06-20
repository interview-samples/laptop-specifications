import { shallow } from "enzyme";
import * as hooks from "./hooks/useAppData";
import App from "./App";
import Summary from "./components/summary/Summary";
import Specifications from "./components/specifications/Specifications";

describe("App component", () => {
  it("should display error message when it fails to load data", () => {
    jest
      .spyOn(hooks, "useAppData")
      .mockImplementation(() => [false, true, null]);

    const wrapper = shallow(<App />);
    expect(wrapper.text()).toBe("Error");
  });

  it("should display loading message whilst loadint", () => {
    jest
      .spyOn(hooks, "useAppData")
      .mockImplementation(() => [true, false, null]);

    const wrapper = shallow(<App />);
    expect(wrapper.text()).toBe("Loading ...");
  });

  it("should display summary component when data loaded", () => {
    jest
      .spyOn(hooks, "useAppData")
      .mockImplementation(() => [false, false, { categories: [] }]);

    const wrapper = shallow(<App />);
    const summary = wrapper.find(Summary);
    expect(summary.length).toBe(1);
  });

  it("should display specifications component when data loaded", () => {
    jest
      .spyOn(hooks, "useAppData")
      .mockImplementation(() => [
        false,
        false,
        { categories: [{ name: "cat1", options: [] }] },
      ]);

    const wrapper = shallow(<App />);
    const specifications = wrapper.find(Specifications);
    expect(specifications.length).toBe(1);
    expect(specifications.prop("categories")).toEqual([
      { name: "cat1", options: [] },
    ]);
  });
});
