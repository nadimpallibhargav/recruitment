import React from "react";

import { Avatar, Col, Row } from "antd";

import styles from "./Header.module.scss";

function NotificationCard({ data }) {
  return (
    <div className={styles.notifyCardContainer}>
      <Col>
        <Avatar style={{ backgroundColor: "#BDCBCA" }} size={42}>
          <b>{data?.avatar}</b>
        </Avatar>
      </Col>
      <Col>
        <Row className={styles.title}>
          <h4>{data?.title}</h4>
          <span>5 min ago</span>
        </Row>

        <p className={styles.label}>{data?.description}</p>
      </Col>
    </div>
  );
}

export default NotificationCard;
