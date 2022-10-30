import React from "react"
import { AiOutlineLeft, AiOutlineRight, AiFillTool } from "react-icons/ai"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

export default function ClassRecomendation() {
  return (
    <div className="py-28 bg-[#07638d] px-[178px]">
      <p className="text-avenir text-white font-medium text-[45px] mb-8">
        Kelas Pilihan{" "}
        <span className="text-[#ffcd56] text-[30px] ml-2"> Lihat Semua </span>
      </p>

      <div className="flex pb-10 hide-scroll-bar items-center">
        <div className="h-[249px] w-[220px] bg-red-300 grid grid-rows-2 ">
          <LazyLoadImage
            alt={"image.alt"}
            effect="blur"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/06382018064471.562c33b03b564.jpg"
            style={{
              height: "100%",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            width={"100%"}
          />
          <div className=" bg-green-300">2</div>
        </div>
      </div>

      <div className="flex pb-10 hide-scroll-bar items-center">
        <AiOutlineLeft size={30} color="#fff" className="mr-2" />
        <div className="flex overflow-x-auto  text-xl text-white items-center justify-center">
          <button class="flex rounded-lg border border-[#b7b7b7] px-9 py-2 items-center justify-center mr-4">
            <AiFillTool size={30} color="#fff" />
            <p className="ml-1 text-md font-light text-[18px]">Mechanic</p>
          </button>

          <button class="flex rounded-xl border border-[#b7b7b7] px-9 py-2 items-center justify-center mr-2">
            <AiFillTool size={30} color="#fff" />
            <p className="ml-1 text-md font-light text-[18px]">Barber</p>
          </button>

          <button class="flex rounded-xl border border-[#b7b7b7] px-9 py-2 items-center justify-center mr-2">
            <AiFillTool size={30} color="#fff" />
            <p className="ml-1 text-md font-light text-[18px]">Culinery</p>
          </button>

          <button class="flex rounded-xl border border-[#b7b7b7] py-2 items-center justify-center mr-2 w-[283px]">
            <AiFillTool size={30} color="#fff" />
            <p className="ml-1 text-md font-light text-[18px]">
              Digital Marketing
            </p>
          </button>

          <button class="flex rounded-xl border border-[#b7b7b7]  py-2 items-center justify-center mr-2 w-[283px]">
            <AiFillTool size={30} color="#fff" />
            <p className="ml-1 text-md font-light text-[18px]">Coding</p>
          </button>
        </div>
        <AiOutlineRight size={30} color="#fff" className="ml-2" />
      </div>
    </div>
  )
}
