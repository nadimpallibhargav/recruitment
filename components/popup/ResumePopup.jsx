import { React, useState } from "react";
import { Modal } from "antd";
import { FileTextOutlined } from "@ant-design/icons";

import AddvacancyStyles from "../../pages/addvacancy/Addvacancy.module.scss";
import styles from "../../pages/hrround/HrRound.module.scss";

const ResumePopup = () => {
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
      <a onClick={showModal}>
        <FileTextOutlined
          className={styles.tableCellIcon}
          onClick={showModal}
        />
      </a>
      <Modal
        centered
        open={isModalOpen}
        className={[AddvacancyStyles.pocModal, styles.resumeModal].join(" ")}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[""]}
      >
        <h2>Resume</h2>
        <div className={["resumePopup", styles.ResumePopup].join(" ")}>
          {/* add iframe here without width & height to fit in wrapper */}
          &nbsp;
        </div>
      </Modal>
    </>
  );
};
export default ResumePopup;
