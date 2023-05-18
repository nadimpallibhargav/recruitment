import { React, useState } from "react";
import { AudioOutlined, AudioMutedOutlined } from "@ant-design/icons";
import { ConfigProvider } from "antd";
import PersonCard from "../../components/InterviewScreen/personcard/PersonCard";
import ScreeningQuestions from "../../components/InterviewScreen/screeningquestions/ScreeningQuestions";
import Feedback from "../../components/InterviewScreen/feedback/Feedback";

import styles from "./Interview.module.scss";

const pageError = false;

const Interview = () => {
  const [startScreening, setStartScreening] = useState(false);
  const [audioToogle, setAudioToogle] = useState(true);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <section className={styles.InterviewSection}>
        <div className="container">
          {pageError ? (
            <div className={styles.loadingErrorWrapper}>
              <div className={styles.loadingIconWrapper}>
                <ul>
                  <li className={styles.loadingIconActive}>&nbsp;</li>
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
                </ul>
              </div>
              <h1>You lost your network connection. Trying to reconnect</h1>
            </div>
          ) : (
            <div className={styles.InterviewScreeningWrapper}>
              {startScreening ? (
                <ScreeningQuestions className={styles.questions} />
              ) : (
                ""
              )}

              <div className={styles.screeningWrapper}>
                <h1 className={styles.CandidateName}>
                  Aashif Interview - React JS
                </h1>
                <div className={styles.joinedPeoplesWrapper}>
                  <PersonCard name="HR" className={styles.joinedPerson} />
                  <PersonCard
                    name="Aashif"
                    audio={true}
                    className={styles.joinedPerson}
                  />
                </div>
                <div className={styles.startScreeningWrapper}>
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
                      className={["icon40", styles.AudioIconMute].join(" ")}
                    />
                  )}

                  <button
                    className="greenBtn"
                    onClick={() => {
                      setStartScreening(!startScreening);
                    }}
                  >
                    <span>Start screening</span>
                  </button>
                </div>
              </div>
              {startScreening ? (
                <Feedback heading="Feedback" className={styles.feedback} />
              ) : (
                ""
              )}
            </div>
          )}
        </div>
      </section>
    </ConfigProvider>
  );
};

export default Interview;
