import { React, useState } from "react";
import { Button, Modal, Tabs, ConfigProvider, Rate } from "antd";

import styles from "./Popups.module.scss";

const PushQuestion = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isRated = false;

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <a onClick={showModal}>{children}</a>
      <Modal
        centered
        open={isModalOpen}
        className={[styles.InterviewRemovePerson, styles.PushQuestion].join(
          " "
        )}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          isRated ? (
            <Rate
              className={styles.QuestionsRating}
              allowHalf
              defaultValue={2.5}
            />
          ) : (
            <Button
              key="back"
              className="greenBtnOutline"
              onClick={handleCancel}
            >
              Push Question
            </Button>
          ),
        ]}
      >
        <h2>Question 1</h2>
        <div className={styles.questionsTabWrapper}>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#ffffff",
              },
            }}
          >
            <Tabs
              className={styles.questionsTab}
              defaultActiveKey="1"
              items={[
                {
                  key: "1",
                  label: `Question`,
                  children: `How do you create an event in React`,
                },
                {
                  key: "2",
                  label: `Code`,
                  children: `import "./styles.css";

                export default function App() {
                return (
                <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                </div>
                );
                }`,
                },
                {
                  key: "3",
                  label: `Output`,
                  children: `Hello CodeSandbox
                Start editing to see some magic happen!`,
                },
              ]}
              onChange={() => {}}
            />
          </ConfigProvider>
        </div>
      </Modal>
    </>
  );
};
export default PushQuestion;
