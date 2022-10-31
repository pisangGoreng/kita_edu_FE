import React from "react"
import Banner from "./components/Banner"
import ClassRecomendation from "./components/ClassRecomendation"
import Navbar from "./components/Navbar"
import VocationsShowcase from "./components/VocationsShowcase"
import StudentRecomendation from "./components/StudentRecomendation"

function App() {
  return (
    <div>
      <Navbar />
      <Banner />

      <div className="">
        <VocationsShowcase />
        <ClassRecomendation />
        <StudentRecomendation />
      </div>
    </div>
  )
}

export default App
