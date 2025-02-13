"use client"
import React from "react";
// import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, desVariants } from "../animation";  
import Form from "@/app/components/Form";
import Slider from "@/app/components/HeroSlider";

export default function HeroSection() {

  return (
    <>
     <section className="py-4 lg:py-0 mt-20 md:mt-0 lg:mt-28 bg-gradient-to-bl from-white to-white">

      <motion.div
        variants={""}
        initial="offscreen"
        animate="onscreen"
        className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 grid lg:grid-cols-2 lg:items-center gap-10"
      >
      {/* Parallax Background with Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url(/airplane.png)',
        }}
        animate={{
          y: ['0%', '5%'],  
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 10,
            ease: "easeInOut",
          },
        }}
        variants={containerVariants(0.4)}
      >
        
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </motion.div>

      {/* Left Section (Text) */}
      <motion.div
        variants={containerVariants(0.4)}
        className="flex flex-col space-y-8 lg:space-y-6 items-center text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto relative z-10 mb-0 lg:mb-14"
      >
        <img
            src="/1.gif" 
            alt="Work in Germany"
            className="w-[24rem] lg:w-[70rem] h-auto mt-0 items-center" 
          />
  

            <img
              src="/award.png" 
              alt="Work in Germany"
              className="w-[23rem] lg:w-[27rem] h-[7rem] items-center" 
            />
<Slider/>
       
        <motion.p
          variants={desVariants}
          className="flex text-gray-200 tracking-tight text-center text-xs lg:text-base md:font-medium max-w-xs mx-auto lg:max-w-xl"
        >
          Being India&apos;s Most Trusted Brand (2022 & 2024) and the Global Icon Award (2023), we do not just walk on the success trails; we make them. Your international aspirations are guided and managed at VJC Overseas with our track record and absolute commitment.
        </motion.p>
       
       
      {/* Slider Section */}
      {/* <div className="mt-0 text-center">
      <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 px-6 rounded-xl shadow-lg overflow-hidden w-[28rem] h-[6rem] mx-auto">

        <h2 className="text-lg font-bold mb-2 relative z-10 uppercase">Explore Our Visa Services</h2>

        <div className="relative z-10 flex justify-center items-center">
          <Link
            href={sliderData[currentSlide].link}
            className="text-sm font-semibold tracking-wide italic bg-white text-gray-800 px-8 py-2 rounded-lg shadow-md hover:bg-orange-100 hover:scale-105 transition-transform duration-300 text-center w-[24rem] truncate"
          >
            {sliderData[currentSlide].text}
          </Link>
        </div>
      </div>
    </div> */}




      </motion.div>

      {/* Right Section (Image and Form) */}
      <motion.div
        variants={containerVariants(0.8)}
        initial="offscreen"
        animate="onscreen"
        className="z-20"
      >
<div className="flex justify-center items-center">
  <Form />
</div>


      </motion.div>
    </motion.div>
  </section>
    </>
  );
}

 {/* <motion.h1
          variants={titleVariants}
          className="font-semibold uppercase leading-tight text-center text-teal-950 text-4xl sm:text-5xl lg:text-[3.50rem]"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-orange-700 to-orange-300">
          Your Dreams Are Our Blueprint for Success!
          </span>
        </motion.h1> */}

         {/* <Text/> */}
        {/* <motion.div
          variants={containerVariants(0.6)}
          className="hidden sm:flex flex-col sm:flex-row items-center justify-center lg:justify-center gap-4 w-full"
        >
          <Link
            href="#"
            className="px-6 items-center h-12 rounded-lg bg-orange-600 text-white duration-300 ease-linear flex justify-center w-[15rem] lg:w-full transform hover:scale-105 transition-transform"
          >
            Get started
          </Link>
          <Link
            href="#"
            className="px-6 items-center h-12 rounded-lg text-orange-700 border border-gray-100 bg-gray-100 duration-300 ease-linear flex justify-center w-[15rem] lg:w-full transform hover:scale-105 transition-transform"
          >
            Book a call
          </Link>
        </motion.div> */}
         