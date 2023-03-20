import { format } from "date-fns"
import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import newRequest from "../functions/newRequest.js"


const Main = styled.main`
  
`
const Top = styled.div`
  
`
const Title = styled.h2`
  
`
const Guest = styled.span`
  
`
const Options = styled.div`
  display: flex;
  flex-direction: column;
`
const Adult = styled.span`
  
`
const Children = styled.span`

`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
`
const Label = styled.label`
  
`
const Select = styled.select`
  
`
const Option = styled.option`
  
`
const Btn = styled.button`
  width: 30%;
`

const Bottom = styled.div`
  
`
const PaySummary = () => {
  const location = useLocation()
  const [date, setDate] = useState(location.state.date)
  const [guest, setGuest] = useState(location.state.guest)
  const [options, setOptions] = useState(location.state.options)
console.log("date:", date)
console.log("guest:" , guest)
console.log("options:", options)

const childCount = (count) =>{
  let child = []
  for( let i = 0; i < count; i++){
    child.push(<div></div>)
  }
  return child
}
const children = childCount(options.children)

const [childAges, setChildAges] = useState([])

const handleSubmit = (event) =>{
  event.preventDefault()
  setChildAges([
    ...childAges,
    event.target.value
  ])
}
// if childAges.length != children

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

const allDays = getDatesInRange(date[0].startDate, date[0].endDate)

const navigate = useNavigate()

const handleClick = async (e) =>{

  try{  

    await newRequest.post("/reserve/create-payment-intent", {
      firstname: guest.firstname,
      lastname: guest.lastname,
      email: guest.email,
      adults:options.adult,
      children:options.children,
      childrenAge:childAges,
      dates: allDays,
      price: 5,
      payment_intent: "temporary",
    })
    navigate("/checkout")
  }catch(err){
    console.log(err)
  }
}

console.log(children.length)
  return (
   <Main>
    <Top>
      <Title>Neem de gegevens goed door en bevestig deze alstublieft </Title>
      <Guest>voornaam: {guest.firstname} achternaam: {guest.lastname} email: {guest.email}</Guest>
      <Options>
        <Adult>aantaal volwassenen: {options.adult}</Adult>
        <Children>aantal kinderen: {options.children}</Children>
        <span>{`${format(date[0].startDate, "dd/MM/yyyy")} tot ${format(date[0].endDate, "dd/MM/yyyy")} `}</span>
        {children.map((item)=> (
        <Form>
          <Label htmlFor="children">Gelieve de leeftijd van de kinderen in te vullen</Label>
            <Select name="children" id="children" onChange={handleSubmit}>
              <Option value={0}>0</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
              <Option value="7">7</Option>
              <Option value="8">8</Option>
              <Option value="9">9</Option>
              <Option value="10">10</Option>
              <Option value="11">11</Option>
              <Option value="12">12</Option>
              <Option value="13">13</Option>
              <Option value="14">14</Option>
              <Option value="15">15</Option>
              <Option value="16">16</Option>
              <Option value="17">17</Option>
            </Select>         
          </Form>  
        ))}
        {childAges.length === children.length ?   
        <Btn onClick={handleClick}>Bevestig gegevens</Btn> :
          <span>gelieve alle leeftijden in te vullen</span>}
        
      </Options>
    </Top>
   </Main>
  )
}

export default PaySummary
