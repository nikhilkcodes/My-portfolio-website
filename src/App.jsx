import React,{useState} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './components/about/About'
import { ThemeProvider } from './Context/Theme'


function App() {
  const [themeMode, setThemeMode] = useState('light');

    const darkTheme = () => {
        setThemeMode('dark');
        document.documentElement.classList.add('dark');
    };

    const lightTheme = () => {
        setThemeMode('light');
        document.documentElement.classList.remove('dark');
    };

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
    <Navbar className="Navcolor" />
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />}/>
      <Route path="/projects"  element={<Portfolio style={{ paddingTop: '48px', paddingBottom: '48px' }} />}/>
      <Route path="/contact" element={<Contact style={{ paddingTop: '101px', paddingBottom: '101px'}}/>}/>
    </Routes>
    <Footer />
    </ThemeProvider>
  )
}

export default App
