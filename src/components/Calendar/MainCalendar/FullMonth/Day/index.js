import React, { Component } from "react";
import styles from "./Day.module.scss";
class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedDay: false,
    };
  }
  asd(event) {
    console.log(event.target.className);
  }
  render() {
    const {
      changeCurrentToday,
      changeCurrentNameOfToday,
      changeCheckedDay,
      day,
      dayIndex,
      numberOfDayWeek,
    } = this.props;
    return (
      <p
        onClick={(e) => {
          console.log(changeCurrentToday);
          changeCurrentToday([day]);
          changeCurrentNameOfToday([numberOfDayWeek]);
        }}
        className={styles.text}
      >
        {day}
      </p>
    );
  }
}

export default Day;

if (array.lastIndexOf("01") === 0 && numberOfDayWeek === 0) {
  return;
} else if (array.lastIndexOf("02") === 0 && numberOfDayWeek === 1) {
  return;
} else if (array.lastIndexOf("03") === 0 && numberOfDayWeek === 2) {
  return;
} else if (array.lastIndexOf("04", 0) === 0 && numberOfDayWeek === 3) {
  return;
} else if (array.lastIndexOf("05", 0) === 0 && numberOfDayWeek === 4) {
  return;
} else if (array.lastIndexOf("06", 0) === 0 && numberOfDayWeek === 5) {
  return;
} else if (array.lastIndexOf("07", 0) === 0 && numberOfDayWeek === 6) {
  return;
}
if (array.lastIndexOf("01", 0) === 0 && numberOfDayWeek === 1) {
  return;
} else if (array.lastIndexOf("02", 0) === 0 && numberOfDayWeek === 2) {
  return;
} else if (array.lastIndexOf("03", 0) === 0 && numberOfDayWeek === 3) {
  return;
} else if (array.lastIndexOf("04", 0) === 0 && numberOfDayWeek === 4) {
  return;
} else if (array.lastIndexOf("05", 0) === 0 && numberOfDayWeek === 5) {
  return;
} else if (array.lastIndexOf("06", 0) === 0 && numberOfDayWeek === 6) {
  return;
} else if (array.lastIndexOf("07", 0) === 0 && numberOfDayWeek === 0) {
  array.unshift(<div> &nbsp; </div>);
}
if (array.lastIndexOf("01", 0) === 0 && numberOfDayWeek === 2) {
  return;
} else if (array.lastIndexOf("02", 0) === 0 && numberOfDayWeek === 3) {
  return;
} else if (array.lastIndexOf("03", 0) === 0 && numberOfDayWeek === 4) {
  return;
} else if (array.lastIndexOf("04", 0) === 0 && numberOfDayWeek === 5) {
  return;
} else if (array.lastIndexOf("05", 0) === 0 && numberOfDayWeek === 6) {
  return;
} else if (array.lastIndexOf("06", 0) === 0 && numberOfDayWeek === 0) {
  return;
} else if (array.lastIndexOf("07", 0) === 0 && numberOfDayWeek === 1) {
  array.unshift(<div> &nbsp; </div>);
}




function addLastesDay(array) {
    if (array.lastIndexOf("01", 0) === 0 && numberOfDayWeek === 0) {
      return;
    }
    if (array.lastIndexOf("01", 0) === 0 && numberOfDayWeek === 1) {
      if (array.lastIndexOf("07", 0) === 0 && numberOfDayWeek === 0) {
        array.unshift(<div> &nbsp; </div>);
      }
    }
    if (array.lastIndexOf("01", 0) === 0 && numberOfDayWeek === 2) {
      if (array.lastIndexOf("07", 0) === 0 && numberOfDayWeek === 1) {
        array.unshift(<div> &nbsp; </div>);
      }
    }
  }


  function addLastesDay(array) {
    if (array.lastIndexOf("01") != 0 && array.lastIndexOf("02", 0) != 0) {
      array.unshift(<div> &nbsp; </div>);
    }
  }