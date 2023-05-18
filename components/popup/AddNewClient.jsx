import { React, useState } from "react";
import { Button, Form, Modal, Select } from "antd";
import InputComponent from "../input/InputComponent";

import FormStyles from "../../components/forms/Form.module.scss";
import AddvacancyStyles from "../../pages/addvacancy/Addvacancy.module.scss";
import Styles from "./Popups.module.scss";

const AddNewClient = ({ children, heading, subHeading }) => {
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
        className={[AddvacancyStyles.pocModal, Styles.AddClientsModal].join(
          " "
        )}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" className="greenBtnOutline" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" className="greenBtn" onClick={handleOk}>
            Save
          </Button>,
        ]}
      >
        <h2 className={Styles.ModalHeading}>{heading || "Add user"}</h2>
        {subHeading ? (
          <h3 className={Styles.ModalSubHeading}>{subHeading}</h3>
        ) : (
          ""
        )}

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
              <label>Enter organization name *</label>
              <Form.Item
                name="orgname"
                rules={[
                  {
                    required: true,
                    message: "Please enter organization name ",
                  },
                ]}
              >
                <InputComponent type="text" placeholder="Organization name" />
              </Form.Item>
            </div>
            <div className={FormStyles.inputWrapper}>
              <label>Enter organization mail *</label>
              <Form.Item
                name="orgmail"
                rules={[
                  {
                    required: true,
                    message: "Please enter organization mail  ",
                  },
                ]}
              >
                <InputComponent type="text" placeholder="Organization mail" />
              </Form.Item>
            </div>
            <div className={FormStyles.inputWrapper}>
              <label>Enter phone number</label>
              <Form.Item
                name="number"
                rules={[
                  {
                    required: true,
                    message: "Please enter  phone number  ",
                  },
                ]}
              >
                <InputComponent type="text" placeholder="Phone number" />
              </Form.Item>
            </div>
            <div className={FormStyles.inputWrapper}>
              <label>Enter location</label>
              <Form.Item
                name="location"
                rules={[{ required: true, message: "Please enter location " }]}
              >
                <InputComponent type="text" placeholder="Enter location" />
              </Form.Item>
            </div>
            <div className={FormStyles.inputWrapper}>
              <label>Enter GSTIN</label>
              <Form.Item
                name="gstin"
                rules={[{ required: true, message: "Please enter GSTIN " }]}
              >
                <InputComponent type="text" placeholder="GSTIN" />
              </Form.Item>
            </div>
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default AddNewClient;
