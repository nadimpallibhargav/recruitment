import React, { useState } from "react";
import Image from "next/image";
import {
  AudioOutlined,
  VideoCameraOutlined,
  AudioMutedOutlined,
} from "@ant-design/icons";

import Candidate from "../../../assets/images/techroundcandidate/candidate.png";

import styles from "./JoinPreview.module.scss";

const JoinPreview = ({ className }) => {
  const [audioToogle, setAudioToogle] = useState(true);
  const [videoToogle, setVideoToogle] = useState(true);
  const mediaOff = false;

  return (
    <div className={[styles.videoWrapper, className].join(" ")}>
      {mediaOff ? (
        <h2>Camera & Microphone is off</h2>
      ) : (
        <Image
          alt="candidate image"
          src={Candidate}
          className={styles.VideoImage}
        />
      )}

      <div className={styles.PlayBtnWrapper}>
        {audioToogle ? (
          <AudioOutlined
            onClick={() => {
              setAudioToogle(!audioToogle);
            }}
            className={["icon40", styles.AudioIconMute].join(" ")}
          />
        ) : (
          <AudioMutedOutlined
            onClick={() => {
              setAudioToogle(!audioToogle);
            }}
            className={[styles.AudioIcon, "icon40", "AudioIconMute"].join(" ")}
          />
        )}
        {videoToogle ? (
          <VideoCameraOutlined
            onClick={() => {
              setVideoToogle(!audioToogle);
            }}
            className={["icon40", styles.AudioIconMute].join(" ")}
          />
        ) : (
          <VideoCameraOutlined
            onClick={() => {
              setVideoToogle(!audioToogle);
            }}
            className={["icon40", styles.AudioIconMute].join(" ")}
          />
        )}
      </div>
    </div>
  );
};

export default JoinPreview;
