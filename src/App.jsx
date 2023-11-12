import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import TheWeeknd from './Pages/TheWeeknd'
import Keshi from './Pages/Keshi'
import Given from './Pages/Giveon'
import Instructions from './Pages/Instructions'
import './App.css'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/instructions" element={<Instructions />} />
    <Route path="/theweeknd" element={<TheWeeknd />} />
    <Route path="/keshi" element={<Keshi />} />
    <Route path="/giveon" element={<Given />} />
    </Routes>
    </>
  )
}

export default App
