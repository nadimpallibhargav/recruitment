
import { Drawer, Row } from "antd";
import React from "react";
import styles from "./Header.module.scss";
import NotificationCard from "./NotificationCard";

function Notification({ open, onClose }) {
  const example = [
    {
      id: 1,
      title: " Lorem ipsum dolor",
      description: "Call scheduled for Bessi cooper at 5.30 pm",
      isActive: false,
      avatar: "BC",
    },
    {
      id: 2,
      title: " Lorem ipsum.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isActive: true,
      avatar: "BC",
    },
    {
      id: 3,
      title: " Lorem ipsum dolor sit",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isActive: true,
      avatar: "OS",
    },
    {
      id: 4,
      title: " Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isActive: false,
      avatar: "OS",
    },
    {
      id: 5,
      title: " Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isActive: false,
      avatar: "QR",
    },
    {
      id: 6,
      title: " Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      isActive: true,
      avatar: "BC",
    },
    {
      id: 7,
      title: " Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet and consectetur adipisicing elit.",
      isActive: false,
      avatar: "BC",
    },
  ];
  return (
    <Drawer placement="right" onClose={() => onClose(false)} open={open}>
      <Row className={styles.popupContainer}>
        <h2 className={styles.notificationTitle}>Notifications</h2>
        <a className={styles.clerButton} href="">
          Mark All as read
        </a>
      </Row>

      <Row>
        {example.map((item) => (
          <div
            key={item.id}
            className={
              item.isActive
                ? styles.notificationActive : styles.notificationCard
            }
          >
            <NotificationCard data={item} />
          </div>
        ))}
      </Row>
     
    </Drawer>
  );
}

export default Notification;
