import { mount } from "enzyme";
import DependanciesProvider, { useDepsContext } from "./dependanciesContext";

describe("dependancies context", () => {
  it("should provide correct dependancies", () => {
    const dummayTestSvc = {
      get: () => "TestValue",
    };

    const TestComponent = () => {
      const { testSvc } = useDepsContext();
      return testSvc.get();
    };

    const wrapper = mount(
      <DependanciesProvider testSvc={dummayTestSvc}>
        <TestComponent />
      </DependanciesProvider>
    );

    expect(wrapper.text()).toBe("TestValue");
  });
});
