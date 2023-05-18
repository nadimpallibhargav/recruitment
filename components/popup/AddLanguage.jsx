import { React, useState } from "react";
import { Button, Form, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import InputComponent from "../input/InputComponent";

import FormStyles from "../../components/forms/Form.module.scss";
import AddvacancyStyles from "../../pages/addvacancy/Addvacancy.module.scss";

const AddLanguage = ({ children }) => {
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
            Add
          </Button>,
        ]}
      >
        <h2>Add Language</h2>
        <Form
          form={form}
          name="addvacancy"
          onFinish={() => {}}
          onFinishFailed={() => {}}
          scrollToFirstError
          className={[FormStyles.form, AddvacancyStyles.form].join(" ")}
        >
          <div className={FormStyles.inputWrapper}>
            <label>Language Name</label>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please Enter Language" }]}
            >
              <InputComponent type="text" placeholder="Type" />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default AddLanguage;
