import { Button, ConfigProvider, Select, Table } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import styles from "./InterviewerBilling.module.scss";
import { useState } from "react";

const columns = [
  {
    title: "Interviewer  name",
    dataIndex: "name",
    render: (text) => <h3 className={styles.Text}>{text}</h3>,
  },
  {
    title: "Interview Count",
    dataIndex: "count",
    render: (text) => <h3 className={styles.Text}>{text}</h3>,
  },
  {
    title: "Total Earnings",
    dataIndex: "earning",
    render: (text) => <h3 className={styles.Text}>{text}</h3>,
  },
  {
    title: " ",
    dataIndex: "action",
    render: (text) => <h3 className={styles.Text}>{text}</h3>,
  },
];
const data = [
  {
    key: "1",
    name: "Jerome Bell",
    count: 30,
    earning: 3000,
    action: (
      <Button className={styles.TableBtn} type="text">
        Settle Now
      </Button>
    ),
  },
  {
    key: "2",
    name: "Brooklyn Simmons",
    count: 35,
    earning: 3500,
    action: (
      <Button className={styles.TableBtn} type="text">
        Settle Now
      </Button>
    ),
  },
  {
    key: "3",
    name: "Theresa Webb",
    count: 28,
    earning: 2800,
    action: "Settled on 4 Feb 2023",
  },
  {
    key: "4",
    name: "Darrell Steward",
    count: 23,
    earning: 2300,
    action: (
      <Button className={styles.TableBtn} type="text">
        Settle Now
      </Button>
    ),
  },
  {
    key: "5",
    name: "Floyd Miles",
    count: 34,
    earning: 3400,
    action: (
      <Button className={styles.TableBtn} type="text">
        Settle Now
      </Button>
    ),
  },
];

const InterviewBilling = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const rowSelection = {
    onChange: (selectedRKeys, selected) => {
      setSelectedRows(selected);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <section className={`${styles.IBSection} container`}>
      <h1 className={styles.Title}>Interviewer Settlement</h1>
      <div className={styles.TableContainer}>
        <div className={styles.Top}>
          <Select
            className={styles.AntDSelector}
            defaultValue="feb"
            options={[
              {
                label: "February",
                value: "feb",
              },
            ]}
          />

          <div className={styles.Action}>
            <Button icon={<DownloadOutlined />} className={styles.Btn1}>
              Export
            </Button>
            {selectedRows.length > 0 && (
              <Button className={styles.Btn2} type="primary">
                Settle Now (3)
              </Button>
            )}
          </div>
        </div>

        <div className={styles.TableWrapper}>
          <div className={`${styles.Table} ib-table`}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#09B48B",
                },
              }}
            >
              <Table
                rowSelection={{
                  type: "checkbox",
                  ...rowSelection,
                }}
                pagination={false}
                columns={columns}
                dataSource={data}
                row
              />
            </ConfigProvider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterviewBilling;
