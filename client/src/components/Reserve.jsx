import styled from "styled-components"
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Container = styled.main`
width: 100%;
height: 100%;
background-color: whitesmoke;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
`
const Title = styled.h1`
  padding: 20px;
  font-family: "Urbanist";
`
const Form = styled.form`
  display: flex;
  width: 80%;
  height: 80%;
  align-items: center;
  gap: 20px;
`
const Left = styled.div`
display: flex;
flex: 1;
flex-direction: column;
justify-content: space-between;
padding: 20px;
gap: 25px;
`
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #F9FBFF;
  box-shadow: 0px 1px 10px #999;
  border: 1px solid;
`
const LeftTitle = styled.h1`
  font-family: "Urbanist";
`
const NameLabel = styled.label`
  font-family: "Urbanist";
`
const NameInput = styled.input`
   width: 60%;
`
const LastNameLabel = styled.label`
  
`
const LastNameInput = styled.input`
   width: 60%;
`
const EmailLabel = styled.label`
  font-family: "Urbanist";
`
const EmailInput = styled.input`
   width: 60%;
`
const Options = styled.div`
z-index: 2;
  background-color: white;
  color: gray;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  width: 60%;
  
`
const OptionsTitle = styled.h2`
  
`
const OptionsItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  
`
const OptionsText = styled.span`
  
`
const OptionsCounter= styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
  
`
const CounterBtn = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  cursor: pointer;
  background-color: white;
  &:disabled{
    cursor: not-allowed;
  }
  
`
const CounterNum = styled.span`
  
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
 border: 1px solid;
`
const CalendarTitle = styled.h2`
  
`
const Right = styled.div`
flex: 1;
display: flex;
align-self: center;
flex-direction: column;
gap: 25px;
`
const RightWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
border: 1px solid;
width: 60%;
align-self: center;
padding: 25px;
background-color: #F9FBFF;
box-shadow: 0px 1px 10px #999;

`
const WrapperTitle = styled.h2`
  
`
const WrapperSub = styled.h3`
  
`
const Rooms = styled.span`
  
`
const BathRooms = styled.span`
  
`
const ReserveBtn = styled.button`
  width: 40%;
  align-self: center;
  padding: 15px;
  
  &:hover{
    transform: translateY(-17px);
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  }
`

const Reserve = () => {

  const navigate = useNavigate()

  const handleChange = (e) =>{
    setGuest((prev) => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const [guest , setGuest] = useState({
    firstname: "",
    lastname: "",
    email: "",
  })
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
  });

  const totaal = options.adult + options.children

  const handleOptions = (name, operation) => {
    setOptions((prev) => {
      return {  ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1,};
    });
  };

  const handleSearch = (e) =>{
    !guest.firstname ? alert("gelieve voornaam in te vullen") 
    : !guest.lastname ? alert("gelieve achternaam in te vullen") 
    : !guest.email ? alert("gelieve email in te vullen") :
      navigate("/paysummary" , {state: {guest, date, options, }})
     }

  return (
    <Container id="Reserve">
        <Wrapper>
        <Title>Boek uw verblijf !</Title>
            <Form>
              <Left>
                <Top>

                  <LeftTitle>Uw persoonsgegevens</LeftTitle>
                  <NameLabel htmlFor="">Voornaam</NameLabel>
                  <NameInput 
                    name="firstname"
                    type="text"
                    placeholder="Jan"
                    onChange={handleChange}
                    ></NameInput>

                   <LastNameLabel htmlFor="">Voornaam</LastNameLabel>
                  <LastNameInput 
                    name="lastname"
                    type="text"
                    placeholder="Smit"
                    onChange={handleChange}
                    ></LastNameInput>

                  <EmailLabel htmlFor="">Email</EmailLabel>
                  <EmailInput 
                    name="email"
                    type="email"
                    placeholder="Jan@smit.nl"
                    onChange={handleChange}
                    ></EmailInput >
                  <Options>
                    <OptionsTitle>Gelieve het aantal gasten aan te geven</OptionsTitle>
                    <OptionsItem>
                        <OptionsText>Volwassenen   </OptionsText>
                            <OptionsCounter>
                            <CounterBtn
                             disabled={options.adult <= 0}
                             onClick={()=> handleOptions("adult" , "decrease")}
                             type="button"
                             > - </CounterBtn>

                              <CounterNum> {options.adult}</CounterNum>

                              <CounterBtn
                               disabled={totaal >= 8}
                               onClick={()=> handleOptions("adult" , "i")}
                               type="button"
                               > + </CounterBtn>
                            </OptionsCounter>
                      
                    </OptionsItem>
                    <OptionsItem>
                        <OptionsText>Kinderen </OptionsText>
                            <OptionsCounter>
                              <CounterBtn
                               disabled={options.children <= 0}
                               onClick={()=> handleOptions("children" , "decrease")} 
                               type="button"                
                               > - </CounterBtn>

                              <CounterNum> {options.children} </CounterNum>

                              <CounterBtn 
                              disabled={totaal >= 8}
                              onClick={()=> handleOptions("children" , "i")}
                              type="button"
                              > + </CounterBtn>
                            </OptionsCounter>
                        
                    </OptionsItem>
                  </Options>
                </Top>
                  <Calender > 
                    <CalendarTitle>Selecteer de datum van uw verblijf</CalendarTitle>
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      className="date"
                      minDate={new Date()}
                    />          
                  </Calender>
              </Left>
              <Right>
                 <RightWrapper>
                    <WrapperTitle>Algemene gegevens</WrapperTitle>
                    <WrapperSub>Het huis beschikt over de volgende faciliteiten</WrapperSub>
                    <Rooms>4 slaapkamers voor 2 personen</Rooms>
                    <BathRooms>1 badkamer en 1 slaapkamer met badkamer</BathRooms>
                 </RightWrapper>
                 <ReserveBtn disabled={!guest} onClick={()=> handleSearch()}>Reserveer uw verblijf</ReserveBtn>
              </Right>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Reserve
