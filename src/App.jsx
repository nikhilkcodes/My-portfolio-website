import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import { Toaster } from 'react-hot-toast'
import About from './components/about/About'

function App() {
  return (
    <>
    <Navbar className="Navcolor" />
    <Toaster position='bottom-right' toastOptions={{duration: 3000}}/>
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />}/>
      <Route path="/projects"  element={<Portfolio style={{ paddingTop: '48px', paddingBottom: '48px' }} />}/>
      <Route path="/contact" element={<Contact style={{ paddingTop: '101px', paddingBottom: '101px'}}/>}/>
    </Routes>
    <Footer />
    </>
  )
}

export default App
