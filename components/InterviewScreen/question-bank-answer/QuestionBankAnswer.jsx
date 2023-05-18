import React from "react";
import { Input } from "antd";

import FeedbackStyles from "../feedback/Feedback.module.scss";
import QuestionStyles from "../question-bank-question/QuestionBankQuestion.module.scss";

const { TextArea } = Input;

const QuestionBankAnswer = ({ title, edit }) => {
  return (
    <div className={QuestionStyles.questionWrapper}>
      <h3>{title || "Answer"}</h3>
      {edit ? (
        <TextArea
          className={FeedbackStyles.TextAreaInput}
          style={{
            resize: "none",
          }}
          rows={4}
          placeholder="Circle Push Task"
        />
      ) : (
        <div className={QuestionStyles.QuestionList}>
          <ol>
            <li>import</li>
          </ol>
        </div>
      )}
    </div>
  );
};

export default QuestionBankAnswer;
