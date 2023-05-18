import { Input, Select } from "antd";
import React from "react";

import QuestionsStyles from "../screeningquestions/Screeningquestions.module.scss";
import styles from "./QuestionBankExperince.module.scss";

const QuestionBankExperince = ({ edit }) => {
  return (
    <>
      {edit ? (
        <div
          className={[
            styles.ExperinceWrapper,
            styles.ExperinceEditWrapper,
          ].join(" ")}
        >
          <div
            className={[
              styles.ExperinceContent,
              styles.ExperinceEditContent,
            ].join(" ")}
          >
            <h3>Relevant Experience</h3>
            <div
              className={[
                QuestionsStyles.InputWrapper,
                styles.InputWrapper,
              ].join(" ")}
            >
              <Input placeholder="From" />
              <Input placeholder="To" />
            </div>
          </div>
          <div
            className={[
              styles.ExperinceContent,
              styles.ExperinceEditContent,
            ].join(" ")}
          >
            <h3>Question Type</h3>
            <div
              className={[
                QuestionsStyles.InputWrapper,
                styles.InputWrapper,
              ].join(" ")}
            >
              <Select
                className="SingleSelection"
                popupClassName="darkDropdownPopup"
                onChange={() => {}}
                placeholder="Select"
                options={[
                  {
                    className: ["languageOption", styles.languageOption].join(
                      " "
                    ),
                    value: "Source",
                    label: "Source",
                  },
                  {
                    className: ["languageOption", styles.languageOption].join(
                      " "
                    ),
                    value: "Own",
                    label: "Own",
                  },
                ]}
              />
            </div>
          </div>
          <div
            className={[
              styles.ExperinceContent,
              styles.ExperinceEditContent,
            ].join(" ")}
          >
            <h3>Difficulty Level</h3>
            <div
              className={[
                QuestionsStyles.InputWrapper,
                styles.InputWrapper,
              ].join(" ")}
            >
              <Select
                className="SingleSelection"
                onChange={() => {}}
                placeholder="Select"
                popupClassName="darkDropdownPopup"
                options={[
                  {
                    className: ["languageOption", styles.languageOption].join(
                      " "
                    ),
                    value: "Easy",
                    label: "Easy",
                  },
                  {
                    className: ["languageOption", styles.languageOption].join(
                      " "
                    ),
                    value: "Medium",
                    label: "Medium",
                  },
                  {
                    className: ["languageOption", styles.languageOption].join(
                      " "
                    ),
                    value: "Hard",
                    label: "Hard",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.ExperinceWrapper}>
          <div className={styles.ExperinceContent}>
            <h3>Relevant Experience</h3>
            <h4>1 to 2 years</h4>
          </div>
          <div className={styles.ExperinceContent}>
            <h3>Question Type</h3>
            <h4>Source</h4>
          </div>
          <div className={styles.ExperinceContent}>
            <h3>Difficulty Level</h3>
            <h4>Hard</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionBankExperince;
