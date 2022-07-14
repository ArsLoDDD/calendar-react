import React, { Component } from "react";
import { endOfToday, endOfDay, endOfMonth, eachDayOfInterval } from "date-fns";
import { format } from "date-fns";
import FullMonth from "./FullMonth/index";
import styles from "./MainCalendar.module.scss";

class MainCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 2022,
      month: {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December",
      },
      monthNum: 6,
      isThirtyDays: false,
    };
  }
 
  handleMonth = (e) => {
    const { value } = e.target;
    const { changeCurrentMonth } = this.props;
    changeCurrentMonth(String(value));
  };
  render() {
    const { age, isThirtyDays, month, monthNum } = this.state;
    const daysWeek = ["S", "M", "T", "W", "T", "F", "S"];
    const valueMonthName = Object.values(month)[[monthNum]];
    return (
      <div className={styles.calendarConainer}>
        <div className={styles.monthAgeName}>
          <p onClick={this.handleMonth}>{valueMonthName} </p>
          &nbsp;
          <p>{age}</p>
        </div>
        <div className={styles.weekDaysBox}>
          {daysWeek.map((dayWeek, index) => (
            <div className={styles.dayOfText} key={[dayWeek] + Math.random()}>
              {dayWeek}{" "}
              <FullMonth
                numberOfDayWeek={0 + index}
                calendarAge={age}
                calendarMonth={6}
                howManyDays={[isThirtyDays]}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MainCalendar;
