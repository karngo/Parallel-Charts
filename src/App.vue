<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col class="text-center">
            <h2>Parallel Charts</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <Chart
              chartId="barChart"
              type="bar"
              :categories="pageTitles"
              :chartData="pageVisits"
              dataLabel="2022-01-01"
              xlabel="Page Titles"
              ylabel="Number of Views"
            />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <Chart
              chartId="lineChart"
              type="line"
              :categories="timeline"
              :chartData="siteViews"
              dataLabel="Site Views"
              xlabel="Time (24hrs)"
              ylabel="Number of Views"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import { pageTitles, pageVisits, timeline, siteViews } from "./util/chartData";
import Chart from "./components/Chart/Chart.vue";

export default {
  name: "App",
  components: {
    Chart,
  },
  data() {
    return {
      pageTitles,
      pageVisits,
      timeline,
      siteViews,
    };
  },
};
</script>
