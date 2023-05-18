import { React } from "react";
import { ConfigProvider, Select, Button } from "antd";
import Tables from "../../components/tables/Tables";

import HrroundStyles from "../hrround/HrRound.module.scss";
import InterviewerStyles from "../interviewer/Interviewer.module.scss";
import styles from "./InterviewerEarnings.module.scss";

const InterviewerEarnings = () => {
  // Earnings table start
  const HrRoundInterviewColumns = [
    {
      title: "Month",
      dataIndex: "Month",
      key: "Month",
    },
    {
      title: "Interview Count",
      dataIndex: "InterviewCount",
      key: "InterviewCount",
    },
    {
      title: "Total Earnings",
      dataIndex: "TotalEarnings",
      key: "TotalEarnings",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
  ];

  const HrRoundInterviewData = [
    {
      key: "1",
      Month: "January 2023",
      InterviewCount: "30",
      TotalEarnings: "3000",
      Status: (
        <>
          <span
            className={[
              "greenBtnOutline",
              styles.StatusBtn,
              styles.StatusPending,
            ].join(" ")}
          >
            <span>Pending</span>
          </span>
          <span className={styles.StatusText}>Next payment on 4 Feb</span>
        </>
      ),
    },
    {
      key: "2",
      Month: "December 2022",
      InterviewCount: "35",
      TotalEarnings: "3500",
      Status: (
        <>
          <span
            className={[
              "greenBtnOutline",
              styles.StatusBtn,
              styles.StatusReceived,
            ].join(" ")}
          >
            <span>Received</span>
          </span>
        </>
      ),
    },
    {
      key: "3",
      Month: "November 2022",
      InterviewCount: "35",
      TotalEarnings: "3500",
      Status: (
        <>
          <span
            className={[
              "greenBtnOutline",
              styles.StatusBtn,
              styles.StatusReceived,
            ].join(" ")}
          >
            <span>Received</span>
          </span>
        </>
      ),
    },
    {
      key: "4",
      Month: "November 2022",
      InterviewCount: "35",
      TotalEarnings: "3500",
      Status: (
        <>
          <span
            className={[
              "greenBtnOutline",
              styles.StatusBtn,
              styles.StatusReceived,
            ].join(" ")}
          >
            <span>Received</span>
          </span>
        </>
      ),
    },
    {
      key: "5",
      Month: "November 2022",
      InterviewCount: "35",
      TotalEarnings: "3500",
      Status: (
        <>
          <span
            className={[
              "greenBtnOutline",
              styles.StatusBtn,
              styles.StatusReceived,
            ].join(" ")}
          >
            <span>Received</span>
          </span>
        </>
      ),
    },
  ];
  // Earnings table end

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <section
        className={[
          HrroundStyles.HrRoundSection,
          InterviewerStyles.InterviewerSection,
          styles.InterviewerEarningsSection,
        ].join(" ")}
      >
        <div className="container">
          <div>
            <h1>Earnings</h1>
          </div>

          <div
            className={[
              HrroundStyles.HrRoundsWrapper,
              InterviewerStyles.TableContentWrapper,
              styles.TableContentWrapper,
            ].join(" ")}
          >
            {/* mobile search button  */}
            <div
              className={[
                InterviewerStyles.TableHeading,
                styles.TableHeading,
              ].join(" ")}
            >
              <Select
                className={InterviewerStyles.SelectDate}
                onChange={() => {}}
                defaultValue="All"
                options={[
                  {
                    className: "vacancyFilterItem",
                    value: "All",
                    label: "All",
                  },
                  {
                    className: "vacancyFilterItem",
                    value: "2023",
                    label: "2023",
                  },
                  {
                    className: "vacancyFilterItem",
                    value: "2022",
                    label: "2022",
                  },
                ]}
              />
            </div>
            <div
              className={[HrroundStyles.tableWrapper, styles.tableWrapper].join(
                " "
              )}
            >
              <Tables
                columns={HrRoundInterviewColumns}
                data={HrRoundInterviewData}
                className={HrroundStyles.HrRoundTable}
              />
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default InterviewerEarnings;
