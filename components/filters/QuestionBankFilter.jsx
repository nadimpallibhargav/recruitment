import React from "react";
import RoundsFilter from "./RoundsFilter";

import AnalyticsStyles from "../../pages/analytics/Analytics.module.scss";
import HrRoundStyles from "../../pages/hrround/HrRound.module.scss";
import Styles from "./Filters.module.scss";
import { Select } from "antd";

const QuestionBankFilter = ({
  RoundsChange,
  RoundValue,
  RadiosTitle,
  children,
  RadiosOptions,
  SelectOneTitle,
  SelectOneOptions,
  SelectOnePlaceholder,
}) => {
  return (
    <div
      className={[
        AnalyticsStyles.DashboardSide,
        HrRoundStyles.RoundsWrapper,
        Styles.FilterContainer,
      ].join(" ")}
    >
      <div className={Styles.FilterWrapper}>
        <RoundsFilter
          RadiosTitle={RadiosTitle}
          RoundsChange={RoundsChange}
          RoundValue={RoundValue}
          RadiosOptions={RadiosOptions}
        />
      </div>
      <div className={Styles.FilterWrapper}>
        <h5>{SelectOneTitle}</h5>
        <Select
          className="SingleSelection"
          onChange={() => {}}
          placeholder={SelectOnePlaceholder || "Select"}
          options={SelectOneOptions}
        />
      </div>
      {children}
    </div>
  );
};

export default QuestionBankFilter;
