import bb, { bar, line } from "billboard.js";
import "billboard.js/dist/billboard.css";
import { defaultsDeep } from "lodash";

const defaultChartConfig = {
  axis: {
    x: {
      label: {
        text: "X-axis",
        position: "outer-center",
      },
      type: "category",
    },
    y: {
      label: {
        text: "Y-axis",
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

const defaultBarConfig = {
  data: {
    type: bar(),
  },
  bar: {
    width: {
      ratio: 0.3,
    },
  },
  ...defaultChartConfig,
};

const defaultLineConfig = {
  data: {
    type: line(),
  },
  ...defaultChartConfig,
};

const getDefaultConfig = (type) => {
  switch (type) {
    case "line":
      return defaultLineConfig;
    case "bar":
    default:
      return defaultBarConfig;
  }
};

const generateChart = ({
  categories = [],
  chartData = [],
  xlabel,
  ylabel,
  type = "bar",
  target,
}) => {
  if (!target) {
    return;
  }

  const chartConfig = defaultsDeep(
    {},
    {
      bindto: target,
      data: {
        columns: [chartData],
      },
      axis: {
        x: {
          label: {
            text: xlabel,
          },
          categories,
        },
        y: {
          label: {
            text: ylabel,
          },
        },
      },
    },
    getDefaultConfig(type)
  );

  return bb.generate(chartConfig);
};

export { generateChart };
