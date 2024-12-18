import React from "react";
import { BsGithub } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-blue-200">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=100053356901888&mibextid=ZbWKwL" target="_blank">
                      <FaFacebook className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/shreya-gupta-b48908287" target="_blank">
                      <FaLinkedinIn className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ShreyaGupta-3" target="_blank">
                      <BsGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/shreya.gupta_____" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-l font-bold">Made with ❤️ by Shreya</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;