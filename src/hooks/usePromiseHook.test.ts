import { renderHook } from "@testing-library/react-hooks";
import usePromiseHook from "./usePromiseHook";

describe("usePromiseHook", () => {
  it("should return correct values when promise rejects", async () => {
    const promise = Promise.reject();

    const { result, waitForNextUpdate } = renderHook(() =>
      usePromiseHook(promise)
    );

    const expectedResult = [false, true, null];

    await waitForNextUpdate();

    expect(result.current).toEqual(expectedResult);
  });

  it("should return correct values whilst promise is pending", () => {
    const promise = new Promise(() => {});

    const { result } = renderHook(() => usePromiseHook(promise));

    const expectedResult = [true, false, null];

    expect(result.current).toEqual(expectedResult);
  });

  it("should return correct values when promise resolve", async () => {
    const promise = Promise.resolve("Test Result");

    const { result, waitForNextUpdate } = renderHook(() =>
      usePromiseHook(promise)
    );

    const expectedResult = [false, false, "Test Result"];

    await waitForNextUpdate();

    expect(result.current).toEqual(expectedResult);
  });
});
