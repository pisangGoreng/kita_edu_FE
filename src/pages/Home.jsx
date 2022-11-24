import React from "react"
import Banner from "../components/elements/Banner"
import ClassRecomendation from "../components/ClassRecomendation"
// import Navbar from "../components/Navbar"
import VocationsShowcase from "../components/VocationsShowcase"
import StudentRecomendation from "../components/StudentRecomendation"
import PreTest from "../components/PreTest"
import Partners from "../components/Partners"
import Footer from "../components/sections/Footer"
import homeBanner from "../assets/images/banner/home-banner.png"

export default function Home() {
  return (
    <div>
      <Banner
        headerText={"Gotong Royong Bangun Masa Depan"}
        text={[
          "Bersama mencetak tenaga kerja Indonesia yang",
          "terampil dan berkualitas.",
        ]}
        isShowButton={true}
        bannerImage={homeBanner}
      />

      <div>
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
