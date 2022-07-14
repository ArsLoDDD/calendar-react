import React from "react";
import { eachDayOfInterval, format } from "date-fns";
import styles from "./FullMonth.module.scss";

const FullMonth = (props) => {
  const { numberOfDayWeek,calendarMonth, calendarAge, howManyDays} = props;
  const eachDayMonth = eachDayOfInterval({
    start: new Date(calendarAge, calendarMonth, 1),
    end: new Date(calendarAge, calendarMonth, howManyDays ? 31 : 30),
  });
  const currentWeekDay = [];

  eachDayMonth.map((day) => {
    if (day.getDay() === numberOfDayWeek) {
      return currentWeekDay.push(format(day, "dd"));
    }
  });

  function addLastesDay(array){
    if (array.lastIndexOf("01", 0) != 0 && array.lastIndexOf("02", 0) !=0 ) {
      array.unshift(<div> &nbsp; </div>);
  }
  
  }
  addLastesDay(currentWeekDay) // COMEBACK LATER
  return (
    <div>
      {currentWeekDay.map((day) => (
        <p onClick={(e)=>{
          const { changeCurrentTodayNum } = props;
          changeCurrentTodayNum([day])}} className={styles.text}>{day}</p>
      ))}
    </div>
  );
};

export default FullMonth;
