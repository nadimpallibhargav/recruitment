import { React } from "react";
import { StarFilled } from "@ant-design/icons";
import { ConfigProvider, Tabs } from "antd";
import Feedback from "../../components/InterviewScreen/feedback/Feedback";

import TechroundStyles from "../techround-interviewer-joined/Techroundinterviewerjoined.module.scss";
import PushQuestionStyles from "../../components/popup/Popups.module.scss";
import Styles from "./InterviewerFeedback.module.scss";

const InterviewerFeedback = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <section className={TechroundStyles.TechInterviewerJoinedSection}>
        <div className="container">
          <div
            className={[
              TechroundStyles.editorWrapper,
              Styles.InterviewerWrapper,
            ].join(" ")}
          >
            <div className={TechroundStyles.editorOptionsWrapper}>
              <div className={TechroundStyles.questionSpace}>
                <h2>Question Bank</h2>
                <div
                  className={[
                    TechroundStyles.questionsWrapper,
                    Styles.questionsWrapper,
                  ].join(" ")}
                >
                  <div className={Styles.question}>
                    <h3
                      className={[
                        TechroundStyles.TitleRating,
                        Styles.TitleRating,
                      ].join(" ")}
                    >
                      <span>
                        Question 1
                        <StarFilled className={TechroundStyles.RateIcon} />
                        <label>3</label>
                      </span>
                    </h3>
                    <h4>How do you create an event in React ?</h4>
                  </div>
                  <div className={Styles.question}>
                    <h3
                      className={[
                        TechroundStyles.TitleRating,
                        Styles.TitleRating,
                      ].join(" ")}
                    >
                      <span>
                        Question 2
                        <StarFilled className={TechroundStyles.RateIcon} />
                        <label>4</label>
                      </span>
                    </h3>
                    <h4>How do you create an event in React ?</h4>
                  </div>
                  <div className={Styles.question}>
                    <h3
                      className={[
                        TechroundStyles.TitleRating,
                        Styles.TitleRating,
                      ].join(" ")}
                    >
                      <span>
                        Question 3
                        <StarFilled className={TechroundStyles.RateIcon} />
                        <label>2.5</label>
                      </span>
                    </h3>
                    <h4>How do you create an event in React ?</h4>
                  </div>
                </div>
              </div>
              <div className={TechroundStyles.editorSpace}>&nbsp;</div>
              <div className={TechroundStyles.outputSpace}>
                <div
                  className={[
                    TechroundStyles.outputWrapper,
                    Styles.outputWrapper,
                  ].join(" ")}
                >
                  <ConfigProvider
                    theme={{
                      token: {
                        colorPrimary: "#ffffff",
                      },
                    }}
                  >
                    <Tabs
                      className={PushQuestionStyles.questionsTab}
                      defaultActiveKey="1"
                      items={[
                        {
                          key: "1",
                          label: `Console`,
                          children: ``,
                        },
                        {
                          key: "2",
                          label: `Feedback`,
                          children: (
                            <Feedback
                              ratingOne="Problem Solving"
                              className={TechroundStyles.feedback}
                            />
                          ),
                        },
                      ]}
                      onChange={() => {}}
                    />
                  </ConfigProvider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default InterviewerFeedback;
