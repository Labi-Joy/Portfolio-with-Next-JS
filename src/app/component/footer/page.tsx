import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const page = () => {
  return (
    <>
         <footer className="flex justify-center items-center">
        <div>
          <div className="flex w-full md:gap-[400px] lg:gap-[800px] items-center bg-gray-900 md:py-3 py-4 rounded-full">
            <p className="text-gray-200 px-8 md:px-12 md:font-extralight font-medium md:text-base text-lg">
              Connect with me
            </p>

            <div className="flex gap-3 items-center text-[#c79aff] px-10">
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
          </div>

          <p className="py-4 px-6 text-white text-xs font-extralight">Labi © 2024</p>
        </div>
      </footer>
    </>
  )
}

export default page