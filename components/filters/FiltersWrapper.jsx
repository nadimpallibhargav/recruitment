import React from "react";
import RoundsFilter from "./RoundsFilter";
import TechstackFilter from "./TechstackFilter";
import OrganizationsFilter from "./OrganizationsFilter";
import VacancyFilter from "./VacancyFilter";

import AnalyticsStyles from "../../pages/analytics/Analytics.module.scss";
import HrRoundStyles from "../../pages/hrround/HrRound.module.scss";
import Styles from "./Filters.module.scss";

const FiltersWrapper = ({
  RoundsChange,
  RoundValue,
  RadiosTitle,
  children,
  RadiosOptions,
  overlayClassName,
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
        <OrganizationsFilter />
      </div>
      <div className={Styles.FilterWrapper}>
        <VacancyFilter overlayClassName={overlayClassName} />
      </div>
      <div className={Styles.FilterWrapper}>
        <TechstackFilter overlayClassName={overlayClassName} />
      </div>
      {children}
    </div>
  );
};

export default FiltersWrapper;
