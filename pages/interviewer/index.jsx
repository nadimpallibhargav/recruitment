import { React } from "react";
import Image from "next/image";
import Link from "next/link";
import { RightOutlined, LinkOutlined } from "@ant-design/icons";
import { ConfigProvider, Tabs, Select } from "antd";
import Tables from "../../components/tables/Tables";
import ResumePopup from "../../components/popup/ResumePopup";
import EmptyData from "../../components/EmptyData/EmptyData";

import HrroundStyles from "../hrround/HrRound.module.scss";
import styles from "./Interviewer.module.scss";

const Interviewer = () => {
  const UpcomingInterviews = 1;

  // select btn start
  const SelectElement = (
    <Select
      className={[styles.SelectDate, styles.DesktopSelectDate].join(" ")}
      onChange={() => {}}
      defaultValue="Today"
      options={[
        {
          className: "vacancyFilterItem",
          value: "Today",
          label: "Today",
        },
        {
          className: "vacancyFilterItem",
          value: "Tomorrow",
          label: "Tomorrow",
        },
        {
          className: "vacancyFilterItem",
          value: "16 Feb 2023",
          label: "16 Feb 2023",
        },
      ]}
    />
  );
  // select btn end

  // Upcoming interviews Yet to interview table start
  const HrRoundInterviewColumns = [
    {
      title: "Candidate Name",
      dataIndex: "candidateName",
      key: "CandidateName",
      render: (text) => <span>{text}</span>,
    },
    {
      title: "Vacancy & Organization",
      dataIndex: "Vacancy",
      key: "Vacancy",
      className: styles.vacancyColumn,
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
      render: () => <LinkOutlined className={HrroundStyles.tableCellIcon} />,
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
      Vacancy: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span>ABC Technologies</span>
        </>
      ),
      Round: "Technical round 1",
      ScheduledTime: "11:30 am",
      Resume: Image,
      Link: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={HrroundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrroundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      Vacancy: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span>ABC Technologies</span>
        </>
      ),
      Round: "Technical round 2",
      ScheduledTime: "01:00 pm",
      Resume: Image,
      Link: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={HrroundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrroundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      Vacancy: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span>ABC Technologies</span>
        </>
      ),
      Round: "Technical round 1",
      ScheduledTime: "02:30 pm",
      Resume: Image,
      Link: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={HrroundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrroundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "4",
      candidateName: "Cody Fisher",
      Vacancy: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span>ABC Technologies</span>
        </>
      ),
      Round: "Technical round 1",
      ScheduledTime: "04:00 pm",
      Resume: Image,
      Link: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={HrroundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrroundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "5",
      candidateName: "Brooklyn Simmons",
      Vacancy: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span>ABC Technologies</span>
        </>
      ),
      Round: "Technical round 2",
      ScheduledTime: "06:00 pm",
      Resume: Image,
      Link: "",
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={HrroundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrroundStyles.viewDetailsArrow} />
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
      title: "Vacancy & Organization",
      dataIndex: "Vacancy",
      key: "Vacancy",
      className: styles.vacancyColumn,
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
      align: "center",
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
      Vacancy: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span>ABC Technologies</span>
        </>
      ),
      Round: "Technical round 1",
      Interviewed: "29 Jan 2023 | 11:30 am",
      giveFeedback: (
        <Link href="/interviewer-feedback">
          <a
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrroundStyles.feedbackBtn,
            ].join(" ")}
          >
            Give Feedback
          </a>
        </Link>
      ),
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={HrroundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrroundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "2",
      candidateName: "Jacob Jones",
      Vacancy: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span>ABC Technologies</span>
        </>
      ),
      Round: "Technical round 2",
      Interviewed: "29 Jan 2023 l 01:00 pm",
      giveFeedback: (
        <Link href="/interviewer-feedback">
          <a
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrroundStyles.feedbackBtn,
            ].join(" ")}
          >
            Give Feedback
          </a>
        </Link>
      ),
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={HrroundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrroundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "3",
      candidateName: "Ronald Richards",
      Vacancy: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span>ABC Technologies</span>
        </>
      ),
      Round: "Technical round 2",
      Interviewed: "30 Jan 2023 l 02:30 pm",
      giveFeedback: (
        <Link href="/interviewer-feedback">
          <a
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrroundStyles.feedbackBtn,
            ].join(" ")}
          >
            Give Feedback
          </a>
        </Link>
      ),
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={HrroundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrroundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "4",
      candidateName: "Cody Fisher",
      Vacancy: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span>ABC Technologies</span>
        </>
      ),
      Round: "Technical round 1",
      Interviewed: "31 Jan 2023 l 04:00 pm",
      giveFeedback: (
        <Link href="/interviewer-feedback">
          <a
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrroundStyles.feedbackBtn,
            ].join(" ")}
          >
            Give Feedback
          </a>
        </Link>
      ),
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={HrroundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrroundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
    {
      key: "5",
      candidateName: "Brooklyn Simmons",
      Vacancy: (
        <>
          Front end developer - Angular/HTML/CSS - 3 to 4 yrs
          <span>ABC Technologies</span>
        </>
      ),
      Round: "Technical round 1",
      Interviewed: "31 Jan 2023 l 04:00 pm",
      giveFeedback: (
        <Link href="/interviewer-feedback">
          <a
            className={[
              "greenBtnOutline",
              "btnSmall",
              HrroundStyles.feedbackBtn,
            ].join(" ")}
          >
            Give Feedback
          </a>
        </Link>
      ),
      View: (
        <Link href="/candidatedetails">
          <a>
            <span className={HrroundStyles.viewDetailsLink}>
              View Details
              <RightOutlined className={HrroundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];
  // Upcoming interviews pending table end

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
          styles.InterviewerSection,
        ].join(" ")}
      >
        <div className="container">
          <div>
            <h1>Interviews</h1>
          </div>

          {UpcomingInterviews >= 1 ? (
            <div
              className={[
                HrroundStyles.HrRoundsWrapper,
                styles.TableContentWrapper,
              ].join(" ")}
            >
              {/* mobile search button  */}
              <div className={HrroundStyles.TableHeading}>
                <Select
                  className={[styles.SelectDate, styles.MobileSelectDate].join(
                    " "
                  )}
                  onChange={() => {}}
                  defaultValue="Today"
                  options={[
                    {
                      className: "vacancyFilterItem",
                      value: "Today",
                      label: "Today",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "Tomorrow",
                      label: "Tomorrow",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "16 Feb 2023",
                      label: "16 Feb 2023",
                    },
                  ]}
                />
              </div>
              <div className={HrroundStyles.TabsWrapper}>
                <Tabs
                  tabBarExtraContent={SelectElement}
                  className={[
                    HrroundStyles.HrRoundTabs,
                    styles.UpcomingInterviewsTabs,
                    "HrRoundAllTabs",
                  ].join(" ")}
                  items={[
                    {
                      label: (
                        <span className={HrroundStyles.HrRoundTab}>
                          Yet to interview <label>5</label>
                        </span>
                      ),
                      key: 1,
                      children: (
                        <div className={HrroundStyles.tableWrapper}>
                          <Tables
                            columns={HrRoundInterviewColumns}
                            data={HrRoundInterviewData}
                            className={HrroundStyles.HrRoundTable}
                          />
                        </div>
                      ),
                    },
                    {
                      label: (
                        <span className={HrroundStyles.HrRoundTab}>
                          Feedback pending <label>3</label>
                        </span>
                      ),
                      key: 2,
                      children: (
                        <div className={HrroundStyles.tableWrapper}>
                          <Tables
                            columns={HrRoundPendingColumns}
                            data={HrRoundPendingData}
                          />
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          ) : (
            <div className={styles.EmptyInterviewsWrapper}>
              <EmptyData
                className={styles.EmptyData}
                heading="No Upcoming Interviews"
              />
            </div>
          )}
        </div>
      </section>
    </ConfigProvider>
  );
};

export default Interviewer;
