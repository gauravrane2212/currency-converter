<template>
  <div class="dashboard">
    <h1>Currency Converter</h1>
    <div class="card">
      <CurrencyHeader @onInputChanged="valueChanged" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CurrencyHeader from "@/components/CurrencyHeader.vue";

@Component({
  components: {
    CurrencyHeader
  }
})
export default class CurrencyDashboard extends Vue {
  private userEnteredAmount: number = 10;

  valueChanged(newValue: number): void {
    this.userEnteredAmount = newValue;
  }
}
</script>

<style scoped lang="scss">
h1 {
  margin: 40px 0 20px;
}

.card {
  margin: 0 auto;
  width: 540px;
  border: 1px ridge rgb(218, 215, 215);
}
</style>
