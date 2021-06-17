export function getCurrencyAmountFromUsd(usdAmount, currencyRatio) {
  const amount = (usdAmount * currencyRatio).toFixed(4);

  return Number(amount);
}