import React from "react";
import { Progress } from "antd";

import styles from "./Uploadprogress.module.scss";

const UploadProgress = ({ info }) => {
  return (
    <div className={styles.progressWrapper}>
      <Progress
        percent={73}
        strokeColor={"#09B48B"}
        status="active"
        className={styles.progressBar}
      />
      <p className={styles.info}>{info}</p>
    </div>
  );
};

export default UploadProgress;
