import { React, useState } from "react";
import { Button, Form, Modal } from "antd";
import InputComponent from "../input/InputComponent";

import FormStyles from "../../components/forms/Form.module.scss";
import AddvacancyStyles from "../../pages/addvacancy/Addvacancy.module.scss";
import HrRoundStyles from "../../pages/hrround/HrRound.module.scss";

const EditCandidateDetails = ({ clickText }) => {
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
      <span onClick={showModal}>{clickText}</span>
      <Modal
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className={[
          AddvacancyStyles.pocModal,
          HrRoundStyles.EditCandidateDetailsModal,
        ].join(" ")}
        footer={[
          <Button key="back" className="greenBtnOutline" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" className="greenBtn" onClick={handleOk}>
            Save
          </Button>,
        ]}
      >
        <h2>Edit Candidate Details</h2>
        <Form
          form={form}
          name="addvacancy"
          onFinish={() => {}}
          onFinishFailed={() => {}}
          scrollToFirstError
          className={[FormStyles.form, AddvacancyStyles.form].join(" ")}
        >
          <div
            className={[
              FormStyles.inputGroup,
              AddvacancyStyles.inputGroup,
            ].join(" ")}
          >
            <div className={FormStyles.inputWrapper}>
              <label>Candidate Name *</label>
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please enter candidate name" },
                ]}
              >
                <InputComponent
                  type="text"
                  placeholder="Enter candidate name"
                />
              </Form.Item>
            </div>
            <div className={FormStyles.inputWrapper}>
              <label>Experience</label>
              <Form.Item
                name="userexperince"
                rules={[
                  { required: true, message: "Please enter experience " },
                ]}
              >
                <InputComponent type="text" placeholder="Experience" />
              </Form.Item>
            </div>
            <div className={FormStyles.inputWrapper}>
              <label>Phone number *</label>
              <Form.Item
                name="usernumber"
                rules={[
                  { required: true, message: "Please enter phone number" },
                ]}
              >
                <InputComponent type="text" placeholder="Enter phone number" />
              </Form.Item>
            </div>
            <div className={FormStyles.inputWrapper}>
              <label>Email *</label>
              <Form.Item
                name="userorgdomain"
                rules={[{ required: true, message: "Please enter email" }]}
              >
                <InputComponent type="text" placeholder="Enter email id" />
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default EditCandidateDetails;
