import React from "react";
import { Tabs } from "antd";
import TableWrapper from "./TableWrapper";
import SearchComponent from "../SearchComponent/SearchComponent";

import HrRoundStyles from "../../pages/hrround/HrRound.module.scss";
import Styles from "./Tables.module.scss";

// search btn start
const SearchElement = <SearchComponent className={HrRoundStyles.searchDesk} />;
// search btn end

const FixedTableTabs = ({ title, items, style }) => {
  return (
    <div
      className={[
        HrRoundStyles.DetailsWrapper,
        Styles.FixedTableDetailsWrapper,
      ].join(" ")}
    >
      <div className={HrRoundStyles.TableHeading}>
        {title ? <h2>{title}</h2> : ""}
        {/* mobile search button  */}
        <div>
          <SearchComponent className={HrRoundStyles.searchMobile} />
        </div>
      </div>
      <div className={HrRoundStyles.TabsWrapper}>
        <Tabs
          tabBarExtraContent={SearchElement}
          className={[HrRoundStyles.HrRoundTabs, "HrRoundAllTabs"].join(" ")}
          items={items.map((item, i) => {
            return {
              label: (
                <span className={HrRoundStyles.HrRoundTab}>
                  {item.tabName} <label>{item.tabLabel}</label>
                </span>
              ),
              key: i,
              children: (
                <TableWrapper
                  className={Styles.FixedTableWrapper}
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

export default FixedTableTabs;
