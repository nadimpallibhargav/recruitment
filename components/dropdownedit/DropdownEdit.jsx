import React from "react";
import { Dropdown, Menu } from "antd";
import { MoreOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

import AnalyticsStyles from "../../pages/analytics/Analytics.module.scss";
import styles from "../../pages/candidatedetails/Candidatedetails.module.scss";

const DropSelectOne = (
  <Menu className="hrRoundEditDropdown">
    <Menu.Item>
      <EditOutlined /> Edit
    </Menu.Item>
    <Menu.Item>
      <DeleteOutlined /> Delete
    </Menu.Item>
  </Menu>
);

const DropdownEdit = () => {
  return (
    <Dropdown
      menu={DropSelectOne}
      className={["icon28", AnalyticsStyles.MoreBtn, styles.NoteModifyBtn].join(
        " "
      )}
      trigger={["click"]}
    >
      <a onClick={(e) => e.preventDefault()}>
        <MoreOutlined className={AnalyticsStyles.MoreIcon} />
      </a>
    </Dropdown>
  );
};

export default DropdownEdit;
