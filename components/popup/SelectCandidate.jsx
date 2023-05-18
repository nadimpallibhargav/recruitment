import { React, useState } from "react";
import { Button, Modal, Tag } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  StarOutlined,
  DeleteOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import styles from "../../pages/mapcandidates/Mapcandidates.module.scss";
const cardsArr = ["one", "two", "three", "four", "five"];

const SelectCandidate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cards, setCards] = useState(cardsArr);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onDeleteCard = (card) => {
    const result = cards.filter((item) => item !== card);
    setCards(result);
  };

  return (
    <>
      <a>
        <Button onClick={showModal} className="greenBtn">
          Map Selected Candidates (12)
        </Button>
      </a>
      <Modal
        centered
        open={isModalOpen}
        className={[styles.SelectedModal].join(" ")}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" className="greenBtnOutline" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" className="greenBtn" onClick={handleOk}>
            Map Candidates
          </Button>,
        ]}
      >
        <h2>Selected Candidates - 12</h2>
        <div
          className={[
            styles.CandidatesList,
            styles.SelectedCandidatesList,
          ].join(" ")}
        >
          {cards.map((value, index) => {
            return (
              <div key={value} className={styles.SingleCandidate}>
                <div className={[styles.CandidateActive].join(" ")}>
                  <div className={styles.CandidateName}>
                    <span className={styles.Name}>Bessie Cooper</span>
                    <Tag className={styles.tag}>React JS</Tag>
                    <Tag className={styles.tag}>React JS</Tag>
                    <Tag className={[styles.tag, styles.addNumber].join(" ")}>
                      <PlusOutlined /> 3
                    </Tag>
                    <div className={styles.modify}>
                      <DeleteOutlined
                        className={[styles.EditIcon, styles.DeleteIcon].join(
                          " "
                        )}
                        onClick={() => onDeleteCard(value)}
                      />
                    </div>
                  </div>
                  <div
                    className={[styles.Contact, styles.ContactMap].join(" ")}
                  >
                    <ul>
                      <li>
                        <PhoneOutlined
                          className={[
                            styles.ContactIcon,
                            styles.PhoneIcon,
                          ].join(" ")}
                        />
                        9876543245
                      </li>
                      <li>
                        <MailOutlined className={styles.ContactIcon} />
                        coop@mail.com
                      </li>
                      <li>
                        <StarOutlined className={styles.ContactIcon} />3 years
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};
export default SelectCandidate;
