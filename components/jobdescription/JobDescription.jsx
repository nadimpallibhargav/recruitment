import React from "react";
import { DeleteOutlined } from "@ant-design/icons";

import QuillComponent from "../quill/QuillComponent";

import styles from "./Jobdescription.module.scss";

const JobDescription = ({ SetFetchdescription }) => {
  return (
    <div className={styles.JobDescription}>
      <DeleteOutlined
        className={styles.DeleteIcon}
        onClick={() => SetFetchdescription()}
      />
      <QuillComponent />
    </div>
  );
};

export default JobDescription;
