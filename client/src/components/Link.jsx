import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

const Btn = styled.button`
   margin-left: 15px;
    border: none;
    padding:3px 35px;
    cursor: pointer;
    color: white;
    font-size: 19px;
    font-weight: 700;
    border-radius: 10px;
    background-color:${(props) => (props.page === props.selectedPage ? "#93ad78" : "#5d8238")} ;
    &:hover{
        background-color: #93ad78;
    }

`
  const Link = ({page, selectedPage, setSelectedPage}) => {
  console.log(selectedPage)

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