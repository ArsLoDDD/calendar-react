import React from 'react';
import styles from "./Today.module.scss";



const Today = (props) => {
  const {month} = props
  return (
    <div className={styles.calendarConainer}>
    {/* <p>{today}</p> */}
    <p>{month}</p>
  </div>
  );
}

export default Today;
