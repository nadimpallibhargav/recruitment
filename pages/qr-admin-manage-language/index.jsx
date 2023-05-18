import React from "react";
import { Dropdown, ConfigProvider, Button } from "antd";
import { MoreOutlined, PlusOutlined } from "@ant-design/icons";
import Tables from "../../components/tables/Tables";

import AnalyticsStyles from "../analytics/Analytics.module.scss";
import styles from "../candidatedetails/Candidatedetails.module.scss";
import HrroundStyles from "../hrround/HrRound.module.scss";
import ManageUserStyles from "../manageuser/Manageuser.module.scss";
import manageStyles from "./Qradminmanagelanguage.module.scss";
import AddLanguage from "../../components/popup/AddLanguage";

export const ActiveDropDownItems = {
  items: [
    {
      label: "Edit",
      key: "1",
    },
    {
      label: "Deactivate",
      key: "2",
    },
    {
      label: "Activate",
      key: "3",
    },
  ],
  selectable: true,
};

// Hr Round Details table start
const HrRoundDetailsColumns = [
  {
    title: "Language",
    dataIndex: "Language",
    key: "Language",
    width: "50%",
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    width: "45%",
  },
  {
    title: "",
    dataIndex: "edit",
    key: "edit",
    width: "5%",
  },
];

const HrRoundDetailsData = [
  {
    key: "1",
    Language: "React JS",
    status: (
      <>
        <span className={[styles.FeedbackText, styles.SelectText].join(" ")}>
          Active
        </span>
      </>
    ),
    edit: (
      <Dropdown
        menu={ActiveDropDownItems}
        trigger={"click"}
        className={[
          "icon34",
          AnalyticsStyles.MoreBtn,
          styles.NoteModifyBtn,
          ManageUserStyles.EditUserBtn,
        ].join(" ")}
      >
        <MoreOutlined className={AnalyticsStyles.MoreIcon} />
      </Dropdown>
    ),
  },
  {
    key: "2",
    Language: "Angular",
    status: (
      <>
        <span className={[styles.FeedbackText, styles.SelectText].join(" ")}>
          Active
        </span>
      </>
    ),
    edit: (
      <Dropdown
        menu={ActiveDropDownItems}
        trigger={"click"}
        className={[
          "icon34",
          AnalyticsStyles.MoreBtn,
          styles.NoteModifyBtn,
          ManageUserStyles.EditUserBtn,
        ].join(" ")}
      >
        <MoreOutlined className={AnalyticsStyles.MoreIcon} />
      </Dropdown>
    ),
  },
  {
    key: "3",
    Language: "Node JS",
    status: (
      <>
        <span className={[styles.FeedbackText, styles.SelectText].join(" ")}>
          Active
        </span>
      </>
    ),
    edit: (
      <Dropdown
        menu={ActiveDropDownItems}
        trigger={"click"}
        className={[
          "icon34",
          AnalyticsStyles.MoreBtn,
          styles.NoteModifyBtn,
          ManageUserStyles.EditUserBtn,
        ].join(" ")}
      >
        <MoreOutlined className={AnalyticsStyles.MoreIcon} />
      </Dropdown>
    ),
  },
  {
    key: "4",
    Language: "Next JS",
    status: (
      <span className={[styles.FeedbackText, styles.PendingText].join(" ")}>
        Inactive
      </span>
    ),
    edit: (
      <Dropdown
        menu={ActiveDropDownItems}
        trigger={"click"}
        className={[
          "icon34",
          AnalyticsStyles.MoreBtn,
          styles.NoteModifyBtn,
          ManageUserStyles.EditUserBtn,
        ].join(" ")}
      >
        <MoreOutlined className={AnalyticsStyles.MoreIcon} />
      </Dropdown>
    ),
  },
  {
    key: "5",
    Language: "Javascript",
    status: (
      <>
        <span className={[styles.FeedbackText, styles.PendingText].join(" ")}>
          Inactive
        </span>
      </>
    ),
    edit: (
      <Dropdown
        menu={ActiveDropDownItems}
        trigger={"click"}
        className={[
          "icon34",
          AnalyticsStyles.MoreBtn,
          styles.NoteModifyBtn,
          ManageUserStyles.EditUserBtn,
        ].join(" ")}
      >
        <MoreOutlined className={AnalyticsStyles.MoreIcon} />
      </Dropdown>
    ),
  },
];
// Hr Round Details table end

const QrAdminManageLanguage = () => {
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
          AnalyticsStyles.AnalyticsSection,
          HrroundStyles.HrRoundSection,
          styles.HrRoundDetailsSection,
          ManageUserStyles.ManageUserSection,
          manageStyles.LanguageSection,
          "HrRoundDetailsSection",
        ].join(" ")}
      >
        <div className={manageStyles.manageContainer}>
          <div className={ManageUserStyles.TableHeading}>
            <h2>Manage Language </h2>
            <AddLanguage>
              <Button className="greenBtn">
                <PlusOutlined /> Add Language
              </Button>
            </AddLanguage>
          </div>
          <div
            className={[
              styles.HrDetailsStatus,
              ManageUserStyles.ManageUserContent,
            ].join(" ")}
          >
            <div className={styles.tableWrapper}>
              <Tables
                columns={HrRoundDetailsColumns}
                data={HrRoundDetailsData}
                className={[
                  HrroundStyles.HrRoundTable,
                  styles.InterviewStatusTable,
                ].join(" ")}
              />
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default QrAdminManageLanguage;
