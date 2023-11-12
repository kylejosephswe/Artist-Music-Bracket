import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Instructions from "./Pages/Instructions";
import Home from "./Pages/Home";
import TheWeeknd from "./Pages/TheWeeknd";
import Keshi from "./Pages/Keshi";
import TaylorSwift from "./Pages/TaylorSwift";
import StrayKids from "./Pages/StrayKids";
import Beyonce from "./Pages/Beyonce";
import "./App.css";

function App() {
  return (
    <>
      <div className="everything-included">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructions" element={<Instructions />} />
          <Route path="/theweeknd" element={<TheWeeknd />} />
          <Route path="/keshi" element={<Keshi />} />
          <Route path="/taylorswift" element={<TaylorSwift />} />
          <Route path="/straykids" element={<StrayKids />} />
          <Route path="beyonce" element={<Beyonce />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
