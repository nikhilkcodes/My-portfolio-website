import React from 'react'
import './App.css'
import Intro from './components/intro/Intro'
import Skill from './components/skills/Skill'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Testimonial from './components/testimonial/Testimonial'

function Home() {
  return (
    <>
    <Intro />
    <Skill />
    <Portfolio />
    <Testimonial />
    <Contact />

    </>
  )
}

export default Home;
