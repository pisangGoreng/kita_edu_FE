import React from "react"
import Banner from "../components/elements/Banner"
import vocationsBanner from "../assets/images/banner/vocations-banner.png"
import SearchBar from "../components/elements/SearchBar"

// KURANGI 40%

export default function Vocations() {
  return (
    <div>
      <Banner
        headerText={"Pendanaan Sosial Pendidikan Indonesia"}
        text={["Gotong Royong Pendanaan Pendidikan Vokasi Indonesia"]}
        isShowButton={false}
        containerClassName={"flex flex-col items-start justify-end mt-[280px]"}
        bannerImage={vocationsBanner}
      />

      {/* Vocations filter */}
      <div className="py-14 px-[178px] text-avenir text-blue-ocean">
        <p className="font-medium text-[25px] mb-4">Pilihan Vokasi</p>
        <div className="grid grid-cols-4">
          {/* FILTER */}
          <div className="h-[732px] border border-blue-ocean rounded-md">
            <div className="bg-[#ffcd56] py-[16px] px-[12px] rounded-t-md">
              <p className="font-medium text-[24px]">Filter</p>
            </div>
          </div>

          {/* RESULTS */}
          <div className="col-span-3 px-[12px]">
            <SearchBar />

            <div className="mt-[38px] px-[13px] h-[645px] flex flex-wrap overflow-auto">
              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>

              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>

              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>

              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>

              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>

              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>

              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>

              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>

              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>

              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>

              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>

              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>

              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>

              <div className="w-[228px] h-[160px] flex justify-center items-center bg-[#b7b7b7] border border-blue-ocean rounded-md mr-[20px] mb-[17px]">
                Logo vokasi
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
