import React from "react"
import { useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

export default function VocationsShowcase() {
  const [vocationsOne] = useState(() => [
    {
      imageUrl: require("../assets/images/vocations/43RS-Logo.png"),
    },
    {
      imageUrl: require("../assets/images/vocations/Dapoer-Animasi.png"),
    },
    {
      imageUrl: require("../assets/images/vocations/HRS-Nekanik-Logo.png"),
    },
    {
      imageUrl: require("../assets/images/vocations/IMP-Logo.png"),
    },
    {
      imageUrl: require("../assets/images/vocations/Sekolah-Barber.png"),
    },
    {
      imageUrl: require("../assets/images/vocations/Logo-vokasi.png"),
    },
  ])

  const [vocationsTwo] = useState(() => [
    {
      imageUrl: require("../assets/images/vocations/Logo-vokasi.png"),
    },
    {
      imageUrl: require("../assets/images/vocations/Logo-vokasi.png"),
    },
    {
      imageUrl: require("../assets/images/vocations/Logo-vokasi.png"),
    },
    {
      imageUrl: require("../assets/images/vocations/Logo-vokasi.png"),
    },
    {
      imageUrl: require("../assets/images/vocations/Logo-vokasi.png"),
    },
    {
      imageUrl: require("../assets/images/vocations/Logo-vokasi.png"),
    },
  ])

  return (
    <div className="py-28 px-[178px]">
      <p className="text-avenir text-[#07638d] font-medium text-[45px] mb-8">
        Pilihan Vokasi{" "}
        <span className="text-[#ffcd56] text-[30px] ml-2"> Lihat Semua </span>
      </p>

      <div className="flex pb-10 hide-scroll-bar">
        <div className="flex overflow-x-auto justify-between w-full items-center">
          {vocationsOne.map((vocation, index) => {
            return (
              <button
                key={index}
                className="flex-shrink-0 w-[150px] h-36 p-1 rounded-md "
              >
                {/*  hover:border border-[#07638d] transition ease-in duration-400 transform hover:-translate-y-5 active:translate-y-0  */}
                {/* <LazyLoadImage
                  alt={"image.alt"}
                  effect="blur"
                  src={vocation.imageUrl}
                  style={{
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "stretch",
                  }}
                  width={"100%"}
                /> */}
                <img
                  src={vocation.imageUrl}
                  alt={"image.alt"}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
              </button>
            )
          })}
        </div>
      </div>

      <div className="flex pb-10 hide-scroll-bar">
        <div className="flex justify-between w-full items-center">
          {vocationsTwo.map((vocation, index) => {
            return (
              <button
                key={index}
                className="flex-shrink-0 w-[150px] h-36 p-1 rounded-md "
              >
                <img
                  src={vocation.imageUrl}
                  alt={"image.alt"}
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                />
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
