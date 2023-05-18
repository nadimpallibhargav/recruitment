import React from "react";
import { Input, Radio } from "antd";

import AddvacancyStyles from "../../../pages/addvacancy/Addvacancy.module.scss";
import HrRoundStyles from "../../../pages/hrround/HrRound.module.scss";
import styles from "./Feedback.module.scss";

const { TextArea } = Input;

const Feedback = ({ className, ratingOne, heading }) => {
  return (
    <div className={[styles.FeedbackWrapper, className].join(" ")}>
      {heading ? <h2>{heading || "Feedback"}</h2> : ""}

      <div className={styles.InputWrapper}>
        <label> {ratingOne || "Communication"} </label>
        <Radio.Group
          onChange={() => {}}
          className={[
            AddvacancyStyles.JobRounds,
            HrRoundStyles.feedbackOptions,
            styles.feedbackOptions,
          ].join(" ")}
        >
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="one"
          >
            1
          </Radio>
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="two"
          >
            2
          </Radio>
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="three"
          >
            3
          </Radio>
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="four"
          >
            4
          </Radio>
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="five"
          >
            5
          </Radio>
        </Radio.Group>
      </div>
      <div className={styles.InputWrapper}>
        <label>Technical Communication</label>
        <Radio.Group
          onChange={() => {}}
          className={[
            AddvacancyStyles.JobRounds,
            HrRoundStyles.feedbackOptions,
            styles.feedbackOptions,
          ].join(" ")}
        >
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="one"
          >
            1
          </Radio>
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="two"
          >
            2
          </Radio>
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="three"
          >
            3
          </Radio>
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="four"
          >
            4
          </Radio>
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="five"
          >
            5
          </Radio>
        </Radio.Group>
      </div>
      <div className={styles.InputWrapper}>
        <label>Team work</label>
        <Radio.Group
          onChange={() => {}}
          className={[
            AddvacancyStyles.JobRounds,
            HrRoundStyles.feedbackOptions,
            styles.feedbackOptions,
          ].join(" ")}
        >
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="one"
          >
            1
          </Radio>
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="two"
          >
            2
          </Radio>
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="three"
          >
            3
          </Radio>
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="four"
          >
            4
          </Radio>
          <Radio
            className={[AddvacancyStyles.RadioBtn, styles.RadioBtn].join(" ")}
            value="five"
          >
            5
          </Radio>
        </Radio.Group>
      </div>
      <div className={styles.SelectedWrapper}>
        <Radio.Group onChange={() => {}}>
          <Radio className={styles.SelectedRadioBtn} value="Selected">
            Selected
          </Radio>
          <Radio className={styles.SelectedRadioBtn} value="Rejected">
            Rejected
          </Radio>
        </Radio.Group>
      </div>
      <div className={styles.TextWrapper}>
        <label>Feedback</label>
        <TextArea
          className={styles.TextAreaInput}
          style={{
            resize: "none",
          }}
          rows={4}
          placeholder="Type"
        />
      </div>
    </div>
  );
};

export default Feedback;
