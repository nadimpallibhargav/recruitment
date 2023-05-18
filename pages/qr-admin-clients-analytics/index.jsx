import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Button, Dropdown, Breadcrumb } from "antd";
import {
  MoreOutlined,
  LeftOutlined,
  EditOutlined,
  PlusOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Card from "../../components/dashboard/Card";
import AnalyticsOverview from "../../components/analytics/AnalyticsOverview";
import AnalyticsPiechart from "../../components/analytics/AnalyticsPiechart";
import ChartSelect from "../../components/dashboard/Selector/ChartSelector";

import BreadcrumbStyles from "../../components/breadcrumb/Breadcrumb.module.scss";
import styles from "../analytics/Analytics.module.scss";
import QrAnalyticsStyles from "./QrAdminClientsAnalytics.module.scss";

const ChartContainer = dynamic(
  () => import("../../components/dashboard/ChartContainer"),
  { ssr: false }
);

const newClientData = [
  {
    day: "Sun",
    count: 1,
    round: "HR round",
  },
  {
    day: "Mon",
    count: 19,
    round: "HR round",
  },
  {
    day: "Tue",
    count: 27,
    round: "HR round",
  },
  {
    day: "Wed",
    count: 16,
    round: "HR round",
  },
  {
    day: "Thu",
    count: 24,
    round: "HR round",
  },
  {
    day: "Fri",
    count: 27,
    round: "HR round",
  },
  {
    day: "Sat",
    count: 1,
    round: "HR round",
  },
  {
    day: "Sun",
    count: 1,
    round: "Technical round 1",
  },
  {
    day: "Mon",
    count: 19,
    round: "Technical round 1",
  },
  {
    day: "Tue",
    count: 27,
    round: "Technical round 1",
  },
  {
    day: "Wed",
    count: 16,
    round: "Technical round 1",
  },
  {
    day: "Thu",
    count: 24,
    round: "Technical round 1",
  },
  {
    day: "Fri",
    count: 27,
    round: "Technical round 1",
  },
  {
    day: "Sat",
    count: 1,
    round: "Technical round 1",
  },

  {
    day: "Sun",
    count: 1,
    round: "Technical round 2",
  },
  {
    day: "Mon",
    count: 19,
    round: "Technical round 2",
  },
  {
    day: "Tue",
    count: 27,
    round: "Technical round 2",
  },
  {
    day: "Wed",
    count: 16,
    round: "Technical round 2",
  },
  {
    day: "Thu",
    count: 24,
    round: "Technical round 2",
  },
  {
    day: "Fri",
    count: 27,
    round: "Technical round 2",
  },
  {
    day: "Sat",
    count: 1,
    round: "Technical round 2",
  },

  {
    day: "Sun",
    count: 1,
    round: "Selected",
  },
  {
    day: "Mon",
    count: 19,
    round: "Selected",
  },
  {
    day: "Tue",
    count: 27,
    round: "Selected",
  },
  {
    day: "Wed",
    count: 16,
    round: "Selected",
  },
  {
    day: "Thu",
    count: 24,
    round: "Selected",
  },
  {
    day: "Fri",
    count: 27,
    round: "Selected",
  },
  {
    day: "Sat",
    count: 1,
    round: "Selected",
  },
];

const cardData = [
  {
    title: "Active Vacancy",
    content: 14,
  },
  {
    title: "Total Vacancy",
    content: 19,
  },
  {
    title: "Call Credit",
    content: 32,
  },
  {
    title: "Interview Credit",
    content: 5643,
  },
];

const over = [
  {
    heading: "POC",
    subHeading: "Stephen",
  },
  {
    heading: "Contact Details",
    subHeading: (
      <>
        hr@sketchbrahma.com <br /> 9987654323
      </>
    ),
  },
  {
    heading: "Company Domain",
    subHeading: "www.sbsolutions.com",
  },
  {
    heading: "Location",
    subHeading: "Bangalore",
  },
  {
    heading: "Address",
    subHeading:
      "Plama Heights, 4, Hennur Bagalur Main Rd, HBR Layout, Bengaluru, Karnataka 560043",
  },
  {
    heading: "GSTIN",
    subHeading: "12DWWPB9503H1Z3",
  },
  {
    heading: "Joined on",
    subHeading: "16 Dec 2022",
  },
];

const items = [
  {
    key: "1",
    label: (
      <Link href="/qr-admin-clients-analytics">
        <a>Update</a>
      </Link>
    ),
    icon: <EditOutlined />,
  },
  {
    key: "2",
    label: "Close",
    icon: <CloseOutlined />,
  },
];

const QrAdminClientsAnalytics = () => {
  return (
    <section
      className={[
        styles.AnalyticsSection,
        QrAnalyticsStyles.ClientsAnalyticsSection,
      ].join(" ")}
    >
      <div className="container">
        <div className={[styles.Header, "breadCrumbWrapper"].join(" ")}>
          <div className="breadCrumbText">
            <div className="breadCrumbTitle">
              <Breadcrumb separator=">" className={BreadcrumbStyles.Breadcrumb}>
                <Breadcrumb.Item>
                  <Link href="/qr-admin-clients">
                    <a>Clients</a>
                  </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>SB Solutions</Breadcrumb.Item>
              </Breadcrumb>
              <h1>
                <Link href="/vacancy">
                  <a>
                    <LeftOutlined className="backBtn" />
                  </a>
                </Link>
                <div>SB Solutions</div>
              </h1>
            </div>
          </div>
          <div
            className={[styles.HeaderButtons, styles.HeaderButtonsDesk].join(
              " "
            )}
          >
            <Link href="/qr-admin-clients-payment-history">
              <a>
                <Button
                  className={[styles.greenBtn, "greenBtnOutline"].join(" ")}
                >
                  Payment History
                </Button>
              </a>
            </Link>
            <Link href="/addcandidate">
              <a>
                <Button className={[styles.greenBtn, "greenBtn"].join(" ")}>
                  <PlusOutlined />
                  Add candidates
                </Button>
              </a>
            </Link>
            <Dropdown
              className={["greenBtnOutline", styles.MoreBtn, "icon40"].join(
                " "
              )}
              trigger={["click"]}
              menu={{
                items,
              }}
            >
              <a onClick={(e) => e.preventDefault()}>
                <MoreOutlined className={styles.MoreIcon} />
              </a>
            </Dropdown>
          </div>
        </div>
        <div
          className={[
            styles.DashboardWrapper,
            QrAnalyticsStyles.DashboardWrapper,
          ].join(" ")}
        >
          <AnalyticsOverview overviewData={over} />
          <div className={styles.DashboardContent}>
            <div className={styles.TotalCandidates}>
              {cardData.map((data) => (
                <Card key={data.title} {...data} />
              ))}
            </div>
            <div
              className={[
                styles.GraphPieWrapper,
                QrAnalyticsStyles.GraphPieWrapper,
              ].join(" ")}
            >
              <div className={[styles.Graphs, styles.GraphPieCard].join(" ")}>
                <ChartContainer
                  data={newClientData}
                  xField="day"
                  yField="count"
                  type="bar"
                  title={`Analytics`}
                  color={["#95C7BB", "#09B48B", "#089B78", "#056951"]}
                  rightContent={<ChartSelect defaultValue="2" />}
                  isStack={true}
                  seriesField="round"
                  height={275}
                />
              </div>
              <div
                className={[
                  styles.PiegraphCard,
                  styles.GraphPieCard,
                  QrAnalyticsStyles.PieCard,
                ].join(" ")}
              >
                <AnalyticsPiechart
                  heading="Total Spending"
                  piechartHeading="Payment"
                  data={[
                    {
                      type: "Call Credit",
                      value: 12185,
                    },
                    {
                      type: "Interview Credit",
                      value: 45122,
                    },
                  ]}
                  reversedData={[
                    {
                      type: "Interview Credit",
                      className: "Selected",
                      value: 45122,
                    },
                    {
                      type: "Call Credit",
                      className: "Pending",
                      value: 12185,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={[styles.HeaderButtons, styles.HeaderButtonsMobile].join(
            " "
          )}
        >
          <Link href="/qr-admin-clients-payment-history">
            <a>
              <Button className={[styles.greenBtn, "greenBtn"].join(" ")}>
                Payment History
              </Button>
            </a>
          </Link>
          <Link href="/addcandidate">
            <a>
              <Button className={[styles.greenBtn, "greenBtn"].join(" ")}>
                <PlusOutlined />
                Add candidates
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default QrAdminClientsAnalytics;
