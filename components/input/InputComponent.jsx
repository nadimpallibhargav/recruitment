import React from "react";
import { Input } from "antd";
import PropTypes from "prop-types";

import styles from "./Input.module.scss";

const InputComponent = ({
  status,
  size,
  value,
  defaultValue,
  onPressEnter,
  onChange,

  ...props
}) => {
  return (
    <div className={styles.input_wrapper}>
      {props.type === "Password" ? (
        <Input.Password
          {...props}
          status={status}
          size={size}
          value={value}
          defaultValue={defaultValue}
          onPressEnter={onPressEnter}
          onChange={onChange}
          disabled={props.disabled}
          className={[styles.input_component, styles.input_password]}
        />
      ) : (
        <Input
          {...props}
          status={status}
          size={size}
          value={value}
          defaultValue={defaultValue}
          onPressEnter={onPressEnter}
          onChange={onChange}
          disabled={props.disabled}
          className={[styles.input_component, props.className].join(" ")}
        />
      )}
    </div>
  );
};

InputComponent.propTypes = {
  status: PropTypes.string,
  size: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  defaultValue: PropTypes.string,
};

export default InputComponent;
