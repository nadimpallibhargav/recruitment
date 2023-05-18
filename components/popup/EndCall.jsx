import { React, useState } from "react";
import { Button, Modal } from "antd";

import styles from "../../pages/interview/Interview.module.scss";

const EndCall = ({ children }) => {
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
        className={styles.endCallModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" className="greenBtnOutline" onClick={handleCancel}>
            Give feedback now
          </Button>,
          <Button key="submit" className="greenBtn" onClick={handleOk}>
            Give feedback later
          </Button>,
        ]}
      >
        <h2>
          Are you sure do you want end the interview without giving feedback
        </h2>
      </Modal>
    </>
  );
};
export default EndCall;
