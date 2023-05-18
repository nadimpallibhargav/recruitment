import { React, useState } from "react";
import { Button, Tabs, Modal, Checkbox, TimePicker } from "antd";
import dayjs from "dayjs";
import { EditOutlined } from "@ant-design/icons";

import { hrTime } from "../../data/addVacancy/addVacancy";
import HrRoundStyles from "../../pages/hrround/HrRound.module.scss";
import CandidateStyles from "../../pages/candidatedetails/Candidatedetails.module.scss";

const format = "HH:mm";

const Schedulepopup = ({ scheduleType }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(["09:00 am", "06:00 pm"]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

   const handleChange = (e) => {
     console.log(e.target.value);
     if (e.target.value) {
       setDisabled([...disabled, e.target.value]);
     }
   };

  const items = [
    {
      key: "1",
      label: (
        <div className={HrRoundStyles.schedule}>
          <div className="container">
            <div className={HrRoundStyles.scheduleWeeks}>
              <ul>
                <li>
                  <h3>Mon</h3>
                  <label>9</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
      children: (
        <div className={HrRoundStyles.JobSkills}>
          <Checkbox.Group
            options={hrTime}
            onChange={() => {}}
            className={HrRoundStyles.JobSkillsCheckbox}
            value={disabled}
          />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div className={HrRoundStyles.schedule}>
          <div className="container">
            <div className={HrRoundStyles.scheduleWeeks}>
              <ul>
                <li>
                  <h3>Tue</h3>
                  <label>10</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
      children: (
        <div className={HrRoundStyles.JobSkills}>
          <Checkbox.Group
            options={hrTime}
            onChange={() => {}}
            className={HrRoundStyles.JobSkillsCheckbox}
            value={disabled}
          />
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div className={HrRoundStyles.schedule}>
          <div className="container">
            <div className={HrRoundStyles.scheduleWeeks}>
              <ul>
                <li>
                  <h3>Wed</h3>
                  <label>11</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
      children: (
        <div className={HrRoundStyles.JobSkills}>
          <Checkbox.Group
            options={hrTime}
            onChange={() => {}}
            className={HrRoundStyles.JobSkillsCheckbox}
            value={disabled}
          />
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <div className={HrRoundStyles.schedule}>
          <div className="container">
            <div className={HrRoundStyles.scheduleWeeks}>
              <ul>
                <li>
                  <h3>Thu</h3>
                  <label>12</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
      children: (
        <div className={HrRoundStyles.JobSkills}>
          <Checkbox.Group
            options={hrTime}
            onChange={() => {}}
            className={HrRoundStyles.JobSkillsCheckbox}
            value={disabled}
          />
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <div className={HrRoundStyles.schedule}>
          <div className="container">
            <div className={HrRoundStyles.scheduleWeeks}>
              <ul>
                <li>
                  <h3>Fri</h3>
                  <label>13</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ),
      children: (
        <div className={HrRoundStyles.JobSkills}>
          <Checkbox.Group
            options={hrTime}
            onChange={() => {}}
            className={HrRoundStyles.JobSkillsCheckbox}
            value={disabled}
          />
        </div>
      ),
    },
  ];
  return (
    <div className={HrRoundStyles.testing}>
      {scheduleType == "reschedule" ? (
        <EditOutlined
          onClick={showModal}
          className={[
            HrRoundStyles.tableCellIcon,
            CandidateStyles.EditIcons,
            "icon32",
          ].join(" ")}
        />
      ) : (
        <a
          className={[
            "greenBtnOutline",
            "btnSmall",
            HrRoundStyles.feedbackBtn,
          ].join(" ")}
          onClick={showModal}
        >
          Schedule
        </a>
      )}

      <Modal
        title={
          scheduleType == "reschedule"
            ? "Reschedule Interview - Bessie Cooper"
            : "Schedule Interview - Bessie Cooper"
        }
        centered
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={900}
        className={[
          HrRoundStyles.ScheduleInterviewModal,
          "ScheduleInterviewModal",
        ].join(" ")}
        footer={[
          <Button key="back" className="greenBtnOutline" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" className="greenBtn" onClick={handleOk}>
            {scheduleType == "reschedule" ? "Reschedule" : "Schedule"}
          </Button>,
        ]}
      >
        <div>
          <Tabs
            className={HrRoundStyles.Tabs}
            defaultActiveKey="1"
            items={items}
            onClick={handleChange}
          />
        </div>
        <Checkbox className={HrRoundStyles.SchecduleCustomSlot}>
          Custom Slot
        </Checkbox>
        <div className={HrRoundStyles.CustomSlotWrapper}>
          <h3>Select Time</h3>
          <TimePicker
            className={HrRoundStyles.CustomSlotTimePicker}
            use12Hours
            defaultValue={dayjs("04:03", format)}
            format={format}
            showNow={false}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Schedulepopup;
