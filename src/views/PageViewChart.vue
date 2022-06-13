<template>
  <Chart
    title="Page Views"
    chartId="barChart"
    type="bar"
    :categories="pageTitles"
    :chartData="pageVisits"
    dataLabel="2022-01-01"
    xlabel="Page Titles"
    ylabel="Number of Views"
  />
</template>
<script>
import { pageTitles, pageVisits } from "@/util/chartData";
import Chart from "@/components/Chart/Chart.vue";

export default {
  name: "PageViewChart",
  components: {
    Chart,
  },
  data() {
    return {
      pageTitles,
      pageVisits,
    };
  },
};
</script>