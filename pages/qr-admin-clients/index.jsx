import { React, useState } from "react";
import Link from "next/link";
import { RightOutlined, PlusOutlined } from "@ant-design/icons";
import { ConfigProvider, Select, Button, Tooltip, Input } from "antd";
import EmptyData from "../../components/EmptyData/EmptyData";
import AddNewClient from "../../components/popup/AddNewClient";
import TableSearch from "../../components/tables/TablesSearch";
import CallCredit from "../../components/tables/CallCredit";

import ManageUserStyles from "../manageuser/Manageuser.module.scss";
import HrroundStyles from "../hrround/HrRound.module.scss";
import styles from "../interviewer/Interviewer.module.scss";

const QrAdminClients = () => {
  const UpcomingInterviews = 1;

  // table start
  const ClientsColumns = [
    {
      title: "Client name",
      dataIndex: "clientName",
      key: "clientName",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "POC",
      dataIndex: "poc",
      key: "poc",
    },
    {
      title: "Call Credit",
      dataIndex: "callCredit",
      key: "callCredit",
      align: "center",
      sorter: (a, b) => a.callCreditLeft - b.callCreditLeft,
      className: HrroundStyles.QrClientsExperienceColumn,
      width: "200px",
    },
    {
      title: "Interview Credit",
      dataIndex: "interviewCredit",
      key: "interviewCredit",
      align: "center",
      sorter: (a, b) => a.interviewCreditLeft - b.interviewCreditLeft,
      className: HrroundStyles.QrClientsExperienceColumn,
      width: "200px",
    },
    {
      title: "Total Vacancy",
      dataIndex: "totalVacancy",
      key: "totalVacancy",
      align: "center",
      sorter: (a, b) => a.totalVacancy - b.totalVacancy,
      className: HrroundStyles.QrClientsExperienceColumn,
    },
    {
      title: "",
      dataIndex: "viewDetails",
      key: "viewDetails",
      render: () => (
        <Link href="/qr-admin-clients-details">
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

  const ClientsData = [
    {
      key: "1",
      clientName: (
        <>
          Sketch Brahma Technologies
          <span className={HrroundStyles.tableCellSubData}>12DWWPB9503H1</span>
        </>
      ),
      location: "Bangalore",
      poc: (
        <>
          Vignesh Sundar
          <span className={HrroundStyles.tableCellSubData}>
            hr@sketchbrahma.com
          </span>
          <span className={HrroundStyles.tableCellSubData}>8344381910</span>
        </>
      ),
      callCredit: <CallCredit creditData={298} />,
      interviewCredit: <CallCredit creditData={498} />,
      interviewCreditLeft: 498,
      callCreditLeft: 298,
      totalVacancy: 24,
    },
    {
      key: "2",
      clientName: (
        <>
          Codingmart Technologies
          <span className={HrroundStyles.tableCellSubData}>12DWWPB9503H1</span>
        </>
      ),
      location: "Bangalore",
      poc: (
        <>
          Vignesh Sundar
          <span className={HrroundStyles.tableCellSubData}>
            hr@sketchbrahma.com
          </span>
          <span className={HrroundStyles.tableCellSubData}>8344381910</span>
        </>
      ),
      callCredit: <CallCredit creditData={150} />,
      interviewCredit: <CallCredit creditData={342} />,
      totalVacancy: 23,
      interviewCreditLeft: 342,
      callCreditLeft: 150,
    },
    {
      key: "3",
      clientName: (
        <>
          Codingmart Technologies
          <span className={HrroundStyles.tableCellSubData}>12DWWPB9503H1</span>
        </>
      ),
      location: "Bangalore",
      poc: (
        <>
          Vignesh Sundar
          <span className={HrroundStyles.tableCellSubData}>
            hr@sketchbrahma.com
          </span>
          <span className={HrroundStyles.tableCellSubData}>8344381910</span>
        </>
      ),
      callCredit: <CallCredit creditData={231} />,
      interviewCredit: <CallCredit creditData={879} />,
      interviewCreditLeft: 879,
      callCreditLeft: 231,
      totalVacancy: 16,
    },
    {
      key: "4",
      clientName: (
        <>
          Sketch Brahma Technologies
          <span className={HrroundStyles.tableCellSubData}>12DWWPB9503H1</span>
        </>
      ),
      location: "Bangalore",
      poc: (
        <>
          Vignesh Sundar
          <span className={HrroundStyles.tableCellSubData}>
            hr@sketchbrahma.com
          </span>
          <span className={HrroundStyles.tableCellSubData}>8344381910</span>
        </>
      ),
      callCredit: <CallCredit creditData={78} />,
      interviewCredit: <CallCredit creditData={96} />,
      interviewCreditLeft: 96,
      callCreditLeft: 78,
      totalVacancy: 24,
    },
    {
      key: "5",
      clientName: (
        <>
          Codingmart Technologies
          <span className={HrroundStyles.tableCellSubData}>12DWWPB9503H1</span>
        </>
      ),
      location: "Bangalore",
      poc: (
        <>
          Vignesh Sundar
          <span className={HrroundStyles.tableCellSubData}>
            hr@sketchbrahma.com
          </span>
          <span className={HrroundStyles.tableCellSubData}>8344381910</span>
        </>
      ),
      callCredit: <CallCredit creditData={661} />,
      interviewCredit: <CallCredit creditData={67} />,
      interviewCreditLeft: 67,
      callCreditLeft: 661,
      totalVacancy: 23,
    },
    {
      key: "6",
      clientName: (
        <>
          Codingmart Technologies
          <span className={HrroundStyles.tableCellSubData}>12DWWPB9503H1</span>
        </>
      ),
      location: "Bangalore",
      poc: (
        <>
          Vignesh Sundar
          <span className={HrroundStyles.tableCellSubData}>
            hr@sketchbrahma.com
          </span>
          <span className={HrroundStyles.tableCellSubData}>8344381910</span>
        </>
      ),
      callCredit: <CallCredit creditData={34} />,
      interviewCredit: <CallCredit creditData={0} />,
      interviewCreditLeft: 0,
      callCreditLeft: 34,
      totalVacancy: 16,
    },
  ];
  // table end

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
        <div className="wideContainer">
          <div className={ManageUserStyles.TableHeading}>
            <h2>Clients({UpcomingInterviews}) </h2>
            {UpcomingInterviews >= 1 ? (
              <AddNewClient
                heading="Add New Client"
                subHeading="Enter the fields below to add the client details"
              >
                <Button className={["greenBtn", styles.AddDataBtn].join(" ")}>
                  <PlusOutlined /> Add Client
                </Button>
              </AddNewClient>
            ) : (
              ""
            )}
          </div>

          {UpcomingInterviews >= 1 ? (
            <div
              className={[
                HrroundStyles.HrRoundsWrapper,
                styles.TableContentWrapper,
              ].join(" ")}
            >
              <TableSearch
                placeholder="Search"
                columns={ClientsColumns}
                data={ClientsData}
              />
            </div>
          ) : (
            <div className={styles.EmptyInterviewsWrapper}>
              <EmptyData heading="No  Clients Found">
                <AddNewClient
                  heading="Add New Client"
                  subHeading="Enter the fields below to add"
                >
                  <Button className={["greenBtn", styles.AddDataBtn].join(" ")}>
                    <PlusOutlined /> Add Client
                  </Button>
                </AddNewClient>
              </EmptyData>
            </div>
          )}
        </div>
      </section>
    </ConfigProvider>
  );
};

export default QrAdminClients;
