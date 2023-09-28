"use client";

import { ApexOptions } from "apexcharts";
import { DEFAULT_GRAPH_WIDTH } from "./Constants";
import dynamic from "next/dynamic";

export default function PieChart({
  options,
  title,
  labels,
  data,
  width,
}: {
  options: ApexOptions;
  title: string;
  labels: string[];
  data: number[];
  width?: number;
}) {
  const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
  width = width || DEFAULT_GRAPH_WIDTH;
  options = {
    ...options,
    labels,
  };
  const series = data;
  return (
    <ApexCharts
      options={options}
      series={series}
      type={"pie"}
      height={width * 0.75}
      width={width}
    />
  );
}
