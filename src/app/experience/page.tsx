import React from 'react'
import Link from "next/link";
// import { global } from "styled-jsx/css";
import { FaGithub, FaReact, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const page = () => {
  return (
    <>
    {/* navbar */}
    <header className="text-[#c79aff] z-10 py-5 cursor-pointer flex justify-center fixed top-0 left-0 right-0 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit border-gray-300 bg-gradient-to-b from-zinc-200">
        <nav className="flex flex-col md:flex-row items-center gap-3 md:gap-10 bg-[#121212] shadow-lg py-4 md:py-3 px-8 rounded-full">
          <ul className="flex gap-5 md:gap-10 ">
          
           <Link href={'/'}><li className="hover:text-white">about me</li></Link> 
            <li className="hover:text-[#c79aff] text-white">experience</li>
            <Link href={'/education'}> <li className="hover:text-white">education</li></Link>
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
       
       {/* intro */}
       <div className='mt-32 px-10 flex flex-col gap-8 justify-center items-center'>
       <h4 className='w-[500px] text-center'> Here, you can know me a little more and see my whole experience as a Front-End Software Engineer. </h4>
       <button className="bg-white text-black py-2 px-5 rounded-full text-sm font-semibold hover: hover:text-[#c79aff] nimate-jump-in animate-delay-300 animate-once">
              Download CV
       </button>
       </div>
     

       {/* experience */}
       <div className='p-10'>
       <div className='bg-[#121212] py-7 px-10 rounded-3xl'>
        <div>
        <h4>Front-end Software Engineer</h4>
        <h6 className='text-[#c79aff]'>Hybrid</h6>

        </div>
       

       </div>
       </div>
      
    </>
  )
}

export default page