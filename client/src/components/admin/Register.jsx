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
const Btn = styled.button`
    
`

const Register = () => {

    const [guest, setGuest] = useState({
        guestname:"",
        email: "",
        password: ""
    })

    const [error , setError] = useState({
        guestname:false,
        email:false,
        password:false,
        passwordCorrect: false,

    })

   const handleChange = (e) =>{
    setGuest((prev) =>{
        return {...prev, [e.target.name]: e.target.value}
    })
   }
    const handleClick = (e) =>{
        e.preventDefault()
        !guest.name ? setError((prev) => {
            return {...prev , [error.guestname]: true}
        })
        : !guest.email ? setError({email: !error.email,}) 
        : ""

    }
    console.log(error.guestname)
  return (
   <Main>
    <Wrapper>
        <Label htmlFor="">naam gast</Label>
        {error.guestname? <span>Wel de naam in vulle he Gertje</span> : ""}
        <Input 
            name="guestname"
            type="text"
            placeholder="ons gert"
            onChange={handleChange}
        />

        <Label> email</Label>
        <Input 
            name="email"
            type="email"
            placeholder="gert@onsgert"
            onChange={handleChange}
        />

        <Label>Wachtwoord</Label>
        <Input 
            name="password"
            type="password"
            placeholder="geheim"
            onChange={handleChange}
        />
          <Label>Wachtwoord bevestigen</Label>
        <Input 
            name="password1"
            type="password"
            placeholder="geheim"
            onChange={handleChange}
        />

        <Btn onClick={handleClick}> registreer</Btn>
    </Wrapper>
   </Main>
  )
}

export default Register
