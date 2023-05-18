import React from "react";
import { Input, DatePicker } from "antd";
import dayjs from "dayjs";

import HrRoundStyles from "../../../pages/hrround/HrRound.module.scss";
import styles from "./Screeningquestions.module.scss";

const dateFormat = "DD MMM YYYY";

const ScreeningQuestions = ({ className }) => {
  return (
    <div className={[styles.QuestionsWrapper, className].join(" ")}>
      <h2>Question</h2>
      <div className={styles.InputWrapper}>
        <label>Current CTC</label>
        <Input placeholder="Type here" />
      </div>
      <div className={styles.InputWrapper}>
        <label>Expected CTC</label>
        <Input placeholder="Type here" />
      </div>
      <div className={styles.InputWrapper}>
        <label>Notice Period Duration</label>
        <Input placeholder="Type here" />
      </div>
      <div className={styles.InputWrapper}>
        <label>Expected Joining Date</label>
        <DatePicker
          onChange={() => {}}
          className={[
            HrRoundStyles.modalDatePicker,
            styles.JoiningDatePicker,
          ].join(" ")}
          showToday={false}
          // defaultValue={dayjs("23 Feb 2023", dateFormat)}
          format={dateFormat}
        />
      </div>
    </div>
  );
};

export default ScreeningQuestions;
