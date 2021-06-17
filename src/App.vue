<template>
  <Input
    v-for="(amount, name) in currencies"
    :key="name"
    :currency="{ name, amount }"
    @type="convert"
  />
</template>

<script>
import Input from '@/components/Input';
import { getCurrencyAmountFromUsd } from '@/logic/functions';
import { RATIOS } from '../ratios';

export default {
  components: { Input },

  data() {
    return {
      currencies: {
        usd: 1,
        byn: 0,
        eur: 0,
        rub: 0,
        uah: 0
      }
    }
  },

  methods: {
    convert({ name, amount }) {
      console.log(name)

      const bynAmount = getCurrencyAmountFromUsd(amount, RATIOS.BYN);

      this.currencies.byn = bynAmount;
    }
  }
}
</script>

<style src="./css/style.css" />
