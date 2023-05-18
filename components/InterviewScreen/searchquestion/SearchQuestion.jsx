import React from "react";
import { AutoComplete } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import styles from "./SearchQuestion.module.scss";

const SearchQuestion = () => {
  return (
    <AutoComplete
      className={styles.QuestionSearch}
      placeholder={
        <>
          <SearchOutlined className={styles.PlaceholderSearch} /> Search
          question
        </>
      }
    />
  );
};

export default SearchQuestion;
