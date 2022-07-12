import React from "react";
import { eachDayOfInterval, format } from "date-fns";

const Day = (props) => {
  const { numberOfDayWeek } = props;
  const eachDayMonth = eachDayOfInterval({
    start: new Date(2022, 6, 1),
    end: new Date(2022, 6, 31),
  });
  const currentWeekDay = [];

  eachDayMonth.map((day) => {
    if (day.getDay() === numberOfDayWeek) {
      return currentWeekDay.push(format(day, "dd"));
    }
  });
  function addSpaceIndex(array){
    if (array.lastIndexOf("01", 0) != 0) {
      array.unshift(" ");
  }else{
    // 
  }
  
  }
  addSpaceIndex(currentWeekDay)
  
  console.log(currentWeekDay);

  return (
    <div>
      {currentWeekDay.map((day) => (
        <p>{day}</p>
      ))}
    </div>
  );
};

export default Day;
