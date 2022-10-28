import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

export default function Banner() {
  return (
    // pt-40 px-44
    <div className="flex h-[549px] bg-[#07638d] font-avenir text-[#07638d]">
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

      <div className="w-[819px] text-[30px] absolute mt-40 mx-44">
        <p className="text-[71px] font-black leading-none font-avenirblack">
          Gotong Royong Bangun Masa Depan
        </p>
        <p className="mt-2">
          Bersama mencetak tenaga kerja Indonesia yang terampil dan berkualitas.
        </p>
        <button className="bg-[#ffcd56] h-16 w-64 mt-6 px-4 rounded-md focus:ring-0 shadow-lg transform active:scale-75 transition-transform outline-0">
          Daftar Sekarang
        </button>
      </div>
    </div>
  )
}
