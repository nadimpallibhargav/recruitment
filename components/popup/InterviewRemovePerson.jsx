import { React, useState } from "react";
import { Button, Modal } from "antd";

import styles from "./Popups.module.scss";

const InterviewRemovePerson = ({ children }) => {
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
        centered
        closable={false}
        open={isModalOpen}
        className={styles.InterviewRemovePerson}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" className="greenBtnOutline" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" className="greenBtn" onClick={handleOk}>
            Remove
          </Button>,
        ]}
      >
        <h2>Do you want to remove Aashif?</h2>
      </Modal>
    </>
  );
};
export default InterviewRemovePerson;
