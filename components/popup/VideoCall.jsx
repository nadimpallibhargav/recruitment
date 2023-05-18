import { React, useState } from "react";
import { Modal } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

import AudioPlayerStyles from "../audioPlayer/AudioPlayer.module.scss";
import VacancyStyles from "../../pages/vacancy/Vacancy.module.scss";
import AddvacancyStyles from "../../pages/addvacancy/Addvacancy.module.scss";
import HrroundStyles from "../../pages/hrround/HrRound.module.scss";
import CandidatedetailsStyles from "../../pages/candidatedetails/Candidatedetails.module.scss";
import styles from "./Popups.module.scss";

const VideoCall = ({ play }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {play === "dark" ? (
        <PlayCircleOutlined
          className={[
            HrroundStyles.tableCellIcon,
            CandidatedetailsStyles.AudioPlayIcon,
          ].join(" ")}
          onClick={showModal}
        />
      ) : (
        <PlayCircleOutlined
          className={AudioPlayerStyles.PlayIcon}
          onClick={showModal}
        />
      )}
      <Modal
        centered
        open={isModalOpen}
        className={[AddvacancyStyles.pocModal, styles.VideoModal].join(" ")}
        onCancel={handleCancel}
        footer={[]}
      >
        <div
          className={[VacancyStyles.videoWrapper, styles.videoWrapper].join(
            " "
          )}
        >
          {/* add iframe here without width & height to fit in wrapper */}
          <iframe
            className={VacancyStyles.iframe}
            src="https://drive.google.com/file/d/1d1UnRaEGneu5tfigscnrxEV-8CxPnc-t/preview"
            allow="autoplay"
          ></iframe>
        </div>
      </Modal>
    </>
  );
};
export default VideoCall;
