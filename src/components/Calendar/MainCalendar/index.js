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
      todayNum: 0,
      checkedDay: false,
    };
  }
  changeCheckedDay = () => {
    this.setState({
      checkedDay: (this.state.checkedDay = !this.state.checkedDay),
    });
  };
  handleMonth = (props) => {
    const { age, isThirtyDays, month, monthNum } = this.state;
    const valueMonthName = Object.values(month)[[monthNum]];
    const { changeCurrentMonth } = this.props;
    changeCurrentMonth(valueMonthName);
  };

  componentDidMount() {
    this.handleMonth();
  }
  render() {
    const { age, isThirtyDays, month, monthNum, checkedDay } = this.state;
    const valueMonthName = Object.values(month)[[monthNum]];
    const daysWeek = ["S", "M", "T", "W", "T", "F", "s"];
    const { changeCurrentToday, changeCurrentNameOfToday } = this.props;
    return (
      <div className={styles.calendarConainer}>
        <div className={styles.monthAgeName}>
          <p>{valueMonthName} </p>
          &nbsp;
          <p>{age}</p>
        </div>
        <div className={styles.weekDaysBox}>
          {daysWeek.map((dayWeek, index) => (
            <div
              onClick={(e) => {
                const dayWeekNames = [(daysWeek.indexOf(dayWeek))];
                changeCurrentNameOfToday(dayWeekNames)
              }}
              className={styles.dayOfText}
              key={[dayWeek] + Math.random()}
            >
              <span className={styles.span}>{dayWeek}</span>{" "}
              <FullMonth
                numberOfDayWeek={0 + index}
                calendarAge={age}
                calendarMonth={6}
                howManyDays={[isThirtyDays]}
                changeCurrentToday={changeCurrentToday}
                changeCheckedDay={this.changeCheckedDay}
                checkedDay={checkedDay}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MainCalendar;

// ["S", "M", "T", "W", "T", "F", "S"];[{name:"S"}, {name:"M"}, {name:"T"},{name:"W"}, {name:"T"}, {name:"F"}, {name:"S"}];
