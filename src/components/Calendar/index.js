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
    console.log(newMonth)
    this.setState({ month: newMonth });
  };
  // componentDidMount() {
  //   changeCurrentMonth()
  // }

  render() {
    const { month } = this.state;
    return (
      <div className={styles.container}>
        <Today month={month} />
        <MainCalendar changeCurrentMonth={this.changeCurrentMonth} />
      </div>
    );
  }
}

export default Calendar;
