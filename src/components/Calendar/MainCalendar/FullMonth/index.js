import React from "react";
import { eachDayOfInterval, format } from "date-fns";
import cx from "classnames";
import styles from "./FullMonth.module.scss";

const FullMonth = (props) => {
  const {
    numberOfDayWeek,
    calendarMonth,
    calendarAge,
    howManyDays,
    checkedDay,
  } = props;
  const eachDayMonth = eachDayOfInterval({
    start: new Date(calendarAge, calendarMonth, 1),
    end: new Date(calendarAge, calendarMonth, howManyDays ? 31 : 30),
  });

  const currentWeekDay = [];
  const concatCurrentWeekDay = [];
  eachDayMonth.map((day) => {
    if (day.getDay() === numberOfDayWeek) {
      return currentWeekDay.push(format(day, "dd"));
    }
  });
  function asd(event) {
    console.log(event.target.className);
  }
  function addLastesDay(array) {
    if (array.lastIndexOf("01") != 0 && array.lastIndexOf("02", 0) != 0) {
      array.unshift(<div> &nbsp; </div>);
      const arr = array.concat(concatCurrentWeekDay);
      console.log(arr)
    }
  }

  addLastesDay(currentWeekDay); // COMEBACK LATER
  return (
    <span className={styles.text}>
      {currentWeekDay.map((day, index) => {
        return (
          <p
            onClick={(e) => {
              const {
                changeCurrentToday,
                changeCurrentNameOfToday,
                changeCheckedDay,
              } = props;
              console.log(changeCurrentToday);
              changeCurrentToday([day]);
              changeCurrentNameOfToday([numberOfDayWeek]);
              changeCheckedDay();
              asd(e);
            }}
            className={styles.text}
          >
            {day}
          </p>
        );
      })}
      {/* {currentWeekDay.map((day) => (
        <p
          onClick={(e) => {
            const {
              changeCurrentToday,
              changeCurrentNameOfToday,
              changeCheckedDay,
            } = props;
            console.log(changeCurrentToday);
            changeCurrentToday([day]);
            changeCurrentNameOfToday([numberOfDayWeek]);
            changeCheckedDay();
          }}
          className={(e) => {
            let target = e.target;
            console.log(target.checkedDay);

            return checkedDay ? styles.textWithBorder : styles.text;
          }}
        >
          {day}
        </p>
      ))} */}
    </span>
  );
};

export default FullMonth;
