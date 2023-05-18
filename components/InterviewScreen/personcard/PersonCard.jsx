import React, { useState } from "react";
import Image from "next/image";
import {
  AudioOutlined,
  MinusCircleOutlined,
  AudioMutedOutlined,
} from "@ant-design/icons";

import Candidate from "../../../assets/images/techroundcandidate/candidate.png";

import styles from "./PersonCard.module.scss";
import InterviewRemovePerson from "../../popup/InterviewRemovePerson";

const PersonCard = ({ className, video, audio, name }) => {
  const [audioToogle, setAudioToogle] = useState(true);

  return (
    <div
      className={[
        styles.PersonWrapper,
        video ? styles.PersonVideoWrapper : null,
        className,
      ].join(" ")}
    >
      {video ? (
        <div className={styles.VideoImage}>
          <Image src={Candidate} alt="candiate image" />
        </div>
      ) : null}

      <div className={styles.PersonIconWrapper}>
        <span className={styles.PersonIcon}>{Array.from(name || "A")[0]}</span>
      </div>
      <div className={styles.PersonInfoWrapper}>
        <h3 className={styles.JoinedName}>{name || "Asif"}</h3>
        {audio ? (
          <span className={styles.PersonAudioWrapper}>
            <InterviewRemovePerson>
              <MinusCircleOutlined
                className={[styles.AudioIcon, styles.MinusIcon, "icon32"].join(
                  " "
                )}
              />
            </InterviewRemovePerson>
            {audioToogle ? (
              <AudioOutlined
                onClick={() => {
                  setAudioToogle(!audioToogle);
                }}
                className={[styles.AudioIcon, "icon32"].join(" ")}
              />
            ) : (
              <AudioMutedOutlined
                onClick={() => {
                  setAudioToogle(!audioToogle);
                }}
                className={[styles.AudioIcon, "icon32"].join(" ")}
              />
            )}
          </span>
        ) : null}
      </div>
    </div>
  );
};

export default PersonCard;
