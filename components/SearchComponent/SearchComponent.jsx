import React from "react";
import { Input } from "antd";

import SearchStyles from "../../components/buttons/Buttons.module.scss";
import styles from "../../pages/hrround/HrRound.module.scss";

const { Search } = Input;

const SearchComponent = ({ className, placeholder }) => {
  return (
    <Search
      className={[SearchStyles.search, styles.search, className].join(" ")}
      placeholder={placeholder || "Search candidate"}
      onSearch={() => {}}
    />
  );
};

export default SearchComponent;
