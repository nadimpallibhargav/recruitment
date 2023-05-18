import React from "react";
import { Input } from "antd";

import FeedbackStyles from "../feedback/Feedback.module.scss";
import styles from "./QuestionBankQuestion.module.scss";

const { TextArea } = Input;

const QuestionBankQuestion = ({ title, edit }) => {
  return (
    <div className={styles.questionWrapper}>
      <h3>{title || "Question"}</h3>
      {edit ? (
        <TextArea
          className={[FeedbackStyles.TextAreaInput, styles.TextAreaInput].join(
            " "
          )}
          style={{
            resize: "none",
          }}
          rows={4}
          placeholder="Circle Push Task"
        />
      ) : (
        <>
          <h4>Circle push task</h4>
          <div className={styles.QuestionList}>
            <ol>
              <li>Create Add circle button</li>
              <li>Click on Add circle button should create a Circle </li>
              <li>By default Circle background should be white </li>
              <li>Click on Circle color should change from white to grey </li>
              <li>In label show grey coloured circle count</li>
            </ol>
          </div>
        </>
      )}
    </div>
  );
};

export default QuestionBankQuestion;
