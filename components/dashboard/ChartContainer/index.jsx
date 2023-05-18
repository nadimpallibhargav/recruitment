import React, { useEffect, useRef, useState } from "react";
import styles from "./ChartContainer.module.scss";
import PropTypes from "prop-types";
import Layout from "../Layout";
import dynamic from "next/dynamic";

const Pie = dynamic(() => import("@ant-design/plots").then(({ Pie }) => Pie), {
  ssr: false,
});

const Column = dynamic(
  () => import("@ant-design/plots").then(({ Column }) => Column),
  {
    ssr: false,
  }
);

const Area = dynamic(
  () => import("@ant-design/plots").then(({ Area }) => Area),
  {
    ssr: false,
  }
);

const ChartContainer = ({
  data,
  xField,
  yField,
  seriesField,
  title,
  rightContent,
  type = "graph",
  info = "",
  legendPosition = "bottom",
  legendMarkerSymbol = "square",
  color,
  innerRadius = 0.7,
  radius = 1,
  height,
  isStack = false,
  showLegend = true,
}) => {
  const [legendData, setLegendData] = useState([]);

  const renderChart = () => {
    const config = {
      data,
      xField,
      yField,
      seriesField,
      legend: false,
      color,
      height,
      isStack,
      startOnZero: true,
      xAxis: {
        label: {
          style: {
            fill: "#758B89",
          },
        },
      },
      yAxis: {
        // tickCount: 1,
        tickLine: {
          style: {
            color: "#000000",
            opacity: 0.15,
          },
        },
        label: {
          style: {
            fill: "#758B89",
          },
        },
      },
      meta: {
        [xField]: {
          range: type === "graph" ? [0, 1] : undefined,
        },
      },
      tooltip: {
        showTitle: false,
        domStyles: {
          "g2-tooltip": {
            opacity: 1,
          },
          "g2-tooltip-value": {
            fontWeight: 700,
            color: "#1F2827",
          },
          "g2-tooltip-marker": {
            borderRadius: "4px",
          },
        },
      },
    };
    if (type === "bar") {
      return <Column {...config} />;
    } else if (type === "pie") {
      return (
        <Pie
          {...{
            angleField: config.yField,
            colorField: config.xField,
            data: config.data,
            legend: false,
            color: config.color,
            tooltip: config.tooltip,
            appendPadding: 10,
            style: {
              width: "218px",
              height: height ?? "218px",
              margin: "auto",
            },
            radius,
            innerRadius,
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
            pieStyle: {
              stroke: 0,
            },
            statistic: {
              title: false,
              content: {
                style: {
                  whiteSpace: "pre-wrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  fontSize: "20px",
                  padding: "1rem",
                },
                customHtml: (container, view, datum, data) => {
                  if (info) {
                    const result = data.reduce((r, d) => r + d[yField], 0);
                    return info;
                  }
                },
              },
            },
          }}
        />
      );
    }
    return <Area {...config} />;
  };

  useEffect(() => {
    const legendUpdation = (seriesField) => {
      if (seriesField) {
        const tempdata = new Set(data.map((item) => item[seriesField]));
        setLegendData(
          Array.from(tempdata).map((item, index) => ({
            color: typeof color === "object" ? color[index] : color,
            label: <label className={styles.LabelName}>{item}</label>,
          }))
        );
      } else {
        setLegendData(
          data.map((item, index) => ({
            color: typeof color === "object" ? color[index] : color,
            label: (
              <span className={styles.LabelG}>
                <label className={styles.LabelNumber}>{item[yField]}</label>
                <label className={styles.LabelName}>{item[xField]}</label>
              </span>
            ),
          }))
        );
      }
    };
    legendUpdation(seriesField);
  }, [seriesField, xField, yField]);

  return (
    <Layout title={title} rightContent={rightContent}>
      <>
        <div className={[styles.Chart, styles[legendPosition]].join(" ")}>
          {renderChart()}

          {showLegend && legendData.length > 0 && (
            <div
              className={[
                styles.PieGraphLabel,
                styles[legendPosition],
                styles[type],
              ].join(" ")}
            >
              {legendData.map((item, index) => (
                <div key={index} className={styles.StackCont}>
                  <div
                    className={styles[legendMarkerSymbol]}
                    style={{
                      backgroundColor:
                        typeof color === "object" ? color[index] : color,
                    }}
                  />
                  {item.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.InfoWrapper}>
          {info && type !== "pie" && <h3 className={styles.Info}>{info}</h3>}
        </div>
      </>
    </Layout>
  );
};

export default ChartContainer;

ChartContainer.prototype = {
  data: PropTypes.array,
  xField: PropTypes.string,
  yField: PropTypes.string,
  seriesField: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(["pie", "bar", "graph"]),
};
