import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import Container from './component/Container'
import IndustrySolutions from './component/IndustrySolutions'
import TestimonialSlider from './component/TestimonialSlider'
import Footer from './component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Container/>
      <IndustrySolutions/>
      <TestimonialSlider/>
      <Footer/>
    </>
  )
}

export default App