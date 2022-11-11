import React from "react"
import Banner from "../components/Banner"
import ClassRecomendation from "../components/ClassRecomendation"
import Navbar from "../components/Navbar"
import VocationsShowcase from "../components/VocationsShowcase"
import StudentRecomendation from "../components/StudentRecomendation"
import PreTest from "../components/PreTest"
import Partners from "../components/Partners"
import Footer from "../components/sections/Footer"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />

      <div className="">
        <VocationsShowcase />
        <ClassRecomendation />
        <StudentRecomendation />
        <PreTest />
        <Partners />
        <Footer />
      </div>
    </div>
  )
}
