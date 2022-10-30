import React from "react"
import Typed from "react-typed"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

export default function Banner() {
  // flex bg-[#07638d] font-avenir text-[#07638d] h-[549px]
  return (
    <div className="flex bg-[#07638d] font-avenir text-[#07638d] h-screen">
      <LazyLoadImage
        alt={"image.alt"}
        effect="blur"
        src={
          "https://www.bridgewaystudyabroad.com/img/slider/Third_Slider_image_1920x1080.png"
        }
        style={{
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "stretch",
        }}
        width={"100%"}
      />

      <div className="w-[819px] text-[30px] absolute mt-[420px] mx-44">
        <Typed
          className="text-[71px] font-black leading-none font-avenirblack"
          strings={["Gotong Royong Bangun Masa Depan"]}
          typeSpeed={80}
        />

        <p className="mt-2">
          Bersama mencetak tenaga kerja Indonesia yang terampil dan berkualitas.
        </p>

        <button className="px-4 py-2 bg-[#ffcd56]  rounded-md focus:ring-0 shadow-lg transform active:scale-75 transition-transform outline-0">
          Daftar Sekarang
        </button>
      </div>
    </div>
  )
}
