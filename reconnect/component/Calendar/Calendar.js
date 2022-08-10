import { useEffect, useState } from "react";
import DatePicker from "sassy-datepicker";

function Calendar(props) {
  let minDate = "";
  let maxDate = "";

const onChange = (newDate) => {
    console.log(`New date selected - ${newDate.toString()}`);
    props.setDate(newDate);
  };
  

  // useEffect(() => {
  minDate = props.userMood[0].date.replace(/-/g, ", ").slice(0,12);
  console.log("minDate",minDate)
  maxDate = props.userMood[props.userMood.length - 1].date.replace(
    /-/g,
    ", "
  ).slice(0,12);
  console.log("maxDate", maxDate);

  //entryDate = new Date(minDate);
  //lastDate = new Date(maxDate);
  //},[props.userMood])


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
