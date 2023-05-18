import React from "react";

import styles from "./Analytics.module.scss";

const AnalyticsOverview = ({ overviewData }) => {
  return (
    <div className={styles.DashboardSide}>
      {overviewData?.map((list, i) => {
        return (
          <div className={styles.SideText} key={i}>
            <h5>{list.heading}</h5>
            <h4>{list.subHeading}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsOverview;
