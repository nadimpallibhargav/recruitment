import { EditOutlined } from "@ant-design/icons";

import Styles from "../../components/settings/Settings.module.scss";

import { Button, Col, Input, Row } from "antd";
import React, { useState } from "react";
import InputComponent from "../input/InputComponent";

function Password() {
  return (
    <div className={Styles.detailsContainer}>
      <Row className={Styles.cardHead}>
        <h2>Password</h2>
      </Row>

      <Row className={Styles.row}>
        <Col className={Styles.column}>
          <label className={Styles.label}>Current password</label>
          <InputComponent
            type="Password"
            placeHolder={"Enter current password"}
          />
        </Col>
      </Row>
      <Row className={Styles.row}>
        <Col className={Styles.column}>
          <label className={Styles.label}>New password</label>
          <InputComponent
            type="Password"
            placeHolder={"Enter New password"}
          />
        </Col>
        <Col className={Styles.column}>
          <label className={Styles.label}>Confirm new password</label>
          <InputComponent placeHolder={"Re-enter new password"} type="Password" />
        </Col>
      </Row>
      <Row className={Styles.row}>
        <label className={Styles.label}>
          Forgot password?<a href=""> Reset password via email</a>
        </label>
      </Row>

      <Row className={Styles.buttonRow}>
        <Button className="greenBtn">Update</Button>
      </Row>
    </div>
  );
}

export default Password;
