import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";

import Styles from "./Filters.module.scss";

const options = ["SB Solutions","Sun Infotech", "ABC Technologies","Coding mart"];

const OrganizationsFilter = () => {

  const [selectAll, setSelectAll] = useState(false);
  const [defaultCheckAll, seDefaultCheckAll]= useState([]);

  useEffect(() => {
    if (selectAll === true) {
      seDefaultCheckAll(options);
    } else {
      seDefaultCheckAll([]);
    }
  }, [selectAll]);

  const handleCheckGroup = (e) => {
    seDefaultCheckAll(e);

  }
  
  
  return (
    <>
      <h5 className={Styles.FilterHeading}>
        <span>Organizations</span>
        <label
          onClick={() => setSelectAll(!selectAll)}
          className={Styles.ViewAllLink}
        >
          <a>{selectAll ? "Clear all" : "View all"}</a>
        </label>
      </h5>

      <Checkbox.Group
        options={options}
        onChange={handleCheckGroup}
        value={defaultCheckAll}
        className={Styles.CheckboxGroup}
      />
    </>
  );
};

export default OrganizationsFilter;
