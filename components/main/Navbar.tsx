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

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY;
      const targetScroll = offsetTop - /* optional: adjust for fixed header */ 65;
      const duration = 500; // in milliseconds

      const startTime = performance.now();

      const animateScroll = (currentTime: number): void => {
        const elapsed = currentTime - startTime;
        const ease = easeInOutCubic(elapsed, 0, 1, duration);

        window.scrollTo(0, window.scrollY + ease * (targetScroll - window.scrollY));

        if (elapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };


  const easeInOutCubic = (t : number, b : number, c : number, d : number) : number => {
    // easing function for smooth scroll
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
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

            <div className="w-[400px] h-full flex flex-row items-center justify-between md:mr-20 z-50">
              <div className="flex items-center justify-around w-full h-auto  bg-[#0300145e] mr-[15px] px-[20px] py-[10px] text-gray-200">
                <a
                  href="#Solutions"
                  className="font-thin cursor-pointer"
                  onClick={() => scrollToSection("Solutions")}
                >
                  Solutions
                </a>
                <a
                  href="#Services"
                  className="font-thin cursor-pointer"
                  onClick={() => scrollToSection("Services")}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="font-thin cursor-pointer"
                  onClick={() => scrollToSection("about")}
                >
                  About
                </a>
                <a
                  href="#about"
                  className="font-thin cursor-pointer"
                  onClick={() => scrollToSection("about")}
                >
                  Contact
                </a>
                <a
                  href="#get-started"
                  className="text-gray-400 font-thin cursor-pointer"
                  onClick={() => scrollToSection("get-started")}
                >
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
