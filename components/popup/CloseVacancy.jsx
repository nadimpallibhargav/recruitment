import { Button, Checkbox, Col, ConfigProvider, Modal, Row } from 'antd';
import React, { useState } from 'react';

import styles from "../../pages/mapcandidates/Mapcandidates.module.scss";
import pagestyles from "../settings/Settings.module.scss"

const options = [
  "BessieCooper",
  "JacobJones",
  "RonaldRichards",
  "CodyFisher",
  "JeromeBell",
  "BrooklynSimmons",
  "TheresaWebb",
  "DarrellSteward",
  "FloydMiles",
  "BrooklynSimmons",
];

function CloseVacancy({children}) {
     const [isModalOpen, setIsModalOpen] = useState(false);

     const showModal = () => {
       setIsModalOpen(true);
     };
     const handleOk = () => {
       setIsModalOpen(false);
     };
     const handleCancel = () => {
       setIsModalOpen(false);
     };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <a onClick={showModal}>{children}</a>
      <Modal
        centered
        open={isModalOpen}
        className={[styles.SelectedModal, pagestyles.CloseVacancyModal].join(
          " "
        )}
        onOk={handleOk}
        onCancel={handleCancel}
        width={"450px"}
        footer={[
          <Button key="back" className="greenBtnOutline" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" className="greenBtn" onClick={handleOk}>
            Move to Unmapped
          </Button>,
        ]}
      >
        <h2>Close vacancy</h2>
        <p className={pagestyles.CloseVacancyDetailssubTitle}>
          Select and move the not interviewing candidates to unmapped
        </p>
        <div
          className={[
            styles.CandidatesList,
            styles.SelectedCandidatesList,
          ].join(" ")}
        >
          <Row className={pagestyles.tableHeadBackground}>
            <Col className={pagestyles.CloseVacancySelectColumn}>
              <Checkbox />
            </Col>
            <Col className={pagestyles.CloseVacancyDetailsColumn}>
              <h4 className={pagestyles.CloseVacancyDetailsTableHead}>
                Candidate Details
              </h4>
            </Col>
          </Row>
          {options.map((item, index) => (
            <div key={index}>
              <Row
                className={
                  index < options.length - 1
                    ? pagestyles.CloseVacancyline
                    : pagestyles.CloseVacancyDetails
                }
              >
                <Col className={pagestyles.CloseVacancySelectColumn}>
                  <Checkbox />
                </Col>
                <Col className={pagestyles.CloseVacancyDetailsColumn}>
                  <p className={pagestyles.CloseVacancyDetailsLabel}>
                    {item} &nbsp; - &nbsp;
                    <span>3 years</span>{" "}
                  </p>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Modal>
    </ConfigProvider>
  );
}

export default CloseVacancy