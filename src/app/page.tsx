"use client";
import React from "react";
import Image from "next/image";
import labi from "../../public/labi.jpg";
import vitelogo from "../../public/vitelogo.png";
import Link from "next/link";
// import { global } from "styled-jsx/css";
import { FaGithub, FaReact, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiJavascriptFill,
} from "react-icons/ri";
import { DiCss3, DiHtml5, DiJavascript, DiSass } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { SiJavascript } from "react-icons/si";

const page = () => {
  return (
    <>
      {/* navbar */}
      <header className="text-[#c79aff] z-10 py-5 cursor-pointer flex justify-center fixed top-0 left-0 right-0 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit border-gray-300 bg-gradient-to-b from-zinc-200">
        <nav className="flex flex-col md:flex-row items-center gap-3 md:gap-10 bg-gray-900 py-4 md:py-3 px-8 rounded-full">
          <ul className="flex gap-5 md:gap-10 ">
            <li className="text-white hover:text-[#c79aff]">about me</li>
            <Link href={"/experience"}>
              {" "}
              <li className="hover:text-white">experience</li>
            </Link>
            <Link href={"/education"}>
              {" "}
              <li className="hover:text-white">education</li>
            </Link>
          </ul>
          <div className="hidden md:flex gap-3 md:gap-5 items-center">
            <a
              href="https://github.com/Labi-Joy"
              target="_blank"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/joy-eden-093a20305"
              target="_blank"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:joyayoeden@gmail.com"
              target="_blank"
              id="email"
              className="hover:text-white"
            >
              <IoMail />
            </a>
          </div>
        </nav>
      </header>

      {/* heropage */}

      <div className="mt-32 md:mt-40 md:flex lg:flex-row flex flex-col gap-6 md:gap-12 mb-0 lg:gap-0 items-center justify-center px-0 md:px-10">
        <div className="px-6 mb-4 md:mb-0 ">
          <h1 className="text-4xl md:text-5xl text-white mb-2">
            {" "}
            Hi, I&apos;m Joy{" "}
          </h1>
          <h2 className="text-5xl md:text-6xl mb-3 text-white">
            A Front<span className="text-[#d5bff1]">-end</span>{" "}
            <br className="md:hidden " />
            <span className="md:bg-gradient-to-r from-[#9f53fe] to- text-[#9f53fe] md:text-white">
              Developer
            </span>{" "}
          </h2>
          <p className="lg:w-[70%] text-gray-500 mt-5">
            {/* With my <span className="text-gray-300">months</span> of experience
            as an experienced{" "} */}
            With my experience as a <span></span>
            <span className="text-gray-300">Front-end software developer</span>.
            I have been able to bring to life a lot of projects because of my
            get-it-done attitude to work.{" "}
            <span>
              I craft responsive websites where technologies meets{" "}
              <span className="">creativity</span> .
            </span>
          </p>
          <div className="py-5 flex items-center gap-5">
            <Link
              href={
                "https://docs.google.com/document/d/1WM_7wIGpVMtWMR_wrb0HEoikiMgO8DHR-WJfeCvSv4E/edit?usp=drivesdk"
              }
            >
              <button className="bg-white text-black py-3 px-4 rounded-full text-sm font-semibold hover:bg-slate-300 animate-jump-in animate-delay-200 animate-once">
                Download CV
              </button>
            </Link>
            <Link href={"/experience"}>
              <button className="text-sm hover:text-slate-200 font-semibold text-[#c79aff] py-4 px-4 rounded-full transition-transform hover:translate-x-1 motion-reduce:transform-none">
                See experience
              </button>
            </Link>
          </div>
        </div>

        <div className="bg-[rgb(159,83,254)] w-50 h-50 rounded-full p-2  md:bg-purple-500">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full items-center justify-center overflow-hidden">
            <Image
              src={labi}
              alt="my profile picture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* frameworks */}
      <div className=" h-screen flex flex-col gap-20 items-center justify-center">
        <p className="framework list text-[#c79aff] text-6xl">Javascript</p>
        <p className="framework list text-[#9f53fe] text-6xl">React</p>
        <p className="framework list text-[#6105d6] text-6xl">Next</p>
      </div>

      {/* usedtech */}
      <div className="flex flex-col md:ml-[-100px] lg:ml-[-550px] justify-center items-center px-4 md:px-56">
        <p className="font-thin w-[300px] text-3xl md:text-5xl md:w-[600px] text-white ">
          These are the technologies that I&apos;ve been using{" "}
        </p>

        {/* all cards     */}
        <div></div>
        <div className="overflow-x-auto lg:overflow-x-hidden w-full">
          <div className="flex gap-20 min-w-max py-20 mb-10 ml-[5rem] lg:ml-[30rem] md:ml-[8rem]">
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
                  <Image src={vitelogo} alt="vite logo" className="w-5" />
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
                  <RiJavascriptFill className="icon text-yellow-300" />
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

            {/* card 3 */}
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

      {/* slider */}
      {/* <div className="snap-x px-10 text-black py-4 gap-2 items-center flex">
  <div className="snap-normal snap-center bg-[#c3c99e] rounded-2xl items-center gap-2">
    <div className="px-4 py-10">
      <SiJavascript className="text-[#dbf531] bg-black text-lg"/>
      <p>Javascript</p>
    </div>
  </div>
  <div className="snap-normal snap-center bg-[#7d9ca5] rounded-2xl">
  <div className="px-4 py-10">
      <FaReact className="text-[#00ffff]"/>
      <p>React</p>
    </div>
  </div>
</div> */}

      {/* footer */}
      <div>
        <footer className="flex justify-center items-center mt-3">
          <div>
            <div className="flex w-full md:gap-[400px] lg:gap-[680px] items-center bg-gray-900 md:py-3 py-4 rounded-full">
              <p className="hidden md:block text-gray-200 px-8 md:px-12 md:font-extralight font-medium md:text-base text-lg">
                Connect with me
              </p>
              <p className="md:hidden text-gray-200 px-8 md:px-12 md:font-extralight font-medium md:text-base text-lg">
                Let&apos;s connect
              </p>

              <div className="flex gap-3 items-center text-[#c79aff] px-12">
                <a
                  href="https://github.com/Labi-Joy"
                  target="_blank"
                  className="hover:text-white"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/joy-eden-093a20305"
                  target="_blank"
                  className="hover:text-white"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="mailto:joyayoeden@gmail.com"
                  target="_blank"
                  id="email"
                  className="hidden lg:block hover:text-white"
                >
                  <IoMail />
                </a>
                <a
                  href="https://x.com/labi_EJ"
                  target="_blank"
                  className="hover:text-white"
                >
                  <FaTwitter />
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
