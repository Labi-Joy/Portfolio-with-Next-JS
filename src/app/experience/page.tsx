import React from "react";
import Link from "next/link";
// import { global } from "styled-jsx/css";
import { FaGithub, FaReact, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const page = () => {
  return (
    <>
      {/* navbar */}
      <header className="text-[#c79aff] z-10 py-5 cursor-pointer flex justify-center fixed top-0 left-0 right-0 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit border-gray-300 bg-gradient-to-b from-zinc-200">
        <nav className="flex flex-col md:flex-row items-center gap-3 md:gap-10 bg-gray-900 shadow-lg py-4 md:py-3 px-8 rounded-full">
          <ul className="flex gap-5 md:gap-10 ">
            <Link href={"/"}>
              <li className="hover:text-white">about me</li>
            </Link>
            <li className="hover:text-[#c79aff] text-white">experience</li>
            <Link href={"/education"}>
              {" "}
              <li className="hover:text-white">education</li>
            </Link>
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
      <div className="mt-32 px-10 flex flex-col gap-8 justify-center items-center">
        <h4 className="w-[500px] text-center font-extralight px-8 md:px-4 lg:px-0">
          {" "}
          &lt; Here, you can know me a little more and see my whole experience
          as a <strong>Front-End Software Engineer</strong> /&gt;{" "}
        </h4>
        <button className="bg-white text-black py-2 px-5 rounded-full text-sm font-semibold hover:bg-slate-200 animate-jump-in animate-delay-300 animate-once">
          Download CV
        </button>
      </div>

      {/* experience */}
      <div className="px-4 py-10 md:p-10 flex flex-col justify-center items-center">
        <div className="bg-gray-900 py-7 px-10 rounded-3xl md:flex flex flex-col gap-6 md:gap-0">
          <div className="md:w-[40%]">
            <h4 className="text-xl">Front-end Software Engineer</h4>
            <h6 className="text-[#c79aff] font-light text-lg md:text-sm">Hybrid</h6>
            <div className="flex items-center gap-2 text-sm md:text-xs font-thin mt-3 text-slate-300">
              <p>June 2024</p>{" "}
              <div className="h-1 w-1 rounded-full bg-green-300"></div>{" "}
              <p>Present</p>
            </div>
            <p className="text-xs font-thin text-slate-300">
              Akobo, Ibadan. Nigeria
            </p>
          </div>

          <div className="md:w-[60%]">
            <p className="text-[#c79aff] text-xl font-semibold md:text-sm md:font-medium">Vergold</p>
            <div className="mt-4 flex flex-col gap-4 font-light text-sm text-slate-300">
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
