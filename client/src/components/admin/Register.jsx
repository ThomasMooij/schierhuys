import { useState } from "react"
import styled from "styled-components"

const Main = styled.main`
width: 100wh;
height: 100vh;
max-width: 100%;

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
`
const Label = styled.label`
    
`
const Input = styled.input`
    
`


const Register = () => {

    const [guest, setGuest] = useState({
        guestname:"",
        email: "",
        password: ""
    })
    
  return (
   <Main>
    <Wrapper>
        <Label htmlFor="">naam gast</Label>
        <Input 
            name="guestname"
            type="text"
            placeholder="ons gert"
        />

        <Label> email</Label>
        <Input 
            name="email"
            type="email"
            placeholder="gert@onsgert"
        />

        <Label>Wachtwoord</Label>
        <Input 
            name="password"
            type="password"
            placeholder="geheim"
        />
    </Wrapper>
   </Main>
  )
}

export default Register
