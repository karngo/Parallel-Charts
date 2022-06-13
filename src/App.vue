<template>
  <v-app>
    <v-main class="yellow lighten-3">
      <v-container class="pb-10">
        <v-row>
          <v-col class="text-center">
            <h2>Parallel Charts</h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <PageViewChart />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <SiteViewChart />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import PageViewChart from "./views/PageViewChart.vue";
import SiteViewChart from "./views/SiteViewsChart.vue";

export default {
  name: "App",
  components: {
    PageViewChart,
    SiteViewChart,
  },
  data() {
    return {};
  },
};
</script>
