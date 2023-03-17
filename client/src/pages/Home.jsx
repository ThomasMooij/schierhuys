import React from 'react'
import Contact from '../components/Contact'
import Landing from '../components/Landing'
import Photos from '../components/Photos'
import Reserve from '../components/Reserve'
import Reviews from '../components/Reviews'

const Home = ( {setSelectedPage}) => {
  return (
    <>
      <Landing setSelectedPage={setSelectedPage}/>
      <Photos />
      <Reserve />
      <Reviews />
      {/* <Contact /> */}
     
    </>
  )
}

export default Home
