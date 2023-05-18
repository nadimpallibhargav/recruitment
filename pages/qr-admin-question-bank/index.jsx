import { React, useState } from "react";
import Link from "next/link";
import { RightOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, ConfigProvider } from "antd";
import TableSearch from "../../components/tables/TablesSearch";

import ManageUserStyles from "../manageuser/Manageuser.module.scss";
import InterviewerStyles from "../interviewer/Interviewer.module.scss";
import AnalyticsStyles from "../../pages/analytics/Analytics.module.scss";
import HrRoundStyles from "../hrround/HrRound.module.scss";
import EmptyData from "../../components/EmptyData/EmptyData";
import QuestionBankFilter from "../../components/filters/QuestionBankFilter";
import TableStyles from "../../components/tables/Tables.module.scss";
import {
  StatusFailButton,
  StatusPendingButton,
  StatusSuccessButton,
} from "../../components/buttons/StatusButton";

const QrAdminInterview = () => {
  const UpcomingInterviews = 1;

  // rounds radio start
  const [roundValue, setRoundValue] = useState(1);

  const RoundsChange = (e) => {
    setRoundValue(e.target.value);
  };
  // rounds radio end

  // Questions table start
  const QuestionsColumns = [
    {
      title: "Questions",
      dataIndex: "questions",
      key: "questions",
      className: TableStyles.questionsColumn,
      render: (text) => (text.length >= 47 ? `${text.slice(0, 47)}...` : text),
    },
    {
      title: "Experience",
      dataIndex: "experience",
      key: "experience",
      className: TableStyles.questionsCommonColumn,
    },
    {
      title: "Difficulty level",
      dataIndex: "difficultyLevel",
      key: "difficultyLevel",
      className: TableStyles.questionsCommonColumn,
      sorter: (a, b) => a.difficultyLevel - b.difficultyLevel,
      align: "center",
    },
    {
      title: "Question Type",
      dataIndex: "questionType",
      key: "questionType",
      className: TableStyles.questionsCommonColumn,
    },
    {
      title: "Added by",
      dataIndex: "addedBy",
      key: "addedBy",
      className: TableStyles.questionsCommonColumn,
    },
    {
      title: "Added on",
      dataIndex: "addedOn",
      key: "addedOn",
      className: TableStyles.questionsCommonColumn,
      sorter: (a, b) => a.addedOn - b.addedOn,
    },
    {
      title: "",
      dataIndex: "view",
      key: "view",
      render: () => (
        <Link href="/candidatedetails">
          <a>
            <span className={HrRoundStyles.viewDetailsLink}>
              View Details{" "}
              <RightOutlined className={HrRoundStyles.viewDetailsArrow} />
            </span>
          </a>
        </Link>
      ),
    },
  ];

  const QuestionsData = [
    {
      key: "1",
      questions: "Circle push task",
      experience: "1 to 2 years",
      difficultyLevel: <StatusFailButton text="Hard" />,
      questionType: "Source",
      addedBy: "Vignesh Sundar",
      addedOn: "12 Dec 2022",
    },
    {
      key: "2",
      questions: "What are the differences between class and function",
      experience: "1 to 2 years",
      difficultyLevel: <StatusSuccessButton text="Easy" />,
      questionType: "Own",
      addedBy: "Vignesh Sundar",
      addedOn: "10 Dec 2022",
    },
    {
      key: "3",
      questions: "Circle push task",
      experience: "1 to 2 years",
      difficultyLevel: <StatusPendingButton text="Medium" />,
      questionType: "Source",
      addedBy: "Vignesh Sundar",
      addedOn: "12 Dec 2022",
    },
    {
      key: "4",
      questions: "What are the differences between class and function",
      experience: "1 to 2 years",
      difficultyLevel: <StatusSuccessButton text="Easy" />,
      questionType: "Own",
      addedBy: "Vignesh Sundar",
      addedOn: "10 Dec 2022",
    },
    {
      key: "5",
      questions: "Circle push task",
      experience: "1 to 2 years",
      difficultyLevel: <StatusFailButton text="Hard" />,
      questionType: "Source",
      addedBy: "Vignesh Sundar",
      addedOn: "12 Dec 2022",
    },
    {
      key: "6",
      questions: `${"What are the differences between class and function".slice(
        0,
        47
      )}...`,
      experience: "1 to 2 years",
      difficultyLevel: <StatusSuccessButton text="Easy" />,
      questionType: "Own",
      addedBy: "Vignesh Sundar",
      addedOn: "10 Dec 2022",
    },
    {
      key: "7",
      questions: "Circle push task",
      experience: "1 to 2 years",
      difficultyLevel: <StatusPendingButton text="Medium" />,
      questionType: "Source",
      addedBy: "Vignesh Sundar",
      addedOn: "12 Dec 2022",
    },
    {
      key: "8",
      questions: "What are the differences between class and function",
      experience: "1 to 2 years",
      difficultyLevel: <StatusSuccessButton text="Easy" />,
      questionType: "Own",
      addedBy: "Vignesh Sundar",
      addedOn: "10 Dec 2022",
    },
  ];
  // Questions table end

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <section
        className={[
          AnalyticsStyles.AnalyticsSection,
          HrRoundStyles.HrRoundSection,
          InterviewerStyles.InterviewerSection,
        ].join(" ")}
      >
        <div className="wideContainer">
          <div className={ManageUserStyles.TableHeading}>
            <h2>Question Bank</h2>
          </div>
          {UpcomingInterviews >= 1 ? (
            <div
              className={[
                AnalyticsStyles.DashboardWrapper,
                HrRoundStyles.HrRoundsWrapper,
              ].join(" ")}
            >
              <QuestionBankFilter
                RoundsChange={RoundsChange}
                RoundValue={roundValue}
                RadiosTitle="Language"
                RadiosOptions={[
                  { label: "React JS" },
                  { label: "Angular" },
                  { label: "Node JS" },
                  { label: "Python" },
                  { label: "Next JS" },
                ]}
                SelectOneTitle="Added by"
                SelectOneOptions={[
                  {
                    className: "vacancyFilterItem",
                    value: "Vignesh Sundar",
                    label: "Vignesh Sundar",
                  },
                  {
                    className: "vacancyFilterItem",
                    value: "hr",
                    label: "hr",
                  },
                ]}
              />
              <div
                className={[
                  AnalyticsStyles.DashboardContent,
                  HrRoundStyles.HrRoundsContent,
                ].join(" ")}
              >
                <TableSearch
                  ButtonLink="/qr-admin-question-bank-add-question"
                  style={{ maxWidth: 1200 }}
                  title="Questions List"
                  columns={QuestionsColumns}
                  data={QuestionsData}
                  AddButtonTitle="Add Question"
                  placeholder="Search"
                />
              </div>
            </div>
          ) : (
            <div className={InterviewerStyles.EmptyInterviewsWrapper}>
              <EmptyData heading="No  Questions Found">
                <Link href="/qr-admin-question-bank-add-question">
                  <Button
                    className={["greenBtn", InterviewerStyles.AddDataBtn].join(
                      " "
                    )}
                  >
                    <PlusOutlined /> Add Questions
                  </Button>
                </Link>
              </EmptyData>
            </div>
          )}
        </div>
      </section>
    </ConfigProvider>
  );
};

export default QrAdminInterview;
