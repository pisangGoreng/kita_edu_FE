import React from "react"
import { useState } from "react"
import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai"

export default function Navbar() {
  const [searchText, setSearchText] = useState(() => "")
  const [nav, setNav] = useState(() => true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between pl-11 pr-9 items-center h-20 mx-auto font-avenir text-[#423d2a] fixed w-screen z-40 bg-white">
      {/* LOGO */}
      <img
        src={require("../assets/images/Logo-KasiEdu.png")}
        style={{ width: "200px" }}
      />

      {/* SEARCH BAR */}
      <div className="items-center hidden md:flex">
        <ul className="mr-2">
          <li className="flex text-lg items-center">
            Menu
            <AiFillCaretDown className="ml-2" size={24} color="#07638d" />
          </li>
        </ul>

        <div className="flex w-[500px] h-12  border border-black rounded-xl justify-center">
          <button className="flex items-center justify-center">
            <AiOutlineSearch
              className="mx-2 focus:ring-0 transform active:scale-75 transition-transform outline-0"
              size={30}
            />
          </button>

          <input
            className="flex w-full text-lg pt-1 mr-2 focus:outline-0"
            type="text"
            name=""
            id=""
            placeholder="Search"
            onChange={(event) => setSearchText(event.target.value)}
            value={searchText}
          />
        </div>
      </div>

      <div className="hidden w-40 h-auto items-center justify-between md:flex">
        <button className="px-4 py-2 border border-[#07638d] text-[#07638d] rounded-md focus:ring-0 shadow-lg transform active:scale-75 transition-transform outline-0">
          Daftar
        </button>
        <button className="px-4 py-2 bg-[#07638d] text-white rounded-md focus:ring-0 shadow-lg transform active:scale-75 transition-transform outline-0">
          Log in
        </button>
      </div>

      {/* TODO: buat component sidebar sendiri menggunakan redux state */}
      {/* SIDE BAR FOR SCREEN SIZE*/}

      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* <div
        className={
          !nav
            ? `fixed left-0 top-0 w-[60%] bg-gray-300 h-full border-r border-r-gray-900 ease-in-out duration-500`
            : `fixed left-[100%]`
        }
      >
        <img
          src={require("../assets/images/kasi_edu.png")}
          style={{ width: "200px" }}
        />
        <ul className="pt-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div> */}
    </div>
  )
}
