import { React, useState } from "react";
import { Button, Form, Modal, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import InputComponent from "../input/InputComponent";

import FormStyles from "../../components/forms/Form.module.scss";
import AddvacancyStyles from "../../pages/addvacancy/Addvacancy.module.scss";

const AddLocation = () => {
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
      <a onClick={showModal}>
        <PlusOutlined /> Add location
      </a>
      <Modal
        centered
        open={isModalOpen}
        className={[
          AddvacancyStyles.pocModal,
          AddvacancyStyles.addLocationModal,
        ].join(" ")}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" className="greenBtnOutline" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" className="greenBtn" onClick={handleOk}>
            Add Location
          </Button>,
        ]}
      >
        <h2>Add location</h2>
        <Form
          form={form}
          name="addvacancy"
          onFinish={() => {}}
          onFinishFailed={() => {}}
          scrollToFirstError
          className={[FormStyles.form, AddvacancyStyles.form].join(" ")}
        >
          <div className={FormStyles.inputWrapper}>
            <label>Enter location *</label>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please Enter City" }]}
            >
              <InputComponent type="text" placeholder="City" />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default AddLocation;
