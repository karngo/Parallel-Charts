<template>
  <v-container>
    <v-row>
      <v-col>
        <h2>Parallel Charts</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <div id="barChart"></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <div id="lineChart"></div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import bb, { bar, line } from "billboard.js";
import "billboard.js/dist/billboard.css";
import { pageTitles, pageVisits, timeline, siteViews } from "./util/chartData";

const barConfig = {
  bindto: "#barChart",
  data: {
    type: bar(),
    columns: [["2022-01-01", ...pageVisits]],
  },
  bar: {
    width: {
      ratio: 0.3,
    },
    padding: 0.1,
  },
  axis: {
    x: {
      label: {
        text: "Page Title",
        position: "outer-center",
      },
      type: "category",
      categories: pageTitles,
    },
    y: {
      label: {
        text: "Number of Views",
        position: "outer-middle",
      },
    },
  },
  grid: {
    y: {
      show: true,
    },
  },
};

const lineConfig = {
  bindto: "#lineChart",
  data: {
    type: line(),
    columns: [["2022-01-01", ...siteViews]],
  },
  axis: {
    x: {
      label: {
        text: "Time",
        position: "outer-center",
      },
      type: "category",
      categories: timeline,
    },
    y: {
      label: {
        text: "Number of Views",
        position: "outer-middle",
      },
    },
  },
  grid: {
    y: {
      show: true,
    },
  },
};
export default {
  name: "App",
  data() {
    return {
      barChart: null,
      lineChart: null,
    };
  },
  mounted() {
    this.barChart = bb.generate(barConfig);
    this.lineChart = bb.generate(lineConfig);
  },
};
</script>
