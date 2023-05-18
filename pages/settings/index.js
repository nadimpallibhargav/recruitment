import React, { useState } from "react";

import Sidebar from "../../components/settings/Sidebar";
import Profile from "../../components/settings/Profile";
import CompanyDetails from "../../components/settings/CompanyDetails";
import Notifications from "../../components/settings/Notifications";
import Password from "../../components/settings/Password";

import Styles from "../../components/settings/Settings.module.scss";

function Settings() {
  const [selected, setSelected] = useState(1);
  return (
    <section>
      <div className="container">
        <div className={Styles.settings}>
          <div className={Styles.sidebarContainer}>
            <Sidebar selected={selected} setSelected={setSelected} />
          </div>
          <div className={Styles.tabContainer}>
            {selected === 1 && <Profile />}
            {selected === 2 && <CompanyDetails />}
            {selected === 3 && <Notifications />}
            {selected === 4 && <Password />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Settings;
