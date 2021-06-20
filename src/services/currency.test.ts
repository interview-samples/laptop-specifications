import currencyService from "./currency";

describe("Currency service", () => {
  it("should display correctly with default symbol", () => {
    const result = currencyService.formatCurrency(1000);
    expect(result).toEqual("£10.00");
  });

  it("should display correnctly with custom symbol", () => {
    const result = currencyService.formatCurrency(1000, "$");
    expect(result).toEqual("$10.00");
  });
});
