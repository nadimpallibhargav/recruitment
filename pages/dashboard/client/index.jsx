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
} from "../../../data/dashboard/client";
// import TableContainer from "../../components/dashboard/TableContainer";
// import ChartContainer from "../../components/dashboard/ChartContainer";

import styles from "./Client.module.scss";
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
          <TableContainer
            data={vacancyData}
            title="Vacancy details"
            columns={{
              vacancy: "Vacancy",
              position: "Position",
              selected: "Selected",
              rejected: "Rejected",
            }}
            minWidth={"530px"}
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
        <div className={styles.Card2}>
          <TableContainer
            data={selectedCandidatesData}
            title="Candidate Data"
            columns={{
              name: "Candidate Name",
              rating: "Rating",
              aciton: " ",
            }}
          />
        </div>
        <div className={styles.Card3}>
          <ChartContainer
            data={interviewsData}
            xField="day"
            yField="count"
            seriesField="round"
            title="Interviews"
            height={200}
            color={["#66C9B1", "#76A5FD", "#FED76D"]}
            rightContent={
              <div className="flex-row-wrapper">
                <ChartSelect defaultValue="5" />
                <ChartSelect defaultValue="5" />
              </div>
            }
          />
        </div>
        <div className={styles.Card4}>
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
            legendPosition="left"
            innerRadius={0.8}
            color={["#FED76D", "#C9C1FB", "#77A6FF", "#E87F7E", "#67CBB3"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
