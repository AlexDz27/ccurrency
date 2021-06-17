<template>
  <p class="input-container">
    <span class="input-currency">{{ formattedName }}:</span>
    <input
      @keyup="$emit('type', {name: currency.name, amount: $event.target.value})"
      @keypress="allowOnlyNumeric"
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

  computed: {
    formattedName() {
      return this.currency.name.toUpperCase();
    }
  }
}
</script>