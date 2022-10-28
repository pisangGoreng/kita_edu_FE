import React from "react"

export default function Banner() {
  return (
    <div
      className="flex h-[549px] bg-green-50 font-avenir text-[#07638d] pt-40 px-44"
      style={{
        backgroundImage: `url("https://www.bridgewaystudyabroad.com/img/slider/Third_Slider_image_1920x1080.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "stretch",
      }}
    >
      <div className="w-[819px] text-[30px] ">
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
