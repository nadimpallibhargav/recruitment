import React from "react";
import dynamic from "next/dynamic";

import styles from "./Graph.module.scss";

const Pie = dynamic(() => import("@ant-design/plots").then(({ Pie }) => Pie), {
  ssr: false,
});

const PieDonut = () => {
  const data = [
    {
      type: "Pending",
      value: 5,
    },
    {
      type: "Rejected",
      value: 7,
    },

    {
      type: "Selected",
      value: 12,
    },
  ];

  const reversedData = [
    {
      type: "Selected",
      value: 12,
    },
    {
      type: "Pending",
      value: 5,
    },
    {
      type: "Rejected",
      value: 7,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    innerRadius: 0.9,
    color: ["#4183FF", "#BDCBCA", "#09B48B"],
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
        content: "Total Candidates",
        customHtml: (container, view, datum, data) => {
          const result = data.reduce((r, d) => r + d.value, 0);
          return (
            <div>
              <span className={styles.TotalCandidates}>Total Candidates</span>
              <div style={{ marginTop: "10px" }}>{result}</div>
            </div>
          );
        },
      },
    },
  };
  return (
    <div>
      <Pie {...config} />
      <div>
        <ul className={styles.PieGraphLabel}>
          {reversedData.map((item, index) => (
            <li key={index}>
              <span className={styles[item.type]}>
                <label className={styles.LabelNumber}>{item.value}</label>
                <label className={styles.LabelName}>{item.type}</label>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PieDonut;
