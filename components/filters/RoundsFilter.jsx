import React from "react";
import { Radio } from "antd";

import styles from "../../pages/hrround/HrRound.module.scss";

const RoundsFilter = ({
  RoundsChange,
  RoundValue,
  RadiosTitle,
  RadiosOptions,
}) => {
  return (
    <>
      <h5> {RadiosTitle || "Rounds"} </h5>
      <Radio.Group
        onChange={RoundsChange}
        value={RoundValue}
        className={styles.HrRoundRadioGroup}
      >
        {RadiosOptions.map((option, i) => {
          return (
            <Radio className={styles.HrRoundRadio} value={i} key={i}>
              {option.label}
            </Radio>
          );
        })}
      </Radio.Group>
    </>
  );
};

export default RoundsFilter;
