import React from "react"

export default function PreTest() {
  return (
    <div className="px-[178px] font-avenir text-[#07638d]">
      <div className="flex py-20 border-t-4 border-b-4 border-[##b9b9b9]">
        <div className="w-full px-2 flex flex-col items-center justify-center">
          <h1 className="text-[40px] font-black leading-none font-avenirblack">
            Kenali Minat & Bakatmu Dengan Mengikuti Pre-Test
          </h1>

          <p className="mt-2 text-[20px] font-bold">
            Kenali minat dan bakatmu atau calon peserta didik yang akan kamu
            dukung sebelum memulai project Kasi Edu dengan mengirimkan link tes.
          </p>

          <div className="flex w-full items-center justify-between mt-4 ">
            <button className="px-4 py-2 bg-[#ffcd56] rounded-md focus:ring-0 shadow-lg transform active:scale-75 transition-transform outline-0">
              Coba Sekarang
            </button>

            <button className="px-4 py-2 bg-[#ffcd56] rounded-md focus:ring-0 shadow-lg transform active:scale-75 transition-transform outline-0">
              Kirim ke Peserta
            </button>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <img
            src={require("../assets/images/karakter-thinker.png")}
            alt={"image.alt"}
            style={{
              width: "190px",
              height: "331px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>
      </div>
    </div>
  )
}
