import { React, useState } from "react";
import dayjs from "dayjs";
import { Button, Form, Radio, Modal, Checkbox, Input, DatePicker } from "antd";
import InputComponent from "../input/InputComponent";

import FormStyles from "../../components/forms/Form.module.scss";
import AddvacancyStyles from "../../pages/addvacancy/Addvacancy.module.scss";
import HrRoundStyles from "../../pages/hrround/HrRound.module.scss";

const { TextArea } = Input;

const dateFormat = "DD MMM YYYY";

const GiveFeedback = ({ clickText }) => {
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
      <a
        onClick={showModal}
        className={[
          "greenBtnOutline",
          "btnSmall",
          HrRoundStyles.feedbackBtn,
        ].join(" ")}
      >
        {clickText}
      </a>
      <Modal
        centered
        open={isModalOpen}
        className={[
          AddvacancyStyles.pocModal,
          HrRoundStyles.GiveFeedbackModal,
        ].join(" ")}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="reject"
            className={[HrRoundStyles.rejectBtn, "greenBtnOutline"].join(" ")}
            onClick={handleCancel}
          >
            Reject
          </Button>,
          <Button
            key="submit"
            className={[HrRoundStyles.ModalFooterBtn, "greenBtn"].join(" ")}
            onClick={handleOk}
          >
            Select
          </Button>,
        ]}
      >
        <div className={AddvacancyStyles.AddJob}>
          <h2 className={HrRoundStyles.ModalHeading}>Feedback</h2>
          <div className={HrRoundStyles.matchCheckBox}>
            <Checkbox className={HrRoundStyles.CheckBox}>
              Resume not match with this vacancy
            </Checkbox>
          </div>
          <h3>Communication Skills *</h3>
          <Radio.Group
            onChange={() => {}}
            className={[
              AddvacancyStyles.JobRounds,
              HrRoundStyles.feedbackOptions,
            ].join(" ")}
          >
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="one"
            >
              1
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="two"
            >
              2
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="three"
            >
              3
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="four"
            >
              4
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="five"
            >
              5
            </Radio>
          </Radio.Group>
          <h3>Technical Communication *</h3>
          <Radio.Group
            onChange={() => {}}
            className={[
              AddvacancyStyles.JobRounds,
              HrRoundStyles.feedbackOptions,
            ].join(" ")}
          >
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="one"
            >
              1
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="two"
            >
              2
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="three"
            >
              3
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="four"
            >
              4
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="five"
            >
              5
            </Radio>
          </Radio.Group>
          <h3>Overall Impression and Recommendation *</h3>
          <Radio.Group
            onChange={() => {}}
            className={[
              AddvacancyStyles.JobRounds,
              HrRoundStyles.feedbackOptions,
            ].join(" ")}
          >
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="one"
            >
              1
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="two"
            >
              2
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="three"
            >
              3
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="four"
            >
              4
            </Radio>
            <Radio
              className={[
                AddvacancyStyles.RadioBtn,
                HrRoundStyles.RadioBtn,
              ].join(" ")}
              value="five"
            >
              5
            </Radio>
          </Radio.Group>
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
                HrRoundStyles.inputGroup,
              ].join(" ")}
            >
              <div
                className={[
                  FormStyles.inputWrapper,
                  HrRoundStyles.inputWrapper,
                  HrRoundStyles.FeedbackInputWrapper,
                ].join(" ")}
              >
                <label>Feedback</label>
                <TextArea
                  style={{
                    resize: "none",
                  }}
                  rows={4}
                  placeholder="Feedback"
                  maxLength={6}
                />
              </div>
              <div
                className={[
                  FormStyles.inputWrapper,
                  HrRoundStyles.inputWrapper,
                ].join(" ")}
              >
                <label>Current CTC</label>
                <InputComponent type="text" placeholder="CTC" />
              </div>
              <div
                className={[
                  FormStyles.inputWrapper,
                  HrRoundStyles.inputWrapper,
                ].join(" ")}
              >
                <label>Expected CTC</label>
                <InputComponent type="text" placeholder="CTC" />
              </div>
              <div
                className={[
                  FormStyles.inputWrapper,
                  HrRoundStyles.inputWrapper,
                ].join(" ")}
              >
                <label>Notice Period (in days)</label>
                <InputComponent type="text" placeholder="Notice period" />
              </div>
              <div
                className={[
                  FormStyles.inputWrapper,
                  HrRoundStyles.inputWrapper,
                ].join(" ")}
              >
                <label>Expected Joining Date</label>
                <DatePicker
                  onChange={() => {}}
                  className={HrRoundStyles.modalDatePicker}
                  showToday={false}
                  defaultValue={dayjs("23 Feb 2023", dateFormat)}
                  format={dateFormat}
                />
              </div>
            </div>
          </Form>
        </div>
      </Modal>
    </>
  );
};
export default GiveFeedback;
