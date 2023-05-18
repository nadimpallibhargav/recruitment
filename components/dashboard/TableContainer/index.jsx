import { Table } from "antd";
import React from "react";
import Layout from "../Layout";
import styles from "./Table.module.scss";

const TableContainer = ({ data, title, columns, rightContent }) => {
  const columnsData = Object.keys(columns).map((col, index) => ({
    title: columns[col],
    dataIndex: col,
    key: col,
  }));

  return (
    <Layout title={title} rightContent={rightContent} type="table">
      <Table columns={columnsData} dataSource={data} pagination={false} />
    </Layout>
  );
};

export default TableContainer;
