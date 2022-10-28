import React from "react"
import { useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

export default function VocationsShowcase() {
  const [vocations, setVocations] = useState(() => [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ])
  return (
    <div className="pt-28">
      <p className="text-avenir text-[#07638d] font-medium text-[50px]">
        Pilihan Vokasi{" "}
        <span className="text-[#ffcd56] text-[30px] ml-5"> Lihat Semua </span>
      </p>

      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div class="flex flex-nowrap bg-blue-300 h-[500px] ">
          {vocations.map((vocation) => {
            return (
              <button className="w-40 h-40 bg-green-300 mr-10 mb-10">
                <LazyLoadImage
                  alt={"image.alt"}
                  effect="blur"
                  src={
                    "https://img2.pngdownload.id/20180409/ulw/kisspng-unilever-logo-business-company-nyse-ul-axe-logo-5acbf2f88a1ab1.7245360915233154485657.jpg"
                  }
                  style={{
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "stretch",
                  }}
                  width={"100%"}
                />
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex mt-[100px] h-[100px] bg-blue-400">a</div>
    </div>
  )
}
