import React, { useState } from "react";

import InputComponent from "../input/InputComponent";

import Styles from "../../components/settings/Settings.module.scss";

import { EditOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";

function CompanyDetails() {
  const [editMode, setEditMode] = useState(false);
  return (
    <div>
      <div className={Styles.detailsContainer}>
        <Row className={Styles.cardHead}>
          <h2>Company Details</h2>
          <p className={Styles.editIcon} onClick={() => setEditMode(!editMode)}>
            {<EditOutlined />}
          </p>
        </Row>

        <Row className={[Styles.row, Styles.singleLine].join(" ")}>
          <Col className={Styles.column}>
            <label className={Styles.label}>Organization name *</label>
            <InputComponent
              value={"SB solutions"}
              className={!editMode ? Styles.input : ""}
              disabled={!editMode ? true : false}
              type="text"
            />
          </Col>
          <Col className={Styles.column}>
            <label className={Styles.label}>Organization domain URL</label>
            <InputComponent
              className={!editMode ? Styles.input : ""}
              disabled={!editMode ? true : false}
              type="text"
              value={"https://www.sbsolutions.com/"}
            />
          </Col>
        </Row>
        <Row className={[Styles.row, Styles.singleLine].join(" ")}>
          <Col className={Styles.column}>
            <label className={Styles.label}>Location 1 *</label>
            <InputComponent
              className={!editMode ? Styles.input : ""}
              disabled={!editMode ? true : false}
              type="text"
              value={"Chennai"}
            />
          </Col>
          <Col className={Styles.column}>
            <label className={Styles.label}> Organization Address 1 *</label>
            <InputComponent
              className={!editMode ? Styles.input : ""}
              disabled={!editMode ? true : false}
              type="text"
              value={
                "1/609, OMR ROAD, Seevaram, Thoraipakkam, Tamil Nadu 600097"
              }
            />
          </Col>
          <Col className={Styles.column}>
            <label className={Styles.label}>GSTIN 1</label>
            <InputComponent
              className={!editMode ? Styles.input : ""}
              disabled={!editMode ? true : false}
              type="text"
              value={"12DWWPB9503H1"}
            />
          </Col>
        </Row>
        <Row className={Styles.row}>
          <Col className={Styles.column}>
            <label className={Styles.label}>Location 2</label>
            <InputComponent
              className={!editMode ? Styles.input : ""}
              disabled={!editMode ? true : false}
              type="text"
              value={"Coimbatore"}
            />
          </Col>
          <Col className={Styles.column}>
            <label className={Styles.label}> Organization Address 2</label>
            <InputComponent
              className={!editMode ? Styles.input : ""}
              disabled={!editMode ? true : false}
              type="text"
              value={
                "1/609, OMR ROAD, Seevaram, Thoraipakkam, Tamil Nadu 600097"
              }
            />
          </Col>
        </Row>
        <Row className={Styles.row}>
          <Col className={Styles.column}>
            <label className={Styles.label}>GSTIN 2</label>
            <InputComponent
              className={!editMode ? Styles.input : ""}
              disabled={!editMode ? true : false}
              type="text"
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
    </div>
  );
}

export default CompanyDetails;
