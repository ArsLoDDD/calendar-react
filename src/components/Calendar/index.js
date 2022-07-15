import React, { Component } from "react";
import MainCalendar from "./MainCalendar/index";
import styles from "./Calendar.module.scss";
import Today from "./Today/index";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodayDate: new Date(),
      today: 0,
      month: 0,
      nameOfToday: 0,
    };
  }

  componentDidMount() {
    const {currentTodayDate} = this.state;
    console.log(currentTodayDate);
    const dd = String(currentTodayDate.getDate());
    const ddd = String(currentTodayDate.getUTCDay());
    console.log(ddd);
    this.setState({ nameOfToday: ddd });
    this.setState({ today: dd });
  }

  changeCurrentMonth = (newMonth) => {
    console.log(newMonth);
    this.setState({ month: newMonth });
  };
  changeCurrentToday = ([newToday]) => {
    console.log(newToday);
    this.setState({ today: newToday });
  };
  changeCurrentNameOfToday = ([newNameOfToday]) => {
    console.log(newNameOfToday);
    this.setState({ nameOfToday: newNameOfToday });
  };


  render() {
    const { month, today, nameOfToday } = this.state;
    return (
      <div className={styles.container}>
        <Today month={month} today={today} nameOfToday={nameOfToday} />
        <MainCalendar
          changeCurrentMonth={this.changeCurrentMonth}
          changeCurrentToday={this.changeCurrentToday}
          changeCurrentNameOfToday={this.changeCurrentNameOfToday}
        />
      </div>
    );
  }
}

export default Calendar;
