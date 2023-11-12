import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import TheWeeknd from "./Pages/TheWeeknd";
import Keshi from "./Pages/Keshi";
import TaylorSwift from "./Pages/TaylorSwift";
import StrayKids from "./Pages/StrayKids";
import Instructions from "./Pages/Instructions";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/theweeknd" element={<TheWeeknd />} />
        <Route path="/keshi" element={<Keshi />} />
        <Route path="/taylorswift" element={<TaylorSwift />} />
        <Route path="/straykids" element={<StrayKids />} />
      </Routes>
    </>
  );
}

export default App;
