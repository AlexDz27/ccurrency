function getCurrencyAmountFromUsd(usdAmount, currencyRatio) {
  const amount = (usdAmount * currencyRatio).toFixed(4);

  return Number(amount);
}

console.log( '1 USD in BYN is ', getCurrencyAmountFromUsd(.5, 2.4866) )