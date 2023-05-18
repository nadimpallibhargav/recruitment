import { React, useState } from "react";
import {
  AudioOutlined,
  VideoCameraOutlined,
  MessageOutlined,
  ExpandAltOutlined,
  AudioMutedOutlined,
} from "@ant-design/icons";
import { ConfigProvider } from "antd";
import PersonCard from "../../components/InterviewScreen/personcard/PersonCard";
import Accordion from "../../components/InterviewScreen/accordion/Accordion";

import styles from "./TechroundCandidateJoined.module.scss";

const pageError = false;

const testStarted = true;

const TechroundCandidateJoined = () => {
  const [audioToogle, setAudioToogle] = useState(true);
  const [joinedAudioToogle, setJoinedAudioToogle] = useState(true);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <section className={styles.TechCandidateJoinedSection}>
        <div className="container">
          {testStarted ? (
            <div className={styles.editorWrapper}>
              <div className={styles.editorOptionsWrapper}>
                <div className={styles.editorSpace}>
                  <div className={styles.techQuestionsWrapper}>
                    <div className={styles.AccordionWrapper}>
                      <Accordion className={styles.QuestionAccordion} />
                    </div>
                  </div>
                  <div className={styles.techEditorWrapper}></div>
                </div>
                <div className={styles.outputSpace}>
                  <div className={styles.outputWrapper}></div>
                  <div className={styles.joinedWrapper}>
                    <div className={styles.joinedPeoplesWrapper}>
                      <div className={styles.singlePersonWrapper}>
                        <div className={styles.ExpandIconWrapper}>
                          <ExpandAltOutlined className={styles.ExpandIcon} />
                        </div>
                        <PersonCard
                          name="Aashif"
                          className={[
                            styles.joinedPerson,
                            styles.techjoinedPerson,
                          ].join(" ")}
                        />
                      </div>
                      <div className={styles.singlePersonWrapper}>
                        <div className={styles.ExpandIconWrapper}>
                          <ExpandAltOutlined className={styles.ExpandIcon} />
                        </div>
                        <PersonCard
                          name="Vignesh"
                          className={[
                            styles.joinedPerson,
                            styles.techjoinedPerson,
                          ].join(" ")}
                        />
                      </div>
                    </div>
                    <div className={styles.mediaWrapper}>
                      <h4>Aashif Interview - React Js</h4>
                      <div className={styles.AudioWrapper}>
                        <MessageOutlined
                          className={["icon40", styles.AudioIconBorder].join(
                            " "
                          )}
                        />

                        {joinedAudioToogle ? (
                          <AudioOutlined
                            onClick={() => {
                              setJoinedAudioToogle(!joinedAudioToogle);
                            }}
                            className={["icon40", styles.AudioIconBorder].join(
                              " "
                            )}
                          />
                        ) : (
                          <AudioMutedOutlined
                            onClick={() => {
                              setJoinedAudioToogle(!joinedAudioToogle);
                            }}
                            className={[
                              "icon40",
                              "AudioIconMute",
                              styles.AudioIconMute,
                            ].join(" ")}
                          />
                        )}
                        <VideoCameraOutlined
                          className={["icon40", styles.AudioIconBorder].join(
                            " "
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.InterviewScreeningWrapper}>
              <div>
                {pageError ? (
                  <div className={styles.loadingErrorWrapper}>
                    <div className={styles.loadingIconWrapper}>
                      <ul>
                        <li className={styles.loadingIconActive}>&nbsp;</li>
                        <li>&nbsp;</li>
                        <li>&nbsp;</li>
                      </ul>
                    </div>
                    <h1>Please wait</h1>
                    <h2>Your interviewer will join shortly</h2>
                  </div>
                ) : (
                  ""
                )}

                <div className={styles.screeningWrapper}>
                  <h2 className={styles.CandidateName}>
                    Aashif Interview - React JS
                  </h2>
                  <div className={styles.joinedPeoplesWrapper}>
                    <PersonCard name="Aashif" className={styles.joinedPerson} />
                    <PersonCard
                      name="Vignesh"
                      className={styles.joinedPerson}
                    />
                  </div>
                  <div className={styles.AudioWrapper}>
                    {audioToogle ? (
                      <AudioOutlined
                        onClick={() => {
                          setAudioToogle(!audioToogle);
                        }}
                        className={["icon40", styles.AudioIconBorder].join(" ")}
                      />
                    ) : (
                      <AudioMutedOutlined
                        onClick={() => {
                          setAudioToogle(!audioToogle);
                        }}
                        className={[
                          "icon40",
                          "AudioIconMute",
                          styles.AudioIconMute,
                        ].join(" ")}
                      />
                    )}
                    <VideoCameraOutlined
                      className={["icon40", styles.AudioIconBorder].join(" ")}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </ConfigProvider>
  );
};

export default TechroundCandidateJoined;
