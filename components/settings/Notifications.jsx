import React, { useState } from "react";

import Styles from "../../components/settings/Settings.module.scss";

import { Button, Checkbox, Col, ConfigProvider, Input, Row } from "antd";

const notificationDetails = [
  { title: "New job opening created", browser: true, email: true },
  { title: "Job opening closed", browser: true, email: true },
  { title: "Candidates uploaded", browser: true, email: false },
  { title: "Call Scheduled", browser: false, email: false },
  { title: "Reminder", browser: false, email: false },
  {
    title: "Feedback submitted on candidate in the job you have access to",
    browser: false,
    email: false,
  },
  { title: "Once call ended", browser: false, email: false },
];

function Notifications() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className={Styles.detailsContainer}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#09B48B",
          },
        }}
      >
        
        <Row className={Styles.notificationHead}>
          <Col className={Styles.headColumn}>
            <h2>Notification</h2>
          </Col>
          <Col className={Styles.selectColumn}>
            <label className={Styles.label}>Browser</label>
          </Col>
          <Col className={Styles.selectColumn}>
            <label className={Styles.label}>Email</label>
          </Col>
        </Row>
        {notificationDetails.map((item, index) => (
          <Row
            key={index}
            className={
              index < notificationDetails.length - 1
                ? Styles.notificationline
                : Styles.notificationHead
            }
          >
            <Col className={Styles.detailsColumn}>
              <p className={Styles.notificationLabel}>{item.title}</p>
            </Col>
            <Col className={Styles.selectColumn}>
              <Checkbox checked={item.browser} />
            </Col>
            <Col className={Styles.selectColumn}>
              <Checkbox checked={item.email} />
            </Col>
          </Row>
        ))}
      </ConfigProvider>
    </div>
  );
}

export default Notifications;
