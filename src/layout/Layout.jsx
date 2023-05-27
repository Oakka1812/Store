import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Router from '../routers/Router'
import 'animate.css'

const Layout = () => {
  return (
    <div>
        <Navbar/>
        <Router/>
        <Footer/>
    </div>
  )
}

export default Layout