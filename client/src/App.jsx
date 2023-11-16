import { useState } from 'react'
import './App.css'
import PredictComponent from './PredictComponent'
import NavBar from './NavBar'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

function App() {

  return (
    <>
    <NavBar />
      <PredictComponent></PredictComponent>
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
