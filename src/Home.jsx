import React from 'react'
import './App.css'
import Intro from './components/intro/Intro'
import Skill from './components/skills/Skill'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Tweets from './components/tweets/Tweets'

function Home() {
  return (
    <>
    <Intro />
    <Skill />
    <Portfolio />
    <Contact />
    </>
  )
}

export default Home;
