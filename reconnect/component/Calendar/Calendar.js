import { useState } from 'react';
import DatePicker from 'sassy-datepicker';

const dummyData = [
    {
        date: 28/07/2022,
        mood: "great",
        whatmakesfeel: "I was on the beach",
        notes: "I was with family"
    },
    {
        date: 29/07/2022,
        mood: "bad",
        whatmakesfeel: "cough covid",
        notes: ""
    }, {
        date: 30/07/2022,
        mood: "ok",
        whatmakesfeel: "pains",
        notes: "didn't eat much"
    }, {
        date: 31/07/2022,
        mood: "ok",
        whatmakesfeel: "",
        notes: ""
    }, {
        date: 1/08/2022,
        mood: "good",
        whatmakesfeel: "getting better",
        notes: ""
    }, {
        date: 2/08/2022,
        mood: "great",
        whatmakesfeel: "I was on the beach again",
        notes: "made some friends"
    }, {
        date: 3/08/2022,
        mood: "bad",
        whatmakesfeel: "my friends cough covid",
        notes: "my fault"
    },



]


function Calendar() {
  const [date, setDate] = useState(new Date());

  const onChange = newDate => {
    console.log(`New date selected - ${newDate.toString()}`);
    setDate(newDate);
  };

  return <DatePicker onChange={onChange} selected={date} minDate={new Date(dummyData[0].date)} maxDate={new Date(2021, 11, 31)}/>;
}

export default Calendar


