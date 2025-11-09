import {
  LineChart,
  Line,
  Area,
  YAxis,
  XAxis,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

interface RSIChartProps {
  data: { time: string; value: number }[];
  strokeColor?: string;
  fillColor?: string;
}

const LineCharts = ({
  data,
  strokeColor = "#426BFF",
  fillColor = "#00081A",
}: RSIChartProps) => {
  const yTicks = [0, 50, 100];

  return (
    <ResponsiveContainer width="100%" height={120}>
      <LineChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorRSI" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5B7FFF" stopOpacity={0.6} />
            <stop offset="40%" stopColor="#2D4A9E" stopOpacity={0.3} />
            <stop offset="100%" stopColor="#0A1628" stopOpacity={0} />
          </linearGradient>
        </defs>

        {/* Horizontal reference lines */}
        {yTicks.map((tick) => (
          <ReferenceLine
            key={tick}
            y={tick}
            stroke="#426BFF"
            strokeWidth={0.5}
            opacity={0.8}
          />
        ))}

        {/* Gradient shadow below the line */}
        <Area
          type="monotone"
          dataKey="value"
          stroke="none"
          fill="url(#colorRSI)"
          isAnimationActive={false} // optional
        />

        {/* Line on top */}
        <Line
          type="monotone"
          dataKey="value"
          stroke={strokeColor}
          strokeWidth={2}
          dot={false}
          isAnimationActive={false}
        />

        <YAxis
          orientation="right"
          domain={[0, 100]}
          ticks={yTicks}
          tick={{ fill: "#9EB3FF", fontSize: 10 }}
          axisLine={false}
          tickLine={false}
          width={30}
        />
        <XAxis
          dataKey="time"
          axisLine={true}
          tick={false}
          tickLine={false}
          stroke="#426BFF"
          strokeWidth={0.5}
          opacity={0.2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineCharts;
