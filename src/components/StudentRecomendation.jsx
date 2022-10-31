import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

export default function StudentRecomendation() {
  return (
    <div className="py-28 px-[178px] font-avenir text-[#07638d]">
      <img
        src={require("../assets/images/Ad Promo.png")}
        alt={"image.alt"}
        style={{
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <p className="text-avenir text-[#07638d] font-medium text-[45px] pt-20 pb-8">
        Pilihan Vokasi{" "}
        <span className="text-[#ffcd56] text-[30px] ml-2"> Lihat Semua </span>
      </p>

      <div className="w-[280px] h-[230px] bg-gray-400 grid grid-rows-4 rounded-lg">
        <div className="flex items-center justify-center bg-[#e2e2e2]">
          <LazyLoadImage
            alt={"image.alt"}
            effect="blur"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IBFYgoFER1vmL1G-f7PdLdNfnuJVnQZTo0MOHII&s"
            style={{
              height: "45px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderRadius: "50%",
              border: "1px solid #a1a1a1",
            }}
            width={"45"}
          />

          <div className="ml-2">
            <p className="leading-none text-black">Jonathan Sugandi</p>
            <p className="leading-none mt-0.5 text-[#5c5a5a]">19 tahun</p>
          </div>
        </div>

        <div className=" bg-green-400 h-full">basadasds</div>
        <div className=" bg-green-400 h-full">basadasds</div>
      </div>
    </div>
  )
}
