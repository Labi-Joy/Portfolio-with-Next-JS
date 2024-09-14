import React from 'react'
import Link from "next/link";
// import { global } from "styled-jsx/css";
import { FaGithub, FaReact, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const page = () => {
  return (
    <>
      {/* navbar */}
      <header className="text-[#c79aff] py-5 cursor-pointer flex justify-center fixed top-0 left-0 right-0 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit border-gray-300 bg-gradient-to-b from-zinc-200">
        <nav className="flex flex-col md:flex-row items-center gap-3 md:gap-10 bg-gray-900 py-4 md:py-3 px-8 rounded-full">
          <ul className="flex gap-5 md:gap-10 ">
          
           <Link href={'/'}><li className="hover:text-white">about me</li></Link> 
           <Link href={'/experience'}> <li className="hover:text-white">experience</li></Link>
             <li className="hover:text-[#c79aff] text-white">education</li>
          </ul>
          <div className="hidden md:flex gap-3 md:gap-5 items-center">
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
      </header>

      {/* educationstat */}
       <div className='mt-32 md:40 border-gray-900 rounded-xl'>
         
       </div>

    </>
  )
}

export default page