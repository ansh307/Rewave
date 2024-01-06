import { Socials } from "@/constants";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] top-0 bg-[#03001417]  z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div className="w-full h-full flex flex-row items-center m-auto ">
          <a
            href="#about-me"
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image
              src="/RewaveLogoF.png"
              alt="logo"
              width={70}
              height={70}
              className="cursor-pointer hover:animate-slowspin"
            />

            <span className="font-bold  hidden md:block text-gray-300">
              Rewave
            </span>
          </a>

          <div className="w-[400px] h-full flex flex-row items-center justify-between md:mr-20">
            <div className="flex items-center justify-around w-full h-auto  bg-[#0300145e] mr-[15px] px-[20px] py-[10px] text-gray-200">
              <a href="#projects" className="font-bold cursor-pointer">
                Solutions
              </a>
              <a href="#about-me" className="font-bold cursor-pointer">
                About
              </a>
              <a href="#skills" className="font-bold cursor-pointer">
                Contact
              </a>
              <a href="#about-me" className="text-gray-400 font-bold cursor-pointer">
                Get Started!
              </a>
            </div>
          </div>
        </div>


        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
