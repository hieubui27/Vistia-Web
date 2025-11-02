'use client';

import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
type EChartsOption = echarts.EChartsOption;
interface BaseLineChartProps {
  option: EChartsOption;
  className?: string;
}
const BaseLineChart = ({ option, className }: BaseLineChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (!chartInstance.current) {
        chartInstance.current = echarts.init(chartRef.current);
      }
      chartInstance.current.setOption(option);
    }
  }, [option]); 

  return (
    <div
      ref={chartRef}
      className={className || 'w-full h-full'} // Class mặc định
    />
  );
};

export default BaseLineChart;