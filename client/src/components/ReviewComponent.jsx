import styled from "styled-components"
import useFetch from "../functions/useFetch.js"
import SingleReview from "./SingleReview.jsx"
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
    align-items: center;
    justify-content: center;
`
const Btn = styled.button`
    
`

const ReviewComponent = () => {

  const {data,loading, error} = useFetch("http://localhost:8080/api/reviews")

  return (
    <Main>
      <Nav>
        <Left>GastenBoek</Left> 
        <Right>Heeft u bij ons verbleven? login en laat een recensie achter <Btn>Login</Btn></Right>  
      </Nav>
      <Body>
      { loading ? "loading" : error ? "something went horribly wrong" : 
      data.map((review) => (
   
        <SingleReview key={review.id} review={review} /> 
        
    
      ))}
      </Body>
    </Main>
  )
}

export default ReviewComponent
