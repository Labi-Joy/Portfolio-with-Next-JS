import React from "react";
// import Link from "next/link";
import { global } from "styled-jsx/css";
import { FaGithub, FaReact, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { DiCss3, DiHtml5, DiJavascript, DiSass } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { SiVite } from "react-icons/si";

const page = () => {
  return (
    <>
      {/* navbar */}
      <header className="text-[#c79aff] py-5 cursor-pointer flex justify-center fixed top-0 left-0 right-0 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit border-gray-300 bg-gradient-to-b from-zinc-200">
        <nav className="flex flex-col md:flex-row items-center gap-3 md:gap-10 bg-gray-900 py-4 md:py-3 px-8 rounded-full">
          <ul className="flex gap-5 md:gap-10 ">
            <li className="text-white hover:text-[#c79aff]">about me</li>
            <li className="hover:text-white">experience</li>
            <li className="hover:text-white">education</li>
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

      {/* heropage */}

      <div className="mt-32 md:mt-40 md:flex md:flex-row flex flex-col  gap-8 md:gap-0 items-center justify-center md:px-10">
        <div className="px-6 mb-4 md:mb-0 ">
          <h1 className="text-5xl text-white mb-2">Hi, I'm <span className="type"></span> </h1>
          <h2 className="text-6xl mb-3 text-white">
            A Front<span className="text-[#d5bff1]">-end</span>{" "}
            <span className="md:bg-gradient-to-r from-[#9f53fe] to- text-[#9f53fe] md:text-white">
              Developer
            </span>{" "}
          </h2>
          <p className="md:w-[70%] text-gray-500 mt-5">
            With my <span className="text-gray-300">1 year</span> of experience
            as an experienced{" "}
            <span className="text-gray-300">Front-End Software Engineer</span>.
            I have been able to bring to life a lot of projects because of my
            get-it-done attitude to work.
          </p>
          <div className="py-5 flex items-center gap-5">
            <button className="bg-gray-900 text-white py-3 px-4 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-[#c79aff] nimate-jump-in animate-delay-300 animate-once">
              Download CV
            </button>
            <button className="text-sm text-gray-400 font-semibold hover:bg-gray-900 py-4 hover:shadow-round hover:shadow-[#9f53fe] sh px-4 rounded-full hover:text-white transition-transform hover:translate-x-1 motion-reduce:transform-none">
              See experiences
            </button>
          </div>
        </div>

        <div className="bg-[rgb(159,83,254)] w-50 h-50 rounded-full p-2  md:bg-purple-500">
          <div className="w-72 h-72 md:w-80 md:h-80 bg-[#9f53fe] rounded-full items-center justify-center overflow-hidden ">
            <img
              src="https://i.ibb.co/V2qYrxR/My-Image2.jpg"
              alt="my profile picture"
              className="w-full h-full object-cover md:flex"
            />
          </div>
        </div>
      </div>

      {/* frameworks */}
      <div className=" h-screen flex flex-col gap-20 items-center justify-center  ">
        <p className="frameworksi list text-[#c79aff] text-6xl">Javascript</p>
        <p className="frameworksii list text-[#9f53fe] text-6xl">React</p>
        <p className="frameworksiii list text-[#6105d6] text-6xl">Next</p>
      </div>

      {/* usedtech */}
      <div className="flex flex-col md:ml-[-100px] lg:ml-[-550px] justify-center items-center px-10 md:px-56">
        <p className="font-thin w-[300px] text-3xl md:text-5xl md:w-[600px] text-white ">
          These are the technologies that I've been using{" "}
        </p>
        
        <div className="overflow-x-auto md:overflow-x-hidden w-full">
        <div className="flex gap-20 min-w-max py-20 mb-10 ml-[5rem] md:ml-[30rem]">

{/* card 1 */}
<div className="tech flex flex-col gap-3 rounded-md font-thin px-4 py-3 text-white bg-black">
  <p className="pb-3 px-2 text-sm font-light">
    Front-end Engineer Design <span className="text-black">V</span>
  </p>
  <div className="flex items-center gap-4 text-sm px-4">
    <div className='flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full px-2"'>
      <FaReact className="icon text-[#00ffff]" />
    </div>
    <p>React JS</p>
  </div>
  <div className="flex items-center gap-4 text-sm px-4">
    <div className='flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full px-2"'>
      <FaReact className="text-[#c79aff]" />
    </div>
    <p>React Native</p>
  </div>
  <div className="flex items-center gap-4 text-sm px-4">
    <div className='flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full px-2"'>
      <RiNextjsFill className="w-8" />
    </div>
    <p>Next JS</p>
  </div>
  <div className="flex items-center gap-4 text-sm px-4">
    <div className='flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full px-2"'>
      <img
        src="https://i.ibb.co/cX0p3JX/download-removebg-preview.png"
        className="w-4 "
      />
    </div>
    <p>Vite</p>
  </div>
  <div className="flex items-center gap-4 text-sm px-4 mb-5">
    <div className='flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full px-2"'>
      <FaGithub className="" />
    </div>
    <p>GitHub</p>
  </div>
</div>
 
 {/* card 2 */}
<div className="tech flex flex-col gap-3 rounded-md font-thin px-4 py-3 text-white bg-black">
  <p className="pb-3 px-2 text-sm font-light">Languages</p>
  <div className="flex items-center gap-4 text-sm px-4">
    <div className='flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full px-2"'>
      <DiJavascript className="icon text-yellow-300 rounded-none" />
    </div>
    <p>Javascript</p>{" "}
    <div className="flex items-center gap-4 text-sm px-4 text-black">
      <p>van</p>
    </div>
  </div>
  <div className="flex items-center gap-4 text-sm px-4">
    <div className='flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full px-2"'>
      <BiLogoTypescript className="text-[#087fcf]" />
    </div>
    <p>Typescript</p>{" "}
    <div className="flex items-center gap-4 text-sm px-4 text-black">
      <p>van</p>
    </div>
  </div>
</div>

<div className="tech flex flex-col gap-3 rounded-md font-thin px-4 py-3 text-white bg-black">
  <p className="pb-3 px-2 text-sm font-light">
    Front-end Technologies <span className="text-black">Vanil</span>
  </p>
  <div className="flex items-center gap-4 text-sm px-4">
    <div className='flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full px-2"'>
      <DiHtml5 className="icon text-orange-400" />
    </div>
    <p>HTML5</p>
  </div>
  <div className="flex items-center gap-4 text-sm px-4">
    <div className='flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full px-2"'>
      <DiCss3 className="text-yellow-400" />
    </div>
    <p>CSS</p>
  </div>
  <div className="flex items-center gap-4 text-sm px-4">
    <div className='flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full px-2"'>
      <DiSass className="text-[#cf6b9f]" />
    </div>
    <p>SASS</p>
  </div>
  <div className="flex items-center gap-4 text-sm px-4">
    <div className='flex items-center justify-center w-6 h-6 bg-gray-900 rounded-full px-2"'>
      <RiTailwindCssFill className="text-[#0fb8d6]" />
    </div>
    <p>Tailwind css</p>
  </div>
</div>
</div>
</div>
        </div>
 

      {/* testimonials
  <div className='py-10 px-8'>
    <div className="slider bg-white">
    <div className='flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full px-2"'><img src='https://i.ibb.co/V2qYrxR/My-Image2.jpg' className='w-8 '/></div>
    </div>
  </div> */}

      {/* footer */}
      <div>
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
                <a
                  href="mailto:joyayoeden@gmail.com"
                  target="_blank"
                  id="email"
                >
                  <IoMail />
                </a>
              </div>
            </div>

            <p className="py-4 px-6 text-white text-xs font-extralight">
              Labi © 2024
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default page;
