import React from "react";
import styles from "./Today.module.scss";

const Today = (props) => {
  const { month, today } = props;
  return (
    <div className={styles.calendarConainer}>
      <p>{month}</p>
      <p>{today}</p>
    </div>
  );
};

export default Today;
