"use client";

import React from "react";
import { useState } from 'react';
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { notify, submitEmail } from '@/utils/emailUtils';


const HeroContent = () => {

  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    submitEmail(
      email,
      () => {
        console.log('Email submitted successfully');
        setEmail('');
        notify(true);
      },
      () => {
        console.error('Failed to submit email');
        notify(false);
      }
    );
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-40 mt-40 w-full z-[20]"
    >

      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">

        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] ml-4 border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Welcome to Rewave - Elevate Your Productivity
          </h1>

        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-5 text-8xl font-bold text-white max-w-[1050px] ml-4 w-auto h-auto"
        >
          <span>
            Unlock Your Potential with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Rewave
            </span>
          </span>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.8)}
          className="text-xl text-gray-400 max-w-[1050px] ml-4 w-auto h-auto"
        >
          Technological change brings organizational change.
        </motion.div>


        <motion.div
          variants={slideInFromLeft(0.8)}
          className="flex flex-row  items-start mt-10 ml-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pr-40 pl-5 py-2 mb-4 border rounded-l"
          />
          <button
            onClick={handleEmailSubmit}
            style={{ padding: "0.5rem 1.5rem 0.57rem 1.6rem", background: '#7040C8', color: '#FFFFFF', fontWeight: 'bold', borderRadius: '0 0.25rem 0.25rem 0', cursor: 'pointer' }}>
            Sign up
          </button>
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </motion.div>

        {/* <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[720px]"
        >
          At Rewave, we understand the challenges of modern life. Whether you're an individual striving for personal efficiency or a team aiming for collaborative success,
          our cutting-edge services is designed to streamline your workflow, boost your productivity, and transform the way you manage tasks.
        </motion.p> */}
        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a> */}
      </div>

      {/* <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div> */}
    </motion.div>
  );
};

export default HeroContent;
