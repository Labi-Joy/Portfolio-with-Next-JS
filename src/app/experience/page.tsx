import React from "react";
import Link from "next/link";
// import { global } from "styled-jsx/css";
import { FaGithub, FaReact, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

interface XpcardList {
  role: string;
  worktype: string;
  date: string;
  location: string;
  time: string;
  company: string;
  description1: string;
  description2: string;
  description3: string;
  description4: string;
}

const Xpcard: React.FC<XpcardList> = ({
  role,
  worktype,
  date,
  location,
  time,
  company,
  description1,
  description2,
  description3,
  description4,
}) => {
  return (
    <>
      <div className="px-4 py-10 md:py-10 lg:px-40 flex flex-col justify-center items-center">
        <div className="bg-gray-900 py-7 px-10 rounded-3xl md:flex md:flex-row flex flex-col gap-6 md:gap-0">
          <div className="md:w-[40%]">
            <h4 className="text-xl md:text-lg">{role}</h4>
            <h6 className="text-[#c79aff] font-extralight text-lg md:text-sm">
              {worktype}
            </h6>
            <div className="flex items-center gap-2 text-sm md:text-xs font-thin mt-3 text-slate-300">
              <p>{date}</p>{" "}
              <div className="h-1 w-1 rounded-full bg-green-300"></div>{" "}
              <p>{time}</p>
            </div>
            <p className="text-xs font-thin text-slate-300">{location}</p>
          </div>

          <div className="md:w-[60%]">
            <p className="text-[#c79aff] text-xl font-semibold md:text-sm md:font-medium">
              {company}
            </p>
            <div className="mt-4 flex flex-col gap-4 font-extralight text-sm text-slate-300">
              <h4>{description1}</h4>
              <h4>{description2}</h4>
              <h4>{description3}</h4>
              <h4>{description4}</h4>
            </div>
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
      <div className="mt-32 px-10 flex flex-col gap-6 justify-center items-center">
        <h4 className="w-[full] text-sm md:text-base md:w-[500px] text-center font-extralight px-8 md:px-4 lg:px-0">
          {" "}
          &lt; Get to know me better and explore my journey
          as a <strong className="md:block">Front-End Software Engineer  <span className="font-extralight">/&gt;</span></strong> {" "}
        </h4>
        <button className="bg-white text-black py-2 px-6 rounded-full text-xs font-semibold hover:bg-slate-300 animate-jump-in animate-delay-300 animate-once">
          Download CV
        </button>
      </div>

      {/* experience cards */}
      <div>
        <Xpcard
          role="Front-end Software Developer"
          worktype="Hybrid"
          date="July 2024"
          location="OYO STATE - NIGERIA"
          time="August 2024"
          company="Cogito"
          description1="Hired as the Team Lead Front-end developer to build an in-house project for the commpany"
          description2=""
          description3="Engaged team meambers to improve and increase production speed by 25% while reporting 
                        to the Overall Front-end Team Lead ensuring to get the job done fast and in good standard
                        to enhance user experience"
          description4=""
        />
        <Xpcard
          role="Front-end Software Developer"
          worktype="Contract"
          date="June 2024"
          location="IBADAN - NIGERIA"
          time="Present"
          company="Doorstep Groceries"
          description1=" Designed and developed an online grocery shopping website to help its users get 
                        their groceries without stress at the comfort of their home."
          description2="I handled the Front-end part of the project. It features interactive elements and a 
                        responsive layout."
          description3="Assisted in redesigning the company's website, improving its responsiveness and visual appearance"
          description4=""
        />
        <Xpcard
          role="Front-end Developer Intern"
          worktype="Hybrid"
          date="Feb 2024"
          location="AKOBO, IBADAN - NIGERIA"
          time="April 2024"
          company="Vergold"
          description1="Finished internship as one of the best and dedicated Front-end interns at the comapny."
          description2=""
          description3="Wrote clean, maintainable codes. And also participated in code reviews to ensure good quality
                        and product delivery"
          description4=""
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
                Let's connect 
              </p>

              <div className="flex gap-3 items-center text-[#c79aff] px-12">
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
                  className='hidden md:block'
                >
                  <IoMail />
                </a>
                <a href="https://github.com/Labi-Joy" target="_blank">
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
