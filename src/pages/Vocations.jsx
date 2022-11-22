import React from "react"
import Banner from "../components/elements/Banner"
import vocationsBanner from "../assets/images/banner/vocations-banner.png"

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
    </div>
  )
}
