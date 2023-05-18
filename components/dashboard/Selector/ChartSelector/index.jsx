import { Select } from "antd";
import styles from "./ChartSelect.module.scss";

const ChartSelect = ({ defaultValue, handleChange }) => {
  return (
    <Select
      className={styles.AntDSelector}
      defaultValue={defaultValue}
      style={{ width: 100 }}
      onChange={handleChange}
      options={[
        { value: "1", label: "Yesterday", className: "vacancyFilterItem" },
        { value: "2", label: "Last week", className: "vacancyFilterItem" },
        { value: "3", label: "Last month", className: "vacancyFilterItem" },
        { value: "4", label: "Last 3 months", className: "vacancyFilterItem" },
        { value: "5", label: "Last 6 months", className: "vacancyFilterItem" },
        { value: "6", label: "Last year", className: "vacancyFilterItem" },
      ]}
    />
  );
};

export default ChartSelect;
