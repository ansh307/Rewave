"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const ServicesText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center '>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] flex text-white font-medium mt-[20px] text-center mb-[15px]'
      >
        <h1
          className='text-6xl'
        >
          Empower Your {" "}
          <span className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            Success
          </span>

        </h1>

      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-2xl text-gray-400 mb-10 mt-[10px] text-center'
      >
        Streamline, Collaborate, Achieve with Rewave
      </motion.div>
    </div>
  )
}

export default ServicesText;
