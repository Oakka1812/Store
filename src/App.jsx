import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Layout from './layout/Layout'

const App = () => {
  return (
    <div className='font-poppin'>
      <Layout/>
    </div>
  )
}

export default App