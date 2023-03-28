import styled from "styled-components"
import newRequest from "../../functions/newRequest"
import { format } from "date-fns"

const Info = styled.div`
display: flex;
flex-direction: column;
border: 1px solid;
padding: 25px;
`
const Name = styled.span`
`
const Adults = styled.span`
`
const Children = styled.span`
`
const Dates = styled.span`
`
const Delete = styled.button`
`


const SingleReserve = ({reserve, dates}) => {

const onClick = (id, dates) => {
  deleteReserve(id)
  updateReserve(dates)
}
const deleteReserve = async (id) =>{
    try{
        await newRequest.delete(`http://localhost:8080/api/reserve/${id}`)
    }catch(err){
        console.log(err)
    }
}
const updateReserve = async (dates) =>{
  try{
      await newRequest.put(`http://localhost:8080/api/reserve/unavailable`, {dates})
  }catch(err){
      console.log(err)
  }
}
// if multiple ages in childrenages array
let numChildren = reserve.Children
let datesLength = Object.keys(reserve.dates).length
let array1= reserve.ChildrenAge
let arrayLength= reserve.ChildrenAge.length
let array = array1.slice(arrayLength - numChildren)

let newDates = []
for(let i = 0; i < reserve.dates.length ; i++){
  newDates.push(new Date(reserve.dates[i]))
 }

console.log("dates:", newDates)

  return (
    <Info>
        <Name>Volledige naam hoofd klant: <b>{reserve.firstname + " " + reserve.lastname }</b></Name>
        <br></br>
        <Adults> aantal volwassenen: <b>{reserve.adults}</b></Adults>
        <br></br>
        <Children>Aantal kinderen: <b>{reserve.Children}</b>, leeftijden: <b>{ array.map((item) => (` -${item}`))} </b></Children>
        <br></br>
        <Dates>Data verblijf: <b>{`van ${reserve.dates[0].split('T')[0]} tot ${reserve.dates[datesLength -1].split("T")[0]}`}</b> </Dates>
        <div>{reserve.desc}</div>
        <Delete onClick={() => onClick(reserve._id, newDates)}>Verwijder(data komt weer vrij)</Delete> 
    </Info>
  )
}

export default SingleReserve


