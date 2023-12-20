import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/intro/Intro'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
  return (
    <>
    <Navbar className="Navcolor" />
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<Intro/>}/>
      <Route path="/projects" element={<Portfolio/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
