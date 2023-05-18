import React, { useState } from "react";
import dynamic from "next/dynamic";
import { InterviewHistoryData } from "../../data/graphs/LineArea";
const Area = dynamic(
  () => import("@ant-design/plots").then(({ Area }) => Area),
  { ssr: false }
);
const InterviewHistory = () => {
  const [data, setData] = useState(InterviewHistoryData);

  const config = {
    data,
    xField: "timePeriod",
    yField: "TotalInterviews",
    smooth: true,
    xAxis: {
      range: [0, 1],
    },
  };

  return <Area {...config} />;
};

export default InterviewHistory;
