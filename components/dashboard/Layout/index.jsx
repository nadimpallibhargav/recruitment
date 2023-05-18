import { useEffect, useState } from "react";
import styles from "./Layout.module.scss";

const Layout = ({ children, rightContent, title, type = "normal" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return (
      <div className={styles.ChartWrapper}>
        <div className={styles.TopBar}>
          <h2 className={styles.Title}>{title}</h2>
          {rightContent}
        </div>
        <hr />
        <div
          className={[
            styles.Child,
            "layout-Child",
            type === "table" ? styles.Table : "",
          ].join(" ")}
        >
          {children}
        </div>
      </div>
    );
  }

  return <></>;
};

export default Layout;
