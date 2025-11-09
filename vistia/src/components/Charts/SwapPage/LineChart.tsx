import React from "react";
import ReactECharts from "echarts-for-react";

interface RSIChartProps {
  data: { time: string; value: number }[];
  strokeColor?: string;
}

const LineCharts = ({
  data,
  strokeColor = "#426BFF",
}: RSIChartProps) => {
  const yTicks = [0, 50, 100];

  const option = {
    grid: { top: 10, bottom: 10, left: 0, right: 30 },
    xAxis: {
      type: "category",
      data: data.map((d) => d.time),
      axisLine: {
        lineStyle: { color: "#426BFF", width: 0.5, opacity: 0.2 },
      },
      axisTick: { show: false },
      axisLabel: { show: false },
    },
    yAxis: {
      type: "value",
      min: 0,
      max: 100,
      position: "right",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: {
        color: "#9EB3FF",
        fontSize: 10,
      },
      interval: 50,
    },
    series: [
      {
        data: data.map((d) => d.value),
        type: "line",
        smooth: true,
        lineStyle: { width: 1.5, color: strokeColor },
        showSymbol: false,
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "rgba(91, 127, 255, 0.6)" },
              { offset: 0.4, color: "rgba(45, 74, 158, 0.3)" },
              { offset: 1, color: "rgba(10, 22, 40, 0)" },
            ],
          },
        },
        // Các đường ngang rõ ràng
        markLine: {
          symbol: "none",
          label: { show: false },
          lineStyle: {
            color: "#426BFF",
            width: 1,
            opacity: 1,
            type: "solid",
          },
          data: yTicks.map((y) => ({ yAxis: y })),
        },
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      style={{ width: "100%", height: "120px" }} // ⬅ nền trong suốt
      notMerge={true}
      lazyUpdate={true}
    />
  );
};

export default LineCharts;
