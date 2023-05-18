import React from "react";
import { Tabs } from "antd";
import TableWrapper from "./TableWrapper";
import SearchComponent from "../SearchComponent/SearchComponent";

import styles from "../../pages/hrround/HrRound.module.scss";

// search btn start
const SearchElement = <SearchComponent className={styles.searchDesk} />;
// search btn end

const TableTabs = ({ title, items, style }) => {
  return (
    <div className={styles.DetailsWrapper}>
      <div className={styles.TableHeading}>
        {title ? <h2>{title}</h2> : ""}
        {/* mobile search button  */}
        <div>
          <SearchComponent className={styles.searchMobile} />
        </div>
      </div>
      <div className={styles.TabsWrapper}>
        <Tabs
          tabBarExtraContent={SearchElement}
          className={[styles.HrRoundTabs, "HrRoundAllTabs"].join(" ")}
          items={items.map((item, i) => {
            return {
              label: (
                <span className={styles.HrRoundTab}>
                  {item.tabName} <label>{item.tabLabel}</label>
                </span>
              ),
              key: i,
              children: (
                <TableWrapper
                  style={style}
                  columns={item.tableColumns}
                  data={item.tableData}
                />
              ),
            };
          })}
        />
      </div>
    </div>
  );
};

export default TableTabs;
