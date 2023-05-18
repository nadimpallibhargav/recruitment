import { React, useState } from "react";
import { Button, Form, Modal, Radio } from "antd";

import AddvacancyStyles from "../../pages/addvacancy/Addvacancy.module.scss";
import styles from "../../pages/candidatedetails/Candidatedetails.module.scss";

const MapCandidateModal = ({ children }) => {
  const [form] = Form.useForm();

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
    <>
      <a onClick={showModal}>{children}</a>
      <Modal
        width={397}
        centered
        open={isModalOpen}
        className={styles.MapCandidatePopup}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" className="greenBtnOutline" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" className="greenBtn" onClick={handleOk}>
            Map candidates
          </Button>,
        ]}
      >
        <h2>Select vacancy</h2>
        <div className={styles.SelectVacancyWrapper}>
          <Radio.Group
            onChange={() => {}}
            className={[
              AddvacancyStyles.JobRounds,
              styles.SelectVacancyGroup,
            ].join(" ")}
          >
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                styles.SelectVacancyRadioBtn,
              ].join(" ")}
              value="Front end developer"
            >
              <h3>Front end developer </h3>
              <h4>Angular JS / HTML / CSS - 3 to 4 years</h4>
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                styles.SelectVacancyRadioBtn,
              ].join(" ")}
              value="Back end developer"
            >
              <h3>Back end developer</h3>
              <h4>Node JS / HTML / CSS - 2 to 3 Years</h4>
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                styles.SelectVacancyRadioBtn,
              ].join(" ")}
              value="Backend developer"
            >
              <h3>Back end developer</h3>
              <h4>Node JS / HTML / CSS - 2 to 3 Years</h4>
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                styles.SelectVacancyRadioBtn,
              ].join(" ")}
              value="Back developer"
            >
              <h3>Back end developer</h3>
              <h4>Node JS / HTML / CSS - 2 to 3 Years</h4>
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                styles.SelectVacancyRadioBtn,
              ].join(" ")}
              value="Node developer"
            >
              <h3>Back end developer</h3>
              <h4>Node JS / HTML / CSS - 2 to 3 Years</h4>
            </Radio>
          </Radio.Group>
        </div>
      </Modal>
    </>
  );
};
export default MapCandidateModal;
