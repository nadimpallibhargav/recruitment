import { React, useState } from "react";
import Link from "next/link";
import { LeftOutlined } from "@ant-design/icons";
import { ConfigProvider, Breadcrumb } from "antd";

import AnalyticsStyles from "../../pages/analytics/Analytics.module.scss";
import BreadcrumbStyles from "../../components/breadcrumb/Breadcrumb.module.scss";
import HrroundStyles from "../hrround/HrRound.module.scss";
import styles from "../interviewer/Interviewer.module.scss";
import TableStyles from "../../components/tables/Tables.module.scss";
import TableDateFilter from "../../components/tables/TableDateFilter";
import CallCredit from "../../components/tables/CallCredit";

const QrAdminClientsPaymentHistory = () => {
  const [editOutlined, setEditOutlined] = useState(true);

  // table start
  const ClientsColumns = [
    {
      title: "Payment date",
      dataIndex: "paymentDate",
      key: "paymentDate",
      className: [TableStyles.CommonColumnWith, TableStyles.PaymentDate].join(
        " "
      ),
    },
    {
      title: "Vacancy Details",
      dataIndex: "vacancyDetails",
      key: "vacancyDetails",
      className: [
        TableStyles.CommonColumnWith,
        TableStyles.PaymentVacancyDetails,
      ].join(" "),
    },
    {
      title: "Call Credit",
      dataIndex: "callCredit",
      key: "callCredit",
      className: [
        TableStyles.CommonColumnWith,
        TableStyles.PaymentCallCredit,
      ].join(" "),
    },
    {
      title: "Interview Credit",
      dataIndex: "interviewCredit",
      key: "interviewCredit",
      className: [
        TableStyles.CommonColumnWith,
        TableStyles.PaymentCallCredit,
      ].join(" "),
    },
  ];

  const ClientsData = [
    {
      key: "1",
      paymentDate: "16 Feb 2023",
      vacancyDetails: "Front end developer - Angular/HTML/CSS - 3 to 4 yrs",
      callCredit: <CallCredit creditData={50} />,
      callCreditLeft: 50,
      interviewCredit: <CallCredit creditData={100} />,
    },
    {
      key: "2",
      paymentDate: "14 Feb 2023",
      vacancyDetails: "Front end developer - Angular/HTML/CSS - 3 to 4 yrs",
      callCredit: <CallCredit creditData={30} />,
      callCreditLeft: 30,
      interviewCredit: <CallCredit creditData={60} />,
    },
    {
      key: "3",
      paymentDate: "16 Feb 2023",
      vacancyDetails: "Front end developer - Angular/HTML/CSS - 3 to 4 yrs",
      callCredit: <CallCredit creditData={50} />,
      callCreditLeft: 50,
      interviewCredit: <CallCredit creditData={100} />,
    },
    {
      key: "4",
      paymentDate: "14 Feb 2023",
      vacancyDetails: "Front end developer - Angular/HTML/CSS - 3 to 4 yrs",
      callCredit: <CallCredit creditData={30} />,
      callCreditLeft: 30,
      interviewCredit: <CallCredit creditData={60} />,
    },
    {
      key: "5",
      paymentDate: "14 Feb 2023",
      vacancyDetails: "Front end developer - Angular/HTML/CSS - 3 to 4 yrs",
      callCredit: <CallCredit creditData={30} />,
      callCreditLeft: 30,
      interviewCredit: <CallCredit creditData={60} />,
    },
    {
      key: "6",
      paymentDate: "16 Feb 2023",
      vacancyDetails: "Front end developer - Angular/HTML/CSS - 3 to 4 yrs",
      callCredit: <CallCredit creditData={50} />,
      callCreditLeft: 50,
      interviewCredit: <CallCredit creditData={60} />,
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
          <div
            className={[AnalyticsStyles.Header, "breadCrumbWrapper"].join(" ")}
          >
            <div className="breadCrumbText">
              <div className="breadCrumbTitle">
                <Breadcrumb
                  separator=">"
                  className={BreadcrumbStyles.Breadcrumb}
                >
                  <Breadcrumb.Item>
                    <Link href="/qr-admin-clients">
                      <a>Clients</a>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>
                    <Link href="/qr-admin-clients-details">
                      <a>SB Solutions</a>
                    </Link>
                  </Breadcrumb.Item>
                  <Breadcrumb.Item>Payment History</Breadcrumb.Item>
                </Breadcrumb>
                <h1>
                  <Link href="/qr-admin-clients">
                    <a>
                      <LeftOutlined className="backBtn" />
                    </a>
                  </Link>
                  <div>Payment History</div>
                </h1>
              </div>
            </div>
          </div>

          <div
            className={[
              HrroundStyles.HrRoundsWrapper,
              styles.TableContentWrapper,
            ].join(" ")}
          >
            <TableDateFilter
              placeholder="Search"
              columns={ClientsColumns}
              data={ClientsData}
            />
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default QrAdminClientsPaymentHistory;
