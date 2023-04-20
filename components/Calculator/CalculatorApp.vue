<template>
  <div
    class="p-3"
    style="margin: 50px auto; max-width: 400px; background-color: #234"
  >
    <div
      class="w-full rounded m-3 p-3 text-right lead font-weight-bold text-white bg-vue-dark"
    >
      {{ calculatorValue || 0 }}
    </div>

    <div class="row no-gutters">
      <div v-for="i in calculatorElement" :key="i" class="col-3">
        <div
          class="lead text-white text-center m-1 py-4 bg-vue-dark rounded hover-class"
          :class="{
            'bg-vue-green': ['C', '*', '/', '-', '+', '%', '='].includes(i),
          }"
          @click="action(i)"
        >
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calculatorValue: '',
      calculatorElement: [
        'C',
        '*',
        '/',
        '-',
        7,
        8,
        9,
        '+',
        4,
        5,
        6,
        '%',
        1,
        2,
        3,
        '=',
        0,
        '.',
      ],
      operator: null,
      previousCalculator: '',
    }
  },

  methods: {
    action(i) {
      if (!isNaN(i) || i === '.') {
        this.calculatorValue += i + ''
      }

      if (i === 'C') {
        this.calculatorValue = ''
      }

      if (i === '%') {
        this.calculatorValue = this.calculatorValue / 100 + ''
      }

      if (['/', '*', '+', '-'].includes(i)) {
        this.operator = i
        this.previousCalculator = this.calculatorValue
        this.calculatorValue = ''
      }

      if (i === '=') {
        // eslint-disable-next-line no-eval
        this.calculatorValue = eval(
          this.previousCalculator + this.operator + this.calculatorValue
        )

        this.previousCalculator = ''
        this.operator = null
      }
    },
  },
}
</script>

<style>
.bg-vue-dark {
  background-color: #31475e;
}

.hover-class {
  cursor: pointer;
  background-color: #3d5875;
  font-weight: bold;
}

.hover-class:hover {
  opacity: 0.7;
}

.bg-vue-green {
  background-color: #3fb984;
}
</style>
