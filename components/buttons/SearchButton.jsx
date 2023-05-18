import React from "react";
import { SearchOutlined } from "@ant-design/icons";

import styles from "./Buttons.module.scss";

const SearchButton = () => {
  return <SearchOutlined className={styles.SearchIcon} />;
};

export default SearchButton;
