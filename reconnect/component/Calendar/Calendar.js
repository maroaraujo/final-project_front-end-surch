import { useState } from "react";
import DatePicker from "sassy-datepicker";

function Calendar(props) {
  const onChange = (newDate) => {
    console.log(`New date selected - ${newDate.toString()}`);
    props.setDate(newDate);
  };

  const minDate = props.userMood[0].date.replace(/-/g, ", ");
  const maxDate = props.userMood[props.userMood.length - 1].date.replace(
    /-/g,
    ", "
  );

  return (
    <DatePicker
      onChange={onChange}
      selected={props.date}
      minDate={new Date(minDate)}
      maxDate={new Date(maxDate)}
    />
  );
}

export default Calendar;
