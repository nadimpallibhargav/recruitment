import React from "react";
import { Button } from "antd";

import styles from "./Buttons.module.scss";

const SubmitButton = ({ text, btnloader, btndisable }) => {
  return (
    <Button
      htmlType="submit"
      className={[styles.formSubmit, "greenBtn"].join(" ")}
      loading={btnloader}
      disabled={btndisable}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
