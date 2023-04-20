<template>
  <div>
    <h2 class="text-center my-5">{{ $t('calculator_app_header') }}</h2>
    <calculator-app />
  </div>
</template>

<script>
import CalculatorApp from '~/components/Calculator/CalculatorApp.vue'
export default {
  components: { CalculatorApp },

}
</script>

<style>

</style>