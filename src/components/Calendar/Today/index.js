import { Component } from "react";
import styles from "./Today.module.scss";

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namesDayWeek: {
        0: "Sunday",
        1: "Monday",
        2: "Tuesday",
        3: "Wednesday",
        4: "Thursday",
        5: "Friday",
        6: "Saturday",
      },
    };
  }
  render() {
    const { namesDayWeek } = this.state;
    const { month, today, nameOfToday } = this.props;
    return (
      <div className={styles.calendarConainer}>
        <p className={styles.nameOfToday}>{namesDayWeek[nameOfToday]}</p>
        <p className={styles.today}>{today}</p>
      </div>
    );
  }
}

export default Today;
