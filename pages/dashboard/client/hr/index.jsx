import React from "react";
import { Button } from "antd";
import dynamic from "next/dynamic";
import { RightOutlined } from "@ant-design/icons";
import Card from "../../../../components/dashboard/Card";
import ChartSelect from "../../../../components/dashboard/Selector/ChartSelector";
import {
  candidatesData,
  cardData,
  hrRoundData,
  interviewsData,
  selectedCandidatesData,
  vacancyData,
} from "../../../../data/dashboard/clientHr";
// import TableContainer from "../../components/dashboard/TableContainer";
// import ChartContainer from "../../components/dashboard/ChartContainer";

import styles from "./ClientHr.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const ChartContainer = dynamic(
  () => import("../../../../components/dashboard/ChartContainer"),
  {
    ssr: false,
  }
);

const TableContainer = dynamic(
  () => import("../../../../components/dashboard/TableContainer"),
  {
    ssr: false,
  }
);

const Dashboard = () => {
  const { query } = useRouter();

  return (
    <section className={styles.DashboardSection}>
      <div className={`container ${styles.Container}`}>
        {cardData.map((data) => (
          <Card key={data.title} {...data} />
        ))}
        <div className={styles.Card1}>
          <ChartContainer
            data={interviewsData.filter(
              (item) =>
                item.round !==
                (query && query.round === "hr" ? "Rejected candidates" : "HR")
            )}
            xField="day"
            yField="count"
            seriesField="round"
            title="Interviews"
            height={300}
            color={["#66C9B1", "#76A5FD", "#FED76D"]}
            rightContent={
              <div className="flex-row-wrapper">
                {query && query.round === "hr" && (
                  <ChartSelect defaultValue="5" />
                )}
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
            innerRadius={0.8}
            info={
              <div>
                <h3 className="totalCandidates">Total Candidates</h3>
                <div style={{ marginTop: "10px" }}>{128}</div>
              </div>
            }
            legendMarkerSymbol="line"
            color={["#FED76D", "#C9C1FB", "#77A6FF", "#E87F7E", "#67CBB3"]}
          />
        </div>
        <div className={styles.Grid2Wrapper}>
          <div
            className={[
              styles.Card3,
              query && query.round === "hr" ? styles.Stack : "",
            ].join(" ")}
          >
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
          {query && query.round === "hr" && (
            <div className={styles.Card4}>
              <TableContainer
                data={hrRoundData}
                title="HR Round"
                columns={{
                  name: "Name",
                  mobile: "Call",
                  aciton: " ",
                }}
              />
            </div>
          )}
        </div>
        <div className={styles.Card5}>
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
