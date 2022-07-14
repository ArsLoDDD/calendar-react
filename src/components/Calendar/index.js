import React, { Component } from "react";
import MainCalendar from "./MainCalendar/index";
import styles from "./Calendar.module.scss";
import Today from "./Today/index";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: 0,
      month: 0,
    };
  }
  changeCurrentMonth = (newMonth) => {
    console.log(newMonth);
    this.setState({ month: newMonth });
  };
  changeCurrentToday = (newToday) => {
    console.log(newToday);
    this.setState({ today: newToday });
  };
  // componentDidMount() {
  //   changeCurrentMonth()
  // }

  render() {
    const { month, today } = this.state;
    return (
      <div className={styles.container}>
        <Today month={month} today={today}  />
        <MainCalendar changeCurrentMonth={this.changeCurrentMonth} changeCurrentToday={this.changeCurrentToday} />
      </div>
    );
  }
}

export default Calendar;
