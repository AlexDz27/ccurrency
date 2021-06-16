<template>
  <Input
    v-for="(amount, name) in currencies"
    :key="name"

    :currency:="{ amount: amount, name: name }"


  />
</template>

<script>
import Input from '@/components/Input';

export default {
  components: { Input },

  data() {
    return {
      currencies: {
        usd: 1,
        byn: 0
      }
    }
  },

  methods: {
    // convert(evt) {
    //   console.log( getCurrencyAmountFromUsd() )
    // }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 435px;
  margin-left: auto;
  margin-right: auto;
}

.input-container {
  display: flex;
  align-items: center;
  font-size: 32px;
}

.input {
  width: 100%;
  box-sizing: border-box;
  font-size: 32px;
}

.input-currency {
  margin-right: 9px;
}
</style>
