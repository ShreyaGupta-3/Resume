import React from "react";

// import Profile from "../../public/profile.png";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
import { BsGithub, BsInstagram } from "react-icons/bs";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-40 pb-20 bg-blue-300 "
      >
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mt-20 mb-20 md:mt-24 space-y-2 ">
            <span className="text-xl">I'm Shreya Gupta.</span>
            <div className="flex space-x-1 text-2xl md:text-4xl ">
              <h1>A </h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold mb-20"
                strings={["Developer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-10 md:space-y-0">
              <div className="  space-y-2 ">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100053356901888&mibextid=ZbWKwL" target="_blank">
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/shreya-gupta-b48908287" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ShreyaGupta-3" target="_blank">
                      <BsGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/shreya.gupta_____" target="_blank">
                      <BsInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className=" md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={Profile}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div> */}
        </div>
      </div>

     
    </>
  );
}

export default Home;