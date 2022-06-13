<template>
  <v-card v-if="chartId">
    <v-card-text>
      <div :id="chartId" ref="chartContainer"></div>
    </v-card-text>
  </v-card>
</template>
<script>
import { generateChart } from "./util";
export default {
  name: "Chart",
  props: {
    chartId: String,
    categories: Array,
    chartData: Array,
    type: String,
    xlabel: String,
    ylabel: String,
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.chart = this.renderChart();
  },
  methods: {
    renderChart() {
      return generateChart({
        target: this.$refs.chartContainer,
        type: this.type,
        catagories: this.categories,
        chartData: this.chartData,
        xlabel: this.xlabel,
        ylabel: this.ylabel,
      });
    },
  },
};
</script>
