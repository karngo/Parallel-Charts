<template>
  <v-card v-if="chartId">
    <v-card-title v-if="title" class="justify-end"> {{ title }} </v-card-title>
    <v-card-text>
      <div :id="chartId" ref="chartContainer"></div>
    </v-card-text>
  </v-card>
</template>
<script>
import { generateChart } from "./util";
import { isEqual } from "lodash";

export default {
  name: "Chart",
  props: {
    chartId: String,
    categories: Array,
    chartData: Array,
    dataLabel: String,
    type: String,
    xlabel: String,
    ylabel: String,
    title: String,
  },
  data() {
    return {
      chart: null,
    };
  },
  watch: {
    chartConfig(newConfig, oldConfig) {
      if (!isEqual(newConfig, oldConfig)) {
        this.renderChart();
      }
    },
  },
  computed: {
    chartConfig() {
      const type = this.type || "bar";
      const categories = this.categories || [];
      const chartData = this.chartData || [];
      const dataLabel = this.dataLabel || "Data";

      return {
        type,
        categories,
        chartData: [dataLabel, ...chartData],
        xlabel: this.xlabel,
        ylabel: this.ylabel,
      };
    },
  },
  mounted() {
    this.chart = this.renderChart();
  },
  methods: {
    renderChart() {
      const chartConfig = this.chartConfig;
      const target = this.$refs.chartContainer;

      return generateChart({
        target,
        ...chartConfig,
      });
    },
  },
};
</script>
