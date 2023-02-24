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
  height: 90px;
  justify-content: center;
  display: flex;
  justify-content: space-evenly;

`
const LogoContainer = styled.div`
  background-color:#93ad78;
  display: flex;
  align-items: center;
  padding: 0px 25px;
  border-radius: 30%;
  flex-direction: column;
  margin-left: 5px;
`
const Logo = styled.p`
font-size: 25px;
color: whitesmoke;
padding: 10px ;
`
const LogoText = styled.p`
font-size: 14;
color: whitesmoke;
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
const Navbar = ({selectedPage, setSelectedPage}) => {
  return (
    <Nav>
        <NavContainer>
          <LogoContainer>
            <Logo>Schierhuys</Logo>
            <LogoText>Vakanties in Drenthe</LogoText>
          </LogoContainer>
            <InnerContainer>
                <LeftSide>
                  <Link 
                      page="Home" 
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage} 
                    />
                   <Link 
                      page="Fotos"  
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}  
                    />
                   <Link 
                      page="Reserve" 
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage} 
                    />
                     <Link 
                      page="Contact" 
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage} 
                    />
                   <Link 
                      page="Reviews&info" 
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}  
                    />
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