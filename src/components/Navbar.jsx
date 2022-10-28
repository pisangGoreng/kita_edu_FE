import React from "react"
import { useState } from "react"
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai"

export default function Navbar() {
  const [searchText, setSearchText] = useState(() => "")
  return (
    <div className="flex justify-between pl-11 pr-9 items-center h-40  mx-auto   font-avenir text-[#423d2a]">
      <img
        src={require("../assets/images/kasi_edu.png")}
        style={{ width: "300px" }}
      />
      <div className="flex justify-center items-center">
        <ul className="mr-6">
          <li className="flex text-[24px]  items-center">
            Menu
            <AiFillCaretDown className="ml-2.5" size={24} color="#07638d" />
          </li>
        </ul>
        <div className="flex w-[678px] h-[70px]  border border-black rounded-[20px] pt-4 pb-5 px-4 ">
          <button>
            <AiOutlineSearch
              className="focus:ring-0 transform active:scale-75 transition-transform outline-0"
              size={36}
            />
          </button>
          <input
            className="w-full text-[24px] pl-4 pt-2.5 focus:outline-0"
            type="text"
            name=""
            id=""
            placeholder="Search"
            onChange={(event) => setSearchText(event.target.value)}
            value={searchText}
          />
        </div>
      </div>
      <div className="flex w-[185px] h-auto items-center justify-between">
        <button className="w-[90px] h-[40px] border border-[#07638d] text-[#07638d] rounded-md focus:ring-0 shadow-lg transform active:scale-75 transition-transform outline-0">
          Daftar
        </button>
        <button className="w-[90px] h-[40px] bg-[#07638d] text-white rounded-md focus:ring-0 shadow-lg transform active:scale-75 transition-transform outline-0">
          Log in
        </button>
      </div>
    </div>
  )
}
