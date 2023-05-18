import { React, useState } from "react";
import { Button, Form, Modal, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import InputComponent from "../input/InputComponent";

import FormStyles from "../../components/forms/Form.module.scss";
import AddvacancyStyles from "../../pages/addvacancy/Addvacancy.module.scss";

const ManageUserAdd = ({ btnName, phoneVisible }) => {
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
      <Button
        onClick={showModal}
        className={["greenBtn", AddvacancyStyles.AddBtnDesk].join(" ")}
      >
        <PlusOutlined /> {btnName || "Add User"}
      </Button>
      <Modal
        centered
        open={isModalOpen}
        className={AddvacancyStyles.pocModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" className="greenBtnOutline" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" className="greenBtn" onClick={handleOk}>
            Add User
          </Button>,
        ]}
      >
        <h2>Add user</h2>
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
              <label>User Name *</label>
              <Form.Item
                name="username"
                rules={[{ required: true, message: "Please enter user name " }]}
              >
                <InputComponent type="text" placeholder="Enter name" />
              </Form.Item>
            </div>
            <div className={FormStyles.inputWrapper}>
              <label>Role *</label>
              <Form.Item
                name="userrole"
                rules={[{ required: true, message: "Please select role " }]}
              >
                <Select
                  onChange={() => {}}
                  placeholder="Select role "
                  options={[
                    {
                      className: "vacancyFilterItem",
                      value: "Hr",
                      label: "Hr",
                    },
                    {
                      className: "vacancyFilterItem",
                      value: "Admin",
                      label: "Admin",
                    },
                  ]}
                />
              </Form.Item>
            </div>
            {phoneVisible === false ? (
              ""
            ) : (
              <div className={FormStyles.inputWrapper}>
                <label>Phone Number *</label>
                <Form.Item
                  name="usernumber"
                  rules={[
                    { required: true, message: "Please enter phone number" },
                  ]}
                >
                  <InputComponent
                    type="text"
                    placeholder="Enter phone number"
                  />
                </Form.Item>
              </div>
            )}

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
export default ManageUserAdd;
