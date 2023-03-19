import { useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Checkout from "./Checkout"

const Main = styled.main`
  
`
const Top = styled.div`
  
`
const Title = styled.h2`
  
`
const Guest = styled.span`
  
`
const Options = styled.div`
  
`
const Adult = styled.span`
  
`
const Bottom = styled.div`
  
`
const PaySummary = () => {
  const location = useLocation()
  const [date, setDate] = useState(location.state.date)
  const [guest, setGuest] = useState(location.state.guest)
  const [options, setOptions] = useState(location.state.options)

  console.log(options.children)

const childCount = (count) =>{
  let child = []
  for( let i = 0; i < count; i++){
    child.push(<div></div>)
  }
  return child
}

const children = childCount(options.children)

console.log(children)

  return (
   <Main>
    <Top>
      <Title> </Title>
      <Guest></Guest>
      <Options>
        <Adult></Adult>
        {children.map((item)=> (
          <div>child</div>
        ))}
      </Options>
    </Top>
    <Bottom> <Checkout /></Bottom>
   </Main>
  )
}

export default PaySummary
