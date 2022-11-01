import React from "react"
import Typed from "react-typed"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

export default function Banner() {
  return (
    <div className="flex bg-[#07638d] font-avenir text-[#07638d]">
      <img
        src={require("../assets/images/banner-1.png")}
        alt={"image.alt"}
        style={{
          width: "100%",
          height: "500px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <div className="w-[700px] text-[23px] absolute mt-[200px] mx-44">
        <Typed
          className="text-[65px] font-black leading-none font-avenirblack"
          strings={["Gotong Royong Bangun Masa Depan"]}
          typeSpeed={80}
        />

        <p className="mt-2 leading-none">
          Bersama mencetak tenaga kerja Indonesia yang
        </p>
        <p className="mt-2 leading-none">terampil dan berkualitas.</p>

        <button className="px-4 mt-4 py-2 bg-[#ffcd56]  rounded-md focus:ring-0 shadow-lg transform active:scale-75 transition-transform outline-0">
          Daftar Sekarang
        </button>
      </div>
    </div>
  )
}
