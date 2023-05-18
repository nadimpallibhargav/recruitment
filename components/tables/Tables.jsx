import React from "react";
import { Table } from "antd";

const Tables = ({ columns, data, style }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        className: "pages",
        defaultPageSize: 10,
        showSizeChanger: true,
        locale: { items_per_page: "" },

        pageSizeOptions: ["10", "20", "30"],
      }}
      scroll={{
        x: true,
      }}
      style={style}
    />
  );
};

export default Tables;
