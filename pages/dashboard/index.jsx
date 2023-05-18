import dynamic from "next/dynamic";
import React from "react";
import Attendance from "../../components/dashboard/Attendance";
import Card from "../../components/dashboard/Card";
import ChartSelect from "../../components/dashboard/Selector/ChartSelector";

import {
  attendanceData,
  cardData,
  grossIncomeChartData,
  newClientData,
  topPerformersData,
  vacancyData,
} from "../../data/dashboard";

import styles from "./Dashboard.module.scss";

const ChartContainer = dynamic(
  () => import("../../components/dashboard/ChartContainer"),
  { ssr: false }
);

const TableContainer = dynamic(
  () => import("../../components/dashboard/TableContainer"),
  { ssr: false }
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
            data={grossIncomeChartData}
            xField="month"
            yField="income"
            title="Gross Income"
            info={
              <>
                Total Income: <strong>Rs 82,300</strong>
              </>
            }
            color="#93DAC9"
            rightContent={<ChartSelect defaultValue="5" />}
            showLegend={false}
          />
        </div>
        <div className={styles.Card2}>
          <ChartContainer
            data={newClientData}
            xField="day"
            yField="count"
            type="bar"
            title={`New client registrations (12)`}
            info={
              <>
                Total Income: <strong>Rs 82,300</strong>
              </>
            }
            color="#67CBB3"
            rightContent={<ChartSelect defaultValue="2" />}
            showLegend={false}
          />
        </div>
        <div className={styles.Card3}>
          <ChartContainer
            data={vacancyData}
            xField="stack"
            yField="vacancies"
            title="Vacancy by Techstack"
            type="pie"
            innerRadius={0.8}
            height="175px"
            info={
              <div>
                <h3 className="totalCandidates">Total Candidates</h3>
                <div style={{ marginTop: "10px" }}>{128}</div>
              </div>
            }
            legendMarkerSymbol="square"
            color={["#67CBB3", "#E87F7E", "#FED76D", "#C9C1FB", "#77A6FF"]}
          />
        </div>
        <div className={styles.Card4}>
          <Attendance data={attendanceData} />
        </div>
        <div className={styles.Card5}>
          <TableContainer
            data={topPerformersData}
            title="Top 5 Performers"
            columns={{
              name: "Name",
              counts: "Interview Counts",
              earnings: "Earnings",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
