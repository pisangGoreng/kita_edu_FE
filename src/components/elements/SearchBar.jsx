import React, { useState } from "react"
import {
  AiOutlineSearch,
  AiFillCaretDown,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai"
import Button from "./Button"

export default function SearchBar() {
  const [searchText, setSearchText] = useState(() => "")
  return (
    <div className="items-center justify-between hidden md:flex">
      <div className="flex w-full h-12  border border-black rounded-xl justify-center mr-[12px]">
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
          placeholder="Search..."
          onChange={(event) => setSearchText(event.target.value)}
          value={searchText}
        />
      </div>

      <Button
        title="Cari"
        titleColor="text-[#ffcd56]"
        backgroundColor="bg-blue-ocean"
      />
    </div>
  )
}
