import React from "react";
import TableWrapper from "./TableWrapper";

import styles from "../../pages/hrround/HrRound.module.scss";
import TableStyles from "./Tables.module.scss";
import DateSelect from "../dateselect/DateSelect";

const TableDateFilter = ({ columns, data, className, style }) => {
  return (
    <div className={styles.DetailsWrapper}>
      <div
        className={[
          styles.TableHeading,
          styles.SelectedHeading,
          TableStyles.TableHeading,
        ].join(" ")}
      >
        <div className={[styles.SelectedSearchWrapper].join(" ")}>
          <DateSelect />
        </div>
      </div>
      <div className={styles.TabsWrapper}>
        <TableWrapper
          style={style}
          className={className}
          columns={columns}
          data={data}
        />
      </div>
    </div>
  );
};

export default TableDateFilter;
