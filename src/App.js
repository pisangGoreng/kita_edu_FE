import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Navbar from "./components/Navbar"
import Vocations from "./pages/Vocations"

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Vocations />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vocation" element={<Vocations />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
