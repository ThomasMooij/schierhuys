import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

const Btn = styled.button`
   margin-left: 15px;
    border: none;
    padding:15px;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    background-color:${(props) => (props.selectedPage === "home" ? "blue" : "black")} ;
    &:hover{
        background-color: #93ad78;
    }

`


const Link = ({page, selectedPage}) => {
 console.log(selectedPage)
  const lowerCasePage = page.toLowerCase().replace(/ /g, "")

  return (
   
    <Btn 
    page={page} 
    selectedPage={selectedPage}
    onClick={()=> setSelectedPage(page)}
    >
      <AnchorLink >{page}</AnchorLink>
    </Btn>
  )
}

export default Link