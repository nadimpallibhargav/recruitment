import { React, useState } from "react";
import { Button, Tabs, Modal, Checkbox, ConfigProvider } from "antd";

import { hrTime } from "../../data/addVacancy/addVacancy";

import HrRoundStyles from "../../pages/hrround/HrRound.module.scss";
import Styles from "./Popups.module.scss";

const ManageSlots = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [disabled, setDisabled] = useState(["09:00 am","06:00 pm"]);

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
     if(e.target.value){
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
                  <span className={Styles.TabSlots}>3 Slots</span>
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
            value={disabled}
            className={HrRoundStyles.JobSkillsCheckbox}
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
                  <span className={Styles.TabSlots}>3 Slots</span>
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
            value={disabled}
            onChange={() => {}}
            className={HrRoundStyles.JobSkillsCheckbox}
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
                  <span className={Styles.TabSlots}>3 Slots</span>
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
            value={disabled}
            onChange={() => {}}
            className={HrRoundStyles.JobSkillsCheckbox}
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
                  <span className={Styles.TabSlots}>3 Slots</span>
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
            value={disabled}
            onChange={() => {}}
            className={HrRoundStyles.JobSkillsCheckbox}
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
                  <span className={Styles.TabSlots}>3 Slots</span>
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
            value={disabled}
            onChange={() => {}}
            className={HrRoundStyles.JobSkillsCheckbox}
          />
        </div>
      ),
    },
  ];
  return (
    <div className={HrRoundStyles.testing}>
      <a onClick={showModal}>{children}</a>

      <Modal
        title="Manage Slots"
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
            Update Slots
          </Button>,
        ]}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#09B48B",
            },
          }}
        >
          <div>
            <Tabs
              className={[HrRoundStyles.Tabs, HrRoundStyles.slotSelectorWrapper].join(' ')}
              defaultActiveKey="1"
              items={items}
              onClick={handleChange}
            />
          </div>
        </ConfigProvider>
      </Modal>
    </div>
  );
};

export default ManageSlots;
