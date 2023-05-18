import { React, useState } from "react";
import { Modal, AutoComplete, Input } from "antd";
import { FileOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import SearchButton from "../buttons/SearchButton";

import styles from "../header/Header.module.scss";

const HeaderSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const options = [
    {
      value: "React JS",
      label: (
        <div className="SuggestItemWrapper">
          <span className="SuggestIcon">
            <FileOutlined />
          </span>
          <span className="SuggestTitle">React JS</span>
          <span className="SuggestSubTitle">
            -
            <span className="SuggestSubTitleRole">
              Front end developer - Javascript Front end developer - Javascript
            </span>
            - 3 to 4 years
          </span>
          <span className="SuggestLabel">Open Vacancy</span>
          <span className="SuggestDate">12 Dec 2023</span>
        </div>
      ),
    },
    {
      value: "Rejish",
      label: (
        <div className="SuggestItemWrapper">
          <span className="SuggestIcon">
            <UserOutlined />
          </span>
          <span className="SuggestTitle">Rejish</span>
          <span className="SuggestDate">06 Dec 2023</span>
        </div>
      ),
    },
  ];

  return (
    <>
      <a onClick={showModal}>
        <SearchButton />
      </a>
      <Modal
        open={isModalOpen}
        className={styles.searchModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[""]}
      >
        <div className={styles.AutoComplteWrapper}>
          <AutoComplete
            className={styles.searchAutoCompleteWrapper}
            dropdownMatchSelectWidth={252}
            options={options}
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !==
              -1
            }
          >
            <Input
              className={styles.Input}
              prefix={<SearchOutlined className={styles.PlaceholderSearch} />}
              placeholder="Search"
            />
          </AutoComplete>
        </div>
      </Modal>
    </>
  );
};
export default HeaderSearch;
