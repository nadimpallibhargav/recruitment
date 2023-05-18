import { React, useState } from "react";
import Link from "next/link";
import { RightOutlined, LeftOutlined, PlusOutlined } from "@ant-design/icons";
import { ConfigProvider, Breadcrumb, Tag, Tooltip } from "antd";
import TableSearch from "../../components/tables/TablesSearch";
import SelectButton from "../../components/buttons/SelectButton";

import AnalyticsStyles from "../../pages/analytics/Analytics.module.scss";
import BreadcrumbStyles from "../../components/breadcrumb/Breadcrumb.module.scss";
import HrroundStyles from "../hrround/HrRound.module.scss";
import styles from "../interviewer/Interviewer.module.scss";

const QrAdminClientsDetails = () => {
  const [vacancyFilter, setVacancyFilter] = useState("open");

  const handleChange = (value) => {
    setVacancyFilter(value.value);
  };

  // open vacancy table start
  const ClientsOpenColumns = [
    {
      title: "Vacancy & Techstack",
      dataIndex: "vacancyTechstack",
      key: "vacancyTechstack",
      className: HrroundStyles.TechstackColumn,
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
      className: HrroundStyles.ExperienceColumn,
    },
    {
      title: "Round",
      dataIndex: "round",
      key: "round",
    },
    {
      title: "Position Opened",
      dataIndex: "positionOpened",
      key: "positionOpened",
      align: "center",
    },
    {
      title: "Shortilisted Candidates",
      dataIndex: "positionClosed",
      key: "positionClosed",
      align: "center",
    },
    {
      title: "Candidates",
      dataIndex: "candidates",
      key: "candidates",
      align: "center",
    },
    {
      title: "POC",
      dataIndex: "poc",
      key: "poc",
    },
    {
      title: "Posted on",
      dataIndex: "postedOn",
      key: "postedOn",
      sorter: (a, b) => a.postedOn - b.postedOn,
    },
    {
      title: "",
      dataIndex: "viewDetails",
      key: "viewDetails",
      render: () => (
        <Link href="/qr-admin-clients-analytics">
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

  const ClientsOpenData = [
    {
      key: "1",
      vacancyTechstack: (
        <>
          <span className={HrroundStyles.TableCellTechStack}>
            Front End Developer
          </span>
          <span className={HrroundStyles.TableCellTechStack}>
            {`${"React JS / Javascript / CSS".slice(0, 20)}...`}
          </span>
        </>
      ),
      experience: "3 to 4years",
      round: (
        <span className="TagsWrapper">
          <Tag className="tag">HR</Tag>
          <Tag className="tag">One Tech</Tag>
        </span>
      ),
      postedOn: 6,
      positionOpened: 6,
      positionClosed: 2,
      candidates: 27,
      poc: (
        <span className="ProfileIconsWrapper">
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">G</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
        </span>
      ),
      postedOn: "12 Dec 2022",
    },
    {
      key: "2",
      vacancyTechstack: (
        <>
          <span className={HrroundStyles.TableCellTechStack}>
            Front End Developer
          </span>
          <span className={HrroundStyles.TableCellTechStack}>
            {`${"React JS / Javascript / CSS".slice(0, 20)}...`}
          </span>
        </>
      ),
      experience: "3 to 4years",
      round: (
        <span className="TagsWrapper">
          <Tag className="tag">One Tech</Tag>
        </span>
      ),
      postedOn: 7,
      positionOpened: 6,
      positionClosed: 2,
      candidates: 27,
      poc: (
        <span className="ProfileIconsWrapper">
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">G</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
        </span>
      ),
      postedOn: "12 Dec 2022",
    },
    {
      key: "3",
      vacancyTechstack: (
        <>
          <span className={HrroundStyles.TableCellTechStack}>
            Front End Developer
          </span>
          <span className={HrroundStyles.TableCellTechStack}>
            {`${"React JS / Javascript / CSS".slice(0, 20)}...`}
          </span>
        </>
      ),
      experience: "3 to 4years",
      round: (
        <span className="TagsWrapper">
          <Tag className="tag">Two Tech</Tag>
        </span>
      ),
      postedOn: 4,
      positionOpened: 6,
      positionClosed: 2,
      candidates: 27,
      poc: (
        <span className="ProfileIconsWrapper">
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">G</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
        </span>
      ),
      postedOn: "12 Dec 2022",
    },
    {
      key: "4",
      vacancyTechstack: (
        <>
          <span className={HrroundStyles.TableCellTechStack}>
            Front End Developer
          </span>
          <span className={HrroundStyles.TableCellTechStack}>
            {`${"React JS / Javascript / CSS".slice(0, 20)}...`}
          </span>
        </>
      ),
      experience: "3 to 4years",
      round: (
        <span className="TagsWrapper">
          <Tag className="tag">HR</Tag>
          <Tag className="tag">Two Tech</Tag>
        </span>
      ),
      postedOn: 5,
      positionOpened: 6,
      positionClosed: 2,
      candidates: 27,
      poc: (
        <span className="ProfileIconsWrapper">
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">G</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
        </span>
      ),
      postedOn: "12 Dec 2022",
    },
    {
      key: "5",
      vacancyTechstack: (
        <>
          <span className={HrroundStyles.TableCellTechStack}>
            Front End Developer
          </span>
          <span className={HrroundStyles.TableCellTechStack}>
            {`${"React JS / Javascript / CSS".slice(0, 20)}...`}
          </span>
        </>
      ),
      experience: "3 to 4years",
      round: (
        <span className="TagsWrapper">
          <Tag className="tag">HR</Tag>
        </span>
      ),
      postedOn: 4,
      positionOpened: 6,
      positionClosed: 2,
      candidates: 27,
      poc: (
        <span className="ProfileIconsWrapper">
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">G</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
        </span>
      ),
      postedOn: "12 Dec 2022",
    },
    {
      key: "6",
      vacancyTechstack: (
        <>
          <span className={HrroundStyles.TableCellTechStack}>
            Front End Developer
          </span>
          <span className={HrroundStyles.TableCellTechStack}>
            {`${"React JS / Javascript / CSS".slice(0, 20)}...`}
          </span>
        </>
      ),
      experience: "3 to 4years",
      round: (
        <span className="TagsWrapper">
          <Tag className="tag">HR</Tag>
        </span>
      ),
      postedOn: 5,
      positionOpened: 6,
      positionClosed: 2,
      candidates: 27,
      poc: (
        <span className="ProfileIconsWrapper">
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">G</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
        </span>
      ),
      postedOn: "12 Dec 2022",
    },
  ];
  // open vacancy table end

  // open vacancy table start
  const ClientsClosedColumns = [
    {
      title: "Vacancy & Techstack",
      dataIndex: "vacancyTechstack",
      key: "vacancyTechstack",
      className: HrroundStyles.TechstackColumn,
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
      className: HrroundStyles.ExperienceColumn,
    },
    {
      title: "Round",
      dataIndex: "round",
      key: "round",
    },
    {
      title: "Shortilisted Candidates",
      dataIndex: "positionClosed",
      key: "positionClosed",
      align: "center",
    },
    {
      title: "Position Opened",
      dataIndex: "positionOpened",
      key: "positionOpened",
      align: "center",
    },
    {
      title: "Total Spending (Rs)",
      dataIndex: "totalSpending",
      key: "totalSpending",
      align: "center",
      sorter: (a, b) => a.totalSpending - b.totalSpending,
      className: [
        HrroundStyles.TotalSpendingColumn,
        HrroundStyles.QrClientsExperienceColumn,
      ].join(" "),
    },
    {
      title: "POC",
      dataIndex: "poc",
      key: "poc",
    },
    {
      title: "Posted on",
      dataIndex: "postedOn",
      key: "postedOn",
      sorter: (a, b) => a.postedOn - b.postedOn,
    },
    {
      title: "",
      dataIndex: "viewDetails",
      key: "viewDetails",
      render: () => (
        <Link href="/qr-admin-clients-analytics">
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

  const ClientsClosedOpenData = [
    {
      key: "1",
      vacancyTechstack: (
        <>
          <span className={HrroundStyles.TableCellTechStack}>
            Front End Developer
          </span>
          <span className={HrroundStyles.TableCellTechStack}>
            {`${"React JS / Javascript / CSS".slice(0, 20)}...`}
          </span>
        </>
      ),
      experience: "3 to 4years",
      round: (
        <span className="TagsWrapper">
          <Tag className="tag">HR</Tag>
          <Tag className="tag">One Tech</Tag>
        </span>
      ),
      postedOn: 6,
      positionOpened: 6,
      positionClosed: 2,
      totalSpending: 750,
      poc: (
        <span className="ProfileIconsWrapper">
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">G</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
        </span>
      ),
      postedOn: "12 Dec 2022",
    },
    {
      key: "2",
      vacancyTechstack: (
        <>
          <span className={HrroundStyles.TableCellTechStack}>
            Front End Developer
          </span>
          <span className={HrroundStyles.TableCellTechStack}>
            {`${"React JS / Javascript / CSS".slice(0, 20)}...`}
          </span>
        </>
      ),
      experience: "3 to 4years",
      round: (
        <span className="TagsWrapper">
          <Tag className="tag">One Tech</Tag>
        </span>
      ),
      postedOn: 7,
      positionOpened: 6,
      positionClosed: 2,
      totalSpending: 27,
      poc: (
        <span className="ProfileIconsWrapper">
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">G</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
        </span>
      ),
      postedOn: "12 Dec 2022",
    },
    {
      key: "3",
      vacancyTechstack: (
        <>
          <span className={HrroundStyles.TableCellTechStack}>
            Front End Developer
          </span>
          <span className={HrroundStyles.TableCellTechStack}>
            {`${"React JS / Javascript / CSS".slice(0, 20)}...`}
          </span>
        </>
      ),
      experience: "3 to 4years",
      round: (
        <span className="TagsWrapper">
          <Tag className="tag">Two Tech</Tag>
        </span>
      ),
      postedOn: 4,
      positionOpened: 6,
      positionClosed: 2,
      totalSpending: 385,
      poc: (
        <span className="ProfileIconsWrapper">
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">G</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
        </span>
      ),
      postedOn: "12 Dec 2022",
    },
    {
      key: "4",
      vacancyTechstack: (
        <>
          <span className={HrroundStyles.TableCellTechStack}>
            Front End Developer
          </span>
          <span className={HrroundStyles.TableCellTechStack}>
            {`${"React JS / Javascript / CSS".slice(0, 20)}...`}
          </span>
        </>
      ),
      experience: "3 to 4years",
      round: (
        <span className="TagsWrapper">
          <Tag className="tag">HR</Tag>
          <Tag className="tag">Two Tech</Tag>
        </span>
      ),
      postedOn: 5,
      positionOpened: 6,
      positionClosed: 2,
      totalSpending: 250,
      poc: (
        <span className="ProfileIconsWrapper">
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">G</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
        </span>
      ),
      postedOn: "12 Dec 2022",
    },
    {
      key: "5",
      vacancyTechstack: (
        <>
          <span className={HrroundStyles.TableCellTechStack}>
            Front End Developer
          </span>
          <span className={HrroundStyles.TableCellTechStack}>
            {`${"React JS / Javascript / CSS".slice(0, 20)}...`}
          </span>
        </>
      ),
      experience: "3 to 4years",
      round: (
        <span className="TagsWrapper">
          <Tag className="tag">HR</Tag>
        </span>
      ),
      postedOn: 4,
      positionOpened: 6,
      positionClosed: 2,
      totalSpending: 27,
      poc: (
        <span className="ProfileIconsWrapper">
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">G</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
        </span>
      ),
      postedOn: "12 Dec 2022",
    },
    {
      key: "6",
      vacancyTechstack: (
        <>
          <span className={HrroundStyles.TableCellTechStack}>
            Front End Developer
          </span>
          <span className={HrroundStyles.TableCellTechStack}>
            {`${"React JS / Javascript / CSS".slice(0, 20)}...`}
          </span>
        </>
      ),
      experience: "3 to 4years",
      round: (
        <span className="TagsWrapper">
          <Tag className="tag">HR</Tag>
        </span>
      ),
      postedOn: 5,
      positionOpened: 6,
      positionClosed: 2,
      totalSpending: 27,
      poc: (
        <span className="ProfileIconsWrapper">
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">G</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
          <Tooltip title="Jerome Bell">
            <span className="ProfileIcon">P</span>
          </Tooltip>
        </span>
      ),
      postedOn: "12 Dec 2022",
    },
  ];
  // open vacancy table end

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
                  <Breadcrumb.Item>Vacancy</Breadcrumb.Item>
                </Breadcrumb>
                <h1>
                  <Link href="/qr-admin-clients">
                    <a>
                      <LeftOutlined className="backBtn" />
                    </a>
                  </Link>
                  <div>Vacancy</div>
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
            <TableSearch
              placeholder="Search"
              columns={
                vacancyFilter === "open"
                  ? ClientsOpenColumns
                  : ClientsClosedColumns
              }
              data={
                vacancyFilter === "open"
                  ? ClientsOpenData
                  : ClientsClosedOpenData
              }
              SelectDropdown={
                <SelectButton
                  defaultValue={{
                    value: "open",
                    label: "Open Vacancy (6)",
                  }}
                  onChange={handleChange}
                  option={[
                    {
                      className: "vacancyFilterItem",
                      value: "open",
                      label: "Open Vacancy (6)",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "closed",
                      label: "Closed Vacancy (4)",
                    },
                  ]}
                />
              }
            />
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default QrAdminClientsDetails;
