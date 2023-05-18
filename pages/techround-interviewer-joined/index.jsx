import { React, useState } from "react";
import {
  AudioOutlined,
  VideoCameraOutlined,
  MessageOutlined,
  ExpandAltOutlined,
  StarFilled,
  RightOutlined,
  AudioMutedOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Collapse, Button, Rate, Tabs } from "antd";
import PersonCard from "../../components/InterviewScreen/personcard/PersonCard";
import SearchQuestion from "../../components/InterviewScreen/searchquestion/SearchQuestion";
import PushQuestion from "../../components/popup/PushQuestion";

import TechCandidateStyles from "../techround-candidate-joined/TechroundCandidateJoined.module.scss";
import styles from "./Techroundinterviewerjoined.module.scss";
import PushQuestionStyles from "../../components/popup/Popups.module.scss";
import Feedback from "../../components/InterviewScreen/feedback/Feedback";

const { Panel } = Collapse;

const TechroundInterviewerJoined = () => {
  const [joinedAudioToogle, setJoinedAudioToogle] = useState(true);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <section className={styles.TechInterviewerJoinedSection}>
        <div className="container">
          <div className={styles.editorWrapper}>
            <div className={styles.editorOptionsWrapper}>
              <div className={styles.questionSpace}>
                <h2>Question Bank</h2>
                <SearchQuestion />
                <div className={styles.questionsWrapper}>
                  <Collapse
                    accordion
                    expandIconPosition="end"
                    ghost
                    className={[
                      styles.accordionWrapper,
                      styles.reviewedQuestionsWrapper,
                    ].join(" ")}
                  >
                    <PushQuestion>
                      <Panel
                        header={
                          <div className={styles.accordionTitle}>
                            <h3 className={styles.TitleRating}>
                              <span>
                                Question 1
                                <StarFilled className={styles.RateIcon} />3
                              </span>
                              <RightOutlined
                                className={styles.RightArrowIcon}
                              />
                            </h3>
                          </div>
                        }
                        key="1"
                        className={[
                          styles.accordionItem,
                          styles.accordionRating,
                        ].join(" ")}
                      >
                        &nbsp;
                      </Panel>
                    </PushQuestion>

                    <Panel
                      header={
                        <div className={styles.accordionTitle}>
                          <h3>Question 2</h3>
                        </div>
                      }
                      showArrow={false}
                      key="2"
                      className={styles.accordionItem}
                    >
                      <div className={styles.questionPushedTitle}>
                        <h3>How do you create an event in React ?</h3>
                        <PushQuestion>
                          <InfoCircleOutlined className={styles.InfoIcon} />
                        </PushQuestion>
                      </div>
                      <Rate className="interviewRating" allowHalf />
                    </Panel>
                  </Collapse>
                  <Collapse
                    accordion
                    expandIconPosition="end"
                    ghost
                    className={styles.accordionWrapper}
                  >
                    <Panel
                      header={
                        <div
                          className={[
                            styles.accordionTitle,
                            styles.unpushedQuestionTitle,
                          ].join(" ")}
                        >
                          <h3>Circle Push Task</h3>
                        </div>
                      }
                      showArrow={false}
                      extra={
                        <PushQuestion>
                          <InfoCircleOutlined className={styles.InfoIcon} />
                        </PushQuestion>
                      }
                      key="1"
                      className={styles.accordionItem}
                    >
                      <Button className="greenBtnOutline">
                        <span>Push Question</span>
                      </Button>
                      <Rate
                        className="interviewRating"
                        allowHalf
                        defaultValue={2.5}
                      />
                    </Panel>
                    <Panel
                      header={
                        <div
                          className={[
                            styles.accordionTitle,
                            styles.unpushedQuestionTitle,
                          ].join(" ")}
                        >
                          <h3>
                            Integrate this below movie API Integrate this below
                            movie API Integrate this below movie API
                          </h3>
                        </div>
                      }
                      showArrow={false}
                      extra={
                        <PushQuestion>
                          <InfoCircleOutlined className={styles.InfoIcon} />
                        </PushQuestion>
                      }
                      key="2"
                      className={styles.accordionItem}
                    >
                      <Button className="greenBtnOutline">
                        <span>Push Question</span>
                      </Button>
                      <Rate
                        className="interviewRating"
                        allowHalf
                        defaultValue={2.5}
                      />
                    </Panel>
                  </Collapse>
                </div>
                <Button className={["greenBtn", styles.LapBtn].join(" ")}>
                  Lap 07:32 <span className={styles.LapCount}> (1)</span>
                </Button>
              </div>
              <div className={styles.editorSpace}>&nbsp;</div>
              <div className={styles.outputSpace}>
                <div className={styles.outputWrapper}>
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
                              className={styles.feedback}
                            />
                          ),
                        },
                      ]}
                      onChange={() => {}}
                    />
                  </ConfigProvider>
                </div>
                <div className={styles.joinedWrapper}>
                  <div className={TechCandidateStyles.joinedPeoplesWrapper}>
                    <div className={TechCandidateStyles.singlePersonWrapper}>
                      <div className={TechCandidateStyles.ExpandIconWrapper}>
                        <ExpandAltOutlined
                          className={TechCandidateStyles.ExpandIcon}
                        />
                      </div>
                      <PersonCard
                        video={true}
                        name="Hr"
                        className={[
                          TechCandidateStyles.joinedPerson,
                          TechCandidateStyles.techjoinedPerson,
                          styles.joinedPerson,
                        ].join(" ")}
                      />
                    </div>
                    <div className={TechCandidateStyles.singlePersonWrapper}>
                      <div className={TechCandidateStyles.ExpandIconWrapper}>
                        <ExpandAltOutlined
                          className={TechCandidateStyles.ExpandIcon}
                        />
                      </div>
                      <PersonCard
                        audio={true}
                        className={[
                          TechCandidateStyles.joinedPerson,
                          TechCandidateStyles.techjoinedPerson,
                          styles.joinedPerson,
                        ].join(" ")}
                      />
                    </div>
                  </div>
                  <div className={TechCandidateStyles.mediaWrapper}>
                    <h4>Aashif Interview - React JS</h4>
                    <div className={TechCandidateStyles.AudioWrapper}>
                      <MessageOutlined
                        className={[
                          "icon40",
                          TechCandidateStyles.AudioIconBorder,
                        ].join(" ")}
                      />

                      {joinedAudioToogle ? (
                        <AudioOutlined
                          onClick={() => {
                            setJoinedAudioToogle(!joinedAudioToogle);
                          }}
                          className={[
                            "icon40",
                            TechCandidateStyles.AudioIconBorder,
                          ].join(" ")}
                        />
                      ) : (
                        <AudioMutedOutlined
                          onClick={() => {
                            setJoinedAudioToogle(!joinedAudioToogle);
                          }}
                          className={[
                            "icon40",
                            "AudioIconMute",
                            TechCandidateStyles.AudioIconMute,
                          ].join(" ")}
                        />
                      )}
                      <VideoCameraOutlined
                        className={[
                          "icon40",
                          TechCandidateStyles.AudioIconBorder,
                        ].join(" ")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ConfigProvider>
  );
};

export default TechroundInterviewerJoined;
