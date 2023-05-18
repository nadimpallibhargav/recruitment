import React from "react";
import { UserOutlined, BellOutlined, KeyOutlined } from "@ant-design/icons";

import OfficeActive from "../.././assets/images/OfficeActive.svg";
import Office from "../.././assets/images/Office.svg";

import Styles from "../../components/settings/Settings.module.scss";
import Image from "next/image";

const SideBarItems = [
  {
    title: "Profile",
    id: 1,
    icon: <UserOutlined className={Styles.sideIcons} />,
  },
  {
    title: "Company Details",
    id: 2,
    icon: <Image alt="office image" src={Office} />,
  },
  {
    title: "Notifications",
    id: 3,
    icon: <BellOutlined className={Styles.sideIcons} />,
  },
  {
    title: "Password",
    id: 4,
    icon: <KeyOutlined className={Styles.sideIcons} />,
  },
];
function Sidebar(props) {
  const { selected, setSelected } = props;
  return (
    <>
      <p className={Styles.sidebarTitle}>Settings</p>
      {SideBarItems.map((item) => (
        <div
          onClick={() => setSelected(item.id)}
          className={item.id === selected ? Styles.cardActive : Styles.card}
          key={item.id}
        >
          {(selected === 2 && item.id===2 )? (
            <Image src={OfficeActive} alt="Offece Active" />
          ) : (
            item.icon
          )}
          <p className={Styles.sidebarLink}>{item.title}</p>
        </div>
      ))}
    </>
  );
}

export default Sidebar;
