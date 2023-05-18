import React from "react";
import { Select, ConfigProvider } from "antd";

import CandidatesStyles from "../../pages/candidates/Candidates.module.scss";
import ButtonStyles from "./Buttons.module.scss";

const SelectButton = ({ option, defaultValue, onChange }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#ffffff",
        },
      }}
    >
      <Select
        onChange={onChange}
        className={[
          ButtonStyles.vacancyFilter,
          CandidatesStyles.MappedFilter,
        ].join(" ")}
        labelInValue
        defaultValue={defaultValue}
        options={option}
      />
    </ConfigProvider>
  );
};

export default SelectButton;
