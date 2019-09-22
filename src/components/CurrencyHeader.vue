<template>
  <div class="header">
    <h4>USD - United States Dollars</h4>
    <div class="content">
      <h3 class="title">USD</h3>
      <input
        type="number"
        name="currencyInput"
        v-model="userInput"
        @focus="userInput = ''"
        @input="valueChanged"
        step="0.0001"
        min="0"
        required
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";

@Component({})
export default class CurrencyHeader extends Vue {
  private userInput: number = 10;

  @Emit("onInputChanged")
  valueChanged(): number {
    return this.userInput;
  }
}
</script>

<style scoped lang="scss">
h4 {
  text-align: start;
  margin: 10px;
}
.header {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 5px;
}
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
}
.title {
  margin: 0px;
}
</style>
