import React from "react";
import Tables from "./Tables";

import styles from "../../pages/hrround/HrRound.module.scss";
import TableStyles from "./Tables.module.scss";

const TableWrapper = ({ columns, data, style, className }) => {
  return (
    <div
      className={[
        styles.tableWrapper,
        TableStyles.tableWrapper,
        className,
      ].join(" ")}
    >
      <Tables
        style={style}
        columns={columns}
        data={data}
        className={styles.HrRoundTable}
      />
    </div>
  );
};

export default TableWrapper;
