import React from 'react'
import styled from 'styled-components'
import useFetch from '../functions/useFetch'


const Review = styled.main`
    
`
const User = styled.div`
    
`
const Info = styled.div`
    
`
const Name = styled.span`
    
`
const TimeStamp = styled.main`
    
`
const Stars = styled.div`
    
`
const Img = styled.img`
    
`
const Star = styled.span`
    
`
const Desc = styled.p`
    
`
const SingleReview = ({review}) => {

    const {data,loading, error} = useFetch(`http://localhost:8080/api/users/64144d6667df6607db333534/${review.userId}`)
    console.log("review:", review)
    console.log("user:", data)
  return (
  <Review>
    <User>
        <Info><Name></Name><TimeStamp></TimeStamp></Info>
    </User>
    <Stars>
        <Img />
        <Star>{review.star}</Star>
    </Stars>
    <Desc></Desc>
  </Review>
  )
}

export default SingleReview
