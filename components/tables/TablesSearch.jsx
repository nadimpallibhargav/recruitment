import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import TableWrapper from "./TableWrapper";
import SearchComponent from "../SearchComponent/SearchComponent";

import styles from "../../pages/hrround/HrRound.module.scss";
import TableStyles from "./Tables.module.scss";
import { Button } from "antd";
import Link from "next/link";

const TableSearch = ({
  columns,
  data,
  title,
  placeholder,
  SelectDropdown,
  className,
  AddButtonTitle,
  style,
  ButtonLink,
}) => {
  return (
    <div className={styles.DetailsWrapper}>
      <div
        className={[
          styles.TableHeading,
          styles.SelectedHeading,
          TableStyles.TableHeading,
        ].join(" ")}
      >
        {SelectDropdown}
        {title ? <h2>{title}</h2> : ""}
        <div
          className={[
            styles.SelectedSearchWrapper,
            TableStyles.SearchWrapper,
          ].join(" ")}
        >
          <SearchComponent
            className={styles.SearchComponent}
            placeholder={placeholder}
          />
        </div>
        {ButtonLink ? (
          <Link href={ButtonLink}>
            <Button className={["greenBtn", styles.AddDataBtn].join(" ")}>
              <PlusOutlined /> Add Question
            </Button>
          </Link>
        ) : AddButtonTitle ? (
          <Button className={["greenBtn", styles.AddDataBtn].join(" ")}>
            <PlusOutlined /> Add Question
          </Button>
        ) : (
          ""
        )}
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

export default TableSearch;
