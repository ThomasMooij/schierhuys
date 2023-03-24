import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const Main = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
`
const SideBar = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: #F9FBFF;
  box-shadow: 0px 1px 10px #999;
`
const Btn = styled(Link)`
  background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`
const Review = styled.span`
  
`
const Omgeving = styled.span`
  
`
const Info = styled.span`
  
`
const Body = styled.div`
background-color: whitesmoke;
  flex: 3;
`



const Reviews = () => {
  
  const [selectedPage, setSelectedPage] = useState("")

  return (
    <Main>
      <SideBar>
        <Btn 
          to="/"
          onClick={()=> setSelectedPage("Review")}
        > 
          <Review >Recensies</Review>
        </Btn>

        <Btn 
          to="omgeving"
          onClick={()=> setSelectedPage("Omgeving")}
        > 
          <Omgeving >Omgeving</Omgeving>
        </Btn>
              
        <Btn 
          to="info"
          onClick={()=> setSelectedPage("Info")}
        > 
          <Info >Praktische informatie</Info>
        </Btn>   
      </SideBar>
      <Body><Outlet /></Body>
    </Main>
  )
}

export default Reviews
