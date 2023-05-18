import React from "react";
import { Button } from "antd";

export const StatusSuccessButton = ({ text }) => {
  return (
    <span
      className={["greenBtnOutline", "statusBtn", "statusBtnSuccess"].join(" ")}
    >
      <span>{text}</span>
    </span>
  );
};

export const StatusPendingButton = ({ text }) => {
  return (
    <span
      className={["greenBtnOutline", "statusBtn", "statusBtnPending"].join(" ")}
    >
      <span>{text}</span>
    </span>
  );
};

export const StatusFailButton = ({ text }) => {
  return (
    <span
      className={["greenBtnOutline", "statusBtn", "statusBtnFail"].join(" ")}
    >
      <span>{text}</span>
    </span>
  );
};
