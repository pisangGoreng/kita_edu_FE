import React, { useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

export default function StudentRecomendation() {
  const [studentsOne] = useState(() => [{}, {}, {}, {}, {}, {}, {}, {}])

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
        Dukung Vokasi{" "}
        <span className="text-[#ffcd56] text-[30px] ml-2"> Lihat Semua </span>
      </p>

      {/* LEVEL 1 */}
      <div className="flex overflow-x-auto items-center pb-6 mb-6">
        {studentsOne.map((student, index) => {
          return (
            <div className="w-[255px] h-[270px] flex-shrink-0 rounded-lg flex flex-col border border-[#07638d] mr-4">
              <div className=" item flex bg-[#e2e2e2] items-center justify-center rounded-t-lg py-1">
                <LazyLoadImage
                  alt={"image.alt"}
                  effect="blur"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IBFYgoFER1vmL1G-f7PdLdNfnuJVnQZTo0MOHII&s"
                  style={{
                    height: "40px",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    border: "1px solid #a1a1a1",
                  }}
                  width={"40"}
                />
                <div className="ml-2">
                  <p className="leading-none text-black text-sm">
                    Jonathan Sugandi
                  </p>
                  <p className="leading-none mt-0.5 text-[#5c5a5a] text-xs">
                    19 tahun
                  </p>
                </div>
              </div>

              <div className="flex-col item h-full p-2 text-xs ">
                <p>Vokasi Pilihan & Class</p>
                <div className="flex justify-start items-center">
                  <LazyLoadImage
                    alt={"image.alt"}
                    effect="blur"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IBFYgoFER1vmL1G-f7PdLdNfnuJVnQZTo0MOHII&s"
                    style={{
                      height: "40px",
                      backgroundSize: "cover",
                      borderRadius: "50%",
                      border: "1px solid #a1a1a1",
                    }}
                    width={"40"}
                  />
                  <p className="ml-1">Nama Vokasi - Motion Graphic</p>
                </div>
                <div className="flex mt-1">
                  <div className="item w-full">
                    <p className="text-[#494847]">Kategori</p>
                    <p>Basic to Advance</p>
                  </div>

                  <div className="item w-2/3">
                    <p className="text-[#494847]">Durasi Tersisa</p>
                    <p>28 hari</p>
                  </div>
                </div>
                <div className="flex mt-1">
                  <div className="item w-full">
                    <p className="text-[#494847]">Biaya</p>
                    <p>IDR. 4.500.000</p>
                  </div>

                  <div className="item w-2/3">
                    <p className="text-[#494847]">Terkumpul</p>
                    <p>IDR. 1.825.000</p>
                  </div>
                </div>

                <div className="w-full bg-[#b7b7b7] rounded-full h-2.5 mt-1">
                  <div
                    className="bg-[#003663] h-2.5 rounded-full flex items-center justify-end pr-2 pt-0.5"
                    style={{ width: "80%" }}
                  >
                    <p className="text-white text-[6px]">80%</p>
                  </div>
                </div>

                <div className="w-full flex items-center justify-center">
                  <button className="px-14 py-2 mt-4 bg-[#ffcd56] rounded-md focus:ring-0 shadow-lg transform active:scale-75 transition-transform outline-0">
                    Dukung
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* LEVEL 2 */}
      <div className="flex overflow-x-auto items-center pb-6 mb-6">
        {studentsOne.map((student, index) => {
          return (
            <div className="w-[255px] h-[270px] flex-shrink-0 rounded-lg flex flex-col border border-[#07638d] mr-4">
              <div className=" item flex bg-[#e2e2e2] items-center justify-center rounded-t-lg py-1">
                <LazyLoadImage
                  alt={"image.alt"}
                  effect="blur"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IBFYgoFER1vmL1G-f7PdLdNfnuJVnQZTo0MOHII&s"
                  style={{
                    height: "40px",
                    backgroundSize: "cover",
                    borderRadius: "50%",
                    border: "1px solid #a1a1a1",
                  }}
                  width={"40"}
                />
                <div className="ml-2">
                  <p className="leading-none text-black text-sm">
                    Jonathan Sugandi
                  </p>
                  <p className="leading-none mt-0.5 text-[#5c5a5a] text-xs">
                    19 tahun
                  </p>
                </div>
              </div>

              <div className="flex-col item h-full p-2 text-xs ">
                <p>Vokasi Pilihan & Class</p>
                <div className="flex justify-start items-center">
                  <LazyLoadImage
                    alt={"image.alt"}
                    effect="blur"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7IBFYgoFER1vmL1G-f7PdLdNfnuJVnQZTo0MOHII&s"
                    style={{
                      height: "40px",
                      backgroundSize: "cover",
                      borderRadius: "50%",
                      border: "1px solid #a1a1a1",
                    }}
                    width={"40"}
                  />
                  <p className="ml-1">Nama Vokasi - Motion Graphic</p>
                </div>
                <div className="flex mt-1">
                  <div className="item w-full">
                    <p className="text-[#494847]">Kategori</p>
                    <p>Basic to Advance</p>
                  </div>

                  <div className="item w-2/3">
                    <p className="text-[#494847]">Durasi Tersisa</p>
                    <p>28 hari</p>
                  </div>
                </div>
                <div className="flex mt-1">
                  <div className="item w-full">
                    <p className="text-[#494847]">Biaya</p>
                    <p>IDR. 4.500.000</p>
                  </div>

                  <div className="item w-2/3">
                    <p className="text-[#494847]">Terkumpul</p>
                    <p>IDR. 1.825.000</p>
                  </div>
                </div>

                <div className="w-full bg-[#b7b7b7] rounded-full h-2.5 mt-1">
                  <div
                    className="bg-[#003663] h-2.5 rounded-full flex items-center justify-end pr-2 pt-0.5"
                    style={{ width: "80%" }}
                  >
                    <p className="text-white text-[6px]">80%</p>
                  </div>
                </div>

                <div className="w-full flex items-center justify-center">
                  <button className="px-14 py-2 mt-4 bg-[#ffcd56] rounded-md focus:ring-0 shadow-lg transform active:scale-75 transition-transform outline-0">
                    Dukung
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
