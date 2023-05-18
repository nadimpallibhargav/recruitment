import React, { useState } from "react";
import Styles from "../../components/settings/Settings.module.scss";
import { Button, Col, Row } from "antd";
import { EditOutlined } from "@ant-design/icons";
import InputComponent from "../input/InputComponent";

function Profile() {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={Styles.detailsContainer}>
      <Row className={Styles.cardHead}>
        <h2>Personal Info</h2>
        <p className={Styles.editIcon} onClick={() => setEditMode(!editMode)}>
          {<EditOutlined />}
        </p>
      </Row>

      <Row className={Styles.row}>
        <Col className={Styles.column}>
          <label className={Styles.label}>First Name</label>
          <InputComponent
            value={"Vignesh"}
            className={!editMode ? Styles.input : ""}
            disabled={!editMode ? true : false}
            type="text"
          />
        </Col>
        <Col className={Styles.column}>
          <label className={Styles.label}>Last Name</label>
          <InputComponent
            className={!editMode ? Styles.input : ""}
            disabled={!editMode ? true : false}
            type="text"
            value={"Kumar"}
          />
        </Col>
      </Row>
      <Row className={Styles.row}>
        <Col className={Styles.column}>
          <label className={Styles.label}>Email</label>
          <InputComponent
            className={!editMode ? Styles.input : ""}
            disabled={!editMode ? true : false}
            type="text"
            value={"vigneshk@sbsolutions.com"}
          />
        </Col>
        <Col className={Styles.column}>
          <label className={Styles.label}>Phone Number</label>
          <InputComponent
            className={!editMode ? Styles.input : ""}
            disabled={!editMode ? true : false}
            type="text"
            value={"9876543219"}
          />
        </Col>
      </Row>
      <Row className={Styles.buttonRow}>
        {editMode && (
          <Button
            onClick={() => setEditMode(false)}
            className="greenBtnOutline"
          >
            Cancel
          </Button>
        )}
        {editMode && <Button className="greenBtn">Save</Button>}
      </Row>
    </div>
  );
}

export default Profile;
