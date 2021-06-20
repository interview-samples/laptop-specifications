export interface ICurrencyService {
  formatCurrency: (amount: number, symbol?: string) => string;
}

const currencySvc: ICurrencyService = {
  formatCurrency: (amount: number, symbol = "£") =>
    `${symbol}${(amount / 100).toFixed(2)}`,
};

export default currencySvc;
