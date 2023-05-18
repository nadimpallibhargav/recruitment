import React from "react";
import Image from "next/image";

import Plus from "../../assets/images/plus.svg";

import styles from "./Buttons.module.scss";

const AddJobs = ({ text }) => {
  return (
    <a className={[styles.addJobsBtn, "commonBtn"].join(" ")}>
      <Image alt="plus" src={Plus} />
      {text}
    </a>
  );
};

export default AddJobs;
