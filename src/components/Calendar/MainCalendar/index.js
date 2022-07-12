import React, { Component } from "react";
import { endOfToday, endOfDay, endOfMonth, eachDayOfInterval } from "date-fns";
import { format } from "date-fns";
import Day from "./Day/index";
import styles from "./MainCalendar.module.scss";

class MainCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = { month: endOfToday().toISOString() };
  }
  render() {
    const { month } = this.state;
    const daysWeek = ["S", "M", "T", "W", "T", "F", "S"];
    return (
      <div>
        <div className={styles.weekDaysBox}>
          {daysWeek.map((dayWeek, index) => (
            <div className={'dayOf'+[dayWeek]} key={[dayWeek] + Math.random()}>{dayWeek} <Day numberOfDayWeek={0+index} /> </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MainCalendar;
