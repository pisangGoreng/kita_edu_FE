import React from "react"
import {
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai"

export default function Footer() {
  return (
    <div className="py-20 px-[178px] bg-[#D3D3D1] text-blue-ocean text-[15px] font-avenir">
      <div className="grid grid-cols-2">
        <div className="col-span-1 pr-20">
          <div className=" h-[55px] flex justify-start items-end">
            <img
              src={require("../../assets/images/Logo-KasiEdu.png")}
              style={{ width: "190px" }}
            />
          </div>

          <p className="py-6">
            PT Bersama Bangun Bangsa mengembangkan Kasi Edu sebagai Marketplace
            Pendidikan Vokasi, Gotong Royong Pendanaan Pendidikan Vokasi di
            Indonesia dengan Tanda Daftar Penyelenggara Sistem Elektronik di
            Kementerian Komunikasi dan Informatika Republik Indonesia.
          </p>

          <div className="grid grid-cols-10">
            <div>
              <AiOutlineWhatsApp
                className="focus:ring-0 transform active:scale-75 transition-transform outline-0"
                size={30}
              />
            </div>
            <div className="">
              <AiOutlineTwitter
                className="focus:ring-0 transform active:scale-75 transition-transform outline-0"
                size={30}
              />
            </div>
            <div className="">
              <AiFillFacebook
                className="focus:ring-0 transform active:scale-75 transition-transform outline-0"
                size={30}
              />
            </div>
            <div className="">
              <AiOutlineInstagram
                className="focus:ring-0 transform active:scale-75 transition-transform outline-0"
                size={30}
              />
            </div>
            <div className="">
              <AiFillLinkedin
                className="focus:ring-0 transform active:scale-75 transition-transform outline-0"
                size={30}
              />
            </div>
          </div>
        </div>

        <div className="col-span-1 grid grid-cols-3">
          <div>
            <div className="h-[55px] flex justify-start items-end">
              <p className="text-[20px] font-black leading-3">KASI EDU</p>
            </div>

            <div className="py-6 flex flex-col items-start">
              <button>CSR Inisiatif</button>
              <button>Vokasi Terdaftar</button>
              <button>Support Project</button>
              <button>Jadi Peserta Didik</button>
            </div>
          </div>

          <div>
            <div className="h-[55px] flex justify-start items-end">
              <p className="text-[20px] font-black leading-3">
                Lanjut Pelajari
              </p>
            </div>

            <div className="py-6 flex flex-col items-start">
              <button>Syarat Pengguna</button>
              <button>Kebijakan Privasi</button>
              <button>FAQ</button>
            </div>
          </div>

          <div>
            <div className=" h-[55px] flex justify-start items-end">
              <p className="text-[20px] font-black leading-3">Terhubung</p>
            </div>

            <div className="py-6 flex flex-col items-start">
              <button>Daftarkan Vokasi</button>
              <button>Karir</button>
              <button>Hubungi Kami</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
