<template>
  <Input
    v-for="currency in currencies"
    :key="currency.name"
    :currency="currency"
    @type="convert"
  />
</template>

<script>
import Input from '@/components/Input';
import { getCurrencyAmountFromUsdAmount, getUsdAmountFromCurrencyAmount } from '@/logic/functions';
import { RATIOS } from '../ratios';

export default {
  components: { Input },

  data() {
    return {
      currencies: {
        USD: {
          name: 'USD',
          amount: 1
        },
        BYN: {
          name: 'BYN',
          amount: 0
        },
        EUR: {
          name: 'EUR',
          amount: 0
        },
        RUB: {
          name: 'RUB',
          amount: 0
        },
        UAH: {
          name: 'UAH',
          amount: 0
        },
      }
    };
  },

  methods: {
    /**
     * Convert all this.currencies.amounts into proper amounts.
     * @description We take USD and then convert other currencies against USD.
     * If active currency is USD, then we take its amount. If not, then we convert active currency
     * to USD, and then we convert other currencies against USD.
     * @param name Name of currency from input
     * @param amount Amount of currency from input
     */
    // TODO: write better
    convert({ name, amount }) {
      if (name === 'USD') {
        this.currencies.USD.amount = amount;
      } else {
        this.currencies.USD.amount = getUsdAmountFromCurrencyAmount(amount, RATIOS[name]);
      }

      // .filter(curr => curr !== 'USD' && **curr !== name**) -> ** is for avoiding situations when
      // app tries to convert active currency too
      const currenciesNames = Object.keys(this.currencies).filter(curr => curr !== 'USD' && curr !== name);
      for (const currencyName of currenciesNames) {
        this.currencies[currencyName].amount = getCurrencyAmountFromUsdAmount(this.currencies.USD.amount, RATIOS[currencyName]);
      }
    }
  }
};
</script>

<style src="./css/style.css" />
