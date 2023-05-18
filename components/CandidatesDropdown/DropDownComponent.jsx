import { DownOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Dropdown, Space, Tag } from "antd";
import { useState } from "react";
import styles from "./Dropdowncomponent.module.scss";

const items = [
  {
    label: "Front end developer",
    key: "1",
    checked: false,
  },
  {
    label: "Back end developer",
    key: "2",
    checked: false,
  },
  {
    label: "Java developer",
    key: "3",
    checked: false,
  },
  {
    label: "Node developer",
    key: "4",
    checked: false,
  },
];

const DropDownComponent = ({ placeHolder, itemDropDown, overlayClassName }) => {
  const [multiSelectDropDown, setmultiSelectDropDown] = useState(
    itemDropDown ?? items
  );
  const [tagsData, setTagsData] = useState([]);

  const handleCustomDropdownCheckBox = (item) => {
    const changedItem = { ...item, checked: !item.checked };
    const result = multiSelectDropDown.map((checkItem) => {
      if (checkItem.key === item.key) {
        return changedItem;
      } else {
        return checkItem;
      }
    });
    const tagsRender = result.filter((item) => item.checked === true);
    setTagsData(tagsRender);

    setmultiSelectDropDown(result);
  };

  const handleRemoveTag = (e, ind) => {
    e.preventDefault();
    const result = tagsData.filter((item) => item.key !== ind.key);

    const multiData = multiSelectDropDown.map((item) => {
      if (item.key === ind.key) {
        return { ...item, checked: false };
      } else {
        return item;
      }
    });

    setmultiSelectDropDown(multiData);

    setTagsData(result);
  };

  return (
    <div>
      <Dropdown
        className={styles.SelectDrop}
        overlayClassName={overlayClassName}
        menu={items}
        trigger={"click"}
        dropdownRender={(e) => {
          return (
            <ul className={styles.selectDropdown}>
              {multiSelectDropDown.map((item, index) => {
                return (
                  <li
                    className={[
                      "vacancyFilterItem",
                      item.checked ? "active" : "",
                    ].join(" ")}
                    key={index}
                    onClick={() => handleCustomDropdownCheckBox(item)}
                  >
                    {item.label} {item.checked && <CheckOutlined />}
                  </li>
                );
              })}
            </ul>
          );
        }}
      >
        <Button className={styles.SelectButton}>
          <Space className={styles.SelectButtonText}>
            {placeHolder ?? "Please select"}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      <div className={styles.tagsWrapper}>
        {tagsData.length
          ? tagsData?.map((item, index) => {
              return (
                <Tag
                  className={styles.SelectTag}
                  closable
                  key={index}
                  onClose={(e) => handleRemoveTag(e, item)}
                >
                  {item?.label}
                </Tag>
              );
            })
          : ""}
      </div>
    </div>
  );
};
export default DropDownComponent;
