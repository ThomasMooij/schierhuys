import styled from 'styled-components'
import Link from './Link'


const Nav = styled.nav`
   position: sticky;
   top: 0px;
    z-index: 999;
`
const NavContainer = styled.div`
  background-color: #5d8238;
  width:100%;
  z-index: 30;
  height: 70px;
  justify-content: center;
  display: flex;
  justify-content: space-evenly;

`
const Logo = styled.p`
font-size: 25px;
color: whitesmoke;
align-self: center;
padding: 10px ;
`
const InnerContainer = styled.div`
 margin: auto;
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`
const LeftSide = styled.div`
margin: auto;
width: 40%;
display: flex;
justify-content: space-between;
`
const RightSide = styled.div`
display: flex;
align-items: center;
`
const Navbar = () => {
  return (
    <Nav>
        <NavContainer>
            <Logo>Schierhuys</Logo>
            <InnerContainer>
                <LeftSide>
                   <Link   />
                </LeftSide>
                <RightSide>
                   button
                </RightSide>
            </InnerContainer>
        </NavContainer>
    </Nav>
  )
}

export default Navbar