import React from 'react'
import styled from 'styled-components'
import useFetch from '../../functions/useFetch'
import { format } from "date-fns"


const Review = styled.main`
    display: flex;
    flex-direction: column;
`
const UserInfo = styled.div`
   display: flex ;
   gap: 35px;
`
const User = styled.div`
    
`
const Info = styled.div`
    display: flex;
    gap: 5px;
`
const Name = styled.span`
    
`
const TimeStamp = styled.main`
    
`
const Stars = styled.div`
    display: flex;
`
const Img = styled.img`
    
`
const Star = styled.span`
    
`
const Desc = styled.p`
    
`
const SingleReview = ({review}) => {

    const {data,loading, error} = useFetch(`http://localhost:8080/api/users/${review.userId}`)
    const date = new Date(review.createdAt)
  return (
  <Review>
    <UserInfo>

    <User>
        <Info><Name>{data.guestname || "verwijderd account"}</Name><TimeStamp>{format(date, "dd/MM/yyyy")}</TimeStamp></Info>
    </User>
    <Stars>
        {Array(review.star).fill().map((item, i) => (
          
          <div>*</div>
          
          ))}
        <Star>{review.star}</Star>
    </Stars>
    </UserInfo>

    <Desc>{review.desc}</Desc>
  </Review>
  )
}

export default SingleReview
