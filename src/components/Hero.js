'use client'
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { UIButton } from "./UIButton";
import { motion  } from "framer-motion";

export function Hero() {
  return (
    <div className="h-[65rem] w-full rounded-md flex flex-col md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <motion.h1 
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Race Recharge Retread
        </motion.h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Explore the skies with Avion, your premier aviation experience.
        </p>
      </div>
      <div className="">
        <UIButton/>
      </div>

      <div className="w-full mt-20 text-center flex justify-center items-center">

      <img
        src="https://teamaveon.org/assets/Car-BUIPROzh.png"
        alt="Avion Car Image"
        />
        {/* A 3D Model will be added instead */}
        </div>
    </div>
  );
}
