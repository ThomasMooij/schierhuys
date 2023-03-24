import { Link } from "react-router-dom"
import styled from "styled-components"
import useFetch from "../../functions/useFetch.js"
import SingleReview from "./SingleReview.jsx"
import newRequest from "../../functions/newRequest.js"
import { useState } from "react"

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
`
const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    gap: 25px;
    margin: auto;
`
const Left = styled.div`
`
const Right = styled.div`
    
`
const Body = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
`
const Btn = styled.button`
    
`
const Form = styled.div`
    
`
const Title = styled.h3`
    
`
const Input = styled.input`
    
`
const Text = styled.span`
    
`
const Select = styled.select`
    
`
const BottomBtn = styled.button`
    
`


const ReviewComponent = () => {

  const {data,loading, error, reFetch} = useFetch("http://localhost:8080/api/reviews")
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  const [desc , setDesc] = useState("")

  const [star , setStar] = useState(5)

  const handleClick = async (e) =>{
    e.preventDefault()
    try{

    }catch(err){
      
    }
    const res = await newRequest.post(
        "http://localhost:8080/api/reviews", 
        {desc, star}) 
  }

  return (
    <Main>
      <Nav>
        <Left>GastenBoek</Left> 
        <Right>
          { !currentUser ?   
            <>
            <p>Heeft u bij ons verbleven? login met de gegevens die u ontvangen heeft in de bedankt email en laat een recensie achter </p>
                  <Link to="login"><Btn>Login</Btn></Link> 
            </> 
          : "laat een recensie achter"}
        </Right>  
      </Nav>
      <Body>
      { loading ? "loading" : error ? "something went horribly wrong" : 
      data.map((review, i) => (
   
        <SingleReview key={i} review={review} /> 
    
      ))}
      </Body>
      
{    currentUser ?      
          <>
            <Title>Laat ons weten wat u ervan vond </Title>
            <Title>U kunt een resencie achterlaten per bezoek</Title>
            <Input
              type="text"
              placeholder ="Schrijf uw recensie"
              onChange={(e)=> setDesc(e.target.value)}
              />
            <Text>Rating:</Text>
            <Select onChange={(e) => setStar(e.target.value)}>
                <option value={5}>5</option>
                <option value={4}>4</option>
                <option value={3}>3</option>
                <option value={2}>2</option>
                <option value={1}>1</option>
            </Select>
            <BottomBtn onClick={handleClick}>Verstuur</BottomBtn> 
          </>
          : null}
      
    </Main>
  )
}

export default ReviewComponent
