import styled from "@emotion/styled"
import newRequest from "../../functions/newRequest"
import useFetch from "../../functions/useFetch"

const Costumer = styled.div`
  display: flex;
  justify-content:space-evenly;
  border: 1px solid;
  flex-direction: column;
  gap: 15px;
  padding: 8px;
`
const Info = styled.div`
  display: flex;
  gap: 15px;
`
const Name = styled.span`
  
`
const Email = styled.span`
  
`
const Delete = styled.button`
  
`
const Review = styled.div`
  display: flex;
  justify-content: space-between;
`
const Stars = styled.span`
  
`
const Text= styled.span`
  
`
const SingleCostumer = ({costumer}) => {

  const {data, loading, error} = useFetch(`http://localhost:8080/api/reviews/${costumer._id}`)

  const deleteUser = async (id) =>{
    const res = await newRequest.delete(`http://localhost:8080/api/users/${id}`)  
  }

  return (
          <Costumer>
            <Info>
              <Name>Klant naam: <b>{costumer.guestname}</b></Name>
              <Email> email: <b>{costumer.email}</b></Email>
              <Delete onClick={() => deleteUser(costumer._id)} >Delete</Delete>
            </Info>
            <Review>
                <Stars>Stars: <b>{data.star}</b></Stars>
                <Text>Beschrijving: <b>{data.desc}</b></Text>
            </Review>
          </Costumer>
  )
}

export default SingleCostumer
