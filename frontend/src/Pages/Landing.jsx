import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Offers from './Offers'
import HomeProducts from './HomeProducts'
import Delivery from './Delivery'



const Landing = () => {
  return (
    <>
      <Navbar />
      <Offers />
      <HomeProducts />      
      <Footer />
    </>
  )
}

export default Landing