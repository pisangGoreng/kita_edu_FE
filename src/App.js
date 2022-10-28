import React from "react"
import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import VocationsShowcase from "./components/VocationsShowcase"

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="bg-red-300 px-[178px]">
        <VocationsShowcase />
      </div>
    </div>
  )
}

export default App
