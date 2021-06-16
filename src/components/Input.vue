<template>
  <p class="input-container">
    <span class="input-currency">{{ currency.name }}:</span>
    <input @keypress="allowOnlyNumeric" class="input">
  </p>
</template>

<script>
import { stringHasOnlyNumbers } from '@/utils/functions';

export default {
  props: {
    currency: Object
  },

  methods: {
    allowOnlyNumeric(evt) {
      if (!stringHasOnlyNumbers(evt.key)) {
        evt.preventDefault();
      }
    },
  },

  created() {
    console.log(this.currency)
  }
}
</script>