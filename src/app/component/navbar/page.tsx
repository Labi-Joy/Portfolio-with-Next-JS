import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const navbar = () => {
  return (
    <div> <div className="text-[#c79aff] py-5 cursor-pointer flex justify-center fixed top-0 left-0 right-0 ">
    <nav className="flex items-center gap-10 bg-gray-900 py-3 px-8 rounded-full">
      <ul className="flex gap-10">
        <li className="">about me</li>
        <li className="">education</li>
        <li className="">experience</li>
      </ul>
      <div className="flex gap-5 items-center">
        <a href="https://github.com/Labi-Joy" target="_blank">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/joy-eden-093a20305"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a href="mailto:joyayoeden@gmail.com" target="_blank" id="email">
          <IoMail />
        </a> 
      </div>
    </nav>
  </div></div>
  )
}

export default navbar