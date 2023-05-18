import { React, useContext } from "react";
import { ConfigProvider } from "antd";

import TechStyles from "../techround-candidate-joined/TechroundCandidateJoined.module.scss";
import QuestionBankExperince from "../../components/InterviewScreen/question-bank-experince/QuestionBankExperince";
import QuestionBankQuestion from "../../components/InterviewScreen/question-bank-question/QuestionBankQuestion";
import QuestionBankAnswer from "../../components/InterviewScreen/question-bank-answer/QuestionBankAnswer";
import styles from "./QrAdminQuestionBankAddQuestion.module.scss";
import { HeaderContext } from "../../context/Header";

const QrAdminQuestionBankAddQuestion = () => {
  const { questionBankEdit } = useContext(HeaderContext);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <section className={TechStyles.TechCandidateJoinedSection}>
        <div className="container">
          <div className={TechStyles.editorWrapper}>
            <div className={TechStyles.editorOptionsWrapper}>
              <div className={TechStyles.editorSpace}>
                <div className={TechStyles.techQuestionsWrapper}>
                  <QuestionBankExperince edit={questionBankEdit} />
                </div>
                <div className={TechStyles.techQuestionsWrapper}>
                  <QuestionBankQuestion edit={questionBankEdit} />
                </div>
                <div
                  className={[
                    TechStyles.techQuestionsWrapper,
                    styles.questionBankAnswerWrapper,
                  ].join(" ")}
                >
                  <QuestionBankAnswer edit={questionBankEdit} />
                </div>
              </div>
              <div className={TechStyles.outputSpace}>
                <div className={TechStyles.outputWrapper}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default QrAdminQuestionBankAddQuestion;
