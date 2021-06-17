<template>
  <p class="input-container">
    <span class="input-currency">{{ currency.name }}:</span>
    <input
      @keyup="$emit('type', {name: currency.name, amount: $event.target.value})"
      @keypress="allowOnlyNumeric"
      :value="currency.amount"
      class="input"
    >
  </p>
</template>

<script>
import { stringHasOnlyNumbers } from '@/utils/functions';

export default {
  props: {
    currency: {
      type: Object,
      required: true
    }
  },

  emits: {
    type: null
  },

  methods: {
    allowOnlyNumeric(evt) {
      if (!stringHasOnlyNumbers(evt.key)) {
        evt.preventDefault();
      }
    },
  },
}
</script>