import React, { useState } from "react";
import dynamic from "next/dynamic";
import { lineAreaDashboard } from "../../data/graphs/LineArea";
const Area = dynamic(
  () => import("@ant-design/plots").then(({ Area }) => Area),
  { ssr: false }
);
const DemoArea = () => {
  const [data, setData] = useState(lineAreaDashboard);

  const config = {
    data,
    xField: "date",
    yField: "value",
    seriesField: "country",
    legend: false,
    smooth: true,
    autoFit: true,
    startOnZero: true,
    xAxis: {
      range: [0, 1],
    },
    areaStyle: () => {
      return {
        fill: "#95C7BB",
        color: "#a8ddb5",
      };
    },
    meta: {
      date: {
        formatter: (e) => e + " " + "Jan",
      },
    },
  };

  return <Area {...config} />;
};

export default DemoArea;
