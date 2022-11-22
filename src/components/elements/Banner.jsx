import React from "react"
import Typed from "react-typed"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

export default function Banner(props) {
  const {
    headerText,
    imagePath,
    text,
    isShowButton,
    containerClassName,
    bannerImage,
  } = props
  return (
    <div className="flex bg-[#07638d] font-avenir text-[#07638d]">
      <img
        src={bannerImage}
        alt={"image.alt"}
        style={{
          width: "100%",
          height: "500px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />

      <div
        className={`w-[700px] text-[23px] absolute mt-[200px] mx-44 ${containerClassName}`}
      >
        <Typed
          className="text-[65px] font-black leading-none font-avenirblack"
          strings={[headerText]}
          typeSpeed={80}
        />

        {text.map((text, index) => {
          return <p className="mt-2 leading-none">{text}</p>
        })}

        {isShowButton && (
          <button className="px-4 mt-4 py-2 bg-[#ffcd56] rounded-md focus:ring-0 shadow-lg transform active:scale-75 transition-transform outline-0">
            Daftar Sekarang
          </button>
        )}
      </div>
    </div>
  )
}
