"use client"

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import SocialModal from "../sub/SocialModal"
import { socialHandles } from "@/constants";


const Navbar = () => {
  const [showSocialModal, setShowSocialModal] = useState(false);

  const handleCloseSocialModal = () => {
    setShowSocialModal(false);
  };

  return (
    <>

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

              <span className="font-bold  hidden md:block text-[#ba77ff]">
                Rewave
              </span>
            </a>

            <div className="w-[400px] h-full flex flex-row items-center justify-between md:mr-20">
              <div className="flex items-center justify-around w-full h-auto  bg-[#0300145e] mr-[15px] px-[20px] py-[10px] text-gray-200">
                <a href="#projects" className="font-thin cursor-pointer">
                  Solutions
                </a>
                <a href="#about-me" className="font-thin cursor-pointer">
                  About
                </a>
                <a href="#skills" className="font-thin cursor-pointer">
                  Contact
                </a>
                <a href="#about-me" className="text-gray-400 font-thin cursor-pointer">
                  Get Started!
                </a>
              </div>
            </div>
          </div>


          <div className="flex flex-row gap-5 z-50">
            {Socials.map((social) => (
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
                onClick={() => {
                  setShowSocialModal(true)
                }}
              />
            ))}
          </div>
        </div>
        <SocialModal isVisible={showSocialModal} onClose={handleCloseSocialModal}>
          <div className="flex justify-center">
            <div className="flex flex-col gap-2 text-center">
              <p className="text-lg text-white font-semibold mb-4">Social Handles</p>
              {socialHandles.map((handle, index) => (
                <div key={index} className="flex flex-row gap-2">
                  <Image
                    src={handle.imagePath}
                    alt={handle.name}
                    key={handle.name}
                    width={24}
                    height={24}
                  />
                  <a
                    key={index}
                    href={handle.url}
                    className="text-white hover:underline transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    {handle.name}
                  </a>
                </div>
              ))}
            </div>
          </div>

        </SocialModal>
      </div>

    </>
  );
};

export default Navbar;
