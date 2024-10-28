import React from "react";
import Link from "next/link";
// import { global } from "styled-jsx/css";
import { FaGithub, FaReact, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

interface EducardList {
  instutution: string;
  cert: string;
  date: string;
  location: string;
  time: string;
  status: string;
  span: string;
}

const Educard: React.FC<EducardList> = ({
  instutution,
  cert,
  date,
  location,
  time,
  status,
  span,
}) => {
  return (
    <>
      <div className="frameworks ease-in px-4 py-10 md:p-10 flex flex-col justify-center items-center">
        <div className="border-2 border-slate-700 py-7 px-10 rounded-3xl md:flex md:flex-row flex flex-col gap-10 md:gap-50 md:items-center">
          <div className="md:w-[600px]">
            <h4 className="text-xl md:text-lg">{instutution}</h4>
            <h6 className="text-[#c79aff] font-extralight text-lg md:text-sm">
              {cert}
            </h6>
            <div className="flex items-center gap-2 text-sm md:text-xs font-thin mt-3 text-slate-300">
              <p>{date}</p>{" "}
              <div className="h-1 w-1 rounded-full bg-green-300"></div>{" "}
              <p>{time}</p>
            </div>
            <p className="text-xs font-thin text-slate-300">{location}</p>
          </div>

          <div className="md:w-[] text-xl md:text-base text-green-300 cursor-pointer hover:text-green-200 font-extralight">
            {status}
            <span hidden>{span}</span>
          </div>
        </div>
      </div>
    </>
  );
};

const page = () => {
  return (
    <>
      {/* navbar */}
      <header className="text-[#c79aff] py-5 cursor-pointer z-10 flex justify-center fixed top-0 left-0 right-0 backdrop-blur-xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit border-gray-300 bg-gradient-to-b from-zinc-200">
        <nav className="flex flex-col md:flex-row items-center gap-3 md:gap-10 bg-gray-900 py-4 md:py-3 px-8 rounded-full">
          <ul className="flex gap-5 md:gap-10 ">
            <Link href={"/"}>
              <li className="hover:text-white">about me</li>
            </Link>
            <Link href={"/experience"}>
              {" "}
              <li className="hover:text-white">experience</li>
            </Link>
            <li className="hover:text-[#c79aff] text-white">education</li>
          </ul>
          <div className="hidden md:flex gap-3 md:gap-5 items-center">
            <a href="https://github.com/Labi-Joy" target="_blank" className="hover:text-white">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/joy-eden-093a20305"
              target="_blank"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:joyayoeden@gmail.com" target="_blank" id="email" className="hover:text-white">
              <IoMail />
            </a>
          </div>
        </nav>
      </header>

      {/* educationstat */}
      <div className="mt-32 mb-10 md:40 border-gray-900 rounded-xl">
        <Educard
          instutution="Osun State University"
          cert="Second Class Hons. Bsc Physiology"
          date="DEC 2019"
          location="Osun State, Osogbo"
          time="SEPT 2023"
          status="Veiw Certificate"
          span=""
        />
        <Educard
          instutution="Udemy"
          cert="Certificate in Advanced Javascript (ES6+)"
          date="SEPT 2024"
          location="Udemy"
          time="PRESENT"
          status="In Progress"
          span=""
        />
        <Educard
          instutution="Free Code Camp"
          cert="Certificate in CSS In-depth (CSS3)"
          date="SEPT 2024"
          location="{ Free-code-camp }"
          time="PRESENT"
          status="In Progress"
          span="io"
        />
        <Educard
          instutution="Vergold"
          cert="Certificate of Frontend Internship Learning"
          date="FEB 2024"
          location="Akobo, Ibadan"
          time="APRIL 2024"
          status="Veiw Certificate"
          span=""
        />
        <Educard
          instutution="Cousera"
          cert="Certificate in Introduction to Front-end (web2)"
          date="MARCH 2024"
          location="Online Learning"
          time="MARCH 2024"
          status="Veiw Certificate"
          span="io"
        />
      </div>

      {/* footer */}
      <div>
        <footer className="flex justify-center items-center mt-3">
          <div>
            <div className="flex w-full md:gap-[400px] lg:gap-[600px] items-center bg-gray-900 md:py-3 py-4 rounded-full">
              <p className="hidden md:block text-gray-200 px-8 md:px-12 md:font-extralight font-medium md:text-base text-lg">
                Connect with me
              </p>
              <p className="md:hidden text-gray-200 px-8 md:px-12 md:font-extralight font-medium md:text-base text-lg">
                Let&apos;s connect
              </p>

              <div className="flex gap-3 items-center text-[#c79aff] px-12">
                <a href="https://github.com/Labi-Joy" target="_blank" className="hover:text-white">
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
                <a href="https://github.com/Labi-Joy" target="_blank" className="hover:text-white">
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
