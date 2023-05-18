import React from "react";
import dynamic from "next/dynamic";

import styles from "../graphs/Graph.module.scss";

const Pie = dynamic(() => import("@ant-design/plots").then(({ Pie }) => Pie), {
  ssr: false,
});

const AnalyticsPiechart = ({
  heading,
  data,
  reversedData,
  piechartHeading,
}) => {
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.9,
    color: ["#4183FF", "#09B48B"],
    legend: false,
    style: {
      width: "218px",
      height: "218px",
      margin: "auto",
    },
    label: {
      type: "inner",
      offset: "-50%",
      content: "",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "16px",
        },
        content: "Total Spending",
        customHtml: (container, view, datum, data) => {
          const result = data.reduce((r, d) => r + d.value, 0);
          return (
            <div>
              <span className={styles.TotalCandidates}>
                {heading || "Total Spending"}
              </span>
              <div style={{ marginTop: "10px" }}>{result}</div>
            </div>
          );
        },
      },
    },
  };
  return (
    <div>
      <h2>{piechartHeading || "Payment"}</h2>
      <div
        className={styles.PiegraphWrapper}
        style={{
          marginTop: "2rem",
        }}
      >
        <Pie {...config} />
        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <ul className={styles.PieGraphLabel}>
            {reversedData.map((item, index) => (
              <li key={index}>
                <span className={styles[item.className]}>
                  <label className={styles.LabelNumber}>{item.value}</label>
                  <label className={styles.LabelName}>{item.type}</label>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPiechart;
