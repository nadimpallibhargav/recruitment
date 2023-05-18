import Layout from "../Layout";
import styles from "./Attendance.module.scss";

const Attendance = ({ data }) => {
  return (
    <Layout title="Todays Attendance">
      {data.map((item, index) => (
        <div className={styles.Container} key={item.total + index}>
          <div className={styles.Header}>
            <h3>{item.team}</h3>
            <h4>
              Total: <span>{item.total}</span>
            </h4>
          </div>
          <div className={styles.Body}>
            <DataBox count={item.presence} type="presence" />
            <DataBox count={item.absence} type="absence" />
          </div>
          {index < data.length - 1 && <hr className={styles.HRule} />}
        </div>
      ))}
    </Layout>
  );
};

const DataBox = ({ type = "presence", count = 0 }) => (
  <div className={[styles.DataBox, styles[type + "Container"]].join(" ")}>
    <div className={[styles.DataBoxHeader, styles[type]].join(" ")}>
      <h5>{type === "presence" ? "Presents" : "Absents"}</h5>
    </div>
    <div className={styles.DataBoxBody}>
      <h4>{count}</h4>
    </div>
  </div>
);

export default Attendance;
