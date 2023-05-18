import React from "react";
import { Button } from "antd";
import dynamic from "next/dynamic";
import { RightOutlined } from "@ant-design/icons";
import Card from "../../../components/dashboard/Card";
import ChartSelect from "../../../components/dashboard/Selector/ChartSelector";
import {
  candidatesData,
  cardData,
  interviewsData,
  selectedCandidatesData,
  vacancyData,
} from "../../../data/dashboard/hr";

import styles from "./Hr.module.scss";
import Link from "next/link";

const ChartContainer = dynamic(
  () => import("../../../components/dashboard/ChartContainer"),
  {
    ssr: false,
  }
);

const TableContainer = dynamic(
  () => import("../../../components/dashboard/TableContainer"),
  {
    ssr: false,
  }
);

const Dashboard = () => {
  return (
    <section className={styles.DashboardSection}>
      <div className={`container ${styles.Container}`}>
        {cardData.map((data) => (
          <Card key={data.title} {...data} />
        ))}
        <div className={styles.Card1}>
          <ChartContainer
            data={interviewsData}
            xField="day"
            yField="count"
            seriesField="round"
            title="Interviews"
            color={["#67CBB3", "#77A6FF"]}
            height={300}
            rightContent={
              <div className="flex-row-wrapper">
                <ChartSelect defaultValue="5" />
                <ChartSelect defaultValue="5" />
              </div>
            }
          />
        </div>
        <div className={styles.Card2}>
          <ChartContainer
            data={candidatesData}
            xField="round"
            yField="count"
            title="Candidate Data"
            type="pie"
            info={
              <div>
                <h3 className="totalCandidates">Total Candidates</h3>
                <div style={{ marginTop: "10px" }}>{128}</div>
              </div>
            }
            legendMarkerSymbol="line"
            innerRadius={0.8}
            color={["#67CBB3", "#E77574", "#FDD562", "#C0B7FA", "#6B9EFF"]}
          />
        </div>
        <div className={styles.Card3}>
          <TableContainer
            data={vacancyData}
            title="Vacancy details"
            columns={{
              vacancy: "Vacancy",
              position: "Position",
              selected: "Selected",
              rejected: "Rejected",
            }}
            rightContent={
              <Link href="/">
                <a className={styles.ViewBtn}>
                  <span>View All</span>
                  <RightOutlined />
                </a>
              </Link>
            }
          />
        </div>
        <div className={styles.Card4}>
          <TableContainer
            data={selectedCandidatesData}
            title="Selected Candidates"
            columns={{
              name: "Candidate Name",
              rating: "Rating",
              aciton: " ",
            }}
            rightContent={<ChartSelect defaultValue="5" />}
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
