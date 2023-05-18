import React from "react";
import styles from "./Card.module.scss";

const Card = ({ title, content }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <h3>{content}</h3>
    </div>
  );
};

export default Card;
