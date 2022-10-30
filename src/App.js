import React from "react"
import Banner from "./components/Banner"
import ClassRecomendation from "./components/ClassRecomendation"
import Navbar from "./components/Navbar"
import VocationsShowcase from "./components/VocationsShowcase"

function App() {
  return (
    <div>
      <Navbar />
      <Banner />

      <div className="">
        <VocationsShowcase />
        <ClassRecomendation />
      </div>
    </div>
  )
}

export default App
