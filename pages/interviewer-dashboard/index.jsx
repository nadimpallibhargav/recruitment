import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ConfigProvider, Select } from "antd";
import { RightOutlined, LinkOutlined } from "@ant-design/icons";
import Tables from "../../components/tables/Tables";
import ResumePopup from "../../components/popup/ResumePopup";
import InterviewHistory from "../../components/graphs/InterviewHistory";

import AnalyticsStyles from "../analytics/Analytics.module.scss";
import HrRoundStyles from "../hrround/HrRound.module.scss";
import Styles from "./Interviewerdashboard.module.scss";
import InterviewerStyles from "../interviewer/Interviewer.module.scss";

const InterviewerDashboard = () => {
  // Upcoming interviews Yet to interview table start
  const HrRoundInterviewColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Job title",
      dataIndex: "JobTitle",
      key: "JobTitle",
      className: Styles.vacancyColumn,
    },
    {
      title: "Round",
      dataIndex: "Round",
      key: "Round",
    },
    {
      title: "Scheduled Time",
      dataIndex: "ScheduledTime",
      key: "ScheduledTime",
    },
    {
      title: "Resume",
      dataIndex: "Resume",
      className: "CenterColumn",
      key: "Resume",
      align: "center",
      render: () => (
        <>
          <ResumePopup />
        </>
      ),
    },
    {
      title: "",
      dataIndex: "Link",
      key: "Link",
      render: () => <LinkOutlined className={HrRoundStyles.tableCellIcon} />,
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
    },
  ];

  const HrRoundInterviewData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      JobTitle: <>Front end developer - React JS</>,
      Round: "Technical round 1",
      ScheduledTime: "11:30 am",
      Resume: Image,
      Link: "",
      View: (
        <Link href="/interview-details">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      JobTitle: <>Front end developer - React JS</>,
      Round: "Technical round 2",
      ScheduledTime: "01:00 pm",
      Resume: Image,
      Link: "",
      View: (
        <Link href="/interview-details">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      JobTitle: <>Front end developer - React JS</>,
      Round: "Technical round 1",
      ScheduledTime: "02:30 pm",
      Resume: Image,
      Link: "",
      View: (
        <Link href="/interview-details">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];
  // Upcoming interviews Yet to interview table end

  // Upcoming interviews pending table start
  const HrRoundPendingColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Job title",
      dataIndex: "JobTitle",
      key: "JobTitle",
      className: Styles.vacancyColumn,
    },
    {
      title: "Round",
      dataIndex: "Round",
      key: "Round",
    },
    {
      title: "Interviewed date & time",
      dataIndex: "Interviewed",
      key: "Interviewed",
    },
    {
      title: "",
      dataIndex: "giveFeedback",
      key: "giveFeedback",
    },
    {
      title: "",
      dataIndex: "View",
      key: "View",
    },
  ];

  const HrRoundPendingData = [
    {
      key: "1",
      candidateName: "Bessie Cooper",
      JobTitle: <>Front end developer - React JS</>,
      Round: "Technical round 1",
      Interviewed: "29 Jan 2023 | 11:30 am",
      giveFeedback: (
        <Link href="/interviewer-feedback">
          <a
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Give Feedback
          </a>
        </Link>
      ),
      View: (
        <Link href="/interview-details">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      JobTitle: <>Front end developer - React JS</>,
      Round: "Technical round 2",
      Interviewed: "29 Jan 2023 l 01:00 pm",
      giveFeedback: (
        <Link href="/interviewer-feedback">
          <a
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Give Feedback
          </a>
        </Link>
      ),
      View: (
        <Link href="/interview-details">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      JobTitle: <>Front end developer - React JS</>,
      Round: "Technical round 2",
      Interviewed: "30 Jan 2023 l 02:30 pm",
      giveFeedback: (
        <Link href="/interviewer-feedback">
          <a
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrRoundStyles.feedbackBtn,
            ].join(" ")}
          >
            Give Feedback
          </a>
        </Link>
      ),
      View: (
        <Link href="/interview-details">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];
  // Upcoming interviews pending table end

  return (
    <section
      className={[
        AnalyticsStyles.AnalyticsSection,
        HrRoundStyles.HrRoundSection,
        Styles.InterviewerDashboardSection,
      ].join(" ")}
    >
      <div className="container">
        <div className={AnalyticsStyles.DashboardContent}>
          <div className={AnalyticsStyles.TotalCandidates}>
            <div className={[AnalyticsStyles.card, Styles.card].join(" ")}>
              <h2>Upcoming interviews</h2>
              <h3>30</h3>
            </div>
            <div className={[AnalyticsStyles.card, Styles.card].join(" ")}>
              <h2>Completed interviews (this month)</h2>
              <h3>257</h3>
            </div>
            <div className={[AnalyticsStyles.card, Styles.card].join(" ")}>
              <h2>Earnings (this month)</h2>
              <h3>
                &#x20b9; 3200 <span>Next payment on 24 Feb </span>
              </h3>
            </div>
          </div>
          <div className={Styles.InterviewsWrapper}>
            <div className={Styles.InterviewsHeading}>
              <h2>Today&apos;s interviews (7)</h2>
              <Link href="/interview-details">
                <a className={Styles.ViewBtn}>
                  View All
                  <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
                </a>
              </Link>
            </div>
            <div className={Styles.DetailsWrapper}>
              <div className={HrRoundStyles.tableWrapper}>
                <Tables
                  columns={HrRoundInterviewColumns}
                  data={HrRoundInterviewData}
                  className={HrRoundStyles.HrRoundTable}
                />
              </div>
            </div>
          </div>
          <div className={Styles.InterviewsWrapper}>
            <div className={Styles.InterviewsHeading}>
              <h2>Feedback pending (6)</h2>
              <Link href="/interview-details">
                <a className={Styles.ViewBtn}>
                  View All
                  <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
                </a>
              </Link>
            </div>
            <div className={Styles.DetailsWrapper}>
              <div className={HrRoundStyles.tableWrapper}>
                <Tables
                  columns={HrRoundPendingColumns}
                  data={HrRoundPendingData}
                  className={HrRoundStyles.HrRoundTable}
                />
              </div>
            </div>
          </div>
          <div className={AnalyticsStyles.GraphPieWrapper}>
            <div
              className={[
                AnalyticsStyles.Graphs,
                AnalyticsStyles.GraphPieCard,
              ].join(" ")}
            >
              <div className={AnalyticsStyles.GraphHeading}>
                <h2>Interview History</h2>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#09B48B",
                    },
                  }}
                >
                  <Select
                    className={InterviewerStyles.SelectDate}
                    onChange={() => {}}
                    defaultValue="Past 6 months"
                    options={[
                      {
                        className: "vacancyFilterItem",
                        value: "Past 6 months",
                        label: "Past 6 months",
                      },
                      {
                        className: "vacancyFilterItem",
                        value: "Past 12 months",
                        label: "Past 12 months",
                      },
                      {
                        className: "vacancyFilterItem",
                        value: "Past 24 months",
                        label: "Past 24 months",
                      },
                    ]}
                  />
                </ConfigProvider>
              </div>
              <div className={AnalyticsStyles.AnalyticsGraphWrapper}>
                <InterviewHistory />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewerDashboard;
