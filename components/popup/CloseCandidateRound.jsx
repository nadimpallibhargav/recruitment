import { React, useState } from "react";
import { Button, Form, Modal, Select, Input } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

import FormStyles from "../../components/forms/Form.module.scss";
import HrroundStyles from "../../pages/hrround/HrRound.module.scss";
import CandidateStyles from "../../pages/candidatedetails/Candidatedetails.module.scss";
import AddvacancyStyles from "../../pages/addvacancy/Addvacancy.module.scss";

const { TextArea } = Input;

const CloseCandidateRound = ({ clickText }) => {
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
      <CloseCircleOutlined
        onClick={showModal}
        className={[
          HrroundStyles.tableCellIcon,
          CandidateStyles.EditIcons,
          "icon32",
        ].join(" ")}
      />
      <Modal
        centered
        open={isModalOpen}
        className={[
          AddvacancyStyles.pocModal,
          HrroundStyles.CloseCandidateRoundModal,
        ].join(" ")}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="submit" className="greenBtn" onClick={handleOk}>
            Cancel Interview
          </Button>,
        ]}
      >
        <h2>Interview Cancellation</h2>
        <Form
          form={form}
          name="addvacancy"
          onFinish={() => {}}
          onFinishFailed={() => {}}
          scrollToFirstError
          className={[FormStyles.form, AddvacancyStyles.form].join(" ")}
        >
          <div className={FormStyles.inputWrapper}>
            <label>Cancellation Reason</label>
            <Form.Item
              name="userrole"
              rules={[{ required: true, message: "Please Select Role" }]}
            >
              <Select
                onChange={() => {}}
                placeholder="Select reason for cancellation"
                options={[
                  {
                    className: "vacancyFilterItem",
                    value: "Candidate not available",
                    label: "Candidate not available",
                  },
                  {
                    className: "vacancyFilterItem",
                    value: "Candidate profile not matched",
                    label: "Candidate profile not matched",
                  },
                ]}
              />
            </Form.Item>
          </div>
          <div
            className={[
              FormStyles.inputWrapper,
              HrroundStyles.inputWrapper,
              HrroundStyles.FeedbackInputWrapper,
            ].join(" ")}
          >
            <label>Type Description</label>
            <TextArea
              style={{
                resize: "none",
              }}
              rows={4}
              placeholder="Candidate not well"
              maxLength={6}
            />
          </div>
        </Form>
      </Modal>
    </>
  );
};
export default CloseCandidateRound;
