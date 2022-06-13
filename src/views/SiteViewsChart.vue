<template>
  <Chart
    title="Site Views"
    chartId="lineChart"
    type="line"
    :categories="timeline"
    :chartData="siteViews"
    dataLabel="Site Views"
    xlabel="Time (24hrs)"
    ylabel="Number of Views"
  />
</template>
<script>
import { timeline, siteViews } from "@/util/chartData";
import Chart from "@/components/Chart/Chart.vue";

export default {
  name: "SiteViewChart",
  components: {
    Chart,
  },
  data() {
    return {
      timeline,
      siteViews,
    };
  },
};
</script>