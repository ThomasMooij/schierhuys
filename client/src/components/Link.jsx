import AnchorLink from "react-anchor-link-smooth-scroll"
import styled from "styled-components"

const Btn = styled.button`
   margin-left: 15px;
    border: none;
    padding:15px;
    cursor: pointer;
    color: white;
    border-radius: 10px;
    background-color:${(props) => props.selectedPage === props.page ? "#93ad78" : ""} ;
    &:hover{
        background-color: #93ad78;
    }

`


const Link = ({page, selectedPage}) => {
  console.log(page)
  return (
   
    <Btn>
      <AnchorLink page={page} selectedPage={selectedPage}>{page}</AnchorLink>
    </Btn>
  )
}

export default Link