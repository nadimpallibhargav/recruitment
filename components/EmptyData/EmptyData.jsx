import React from "react";
import { FileExclamationOutlined } from "@ant-design/icons";

import styles from "./EmptyData.module.scss";

const EmptyData = ({ heading, className, children }) => {
  return (
    <div
      className={
        className
          ? [styles.EmptyTextWrapper, className].join(" ")
          : styles.EmptyTextWrapper
      }
    >
      <FileExclamationOutlined className={styles.fileIcon} />

      <h2>{heading || "No Data Found"}</h2>
      {children}
    </div>
  );
};

export default EmptyData;
