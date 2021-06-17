export function getCurrencyAmountFromUsdAmount(usdAmount, currencyRatio) {
  const currencyAmount = (usdAmount * currencyRatio).toFixed(4);

  return Number(currencyAmount);
}

export function getUsdAmountFromCurrencyAmount(currencyAmount, currencyRatio) {
  const usdAmount = (currencyAmount / currencyRatio).toFixed(4);

  return Number(usdAmount);
}