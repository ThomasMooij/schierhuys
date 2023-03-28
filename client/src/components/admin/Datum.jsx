import styled from "styled-components"
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import useFetch from "../../functions/useFetch";

const Main = styled.main`
display: flex;
align-items: center;
`
const Calender = styled.div`
cursor: pointer;
display: flex;
flex-direction: column;
background-color: #F9FBFF;
align-items: center;
justify-content: center;
padding: 15px;
box-shadow: 0px 1px 10px #999;
border-radius: 15px;
`
const CalendarTitle = styled.h2`
  color: #383333;
  font-weight: 400;
`

const Datum = () => {

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

    // DISABLED DATES
    let disabled_dates =[]    
    const {data,error,loading} = useFetch('http://localhost:8080/api/reserve/unavailable')
    const array = Object.values(data);
    const length = array[0]?.length 

    for(let i = 0; i < length ; i++){
     disabled_dates.push(new Date(array[0][i]))
     array[0][i]
    }


const handleClick = (dates) =>{
  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate)
    const end = new Date(endDate)
    const date = new Date(start)
    const dates =[]
  
    while(date <= end){
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1)
    }
  
    return dates;
  }
  const allDays = getDatesInRange(startDate, endDate)
}

  return (
    <Main>
      <Calender > 
        <CalendarTitle>Welke dagen wil je voor jezelf mi Gertje?</CalendarTitle>
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
            minDate={new Date()}
            disabledDates={disabled_dates}
          />          
        </Calender>
    </Main>
  )
}

export default Datum
