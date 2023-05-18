import React, { useState, useEffect, useRef } from "react";
import Backdrop from "./Backdrop";
import { ConfigProvider } from "antd";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";

import song from "../../assets/audio/Brahmastra.mp3";

import styles from "./AudioPlayer.module.scss";

const tracks = {
  title: "Cali",
  artist: "Wataboi",
  audioSrc: song,
  color: "red",
};

const AudioPlayer = () => {
  // State
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Destructure for conciseness

  // Refs
  const audioRef = useRef(new Audio(tracks?.audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #09B48B), color-stop(${currentPercentage}, #09B48B))
  `;

  function startTimer() {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  }

  const onScrub = (value) => {
    // Clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(tracks?.audioSrc);
    setTrackProgress(audioRef?.current?.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, []);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#09B48B",
        },
      }}
    >
      <div className="audio-player">
        <div className="track-info">
          <div className={styles.audioWrapper}>
            <div className={styles.PlayIcon}>
              {isPlaying ? (
                <PauseCircleOutlined onClick={() => setIsPlaying(false)} />
              ) : (
                <PlayCircleOutlined onClick={() => setIsPlaying(true)} />
              )}
            </div>
            <div className={styles.ProgressWrapper}>
              <input
                type="range"
                value={trackProgress}
                step="1"
                min="0"
                max={duration ? duration : `${duration}`}
                onChange={(e) => onScrub(e.target.value)}
                onMouseUp={onScrubEnd}
                onKeyUp={onScrubEnd}
                className={styles.progressBar}
              />
            </div>
          </div>
        </div>
        <Backdrop className={styles.BackDrop} isPlaying={isPlaying} />
      </div>
    </ConfigProvider>
  );
};

export default AudioPlayer;
