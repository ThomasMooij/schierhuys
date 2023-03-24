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


const SingleReserve = ({reserve}) => {
const dates = reserve.dates
const deleteReserve = async (id) =>{
    try{
        await newRequest.delete(`http://localhost:8080/api/reserve/${id}`)

    }catch(err){
        console.log(err)
    }
}
 if(reserve.isCompleted) return (

      <Info>
        <Name>Volledige naam hoofd klant: {reserve.firstname + " " + reserve.lastname }</Name>
        <Adults> aantal volwassenen: {reserve.adults}</Adults>
        <Children>Aantal kinderen: {reserve.children} </Children>
        <Dates>Data verblijf:</Dates>
        <Delete onClick={() => deleteReserve(reserve._id)}>Delete</Delete> 
        </Info>
    

  )
}

export default SingleReserve
