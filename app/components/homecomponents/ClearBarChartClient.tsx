"use client";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { BAR_COLORS } from "./lawsuitData";

type ChartConfig = {
  xLabels: string[];
  bars: number[];
};

export default function ClearBarChartClient({
  config,
}: {
  config: ChartConfig;
}) {
  const data = config.xLabels.map((label, i) => ({
    label,
    value: config.bars[i],
  }));

  const maxValue = Math.max(...config.bars);

  let roundedMax = 0;
  let step = 0;

  if (maxValue <= 100) {
    roundedMax = Math.ceil(maxValue / 10) * 10;
    step = roundedMax / 4;
  } else if (maxValue <= 1000) {
    roundedMax = Math.ceil(maxValue / 100) * 100;
    step = roundedMax / 4;
  } else if (maxValue <= 10000) {
    roundedMax = Math.ceil(maxValue / 500) * 500;
    step = roundedMax / 4;
  } else if (maxValue <= 100000) {
    roundedMax = Math.ceil(maxValue / 1000) * 1000;
    step = roundedMax / 4;
  } else {
    roundedMax = Math.ceil(maxValue / 10000) * 10000;
    step = roundedMax / 4;
  }

  const dynamicTicks = [step, step * 2, step * 3, step * 4];

  return (
    <div className="w-full h-[130px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barCategoryGap={20}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
        >
          <CartesianGrid stroke="#E6ECFF" vertical={false} />

          <XAxis
            dataKey="label"
            tick={{ fontSize: 9, fill: "#162766" }}
            tickLine={false}
            axisLine={false}
          />

          <YAxis
            domain={[0, roundedMax]}
            ticks={dynamicTicks}
            interval={0}
            tickFormatter={(v) => (v >= 1000 ? `${v / 1000}K` : `${v}`)}
            tick={{ fontSize: 9, fill: "#162766" }}
            tickLine={false}
            axisLine={false}
            width={45}
            tickMargin={4}
          />

          <Bar dataKey="value" radius={[8, 8, 0, 0]}>
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={BAR_COLORS[index % BAR_COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
