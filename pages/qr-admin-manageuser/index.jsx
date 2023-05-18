import React from "react";
import { Dropdown, ConfigProvider } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import Tables from "../../components/tables/Tables";
import EditManageUser from "../../components/popup/EditManageUser";

import AnalyticsStyles from "../analytics/Analytics.module.scss";
import styles from "../candidatedetails/Candidatedetails.module.scss";
import HrroundStyles from "../hrround/HrRound.module.scss";
import TableStyles from "../../components/tables/Tables.module.scss";
import ManageUserStyles from "./QrAdminManageuser.module.scss";
import ManageUserAdd from "../../components/popup/ManageUserAdd";

export const ActiveDropDownItems = {
  items: [
    {
      label: (
        <EditManageUser
          phoneVisible={true}
          emailVisible={false}
          clickText="Edit"
        />
      ),
      key: "1",
    },
    {
      label: "Deactivate",
      key: "2",
    },
    {
      label: "Resend mail",
      key: "3",
    },
    {
      label: "Revoke",
      key: "4",
    },
    {
      label: "Activate",
      key: "5",
    },
  ],
  selectable: true,
};

// Hr Round Details table start
const HrRoundDetailsColumns = [
  {
    title: "User name",
    dataIndex: "userName",
    key: "userName",
    className: TableStyles.CommonColumnWith,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    className: TableStyles.CommonColumnWith,
  },
  {
    title: "Contact Number",
    dataIndex: "contactNumber",
    key: "contactNumber",
    className: TableStyles.CommonColumnWith,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    className: TableStyles.CommonColumnWith,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    className: TableStyles.CommonColumnWith,
  },
  {
    title: "",
    dataIndex: "edit",
    key: "edit",
    align: "right",
    className: [
      TableStyles.QrManageUserEditColumn,
      TableStyles.CommonColumnWith,
    ].join(" "),
  },
];

const HrRoundDetailsData = [
  {
    key: "1",
    userName: "Jerome Bell",
    role: "Relationship Manager",
    contactNumber: "7568054837",
    email: "jbell@mail.com",
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
    userName: "Brooklyn Simmons",
    role: "Relationship Manager",
    contactNumber: "7568054837",
    email: "brooklyn@mail.com",
    status: (
      <>
        <span className={[styles.FeedbackText, styles.PendingText].join(" ")}>
          Pending
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
    userName: "Brooklyn Simmons",
    role: "Relationship Manager",
    contactNumber: "7568054837",
    email: "brooklyn@mail.com",
    status: (
      <>
        <span className={[styles.FeedbackText, styles.PendingText].join(" ")}>
          Pending
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
    userName: "Brooklyn Simmons",
    role: "Relationship Manager",
    contactNumber: "7568054837",
    email: "brooklyn@mail.com",
    status: (
      <span className={[styles.FeedbackText, styles.RejectText].join(" ")}>
        Deactive
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
    userName: "Jerome Bell",
    role: "Relationship Manager",
    contactNumber: "7568054837",
    email: "jbell@mail.com",
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
    key: "6",
    userName: "Brooklyn Simmons",
    role: "Relationship Manager",
    contactNumber: "7568054837",
    email: "brooklyn@mail.com",
    status: (
      <>
        <span className={[styles.FeedbackText, styles.PendingText].join(" ")}>
          Pending
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
    key: "7",
    userName: "Brooklyn Simmons",
    role: "Relationship Manager",
    contactNumber: "7568054837",
    email: "brooklyn@mail.com",
    status: (
      <>
        <span className={[styles.FeedbackText, styles.PendingText].join(" ")}>
          Pending
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
    key: "8",
    userName: "Brooklyn Simmons",
    role: "Relationship Manager",
    contactNumber: "7568054837",
    email: "brooklyn@mail.com",
    status: (
      <span className={[styles.FeedbackText, styles.RejectText].join(" ")}>
        Deactive
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
];
// Hr Round Details table end

const ManageUser = () => {
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
          "HrRoundDetailsSection",
        ].join(" ")}
      >
        <div className="wideContainer">
          <div className={ManageUserStyles.TableHeading}>
            <h2>Manage user </h2>
            <ManageUserAdd phoneVisible={false} />
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
                  ManageUserStyles.UserTable,
                ].join(" ")}
              />
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default ManageUser;
