/* eslint-disable no-unused-vars */
import React from 'react'

import Products from '../Product/Product'
import About from './About/About'
import Banner from './Banner/Banner'
import Services from './Services/Services'


const Home = () => {
  return (
    <div><Banner/>
    <About></About>
    <Services></Services>
    <Products/>
    </div>
  )
}

export default Home